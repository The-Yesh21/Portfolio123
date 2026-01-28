import React from "react"
import logo1 from "../assets/images/logo.png"
import "./Footer.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container text-center'>
          <div className='img'>
            <img src={logo1} alt='Logo' className='footer-logo' />
          </div>
          <p>© {new Date().getFullYear()}. All rights reserved by Yeshwanth.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer