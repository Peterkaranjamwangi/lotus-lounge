import React  from 'react';

import { AboutUs, FindUs, Gallery, Header, Footer, Intro, Items, Laurels} from "./container";
import { Navbar  } from './components';
import './App.css';
import './index.css';


const App = () => (
    <div>
        <Navbar />
        <Header/>
        <AboutUs/>  
        {/* <Items/> */}
        <FindUs/>
        <Intro/>
        <Laurels/>
        <Gallery/>
        <Footer/>
    </div>
);

export default App