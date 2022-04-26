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

        <span className='projects' style={{color: darkMode? 'white': ''}}> My Projects<br />
        Portfolio</span>

        {/* slider */}
       <Swiper
            spaceBetween={0}
            slidesPerView={3}
            grabCursor={true}
            className="portfolio-slider"
           >
       <SwiperSlide>
          <a href='https://github.com/gargmoh/BlackJack-Game' target="_blank"><img src={blackjack} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
        <a href='https://github.com/gargmoh/BubbleGame' target="_blank"> <img src={bubblegame} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
       <a href='https://github.com/gargmoh/StudentManagementSystem' target="_blank"><img src={sms} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" />
        </SwiperSlide>
       
       </Swiper>
    </div>
  )
}

export default Portfolio