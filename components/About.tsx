"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Lawyer Image / Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&auto=format&fit=crop"
                                alt="Avukat Portresi"
                                width={800}
                                height={600}
                                className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 to-transparent p-8 text-white">
                                <p className="font-serif text-2xl font-bold">Av. Muhammet Fatih Tuğrul</p>
                                <p className="text-sm opacity-80">Kurucu Ortak</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 space-y-8"
                    >
                        <div>
                            <h2 className="text-accent font-bold tracking-widest text-sm mb-3">HAKKIMIZDA</h2>
                            <h3 className="text-4xl font-serif font-bold text-primary leading-tight">
                                Tuğrul Hukuk ve Danışmanlık
                            </h3>
                        </div>

                        <p className="text-gray-600 text-lg leading-relaxed">
                            Tuğrul Hukuk ve Danışmanlık, Samsun&apos;da faaliyet gösteren bir avukatlık ve danışmanlık bürosudur.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Ofisimiz, farklı hukuk alanlarında çalışan avukatlardan oluşmaktadır ve
                            müvekkillerle yürütülen süreçlerin anlaşılır ve takip edilebilir olmasına önem verilmektedir.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
