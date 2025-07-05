import React from 'react'
import './footer.css'
import linkedin from '../../assets/tech/linkedin.svg'
import instagram from '../../assets/tech/instagram.svg'
import twitter from '../../assets/tech/twitter.svg'
import github22 from '../../assets/tech/github3.svg'

const footer = () => {
  return (
    <div className="footer">
                <p>© 2024 Muhammad Ali Abbas. All rights reserved.</p>
                <ul>
            <li><a href="https://github.com/ali5229" target="_blank"><img src={github22} alt="" /></a></li>
            <li><a href="https://www.linkedin.com/in/ali5229" target="_blank"><img src={linkedin} alt="" /></a></li>
            <li><a href="https://www.instagram.com/m_ali_abbas_404" target="_blank" ><img src={instagram} alt="" /></a></li>
            <li><a href="https://x.com/aliabbas55506" target="_blank" ><img src={twitter} alt="" /></a></li>
        </ul>
    </div>
        
  )
}

export default footer