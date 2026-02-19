"use client";

import Link from "next/link";
import Logo from "./Logo";
import { ArrowUp } from "lucide-react";
import { siteConfig } from "../config/site";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-primary text-white border-t border-white/10 font-light">
            <div className="border-b border-white/5 bg-gradient-to-t from-primary/40 to-primary/20">
                <div className="container mx-auto px-6 py-20">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-16 lg:gap-20">

                        <div className="col-span-1 md:col-span-2 space-y-6">
                            <div>
                                <Logo isFooter />
                            </div>
                            <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
                                {siteConfig.firmName}, Samsun&apos;da bulunan ofisinde çeşitli hukuk alanlarında faaliyet göstermektedir.
                            </p>
                            <div className="inline-flex items-center gap-3 px-4 py-2 border border-white/10 bg-white/5 text-[10px] font-semibold tracking-[0.18em] text-gray-200 uppercase">
                                <span>© 2026 {siteConfig.firmName}</span>
                                <span className="h-px w-6 bg-white/20" />
                                <span>TÜM HAKLARI SAKLIDIR</span>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-accent font-bold text-xs tracking-[0.3em] uppercase mb-6">NAVİGASYON</h3>
                            <ul className="space-y-3 text-sm">
                                {['Ana Sayfa', 'Faaliyet Alanları', 'Hakkımızda', 'İletişim'].map((item) => (
                                    <li key={item}>
                                        <Link
                                            href={`#${item === 'Ana Sayfa' ? 'hero' : item === 'Faaliyet Alanları' ? 'practice-areas' : item === 'Hakkımızda' ? 'about' : 'contact'}`}
                                            className="inline-flex items-center gap-2 text-gray-300 hover:text-accent transition-colors tracking-wide uppercase text-xs"
                                        >
                                            <span className="h-px w-4 bg-white/20 group-hover:bg-accent/60" />
                                            <span>{item}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-accent font-bold text-xs tracking-[0.3em] uppercase mb-6">MESAİ SAATLERİ</h3>
                            <ul className="space-y-3 text-xs tracking-[0.1em] text-gray-300">
                                {siteConfig.workingHours.map((item) => (
                                    <li key={item.label} className="flex justify-between border-b border-white/5 pb-1.5">
                                        <span className="uppercase">{item.label}</span>
                                        <span className="text-white font-medium">{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-primary/95">
                <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/10">
                    <p className="text-[10px] tracking-[0.08em] text-gray-400 text-center md:text-left max-w-3xl leading-relaxed uppercase">
                        BU SİTE TÜRKİYE BAROLAR BİRLİĞİ REKLAM YASAĞI YÖNETMELİĞİNE UYGUN OLARAK HAZIRLANMIŞTIR. SİTEDEKİ HİÇBİR BİLGİ HUKUKİ TAVSİYE NİTELİĞİ TAŞIMAZ.
                    </p>

                    <button
                        onClick={scrollToTop}
                        className="w-10 h-10 rounded-full bg-white/5 border border-white/20 hover:bg-accent hover:border-accent flex items-center justify-center transition-all duration-500 group"
                        aria-label="Yukarı Çık"
                    >
                        <ArrowUp size={16} className="text-accent group-hover:text-white transition-transform group-hover:-translate-y-1" />
                    </button>
                </div>
            </div>
        </footer>
    );
}
