import { forwardRef } from 'react'
import { motion } from 'framer-motion'

const MyselfSection = forwardRef((props, ref) => {
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
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="bg-gradient-to-r from-orange to-pink bg-clip-text text-transparent"
          >
            ABOUT ME
          </span>
        </motion.h2>
        
        <motion.div
          className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p>
            Hello, I'm PUJIT BALANTHIRAN, a sophomore pursuing Computer Science and Engineering at Vellore Institute of Technology – AP. I am passionate about leveraging technology to design efficient, scalable, and user-centric solutions.
          </p>
          <p>
            My academic journey is currently focused on strengthening my expertise in Python, Java, and web technologies (HTML, CSS, and JavaScript), while also exploring advanced concepts in software development, algorithms, and data structures.
          </p>
          <p>
            I am actively working on a project that integrates problem-solving with practical implementation, aiming to bridge the gap between theoretical knowledge and real-world applications.
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
})

MyselfSection.displayName = 'MyselfSection'

export default MyselfSection
