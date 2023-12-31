import React from 'react';

import './AboutUs.css';
import { images } from '../../constants';

const AboutUs = () => (
    <div className="app__aboutus app__bg flex__center section__padding" id='about'>
        <div className="app__aboutus-overlay flex__center">
            <img src={images.L} alt="section background img" srcset="" />
        </div>

        <div className="app__aboutus-content flex__center">
            <div className="app__aboutus-content_about">
                <h1 className="headtext__cormorant">
                    About Us
                </h1>
            <img src={images.spoon} alt="about__spoon" className="spoon__img" />
            <p className="p__opensans">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque dolore recusandae praesentium incidunt facilis nulla voluptates reprehenderit. Dolores!
            </p>
            <button type="button" className="custom__button"> Know More</button>
            </div>

            <div className="app__aboutus-content_tool flex__center">
            <img src={images.tool} alt="about__tool" className="tool__img" />
            </div>

            <div className="app__aboutus-content_history">
                <h1 className="headtext__cormorant">
                    Our History 
                </h1>
            <img src={images.spoon} alt="about__spoon" className="spoon__img" />
            <p className="p__opensans">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque dolore recusandae praesentium incidunt facilis nulla voluptates reprehenderit. Dolores!
            </p>
            <button type="button" className="custom__button"> Know More</button>
            </div>
        </div>
    </div>
);


export default AboutUs;