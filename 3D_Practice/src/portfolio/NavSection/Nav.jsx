import React, { useState } from 'react';
import '../NavSection/Nav.css'
import profile from '../assets/img/jesse.jpg';
import "../assets/vendor/aos/aos.css" ;
import "../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../assets/vendor/boxicons/css/boxicons.min.css" ;
import "../assets/vendor/glightbox/css/glightbox.min.css" ;
import "../assets/vendor/swiper/swiper-bundle.min.css"


export default function Nav(){



 function toggle(){
      document.querySelector(".header").classList.toggle('show')
}


return(
    <>
     <i  className='bi bi-list mobile-nav-toggle d-xl-none' onClick={toggle} ></i>
    <header className='header'>
    <div className='d-flex flex-column'>

      <div className='profile'>
        <img src={profile} alt="" />
        <h1 className='text-light'><a href="#">Jesse </a></h1>
        <hr/>
        <div className='social-links mt-3 text-center'>
          <a href='https://twitter.com/JesseYeboah7' className='twitter'><i className='bx bxl-twitter'></i></a>
          <a href='https://www.instagram.com/jesseyeboah62' className='instagram'><i className='bx bxl-instagram'></i></a>
          <a href='https://github.com/eaglementality' className='google-plus'><i className='bx bxl-github'></i></a>
          <a href='https://wa.me/0595545929' className='linkedin'><i className='bx bxl-whatsapp'></i></a>
        </div>
      </div>

      <nav id="navbar" className="nav-menu navbar">
        <ul>
          <li><a href="#hero" className='nav-link scrollto active'><i className="bx bx-home"></i> <span>Home</span></a></li>
          <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></a></li>
          <li><a href="#skills" className="nav-link scrollto"><i className="bx bx-atom"></i> <span>Skills</span></a></li>
          <li><a href="#Projects" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Projects</span></a></li>
          <li><a href="#testimonials" className="nav-link scrollto"><i className="bx bx-group"></i> <span>Testimonials</span></a></li>
          <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></a></li>
        </ul>
      </nav>
    </div>
  </header>
</>
)
}