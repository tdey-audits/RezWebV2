"use client";

import React, { useEffect, useState, useCallback, useRef } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ColorBends from '../../components/ui/ColorBends';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Article {
    cover: string;
    coverWidth: number;
    coverHeight: number;
    category: string;
    title: string;
    author: string;
    date: string;
    tag: string;
    content: React.ReactNode;
}

const articles: Article[] = [
    {
        cover: '/blog-cover.png',
        coverWidth: 1570,
        coverHeight: 628,
        category: 'REZ LABS',
        title: 'v0.3 Mainnet or Bust: Because HL Testnet Clearly Hates Us',
        author: 'tamaghna',
        date: 'February 26, 2026',
        tag: 'DeFAI',
        content: (
            <>
                <p className="blog-lead">
                    The sole reason to launch Rez on Hyperliquid testnet was to provide seamless user experience for our beta testers. But it was anything but smooth.
                </p>
                <p>
                    We launched on Jan 27 with 3 accounts pre-funded with 1000 USDC (testnet). All 3 accounts were drained to 0 by HL, additionally there were rate limits on trading, which caused abrupt &amp; erratic behaviors, leading to poor user experience.
                </p>
                <p>
                    This led to panic because our dashboards were showing portfolio value straight to zero, we went into pitches with that, our testers were confused. We funded one of them with 500 USDC (testnet) and again after few days it was halved to 250. At this point we are counting days to when this would go to zero too.
                </p>
                <p>
                    Some context &mdash; we are completely bootstrapped and we know how risky crypto markets are and how easily you can lose reputation if you mess up early. On top of it we are unaudited. Even setting up those wallets was a hassle in itself &mdash; you need $5 ARB on mainnet with an active wallet, only then HL would give $1000 USDC testnet.
                </p>
                <p>
                    OK so then we could just keep depositing $5 and keep setting up test accounts, that should work right? That comes with the same issues of rate limits and abrupt draining of wallets and again user frustration.
                </p>
                <h2>Moving Forward</h2>
                <p>
                    How do we solve this? Go mainnet &mdash; sounds easy. But going mainnet comes with additional responsibility of making sure user funds are safe. Even though Rez is completely non-custodial, we still need to make sure that our architecture is secure. This necessitates an audit, for which we need sufficient resources.
                </p>
                <p>
                    Also as we had only 3 accounts, the chances of an account being accessed by more than one user is very much possible, which did happen and again it led to a poor user experience. The resulting feedback, while pointed, is entirely warranted and has been invaluable.
                </p>
                <h2>Then What?</h2>
                <p>
                    We would still be in beta and we would put deposit limits, so you won&apos;t be able to deposit more than let&apos;s say 100 USDC, which is still a lot of money but there&apos;s no other way. It won&apos;t be public &mdash; we will still be working with our private cohort of beta testers to ensure we don&apos;t mess up before we go public.
                </p>
                <p>
                    We are also exploring integration with an established perp DEX to leverage complementary infrastructure and support.
                </p>
                <p>
                    Rez has a very lean team consisting of me and my CTO @0xSuhass. Recently @KhanAbbas201 mentioned in his post that experimenting in DeFi/Crypto is expensive. I agree &mdash; it&apos;s even worse when you&apos;re bootstrapped.
                </p>
                <h2>Progress</h2>
                <ul>
                    <li><strong>v0.1</strong> offered paper trading for initial validation.</li>
                    <li><strong>v0.2</strong> brought live execution on the Hyperliquid testnet.</li>
                    <li><strong>v0.3</strong> will mark our transition to mainnet.</li>
                </ul>
                <p>
                    With each version we have validated ourselves &amp; kept improving. We have faced problems in each step, we have taken feedback very seriously and kept moving forward.
                </p>
                <p className="blog-lead">
                    So yeah, we&apos;re going mainnet early. My bet is simple. Rez will be the only quant you need for perpetual futures.
                </p>
                <p className="blog-sign">gRez.</p>
                <p className="blog-note">
                    PS: No hate to Hyperliquid &mdash; love what they are doing. Working with testnet comes with limitations.
                </p>
            </>
        ),
    },
    {
        cover: '/article-fuckup.jpg',
        coverWidth: 1570,
        coverHeight: 628,
        category: 'REZ LABS',
        title: 'Where Did We F*ck Up?',
        author: 'tamaghna',
        date: 'March 2, 2026',
        tag: 'Engineering',
        content: (
            <>
                <p className="blog-lead">
                    Rez essentially consists of two parts: the infrastructure that makes everything run smoothly and the quant algorithms that drive smart decisions. We iterated version by version, improving infrastructure more aggressively while advancing the quant side only incrementally.
                </p>
                <div className="blog-inline-image">
                    <Image
                        src="/fuckup-squidward.jpg"
                        alt="Rez infra vs quant"
                        width={800}
                        height={600}
                        className="blog-content-img"
                    />
                </div>
                <p>
                    Early versions used paper trading. This allowed quick testing of interfaces and risk settings without real capital. We then launched on Hyperliquid testnet in January 2026 to introduce on-chain execution. The infrastructure proved reliable, and the overall product functioned as intended. Users could deploy agents and observe behavior in a live-like environment.
                </p>
                <p>
                    However, testnet limitations prevented proper algo validation. We confirmed the system works but could not rigorously test strategy performance.
                </p>
                <p>
                    UX so smooth our beta testers were confused if it was actually a DApp &mdash; I&apos;d consider that a win.
                </p>
                <p>
                    The most reliable path is live deployment on mainnet. We are accelerating toward mainnet launch to gather authentic market feedback and refine strategies iteratively. Improvements already planned include tighter risk management, enhanced market analysis, and more adaptive execution logic.
                </p>
                <h2>Why Not Backtest?</h2>
                <p>
                    Backtesting perpetuals isn&apos;t straightforward. Unlike spot trading, perpetuals involve leverage amplification, funding rate costs, slippage, and liquidation mechanics. Historical simulations often produce misleading results because these factors do not align cleanly with past data. Backtesting provides direction but lacks full accuracy. Even to rely on a backtesting setup it needs to be continuously fine tuned.
                </p>
                <p>
                    But of course we can&apos;t solely rely on live capital deployment to test out strategies, we need to find a sweet spot. On top of it, DEX internals &mdash; liquidity mechanics, order matching, fee structures &mdash; play a critical role in strategy optimization. Close collaboration with DEX teams provides essential insights that improve agent performance across platforms.
                </p>
                <div className="blog-inline-image">
                    <Image
                        src="/fuckup-fafo.jpg"
                        alt="The more you mess around the more you find out"
                        width={800}
                        height={600}
                        className="blog-content-img"
                    />
                </div>
                <p>
                    These lessons highlight the need for earlier balance between infrastructure and algorithm development, realistic expectations from simulations, and a clear focus on live testing. We are applying them directly as we move forward.
                </p>
                <p className="blog-sign">gRez.</p>
            </>
        ),
    },
    {
        cover: '/article-chaos.jpg',
        coverWidth: 1570,
        coverHeight: 628,
        category: 'REZ LABS',
        title: 'From Chaos to Clarity: How Agents Are Shaping DeFi',
        author: 'tamaghna',
        date: 'January 31, 2026',
        tag: 'DeFAI',
        content: (
            <>
                <p className="blog-lead">
                    DeFi is booming, especially with perpetuals and prediction markets drawing in billions in volume. Polymarket lets you bet on real-world events with crypto, while perpetual DEXs offer leveraged trading without expiration dates. This space is heating up as more users seek high-yield opportunities.
                </p>
                <p>
                    But for the average retail investor? It&apos;s a nightmare. Not only do you need to decode complex metrics like funding rates and volatility, but the whole ecosystem is a mess of fragmented interfaces.
                </p>
                <p>
                    That&apos;s where Rez Labs comes in. We&apos;re building a non-custodial platform that uses autonomous AI agents to simplify DeFi strategies. Unlike many NLP based tools, our agents handle the heavy lifting &amp; execute trades based on your risk preferences.
                </p>
                <h2>The Kickoff</h2>
                <p>
                    September &ndash; October 2025 was spent on pure exploration. We dove deep into the agentic DeFi landscape, mapping out categories like market trend indicators (e.g., Numerai&apos;s AI-powered predictions), stablecoin yield agents (like ARMA from Giza, which auto-shifts funds between Aave and Compound for max interest), and agent infrastructure providers (such as BrahmaFi&apos;s Morpho Agents for optimizing liquidity across vaults).
                </p>
                <div className="blog-inline-image">
                    <Image src="/chaos-1.jpg" alt="DeFi landscape exploration" width={800} height={600} className="blog-content-img" />
                </div>
                <p>
                    This helped us spot gaps &mdash; like how most tools still require user input &mdash; and shape our vision for true autonomy.
                </p>
                <div className="blog-inline-image">
                    <Image src="/chaos-2.jpg" alt="Rez vision for autonomy" width={800} height={600} className="blog-content-img" />
                </div>
                <h2>Idea Validation</h2>
                <p>
                    By December, we released our MVP and lite paper. This was a proof of concept that our idea can work. A one-click paper trading setup for perpetuals, powered by a custom AI algorithm that simulated trades without real money on the line. We demoed it publicly, took feedback from early testers.
                </p>
                <div className="blog-inline-image">
                    <Image src="/chaos-3.jpg" alt="Rez MVP demo" width={800} height={600} className="blog-content-img" />
                </div>
                <p>
                    While keeping it simple &mdash; no logins, just hop on the site and test-drive the agent in a sandbox. It validated our core idea.
                </p>
                <h2>Testnet Launch on Hyperliquid</h2>
                <p>
                    Fast-forward to January 2026, and we launched our beta on Hyperliquid Testnet. Building on the previous version, this brought real on-chain action. Users could deploy agents for trading in a live-ish environment. We will continue to improve and get feedback from users while stepping forward to Mainnet beta launch.
                </p>
                <p className="blog-lead">
                    It&apos;s been a wild ride from ideation to beta, and we&apos;re just getting started. Rez is all about democratizing DeFi markets.
                </p>
            </>
        ),
    },
    {
        cover: '/article-oneclick.jpg',
        coverWidth: 1200,
        coverHeight: 480,
        category: 'REZ LABS',
        title: 'How to Fix Your Life in One-Click',
        author: 'tamaghna',
        date: 'January 20, 2026',
        tag: 'Announcement',
        content: (
            <>
                <p className="blog-lead">
                    Join <a href="https://rezlabs.org" target="_blank" rel="noopener noreferrer">@LabsRez</a> wait list.
                </p>
            </>
        ),
    },
];

