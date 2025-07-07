import React from 'react'
import './projects.css'
import theme from '../../assets/theme_pattern.svg'
import workout from '../../assets/pwfa.png'
import videoCall from '../../assets/voice_app.png'
import studentManagement from '../../assets/student_app.png'
import AnimatedContent from '../AnimatedContent/AnimatedContent'

const projects = () => {
  return (
    <div id='projects' className="projects">
        <div className="title">
            <h1>Projects</h1>
            <img src={theme} alt="Theme Pattern"  />
        </div>
        <div className="container">
            <AnimatedContent
                    distance={1500}
                    direction="horizontal"
                    reverse={false}
                    duration={2}
                    ease="power3.out"
                    initialOpacity={0}
                    animateOpacity
                    scale={1.1}
                    threshold={0.2}
                    delay={0.5}
                    >
            <div className="project">
                <img src={workout} alt="" />
                <div className="project-detail">
                    <h2>Personlized Workout & Fitness Application</h2>
                    <p>Developed the PWFA (Personalized Workout and Fitness App), a scalable, AI-driven fitness
                    application focused on customized workout planning. Built using React Native and Firebase, the
                    app captures user health data and goals to generate dynamic, monthly workout plans. Integrated
                    OpenAI API for intelligent plan generation and implemented a custom exercise database with
                    categorized instructions and video tutorials. Designed with modular architecture to support
                    future web integration and expandability.</p>
                </div>
            </div>
            </AnimatedContent>
            <AnimatedContent
                    distance={1500}
                    direction="horizontal"
                    reverse={true}
                    duration={2}
                    ease="power3.out"
                    initialOpacity={0}
                    animateOpacity
                    scale={1.1}
                    threshold={0.2}
                    delay={0.5}
                    >
            <div className="project">
                <div className="project-detail">
                    <h2>Video/Voice Call App</h2>
                    <p>Developed a real-time Voice and Video Calling App using Java and ZegoCloud SDK, designed for
                        smooth communication and responsive user experience. Utilized ZegoCloud’s real-time signaling,
                        call handling UI, and media stream management. focused on clean call lifecycle handling (initiate,
                        accept, reject, end) and ensured stability across devices.</p>
                </div>
                <img src={videoCall} alt="" />
            </div>
            </AnimatedContent>
            <AnimatedContent
                    distance={1500}
                    direction="horizontal"
                    reverse={false}
                    duration={2}
                    ease="power3.out"
                    initialOpacity={0}
                    animateOpacity
                    scale={1.1}
                    threshold={0.2}
                    delay={0.5}
                    >
            <div className="project">
                <img src={studentManagement} alt="" />
                <div className="project-detail">
                    <h2>Student Management App</h2>
                    <p>
                        A Student Management App in Java for Android, designed to streamline student and admin
                        operations in academic environments. Implemented features for user authentication, student
                        registration and academic record management. Created separate interfaces for students and
                        administrators, allowing role-based access and control.
                    </p>
                </div>
            </div>
            </AnimatedContent>
            
        </div>
    </div>
  )
}

export default projects