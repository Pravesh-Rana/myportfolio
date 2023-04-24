/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './footer.css'
import {FaAngellist, FaTwitter, FaGithub, FaLinkedin, FaMedium, FaKaggle, FaSign, FaAd, FaAt, FaEnvelope, FaFirefoxBrowser, FaWindows, FaBookmark, FaCircleNotch, FaGlobe} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Pravesh Rana</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#project'>Projects</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>        
        {/* <li><a href='#testimonials'>Testimonials</a></li> */}
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/pravesh-rana-237941202/"><FaLinkedin /></a>
        <a href="https://angel.co/u/somdotta-sarkar"><FaGlobe/></a>
        <a href="mailto:ranapravesh30@gmail.com"><FaEnvelope/></a>
        <a href="https://github.com/Pravesh-Rana"><FaGithub /></a>        
        <a href="https://medium.com/@jhilick.s"><FaKaggle/></a>
      </div>
      <div className="footer_copyright">
        <small></small>
      </div>
    </footer>
  )
}

export default Footer