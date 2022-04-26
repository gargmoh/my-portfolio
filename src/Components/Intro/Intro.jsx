
import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import Linkedin from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import image from "../../img/Profile_pic.png";
import { themeContext } from '../../Context';
import { useContext } from 'react';
import {motion} from 'framer-motion';
import { Link } from 'react-scroll/modules'
const Intro =() =>{
      // Transition
  const transition = { duration: 2, type: "spring" };

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
   <div className="intro" id='Intro'>
       <div className="i-left">
       <div className="i-name">

           <span style={{color: darkMode? 'white': ''}}>Hello! I'm</span>
           <span>Mohit Garg</span>
           <span>Software & Network Engineer <br/>
               experience in HTML, CSS,JAVA,C#,Node.js,<br/>
                React,Python,.NET, Cloud Computing
           </span>
           </div>
           <Link spy={true} to='Contact' smooth={true}>
           <button className='button i-button'>
               Hire Me</button>
               </Link>
            <div className='i-icons'>
            <a href='https://github.com/gargmoh' target="_blank"><img src={Github} alt="" /></a>
                <a href='https://www.linkedin.com/in/mohit1997/' target="_blank"><img src={Linkedin} alt="" /></a>
            <a href='https://www.instagram.com/' target="_blank"> <img src={Instagram} alt="" /></a>
            </div>

       </div>
       <div className="i-right">
        <img class="cus_profile" src={image} alt="" />
       
        
        {/* blur divs */}
        <div className="blur" style={{background: 
        "rgb(238 210 255)"}}></div>
         <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
        
       </div>
       
   </div>
  )
}

export default Intro