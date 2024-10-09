import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

// icons import
import { FaStar } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import { CiShoppingBasket } from "react-icons/ci";
import { HiOutlineArrowsRightLeft } from "react-icons/hi2";
import { ImEye } from "react-icons/im";
import { CiHeart } from "react-icons/ci";

import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useDispatch, useSelector } from "react-redux";
import { ADD_CART, ADD_WISHLIST } from "../../Redux/Actions/Action";

import './PopularProducts.css'

function Commoncard({ id, img, img2, title, rate, quantity }) {

    const navigate = useNavigate();

    const data = useSelector((state) => state.cartreducer.carts)
    const data2 = useSelector((state) => state.cartreducer.Wishlist)

    const Product = { img, img2, title, rate, id, quantity }
    const dispatch = useDispatch();
    const send = (e) => {
        console.log(e, "eeee")
        dispatch(ADD_CART(e))
        let find = data.findIndex(item => item.id === e.id); 
        find === -1 ?  toast.success("This is item  added to cart"):  toast.error("This item is alredy in the Cart");
    }

    const SendWishlist = (e) => {
        console.log(e, "eeee")
        dispatch(ADD_WISHLIST(e))
        let find = data2.findIndex(item => item.id === e.id); 
        find === -1 ?  toast.success("This item is added to Wishlist"):  toast.error("This item is alredy in the Wishlist");
    }

    return (
        <div id='PRODUCTCARD' className='ProductCard w-[19rem] h-[26rem]'>
            <div className='ProductCard-Head mx-3.5 my-3 relative'>
                <Link id='ProductCard-link' to={`/shopDetails/${id}`} className='block rounded-md overflow-hidden relative '>
                    <img src={img} alt={title + "image"} className='black object-contain w-full h-full mx-auto ' />
                    <img src={img2} alt={title + "image"} className='black object-contain mx-auto absolute top-0 z-[1]' />
                </Link>
                <div className='ProductCard-Buttons mx-auto flex items-stretch justify-center rounded-md absolute '>
                    <ul className='bg-white w-full flex items-center justify-evenly rounded-md'>
                        <li className='flex items-center justify-center'>
                            <button className='flex items-center justify-center hover:text-[#D51243] transition-all'>
                                <CiShoppingBasket onClick={() => send(Product)} className='text-2xl' />
                            </button>
                        </li>
                        <li className='flex items-center justify-center'>
                            <button className='flex items-center justify-center hover:text-[#D51243] transition-all'>
                                <HiOutlineArrowsRightLeft className='text-2xl' />
                            </button>
                        </li>
                        <li className='flex items-center justify-center'>
                            <button onClick={() => navigate(`/shopDetails/${id}`)} className='flex items-center justify-center hover:text-[#D51243] transition-all'>
                                <ImEye className='text-2xl' />
                            </button>
                        </li>
                        <li className='flex items-center justify-center'>
                            <button className='flex items-center justify-center hover:text-[#D51243] transition-all'>
                                <CiHeart onClick={() => SendWishlist(Product)} className='text-2xl' />
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='ProductCard-body mx-3.5'>
                <Link to={`/shopDetails/${id}`} className='text-[1rem] capitalize block text-gray-400 ' >{title}</Link>
                <p className='text-[1.1rem] font-bold mt-1'>${rate}.00</p>
            </div>
            <div className='ProductCard-Review flex items-center justify-between mt-1 px-3.5'>
                <ul className='ProductCard-Colors'>
                    <li className='flex items-center'>
                        <Link to="/shopDetails" className='flex items-center mr-1 border border-transparent text-[#99C4FF] rounded-full'>
                            <span className='w-[14px] h-[14px] bg-[#99C4FF] block rounded-full transition-all mx-auto'></span>
                        </Link>
                        <Link to="/shopDetails" className='flex items-center mr-1 border border-transparent text-[#D51243] rounded-full'>
                            <span className='w-[14px] h-[14px] bg-[#D51243] block rounded-full transition-all mx-auto'></span>
                        </Link>
                        <Link to="/shopDetails" className='flex items-center mr-1 border border-transparent text-[#FF7373] rounded-full'>
                            <span className='w-[14px] h-[14px] bg-[#FF7373] block rounded-full transition-all mx-auto'></span>
                        </Link>
                        <Link to="/shopDetails" className='flex items-center mr-1 border border-transparent text-[#BE9AFF] rounded-full'>
                            <span className='w-[14px] h-[14px] bg-[#BE9AFF] block rounded-full transition-all mx-auto'></span>
                        </Link>
                    </li>
                </ul>
                <p className='ProductCard-Star flex  justify-start items-center'>
                    <Link to='/' className='flex items-center '>
                        <FaStar className='text-rose-600' />
                        <FaStar className='text-rose-600' />
                        <FaStar className='text-rose-600' />
                        <FaStar className='text-rose-600' />
                        <CiStar className='text-rose-600' />
                    </Link>
                    <span className="inline-flex items-center text-xs">
                        (81)
                    </span>
                </p>
            </div>
        </div>
    )
}

export default Commoncard