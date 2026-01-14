import { forwardRef } from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Sikkim Monasteries Tourism Website',
    description: 'A tourism-focused web platform designed to showcase cultural heritage and historical significance of monasteries across Sikkim. The website provides structured information about all major monasteries, interactive map-based navigation, and immersive visual experiences to promote tourism and cultural awareness.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'Maps API'],
  },
  {
    title: 'FindHub – Campus Marketplace',
    description: 'A campus-focused marketplace platform that enables students to buy and sell permitted everyday items such as cables, accessories, books, and utilities within university community. The platform emphasizes ease of use, trust, and locality.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB'],
  },
  {
    title: 'UniMigo – University Community Platform',
    description: 'A community-driven platform designed to help new university students explore clubs, participate in activities, and connect with peers. UniMigo also includes an academic support section where students can access resources such as previous year question papers (PYQs) and peer-assisted academic help.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB'],
  },
]

const ProjectsSection = forwardRef((props, ref) => {
  return (
    <motion.section
      ref={ref}
      className="min-h-screen flex items-center py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full">
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="bg-gradient-to-r from-orange to-pink bg-clip-text text-transparent">
            PROJECTS
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-navy-light/50 border border-navy-light rounded-lg p-6 md:p-8 hover:border-orange transition-all duration-300 cursor-pointer group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 group-hover:text-orange transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-navy rounded text-xs md:text-sm text-gray-400 border border-navy-light group-hover:border-pink group-hover:text-pink transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
})

ProjectsSection.displayName = 'ProjectsSection'

export default ProjectsSection
