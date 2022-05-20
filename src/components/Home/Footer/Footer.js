import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-section'>
            <div className=" d-flex justify-content-around bg-dark text-white pt-2">
                <small>Made with <i className="fas fa-heart"></i> & <i className="fas fa-coffee"></i> in Rangpur, Bangladesh</small>
                <small>© CopyWirght from AL Amin</small>
            </div>
        </div>
    );
};

export default Footer;