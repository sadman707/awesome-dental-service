import React from 'react';
import About from '../About/About';
import Coming from '../Coming/Coming';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';
import './Home.css'

const Home = () => {
    return (
        <div className="header-container">
            <div className="header-image">
                <img src="https://i.ibb.co/gZgYTTM/cover.jpg" alt="" />
                {<div className="header-text">
                    <h1 className="h1-font-color">Welcome My Awesome Dental Clinic</h1>
                    <h2 className="h2-font-color">You will be fully satisfied</h2>
                    <h1 className="h1-font-color">100% Safety & satisfaction</h1>
                </div>}
            </div>
            <Services></Services>
            <About></About>
            <Coming></Coming>
            <Footer></Footer>
        </div>
    );
};


export default Home;