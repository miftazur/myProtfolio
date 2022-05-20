import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import './ServiceSlider.css'

import { MdDesignServices, MdDeveloperMode } from 'react-icons/md';
import { AiOutlineShareAlt } from 'react-icons/ai';
import { FiTarget } from 'react-icons/fi';
import { SiScaleway } from 'react-icons/si';




const ServiceSlider = () => {
    SwiperCore.use([Autoplay]);
    return (
        <div className='text-white'>
            <Swiper
                loop={true}

                autoplay={true}
                spaceBetween={50}
                slidesPerView={3}
                centeredSlides
                onSlideChange={() => console.log("slide change")}
                onSwiper={swiper => console.log(swiper)}
            >
                <SwiperSlide>
                    <div className='ux-design'>
                        <div>
                            <MdDesignServices size={60} className='text-danger icon' />
                        </div>
                        <div>
                            <h5 className='mt-2'>UI UX Design</h5>
                            <p className='text-start'>The UI/UX Design Specialization brings a design-centric approach to user interface and user experience design, and offers practical, skill-based instruction centered around a visual communications perspective.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='ux-design'>
                        <div>
                            <MdDeveloperMode size={60} className='text-danger icon' />
                        </div>
                        <div>
                            <h5 className='mt-2'>Web Developer</h5>
                            <p className='text-start'>Web development is the building and maintenance of websites; it's the work that happens behind the scenes to make a website look great, work fast and perform well with a seamless user experience..</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='ux-design'>
                        <div>
                            <AiOutlineShareAlt size={60} className='text-danger icon' />
                        </div>
                        <div>
                            <h5 className='mt-2'>Fast Communication</h5>
                            <p className='text-start'>Good and precise communication is key to a well-functioning workplace. Whether it’s information about a new routine or a reminder of something that an employee has to remember, it’s important that the right person gets the message. Therefore.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='ux-design'>
                        <div>
                            <FiTarget size={60} className='text-danger icon' />
                        </div>
                        <div>
                            <h5 className='mt-2'>Responsive Design</h5>
                            <p className='text-start'>Responsive web design is about creating web pages that look good on all devices!A responsive web design will automatically adjust for different screen sizes and viewports.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='ux-design'>
                        <div>
                            <SiScaleway size={60} className='text-danger icon' />
                        </div>
                        <div>
                            <h5 className='mt-2'>SEO Optimaization</h5>
                            <p className='text-start'>One of the biggest challenges that bloggers and content marketers face is writing content that’s optimized for search engines, yet will also appeal to people.</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default ServiceSlider;