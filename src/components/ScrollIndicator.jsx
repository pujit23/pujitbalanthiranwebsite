import { motion } from 'framer-motion'
import { useState } from 'react'

const ScrollIndicator = ({ onClick }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex flex-col items-center gap-2 text-gray-400 hover:text-orange transition-colors duration-300 group"
      whileHover={{ y: 5 }}
      whileTap={{ y: 0 }}
    >
      <span className="text-sm uppercase tracking-wider font-medium">Enter</span>
      <motion.div
        className="w-6 h-10 border-2 border-current rounded-full flex items-start justify-center p-2"
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <motion.div
          className="w-1.5 h-1.5 bg-current rounded-full"
          animate={{
            opacity: [1, 0.3, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.div>
    </motion.button>
  )
}

export default ScrollIndicator
