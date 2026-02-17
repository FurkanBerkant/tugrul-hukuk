"use client";

import { motion } from "framer-motion";
import { Scale, Gavel, Building2, Users, FileText, Briefcase, ShieldCheck, HeartHandshake } from "lucide-react";

const practices = [
    {
        icon: Scale,
        title: "Ceza Hukuku",
        desc: "Soruşturma ve kovuşturma evrelerinde müvekkillerimizin haklarını titizlikle savunuyoruz.",
    },
    {
        icon: Users,
        title: "Aile ve Boşanma",
        desc: "Anlaşmalı ve çekişmeli boşanma, velayet, nafaka davalarında hukuki destek sunuyoruz.",
    },
    {
        icon: Building2,
        title: "Gayrimenkul Hukuku",
        desc: "Tapu iptali, tescil davaları, kira uyuşmazlıkları ve inşaat sözleşmeleri süreçleri.",
    },
    {
        icon: Briefcase,
        title: "İş ve Sosyal Güvenlik",
        desc: "İşe iade, kıdem tazminatı ve hizmet tespiti davalarında işçi ve işveren vekilliği.",
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
        <section id="practice-areas" className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-accent font-bold tracking-widest text-sm mb-3">UZMANLIK ALANLARIMIZ</h2>
                    <h3 className="text-4xl font-serif font-bold text-primary mb-6">Hukuki Çözüm Alanlarımız</h3>
                    <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {practices.map((area, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group p-8 bg-offwhite border border-gray-100 rounded-xl hover:shadow-xl hover:border-accent/40 transition-all duration-300 relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                            <div className="w-14 h-14 bg-primary/5 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-gold transition-colors duration-300">
                                <area.icon size={32} className="group-hover:text-accent transition-colors" />
                            </div>

                            <h4 className="text-xl font-serif font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                                {area.title}
                            </h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {area.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
