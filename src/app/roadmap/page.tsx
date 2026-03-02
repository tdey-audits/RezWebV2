"use client";

import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ColorBends from '../../components/ui/ColorBends';
import Roadmap from '../../components/Roadmap';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

export default function RoadmapPage() {
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
        <div className="App overflow-x-hidden">
            <Navbar />
            <section className="roadmap-page min-h-screen relative flex flex-col items-center pt-32 pb-32 overflow-hidden">
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
                <div className="w-full relative z-10 flex flex-col items-center">
                    <Roadmap />
                </div>
            </section>
            <Footer />
        </div>
    );
}
