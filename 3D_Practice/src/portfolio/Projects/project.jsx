import React from "react";
import bankingGUI from "../assets/img/bankingGUI.png";
import carRental from '../assets/img/car-rental.png';
import comestic from '../assets/img/comestic.png';
import eventbooking from '../assets/img/eventbooking.png';
import profilepage from '../assets/img/profilepage.png';
import voteGUI from '../assets/img/voteGUI.png';
import ecormence from '../assets/img/ecormence.jpg';
import timetable from '../assets/img/timetable.png';
import whatsapp  from '../assets/img/WhatsApp.jpeg';
import '../Projects/project.css';
export default function Project (){
    //     window.addEventListener('scroll',reveal)
    // function reveal (){
    //     var reveals=document.querySelectorAll('.up')
    //         for(var i =0; i < reveals.length;i++)
    //         var windowheight = window.innerHeight;
    //         var revealpoint = 150;
    //         var revealtop =  reveals[i].getBoundingClientRect().top;

    //         if(revealtop<windowheight-revealpoint){
    //             reveals.classList.add('active')
    //         }
    //         else{
    //             reveal.classList.remove('active')
    //         }
    //     }

return <>
<section id="Projects" className="Projects section-bg">

<h2 className="pri" style={{marginBottom:"15px"}}>Projects</h2>
<div id="line" style={{marginBottom:"15px"}}></div>
<h5 style={{marginBottom:"25px",color:"white"}}>These are the projects i have worked on</h5>
<div className="firstSection">
<div id="first-a">
<img src={ecormence} alt="ecormence" height={190} width={270} style={{borderRadius:'10px'}}/>
<br/>
<h5>Sneakers</h5>
An ecommerce website for trading of sneeakers.Its fully functioned with a counter to count the number of items you want to add to the cart. The cart also displays the items with its prices and cool collection for men and women at the navbar
<br/>
<br/>
<a href="https://github.com/eaglementality" className="btn btn-dark">view site</a>
</div>
<div id="first-a">
<img src={carRental} alt="ecormence" height={190} width={270} style={{borderRadius:'10px'}}/>
<br/>
<br/>
<h5>Shark Quarters</h5>
A car rental management system where users can book for a car of their choice to parties, weddings etc. and travel for a period of time.
<br/>
<br/>
<a href="https://github.com/eaglementality" className="btn btn-dark">view site</a>
</div>
<div id="first-a">
<img src={timetable} alt="ecormence" height={190} width={270} style={{borderRadius:'10px'}}/>
<br/>
<br/>
<h5>TimeTable Management System</h5>
A timetable management system which auto generates a timetable for the students and teachers 
<br/>
<br/>
<a href="https://github.com/eaglementality" className="btn btn-dark">view site</a>
</div>

</div>

<div className="SecondSection">

<div id="first-a">
<img src={eventbooking} alt="ecormence" height={190} width={270} style={{borderRadius:'10px'}}/>
<br/>
<br/>
<h5>Leading Edge</h5>
An event booking system where users can book events , meetings etc.  
<br/>
<br/>
<a href="https://github.com/eaglementality" className="btn btn-dark">view site</a>
</div>

<div id="first-a">
<img src={comestic} alt="ecormence" height={190} width={270} style={{borderRadius:'10px'}}/>
<br/>
<br/>
<h5>Beauty Solution</h5>
A cosmetic website for trading of shower gel , skin products , hair products etc. 
<br/>
<br/>
<a href="https://github.com/eaglementality" className="btn btn-dark">view site</a>
</div>

<div id="first-a">
<img src={voteGUI} alt="ecormence" height={190} width={270} style={{borderRadius:'10px'}}/>
<br/>
<br/>
<h5>Tumb Power</h5>
A voting grapichal user interface for tertiary institution where students can vote for candidates of their choice.
<br/>
<br/>
<a href="https://github.com/eaglementality" className="btn btn-dark">view site</a>
</div>

</div>

 

<div className="ThirdSection ">

<div id="first-a">
<img src={bankingGUI} alt="ecormence" height={190} width={270} style={{borderRadius:'10px'}}/>
<br/>
<br/>
<h5>J-pay</h5>
A banking UI where users can deposite and withdraw from their account and also view their transaction history.  
<br/>
<br/>
<a href="https://github.com/eaglementality" className="btn btn-dark">view site</a>
</div>

<div id="first-a">
<img src={profilepage} alt="ecormence" height={190} width={270} style={{borderRadius:'10px'}}/>
<br/>
<br/>
<h5>Profile Page</h5>
A Profile page  which can be integrated into a system where a profile section is needed for users to upload pics and write about their selfs . 
<br/>
<br/>
<a href="https://github.com/eaglementality" className="btn btn-dark">view site</a>
</div>

<div id="first-a">
<img src={whatsapp} alt="ecormence" height={190} width={270} style={{borderRadius:'10px'}}/>
<br/>
<br/>
<h5>Payment platform</h5>
A Payment platform  which can be integrated into a system where a payment platform is needed for users to make payment via wallet , visa , mastercard etc. 
<br/>
<br/>
<a href="https://github.com/eaglementality" className="btn btn-dark">view site</a>
</div>

</div>
<br/>
<br/>
<h5 style={{color:"white",textAlign:'center'}}>For more projects i have worked on, visit my Github repo via this icon {">>"} <a href="https://github.com/eaglementality" className="bx bxl-github"></a></h5>
<div id="line" style={{marginBottom:"15px"}}></div>
</section>
</>
}