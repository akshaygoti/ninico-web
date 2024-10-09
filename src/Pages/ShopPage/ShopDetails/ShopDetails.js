import React, { useState } from 'react'

import PageHeading from '../../../Component/PageHeading/PageHeading'

import './shopDetails.css'

import { ToastContainer, toast, Bounce } from 'react-toastify';

import { useDispatch, useSelector } from 'react-redux';
import { ADD_CART } from "../../../Redux/Actions/Action";

import productdet1 from '../../../Assets/productdet1.png'
import productdet2 from '../../../Assets/productdet2.png'
import productdet3 from '../../../Assets/productdet3.png'
import productdet4 from '../../../Assets/productdet4.png'

import PopularData from '../../../Component/PopularProducts/PopularData'

import { FaStar } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { useParams } from 'react-router-dom'

const ShopDetails = () => {

    const data = useSelector((state) => state.cartreducer.carts)
    const dispatch = useDispatch();
    const send = (e) => {
        console.log(e, "eeee")
        dispatch(ADD_CART(e))
        let find = data.findIndex(item => item.id === e.id);
        find === -1 ? toast.success("This is item  added to cart") : toast.error("This item is alredy in the Cart");
    }

    const [productCount, setProductCount] = useState(1);
    if (productCount <= 0) {
        setProductCount(1)
    }

    // URL ID 
    const Id = useParams();
    const productInfo = PopularData.filter((PopularData) => {
        return (PopularData.id === Number(Id.id))
    })

    // const { id, img, img2, title, rate } = productInfo[0]

    const { id, img, title, rate, quantity } = productInfo[0]

    return (
        <div>
            <div className='product-area'>
                <PageHeading goBackLink='Home' pageTitle='Shop Details' />
                <div className='container mx-auto px-5 '>
                    <div className='tpproduct grid grid-cols-1 lg:grid-cols-3 gap-14 my-14'>
                        <div className='tpproduct-details-img flex'>
                            {/* <div className=''>
                                <img src={product1} alt="" className='w-[70px] h-[80px] mb-3 rounded-md' />
                                <img src={product2} alt="" className='w-[70px] h-[80px] mb-3 rounded-md' />
                                <img src={product3} alt="" className='w-[70px] h-[80px] rounded-md' />
                            </div> */}
                            <img src={img} alt="" className='ele rounded-lg w-[100%] h-[400px]' />
                            {/* <img src={img} alt="" className='rounded-lg w-[388px] h-[443px]' /> */}
                        </div>
                        <div className='tpproduct-details-content'>
                            <div className='product-tag-area flex items-center mb-1'>
                                <div className='mr-4'>
                                    <p className='product-details-tag'>Dress</p>
                                </div>
                                <div className='product-details-rating flex text-yellow-400 mr-1'>
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                                <div className='product-details-reviewers'>
                                    <a href="#" className='text-gray-500'>10 Reviews</a>
                                </div>
                            </div>
                            <div className='product-details-title-area flex items-center mb-1'>
                                <h3 className='product-details-title'>{title}</h3>
                                <span className='product-details-stock'>In Stock</span>
                            </div>
                            <div className='product-details-price mb-5'>
                                <del className='text-gray-400 text-xl font-semibold'>$9.35</del>
                                <span className='text-rose-600 text-3xl font-bold ml-1'>{rate}</span>
                            </div>
                            <div className='product-details-pera mb-4'>
                                <p className='text-gray-500'>
                                    Priyoshop has brought to you the Hijab 3 Pieces Combo Pack PS23. It is a <br />
                                    completely modern design and you feel comfortable to put on this hijab. <br />Buy it at the best price.
                                </p>
                            </div>
                            <div className='product-details-count flex'>
                                <div className='product-quantity mr-3'>
                                    <input type="number" min={1} defaultValue={1} className='border font-bold rounded-md w-56 h-14 p-3' />
                                </div>
                                <div className='product-details-cart mr-3'>
                                    <button onClick={() => send(productInfo[0])} className='flex justify-center items-center bg-rose-600 text-white rounded-md w-[11rem] h-14 font-bold'> <IoCartOutline className='mr-1 text-lg' /> Add To Cart</button>
                                </div>
                                {/* <div className='product-details-wishlist'>
                                    <button className='border p-4 rounded-md text-gray-300'><IoMdHeartEmpty className='text-2xl' /></button>
                                </div> */}
                            </div>
                            <div className='product-details-wishlist'>
                                <button className='border p-4 rounded-md text-gray-300'><IoMdHeartEmpty className='text-2xl' /></button>
                            </div>
                        </div>
                        <div className='product-details-condation'>
                            <ul>
                                <li className='mb-4'>
                                    <div className='product-details-condation-item border flex items-center p-3 w-[250px] h-[70px]'>
                                        <div className='details-condation-thumb mx-3'>
                                            <img src={productdet1} alt="" className='details-img-hover' />
                                        </div>
                                        <div className='details-condation-text ml-2'>
                                            <p className='text-gray-500'>Free Shipping apply to all orders over $100</p>
                                        </div>
                                    </div>
                                </li>
                                <li className='mb-4'>
                                    <div className='product-details-condation-item border flex items-center p-3 w-[250px] h-[70px]'>
                                        <div className='details-condation-thumb mx-3'>
                                            <img src={productdet2} alt="" className='details-img-hover' />
                                        </div>
                                        <div className='details-condation-text ml-2'>
                                            <p className='text-gray-500'>Guranteed 100% Organic from natural farmas</p>
                                        </div>
                                    </div>
                                </li>
                                <li className='mb-4'>
                                    <div className='product-details-condation-item border flex items-center p-3 w-[250px] h-[70px]'>
                                        <div className='details-condation-thumb mx-3'>
                                            <img src={productdet3} alt="" className='details-img-hover' />
                                        </div>
                                        <div className='details-condation-text ml-2'>
                                            <p className='text-gray-500'>1 Day Returns if you change your mind</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className='product-details-condation-item border flex items-center p-3 w-[250px] h-[70px]'>
                                        <div className='details-condation-thumb mx-3'>
                                            <img src={productdet4} alt="" className='details-img-hover' />
                                        </div>
                                        <div className='details-condation-text ml-2'>
                                            <p className='text-gray-500'>Covid-19 Info: We keep delivering.</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopDetails
