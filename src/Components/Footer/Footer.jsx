import React from 'react'
import './Footer.css'
import Wave from "../../img/wave.png";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

export const Footer = () => {
  return (
   <div className="footer">
    <img src={Wave} alt="" style={{ width: "100%" }} />
    <div className="f-content">
        <span>mohit.garg1605@gmail.com</span>
        <div className="f-icons">
        <a href='https://www.linkedin.com/in/mohit1997/' target="_blank" rel="noreferrer"><Linkedin color="white" size={"3rem"} /></a>
        <a href='www.facebook.com' target="_blank"><Facebook color="white" size={"3rem"} /></a>  
          <a href='https://github.com/gargmoh' target="_blank" rel="noreferrer"><Gitub color="white" size={"3rem"} /></a> 
        </div>
      </div>

   </div>
  )
}

export default Footer