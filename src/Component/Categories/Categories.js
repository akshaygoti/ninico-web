// import React from 'react'
import React, { useState } from 'react'

import './categories.css'

const Categories = () => {

    const [isDataVisible, setIsDataVisible] = useState(false);

    const toggleDataVisibility = () => {
        setIsDataVisible(!isDataVisible);
    };

    return (
        <div>

            <div className=''>
                <button className='cat-btn' onClick={toggleDataVisibility}>
                    <i class="fa-solid fa-bars mr-3"></i>
                    Categories
                </button>
            </div>
            <div className="sidebar absolute z-10">
                {isDataVisible && (
                    <>
                        <a href="#">
                            <span class="material-symbols-outlined">person</span>
                            <h3>Candles</h3>
                        </a>
                        <a href="#">
                            <span class="material-symbols-outlined">deceased</span>
                            <h3>Handmade</h3>
                            <span class="material-symbols-outlined arrow">arrow_right_alt</span>
                        </a>
                        <a href="#">
                            <span class="fa-solid fa-shoe-prints"></span>
                            <h3>Gifts Sets</h3>
                        </a>
                        <a href="#">
                            <span class="material-symbols-outlined">sentiment_satisfied</span>
                            <h3>Plastic Gifts</h3>
                        </a>
                        <a href="#">
                            <span class="material-symbols-outlined">sports_soccer</span>
                            <h3>Handy Cream</h3>
                        </a>
                        <a href="#">
                            <span class="fa-solid fa-crown"></span>
                            <h3>Cosmetics</h3>
                        </a>
                        <a href="#">
                            <span class="material-symbols-outlined">featured_seasonal_and_gifts</span>
                            <h3>Silk Accessories</h3>
                        </a>

                        <div className='aside-footer bg-stone-100'>
                            <a href="#">Value of the Day</a>
                            <a href="#">Top 100 Offers</a>
                            <p>New Arrivals</p>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default Categories