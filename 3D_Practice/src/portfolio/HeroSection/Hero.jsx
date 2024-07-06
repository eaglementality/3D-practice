import React ,{useEffect} from 'react';
import '../HeroSection/Hero.css';
export default function Hero(){
    var typing = 'full Stack Engineer🤩and an AI Engineer😎';
var speed = 200;
var i = 0;
useEffect(  
function type(){
    if( i< typing.length){
        document.querySelector('#typ').innerHTML+= typing.charAt(i)
        i++;
        setTimeout(type,speed)
    }
})
return(<>
     <section id="hero" className='d-flex flex-column justify-content-center align-items-center'>
    <div className="hero-container">
      <h1>Jesse</h1>
      <p className='typing'>I'm a <span className="typed" id='typ'></span></p>
    </div>   
  </section>
</>)
}