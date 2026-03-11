"use client"
import Image from "next/image";
import { motion } from "framer-motion"

export default function AboutSection() {
    return (
        <section
            id="2"
            className="w-full bg-neutral-950 min-h-screen flex justify-center items-center px-6 py-24"
        >
            <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center gap-16">

                {/* IMAGEM */}
                <div className="w-full lg:w-1/2 flex justify-center">

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="relative flex justify-center">

                        {/* glow */}
                        <div className="absolute inset-0 bg-blue-500/30 blur-3xl rounded-full" />

                        <Image
                            src="/about.svg"
                            alt="Sobre mim"
                            width={420}
                            height={420}
                            className="relative w-64 sm:w-80 lg:w-105 h-auto"
                        />

                    </motion.div>

                </div>

                {/* TEXTO */}
                <motion.div 
                    initial={{ x: 60, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="w-full lg:w-1/2 flex flex-col gap-6 text-center lg:text-left max-w-xl">

                    <span className="text-blue-400 text-md uppercase tracking-widest">
                        Sobre mim
                    </span>

                    <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight">
                        Desenvolvedor focado em criar experiências web modernas
                    </h2>

                    <p className="text-neutral-400">
                        Meu nome é Mateus Bernardo, tenho 20 anos e sou desenvolvedor frontend
                        especializado em React e Next.js, focado em criar interfaces modernas,
                        rápidas e escaláveis.
                    </p>

                    <p className="text-neutral-400">
                        Tenho experiência no desenvolvimento de aplicações web completas,
                        trabalhando com integração de APIs, interfaces responsivas e boas
                        práticas de performance no ecossistema JavaScript.

                    </p>

                    <p className="text-neutral-400">
                        Atualmente atuo na área de tecnologia do Cruzeiro Esporte Clube,
                        onde contribuo com suporte técnico e desenvolvimento web,
                        buscando sempre evoluir como desenvolvedor e criar soluções
                        que gerem valor real para usuários e empresas.
                    </p>

                </motion.div>

            </div>
        </section>
    );
}