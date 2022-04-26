
import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import Linkedin from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import image from "../../img/IMG_9899.jpg";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatingDiv from '../FloatingDiv/FloatingDiv'
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

           <span style={{color: darkMode? 'white': ''}}>Hy! I am</span>
           <span>Mohit Garg</span>
           <span>Software Engineer with experience in languages <br/>
               HTML, CSS,JAVA, C#,JS, Python, Cloud Computing
           </span>
           </div>
           <Link spy={true} to='Contact' smooth={true}>
           <button className='button i-button'>
               Hire Me</button>
               </Link>
            <div className='i-icons'>
            <a href='' ><img src={Github} alt="" /></a>
                <img src={Linkedin} alt="" />
                <img src={Instagram} alt="" />
            </div>

       </div>
       <div className="i-right">
       <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={image} alt="" />
        <motion.img
            intial={{left: "-26%"}}
            whileInView={{left: "-14%"}}
            transition={transition}
            src={glassesimoji}
            alt="" 
        />
        <motion.div 
            initial={{ top: "-4%", left: "74%" }}
            whileInView={{ left: "68%" }}
            transition={transition}
            className="floating-div"
        >
            <FloatingDiv image={crown} txt1="Software" txt2="Engineer"/>
        </motion.div>
        <motion.div 
            initial={{ left: "9rem", top: "18rem" }}
            whileInView={{ left: "5rem" }}
            transition={transition}
            className="floating-div">
            <FloatingDiv image={thumbup} txt1="Great" txt2="Work"/>
        </motion.div>
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