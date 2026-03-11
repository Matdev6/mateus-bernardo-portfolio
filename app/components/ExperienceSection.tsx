"use client"

import { motion } from "framer-motion"
import { Briefcase, GraduationCap } from "lucide-react"

type Experience = {
    company: string
    role: string
    job: boolean
    period: string
    description: string
}

const experiences: Experience[] = [
    {
        company: "Centro Universitário Newton Paiva",
        role: "Análise e Desenvolvimento de Sistemas",
        job: false,
        period: "2026 - 2028",
        description:
            "Graduação focada em desenvolvimento de software, lógica de programação e engenharia de software.",
    },
    {
        company: "Cruzeiro Esporte Clube",
        role: "Suporte Técnico / Desenvolvimento Web",
        job: true,
        period: "2024 - Atual",
        description:
            "Atuação na área de tecnologia com suporte técnico, manutenção de sistemas internos e desenvolvimento do novo site utilizando Next.js.",
    },
    {
        company: "Projetos Freelance",
        role: "Desenvolvedor Frontend",
        job: true,
        period: "2024 - 2026",
        description:
            "Desenvolvimento de aplicações web modernas com React, integração de APIs e criação de interfaces responsivas.",
    },
]

export default function ExperienceSection() {
    return (
        <section
            id="4"
            className="relative w-full bg-neutral-950 flex justify-center px-6 pt-28 pb-16 overflow-hidden"
        >
            {/* Glow background */}
            <div className="absolute w-150 h-150 bg-blue-500/10 blur-3xl rounded-full left-1/2 -translate-x-1/2 top-40" />

            <div className="max-w-5xl w-full flex flex-col gap-20 relative">

                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <span className="text-blue-400 text-sm uppercase tracking-widest">
                        Experiência e Educação
                    </span>

                    <h2 className="text-3xl md:text-4xl font-semibold text-white mt-2">
                        Minha trajetória profissional
                    </h2>

                    <p className="text-neutral-400 mt-4 max-w-xl mx-auto">
                        Experiências e projetos que contribuíram para o meu crescimento
                        como desenvolvedor.
                    </p>
                </motion.div>

                {/* TIMELINE */}
                <div className="relative flex flex-col gap-16">

                    {/* linha */}
                    <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: "100%" }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="absolute left-5 top-0 w-0.5 bg-linear-to-b from-blue-400/50 via-white/10 to-transparent"
                    />

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="relative flex items-start gap-6"
                        >
                            {/* ICON */}
                            <div className="relative z-10 shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-blue-900 border border-blue-400/30 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                                {exp.job ? (
                                    <Briefcase size={18} className="text-blue-400" />
                                ) : (
                                    <GraduationCap size={18} className="text-blue-400" />
                                )}
                            </div>

                            {/* CARD */}
                            <div className="bg-neutral-800/60 backdrop-blur-md border border-white/5 rounded-xl p-6 flex flex-col gap-3 hover:border-blue-400/40 hover:-translate-y-1 transition-all duration-300 w-full">

                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">

                                    <h3 className="text-white font-semibold text-lg">
                                        {exp.role}
                                    </h3>

                                    <span className="text-sm text-neutral-400">
                                        {exp.period}
                                    </span>

                                </div>

                                <span className="text-blue-400 text-sm font-medium">
                                    {exp.company}
                                </span>

                                <p className="text-neutral-400 text-sm leading-relaxed">
                                    {exp.description}
                                </p>

                            </div>

                        </motion.div>
                    ))}

                </div>

            </div>
        </section>
    )
}