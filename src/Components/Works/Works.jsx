import React from 'react'
import './Works.css'
import Upwork from "../../img/Upwork.png";
import cogeco from "../../img/cogeco.png";
import Amazon from "../../img/amazon.png";
import tp from "../../img/tp_prev_ui.png";
import teranet from "../../img/teranet.jpeg";
import { themeContext } from '../../Context';
import { useContext } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll/modules';


export const Works = () => {

  const transition = {duration : 3.5, type: 'spring'};
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='works' id='Works'>
         <div className='show'>
        <span style={{color: darkMode? 'white': ''}}>Works for All these</span>
        <span>Compaines & Clients</span>
        <span>
        Worked for all these companies
        <br />
        and have gained a lot of experience and have enhanced
        <br />
        the skill set and also have develop the interest to build more of software.
        </span>
        <Link spy={true} to='Contact' smooth={true}>
        <span> <button className="button s-button">Hire Me</button> 
        </span> </Link>
        <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
        {/* right side */}
        <div className="w-right">
        <motion.div 
         initial={{ rotate: 45 }}
         whileInView={{ rotate: 0 }}
         viewport={{ margin: "-40px" }}
         transition={transition}
        
        className="w-mainCircle">
        <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={tp} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={cogeco} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={teranet} alt="" />
          </div>
         </motion.div>
          {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      
            </div>
    </div>
  );
};
  
export default Works