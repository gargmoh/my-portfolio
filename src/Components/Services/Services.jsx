import React from 'react'
import './Services.css'
import Card from '../Card/Card';
import developer from "../../img/dev.png";
import network from "../../img/network.jpeg";
import cloud from "../../img/cloud.png";
import Resume from "./My-Resume.pdf"
import { themeContext } from '../../Context';
import { useContext } from 'react';
import {motion} from 'framer-motion';

export const Services = () => {
        // Transition
        const transition = { duration: 1, type: "spring" };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='services' id='Services'>
        {/* left side */}
    <div className='show'>
    <span style={{color: darkMode? 'white': ''}}>Achieved</span>
        <span>Skills</span>
        <span>
        Lorem ispum is simpley dummy text of printing of printing Lorem
          <br />
          ispum is simpley dummy text of printing
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download Resume</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
    </div>

        {/* right side */}
        <div className='experiences'>
          <motion.div 
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
          >
             {/* first expertise */}
             <Card
            emoji={developer}
            heading={"Developer"}
            details={"HTML, CSS, Javascript, React, Java, C#, PHP, React, .NET"}
          />
          </motion.div> 
         

          {/* second expertise */}
          <motion.div 
           initial={{ left: "-11rem", top: "12rem" }}
           whileInView={{ left: "-4rem" }}
           transition={transition}>
          <Card
            emoji={network}
            heading={"Design & Networking"}
            details={"Windows, Mac-OS Installation & Support, LAN & WAN Troubleshooting, Deep Analysis of Network"}
          />
          </motion.div>

           {/* third expertise */}
           <motion.div 
           initial={{ top: "19rem", left: "18rem" }}
           whileInView={{ left: "12rem" }}
           transition={transition}>
          <Card
            emoji={cloud}
            heading={"Solutions Architect"}
            details={"AWS Certified with hands-on experience of AWS Cloud Services, possess knowledge for the solutions architect"}
          />
          </motion.div>
        <div className='blur s-blur2' style={{background : "var(--purple)"}}></div>
        </div>

    </div>
  )
}

export default Services
