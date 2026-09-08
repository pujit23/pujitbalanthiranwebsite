import { motion } from 'framer-motion'
import { useRef } from 'react'
import NavigationBar from '../components/NavigationBar'
import NameIntro from '../components/sections/NameIntro'
import MyselfSection from '../components/sections/MyselfSection'
import SkillsSection from '../components/sections/SkillsSection'
import ProjectsSection from '../components/sections/ProjectsSection'
import CVSection from '../components/sections/CVSection'
import ConnectSection from '../components/sections/ConnectSection'

const Details = () => {
  const myselfRef = useRef(null)
  const skillsRef = useRef(null)
  const projectsRef = useRef(null)
  const cvRef = useRef(null)
  const connectRef = useRef(null)

  const sectionRefs = {
    myself: myselfRef,
    skills: skillsRef,
    projects: projectsRef,
    cv: cvRef,
    connect: connectRef,
  }

  return (
    <motion.div
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <NameIntro />
      
      <NavigationBar sectionRefs={sectionRefs} />

      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-20">
        <MyselfSection ref={myselfRef} />
        <SkillsSection ref={skillsRef} />
        <ProjectsSection ref={projectsRef} />
        <CVSection ref={cvRef} />
        <ConnectSection ref={connectRef} />
      </div>
    </motion.div>
  )
}

export default Details
