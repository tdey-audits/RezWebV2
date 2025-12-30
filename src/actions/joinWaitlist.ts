'use server';

import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseUrl.startsWith('http')) {
  console.error('❌ Error: NEXT_PUBLIC_SUPABASE_URL is missing or invalid in .env.local');
}
if (!supabaseKey) {
  console.error('❌ Error: SUPABASE_SERVICE_ROLE_KEY is missing in .env.local');
}

// createClient will throw if url is empty, so we conditionally create it
const supabaseAdmin = (supabaseUrl && supabaseKey) 
  ? createClient(supabaseUrl, supabaseKey)
  : null;

export async function joinWaitlist(formData: FormData) {
  const email = formData.get('email') as string;
  const honeypot = formData.get('hp') as string;

  // 1. Bot Protection (Honeypot)
  if (honeypot && honeypot.length > 0) {
    // Silently fail for bots
    return { success: true, message: "Signed up!" };
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, message: 'Invalid email address.' };
  }

  if (!supabaseAdmin) {
     console.error('Supabase Client not initialized due to missing keys.');
     return { success: false, message: 'Server configuration error.' };
  }

  try {
    // 2. Check for duplicates
    // Using admin client to bypass RLS "insert-only" if needed, 
    // or we can rely on unique constraint error from DB.
    // Let's try select first (requires service role if RLS blocks read)
    const { data: existing } = await supabaseAdmin
      .from('waitlist')
      .select('id')
      .eq('email', email)
      .single();

    if (existing) {
      return { success: false, message: 'You are already on the list!' };
    }

    // 3. Save to Supabase
    const { error: dbError } = await supabaseAdmin
      .from('waitlist')
      .insert([{ email }]);

    if (dbError) {
      if (dbError.code === '23505') { // Unique violation
         return { success: false, message: 'You are already on the list!' };
      }
      console.error('Database Error:', dbError);
      return { success: false, message: 'Something went wrong. Please try again.' };
    }

    // 4. Send Welcome Email
    const { error: emailError } = await resend.emails.send({
      from: 'Rez Labs <noreply@mail.rezlabs.org>',
      to: email,
      subject: 'Welcome to Rez Waitlist',
      html: `
        <div style="font-family: sans-serif; max-width: 520px; margin: 0 auto; padding: 40px 24px; color: #1a1a1a;">
          <h1 style="font-size: 24px; font-weight: 600; margin: 0 0 24px 0;">You're on the list.</h1>
          
          <p style="font-size: 16px; line-height: 1.6; margin: 0 0 24px 0;">
            Thanks for joining waitlist. We're building the next generation of autonomous trading systems designed to capture opportunities around the clock, so you don't have to.
          </p>
          
          <p style="font-size: 16px; line-height: 1.6; margin: 0 0 24px 0;">
            We'll reach out as soon as early access opens up.
          </p>
          
          <p style="font-size: 16px; line-height: 1.6; margin: 0 0 8px 0;">
            In the meantime, stay updated:
          </p>
          <p style="font-size: 16px; line-height: 1.6; margin: 0 0 4px 0;">
            Visit our website: <a href="https://rezlabs.org/" style="color: #0066cc; text-decoration: none;">rezlabs.org</a>
          </p>
          <p style="font-size: 16px; line-height: 1.6; margin: 0 0 32px 0;">
            Follow us on X: <a href="https://x.com/LabsRez" style="color: #0066cc; text-decoration: none;">@LabsRez</a>
          </p>
          
          <p style="font-size: 16px; line-height: 1.6; margin: 0 0 4px 0;">See you soon,</p>
          <p style="font-size: 16px; font-weight: 500; margin: 0;">Team Rez</p>
        </div>
      `,
    });

    if (emailError) {
      console.error('Email Error:', emailError);
      // Note: We still return success because they are in the DB.
    }

    return { success: true, message: "You're on the list! Check your email." };

  } catch (err) {
    console.error('Server Action Error:', err);
    return { success: false, message: 'An unexpected error occurred.' };
  }
}
