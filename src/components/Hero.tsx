import React from 'react';


import ColorBends from './ui/ColorBends';
import { AuroraText } from './ui/aurora-text';

import WaitlistForm from './WaitlistForm';

const Hero = () => {
    return (
        <section className="hero relative overflow-hidden" id="hero">
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
            <div className="container hero-content relative z-10">
                <div className="hero-text">
                    <h1 className="hero-title">
                        Your personal Quant<br />
                        <span className="italic max-[280px]:text-[2.8rem] max-[260px]:text-[2rem]">
                            <AuroraText
                                colors={['#4B5563', '#6B7280', '#9CA3AF', '#71717A', '#52525B']}
                                speed={1.2}
                            >
                                for Perpetuals
                            </AuroraText>
                        </span>
                    </h1>
                    <p className="hero-subtitle">
                        Rez is a non-custodial platform that automates perpetual trading using agents.
                    </p>
                    <div className="hero-buttons flex flex-col items-center justify-center w-full">
                        <WaitlistForm />
                        <div className="flex items-center justify-center gap-2 mt-4">
                            <span className="text-gray-500 text-xs font-bold">BETA</span>
                            <span className="text-sm text-gray-500">live on</span>
                            <img src="/HL logo_dark.png" alt="Hyperliquid" className="h-5" />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Hero;
