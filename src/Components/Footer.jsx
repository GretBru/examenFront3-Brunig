import React from 'react'
import { FaFacebook, FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>    
        
        <button className='back-to-top' onClick={() => {window.scrollTo({top: 0, behavior: "smooth"})}}>VOLVER ARRIBA</button>         
        <div className='logo'>
        <img src="./images/DH.png" width={200} alt='DH-logo' />
        </div>
        <div className='social-media'>
          <a href="https://www.facebook.com/"><h3><FaFacebook/></h3></a>
          <a href="https://www.instagram.com/"><h3><FaInstagram/></h3></a>
          <a href="https://web.whatsapp.com/"><h3><FaWhatsapp/></h3></a>
          <a href="https://www.tiktok.com/"><h3><FaTiktok/></h3></a>
        </div>
    </footer>
  )
}

export default Footer
