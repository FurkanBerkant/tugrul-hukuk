"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Logo from "./Logo";

export default function Preloader() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000); // 2 seconds minimum to show brand identity

        // Also stop loading when everything is actually loaded
        const handleLoad = () => setLoading(false);
        window.addEventListener("load", handleLoad);

        return () => {
            clearTimeout(timer);
            window.removeEventListener("load", handleLoad);
        };
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
                    className="fixed inset-0 z-[100] bg-primary flex flex-col items-center justify-center"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="relative"
                    >
                        <Logo isFooter />
                        <motion.div
                            className="absolute -bottom-12 left-0 right-0 h-0.5 bg-white/10 overflow-hidden"
                        >
                            <motion.div
                                initial={{ x: "-100%" }}
                                animate={{ x: "100%" }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 1.5,
                                    ease: "easeInOut"
                                }}
                                className="w-1/2 h-full bg-accent shadow-[0_0_15px_rgba(197,160,89,0.5)]"
                            />
                        </motion.div>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-20 text-accent/60 text-[10px] tracking-[0.4em] uppercase font-bold"
                    >
                        Yükleniyor
                    </motion.p>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
