"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { Menu, X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";
import { siteConfig } from "../config/site";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isOnHero, setIsOnHero] = useState(true);
    const headerRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const heroEl = document.getElementById("hero");
        if (!heroEl) return;

        let raf = 0;
        const update = () => {
            const headerHeight = headerRef.current?.offsetHeight ?? 96;
            const heroBottom = heroEl.getBoundingClientRect().bottom;
            // Hero'nun altı header'ın üstünden yukarı çıkınca "hero bitti" say.
            setIsOnHero(heroBottom > headerHeight);
        };

        const onScrollOrResize = () => {
            cancelAnimationFrame(raf);
            raf = requestAnimationFrame(update);
        };

        update();
        window.addEventListener("scroll", onScrollOrResize, { passive: true });
        window.addEventListener("resize", onScrollOrResize);
        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener("scroll", onScrollOrResize);
            window.removeEventListener("resize", onScrollOrResize);
        };
    }, []);

    const scrollToSection = (href: string) => {
        if (!href.startsWith("#")) return;
        const id = href.slice(1);
        const target = document.getElementById(id);
        if (!target) return;

        const headerHeight = headerRef.current?.offsetHeight ?? 0;
        const rect = target.getBoundingClientRect();
        const offset = window.scrollY + rect.top - headerHeight;

        window.scrollTo({
            top: offset,
            behavior: "smooth",
        });
    };

    const navLinks = [
        { name: "Ana Sayfa", href: "#hero" },
        { name: "Faaliyet Alanları", href: "#practice-areas" },
        { name: "Hakkımızda", href: "#about" },
        { name: "İletişim", href: "#contact" },
    ];

    return (
        <>
            <header
                ref={headerRef}
                className={clsx(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                    isOnHero
                        ? isScrolled
                            ? "bg-primary/40 backdrop-blur-md border-white/10 py-3"
                            : "bg-transparent py-5"
                        : "bg-white/80 backdrop-blur-md shadow-sm border-gray-100 py-3"
                )}
            >
                <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
                    {/* Logo */}
                    {/* Logo */}
                    <Link href="/" className="group">
                        <Logo isScrolled={!isOnHero} />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                type="button"
                                onClick={() => scrollToSection(link.href)}
                                className={clsx(
                                    "relative text-sm font-medium cursor-pointer pb-1 transition-colors after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-accent after:transition-all after:duration-200 hover:after:w-full",
                                    isOnHero ? "text-white/90 hover:text-white" : "text-gray-700"
                                )}
                            >
                                {link.name}
                            </button>
                        ))}
                    </nav>

                    {/* CTA & Mobile Menu Toggle */}
                    <div className="flex items-center space-x-4">
                        <a
                            href={`https://wa.me/${siteConfig.whatsappNumber.replace(/[^0-9]/g, "")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden md:flex items-center space-x-2 bg-accent hover:bg-yellow-600 text-white px-5 py-2.5 rounded-full transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm font-semibold"
                        >
                            <MessageCircle size={18} />
                            <span>WhatsApp</span>
                        </a>

                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className={clsx(
                                "md:hidden p-2 rounded-md transition-colors",
                                isOnHero ? "text-white" : "text-primary"
                            )}
                        >
                            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl pt-24 px-6 md:hidden"
                    >
                        <nav className="flex flex-col space-y-6 text-center">
                            {navLinks.map((link) => (
                                <button
                                    key={link.name}
                                    type="button"
                                    onClick={() => {
                                        scrollToSection(link.href);
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className="text-2xl font-serif text-primary hover:text-accent font-medium"
                                >
                                    {link.name}
                                </button>
                            ))}
                            <a
                                href="https://wa.me/905000000000"
                                className="flex items-center justify-center space-x-2 bg-accent text-white py-4 rounded-xl text-lg font-semibold mt-4"
                            >
                                <MessageCircle size={24} />
                                <span>WhatsApp İle Ulaşın</span>
                            </a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
