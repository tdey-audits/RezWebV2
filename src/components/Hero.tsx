import React from 'react';


import ColorBends from './ui/ColorBends';
import { AuroraText } from './ui/aurora-text';

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
                // transparent
                />
            </div>
            <div className="container hero-content relative z-10">
                <div className="hero-text">
                    <h1 className="hero-title">
                        The Future of Perps<br />
                        <span className="italic">
                            <AuroraText
                                colors={['#4B5563', '#6B7280', '#9CA3AF', '#71717A', '#52525B']}
                                speed={1.2}
                            >
                                is Autonomous
                            </AuroraText>
                        </span>
                    </h1>
                    <p className="hero-subtitle">
                        Rez is a non-custodial platform that automates perpetual trading using AI agents.
                    </p>
                    <div className="hero-buttons">
                        <a href="/try-beta" className="btn btn-primary">Try Beta</a>
                        <a href="https://www.papermark.com/view/cmj2tgzzd0004lb043vi5a6zb" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Read Litepaper</a>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Hero;
