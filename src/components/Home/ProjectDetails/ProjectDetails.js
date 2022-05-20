
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './ProjectDetails.css'

const ProjectDetails = () => {
    const { id } = useParams();
    const [details, setDetails] = useState([]);
    const [detail, setDetail] = useState({})
    useEffect(() => {
        fetch('https://aimless00.github.io/projects-json-api/projects.json')
            .then(res => res.json())
            .then(data => {
                setDetails(data)
            })
    }, [id])

    useEffect(() => {
        const found = details?.find(dt => dt.id.toString() === id)
        setDetail(found)

    }, [details, id]);

    return (
        <div className='container'>
            <div className="card mx-auto" style={{ width: '58rem' }}>
                <div className='d-flex w-100 p-3'>
                    <img style={{ width: '33%', height: '300px' }} src={detail?.img1} className="card-img-top" alt="..." />
                    <img style={{ width: '33%' }} src={detail?.img2} className="card-img-top" alt="..." />
                    <img style={{ width: '33%' }} src={detail?.img3} className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                    <h3 className="card-title fw-bold text-primary">{detail?.name}</h3>
                    <p className="card-text text-start">{detail?.Project_Details}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item fw-bold">Tolls: {detail?.Technology}</li>
                </ul>
                <div className="card-body">
                    <a href={detail?.Live_Link} className="text-decoration-none fs-4 mx-2 text-success fw-bold"><i class="fas fa-globe"></i>Live Site</a>
                    <a href={detail?.GitHub_Server} className="text-decoration-none fs-4 mx-2 text-danger fw-bold"><i className="fab fa-github"></i>Github Server</a>
                    <a href={detail?.GitHub_Client} className="text-decoration-none fs-4 mx-2 text-info fw-bold"><i className="fab fa-github"></i>Github Client</a>
                </div>
            </div>
            <Link to={`/`}><button className=" mt-3 btn btn-info text-white">Home</button></Link>
        </div>
    );
};

export default ProjectDetails;