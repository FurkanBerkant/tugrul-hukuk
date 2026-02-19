"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { siteConfig } from "../config/site";

export default function About() {
    return (
        <section id="about" className="py-32 bg-offwhite relative overflow-hidden scroll-mt-24 lg:scroll-mt-20">
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
                                alt={`Avukat ${siteConfig.firmName}`}
                                fill
                                quality={90}
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100 will-change-transform"
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
                                {siteConfig.firmName} Hakkında
                            </h2>
                            <div className="w-20 h-1.5 bg-accent mb-10" />
                        </div>

                        <div className="space-y-6 text-gray-500 font-light leading-relaxed text-lg">
                            <p>
                                {siteConfig.firmName}, {siteConfig.address.city} merkezli ofisinde, meslek ilkelerine ve hukuk devleti prensiplerine bağlı bir anlayışla faaliyetlerini sürdürmektedir. Faaliyet alanlarımızda, hukuki süreçlerin şeffaf, güvenilir ve usule uygun bir şekilde yürütülmesi temel önceliğimizdir.
                            </p>
                            <p>
                                Çalışmalarımız, Türkiye Barolar Birliği tarafından belirlenen meslek kuralları ve reklam yasağı yönetmeliği çerçevesinde, yalnızca bilgilendirme amacı taşımaktadır. Müvekkil mahremiyeti ve mesleki sır saklama yükümlülüğü, ofisimizin vazgeçilmez çalışma prensipleri arasındadır.
                            </p>
                        </div>

                        <motion.div
                            className="grid grid-cols-3 gap-3 pt-8 border-t border-gray-100"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                                visible: {
                                    transition: {
                                        staggerChildren: 0.2,
                                        delayChildren: 0.3
                                    }
                                }
                            }}
                        >
                            {[
                                { title: "Dürüstlük", desc: "Şeffaf bilgilendirme." },
                                { title: "Gizlilik", desc: "Mutlak güvenlik." },
                                { title: "Sadakat", desc: "Hakların korunması." }
                            ].map((value, i) => (
                                <motion.div
                                    key={i}
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: {
                                            opacity: 1,
                                            y: 0,
                                            transition: {
                                                type: "spring",
                                                stiffness: 100,
                                                damping: 20
                                            }
                                        }
                                    }}
                                    whileHover={{
                                        y: -5,
                                        transition: { type: "spring", stiffness: 400, damping: 17 }
                                    }}
                                    className={`text-center space-y-2 p-3 rounded-xl transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-primary/5 group ${i !== 2 ? 'border-r border-gray-100 hover:border-r-transparent' : ''}`}
                                >
                                    <h4 className="text-xs md:text-sm font-serif font-black text-primary uppercase tracking-widest px-1 group-hover:text-accent transition-colors duration-300">{value.title}</h4>
                                    <p className="text-[10px] md:text-xs text-gray-500 font-medium leading-relaxed px-1 font-sans">{value.desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
