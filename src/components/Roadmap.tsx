"use client";

import React, { useEffect, useRef } from 'react';
import './Roadmap.css';

const Roadmap = () => {
    const progressBarRef = useRef<HTMLDivElement>(null);
    const timelineRef = useRef<HTMLDivElement>(null);
    const phasesRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const phases = phasesRef.current.filter(Boolean);
        const progressBar = progressBarRef.current;
        const timeline = timelineRef.current;

        if (!progressBar || !timeline) return;

        const updateTimeline = () => {
            const timelineRect = timeline.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const currentPhase = document.querySelector('.phase[data-status="current"]');

            if (!currentPhase) return;

            const currentPhaseRect = currentPhase.getBoundingClientRect();
            const maxScrollDistance = currentPhaseRect.top - timelineRect.top + 20;

            const startPoint = windowHeight * 0.5;
            const scrollPosition = startPoint - timelineRect.top;

            let heightPx = Math.max(0, Math.min(maxScrollDistance, scrollPosition));
            progressBar.style.height = `${heightPx}px`;

            phases.forEach(phase => {
                if (!phase) return;
                const rect = phase.getBoundingClientRect();
                if (rect.top < windowHeight * 0.6 && rect.bottom > windowHeight * 0.4) {
                    phase.classList.add('active');
                    phase.classList.add('visible');
                } else {
                    phase.classList.remove('active');
                }
            });
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        phases.forEach(phase => {
            if (phase) observer.observe(phase);
        });

        window.addEventListener('scroll', updateTimeline);
        updateTimeline();

        return () => {
            window.removeEventListener('scroll', updateTimeline);
            phases.forEach(phase => {
                if (phase) observer.unobserve(phase);
            });
        };
    }, []);

    const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(1000px) rotateX(${y * -10}deg) rotateY(${x * 10}deg) translateY(-5px)`;
    };

    const handleCardMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = e.currentTarget;
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    };

    const addToPhases = (el: HTMLDivElement | null) => {
        if (el && !phasesRef.current.includes(el)) {
            phasesRef.current.push(el);
        }
    };

    return (
        <div id="roadmap-integration">
            <div className="container">
                <header>
                    <h1 className="headline-serif">Rez Roadmap</h1>
                </header>

                <div className="timeline" ref={timelineRef}>
                    <div className="timeline-progress-bar" ref={progressBarRef} id="timelineProgress"></div>

                    {/* Phase 1 */}
                    <div className="phase" data-status="completed" ref={addToPhases}>
                        <div className="phase-marker">
                            <i className="ri-information-fill"></i>
                        </div>
                        <div className="phase-content">
                            <div className="phase-header">
                                <div className="phase-info">
                                    <span className="phase-label">Phase 01</span>
                                    <h2>Foundation & Tested Autonomy</h2>
                                </div>
                                <span className="status-badge released">Completed</span>
                            </div>

                            <div className="version-card" onMouseMove={handleCardMouseMove} onMouseLeave={handleCardMouseLeave}>
                                <div className="version-header">
                                    <span className="version-title">V0.1 – Initial Prototype</span>
                                    <span className="version-time">Q4 2025</span>
                                </div>
                                <span className="version-goal">Goal: Validate one-click AI-driven paper trading.</span>
                                <ul className="feature-list">
                                    <li className="feature-item done">
                                        <div className="check-box"></div><span>Built MVP for perpetuals paper trading with direct web access.</span>
                                    </li>
                                    <li className="feature-item done">
                                        <div className="check-box"></div><span>Conducted public demo and collected user feedback.</span>
                                    </li>
                                    <li className="feature-item done">
                                        <div className="check-box"></div><span>Confirmed strong demand for a simplified trading interface.</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="version-card" onMouseMove={handleCardMouseMove} onMouseLeave={handleCardMouseLeave}>
                                <div className="version-header">
                                    <span className="version-title">V0.2 – Testnet Beta Launch</span>
                                    <span className="version-time">Q1 2026</span>
                                </div>
                                <span className="version-goal">Goal: Transition to live on-chain execution.</span>
                                <ul className="feature-list">
                                    <li className="feature-item done">
                                        <div className="check-box"></div><span>Deployed on Hyperliquid Testnet with real trade execution.</span>
                                    </li>
                                    <li className="feature-item done">
                                        <div className="check-box"></div><span>Enabled multi-user support with individualized agent deployments.</span>
                                    </li>
                                    <li className="feature-item done">
                                        <div className="check-box"></div><span>Achieved 25–30% win rate in test scenarios.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Phase 2 */}
                    <div className="phase" data-status="current" ref={addToPhases}>
                        <div className="phase-marker">
                            <i className="ri-star-fill"></i>
                        </div>
                        <div className="phase-content">
                            <div className="phase-header">
                                <div className="phase-info">
                                    <span className="phase-label">Phase 02</span>
                                    <h2>Mainnet Foundations & Intelligence</h2>
                                </div>
                                <span className="status-badge current">Current Stage</span>
                            </div>

                            <div className="version-card" onMouseMove={handleCardMouseMove} onMouseLeave={handleCardMouseLeave}>
                                <div className="version-header">
                                    <span className="version-title">V0.3 – Private Mainnet Beta</span>
                                    <span className="version-time">Q1 2026+</span>
                                </div>
                                <span className="version-goal">Goal: Experimentation & verification of enhanced intelligence on mainnet.</span>
                                <ul className="feature-list">
                                    <li className="feature-item current">
                                        <div className="check-box"></div><span>Deployed Circuit Breakers v1 (AI deviation and volatility halts).</span>
                                    </li>
                                    <li className="feature-item current">
                                        <div className="check-box"></div><span>Enabled multi-agent deployments with customizable risk profiles.</span>
                                    </li>
                                    <li className="feature-item current">
                                        <div className="check-box"></div><span>Agent Architecture v2 with improved chain-of-thought reasoning.</span>
                                    </li>
                                    <li className="feature-item current">
                                        <div className="check-box"></div><span>Advanced quant R&D (proprietary algorithms & regime-switching).</span>
                                    </li>
                                    <li className="feature-item current">
                                        <div className="check-box"></div><span>Completed audit remediation and second audit cycle.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Phase 3 */}
                    <div className="phase" data-status="upcoming" ref={addToPhases}>
                        <div className="phase-marker">
                            <i className="ri-hexagon-fill"></i>
                        </div>
                        <div className="phase-content">
                            <div className="phase-header">
                                <div className="phase-info">
                                    <span className="phase-label">Phase 03</span>
                                    <h2>Multi-Chain Expansion & Aggregation</h2>
                                </div>
                                <span className="status-badge upcoming">H1 2027</span>
                            </div>

                            <div className="version-card" onMouseMove={handleCardMouseMove} onMouseLeave={handleCardMouseLeave}>
                                <div className="version-header">
                                    <span className="version-title">V0.4 – DEX Aggregation Layer</span>
                                    <span className="version-time">Q1–Q2 2027</span>
                                </div>
                                <span className="version-goal">Goal: Deliver venue-agnostic intelligent trading.</span>
                                <ul className="feature-list">
                                    <li className="feature-item planned">
                                        <div className="check-box"></div><span>Live integrations: Lighter and Ostium (GMX/dYdX).</span>
                                    </li>
                                    <li className="feature-item planned">
                                        <div className="check-box"></div><span>Introduced intelligent order routing for optimal pricing.</span>
                                    </li>
                                    <li className="feature-item planned">
                                        <div className="check-box"></div><span>Unified execution layer and cross-DEX portfolio view.</span>
                                    </li>
                                    <li className="feature-item planned">
                                        <div className="check-box"></div><span>Internal simulation environment for cross-venue testing.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Phase 4 */}
                    <div className="phase" data-status="upcoming" ref={addToPhases}>
                        <div className="phase-marker">
                            <i className="ri-hexagon-fill"></i>
                        </div>
                        <div className="phase-content">
                            <div className="phase-header">
                                <div className="phase-info">
                                    <span className="phase-label">Phase 04</span>
                                    <h2>The Permissionless Marketplace</h2>
                                </div>
                                <span className="status-badge upcoming">H2 2027+</span>
                            </div>

                            <div className="version-card" onMouseMove={handleCardMouseMove} onMouseLeave={handleCardMouseLeave}>
                                <div className="version-header">
                                    <span className="version-title">V0.5 – Rez Arena Launch</span>
                                    <span className="version-time">Q3–Q4 2027</span>
                                </div>
                                <span className="version-goal">Goal: Establish a permissionless marketplace for intelligence.</span>
                                <ul className="feature-list">
                                    <li className="feature-item planned">
                                        <div className="check-box"></div><span>Enabled external quants to deploy strategies on Rez infrastructure.</span>
                                    </li>
                                    <li className="feature-item planned">
                                        <div className="check-box"></div><span>Released Strategy SDK and developer toolkit.</span>
                                    </li>
                                    <li className="feature-item planned">
                                        <div className="check-box"></div><span>Launched on-chain “Proof-of-Alpha” leaderboard.</span>
                                    </li>
                                    <li className="feature-item planned">
                                        <div className="check-box"></div><span>Introduced socialized liquidity pools and revenue sharing.</span>
                                    </li>
                                    <li className="feature-item planned">
                                        <div className="check-box"></div><span>Explored governance token for decentralization.</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="version-card" onMouseMove={handleCardMouseMove} onMouseLeave={handleCardMouseLeave}>
                                <div className="version-header">
                                    <span className="version-title">V0.6+ – Future Vision</span>
                                    <span className="version-time">2028+</span>
                                </div>
                                <ul className="feature-list">
                                    <li className="feature-item planned">
                                        <div className="check-box"></div><span>Additional perpetual DEX integrations.</span>
                                    </li>
                                    <li className="feature-item planned">
                                        <div className="check-box"></div><span>Cross-margin capabilities across strategies.</span>
                                    </li>
                                    <li className="feature-item planned">
                                        <div className="check-box"></div><span>Mobile application launch & Institutional analytics.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Roadmap;
