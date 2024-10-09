import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { IoMdCheckmark } from "react-icons/io";

import PageHeading from '../../Component/PageHeading/PageHeading'

import aboutimg1 from '../../Assets/aboutimg1.jpg'
import aboutimg2 from '../../Assets/aboutimg2.jpg'
import aboutimg3 from '../../Assets/aboutimg3.png'
import team1 from '../../Assets/team1.jpg'
import team2 from '../../Assets/team2.jpg'
import team3 from '../../Assets/team3.jpg'
import team4 from '../../Assets/team4.jpg'
import aboutbanner1 from '../../Assets/aboutbanner1.jpg'
import aboutbanner2 from '../../Assets/aboutbanner2.jpg'

const Blog = () => {
    return (
        <div>
            <div>
                <PageHeading goBackLink='Home' pageTitle='Blog' />
                <div className='about-area py-16'>
                    <div className='container mx-auto px-5'>
                        <div className='tpabout-inner-logo'>
                            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 tpabout-inner-logo'>
                                <div className='tpabout-inner-thumb'>
                                    <img src={aboutimg1} alt="" className='rounded-lg' />
                                </div>
                                <div className='tpabout-inner-thumb'>
                                    <img src={aboutimg2} alt="" className='rounded-lg' />
                                </div>
                            </div>
                            <div className='tpabout-logo'>
                                <a href="#">
                                    <img src={aboutimg3} alt="" />
                                </a>
                            </div>
                        </div>
                        <div className='inner-title-area my-10'>
                            <p className='text-sm text-gray-500'>About Us</p>
                            <h2 className='text-3xl font-bold'>About Our Story</h2>
                        </div>
                        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10'>
                            <div>
                                <p className='text-lg text-gray-500'>Publish your eCommerce site quickly with our easy-to-use store builder— no coding required. Migrate your items from your point of sale system or turn your Instagram feed into a shopping site and start selling fast. Square Online works for all kinds of businesses—retail, restaurants, services without costly customization or add ons. Get orders to your customers in lots of ways by offering shipping, pickup, delivery, and even QR code ordering.</p>
                            </div>
                            <div>
                                <p className='text-lg text-gray-500'>Expand your reach and sell more using seamless integrations with Google, Instagram, Facebook, and more. Built- in SEO tools make it easy for shoppers to find your business on search engines. Get access to the entire suite of integrated Square solutions to help you run your business. Integration between Square Online and all Square point of sale systems makes inventory management easy. Subscribe to Square Marketing and easily send email promotions to your customers using the contact information</p>
                            </div>
                            <div className='tpabout-inner-list'>
                                <ul>
                                    <li className='mb-5'>
                                        <a href="#" className='flex'>
                                            <IoMdCheckmark className='text-gray-500 text-2xl mr-2' />
                                            Orders go right to your restaurant point of sale, KDS, and kitchen
                                        </a>
                                    </li>
                                    <li className='mb-5'>
                                        <a href="#" className='flex'>
                                            <IoMdCheckmark className='text-gray-500 text-2xl mr-2' />
                                            Provide in-person pickup,  delivery by professional couriers
                                        </a>
                                    </li>
                                    <li className='mb-5'>
                                        <a href="#" className='flex'>
                                            <IoMdCheckmark className='text-gray-500 text-2xl mr-2' />
                                            Offer in-person diners self-serve, contactless ordering via QR codes.
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='team-area bg-gray-50 mt-10'>
                        <div className='container mx-auto px-5'>
                            <div className='tpabout-inner-title-area text-center my-10'>
                                <p className='text-gray-500'>Team</p>
                                <h1 className='text-2xl font-bold'>Meet With Team</h1>
                            </div>
                            <div className='tp-team-active'>
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
                                                slidesPerView: 4,
                                                spaceBetween: 20,
                                            }
                                        }}
                                        modules={[Autoplay]}
                                        className="mySwiper"
                                    >
                                        <SwiperSlide>
                                            <div className="relative rounded-md">
                                                <img src={team1} alt="" className='rounded-md w-[100%]' />
                                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent rounded-md"></div>
                                                <div className="absolute bottom-4 left-4 text-left">
                                                    <h5 className='tpteam-position'>Founder</h5>
                                                    <h4 className='tpteam-title'>Rosalina D. Willson</h4>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <div className="relative rounded-md">
                                                <img src={team2} alt="" className='rounded-md w-[100%]' />
                                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent rounded-md"></div>
                                                <div className="absolute bottom-4 left-4 text-left">
                                                    <h5 className='tpteam-position'>CEO</h5>
                                                    <h4 className='tpteam-title'>Ukolilix X. Xilanorix</h4>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <div className="relative rounded-md">
                                                <img src={team3} alt="" className='rounded-md w-[100%]' />
                                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent rounded-md"></div>
                                                <div className="absolute bottom-4 left-4 text-left">
                                                    <h5 className='tpteam-position'>Designer</h5>
                                                    <h4 className='tpteam-title'>Alonso M. Miklonax</h4>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <div className="relative rounded-md">
                                                <img src={team4} alt="" className='rounded-md w-[100%]' />
                                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent rounded-md"></div>
                                                <div className="absolute bottom-4 left-4 text-left">
                                                    <h5 className='tpteam-position'>Developer</h5>
                                                    <h4 className='tpteam-title'>Miranda H. Halim</h4>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <div className="relative rounded-md">
                                                <img src={team1} alt="" className='rounded-md w-[100%]' />
                                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent rounded-md"></div>
                                                <div className="absolute bottom-4 left-4 text-left">
                                                    <h5 className='tpteam-position'>Founder</h5>
                                                    <h4 className='tpteam-title'>Rosalina D. Willson</h4>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <div className="relative rounded-md">
                                                <img src={team2} alt="" className='rounded-md w-[100%]' />
                                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent rounded-md"></div>
                                                <div className="absolute bottom-4 left-4 text-left">
                                                    <h5 className='tpteam-position'>CEO</h5>
                                                    <h4 className='tpteam-title'>Ukolilix X. Xilanorix</h4>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='feature-area'>
                        <div className='container mx-auto px-5'>
                            <div>
                                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 mt-11'>
                                    <div className='tpfeature-inner-thumb'>
                                        <img src={aboutbanner1} alt="" />
                                    </div>
                                    <div className='tpabout-inner-title-area mx-5'>
                                        <h4 className='text-sm mb-1 text-gray-500'>Features #01</h4>
                                        <h1 className='text-3xl font-bold mb-3'>Solutions that work together</h1>
                                        <p className='text-lg text-gray-500 mb-5'>Publish your eCommerce site quickly with our easy-to-use store builder— no coding required. Migrate your items from your point of sale system or turn your Instagram feed into a shopping site and start selling fast. Square Online works for all kinds of businesses—retail, restaurants, services.</p>
                                        <button>Get In Touch</button>
                                    </div>
                                </div>
                                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 mt-11'>
                                    <div className='tpabout-inner-title-area mr-10'>
                                        <h4 className='text-sm mb-1 text-gray-500'>Features #02</h4>
                                        <h1 className='text-3xl font-bold mb-3'>All kinds of payments securely</h1>
                                        <p className='text-lg text-gray-500 mb-5'>Publish your eCommerce site quickly with our easy-to-use store builder— no coding required. Migrate your items from your point of sale system or turn your Instagram feed into a shopping site and start selling fast. Square Online works for all kinds of businesses—retail, restaurants, services.</p>
                                        <button>Contact With Us</button>
                                    </div>
                                    <div className='tpfeature-inner-thumb'>
                                        <img src={aboutbanner2} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Blog
