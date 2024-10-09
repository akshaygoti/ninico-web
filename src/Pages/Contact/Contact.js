import React from 'react'

import { IoLocationOutline } from "react-icons/io5";
import { AiOutlinePhone } from "react-icons/ai";
import { CiClock2 } from "react-icons/ci";
import { CiHeadphones } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { GoArrowRight } from "react-icons/go";


import './contact.css'

const Contact = () => {
    return (
        <div>
            <div className='contact-area mt-14'>
                <div className='container mx-auto px-5 grid grid-cols-1 lg:grid-cols-12'>
                    <div className='tpcontact-right mr-6 col-span-4'>
                        <div className='addres-area border py-10 px-8 rounded-md border-gray-300'>
                            <h1 className='text-2xl font-bold mb-5'>Get In Touch</h1>
                            <ul className=''>
                                <li className='flex items-start'>
                                    <IoLocationOutline className='text-2xl text-gray-500' />
                                    <a href='#' className='ml-2 text-gray-500 hover:text-rose-600'>24/26 Strait Bargate, Boston, PE21, United Kingdom</a>
                                </li>
                                <li className='flex items-start py-4'>
                                    <AiOutlinePhone className='mt-1 text-2xl text-gray-500' />
                                    <a href='#' className='ml-2 text-gray-500 hover:text-rose-600'>+098 (905) 786 897 8 <br /> 6 - 146 - 389 - 5748</a>
                                </li>
                                <li className='flex items-start'>
                                    <CiClock2 className='mt-1 text-xl text-gray-500' />
                                    <p className='ml-2 text-gray-500'>Store Hours:<br /> 10 am - 10 pm EST, 7 days a week</p>
                                </li>
                            </ul>
                        </div>
                        <button className='Get-btn font-semibold flex items-center justify-center border border-gray-300 py-3 mt-2 w-full rounded-md'>Get Support On Call <CiHeadphones className='phone text-xl ml-3' /> </button>
                        <button className='Get-btn font-semibold flex items-center justify-center border border-gray-300 py-3 mt-2 w-full rounded-md'>Get Direction <CiLocationOn className='phone text-xl ml-3' /> </button>
                    </div>
                    <div className='tpcontact-left col-span-8'>
                        <div className='tpcontact-info mb-5'>
                            <h4 className='tpcontact-title text-2xl font-bold'>Make Custom Request</h4>
                            <p className='text-sm'>Must-have pieces selected every month want style Ideas and Treats?</p>
                        </div>
                        <form action='https://formspree.io/f/xkndewkn' method='POST'>
                            <div className='mb-10'>
                                <div className='grid grid-cols-1 lg:grid-cols-12 gap-x-6'>
                                    <input type="text" name='fullName' id="email" className="col-span-6 bg-gray-50 border focus:border-red-500 text-gray-900 text-md rounded-lg w-full p-4 mb-3 outline-0" placeholder="Full name" title="Please fill out this field" required />
                                    <input type="email" name='email' id="email" className="col-span-6 bg-gray-50 border focus:border-red-500 text-gray-900 text-md rounded-lg w-full p-4 mb-3 outline-0" placeholder="Email address" title="Please fill out this field" required />
                                    <input type="number" name='number' id="email" className="col-span-6 bg-gray-50 border focus:border-red-500 text-gray-900 text-md rounded-lg w-full p-4 mb-3 outline-0" placeholder="Phone number" title="Please fill out this field" required />
                                    <input type="text" name='subject' id="email" class="col-span-6 bg-gray-50 border focus:border-red-500 text-gray-900 text-md rounded-lg w-full p-4 mb-3 outline-0" placeholder="Subject" title="Please fill out this field" required />

                                </div>
                                <textarea name='text' id="message" rows="8" className="bg-gray-50 border focus:border-red-500 text-gray-900 text-md rounded-lg w-full p-4 outline-0" placeholder="Enter message"></textarea>
                            </div>
                            <div className='tpcontact-submit'>
                                <button className='submit flex items-center font-semibold'>Get A Quote <GoArrowRight className='ml-2' /></button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='map mt-20'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30768381.89440162!2d60.90089334437959!3d19.716626063286764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1714471953168!5m2!1sen!2sin" width="100%" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    )
}

export default Contact