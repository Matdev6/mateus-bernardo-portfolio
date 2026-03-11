"use client"
import Image from "next/image";
import { Github, Linkedin, ArrowDown, Sparkles } from "lucide-react";

type TechTaskType = {
   name: string 
}

type StatsType = {
    value: string,
    label: string
}

const techStack: TechTaskType[] = [
    { name: "React" },
    { name: "Next.js" },
    { name: "TypeScript" },
    { name: "Tailwind" },
    { name: "Node.js" },
];

const stats: StatsType[] = [
    { value: "2+", label: "Anos de exp." },
    { value: "15+", label: "Projetos" },
    { value: "100%", label: "Dedicação" },
];

const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)

    section?.scrollIntoView({
        behavior: "smooth"
    })
}



export default function HomeSection() {
    return (
        <section id="1" className="relative w-full bg-neutral-950 min-h-screen flex justify-center items-center px-6 overflow-hidden pt-28 pb-4 md:pt-24 lg:pt-0">

            {/* GRID */}
            <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundImage: `
                    linear-gradient(rgba(96,165,250,0.8) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(96,165,250,0.8) 1px, transparent 1px)
                    `,
                    backgroundSize: "60px 60px",
                }}
            />

            {/* GLOW */}
            <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-400/5 rounded-full blur-2xl pointer-events-none" />

            {/* CONTENT */}
            <div className="relative max-w-7xl w-full flex flex-col-reverse lg:flex-row items-center gap-14 lg:gap-20">

                {/* TEXTO */}
                <div className="w-full lg:w-1/2 flex flex-col gap-4 md:gap-6 text-center lg:text-left">

                    <span className="text-blue-400 text-sm uppercase tracking-widest">
                        Desenvolvedor Frontend
                    </span>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold bg-linear-to-r from-blue-300 to-blue-700 bg-clip-text text-transparent">
                        Mateus Bernardo
                    </h1>

                    <p className="text-neutral-400 max-w-xl mx-auto lg:mx-0">
                        Desenvolvedor Frontend especializado em React e Next.js,
                        focado em criar interfaces modernas, rápidas e escaláveis.
                    </p>

                    {/* STACK */}
                    <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                        {techStack.map((tech) => (
                            <span
                                key={tech.name}
                                className="px-3 py-1 text-xs rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300"
                            >
                                {tech.name}
                            </span>
                        ))}
                    </div>

                    {/* STATS */}
                    <div className="grid grid-cols-3 gap-6 pt-2 max-w-sm mx-auto lg:mx-0">
                        {stats.map((stat, i) => (
                            <div key={i} className="flex flex-col items-center lg:items-start">
                                <span className="text-2xl font-bold text-blue-400">
                                    {stat.value}
                                </span>
                                <span className="text-xs text-neutral-500">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* BOTÕES */}
                    <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-3">

                        <a onClick={() => scrollToSection("3")} className="px-6 py-2 rounded-full cursor-pointer bg-blue-500 hover:bg-blue-600 text-white transition font-medium shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                            Ver projetos
                        </a>

                        <a href="https://wa.me/5531975695921" target="_blank" className="px-6 py-2 rounded-full border bg-white/10 border-white/10 hover:border-blue-400 text-neutral-300 hover:text-blue-400 transition">
                            Contato
                        </a>

                    </div>

                    {/* REDES */}
                    <div className="flex gap-4 pt-4 justify-center lg:justify-start">

                        <a href="https://github.com/Matdev6" target="_blank" className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-blue-400 hover:text-blue-400 text-neutral-300 transition-all duration-300 hover:scale-110">
                            <Github size={20} />
                        </a>

                        <a href="https://www.linkedin.com/in/mateus-bernardo-38542533a/" className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-blue-400 hover:text-blue-400 text-neutral-300 transition-all duration-300 hover:scale-110">
                            <Linkedin size={20} />
                        </a>

                    </div>

                </div>

                {/* IMAGEM */}
                <div className="w-full lg:w-1/2 flex justify-center">

                    <div className="relative">

                        <div className="absolute inset-0 rounded-3xl bg-blue-500/20 blur-2xl scale-110 animate-pulse" />

                        <div className="absolute -inset-3 rounded-3xl border border-blue-400/10" />

                        <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border-2 border-blue-400/60 shadow-[0_0_40px_rgba(59,130,246,0.3)]">
                            <Image
                                src="/mateusBernardo.jpeg"
                                alt="Mateus Bernardo"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* BADGE */}
                        <div className="absolute -bottom-4 -left-4 px-3 py-2 rounded-xl bg-neutral-900 border border-white/10 shadow-xl flex items-center gap-2">
                            <Sparkles size={14} className="text-blue-400" />
                            <span className="text-xs text-neutral-300">
                                Open to work
                            </span>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}