import React from 'react'
import './header.css'
import profile_img from '../../assets/profile.jpeg'
import linkedin from '../../assets/tech/linkedin.svg'
import instagram from '../../assets/tech/instagram.svg'
import twitter from '../../assets/tech/twitter.svg'
import github22 from '../../assets/tech/github3.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import ProfileCard from '../ProfileCard/ProfileCard'
import avatar from '../../assets/profile_nobg.png'
import leetcode from '../../assets/tech/leetcode.svg'

const header = () => {
  return (
    <div className='header'>
        <ul>
            <li><a href="https://github.com/ali5229" target="_blank"><img src={github22} alt="" /></a></li>
            <li><a href="https://leetcode.com/u/aliabbas55506" target="_blank"><img src={leetcode} alt="" /></a></li>
            <li><a href="https://www.linkedin.com/in/ali5229" target="_blank"><img src={linkedin} alt="" /></a></li>
            <li><a href="https://www.instagram.com/m_ali_abbas_404" target="_blank" ><img src={instagram} alt="" /></a></li>
            <li><a href="https://x.com/aliabbas55506" target="_blank" ><img src={twitter} alt="" /></a></li>
        </ul>
        <div className="header-content">
        <h1>I'm <span>Muhammad Ali Abbas</span>, Software Engineer</h1>
        
        <p>I build clean, efficient, and scalable software — from frontend interfaces to backend systems.
Passionate about writing maintainable code, tackling complex challenges, and learning new technologies along the way.</p>
        <div className="header-btns">
            <AnchorLink className='anchor-link' offset={50} href='#contact'><div className="head-connect">
              Connect With Me
              </div></AnchorLink>
             <a href="/CV_AliAbbas_latest.pdf.pdf" download=""><div className="resume">
                 Download Resume
              </div></a>
        </div>

        </div>
        <div>
           <ProfileCard
  name="Ali Abbas"
  title="Software Engineer"
  handle="Ali"
  status="Online"
  contactText="Contact Me"
  avatarUrl={avatar}
  showUserInfo={false}
  enableTilt={true}
  onContactClick={() => console.log('Contact clicked')}
/>
        </div>
                
    </div>
  )
}

export default header