import { forwardRef } from 'react'
import { motion } from 'framer-motion'

const CVSection = forwardRef((props, ref) => {
  const handleDownload = () => {
    // In a real application, this would link to an actual PDF file
    // For now, it opens in a new tab (you can replace with actual PDF path)
    window.open('/cv.pdf', '_blank')
  }

  return (
    <motion.section
      ref={ref}
      className="min-h-screen flex items-center py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full text-center">
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="bg-gradient-to-r from-orange to-pink bg-clip-text text-transparent">
            CV
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.button
            onClick={handleDownload}
            className="px-8 py-4 bg-gradient-to-r from-orange to-pink text-white font-semibold text-lg uppercase tracking-wider rounded-lg hover:shadow-lg hover:shadow-orange/50 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download CV
          </motion.button>
          <p className="mt-6 text-gray-400 text-sm">
            Click to view or download my resume
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
})

CVSection.displayName = 'CVSection'

export default CVSection
