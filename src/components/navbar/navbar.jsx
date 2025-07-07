import React, { useState, useEffect,useRef } from 'react'
import './navbar.css'
import theme from '../../assets/theme_pattern.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {
    const [menu, setMenu] = useState("home");
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const menuRef = useRef();

    const openMenu = () =>{
      menuRef.current.style.right = "0";

    }
    const closeMenu = () =>{
      menuRef.current.style.right = "-350px";
      
    }
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const isScrollingUp = prevScrollPos > currentScrollPos;
            
            setVisible(isScrollingUp || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

    return (
        <div id='home' className={`navbar ${visible ? 'visible' : 'hidden'}`}>
            <div className='logo'>
              <h1>Ali Abbas</h1>
              <img className='logo-img' src={theme} alt="" />
              <img src={menu_open} onClick={openMenu} className='nav-mob-open' alt="" />
            </div>
            
            <ul className="menu" ref={menuRef}>
               <img src={menu_close} onClick={closeMenu} className='nav-mob-close' alt="" />
                <li>
                  <AnchorLink className='anchor-link' href='#home'>
                    <p onClick={()=>{setMenu("home")}}>Intro</p>
                    </AnchorLink>
                  </li>
                <li>
                  <AnchorLink className='anchor-link' offset={50} href='#skills'>
                    <p onClick={()=>{setMenu("skills")}}>Skills</p>
                    </AnchorLink>
                  </li>
                <li>
                  <AnchorLink className='anchor-link' offset={50} href='#projects'>
                    <p onClick={()=>{setMenu("projects")}}>Projects</p></AnchorLink>
                  </li>
                <li>
                  <AnchorLink className='anchor-link' offset={50} href='#contact'>
                    <p onClick={()=>{setMenu("contact")}}>Contact</p>
                    </AnchorLink>
                  </li>
            </ul>
            <AnchorLink className='anchor-link' offset={50} href='#contact'><div className="connect">
                  Connect With Me
                    </div></AnchorLink>
        </div>
    )
}

export default Navbar