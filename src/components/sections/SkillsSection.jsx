import { forwardRef } from 'react'
import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['Java', 'Python', 'C', 'C++'],
  },
  {
    title: 'Web Technologies',
    skills: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Databases',
    skills: ['SQL', 'MongoDB'],
  },
  {
    title: 'Core Computer Science',
    skills: ['Data Structures'],
  },
  {
    title: 'Tools & Platforms',
    skills: ['MATLAB (Digital Image Processing)', 'Vivado', 'Arduino', 'Tinkercad', 'Fritzing'],
  },
]

const SkillsSection = forwardRef((props, ref) => {
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
            SKILLS
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="bg-navy-light/50 border border-navy-light rounded-lg p-6 md:p-8 hover:border-orange/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-orange">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-navy rounded border border-navy-light text-gray-300 text-sm md:text-base hover:border-pink hover:text-pink transition-colors duration-300"
                  >
                    {skill}
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

SkillsSection.displayName = 'SkillsSection'

export default SkillsSection
