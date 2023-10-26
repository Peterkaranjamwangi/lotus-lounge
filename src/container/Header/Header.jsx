import React from 'react';

import { images } from "../../constants";
import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
    <div className='app__header app__wrapper section__padding' id='home'>
        <div className="app__wrapper_info">
            <SubHeading title="Chase the new flavour" />
            <h1 className="app__header-h1">
                The Key to Beautiful hair
            </h1>
            <p className="p__opensans" style={{margin: '2rem 0'}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque totam nisi soluta quis, facilis inventore.
            </p>
            <button type="button" className="custom__button">Explore Products</button>
        </div>

        <div className="app__wrapper_img">
            <img src={images.welcome} alt="welcome Image" />
        </div>
    </div>
);


export default Header;