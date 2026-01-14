import { motion } from 'framer-motion'

const PageTransition = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] pointer-events-none"
      initial={{ x: '-100%' }}
      animate={{ x: '100%' }}
      transition={{
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      }}
    >
      <div
        className="w-full h-full"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, #ff6b35 20%, #ff6b9d 50%, #ff6b35 80%, transparent 100%)',
          opacity: 0.9,
        }}
      />
    </motion.div>
  )
}

export default PageTransition
