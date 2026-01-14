import { motion } from 'framer-motion'

const DragonFireTransition = ({ onComplete }) => {
  return (
    <motion.div
      className="fixed inset-0 z-[9998] pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onAnimationComplete={() => {
        setTimeout(onComplete, 800)
      }}
    >
      {/* Dragon breath fire sweep - moving gradient layer */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(255, 107, 53, 0.8) 20%, rgba(255, 107, 157, 0.9) 40%, rgba(255, 107, 53, 0.6) 60%, transparent 100%)',
          filter: 'blur(2px)',
        }}
        initial={{
          x: '-100%',
        }}
        animate={{
          x: '100%',
        }}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      />
      
      {/* Secondary trailing fire for depth */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(255, 107, 53, 0.4) 30%, rgba(255, 107, 157, 0.5) 50%, transparent 70%)',
          filter: 'blur(4px)',
        }}
        initial={{
          x: '-100%',
        }}
        animate={{
          x: '100%',
        }}
        transition={{
          duration: 0.9,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: 0.1,
        }}
      />
      
      {/* Core bright center */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(255, 200, 150, 0.9) 45%, rgba(255, 200, 200, 0.9) 55%, transparent 100%)',
          filter: 'blur(1px)',
        }}
        initial={{
          x: '-100%',
        }}
        animate={{
          x: '100%',
        }}
        transition={{
          duration: 0.7,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      />
    </motion.div>
  )
}

export default DragonFireTransition
