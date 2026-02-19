"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";


export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth movement springs
    const springConfig = { damping: 30, stiffness: 200 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    // Parallax transforms
    const rotateX = useTransform(springY, [-0.5, 0.5], [5, -5]);
    const rotateY = useTransform(springX, [-0.5, 0.5], [-5, 5]);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        mouseX.set(x);
        mouseY.set(y);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <section
            id="hero"
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative h-screen flex items-center justify-center overflow-hidden perspective-1000"
        >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/92 to-primary/30 z-10" />
                <motion.div
                    style={{
                        x: useTransform(springX, [-0.5, 0.5], [20, -20]),
                        y: useTransform(springY, [-0.5, 0.5], [20, -20]),
                        scale: 1.1
                    }}
                    className="absolute inset-0 blur-[2px]"
                >
                    <Image
                        src="/justice-statue.jpg"
                        alt="Adalet Heykeli Arka Plan"
                        fill
                        priority
                        quality={85}
                        sizes="100vw"
                        className="object-cover object-center lg:object-[80%_center]"
                    />
                </motion.div>
            </div>

            <div className="container mx-auto px-6 z-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
                    {/* Left Side: Content */}
                    <motion.div
                        style={{ rotateX, rotateY, z: 50 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="max-w-3xl text-center lg:text-left"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="inline-block py-1.5 px-4 border border-accent/40 rounded-full text-accent text-xs font-bold tracking-[0.2em] uppercase mb-8">
                                Hukuk & Danışmanlık
                            </span>
                            <h1 className="mb-10">
                                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif font-black text-white leading-snug tracking-tight uppercase text-center lg:text-left drop-shadow-2xl">
                                    TUĞRUL HUKUK
                                </div>
                                <div className="flex items-center justify-center lg:justify-start gap-6 my-4">
                                    <span className="hidden md:block h-px w-16 bg-accent/70" aria-hidden="true" />
                                    <span className="text-xl md:text-2xl lg:text-3xl font-serif italic text-accent/80 tracking-[0.2em] uppercase">
                                        ve
                                    </span>
                                    <span className="hidden md:block h-px w-16 bg-accent/70" aria-hidden="true" />
                                </div>
                                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif font-black text-white leading-snug tracking-tight uppercase text-center lg:text-left drop-shadow-2xl">
                                    DANIŞMANLIK
                                </div>
                            </h1>
                            <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed mb-10 max-w-2xl border-l-2 border-accent/30 pl-6 mx-auto lg:mx-0 shadow-sm">
                                Tuğrul Hukuk ve Danışmanlık, Samsun&apos;da faaliyet gösteren bir hukuk bürosudur.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
                        >
                            <a
                                href="#contact"
                                className="px-10 py-4 bg-accent hover:bg-accent/90 text-white rounded-none font-bold tracking-[0.2em] uppercase shadow-2xl transition-all hover:-translate-y-1 flex items-center justify-center gap-3 group text-xs md:text-sm active:scale-95"
                            >
                                İletişime Geç
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="#practice-areas"
                                className="px-10 py-4 border border-white/30 hover:border-accent text-white rounded-none font-bold tracking-[0.2em] uppercase transition-all hover:bg-white/5 flex items-center justify-center text-xs md:text-sm active:scale-95"
                            >
                                Faaliyet Alanlarımız
                            </a>
                        </motion.div>
                    </motion.div>


                </div>
            </div>
        </section>
    );
}