export default function BlogPage() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const heroRef = useRef<HTMLDivElement>(null);
    const articleRef = useRef<HTMLElement>(null);
    const isAnimating = useRef(false);

    const navigateTo = useCallback((newIndex: number, direction: 'left' | 'right') => {
        if (isAnimating.current || newIndex === currentIndex) return;
        isAnimating.current = true;

        const heroEl = heroRef.current;
        const articleEl = articleRef.current;
        if (!heroEl || !articleEl) {
            setCurrentIndex(newIndex);
            isAnimating.current = false;
            return;
        }

        // Direction: "right" means going to next (content exits left, enters from right)
        const exitX = direction === 'right' ? '-100%' : '100%';
        const enterX = direction === 'right' ? '100%' : '-100%';

        const tl = gsap.timeline({
            onComplete: () => {
                isAnimating.current = false;
            },
        });

        // Phase 1: Slide out hero first, then article follows
        tl.to(heroEl, {
            x: exitX,
            opacity: 0,
            duration: 0.4,
            ease: 'power2.in',
        })
        .to(articleEl, {
            x: exitX,
            opacity: 0,
            duration: 0.35,
            ease: 'power2.in',
        }, '-=0.25')

        // Phase 2: Change content, then slide in
        .call(() => {
            setCurrentIndex(newIndex);
            window.scrollTo({ top: 0 });
        })
        .set(heroEl, { x: enterX, opacity: 0 })
        .set(articleEl, { x: enterX, opacity: 0 })

        // Phase 3: Slide in hero first, then article follows
        .to(heroEl, {
            x: '0%',
            opacity: 1,
            duration: 0.4,
            ease: 'power2.out',
        })
        .to(articleEl, {
            x: '0%',
            opacity: 1,
            duration: 0.35,
            ease: 'power2.out',
        }, '-=0.2');
    }, [currentIndex]);

    const goNext = useCallback(() => {
        const newIndex = (currentIndex + 1) % articles.length;
        navigateTo(newIndex, 'right');
    }, [currentIndex, navigateTo]);

    const goPrev = useCallback(() => {
        const newIndex = (currentIndex - 1 + articles.length) % articles.length;
        navigateTo(newIndex, 'left');
    }, [currentIndex, navigateTo]);

    useEffect(() => {
        window.scrollTo(0, 0);

        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });

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

    const article = articles[currentIndex];

    return (
        <div className="App" style={{ position: 'relative', overflowX: 'hidden' }}>
            <Navbar />

            {/* Live animated background */}
            <div className="blog-bg">
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

            {/* Hero background image */}
            <div className="blog-hero" ref={heroRef}>
                <Image
                    src={article.cover}
                    alt={article.title}
                    width={article.coverWidth}
                    height={article.coverHeight}
                    className="blog-hero-img"
                    priority
                />
            </div>

            {/* Arrow overlay - same position as hero but above everything */}
            <div className="blog-arrow-overlay">
                <button className="blog-arrow blog-arrow-left" onClick={goPrev} aria-label="Previous article">
                    <ChevronLeft size={32} />
                </button>
                <button className="blog-arrow blog-arrow-right" onClick={goNext} aria-label="Next article">
                    <ChevronRight size={32} />
                </button>
            </div>

            {/* Blog post content */}
            <article className="blog-article" ref={articleRef}>
                <div className="blog-article-inner">
                    <span className="blog-category">{article.category}</span>

                    <h1 className="blog-title">{article.title}</h1>

                    <div className="blog-meta">
                        <span>Written by <strong>{article.author}</strong></span>
                        <span className="blog-meta-sep">&middot;</span>
                        <span>{article.date}</span>
                        <span className="blog-meta-sep">&middot;</span>
                        <span>{article.tag}</span>
                    </div>

                    {/* Article indicator dots */}
                    <div className="blog-dots">
                        {articles.map((_, i) => (
                            <button
                                key={i}
                                className={`blog-dot ${i === currentIndex ? 'active' : ''}`}
                                onClick={() => {
                                    navigateTo(i, i > currentIndex ? 'right' : 'left');
                                }}
                                aria-label={`Go to article ${i + 1}`}
                            />
                        ))}
                    </div>

                    <div className="blog-body">
                        {article.content}
                    </div>
                </div>
            </article>

            <Footer />
        </div>
    );
}
