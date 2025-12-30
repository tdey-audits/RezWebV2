/// <reference types="@cloudflare/workers-types" />

// Cloudflare Pages Function for waitlist signup
// This runs on Cloudflare Workers alongside the static site

interface Env {
  NEXT_PUBLIC_SUPABASE_URL: string;
  SUPABASE_SERVICE_ROLE_KEY: string;
  RESEND_API_KEY: string;
}

interface WaitlistRequest {
  email: string;
  hp?: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  };

  try {
    const body: WaitlistRequest = await context.request.json();
    const { email, hp } = body;

    // 1. Bot Protection (Honeypot)
    if (hp && hp.length > 0) {
      return new Response(
        JSON.stringify({ success: true, message: "Signed up!" }),
        { status: 200, headers: corsHeaders }
      );
    }

    // 2. Email validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(
        JSON.stringify({ success: false, message: 'Invalid email address.' }),
        { status: 400, headers: corsHeaders }
      );
    }

    const supabaseUrl = context.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = context.env.SUPABASE_SERVICE_ROLE_KEY;
    const resendApiKey = context.env.RESEND_API_KEY;

    if (!supabaseUrl || !supabaseKey) {
      console.error('Missing Supabase configuration');
      return new Response(
        JSON.stringify({ success: false, message: 'Server configuration error.' }),
        { status: 500, headers: corsHeaders }
      );
    }

    // 3. Check for duplicates using Supabase REST API
    const checkResponse = await fetch(
      `${supabaseUrl}/rest/v1/waitlist?email=eq.${encodeURIComponent(email)}&select=id`,
      {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
        },
      }
    );

    const existing = await checkResponse.json();
    if (Array.isArray(existing) && existing.length > 0) {
      return new Response(
        JSON.stringify({ success: false, message: 'You are already on the list!' }),
        { status: 409, headers: corsHeaders }
      );
    }

    // 4. Insert into Supabase
    const insertResponse = await fetch(
      `${supabaseUrl}/rest/v1/waitlist`,
      {
        method: 'POST',
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=minimal',
        },
        body: JSON.stringify({ email }),
      }
    );

    if (!insertResponse.ok) {
      const errorText = await insertResponse.text();
      if (errorText.includes('23505')) {
        return new Response(
          JSON.stringify({ success: false, message: 'You are already on the list!' }),
          { status: 409, headers: corsHeaders }
        );
      }
      console.error('Database error:', errorText);
      return new Response(
        JSON.stringify({ success: false, message: 'Something went wrong. Please try again.' }),
        { status: 500, headers: corsHeaders }
      );
    }

    // 5. Send welcome email via Resend
    if (resendApiKey) {
      try {
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
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
          }),
        });
      } catch (emailError) {
        console.error('Email error:', emailError);
        // Don't fail the signup if email fails
      }
    }

    return new Response(
      JSON.stringify({ success: true, message: "You're on the list! Check your email." }),
      { status: 200, headers: corsHeaders }
    );

  } catch (err) {
    console.error('API error:', err);
    return new Response(
      JSON.stringify({ success: false, message: 'An unexpected error occurred.' }),
      { status: 500, headers: corsHeaders }
    );
  }
};

// Handle CORS preflight
export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
};
