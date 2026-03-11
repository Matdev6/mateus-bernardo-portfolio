"use client"

import { Menu } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

type MenuItem = {
  label: string
  sectionId: string
}

const menuItems: MenuItem[] = [
  { label: "Início", sectionId: "1" },
  { label: "Sobre", sectionId: "2" },
  { label: "Projetos", sectionId: "3" },
  { label: "Experiência", sectionId: "4" },
  { label: "Contato", sectionId: "5" },
]

export default function Header() {

  const [openMenu, setOpenMenu] = useState(false)
  const [activeSection, setActiveSection] = useState("1")

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)

    if (!section) return

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })

    setOpenMenu(false)
  }

  useEffect(() => {

    const sections = document.querySelectorAll("section")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        threshold: 0.6,
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()

  }, [])

  return (
    <header className="w-full flex items-center justify-center fixed top-0 z-50">

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3, type: "tween" }}
        aria-label="Menu principal"
        className="flex items-center justify-between h-16 px-6 rounded-full border border-white/15 mt-4 md:mt-6 w-11/12 md:w-3/4 bg-neutral-900/30 backdrop-blur-2xl shadow-lg"
      >

        <h1 className="px-4 font-medium text-white">
          Mateus <span className="text-blue-500">Bernardo</span>
        </h1>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-2">

          {menuItems.map((item) => (

            <li key={item.sectionId}>

              <button
                onClick={() => scrollToSection(item.sectionId)}
                className={`py-2 px-6 rounded-full transition-all cursor-pointer duration-300
                  
                  ${
                    activeSection === item.sectionId
                      ? "text-blue-400 bg-white/5"
                      : "text-neutral-300 hover:text-blue-400"
                  }

                `}
              >
                {item.label}
              </button>

            </li>

          ))}

        </ul>

        {/* MOBILE BUTTON */}
        <button
          aria-label="Abrir menu"
          onClick={() => setOpenMenu((prev) => !prev)}
          className="md:hidden text-neutral-200"
        >
          <Menu />
        </button>

      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>

        {openMenu && (

          <motion.div
            onClick={() => setOpenMenu(false)}
            className="fixed left-0 top-0 w-screen h-screen bg-black/40 backdrop-blur-sm flex flex-row-reverse"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            <motion.nav
              onClick={(e) => e.stopPropagation()}
              initial={{ x: 300 }}
              animate={{ x: 0 }}
              exit={{ x: 300 }}
              transition={{ type: "tween", duration: 0.3 }}
              className="w-2/3 h-full bg-neutral-900 border-l border-white/10 pt-10 px-4"
            >

              <ul className="flex flex-col gap-6">

                {menuItems.map((item) => (

                  <li key={item.sectionId}>

                    <button
                      onClick={() => scrollToSection(item.sectionId)}
                      className={`text-lg px-4 py-2 rounded-md transition

                        ${
                          activeSection === item.sectionId
                            ? "text-blue-400"
                            : "text-neutral-300 hover:text-blue-400"
                        }

                      `}
                    >
                      {item.label}
                    </button>

                  </li>

                ))}

              </ul>

            </motion.nav>

          </motion.div>

        )}

      </AnimatePresence>

    </header>
  )
}