import React from 'react';
import Header from '../Shared/Header/Header';
import aboutImg from '../../../src/img/watches.jpg';
import Footer from '../Shared/Footer/Footer';

const About = () => {
    return (
        <div>
            <Header />
            <div className='container'>
                <img className='img-fluid' src={aboutImg} alt="" />
                <h1>About</h1>
                <p>
                    Suave and sophistication are the two most essential gears in the different types of watches you should own. Watches for men are an expression of their personality and inherent style. Men’s watches are imbued with a delicacy that makes them valuable and must-have accessories. The right watch at the right time will be your lucky charm at important events. As you go ahead and shake hands, let your select watch do some talking on your behalf. An impeccable watch at your boss’ birthday party can accentuate your ensemble giving you more confidence to make contacts. Types of watches for men serve a purpose much larger than just telling the time. Dive into this stylebook and learn all about different types of watches. Define your style as classy and refined as you pick up distinctive types of watches for different events. Men’s watches are not as simple an affair as we pegged it to be. It is time to reconsider the whole process of buying a gents watch. The technicalities of different watches might get overwhelming to grasp but that is why we are here! Tick tock - the watch is ticking, get ready to take some notes and revamp your accessories drawer.
                </p>
            </div>
            <Footer />
        </div>
    );
};

export default About;