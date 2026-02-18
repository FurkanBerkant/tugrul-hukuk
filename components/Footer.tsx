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
        <footer className="bg-primary text-white border-t border-white/10">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                    <div className="col-span-1 md:col-span-2">
                        <div className="mb-6">
                            <Logo isFooter />
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
                            {siteConfig.firmName}, Samsun&apos;da faaliyet gösteren bir avukatlık ve danışmanlık bürosudur.
                        </p>
                        <div className="text-xs text-gray-500">
                            © 2024 {siteConfig.firmName}. Tüm hakları saklıdır.
                        </div>
                    </div>

                    <div>
                        <h3 className="text-accent font-bold text-sm tracking-widest mb-6">HIZLI MENÜ</h3>
                        <ul className="space-y-3">
                            {['Ana Sayfa', 'Faaliyet Alanları', 'Hakkımızda', 'İletişim'].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={`#${item === 'Ana Sayfa' ? 'hero' : item === 'Faaliyet Alanları' ? 'practice-areas' : item === 'Hakkımızda' ? 'about' : 'contact'}`}
                                        className="relative inline-block text-gray-400 hover:text-white transition-colors text-sm after:absolute after:left-0 after:-bottom-0.5 after:h-[1px] after:w-0 after:bg-accent after:transition-all after:duration-200 hover:after:w-full"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-accent font-bold text-sm tracking-widest mb-6">ÇALIŞMA SAATLERİ</h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            {siteConfig.workingHours.map((item) => (
                                <li key={item.label} className="flex justify-between">
                                    <span>{item.label}</span>
                                    <span>{item.value}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-gray-500 text-center md:text-left max-w-3xl">
                        Sitemizdeki bilgiler Türkiye Barolar Birliği reklam yasağı yönetmeliğine uygun olarak hazırlanmıştır.
                        Sitede yer alan bilgiler hukuki tavsiye niteliğinde değildir.
                    </p>

                    <button
                        onClick={scrollToTop}
                        className="p-3 bg-white/5 hover:bg-accent hover:text-white rounded-full transition-all duration-300 group"
                        aria-label="Yukarı Çık"
                    >
                        <ArrowUp size={20} className="text-gray-400 group-hover:text-white" />
                    </button>
                </div>
            </div>
        </footer>
    );
}
