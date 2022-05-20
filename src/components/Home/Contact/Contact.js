import React, { useEffect } from 'react';
import emailjs from "emailjs-com"
import Aos from 'aos';
import 'aos/dist/aos.css'

const Contact = () => {
    useEffect(() => {
        Aos.init({ duration: 1500 })
    }, [])
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            'aimless00',
            'aimless87373',
            e.target,
            'user_xYAUzs3HMiqwnw0Sz6yzE'
        )
            .then(res => {
                if (res.status) {
                    alert('message send Sucessfull')
                    console.log(e.target.value);
                }
            })

            .catch(err => console.log(err))
    }

    return (
        <div data-aos='fade-left' className='text-white container mt-5 mb-5 w-100 pb-5'>
            <h1 className='fw-bold'>Get In Touch</h1>
            <p>-------------------------------</p>
            <form data-aos='fade-up' onSubmit={sendEmail}>
                <input
                    required
                    style={{ width: '350px', margin: 5, padding: 5, borderBottom: '2px solid white', borderRadius: '5px', backgroundColor: 'inherit', color: 'wheat' }} placeholder='Your Name'
                    type="text"
                    name="name" />
                <br />
                <input
                    required
                    placeholder='Your Email'
                    style={{ width: '350px', margin: 5, padding: 5, borderBottom: '2px solid white', borderRadius: '5px', backgroundColor: 'inherit', color: 'wheat' }}
                    type="email"
                    name="email" />
                <br />
                <textarea
                    required
                    placeholder='Write Your Message'
                    style={{ width: '350px', margin: 5, padding: 5, borderBottom: '2px solid white', borderRadius: '5px', backgroundColor: 'inherit', color: 'wheat' }} name="message"
                    id="" cols="60"
                    rows="5">
                </textarea>
                <br />
                <input
                    style={{ width: '350px', margin: 5, backgroundColor: 'blue', border: '0', borderRadius: '9px', fontWeight: 'bolder', color: 'white' }}
                    type="submit"
                    value="Send message" />
            </form>
        </div>
    );
};

export default Contact;