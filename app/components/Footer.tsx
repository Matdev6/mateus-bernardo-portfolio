import { Github, Linkedin } from "lucide-react"

export default function Footer() {
    return (
        <footer className="w-full flex justify-center bg-neutral-950 border-t border-white/5 px-6 py-8">

            <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">

                {/* texto */}
                <span className="text-sm text-neutral-400">
                    © {new Date().getFullYear()} Mateus Bernardo. Todos os direitos reservados.
                </span>

                {/* links */}
                <div className="flex items-center gap-4">

                    <a
                        href="https://github.com/Matdev6"
                        target="_blank"
                        className="text-neutral-400 hover:text-blue-400 transition"
                    >
                        <Github size={18} />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/mateus-bernardo-38542533a/"
                        target="_blank"
                        className="text-neutral-400 hover:text-blue-400 transition"
                    >
                        <Linkedin size={18} />
                    </a>

                </div>

            </div>

        </footer>
    )
}