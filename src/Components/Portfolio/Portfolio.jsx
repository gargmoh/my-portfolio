import React from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import blackjack from "../../img/blackjack.jpeg";
import bubblegame from "../../img/bubblegame.jpeg";
import sms from "../../img/sms.jpeg";
import MusicApp from "../../img/musicapp.png";
import { themeContext } from '../../Context';
import { useContext } from 'react';


export const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id='Portfolio'>

        {/* Heading */}
        <span style={{color: darkMode? 'white': ''}}> My Projects</span>
        <span>Portfolio</span>

        {/* slider */}
       <Swiper
            spaceBetween={0}
            slidesPerView={3}
            grabCursor={true}
            className="portfolio-slider"
           >
       <SwiperSlide>
          <img src={blackjack} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bubblegame} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sms} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" />
        </SwiperSlide>
       
       </Swiper>
    </div>
  )
}

export default Portfolio