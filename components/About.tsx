"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="py-32 bg-offwhite relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-20">

                    {/* Image Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="w-full lg:w-1/2 relative"
                    >
                        <div className="relative aspect-[4/5] overflow-hidden group">
                            <Image
                                src="/muhammet-fatih-tugrul.png"
                                alt="Avukat Muhammet Fatih Tuğrul"
                                fill
                                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                            />
                            {/* Purely visual accents (no claims/text) */}
                            <div className="absolute inset-0 border-[20px] border-white/10 m-6" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent opacity-60" />
                            <div className="absolute left-10 bottom-10 w-24 h-24 border-l border-b border-accent/30" />
                            <div className="absolute right-10 top-10 w-24 h-24 border-r border-t border-accent/20" />
                        </div>
                    </motion.div>

                    {/* Content Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="w-full lg:w-1/2 space-y-10"
                    >
                        <div>
                            <span className="text-accent font-bold tracking-[0.3em] text-xs uppercase mb-4 block">HAKKIMIZDA</span>
                            <h2 className="text-4xl md:text-5xl font-serif font-black text-primary leading-tight mb-8">
                                Tuğrul Hukuk ve Danışmanlık Hakkında
                            </h2>
                            <div className="w-20 h-1.5 bg-accent mb-10" />
                        </div>

                        <div className="space-y-6 text-gray-500 font-light leading-relaxed text-lg">
                            <p>
                                Tuğrul Hukuk ve Danışmanlık, Samsun&apos;da bulunan ofisinde farklı hukuk alanlarında çalışmaktadır.
                            </p>
                            <p>
                                Çalışmalarda müvekkil ile iletişim, gizlilik ve usule uygunluk ilkelerine önem verilmektedir.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
