import React from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import { FaScissors } from "react-icons/fa6";



import images from '../../constants/images';

import './Navbar.css'
const Navbar = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false);
    return (
        <nav className="app__navbar">
            <div className="app__navbar-logo">
                <img src={images.logo} alt="App logo" srcset="" />
            </div>
            <ul className="app__navbar-links">
                <li className="p__opensans"><a href="#home"> Home</a></li>
                <li className="p__opensans"><a href="#about">About</a></li>
                <li className="p__opensans"><a href="#staff">Staff</a></li>
                <li className="p__opensans"><a href="#gallery">Gallery</a></li>
                <li className="p__opensans"><a href="#contact">Contact</a></li>
            </ul>

            <div className="app__navbar-login">
                <a href="#login" className="p__opensans"> Log In / Register</a>
                <div></div>
                <a href="/" className="p__opensans"> Book Session</a> 
            </div>


            <div className="app__navbar-smallscreen">
                <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)}/>
                {toggleMenu && (
                <div className="app__navbar-smallscreen__overlay  slide-bottom ">
                <FaScissors color="#fff" fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)}/>
                <ul className="app__navbar-smallscreen-links">
                    <li className="p__opensans"><a href="#home"> Home</a></li>
                    <li className="p__opensans"><a href="#about">About</a></li>
                    <li className="p__opensans"><a href="#staff">Staff</a></li>
                    <li className="p__opensans"><a href="#gallery">Gallery</a></li>
                    <li className="p__opensans"><a href="#contact">Contact</a></li>
                </ul>
                </div>
                )}
                
            </div>


        </nav>
    )
};


export default Navbar;