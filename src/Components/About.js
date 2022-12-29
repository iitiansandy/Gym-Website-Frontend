import React from 'react';
import '../CSS/About.css';
import abimg from '../Images/logo2.jpg';
export default function About() {
    return (
        <section className='about-container' id='about'>
            <div className='about-wrapper'>
                <img className='about-image' src={abimg} alt=""/>
                <div className='about-data'>
                    <h3 className='about-title'>STORY ABOUT US</h3>
                    <P className='about-description'>
                    Being physically and mentally fit is necessary to live a happy, long life. Exercise is one of the best ways to keep a person healthy. Hence, it is always best to find a workout routine no matter how busy you are. With the numerous diseases that spread today, many individuals realized the essence of workout. Specifically, having a workout routine will give an individual the greatest physical, mental, and social benefits. Accordingly, exercise will help you increase energy levels, reduce chronic disease risk, lose weight, and help improve brain health and memory.
                    </P>
                    <a href='#read-more' className='about-btn'>READ MORE</a>
                </div>
            </div>
        </section>
    )
}