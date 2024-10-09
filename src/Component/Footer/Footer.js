import React from 'react'
import './footer.css'
import logo from '../../Assets/logo.png'
import fapp from '../../Assets/fapp.jpg'
import fgoogle from '../../Assets/fgoogle.jpg'
import fbrandicon from '../../Assets/fbrandicon.png'

const Footer = () => {
    return (
        <div>

            <footer>
                <div className='container mx-auto px-5 bg-stone-100'>
                    <div className='main-footer py-12'>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-2 mb-5 lg:grid-cols-5'>

                            <div className="...">
                                <div className='footer-widget'>
                                    <div className='footer-logo mb-8'>
                                        <a href="logo">
                                            <img src={logo} alt="" />
                                        </a>
                                    </div>
                                    <div className='footer-content'>
                                        <p className='text-gray-500'>Elegant pink origami design three  dimensional view and decoration co-exist.  Great for adding a decorative touch to  any room's decor.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="...">
                                <div className='footer-widget mb-10 ml-5'>
                                    <h4 className='footer-widget-title mb-7 text-lg font-semibold'>Information</h4>
                                    <div className='footer-widget-links'>
                                        <ul>
                                            <li><a href="#">Custom Service</a></li>
                                            <li><a href="#">FAQs</a></li>
                                            <li><a href="#">Ordering Tracking</a></li>
                                            <li><a href="#">Contacts</a></li>
                                            <li><a href="#">Events</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="...">
                                <div className='footer-widget mb-10'>
                                    <h4 className='footer-widget-title mb-7 text-lg font-semibold'>My Account</h4>
                                    <div className='footer-widget-links'>
                                        <ul>
                                            <li><a href="#">Delivery Information</a></li>
                                            <li><a href="#">Privacy Policy</a></li>
                                            <li><a href="#">Discount</a></li>
                                            <li><a href="#">Custom Service</a></li>
                                            <li><a href="#">Terms  Condition</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="...">
                                <div className='footer-widget mb-10'>
                                    <h4 className='footer-widget-title mb-7 text-lg font-semibold'>Social Network</h4>
                                    <div className='footer-widget-links'>
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <i class="fa-brands fa-facebook-f"></i>
                                                    Facebook
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i class="fa-brands fa-dribbble"></i>
                                                    Dribbble
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i class="fa-brands fa-twitter"></i>
                                                    Twitter
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i class="fa-brands fa-behance"></i>
                                                    Behance
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i class="fa-brands fa-youtube"></i>
                                                    Youtube
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="...">
                                <div className='footer-widget mb-10'>
                                    <h4 className='footer-widget-title mb-7 text-lg font-semibold'>Get Newsletter</h4>
                                    <p className='text-gray-500'>Get on the list and get 10% off your first order!</p>
                                    <div className='footer-widget-newsletter'>
                                        <form action="#">
                                            <input type="email" placeholder='Enter email address' className='py-3 px-5 my-2 rounded-md' />
                                            <button className='btn'>
                                                Subscribe Now
                                                <i class="fa-solid fa-arrow-right ml-2"></i>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className='border' />
                        <div className='footer-cta flex flex-wrap items-center justify-between'>
                            <div className='footer-cta-contact flex items-center mt-7'>
                                <div className='footer-cta-icon bg-white px-3 py-2 text-xl rounded-full'>
                                    <i class="fa-solid fa-phone-flip"></i>
                                </div>
                                <div className='footer-cta-text ml-3'>
                                    <a href="#" className='text-xl font-bold'>980. 029. 666. 99</a>
                                    <p className='text-sm text-gray-500'>Working 8:00 - 22:00</p>
                                </div>
                            </div>
                            <div className='footer-cta-source flex flex-wrap mt-5'>
                                <div className='footer-cta-source-content mr-4'>
                                    <h4 className='footer-cta-source-title text-lg font-bold'>Download App on Mobile</h4>
                                    <p className='text-sm text-gray-500'>15% discount on your first purchase</p>
                                </div>
                                <div className='footer-cta-source-thumb flex items-center'>
                                    <a href="#"><img src={fgoogle} alt="fgoogle" /></a>
                                    <a href="#" className='ml-1'><img src={fapp} alt="fapp" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='footer-copyright'>
                        <div className='flex flex-wrap items-center justify-between py-5'>
                            <div className='footer-copyright-content'>
                                <p>Copyright 2024 <span className='hover:text-red-500 font-bold'>©Ninico</span>. All rights reserved. Developed by <span className='hover:text-red-500 font-bold'>AliThemes</span>.</p>
                            </div>
                            <div className='footer-copyright-brand'>
                                <img src={fbrandicon} alt="brandicon" />
                            </div>
                        </div>
                    </div>
                </div>               
            </footer>

        </div>
    )
}

export default Footer
