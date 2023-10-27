import React from 'react';

import { SubHeading,  } from "../../components";
import { images } from '../../constants';
import './Staff.css';


const Staff = () => (
  <div className="app__bg app__wrapper section__padding" id='staff'>
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.staff} alt="Staff  img" />
    </div>

    <div className="app__wrapper_info">
    <SubHeading title="Staff's word"/> 
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__staff-content">
        <div className="app__staff-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">Lorem hitecto dolore voluptatum! Ab, eaque nobis.</p>
        </div>
        <p className="p__opensans">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum ab cum voluptas quidem nostrum quia a iure quae labore! Reiciendis voluptatibus distinctio deserunt qui eaque impedit magnam error odit delectus.</p>
      </div>

      <div className="app__staff-sign">
        <p>Pricillah Epi</p>
        <p className="p__opensans">
          Hairresser and Founder
        </p>
        <img src={images.sign} alt="" />
      </div>

    </div>

  </div>
);

export default Staff;
