"use client";

import dynamic from "next/dynamic";

const JusticeScale = dynamic(() => import("./JusticeScale"), {
    ssr: false,
});

export default function FloatingJusticeScale() {
    return <JusticeScale className="fixed bottom-6 right-6 w-32 h-32 sm:w-44 sm:h-44 hidden lg:block" />;
}
