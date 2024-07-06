import React from "react";
import '../SkillsSection/Skills.css';
import react from '../assets/img/react.png';
import nodejs from '../assets/img/node-js.png';
import flask from '../assets/img/flask.png';
import bootstrap from '../assets/img/bootstrap.png';
import git from '../assets/img/git.png';
import css from '../assets/img/css3.png';
import java from '../assets/img/java.png';
import html from '../assets/img/html5.png';
import github from '../assets/img/github.png';
import mongodb from '../assets/img/mongodb.png';
import python from  '../assets/img/python.png';
import visualstudiocode from '../assets/img/visual-studio-code.png';
import visualstudio from '../assets/img/visualstudio.png';
import mysql from '../assets/img/mysql.png';
import php from '../assets/img/php.png';
import javascript from '../assets/img/javascript.png';
import postgresql from '../assets/img/postgresql.png';
import anaconda from '../assets/img/icons8-anaconda-48.png';
import pycharm from '../assets/img/icons8-pycharm-48.png';
import jupyter from '../assets/img/icons8-jupyter-48.png';
import AI from '../assets/img/ai-brain.png';
export default function Skills(){
    
    return(<>
<section id="skills" className="skills section-bg">
      <div className="container">

        <div className="section-title">
          <h2 >Skills</h2>
          <p className="Skillp">These are the engineering tools i trained myself with for Software Development.</p>
        </div>
        <h2>Full stack</h2>
        <br/>
        <br/>
        <div className="row  skills-content">
          <div className="col-lg-6" >
          <h2>Technologies</h2>
          <img src={react} alt='react' height={100} width={100}/>
          <img src={nodejs} alt='nodejs' height={100} width={100}/>
          <img src={bootstrap} alt='bootstrap' height={100} width={100}/>
          <img src={php} alt='php' height={100} width={100}/>
          <img src={python} alt='python' height={100} width={100}/>
          <br/>
          <br/>
          <img src={java} alt='java' height={100} width={100}/>
          <img src={html} alt='html' height={100} width={100}/>
          <img src={css} alt='css' height={100} width={100}/>
          <img src={flask} alt='flask' height={100} width={100}/>
          <img src={javascript} alt='javascript' height={100} width={100}/>
          <img src={AI} alt='javascript' height={100} width={100}/>
          </div>

          <div className="col-lg-6" >
          <h2>DataBase</h2>
          <img src={mongodb} alt='mongodb'  height={100} width={100}/>
          <img src={mysql} alt='mysql'  height={100} width={100}/>
          <img src={postgresql} alt='postgresql'  height={100} width={100}/>
          </div>
          
          <div className="col-lg-6" >
          <br/>
          <h2>Others</h2>
          <img src={visualstudio} alt='visualstudio'  height={100} width={100}/>
          <img src={visualstudiocode} alt='visualstudiocode'  height={100} width={100}/>
          <img src={git} alt='git'  height={100} width={100}/>
          <img src={github} alt='github'  height={100} width={100}/>
          <img src={pycharm} alt='pycharm'  height={100} width={100}/>
          <img src={anaconda} alt='anaconda'  height={100} width={100}/>
          <img src={jupyter} alt='jupyter'  height={100} width={100}/>
          </div>
  
          </div>

        </div>
    </section>
    </>)
}