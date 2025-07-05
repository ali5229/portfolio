import React from 'react'
import './skills.css'
import theme from '../../assets/theme_pattern.svg'
import rnative from '../../assets/tech/react_native.svg'
import astudio from '../../assets/tech/android_studio.svg'
import canva from '../../assets/tech/canva.svg'
import colab from '../../assets/tech/colab.svg'
import css from '../../assets/tech/css.svg'
import fbase from '../../assets/tech/firebase.svg'
import github from '../../assets/tech/github.svg'
import gitlab from '../../assets/tech/gitlab.svg'
import html from '../../assets/tech/html.svg'
import node from '../../assets/tech/nodejs.svg'
import photoshop from '../../assets/tech/photoshop.svg'
import rreact from '../../assets/tech/react.svg'
import tailwind from '../../assets/tech/tailwind_css.svg'
import vscode from '../../assets/tech/vscode.svg'
import figma from '../../assets/tech/figma.svg'
import openai from '../../assets/tech/openai.svg'

const skills = () => {
  return (
    <div id='skills' className='skills'>
            <div className="title">
                <h1>Skills</h1>
                <img src={theme} alt="" srcset="" />
            </div>
            <div className="para">
              <p>I've had hands-on experience on various languages. My journey started With C++, along the way I've leveled up a lot as programmer and developer. Whilst learning core concepts such as OOP and DSA, I've also gained experience in various software development technologies and methodologies.</p>
              
              
              
              <div className="languages">
                    <div className="language"><p>C++</p><hr style={{width:"80%"}}/></div>
                    <div className="language"><p>JavaScript</p><hr style={{width:"70%"}}/></div>
                    <div className="language"><p>TypeScript</p><hr style={{width:"60%"}}/></div>
                    <div className="language"><p>Java</p><hr style={{width:"50%"}}/></div>
                    <div className="language"><p>Python</p><hr style={{width:"50%"}}/></div>
            </div>
            </div>
            <div className="title2">
              <h1>Tools & Tech</h1>
              <img src={theme} alt="" />
            </div>
            <div className="technologies">
              <div className="technology">
                <img src={html} alt="" />
                <h2>HTML</h2>
              </div>
              <div className="technology">
                <img src={css} alt="" />
                <h2>CSS</h2>
              </div>
              <div className="technology">
                <img src={rreact} alt="" />
                <h2>React</h2>
              </div>
              <div className="technology">
                <img src={rnative} alt="" />
                <h2>React Native</h2>
              </div>
              <div className="technology">
                <img src={node} alt="" />
                <h2>Node JS</h2>
              </div>
              <div className="technology">
                <img src={tailwind} alt="" />
                <h2>Tailwind CSS</h2>
              </div>
              <div className="technology">
                <img src={node} alt="" />
                <h2>Node JS</h2>
              </div>
              <div className="technology">
                <img src={vscode} alt="" />
                <h2>VS Code</h2>
              </div>
              <div className="technology">
                <img src={astudio} alt="" />
                <h2>Android Studio</h2>
              </div>
              <div className="technology">
                <img src={colab} alt="" />
                <h2>Google Colab</h2>
              </div>
              <div className="technology">
                <img src={fbase} alt="" />
                <h2>Firebase</h2>
              </div>
              <div className="technology">
                <img src={github} alt="" />
                <h2>Github</h2>
              </div>
              <div className="technology">
                <img src={gitlab} alt="" />
                <h2>GitLab</h2>
              </div>
              <div className="technology">
                <img src={canva} alt="" />
                <h2>Canva</h2>
              </div>
              <div className="technology">
                <img src={photoshop} alt="" />
                <h2>Photoshop</h2>
              </div>
              <div className="technology">
                <img src={figma} alt="" />
                <h2>Figma</h2>
              </div>
              <div className="technology">
                <img src={openai} alt="" />
                <h2>OpenAI</h2>
              </div>
             
              
            </div>
    </div>
  )
}

export default skills