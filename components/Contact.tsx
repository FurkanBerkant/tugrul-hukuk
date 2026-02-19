"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "../config/site";

export default function Contact() {
    const { address, phones, email } = siteConfig;
    const mapsLabel = "Tuğrul Hukuk ve Danışmanlık";
    const mapsQuery = `${mapsLabel}, ${address.line1}, ${address.district}/${address.city}`;
    const mapsAppUrl = "https://maps.app.goo.gl/scQ69MFSG6BagHwS8";
    const mapsSrc = `https://www.google.com/maps?q=${encodeURIComponent(mapsQuery)}&output=embed`;

    return (
        <section id="contact" className="py-24 bg-primary text-white relative">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <span className="text-accent font-bold tracking-[0.3em] text-xs uppercase mb-4 block">İLETİŞİM</span>
                        <h3 className="text-3xl md:text-4xl font-serif font-black mb-10 leading-tight">İletişim Bilgileri</h3>

                        <div className="space-y-10 mb-16">
                            {[
                                { icon: MapPin, title: "Adres", text: `${address.line1}, ${address.district}/${address.city}` },
                                { icon: Phone, title: "Telefon", text: phones.join(" / ") },
                                { icon: Mail, title: "E-mail", text: email }
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-6 group">
                                    <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300 font-bold uppercase text-[10px]">
                                        <item.icon size={20} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <h4 className="font-serif font-bold text-lg mb-1 tracking-tight">{item.title}</h4>
                                        <p className="text-gray-400 text-sm font-light leading-relaxed max-w-xs transition-colors group-hover:text-white">
                                            {item.text}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </motion.div>

                    {/* Google Maps */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="bg-white p-6 md:p-8 shadow-[0_40px_80px_rgba(0,0,0,0.16)] rounded-2xl relative"
                    >
                        <div className="absolute top-0 left-0 w-full h-1.5 bg-accent rounded-t-2xl" />
                        <h3 className="text-3xl font-serif font-black text-primary mb-6 tracking-tight">Harita</h3>

                        <div className="relative w-full overflow-hidden rounded-xl border border-gray-100 shadow-md">
                            <iframe
                                title="Tuğrul Hukuk Konum"
                                src={mapsSrc}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-[360px] md:h-[440px]"
                            />
                        </div>

                        <div className="mt-6 flex items-center justify-between gap-4">
                            <p className="text-[11px] tracking-[0.15em] uppercase text-gray-400">
                                {mapsQuery}
                            </p>
                            <a
                                href={mapsAppUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[11px] font-bold tracking-[0.2em] uppercase text-primary hover:text-accent transition-colors"
                            >
                                Google Maps’te Aç
                            </a>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
