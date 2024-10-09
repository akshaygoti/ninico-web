import React from 'react'

import Commoncard from './Commoncard'

import PopularData from '../PopularProducts/PopularData'
import './PopularProducts.css'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PopularProducts = () => {
    return (
        <div>
            <section>
                <div className='container mx-auto px-5'>
                    <div className='row flex items-center justify-between'>
                        <div className='product'>
                            <h1 className='text-2xl font-bold'>Popular <span className='font-normal text-red-600'>Products</span> </h1>
                        </div>
                        <div className='nav-item'>
                            <div className='btn1'>
                                <ul className='flex flex-wrap'>
                                    <li>
                                        <a href="#" className='active'>All</a>
                                    </li>
                                    <li>
                                        <a href="#">Popular</a>
                                    </li>
                                    <li>
                                        <a href="#">On Sale</a>
                                    </li>
                                    <li>
                                        <a href="#">Best Rated</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='tab-content'>
                        <div className='card-group grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-center mt-7 mb-3'>
                            {PopularData.map((cvalue, index, array) => {
                                return (
                                    <Commoncard key={index} id={cvalue.id} img={cvalue.img} img2={cvalue.img2} title={cvalue.title} rate={cvalue.rate} quantity={cvalue.quantity} />
                                )
                            })}
                        </div>
                        {/* <div className='card-group flex flex-wrap items-center justify-center mt-7 mb-3'>
                            {PopularData.map((cvalue, index, array) => {
                                return (
                                    <Commoncard key={index} id={cvalue.id} firstProductImg={cvalue.img} secondeProductImg={cvalue.img2} productName={cvalue.title} Price={cvalue.rate} quantity={cvalue.quantity} />
                                )
                            })}
                        </div> */}
                        <ToastContainer position='bottom-right' theme='colored' autoClose='1000' />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PopularProducts
