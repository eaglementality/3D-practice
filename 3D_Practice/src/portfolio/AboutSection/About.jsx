import React from 'react';
import './About.css';
import profile from '../assets/img/jesse.jpg';



export default function About(){
    return (<>
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h2>About Me </h2>
          <div id='line1'></div>
          <p id='top-text'>Hello!👋, Jesse😁 is my name and i enjoy turning ideas💡 into digital products💻 which solves problems. Bringing my ideas into reality using the beauty of code{' </> '} has been my passion🤩 since 2020. I enjoy coding while listening to chill beats🎧 it helps me concentrate. I am open minded😉 , passionately curious🧐 , self obssessed🤗 and play well with others😜.</p>
        </div>

        <div className="row">
          <div className="col-lg-4" id='abtimg'>
            <img src={profile} className="img-fluid" alt="" id='abt_img'/>
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" id='content'>
            <h3> Full Stack Software Engineer &amp; AI Engineer.</h3>
            <div id='line2'></div>
            <br/>
            <p className="fst-italic" id='journey'>
              My experience in Software Engineering and AI has been very challenging and interesting for the past 2yrs. Sometimes you have to learn new programming languages to suit the system , fix surprising bugs🤮 etc. These challenges helped me understand and finally analyze the system am building, searching🧐 for solutions from stackoverflow & youtube etc. which also helped me learn and find alternative to solutions to solve problems .
              This Engineering journey📈 of mine has been really fantastic and has had a great impact in my problem solving skills. My long term view is to be amoung the best software engineers and my short term view is to improve on my communication skills.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>12th April 2001</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+223595545929</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Ghana, Greater-Accra</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>21</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Master</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>jesseowusuyeboah99@gmail.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    </>)


}