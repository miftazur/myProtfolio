import React, { useEffect } from 'react';
import ServiceSlider from '../ServiceSlider/ServiceSlider';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Servides.css';



const Services = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])
    return (
        <div data-aos='fade-up' style={{ marginTop: '150px' }} className='text-white container pb-5 services-section'>
            <h1 className='fw-bold'>My Service</h1>
            <p>-------------------------------</p>

            <div>
                <ServiceSlider></ServiceSlider>
            </div>

        </div>
    );
};

export default Services;