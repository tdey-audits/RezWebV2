"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { AnimatedShinyText } from './ui/animated-shiny-text';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-content">
                <div className="navbar-left">
                    <div className="navbar-brand" onClick={() => scrollToSection('#hero')}>
                        <img src="/assets/rez.png" alt="Rez Logo" className="brand-logo" />
                     
                    </div>
                </div>

                <div className="navbar-center max-[370px]:hidden">
                    <div className="navbar-links">
                        <button onClick={() => scrollToSection('#why-rez')} className="nav-link">Why Rez</button>
                        <Link href="/manifesto" className="nav-link"><AnimatedShinyText>Manifesto</AnimatedShinyText></Link>
                        <Link href="/roadmap" className="nav-link">Roadmap</Link>
                    </div>
                </div>

                <div className="navbar-right">
                    <a href="https://www.papermark.com/view/cmj2tgzzd0004lb043vi5a6zb" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-light launch-app-btn max-[370px]:!hidden">Read Litepaper</a>
                    {/* Hamburger Menu Button */}
                    <button
                        className="hidden max-[370px]:!block"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6 text-black" /> : <Menu className="w-6 h-6 text-black" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2, ease: 'easeInOut' }}
                        className="hidden max-[370px]:flex flex-col absolute top-full left-0 w-full bg-white overflow-hidden font-[Inter]"
                    >
                        <div className="py-4 pr-6 flex flex-col gap-1.5" style={{ paddingLeft: '0.5rem' }}>
                            <button onClick={() => { scrollToSection('#why-rez'); setMobileMenuOpen(false); }} className="!text-black text-left">Why Rez</button>
                            <Link href="/manifesto" className="!text-black" onClick={() => setMobileMenuOpen(false)}>Manifesto</Link>
                            <Link href="/roadmap" className="!text-black" onClick={() => setMobileMenuOpen(false)}>Roadmap</Link>
                            <a href="https://www.papermark.com/view/cmj2tgzzd0004lb043vi5a6zb" target="_blank" rel="noopener noreferrer" className="!text-black">Read Litepaper</a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
