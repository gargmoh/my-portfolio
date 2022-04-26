import React from 'react'
import './Navbar.css'
import Toggle from "../Toggle/Toggle";
import { Link } from 'react-scroll';

const Navbar = () =>{
    return (
        <div className = "n-wrapper">
            <div className="n-left">
                <div className="n-name">Mohit</div>
               <Toggle/>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{listStyleType: 'none'}}>
                        <Link spy={true} to='Navbar' activeClass='activeClass' smooth={true}>
                        <li>Home</li>
                        </Link>
                        <Link spy={true} to='Intro' smooth={true}>
                        <li>About Me</li>
                        </Link>
                        <Link spy={true} to='Services' smooth={true}>
                        <li>Skills</li>
                        </Link>
                        <Link spy={true} to='Experiences' smooth={true}>
                        <li>Experiences</li>
                        </Link>
                        <Link spy={true} to='Works' smooth={true}>
                        <li>Clients</li>
                        </Link>
                        <Link spy={true} to='Portfolio' smooth={true}>
                        <li>Portfolio</li>
                        </Link>
                     </ul>
                </div>
                <Link spy={true} to='Contact' smooth={true}>
                <button className="button n-button">
                    Contact
                </button>
                </Link>
                
                
            </div>
        </div>
    )
}

export default Navbar