"use client";

import { motion } from "framer-motion";
import { Scale, Gavel, Building2, Users, FileText, Briefcase, ShieldCheck, HeartHandshake, Home, ShoppingBag } from "lucide-react";

const practices = [
    {
        icon: Scale,
        title: "Ceza Hukuku",
        desc: "Soruşturma ve kovuşturma evrelerinde hukuki destek ve temsil faaliyetleri.",
    },
    {
        icon: Users,
        title: "Aile Hukuku",
        desc: "Boşanma, velayet, nafaka ve mal rejimi süreçlerinde hukuki bilgilendirme.",
    },
    {
        icon: Building2,
        title: "Gayrimenkul Hukuku",
        desc: "Tapu, tescil, inşaat sözleşmeleri ve mülkiyet uyuşmazlıkları süreçleri.",
    },
    {
        icon: Briefcase,
        title: "İş Hukuku",
        desc: "İşçi ve işveren hakları, sözleşmeler ve tazminat süreçlerinde danışmanlık.",
    },
    {
        icon: ShoppingBag,
        title: "Tüketici Hukuku",
        desc: "Ayıplı mal, hizmet ve tüketici hakları kapsamındaki hukuki uyuşmazlıklar.",
    },
    {
        icon: Home,
        title: "Kira Hukuku",
        desc: "Kira sözleşmeleri, tahliye ve kira uyuşmazlıklarının yönetimi.",
    },
    {
        icon: FileText,
        title: "İcra ve İflas",
        desc: "İcra takipleri, alacak tahsili ve iflas hukuku süreçlerinin takibi.",
    },
    {
        icon: ShieldCheck,
        title: "Ticaret Hukuku",
        desc: "Şirket kuruluşları, ticari sözleşmeler ve kurumsal hukuki süreçler.",
    },
    {
        icon: Gavel,
        title: "İdare Hukuku",
        desc: "İdari işlemlerin iptali ve tam yargı davaları süreçlerinde danışmanlık.",
    },
    {
        icon: HeartHandshake,
        title: "Miras Hukuku",
        desc: "Veraset ilamı, miras paylaşımı ve vasiyetname süreçlerinde danışmanlık.",
    },
];

export default function PracticeAreas() {
    return (
        <section id="practice-areas" className="py-20 md:py-24 bg-offwhite scroll-mt-24 lg:scroll-mt-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12 md:mb-14">
                    <h2 className="text-4xl font-serif font-bold text-primary mb-6">Hukuki Çözüm Alanlarımız</h2>
                    <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 md:gap-6">
                    {practices.map((area, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.6 }}
                            className="group relative justify-self-center w-full max-w-[220px] min-h-[220px] overflow-hidden bg-white border border-gray-100 rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_40px_80px_rgba(0,33,71,0.12)] hover:border-accent/40"
                        >
                            {/* Grainy Glass Texture Overlay */}
                            <div className="absolute inset-0 opacity-[0.03] pointer-events-none grain-texture mix-blend-overlay" />

                            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="absolute -top-24 -right-24 w-56 h-56 rounded-full bg-accent/5 blur-3xl" />
                                <div className="absolute -bottom-24 -left-24 w-56 h-56 rounded-full bg-primary/5 blur-3xl" />
                            </div>

                            <div className="relative h-full flex flex-col">
                                {/* Üst Kısım: İkon ve Başlık */}
                                <div className="transition-all duration-500 group-hover:-translate-y-1">
                                    <div className="w-12 h-12 rounded-xl bg-primary text-accent flex items-center justify-center shadow-sm transition-transform duration-500 group-hover:scale-105">
                                        <area.icon size={24} strokeWidth={1.75} className="text-accent" aria-hidden="true" />
                                    </div>

                                    <h3 className="mt-5 text-lg font-serif font-bold text-primary tracking-tight leading-tight group-hover:text-accent transition-colors duration-300">
                                        {area.title}
                                    </h3>
                                </div>

                                {/* Orta Kısım: Açıklama (Hover'da Grid Animasyonu) */}
                                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
                                    <div className="overflow-hidden">
                                        <p className="mt-4 text-[13px] leading-relaxed text-gray-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                            {area.desc}
                                        </p>
                                    </div>
                                </div>

                                {/* Alt Kısım: Dekoratif Çizgi (Normalde görünür, Hover'da gizlenir) */}
                                <div className="mt-auto pt-4 transition-opacity duration-300 group-hover:opacity-0">
                                    <div className="h-px w-12 bg-gray-100" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
