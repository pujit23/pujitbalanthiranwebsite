import { motion } from 'framer-motion'

const LoadingScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 bg-navy flex items-center justify-center z-50 overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        <motion.div
          className="text-4xl md:text-6xl font-bold tracking-wider relative"
          style={{
            background: 'linear-gradient(135deg, #ff6b35 0%, #ff6b9d 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
          initial={{ 
            scale: 0.1,
            opacity: 0,
          }}
          animate={{ 
            scale: [0.1, 1.15, 1],
            opacity: [0, 1, 1],
          }}
          transition={{
            duration: 1.2,
            ease: [0.25, 0.46, 0.45, 0.94],
            times: [0, 0.7, 1],
          }}
        >
          P23
        </motion.div>
        <motion.div
          className="absolute inset-0 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #ff6b35 0%, #ff6b9d 50%, transparent 70%)',
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [0, 2, 1.5],
            opacity: [0, 0.8, 0.4],
          }}
          transition={{
            duration: 1.5,
            ease: [0.25, 0.46, 0.45, 0.94],
            times: [0, 0.6, 1],
          }}
        />
      </div>
    </motion.div>
  )
}

export default LoadingScreen
