"use client";

import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ColorBends from '../../components/ui/ColorBends';
import { ShineBorder } from '../../components/ui/shine-border';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

export default function ManifestoPage() {
    useEffect(() => {
        // Initialize Lenis smooth scrolling
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });

        // Connect Lenis with GSAP ScrollTrigger
        lenis.on('scroll', ScrollTrigger.update);

        const updateLenis = (time: number) => {
            lenis.raf(time * 1000);
        };

        gsap.ticker.add(updateLenis);

        gsap.ticker.lagSmoothing(0);

        // Cleanup on unmount
        return () => {
            lenis.destroy();
            gsap.ticker.remove(updateLenis);
        };
    }, []);

    return (
        <div className="App">
            <Navbar />
            <section className="manifesto-page pt-24 pb-24 min-h-screen relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <ColorBends
                        colors={["#757575ff"]}
                        rotation={30}
                        speed={0.3}
                        scale={1.2}
                        frequency={1.4}
                        warpStrength={1}
                        mouseInfluence={0.8}
                        parallax={0.5}
                        noise={0.1}
                    />
                </div>
                <div className="w-full max-w-6xl mx-auto px-6 md:px-12 relative z-10">
                    <h1 className="text-5xl md:text-8xl font-bold mb-12 md:mb-16 text-center tracking-tight">Manifesto</h1>
                    <div className="w-full relative rounded-3xl overflow-hidden">
                        <div className="w-full bg-black/47 backdrop-blur-xl rounded-3xl shadow-2xl relative z-10 p-8">
                            <p className="mb-4 text-[1.1rem] font-medium text-white leading-relaxed">
                                Massive chunks of data are being emitted by blockchains every second. And AI needs extensive datasets to be trained. This opens up an obvious opportunity to use blockchain as the data layer for DeFi. The amalgamation of DeFi and AI is termed as DeFAI Intelligent DeFi. That is what we are building at rezLabs.
                            </p>
                            <p className="mb-4 text-[1.1rem] font-medium text-white leading-relaxed">
                                With the increasing popularity and utility of Perpetuals and Prediction markets in DeFi, there's an obvious trend that it's only going to increase and get even more popular. But for a retail investor, the barrier to entry is high. It isn't just difficult to study complex market parameters; the entire experience is plagued by fragmented UX, requiring users to navigate disjointed interfaces and clunky processes.
                            </p>
                            <p className="mb-4 text-[1.1rem] font-medium text-white leading-relaxed">
                                This can be solved using AI agents. While many current products in the market are merely NLP based interfaces, we are innovating to build an AI-aided, fully automated, non-custodial platform.
                            </p>
                            <p className="mb-4 text-[1.1rem] font-medium text-white leading-relaxed">
                                Our AI agents are intelligent companions that place trades for you on the DEX. You simply deposit funds, choose your risk, stop/loss, and other simple parameters, and then let the agent do the heavy lifting. You don't have to think, study, or fight with bad UX the agent knows what it needs to do based on our tailor made algorithms and places the trades for you. Your portfolio grows while you sleep.
                            </p>
                            <p className="text-[1.1rem] font-medium text-white leading-relaxed">
                                Rez Labs would serve as the main R&D body and launch several products under it. That's why we call it "Labs". Our target is not just to implement agentic trading, but also to expand our scope to solve user friction and build products in the DeFAI space. Decentralized finance and AI are much newer tech which demands the need for continuous and steady research. We at Rez Labs understand the importance of R&D to develop bespoke products which sustain the ever-changing market of DeFi.
                            </p>
                        </div>
                        <ShineBorder
                            borderWidth={2}
                            duration={14}
                            shineColor={["#ffffff", "#9CA3AF", "#E5E7EB"]}
                            className="z-20"
                        />
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
