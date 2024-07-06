import React from 'react';
import Contact from '../../ContactSection/Contact';
// import '../ContactSection/Contact.css';
import Testimonial from '../../TestimonialSection/Testimonial';
// import "../TestimonialSection/Testimonial.css";
import Project from '../../Projects/project';
// import '../Projects/project.css';
import Skills from '../../SkillsSection/Skills';
// import '../SkillsSection/Skills.css'
import About from '../AboutSection/About';
// import '../AboutSection/About.css';
import Hero from '../../HeroSection/Hero';
// import '../HeroSection/Hero.css'
import Nav from '../../NavSection/Nav';
// import '../NavSection/Nav.css'
import "../assets/vendor/aos/aos.css" ;
import "../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../assets/vendor/boxicons/css/boxicons.min.css" ;
import "../assets/vendor/glightbox/css/glightbox.min.css" ;
import "../assets/vendor/swiper/swiper-bundle.min.css" ;
import './Body.css'

 function Portfolio(){
    return(<>
        <Nav/>
        <Hero/>
        <main id='main'>
        <About/>
        <Skills/>
        <Project/>
        <Testimonial/> 
        <Contact/>      
        </main>
    </>)
}
export default Portfolio;