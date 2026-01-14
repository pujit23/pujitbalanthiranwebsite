import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const IntroLoader = ({ onComplete, enabled = true }) => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    if (!enabled) {
      onComplete?.()
      return
    }

    // Check if intro has been shown this session
    // TEMPORARILY DISABLED FOR TESTING - Remove the comment below to re-enable session check
    // const hasSeenIntro = sessionStorage.getItem('introShown')
    // if (hasSeenIntro) {
    //   setIsVisible(false)
    //   onComplete?.()
    //   return
    // }

    // Mark as shown
    // sessionStorage.setItem('introShown', 'true')

    // Auto-hide after animation completes
    // Timing: 0.3s fade in + 0.4s delay + 0.8s sweep + 0.3s settle = ~1.8s total
    const timer = setTimeout(() => {
      setIsVisible(false)
      onComplete?.()
    }, 1800)

    return () => clearTimeout(timer)
  }, [enabled, onComplete])

  if (!isVisible) return null

  return (
    <motion.div
      className="fixed inset-0 bg-navy flex items-center justify-center z-[9999]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
      <div className="relative">
        {/* Base logo - solid white/off-white */}
        <motion.div
          className="text-4xl md:text-6xl lg:text-8xl font-black tracking-[0.15em] text-white relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2, ease: 'easeOut' }}
        >
          P23
        </motion.div>

        {/* Light sweep layer - gradient that sweeps across */}
        <motion.div
          className="absolute inset-0 text-4xl md:text-6xl lg:text-8xl font-black tracking-[0.15em] pointer-events-none z-20"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, #ff6b35 20%, #ff6b9d 50%, #ff6b35 80%, transparent 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
          initial={{ 
            clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
            opacity: 1,
          }}
          animate={{ 
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
            opacity: [1, 1, 0.8, 0],
          }}
          transition={{
            clipPath: {
              duration: 0.8,
              delay: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94],
            },
            opacity: {
              duration: 0.4,
              delay: 1.2,
              ease: 'easeOut',
            },
          }}
        >
          P23
        </motion.div>

        {/* Subtle glow that follows the sweep */}
        <motion.div
          className="absolute inset-0 blur-3xl pointer-events-none z-0"
          style={{
            background: 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(255, 107, 53, 0.5) 0%, rgba(255, 107, 157, 0.4) 30%, transparent 70%)',
            width: '150%',
            height: '150%',
            left: '-25%',
            top: '-25%',
          }}
          initial={{ 
            x: '-150%',
            opacity: 0,
          }}
          animate={{ 
            x: ['-150%', '150%'],
            opacity: [0, 0.8, 0.4, 0],
          }}
          transition={{
            duration: 0.8,
            delay: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        />
      </div>
    </motion.div>
  )
}

export default IntroLoader
