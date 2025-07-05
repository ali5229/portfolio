import React, { useState } from 'react'
import './navbar.css'
import theme from '../../assets/theme_pattern.svg'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const navbar = () => {
    const [menu , setMenu] = useState("home");
    
  return (
    <div id='home' className='navbar'>
        <div className='logo'>
          <h1>Ali Abbas</h1>
          <img src={theme} alt="" />
        </div>
        
        <ul className="menu">
            <li>
              <AnchorLink className='anchor-link' href='#home'>
                <p onClick={()=>{setMenu("home")}}>Intro</p>{menu =="home" ?<img src={underline}/>:<></>}
                </AnchorLink>
              </li>
            <li>
              <AnchorLink className='anchor-link' offset={50} href='#skills'>
                <p onClick={()=>{setMenu("skills")}}>Skills</p>{menu =="skills" ?<img src={underline}/>:<></>}
                </AnchorLink>
              </li>
            <li>
              <AnchorLink className='anchor-link' offset={50} href='#projects'>
                <p onClick={()=>{setMenu("projects")}}>Projects</p>{menu =="projects" ?<img src={underline}/>:<></>}</AnchorLink>
              </li>
            <li>
              <AnchorLink className='anchor-link' offset={50} href='#contact'>
                <p onClick={()=>{setMenu("contact")}}>Contact</p>{menu =="contact" ?<img src={underline}/>:<></>}
                </AnchorLink>
              </li>
        </ul>
        <AnchorLink className='anchor-link' offset={50} href='#contact'><div className="connect">
              Connect With Me
                </div></AnchorLink>
    </div>
  )
}
export default navbar