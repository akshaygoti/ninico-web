import React from 'react'

import { LuGrid } from "react-icons/lu";
import { AiOutlineUnorderedList } from "react-icons/ai";

import PageHeading from '../../../Component/PageHeading/PageHeading';
import PopularProducts from '../../../Component/PopularProducts/PopularProducts';

const Shop = () => {

  return (
    <div>
      <div>
        <PageHeading goBackLink='Home' pageTitle='Shop'/>
        <div className='container mx-auto px-5'>
          <div className='mb-5 mt-14 flex flex-wrap items-center justify-between'>
            <div className='text-lg font-semibold'>10 <span className='text-gray-400'>Item On List</span> </div>
            <div className='flex flex-wrap items-center'>
              <select id="option" className='border border-black px-3 py-2 mr-3 rounded-md'>
                <option value="shortby(default)" selected>Short by (default)</option>
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
              </select>
              <select id="option" className='border border-black px-3 py-2 mr-3 rounded-md'>
                <option value="shortby(default)" selected>All</option>
                <option value="10perpage">10 per page</option>
                <option value="20perpage">20 per page</option>
                <option value="30perpage">30 per page</option>
              </select>
              <div className='text-xl flex'>
                <AiOutlineUnorderedList className='mr-3' />
                <LuGrid />
              </div>
            </div>
          </div>
        </div>
        <div>
          <PopularProducts />
        </div>
      </div>
      {/* <Header /> */}
    </div>
  )
}

export default Shop