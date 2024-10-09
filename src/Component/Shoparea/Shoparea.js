import React from 'react'
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './shoparea.css';

import instagram01 from '../../Assets/instagram01.jpg'
import instagram02 from '../../Assets/instagram02.jpg'
import instagram03 from '../../Assets/instagram03.jpg'
import instagram04 from '../../Assets/instagram04.jpg'
import instagram05 from '../../Assets/instagram05.jpg'
import instagram06 from '../../Assets/instagram06.jpg'

import { Autoplay, Pagination } from 'swiper/modules';

const Shoparea = () => {
    return (
        <div>
            <section className='shop-area my-16 '>
                <div className='container mx-auto px-5'>
                    <div className='follow mb-10'>
                        <div className='shop-text text-center'>
                            <p className='text-lg text-red-600 font-semibold'>Follow On</p>
                            <div className='flex items-center justify-center'>
                                <i className="fa-brands fa-instagram text-4xl mr-2"></i>
                                <h1 className='text-3xl font-bold mb-2'>ninico-shop</h1>
                            </div>
                        </div>
                    </div>
                    <div className='shopareaitem mt-5'>
                        <div className='shopswiper'>
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={30}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                breakpoints={{
                                    567: {
                                        slidesPerView: 1,
                                        spaceBetween: 0,
                                    },
                                    768: {
                                        slidesPerView: 3,
                                        spaceBetween: 30,
                                    },
                                    992: {
                                        slidesPerView: 4,
                                        spaceBetween: 20,
                                    },
                                    1200: {
                                        slidesPerView: 5,
                                        spaceBetween: 10,
                                    }
                                }}
                                modules={[Autoplay]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <div className='swiper-container1'>
                                        <img src={instagram01} alt="" className='rounded-md' />
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className='swiper-container1'>
                                        <img src={instagram02} alt="" className='rounded-md' />
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className='swiper-container1'>
                                        <img src={instagram03} alt="" className='rounded-md' />
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className='swiper-container1'>
                                        <img src={instagram04} alt="" className='rounded-md' />
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className='swiper-container1'>
                                        <img src={instagram05} alt="" className='rounded-md' />
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className='swiper-container1'>
                                        <img src={instagram06} alt="" className='rounded-md' />
                                    </div>
                                </SwiperSlide>

                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Shoparea