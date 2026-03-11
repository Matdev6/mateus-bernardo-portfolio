import Image from "next/image";
import { Github } from "lucide-react";

type ProjectsType = {
    title: string,
    description: string,
    image: string,
    tech: string[],
    github?: string,
    deploy: string
}

const projects: ProjectsType[] = [
    {
        title: "Eugenio Engenharia",
        description:
            "Site institucional desenvolvido para empresa de engenharia, com foco em apresentação de serviços, performance e design moderno.",
        image: "/projects/eugenioEngenharia.png",
        tech: ["React", "TypeScript", "TailwindCSS", "Vercel"],
        github: "https://github.com/Matdev6/EugenioEngenharia",
        deploy: "https://www.eugenioengenharia.com.br/",
    },
    {
        title: "Cruzeiro Esporte Clube Associação",
        description:
            "Site institucional desenvolvido (atualmente em homologação) para clubes associados do Cruzeiro, com páginas informativas, navegação moderna e layout responsivo.",
        image: "/projects/cruzeiro.png",
        tech: ["Next.js", "TypeScript", "TailwindCSS", "Vercel"],
        github: "",
        deploy: "https://clubesdocruzeirotemp.vercel.app/",
    },
    {
        title: "Ghostlab Studio",
        description:
            "Landing page para estúdio musical com player de beats, apresentação de serviços e contato direto via WhatsApp..",
        image: "/projects/ghostlabStudio.png",
        tech: ["Next.js", "TypeScript", "TailwindCSS", "Vercel"],
        github: "https://github.com/Matdev6/Ghost",
        deploy: "https://ghostlabstudio.vercel.app/",
    },
];

export default function ProjectsSection() {
    return (
        <section
            id="3"
            className="w-full bg-neutral-950 flex justify-center px-6 py-28"
        >
            <div className="max-w-7xl w-full flex flex-col gap-16">

                {/* HEADER */}
                <div className="text-center">
                    <span className="text-blue-400 text-sm uppercase tracking-widest">
                        Projetos
                    </span>

                    <h2 className="text-3xl md:text-4xl font-semibold text-white mt-2">
                        Projetos em destaque
                    </h2>

                    <p className="text-neutral-400 mt-4 max-w-xl mx-auto">
                        Alguns projetos que desenvolvi utilizando tecnologias modernas do
                        ecossistema JavaScript.
                    </p>
                </div>

                {/* GRID */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {projects.map((project: ProjectsType, index) => (
                        <div key={index} className="bg-neutral-800/60 border border-white/5 rounded-xl overflow-hidden hover:border-blue-400/30 transition-all cursor-pointer duration-300 shadow-blue-400/50 shadow-sm hover:scale-105"
                        >

                            {/* IMAGE */}
                            <div className="relative w-full h-52 md:h-60">
                                <Image src={project.image} alt={project.title} fill className="object-cover" />
                            </div>

                            {/* CONTENT */}
                            <div className="p-6 flex flex-col gap-4">

                                <h3 className="text-white text-lg font-semibold">
                                    {project.title}
                                </h3>

                                <p className="text-neutral-400 text-sm">
                                    {project.description}
                                </p>

                                {/* TECH */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="text-xs bg-blue-500/10 text-blue-400 px-2 py-1 rounded">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* LINKS */}
                                <div className="flex gap-4 pt-2">

                                    {project.github != "" &&
                                        <a href={project.github} target="_blank" className="flex items-center gap-2 text-neutral-300 hover:text-white text-sm">
                                            <Github size={16} />
                                            Código
                                        </a>}

                                    <a href={project.deploy} target="_blank" className="flex items-center gap-2 text-neutral-300 hover:text-white text-sm">
                                        <svg height="14" viewBox="0 0 76 65" fill="currentColor">
                                            <path d="M37.59 0L75.17 65H0L37.59 0Z" />
                                        </svg>
                                        Deploy
                                    </a>

                                </div>

                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}