"use client";

import dynamic from "next/dynamic";

const JusticeScale = dynamic(() => import("./JusticeScale"), {
    ssr: false,
});

export default function FloatingJusticeScale() {
    return <JusticeScale />;
}
