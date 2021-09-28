import React from 'react';
import { Link } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';
import './home.scss'

import abstractlines from '../../components/images/abstractlines.png'

const HomeBottomSection = () => {
    AOS.init()

    function scrollToTop() {
        window.scroll({
            top: 0,
            left: 0, 
            behavior: 'smooth'
        });
    }

    return (
        <div
        data-aos="fade-down"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        >
            <div style={{display: 'flex', width: '100%'}}>
                <div className="BottomSection">
                        <h1 className="BottomTitle">Unlock your business data with Tally AI</h1>
                        <Link onClick={scrollToTop} to='/' className="FeaturesButton">GET STARTED</Link>
                </div>
                <div className="bottom-style">
                    <img src={abstractlines} alt=' blueabstract lines'/>
                </div>
            </div>
        </div>
    )
}

export default HomeBottomSection;

// border: '1px solid black', width: '75%', marginLeft: '17%', display: 'flex', flexDirection: 'column' style={{border: '1px solid black', width: '25%'}} style={{marginTop: '55%'}} 