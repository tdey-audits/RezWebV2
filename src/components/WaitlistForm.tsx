'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, AlertCircle, X } from 'lucide-react';
import confetti from 'canvas-confetti';
import Image from 'next/image';

export default function WaitlistForm() {
    const [email, setEmail] = useState('');
    const [isPending, setIsPending] = useState(false);
    const [state, setState] = useState<{ success: boolean; message: string } | null>(null);
    const [showSuccess, setShowSuccess] = useState(false);
    const router = useRouter();

    const triggerConfetti = () => {
        const end = Date.now() + 4 * 1000;
        const colors = ["#000000", "#ffffff", "#888888"];

        (function frame() {
            confetti({
                particleCount: 3,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: colors,
            });
            confetti({
                particleCount: 3,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: colors,
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        })();

        // Center burst
        setTimeout(() => {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 },
                colors: colors,
            });
        }, 500);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsPending(true);
        setState(null);

        try {
            const response = await fetch('/api/waitlist', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const result: { success: boolean; message: string } = await response.json();

            if (result.success) {
                setShowSuccess(true);
                triggerConfetti();
                // Smooth fade out then redirect after 4 seconds
                setTimeout(() => {
                    setShowSuccess(false);
                    // Wait for exit animation to complete before redirecting
                    setTimeout(() => {
                        window.location.href = '/';
                    }, 500);
                }, 4000);
            } else {
                setState(result);
            }
        } catch (error) {
            setState({ success: false, message: 'An error occurred. Please try again.' });
        } finally {
            setIsPending(false);
        }
    };

    return (
        <div className="flex flex-col items-center w-full mt-0 gap-6">
            <form
                className="flex flex-row items-center justify-center gap-3 w-full max-w-[800px]"
                onSubmit={handleSubmit}
            >
                <label className="sr-only" htmlFor="email">Email address</label>
                <input
                    className="flex-1 min-w-[280px] bg-white border border-gray-200 !pl-[1.75rem] !pr-4 h-[42px] text-[0.95rem] text-gray-900 placeholder-gray-400 focus:outline-none focus:border-black transition-all rounded-none appearance-none"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button
                    className="btn launch-app-btn !rounded-none cursor-pointer whitespace-nowrap !h-[42px] !py-0 !px-[1.75rem] text-[0.95rem]"
                    type="submit"
                    disabled={isPending}
                >
                    {isPending ? (
                        <Loader2 className="w-4 h-4 animate-spin mx-auto" />
                    ) : (
                        "JOIN WAITLIST"
                    )}
                </button>
                <a
                    href="https://www.google.co.in"
                    className="btn launch-app-btn !rounded-none cursor-pointer whitespace-nowrap !h-[42px] !py-0 !px-[1.75rem] text-[0.95rem]"
                >
                    Have an invite code?
                </a>
            </form>

            {/* Inline Error Message */}
            <AnimatePresence>
                {state?.success === false && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-red-500 text-[0.95rem] flex items-center gap-1.5"
                    >
                        <AlertCircle className="w-4 h-4" />
                        <span>{state.message}</span>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Success Modal */}
            <AnimatePresence>
                {showSuccess && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/60 backdrop-blur-md"
                            onClick={() => window.location.href = '/'}
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative bg-[#EAEAEA] w-full max-w-[400px] shadow-[0_25px_60px_rgba(0,0,0,0.4)] flex flex-col items-center"
                        >
                            {/* Image with padding on all sides - inline style to override global reset */}
                            <div className="w-full" style={{ padding: '20px', paddingBottom: '0' }}>
                                <div className="w-full relative aspect-square overflow-hidden">
                                    <Image
                                        src="/pepeRez.png"
                                        alt="Thank you"
                                        fill
                                        className="object-cover"
                                        priority
                                        unoptimized
                                    />
                                </div>
                            </div>

                            {/* Text Content - inline styles to override global h2/p rules */}
                            <div className="w-full text-center" style={{ paddingTop: '24px', paddingBottom: '40px' }}>
                                <h2 style={{
                                    fontFamily: 'var(--font-serif)',
                                    fontSize: '2rem',
                                    lineHeight: '1.1',
                                    marginBottom: '8px',
                                    color: '#1D1D1F',
                                    whiteSpace: 'nowrap'
                                }}>
                                    Thank you for Joining!
                                </h2>
                                <p style={{
                                    fontSize: '0.95rem',
                                    color: '#1D1D1F',
                                    marginBottom: '0'
                                }}>
                                    we'll be in touch
                                </p>
                            </div>

                            <button
                                onClick={() => window.location.href = '/'}
                                className="absolute top-7 right-7 text-white/40 hover:text-white/80 transition-colors z-10"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
