import { motion } from 'framer-motion'

const NameIntro = () => {
  return (
    <motion.section
      className="min-h-screen h-screen flex items-center justify-center bg-navy relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.8, 
        delay: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94] 
      }}
    >
      <div className="text-center px-4">
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight text-white"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.4,
            ease: [0.25, 0.46, 0.45, 0.94] 
          }}
        >
          PUJIT BALANTHIRAN
        </motion.h1>
        
        {/* Subtle accent line */}
        <motion.div
          className="mt-8 h-0.5 w-24 md:w-32 mx-auto bg-gradient-to-r from-transparent via-orange to-transparent opacity-50"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 0.5 }}
          transition={{ 
            duration: 0.6, 
            delay: 0.7,
            ease: 'easeOut' 
          }}
        />
      </div>
    </motion.section>
  )
}

export default NameIntro
