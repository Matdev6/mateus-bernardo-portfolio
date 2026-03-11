"use client";

import dynamic from "next/dynamic";

const Typewriter = dynamic(() => import("typewriter-effect"), {
    ssr: false,
});

export default function TypewriterText() {
    return (
        <Typewriter
            options={{
                strings: ["React", "Next.js", "Tailwind CSS" ,"UI moderna"],
                autoStart: true,
                loop: true,
            }}
        />
    );
}
