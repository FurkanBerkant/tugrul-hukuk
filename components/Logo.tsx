"use client";

import { Scale } from "lucide-react";
import { clsx } from "clsx";

interface LogoProps {
    isScrolled?: boolean;
    isFooter?: boolean;
}

export default function Logo({ isScrolled, isFooter }: LogoProps) {
    const textColor = isFooter ? "text-white" : isScrolled ? "text-primary" : "text-white";
    const subTextColor = isFooter ? "text-gray-400" : isScrolled ? "text-primary/70" : "text-white/80";

    return (
        <div className="flex items-center gap-3">
            {/* Icon Circle */}
            <div className={clsx(
                "flex items-center justify-center rounded-full border-2 transition-colors duration-300",
                isFooter
                    ? "w-16 h-16 border-accent bg-transparent"
                    : "w-12 h-12 md:w-14 md:h-14 border-accent bg-white/10 backdrop-blur-sm"
            )}>
                <Scale
                    size={isFooter ? 32 : 28}
                    className={clsx(
                        "transition-colors",
                        isFooter ? "text-white" : isScrolled ? "text-primary" : "text-white"
                    )}
                    strokeWidth={1.5}
                />
            </div>

            {/* Text Stack */}
            <div className="flex flex-col items-start text-left leading-none">
                <span
                    className={clsx(
                        "font-serif font-bold tracking-tight transition-colors",
                        isFooter ? "text-2xl md:text-3xl" : "text-lg md:text-xl",
                        textColor
                    )}
                >
                    TUĞRUL HUKUK
                </span>

                <div className="flex items-center justify-center gap-3 my-1 w-full">
                    <span
                        className={clsx(
                            "h-[1px] w-8 bg-accent/60",
                            isFooter ? "opacity-80" : "opacity-60"
                        )}
                    />
                    <span
                        className={clsx(
                            "font-serif italic text-[8px] sm:text-[9px] uppercase tracking-wider text-accent",
                        )}
                    >
                        ve
                    </span>
                    <span
                        className={clsx(
                            "h-[1px] w-8 bg-accent/60",
                            isFooter ? "opacity-80" : "opacity-60"
                        )}
                    />
                </div>

                <span
                    className={clsx(
                        "font-serif font-bold tracking-tight transition-colors",
                        isFooter ? "text-2xl md:text-3xl" : "text-lg md:text-xl",
                        textColor
                    )}
                >
                    DANIŞMANLIK
                </span>
            </div>
        </div>
    );
}
