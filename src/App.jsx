import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import IntroLoader from './components/IntroLoader'
import DragonFireTransition from './components/DragonFireTransition'
import Details from './pages/Details'

function App() {
  const [showIntro, setShowIntro] = useState(true)
  const [introComplete, setIntroComplete] = useState(false)
  const [showTransition, setShowTransition] = useState(false)

  useEffect(() => {
    document.title = 'Personal Website'
  }, [])

  const handleIntroComplete = () => {
    setIntroComplete(true)
    setShowTransition(true)
  }

  const handleTransitionComplete = () => {
    setShowTransition(false)
  }

  // Toggle to enable/disable intro (set to false to skip)
  // Set to false to always skip, or clear sessionStorage to see it again
  const INTRO_ENABLED = true

  if (!introComplete) {
    return (
      <IntroLoader 
        onComplete={handleIntroComplete} 
        enabled={INTRO_ENABLED}
      />
    )
  }

  return (
    <>
      <AnimatePresence>
        {showTransition && (
          <DragonFireTransition onComplete={handleTransitionComplete} />
        )}
      </AnimatePresence>
      
      {/* Main page is rendered behind the transition */}
      <Details />
    </>
  )
}

export default App
