"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { Menu, X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Ana Sayfa", href: "#hero" },
        { name: "Faaliyet Alanları", href: "#practice-areas" },
        { name: "Kurumsal", href: "#about" },
        { name: "İletişim", href: "#contact" },
    ];

    return (
        <>
            <header
                className={clsx(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                    isScrolled
                        ? "bg-white/70 backdrop-blur-md shadow-sm border-gray-100 py-3"
                        : "bg-transparent py-5"
                )}
            >
                <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
                    {/* Logo */}
                    {/* Logo */}
                    <Link href="/" className="group">
                        <Logo isScrolled={isScrolled} />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={clsx(
                                    "text-sm font-medium hover:text-accent transition-colors",
                                    isScrolled ? "text-gray-700" : "text-white/90 hover:text-white"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA & Mobile Menu Toggle */}
                    <div className="flex items-center space-x-4">
                        <a
                            href="https://wa.me/905000000000"
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
                                isScrolled ? "text-primary" : "text-white"
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
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-2xl font-serif text-primary hover:text-accent font-medium"
                                >
                                    {link.name}
                                </Link>
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
