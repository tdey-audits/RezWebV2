"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { AnimatedShinyText } from './ui/animated-shiny-text';

gsap.registerPlugin(ScrollToPlugin);

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    const scrollToSection = (id: string) => {
        if (pathname !== '/') {
            if (id === '#hero') {
                window.location.href = '/';
            } else {
                window.location.href = `/${id}`;
            }
            return;
        }
        gsap.to(window, { duration: 1, scrollTo: id, ease: 'power2.out' });
        setMobileMenuOpen(false);
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-content">
                <div className="navbar-left">
                    <div className="navbar-brand" onClick={() => scrollToSection('#hero')}>
                        <img src="/assets/rez.png" alt="Rez Logo" className="brand-logo" />
                        <span className="brand-name">Rez</span>
                    </div>
                </div>

                <div className="navbar-center desktop-nav">
                    <div className="navbar-links">
                        <button onClick={() => scrollToSection('#why-rez')} className="nav-link">Why Rez</button>
                        <Link href="/manifesto" className="nav-link"><AnimatedShinyText>Manifesto</AnimatedShinyText></Link>
                        <a href="https://github.com/0xtdey/rezlitepaper/blob/main/Rez_Litepaper.pdf" target="_blank" rel="noopener noreferrer" className="nav-link">Litepaper</a>
                    </div>
                </div>

                <div className="navbar-right desktop-nav">
                    <a href="https://b34bvolr4xazf2byeqkv3u.streamlit.app/" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-light launch-app-btn">Try Beta</a>
                </div>

                <button
                    className={`mobile-menu-btn ${mobileMenuOpen ? 'open' : ''}`}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}></span>
                </button>
            </div>

            {/* Mobile Navigation */}
            <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
                <button onClick={() => scrollToSection('#why-rez')} className="nav-link">
                    Why Rez
                </button>
                <Link href="/manifesto" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                    <AnimatedShinyText>Manifesto</AnimatedShinyText>
                </Link>
                <a
                    href="https://github.com/0xtdey/rezlitepaper/blob/main/Rez_Litepaper.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link"
                >
                    Litepaper
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
