import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import MySkill from '../MySkill/MySkill';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='w-100 bg-black'>
            <Header></Header>
            <About></About>
            <MySkill></MySkill>
            <Services></Services>
            <Contact></Contact>
        </div>
    );
};

export default Home;