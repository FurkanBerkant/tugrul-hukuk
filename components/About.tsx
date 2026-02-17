"use client";

import { motion } from "framer-motion";
import { CheckCircle, Award, Users } from "lucide-react";

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
                            <img
                                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&auto=format&fit=crop"
                                alt="Avukat Portresi"
                                className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 to-transparent p-8 text-white">
                                <p className="font-serif text-2xl font-bold">Av. Mehmet Tuğrul</p>
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
                                Adalet Yolunda <br />
                                <span className="text-gray-400">Güvenilir Çözüm Ortağınız</span>
                            </h3>
                        </div>

                        <p className="text-gray-600 text-lg leading-relaxed">
                            Tuğrul Hukuk & Danışmanlık, 15 yılı aşkın tecrübesiyle Samsun merkezli ofisinde müvekkillerine kapsamlı hukuki danışmanlık hizmeti sunmaktadır.
                        </p>

                        <ul className="space-y-4">
                            {[
                                "Uzman ve Deneyimli Hukukçular",
                                "Şeffaf Süreç Yönetimi",
                                "Kişiye Özel Hukuki Stratejiler",
                                "Yüksek Müvekkil Memnuniyeti"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-700">
                                    <CheckCircle className="text-accent flex-shrink-0" size={20} />
                                    <span className="font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="grid grid-cols-2 gap-8 border-t border-gray-100 pt-8">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-accent/10 rounded-lg text-accent">
                                    <Award size={32} />
                                </div>
                                <div>
                                    <p className="text-3xl font-serif font-bold text-primary">500+</p>
                                    <p className="text-xs text-gray-500 font-medium uppercase">Başarılı Dosya</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-accent/10 rounded-lg text-accent">
                                    <Users size={32} />
                                </div>
                                <div>
                                    <p className="text-3xl font-serif font-bold text-primary">15+</p>
                                    <p className="text-xs text-gray-500 font-medium uppercase">Yıllık Tecrübe</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
