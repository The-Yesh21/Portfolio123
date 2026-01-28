import React, { useState, useEffect } from "react"
import "./Header.css"
import logo from "../../assets/images/logo.png"

const Header = () => {
  const [mobile, setMobile] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle Scroll
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header className={scrolled ? "header active" : "header"}>
      <div className='container d_flex'>
        <div className='logo'>
          <img src={logo} alt='Logo' />
        </div>

        <div className='navlink'>
          {/* Mobile Menu Toggle */}
          <ul className={mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
            <li><a href='#home'>Home</a></li>
            <li><a href='#features'>Features</a></li>
            <li><a href='#portfolio'>Portfolio</a></li>
            <li><a href='#resume'>Resume</a></li>
            <li><a href='#blog'>Blog</a></li>
            <li><a href='#contact'>Contact</a></li>
          </ul>

          <button className='toggle' onClick={() => setMobile(!mobile)}>
            {mobile ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header