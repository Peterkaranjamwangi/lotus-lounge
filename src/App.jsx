import React  from 'react';

import { AboutUs, FindUs, Gallery, Header, Footer, Intro,  Staff} from "./container";
import { Navbar  } from './components';
import './App.css';
import './index.css';


const App = () => (
    <div>
        <Navbar />
        <Header/>
        <AboutUs/>  
        {/* <Items/> */}
        <Staff />
        <Intro/>
        <Gallery/>
        <FindUs/>
        <Footer/>
    </div>
);

export default App