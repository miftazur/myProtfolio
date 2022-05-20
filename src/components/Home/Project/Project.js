import React, { useEffect } from 'react';
import './Project.css';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom';

const Project = ({ project }) => {
    const { name, img1, id, } = project;
    useEffect(() => {
        Aos.init({ duration: 1100 })
    }, [])
    return (
        <div data-aos='fade-right' className="col-12 col-md-6 project-section">
            <div className="p-3 projects">
                <img className='image' style={{ borderRadius: '15px' }} src={img1} alt="" />
                <div className='hover-effect'>
                    <h5 className='fw-bold'>{name}</h5>
                    <Link to={`/details/${id}`}><button className=" mt-3 btn btn-info text-white">Project Details</button></Link>
                </div>
            </div >
        </div >
    );
};

export default Project;