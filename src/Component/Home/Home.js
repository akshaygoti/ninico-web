import React from 'react'
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './home.css';

import banner1 from '../../Assets/banner1.jpg'
import banner2 from '../../Assets/banner2.jpg'
import banner3 from '../../Assets/banner3.jpg'
import bannerslider01 from '../../Assets/bannerslider01.jpg'
import bannerslider02 from '../../Assets/bannerslider02.jpg'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Home = () => {
  return (
    <div>

      <main className='container mx-auto px-5 mt-1'>
        <section className='slider-area'>
          <div className='swipe flex'>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className='swiper-container'>
                  <img src={banner1} alt="banner_img" className='rounded-md' />
                  <div className='swiper-text'>
                    <h3>Accessories</h3>
                    <h1>Up To <span>40% off</span> Latest Creations</h1>
                    <button className='bg-white px-7 py-3 mt-3 font-semibold rounded-md'>Shop Now <i class="fa-solid fa-arrow-right ml-2"></i> </button>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className='swiper-container'>
                  <img src={banner2} alt="banner_img" className='rounded-md' />
                  <div className='swiper-text'>
                    <h3>Accessories</h3>
                    <h1>Up To <span>35% off</span> Latest Creations</h1>
                    <button className='bg-white px-7 py-3 mt-3 font-semibold rounded-md'>Shop Now <i class="fa-solid fa-arrow-right ml-2"></i> </button>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className='swiper-container'>
                  <img src={banner3} alt="banner_img" className='rounded-md' />
                  <div className='swiper-text'>
                    <h3>Accessories</h3>
                    <h1>Up To <span>45% off</span> Latest Creations</h1>
                    <button className='bg-white px-7 py-3 mt-3 font-semibold rounded-md'>Shop Now <i class="fa-solid fa-arrow-right ml-2"></i> </button>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>

            <div className='slider-banner ml-3'>
              <div className='slider-banner-img banner mb-4 overflow-hidden'>
                <img src={bannerslider01} alt="banner_slider_img" className='rounded-md' />
                <div className='slider-banner-content'>
                  <p>Hand made</p>
                  <h1>New Modern Stylist <br /> Crafts</h1>
                </div>
              </div>
              <div className='slider-banner-img overflow-hidden'>
                <img src={bannerslider02} alt="banner_slider_img" className='rounded-md' />
                <div className='slider-banner-content'>
                  <p>Hand made</p>
                  <h1>New Modern Stylist <br /> Crafts</h1>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>

    </div>
  )
}

export default Home