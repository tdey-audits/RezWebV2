'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft } from 'lucide-react';
import ColorBends from '@/components/ui/ColorBends';

export default function JoinSuccessPage() {
    return (
        <main className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-white">
            {/* Background effect to match landing page */}
            <div className="absolute inset-0 z-0 opacity-40">
                <ColorBends
                    colors={["#757575ff"]}
                    rotation={30}
                    speed={0.1}
                    scale={1.5}
                    frequency={1.4}
                    warpStrength={1}
                />
            </div>

            <div className="container relative z-10 flex flex-col items-center text-center px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-8"
                >
                    <div className="inline-block bg-black text-white text-[10px] tracking-[0.3em] font-bold px-4 py-1.5 uppercase mb-6">
                        SUCCESS
                    </div>
                    <h1 className="text-5xl md:text-7xl font-light tracking-tight text-[#1D1D1F] mb-6">
                        You're on the list.
                    </h1>
                    <p className="text-xl text-[#86868B] max-w-lg mx-auto font-light leading-relaxed">
                        Welcome to the future of autonomous perpetual trading. We'll notify you as soon as early access opens.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="flex flex-col sm:flex-row items-center gap-6"
                >
                    <a
                        href="https://www.papermark.com/view/cmj2tgzzd0004lb043vi5a6zb"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-black text-white px-10 py-5 text-sm font-semibold tracking-widest uppercase hover:bg-neutral-800 transition-all flex items-center gap-3 shadow-xl"
                    >
                        Read Litepaper <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>

                    <Link
                        href="/"
                        className="text-[#1D1D1F] hover:text-black text-sm font-medium tracking-widest uppercase flex items-center gap-2 group border-b border-transparent hover:border-black transition-all py-1"
                    >
                        <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Home
                    </Link>
                </motion.div>

                <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 text-left max-w-4xl mx-auto border-t border-neutral-100 pt-12">
                    <div>
                        <h3 className="text-[10px] tracking-[0.2em] font-bold text-black uppercase mb-3">Autonomous</h3>
                        <p className="text-sm text-[#86868B] font-light">Advanced AI agents executing strategies 24/7 without human intervention.</p>
                    </div>
                    <div>
                        <h3 className="text-[10px] tracking-[0.2em] font-bold text-black uppercase mb-3">Non-Custodial</h3>
                        <p className="text-sm text-[#86868B] font-light">Maintain full control of your assets with decentralized security protocols.</p>
                    </div>
                    <div>
                        <h3 className="text-[10px] tracking-[0.2em] font-bold text-black uppercase mb-3">Performant</h3>
                        <p className="text-sm text-[#86868B] font-light">Institutional-grade execution with sub-millisecond latency on perpetuals.</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
