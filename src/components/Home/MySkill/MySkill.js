import React, { useEffect } from 'react';
import './MySkill.css';
import Aos from 'aos';
import 'aos/dist/aos.css'

const MySkill = () => {
    useEffect(() => {
        Aos.init({ duration: 1200 })
    }, [])
    return (
        <div data-aos='fade-left' className='text-white container mt-5 mb-5 skill-section w-100'>
            <h1 className='fw-bold'>MY SKILL</h1>
            <p>-------------------------------</p>
            <div data-aos='fade-up' className='w-75 mx-auto mt-3'>
                <div className='d-flex justify-content-between'>
                    <h6 className='text-start'>HTML</h6>
                    <h6>95%</h6>
                </div>
                <div className="progress">
                    <div className="progress-bar progress-bar-striped progress-bar-animated " role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: '95%' }}>HTML</div>
                </div>
            </div>
            <div data-aos='fade-up' className='w-75 mx-auto mt-3'>
                <div className='d-flex justify-content-between'>
                    <h6 className='text-start'>CSS</h6>
                    <h6>93%</h6>
                </div>
                <div className="progress">
                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: '93%' }}>CSS</div>
                </div>
            </div>
            <div data-aos='fade-up' className='w-75 mx-auto mt-3'>
                <div className='d-flex justify-content-between'>
                    <h6 className='text-start'>JavaScript</h6>
                    <h6>85%</h6>
                </div>
                <div className="progress">
                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: '85%' }}>JavaScript</div>
                </div>
            </div>
            <div data-aos='fade-up' className='w-75 mx-auto mt-3'>
                <div className='d-flex justify-content-between'>
                    <h6 className='text-start'>ReactJS</h6>
                    <h6>90%</h6>
                </div>
                <div className="progress">
                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: '90%' }}>ReactJS</div>
                </div>
            </div>
            <div data-aos='fade-up' className='w-75 mx-auto mt-3'>
                <div className='d-flex justify-content-between'>
                    <h6 className='text-start'>NodeJS</h6>
                    <h6>60%</h6>
                </div>
                <div className="progress">
                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: '60%' }}>NodeJS</div>
                </div>
            </div>
            <div data-aos='fade-up' className='w-75 mx-auto mt-3'>
                <div className='d-flex justify-content-between'>
                    <h6 className='text-start'>Dgango</h6>
                    <h6>70%</h6>
                </div>
                <div className="progress">
                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: '70%' }}>NodeJS</div>
                </div>
            </div>
            <div data-aos='fade-up' className='w-75 mx-auto mt-3'>
                <div className='d-flex justify-content-between'>
                    <h6 className='text-start'>Python</h6>
                    <h6>80%</h6>
                </div>
                <div className="progress">
                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: '80%' }}>NodeJS</div>
                </div>
            </div>
        </div>
    );
};

export default MySkill;