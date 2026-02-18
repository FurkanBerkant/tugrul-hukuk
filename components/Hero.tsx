"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    return (
        <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/80 z-10" />
                <Image
                    src="/hero-bg.jpg"
                    alt="Tuğrul Hukuk & Danışmanlık ofisi"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                />
            </div>

            <div className="container mx-auto px-4 z-20 text-center md:text-left">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block py-1 px-3 border border-accent/50 rounded-full text-accent text-sm font-semibold tracking-wide mb-6">
                            Hukuk Bürosu
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight mb-4">
                            Tuğrul Hukuk ve Danışmanlık
                        </h1>
                        <p className="text-lg md:text-xl font-light text-gray-200 mb-2">
                            Avukatlık ve danışmanlık bürosu
                        </p>
                        <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed mb-10 max-w-2xl">
                            Bireysel ve kurumsal müvekkillere, ihtiyaçlarına uygun hukuki danışmanlık ve dava takibi hizmetleri sunmaktayız.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col md:flex-row gap-4 justify-center md:justify-start"
                    >
                        <a
                            href="#contact"
                            className="px-8 py-4 bg-accent hover:bg-yellow-600 text-white rounded-lg font-semibold shadow-lg transition-transform hover:-translate-y-1 flex items-center justify-center gap-2"
                        >
                            İletişime Geç
                            <ArrowRight size={20} />
                        </a>
                        <a
                            href="#about"
                            className="px-8 py-4 border-2 border-white/20 hover:border-white text-white rounded-lg font-semibold transition-colors hover:bg-white/5 flex items-center justify-center"
                        >
                            Hakkımızda
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
