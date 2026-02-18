"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { siteConfig } from "../config/site";

export default function Contact() {
    const { address, phones, email } = siteConfig;

    return (
        <section id="contact" className="py-24 bg-primary text-white relative">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-accent font-bold tracking-widest text-sm mb-3">İLETİŞİM</h2>
                        <h3 className="text-4xl font-serif font-bold mb-8">Bize Ulaşın</h3>
                        <p className="text-gray-300 mb-12 leading-relaxed">
                            Hukuki sorunlarınız için profesyonel destek almak istiyorsanız, iletişim formunu doldurabilir veya doğrudan bize ulaşabilirsiniz.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="p-4 bg-white/5 rounded-lg text-accent">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-serif font-bold text-lg mb-1">Adres</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {address.line1}
                                        <br />
                                        {address.postalCode} {address.district}/{address.city}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-4 bg-white/5 rounded-lg text-accent">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="font-serif font-bold text-lg mb-1">Telefon</h4>
                                    {phones.map((phone) => (
                                        <p key={phone} className="text-gray-400 text-sm">
                                            {phone}
                                        </p>
                                    ))}
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-4 bg-white/5 rounded-lg text-accent">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="font-serif font-bold text-lg mb-1">E-Posta</h4>
                                    <p className="text-gray-400 text-sm">{email}</p>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="mt-12 w-full h-48 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center text-gray-500 text-sm">
                            Google Maps Entegrasyonu
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-white text-primary p-8 md:p-12 rounded-2xl shadow-2xl"
                    >
                        <h3 className="text-2xl font-serif font-bold mb-6">Randevu Talep Formu</h3>
                        <form className="space-y-6">
                            <div className="space-y-1">
                                <label className="text-sm font-semibold text-gray-700">Ad Soyad</label>
                                <input
                                    type="text"
                                    className="w-full p-4 bg-offwhite border-none rounded-lg focus:ring-2 focus:ring-accent outline-none transition-all placeholder:text-gray-400"
                                    placeholder="Adınız Soyadınız"
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="text-sm font-semibold text-gray-700">Telefon</label>
                                <input
                                    type="tel"
                                    className="w-full p-4 bg-offwhite border-none rounded-lg focus:ring-2 focus:ring-accent outline-none transition-all placeholder:text-gray-400"
                                    placeholder="05XX XXX XX XX"
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="text-sm font-semibold text-gray-700">Mesajınız</label>
                                <textarea
                                    rows={4}
                                    className="w-full p-4 bg-offwhite border-none rounded-lg focus:ring-2 focus:ring-accent outline-none transition-all placeholder:text-gray-400 resize-none"
                                    placeholder="Hukuki sorununuz hakkında kısa bilgi..."
                                />
                            </div>

                            <button
                                type="button"
                                className="w-full py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                            >
                                GÖNDER
                                <Send size={18} />
                            </button>

                            <p className="text-xs text-center text-gray-400 mt-4">
                                Gönderilen bilgiler gizlilik politikamız çerçevesinde korunmaktadır.
                            </p>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
