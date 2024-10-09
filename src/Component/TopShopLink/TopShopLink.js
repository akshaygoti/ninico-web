import React from 'react'

const TopShopLink = () => {
  return (
    <div>
        <div className='container mx-auto px-5 flex flex-wrap items-center bg-amber-50 py-3 mb-5'>
            <p className='font-semibold'>Welcome to our international shop! Enjoy free shipping on orders $100 up.</p>
            <a href="shopNow" className='underline text-red-600 font-semibold'>Shop Now <i class="fa-solid fa-arrow-right"></i></a>
        </div>
    </div>
  )
}

export default TopShopLink