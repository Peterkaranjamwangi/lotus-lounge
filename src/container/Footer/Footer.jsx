import React from 'react';


import './Footer.css';
import { FooterOverlay, Newsletter } from '../../components';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { images } from '../../constants';

const Footer = () => (
    <div className="app__footer section__padding">
        <FooterOverlay />
        <Newsletter />

        <div className="app__footer-links">
            <div className="app__footer-links_contact">
                <h1 className="app__footer-headtext">Contact Us</h1>
                <p className="p__opensans">9 w 3rd St, Nairobi, Nai 10021, Kenya</p>
                <p className="p__opensans">0784542573</p>
                <p className="p__opensans">0745572565</p>
            </div>
            <div className="app__footer-links_logo">
                <img src={images.gericht} alt="footer_logo" />
                <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eligendi minus magnam maxime eaque voluptate.</p>
                {/* <img src={images.spoon} alt="tool" className="tool_img" style={{marginTop: 15,}} /> */}
                <div className="app__footer-links_icons">
                    <FiFacebook/>
                    <FiTwitter />
                    <FiInstagram/>
                </div>
            </div>
            <div className="app__footer-links_work">  
                <h1 className="app__footer-headtext">Working Hours</h1>
                <p className="p__opensans">Monday - Friday :</p>
                <p className="p__opensans"> 8:00 am - 6:30 pm </p>
                <p className="p__opensans">Saturday :</p>
                <p className="p__opensans"> 10:00 am - 6:00 pm </p>
            </div>
        </div>


        <div className="footer__copyright">
            <p className="p__opensans">
                2023 Lotus Lounge. All rights reserved.
            </p>
            
        </div>
    </div>
);


export default Footer;