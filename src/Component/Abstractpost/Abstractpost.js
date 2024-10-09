import React from 'react'

import './abstractpost.css'

import floded01 from '../../Assets/floded01.png'

const Abstractpost = () => {
    return (
        <div className='mx-5'>
            <div className='container mx-auto bg-gray-100'>
                <div className='pro grid grid-cols-1 lg:grid-cols-2 items-center px-5 py-10'>
                    <div className='tpdealproduct-thumb'>
                        <img src={floded01} alt="" />
                        <span className='offer-price'>
                            <small className='font-bold'>From</small>
                            <h3 className='text-3xl font-bold'>$49</h3>
                        </span>
                    </div>
                    <div className='tpdealcontact'>
                        <div className='mb-7'>
                            <p className='ret text-red-600 font-semibold text-xl mb-1'>$49.00 <del className='text-gray-400'>$59.00</del> </p>
                            <a href='#'>
                                <h1 className='text-4xl font-bold mb-4'>Pro2 Abstract Folded Post</h1>
                            </a>
                            <p className='text-lg text-gray-500'>Elegant pink origami design three-dimensional view and decoration co-exist. Great for adding a decorative touch to any room's decor. Wonderful accent piece for coffee tables or side tables.</p>
                        </div>
                        
                        <div className='tpdealcontact-progress mb-10'>
                            <div className='progress'>
                                <div className='progress-bar text-red-600'></div>
                            </div>
                        </div>

                        <div className='count'>
                            <div className='countdown flex'>
                                <div className='cdown cdown-days'>
                                    <h1>-128</h1>
                                    <p>Days</p>
                                </div>
                                <div className='cdown cdown-hour'>
                                    <h1>-17</h1>
                                    <p>Hour</p>
                                </div>
                                <div className='cdown cdown-minute'>
                                    <h1>-25</h1>
                                    <p>Minute</p>
                                </div>
                                <div className='cdown cdown-second'>
                                    <h1>-47</h1>
                                    <p>Second</p>
                                </div>
                                <div className='cdown1 flex items-center ml-5 text-gray-500'>
                                    <p>Remains until the end of the offer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Abstractpost