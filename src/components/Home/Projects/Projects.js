import React, { useState, useEffect } from 'react';
import Project from '../Project/Project';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Projects.css'

const Projects = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])
    const [projects, setProjects] = useState();

    useEffect(() => {
        fetch('https://aimless00.github.io/projects-json-api/projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))

    }, [])
    console.log(projects);
    return (
        <div data-aos='fade-left' style={{ marginTop: '150px' }} className='w-100 text-white container pb-5'>
            <h1 className='fw-bold'>My Projects</h1>
            <p>-------------------------------</p>

            <div>
                <div className="container overflow-hidden">
                    <div className="row gy-5">

                        {
                            projects?.map(project => <Project
                                key={project.id}
                                project={project}
                            ></Project>)
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Projects;