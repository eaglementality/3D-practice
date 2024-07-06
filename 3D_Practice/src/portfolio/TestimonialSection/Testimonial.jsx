import React from 'react';
import "../TestimonialSection/Testimonial.css";
import "../assets/vendor/bootstrap/css/bootstrap.min.css";
import eugene from "../assets/img/Eugene.jpg";
import junior from "../assets/img/Junior.jpeg";
import Aiden from "../assets/img/Aiden.jpg";
import fiifi from "../assets/img/fiifiboadu.jpg";
import daniel from '../assets/img/daniel.jpeg'
import Nathaniel from '../assets/img/Nathaniel.jpeg';
// import { Slide} from 'react-slideshow-image';


export default function Testimonials(){
      // window.addEventListener('scroll',reveal);
      
      
      // function reveal(){
      //   var reveals = document.querySelectorAll('.reveal');
      //   for(var i =0 ; i<= reveal.length; i++){
      //     var windowheight = window.innerHeight;
      //     var revealpoint = 150;    
      //     var revealtop = reveals[i].getBoundingClientRect().height
      //       if (revealtop< windowheight-revealpoint){
      //         reveals[i].classList.add('active')
      //       }
      //       else{
      //         reveals.classList.remove('active')
      //       }

      //   }
      // }
    return(<>
    <section id="testimonials" className="testimonials section-bg" >
   
    <div className="container ">

  <div className="section-title">
    <h2>Testimonials</h2>
  <p>The following are professionals who  trained me to be who i am today and others who have seen and testified to my work😘</p>
  </div>

<div className='T-flex reveal'>

        <div className="testimonial-item " >
          <p>
            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
            My team are always excited working with him . His dedication, energy and skills alone in team work is splendid. He is the best asset to have in a team. I recommend Jesse Owusu Yeboah to anyone who needs his services.
            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
          </p>
          <img src={fiifi} className="testimonial-img" alt=""/>
          <h3>Fiifi Buadu</h3>
          <h4>CEO/Co-founder of (CreativeBibinii company ltd)</h4>
        </div>

        <div className="testimonial-item ">
          <p>
            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
            Jesse has been working as a software engineer(intern) at Creative Bibinii Company Ltd for two long vacations now and has improved over time. Comments given by our Engineers tells that he is a fast learner, very creative and his attitude towards work is excellent. We are excited to have him every time.
            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
          </p>
          <img src={eugene} className="testimonial-img" alt=""/>
          <h3>Eugene Allotey</h3>
          <h4>Co-founder/Business Development (CreativeBibinii company ltd)</h4>
        </div>
    
        <div className="testimonial-item">
          <p>
            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
          That guy is good. He works smart and very fast. Infact our developers are always excited to have him work with them ever since he started working as an intern at Creative Bibinii Company Ltd. Having him work with you will be no regret at all.
            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
          </p>
          <img src={Aiden} className="testimonial-img" alt=""/>
          <h3>Aiden Apeyusi</h3>
          <h4>Product Development (Head) of CreativeBibinii company ltd</h4>
        </div>
        </div>
        
        <br/>
      <br/>
      <br/>
        
      
      <div className='T-flex '>
        
        <div className="testimonial-item"  >
          <p>
            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
            Jesse's attitude towards work is splendid. He is a fast learner and also creative. He was working as a software engineer(intern) for some years back at Creative Bibinii company ltd. which was fun working with him. You will never regret working with him.
            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
          </p>
          <img src={junior} className="testimonial-img" alt=""/>
          <h3>Junior Mabiala</h3>
          <h4>Software Developer (CreativeBibinii company ltd)</h4>
        </div>

        <div className="testimonial-item">
          <p>
            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
            Jesse's life as a computer Science student has been full of dedication & commitment to achieving positive results, both at school & as an intern. His attitude to work, teaching & learning has been remarkably excellent & distinguishes him amongst his peers. I therefore recommend Jesse to anyone who may need his services without any reservation. Pls do not hestitate to contact me via my email:<a href='https://yahoo.com'>doyeboa@yahoo.com</a>
            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
          </p>
          <img src={daniel} className="testimonial-img" alt=""/>
          <h3>Daniel Yeboah (Father😁)</h3>
          <h4>Professional Driver from (BackPress Company LTD.)</h4>
        </div>
        
        <div className="testimonial-item">
          <p>
            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
             I have been working together with Jesse as a software engineer on a start up project, and his skills and knowledge were unparalleled. Along with that, however, he brought an energy and dependability that made him crucial to the project. 
            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
          </p>
          <img src={Nathaniel} className="testimonial-img" alt=""/>
          <h3>Nathaniel Quansah</h3>
          <h4>Software Developer</h4>
        </div>
        </div>
      
    </div>
   
  
</section>
</>)
}