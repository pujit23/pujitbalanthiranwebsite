import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import SocialLinks from '../components/SocialLinks'
import ScrollIndicator from '../components/ScrollIndicator'

const Landing = () => {
  const navigate = useNavigate()

  const handleEnter = () => {
    navigate('/details')
  }

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center px-4 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-12 text-center"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <span className="block">YOUR</span>
        <span
          className="block mt-2"
          style={{
            background: 'linear-gradient(135deg, #ff6b35 0%, #ff6b9d 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          NAME
        </span>
      </motion.h1>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <SocialLinks />
      </motion.div>

      <motion.div
        className="mt-16"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <ScrollIndicator onClick={handleEnter} />
      </motion.div>
    </motion.div>
  )
}

export default Landing
