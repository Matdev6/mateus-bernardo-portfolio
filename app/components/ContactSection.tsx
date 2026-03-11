"use client"

import { motion } from "framer-motion"
import { Mail, Github, Linkedin, Phone } from "lucide-react"

type MidiasType = {
    label: string,
    link: string,
    icon: React.ReactElement
}

export default function ContactSection() {

    const midias: MidiasType[] = [
        {
            label: "mateusousa123@hotmail.com",
            link: "mailto:mateusousa123@hotmail.com",
            icon: <Mail className="text-blue-400" />
        },
        {
            label: "(31) 97569-5921",
            link: "tel:+5531975695921",
            icon: <Phone className="text-blue-400" />
        },
        {
            label: "github.com/Matdev6",
            link: "https://github.com/Matdev6",
            icon: <Github className="text-blue-400" />
        },
        {
            label: "linkedin.com/in/mateus-bernardo-38542533a/",
            link: "https://www.linkedin.com/in/mateus-bernardo-38542533a/",
            icon: <Linkedin className="text-blue-400" />
        }
    ]

    return (
        <section
            id="5"
            className="relative w-full flex justify-center bg-neutral-950 px-6 pt-28 pb-20 overflow-hidden"
        >

            {/* glow */}
            <div className="absolute w-130 h-130 bg-blue-500/10 blur-3xl rounded-full left-1/2 -translate-x-1/2 top-40" />

            <div className="w-full max-w-6xl flex flex-col items-center gap-16 relative">

                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <span className="text-blue-400 text-sm uppercase tracking-widest">
                        Contato
                    </span>

                    <h2 className="text-3xl md:text-4xl font-semibold text-white mt-2">
                        Vamos trabalhar juntos
                    </h2>

                    <p className="text-neutral-400 mt-4 max-w-xl mx-auto">
                        Estou disponível para projetos, freelances ou oportunidades
                        como desenvolvedor frontend.
                    </p>
                </motion.div>

                {/* GRID */}
                <div className="flex flex-col md:flex-row w-full gap-12">

                    {/* CONTATOS */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-6 md:w-1/2"
                    >

                        {midias.map((midia, i) => (
                            <a
                                key={i}
                                href={midia.link}
                                target="_blank"
                                className="flex items-center gap-4 p-4 rounded-xl bg-neutral-900/60 border border-white/5 hover:border-blue-400/40 hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-neutral-800">
                                    {midia.icon}
                                </div>

                                <span className="text-neutral-300 text-sm">
                                    {midia.label}
                                </span>
                            </a>
                        ))}

                        {/* WHATSAPP BUTTON */}
                        <a
                            href="https://wa.me/5531975695921"
                            target="_blank"
                            className="mt-4 px-8 py-3 text-center rounded-full bg-blue-500 hover:bg-blue-600 text-white font-medium transition"
                        >
                            Falar no WhatsApp
                        </a>

                    </motion.div>

                    {/* FORM */}
                    <motion.form
                        action="https://formspree.io/f/mreyqybo"
                        method="POST"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-4 md:w-1/2 bg-neutral-900/60 border border-white/10 backdrop-blur-md p-8 rounded-2xl"
                    >

                        <input
                            type="text"
                            name="name"
                            placeholder="Seu nome"
                            required
                            className="bg-neutral-800 border border-white/5 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-blue-400"
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Seu email"
                            required
                            className="bg-neutral-800 border border-white/5 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-blue-400"
                        />

                        <textarea
                            name="message"
                            placeholder="Sua mensagem"
                            rows={4}
                            required
                            className="bg-neutral-800 border border-white/5 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-blue-400 resize-none"
                        />

                        {/* anti spam */}
                        <input type="text" name="_gotcha" className="hidden" />

                        <button
                            type="submit"
                            className="mt-2 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium transition"
                        >
                            Enviar mensagem
                        </button>

                    </motion.form>

                </div>

            </div>

        </section>
    )
}