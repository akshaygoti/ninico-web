import React from 'react'
import TCategoriesData from './TopCategoryData'
import './topcategories.css'

const TopCategories = () => {
    return (
        <div>
            <section className='category-area mt-16'>
                <div className='container mx-auto px-5'>
                    <div className='mb-2'>
                        <h1 className='text-2xl font-bold'>Top <span className='font-normal text-red-600'>Categories</span> </h1>
                    </div>
                    <div className='mt-10'>
                        <div class="category-area grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 mb-10 items-center">
                            {TCategoriesData.map((cvalue, index, array) => {
                                return (
                                    <div className="tpcategory text-center border-r-2 my-3">
                                        <div className='tpcategory-icon max-w-36 min-h-36 mx-auto flex bg-gray-100 rounded-full cursor-pointer relative'>
                                            <img src={cvalue.img} alt="Img" className='' />
                                            <span className='h-10 w-10 items-center justify-center flex text-red-600 font-semibold bg-white rounded-full shadow-xl absolute top-0 right-0'>{cvalue.num}</span>
                                        </div>
                                        <div className='tpcategory-content mt-5 cursor-pointer'>
                                            <a href='#' className='text-link text-lg'>{cvalue.text1}</a><br/>
                                            <a href='#' className='text-link text-lg'>{cvalue.text2}</a>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <hr className='mt-16 mb-16' />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default TopCategories