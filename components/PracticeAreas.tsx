"use client";

import { motion } from "framer-motion";
import { Scale, Gavel, Building2, Users, FileText, Briefcase, ShieldCheck, HeartHandshake, Home, ShoppingBag } from "lucide-react";

const practices = [
    {
        icon: Scale,
        title: "Ceza Hukuku",
        desc: "Soruşturma ve kovuşturma evrelerinde müvekkillerimizin haklarını titizlikle savunuyoruz.",
    },
    {
        icon: Users,
        title: "Aile Hukuku",
        desc: "Anlaşmalı ve çekişmeli boşanma, velayet, nafaka davalarında hukuki destek sunuyoruz.",
    },
    {
        icon: Building2,
        title: "Gayrimenkul Hukuku",
        desc: "Tapu iptali, tescil davaları, kira uyuşmazlıkları ve inşaat sözleşmeleri süreçleri.",
    },
    {
        icon: Briefcase,
        title: "İş Hukuku",
        desc: "İşe iade, kıdem tazminatı ve hizmet tespiti davalarında işçi ve işveren vekilliği.",
    },
    {
        icon: ShoppingBag,
        title: "Tüketici Hukuku",
        desc: "Ayıplı mal/hizmet, sözleşmeler ve tüketici uyuşmazlıklarında hukuki destek.",
    },
    {
        icon: Home,
        title: "Kira Hukuku",
        desc: "Kira sözleşmeleri, tahliye ve kira tespit süreçlerinde hukuki danışmanlık.",
    },
    {
        icon: FileText,
        title: "İcra ve İflas",
        desc: "Alacak tahsili, icra takipleri ve iflas erteleme süreçlerinin profesyonel yönetimi.",
    },
    {
        icon: ShieldCheck,
        title: "Ticaret Hukuku",
        desc: "Şirket kuruluşları, birleşme ve devralmalar, ticari sözleşmelerin hazırlanması.",
    },
    {
        icon: Gavel,
        title: "İdare Hukuku",
        desc: "İdari işlemlerin iptali ve tam yargı davalarında hukuki danışmanlık.",
    },
    {
        icon: HeartHandshake,
        title: "Miras Hukuku",
        desc: "Vasiyetname düzenleme, tenkis davaları ve miras paylaşımı konularında danışmanlık.",
    },
];

export default function PracticeAreas() {
    return (
        <section id="practice-areas" className="py-20 md:py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12 md:mb-14">
                    <h3 className="text-4xl font-serif font-bold text-primary mb-6">Hukuki Çözüm Alanlarımız</h3>
                    <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    {practices.map((area, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.6 }}
                            className="group relative justify-self-center w-full max-w-[220px] aspect-square overflow-hidden bg-white border border-gray-100 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(0,33,71,0.10)] hover:border-accent/30"
                        >
                            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute -top-24 -right-24 w-56 h-56 rounded-full bg-accent/10 blur-3xl" />
                                <div className="absolute -bottom-24 -left-24 w-56 h-56 rounded-full bg-primary/10 blur-3xl" />
                            </div>

                            <div className="relative h-full flex flex-col">
                                <div className="w-14 h-14 rounded-2xl bg-primary text-accent flex items-center justify-center shadow-sm ring-1 ring-black/5 transition-transform duration-300 group-hover:scale-105">
                                    <area.icon size={28} strokeWidth={1.75} className="text-accent" />
                                </div>

                                <h4 className="mt-8 text-lg md:text-xl font-serif font-bold text-primary tracking-tight leading-snug group-hover:text-accent transition-colors">
                                    {area.title}
                                </h4>

                                <div className="mt-auto pt-6">
                                    <div className="h-px w-16 bg-gray-100 group-hover:bg-accent/25 transition-colors" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
