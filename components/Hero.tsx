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

            <div className="container mx-auto px-6 z-20 text-center md:text-left">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block py-1.5 px-4 border border-accent/40 rounded-full text-accent text-xs font-bold tracking-[0.2em] uppercase mb-8">
                            Hukuk & Danışmanlık
                        </span>
                        <h1 className="mb-10">
                            <div className="text-4xl md:text-5xl lg:text-7xl font-serif font-black text-white leading-snug tracking-tight uppercase text-center md:text-left">
                                TUĞRUL HUKUK
                            </div>
                            <div className="flex items-center justify-center md:justify-start gap-6 my-4">
                                <span className="hidden md:block h-px w-16 bg-accent/70" />
                                <span className="text-xl md:text-2xl lg:text-3xl font-serif italic text-accent/80 tracking-[0.2em] uppercase">
                                    ve
                                </span>
                                <span className="hidden md:block h-px w-16 bg-accent/70" />
                            </div>
                            <div className="text-4xl md:text-5xl lg:text-7xl font-serif font-black text-white leading-snug tracking-tight uppercase text-center md:text-left">
                                DANIŞMANLIK
                            </div>
                        </h1>
                        <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed mb-10 max-w-2xl border-l-2 border-accent/30 pl-6 mx-auto md:mx-0">
                            Tuğrul Hukuk ve Danışmanlık, Samsun&apos;da faaliyet gösteren bir hukuk bürosudur.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start"
                    >
                        <a
                            href="#contact"
                            className="px-10 py-4 bg-accent hover:bg-accent/90 text-white rounded-none font-bold tracking-[0.2em] uppercase shadow-xl transition-all hover:-translate-y-1 flex items-center justify-center gap-3 group text-xs md:text-sm"
                        >
                            İletişime Geç
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="#practice-areas"
                            className="px-10 py-4 border border-white/30 hover:border-accent text-white rounded-none font-bold tracking-[0.2em] uppercase transition-all hover:bg-white/5 flex items-center justify-center text-xs md:text-sm"
                        >
                            Faaliyet Alanlarımız
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
