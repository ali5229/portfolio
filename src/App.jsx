import React from 'react'
import Navbar from './components/navbar/navbar.jsx'
import Header from './components/header/header.jsx'
import Skills from './components/skills/skills.jsx'
import Projects from './components/projects/projects.jsx'
import Contact from './components/contact/contact.jsx'
import Footer from './components/footer/footer.jsx'
import Background from './components/GalacticBg.jsx'
import AnimatedContent from './components/AnimatedContent/AnimatedContent.jsx'

const App = () => {
  return (
   
     <div style={{ position: 'relative' }}>
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1 
      }}>
        <Background entered={false} />
      </div>
      
      <div style={{ position: 'relative', zIndex: 1, overflow:'hidden' }}>
        <Navbar />
        <Header />
          <AnimatedContent
              distance={200}
              direction="vertical"
              reverse={false}
              duration={1.2}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={1.1}
              threshold={0.2}
              delay={0.3}
            >
              <Skills />
            </AnimatedContent>
              <AnimatedContent
              distance={200}
              direction="vertical"
              reverse={false}
              duration={1.2}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={1.1}
              threshold={0.2}
              delay={0.3}
            >
              <Projects />
            </AnimatedContent>
              <AnimatedContent
              distance={200}
              direction="vertical"
              reverse={false}
              duration={1.2}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={1.1}
              threshold={0.2}
              delay={0.3}
            >
              <Contact />
            </AnimatedContent>
        <Footer />
      </div>
    </div>  
   
  )
}

export default App