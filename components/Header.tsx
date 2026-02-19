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
    const [headerTheme, setHeaderTheme] = useState<"light" | "dark">("dark");
    const headerRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.classList.add("menu-open");
        } else {
            document.body.classList.remove("menu-open");
        }
        return () => {
            document.body.classList.remove("menu-open");
        };
    }, [isMobileMenuOpen]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.scrollY;
            setIsScrolled(scrollPos > 40);

            // Determine theme based on current section
            const sections = [
                { id: "hero", theme: "dark" },
                { id: "practice-areas", theme: "light" },
                { id: "about", theme: "light" },
                { id: "contact", theme: "dark" },
            ];

            let currentTheme: "light" | "dark" = "dark";
            const headerHeight = headerRef.current?.offsetHeight ?? 80;

            for (const section of sections) {
                const el = document.getElementById(section.id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    // If the top of the header is within this section
                    if (rect.top <= headerHeight / 2 && rect.bottom >= headerHeight / 2) {
                        currentTheme = section.theme as "light" | "dark";
                        break;
                    }
                }
            }
            setHeaderTheme(currentTheme);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll(); // Initial check
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (href: string) => {
        if (!href.startsWith("#")) return;
        const id = href.slice(1);
        const target = document.getElementById(id);
        if (!target) return;

        const currentHeader = headerRef.current;
        if (!currentHeader) return;

        const headerHeight = currentHeader.offsetHeight;
        const rect = target.getBoundingClientRect();
        // Land exactly at the section start minus the header height
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

    const isHeaderDark = headerTheme === "dark";

    return (
        <>
            <header
                ref={headerRef}
                className={clsx(
                    "fixed top-0 left-0 right-0 transition-all duration-500 border-b",
                    isMobileMenuOpen ? "z-[70] bg-transparent border-transparent py-6" : "z-50",
                    !isScrolled && !isMobileMenuOpen
                        ? "bg-transparent py-6 border-transparent"
                        : isHeaderDark && !isMobileMenuOpen
                            ? "bg-primary/80 backdrop-blur-lg border-white/10 py-3 shadow-2xl"
                            : !isMobileMenuOpen ? "bg-white/80 backdrop-blur-lg border-gray-100 py-3 shadow-lg" : ""
                )}
            >
                <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
                    {/* Logo */}
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        className="group cursor-pointer border-none bg-transparent p-0 active:scale-95 transition-transform"
                        aria-label="Ana Sayfa"
                    >
                        <Logo
                            isScrolled={!isHeaderDark && isScrolled}
                            isLight={isMobileMenuOpen}
                        />
                    </button>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-10">
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                type="button"
                                onClick={() => scrollToSection(link.href)}
                                className={clsx(
                                    "relative text-sm font-bold tracking-widest uppercase cursor-pointer pb-1 transition-all duration-300",
                                    "after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full",
                                    isHeaderDark || !isScrolled
                                        ? "text-white/80 hover:text-accent"
                                        : "text-primary/70 hover:text-accent"
                                )}
                            >
                                {link.name}
                            </button>
                        ))}
                    </nav>

                    {/* CTA & Mobile Menu Toggle */}
                    <div className="flex items-center space-x-6">
                        <a
                            href={`https://wa.me/${siteConfig.whatsappNumber.replace(/[^0-9]/g, "")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden md:flex items-center space-x-2 bg-accent hover:bg-accent/90 text-white px-7 py-3 rounded-none transition-all shadow-xl hover:-translate-y-1 transform active:scale-95 text-xs font-bold tracking-widest uppercase"
                        >
                            <MessageCircle size={18} />
                            <span>WhatsApp</span>
                        </a>

                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className={clsx(
                                "md:hidden p-2 rounded-lg transition-all active:scale-90",
                                isHeaderDark || !isScrolled ? "text-white hover:bg-white/10" : "text-primary hover:bg-primary/5"
                            )}
                            aria-label={isMobileMenuOpen ? "Menüyü Kapat" : "Menüyü Aç"}
                            aria-expanded={isMobileMenuOpen}
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
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] bg-primary pt-24 px-6 md:hidden flex flex-col h-[100dvh] w-full overflow-hidden"
                    >
                        {/* Decorative Background Elements */}
                        <div className="absolute inset-0 opacity-10 pointer-events-none">
                            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 blur-[120px] rounded-full" />
                            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 blur-[120px] rounded-full" />
                        </div>

                        <div className="relative flex-1 flex flex-col justify-between py-12">
                            <nav className="flex flex-col space-y-8 text-center">
                                {navLinks.map((link, i) => (
                                    <motion.button
                                        key={link.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        type="button"
                                        onClick={() => {
                                            scrollToSection(link.href);
                                            setIsMobileMenuOpen(false);
                                        }}
                                        className="text-2xl font-serif text-white hover:text-accent font-medium tracking-tight"
                                    >
                                        {link.name}
                                    </motion.button>
                                ))}
                            </nav>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="space-y-6"
                            >
                                <a
                                    href={`https://wa.me/${siteConfig.whatsappNumber.replace(/[^0-9]/g, "")}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center space-x-3 bg-accent text-white py-5 rounded-none text-base font-bold tracking-widest uppercase shadow-2xl active:scale-95 transition-transform"
                                >
                                    <MessageCircle size={20} />
                                    <span>WhatsApp İle Ulaşın</span>
                                </a>

                                <div className="text-center">
                                    <p className="text-white/40 text-[10px] tracking-[0.5em] uppercase font-bold">
                                        {siteConfig.firmName}
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
