import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const navItems = [
  { id: 'myself', label: 'ABOUT ME' },
  { id: 'skills', label: 'SKILLS' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'cv', label: 'CV' },
  { id: 'connect', label: 'CONNECT' },
]

const NavigationBar = ({ sectionRefs }) => {
  const [activeSection, setActiveSection] = useState('myself')
  const GITHUB_URL = 'https://github.com/pujit23'
  const EMAIL_TO = 'pujitbalanthiran23@gmail.com'

  const scrollToSection = (sectionId) => {
    const ref = sectionRefs[sectionId]
    if (ref?.current) {
      const offset = 100
      const elementPosition = ref.current.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.scrollY - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150

      for (const [sectionId, ref] of Object.entries(sectionRefs)) {
        if (ref?.current) {
          const { offsetTop, offsetHeight } = ref.current
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sectionRefs])

  return (
    <motion.nav
      className="sticky top-0 z-40 bg-navy/95 backdrop-blur-sm border-b border-navy-light"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-4 md:gap-6 py-4">
          {navItems.map((item, index) => {
            const isConnect = item.id === 'connect'

            return (
              <div key={item.id} className="flex items-center gap-3">
                <motion.button
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 text-sm md:text-base font-medium uppercase tracking-wider transition-colors duration-300 ${
                    activeSection === item.id
                      ? 'text-orange'
                      : 'text-gray-400 hover:text-pink'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange via-pink to-orange"
                      layoutId="activeSection"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </motion.button>

                {isConnect && (
                  <div className="flex items-center gap-2">
                    <a
                      href={GITHUB_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="w-10 h-10 md:w-11 md:h-11 rounded-md bg-navy-light/50 border border-navy-light flex items-center justify-center text-gray-300 transition-all duration-200 hover:border-orange/60 hover:text-orange hover:bg-orange/10 active:scale-[0.98]"
                    >
                      <svg
                        className="w-5 h-5 md:w-6 md:h-6"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>

                    <a
                      href={`mailto:${EMAIL_TO}`}
                      aria-label="Email"
                      className="w-10 h-10 md:w-11 md:h-11 rounded-md bg-navy-light/50 border border-navy-light flex items-center justify-center text-gray-300 transition-all duration-200 hover:border-pink/60 hover:text-pink hover:bg-pink/10 active:scale-[0.98]"
                    >
                      <svg
                        className="w-5 h-5 md:w-6 md:h-6"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M4 6h16v12H4z" />
                        <path d="m4 7 8 6 8-6" />
                      </svg>
                    </a>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </motion.nav>
  )
}

export default NavigationBar
