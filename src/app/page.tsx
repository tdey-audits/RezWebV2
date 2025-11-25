"use client";

import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import WhyRez from '../components/WhyRez';
import Mission from '../components/Mission';
import BigText from '../components/BigText';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
        });

        // Integrate Lenis with GSAP ScrollTrigger
        lenis.on('scroll', ScrollTrigger.update);

        const updateLenis = (time: number) => {
            lenis.raf(time * 1000);
        };

        gsap.ticker.add(updateLenis);

        gsap.ticker.lagSmoothing(0);

        return () => {
            lenis.destroy();
            gsap.ticker.remove(updateLenis);
        };
    }, []);

    return (
        <div className="App">
            <Navbar />
            <Hero />
            <WhyRez />
            <Mission />
            <BigText />
            <Footer />
        </div>
    );
}
