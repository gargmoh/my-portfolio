import React from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import { useState } from "react";
import { themeContext } from '../../Context';
import { useContext } from 'react';

const Contact = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const form = useRef();
    const [done, setDone] = useState(false);
   

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_1i0bsub', 'template_ht0t4mi', form.current, 'AosjzsyQr1Jfv_6OQ')
        .then((result) => {
            console.log(result.text);
            setDone(true);
           
        }, (error) => {
            console.log(error.text);
        });
    };
   
  return (
    <div className="contact-form" id="Contact">
        <div className="w-left">
            <div className="show">
                <span style={{color: darkMode? 'white': ''}}>Get in touch</span>
                <span>Contact Me</span>
                <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}>
                </div>
            </div>
        </div>
        {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className="user"  placeholder="Name"/>
          <input type="email" name="user_email" className="user" placeholder="Email"/>
          <textarea name="message" className="user" placeholder="Message"/>
          <input type="submit" value="Send" className="button"/>
          <span>{done && "Thanks for contacting me!!"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
       </form>
      </div>
    </div>
  )
}

export default Contact