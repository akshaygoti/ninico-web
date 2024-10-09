import React from 'react'
import { useState } from 'react';

import './wishlist.css'

import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";

import { REMOVE_WISHLIST, INCREMENT_WISHLIST, DECREMENT_WISHLIST } from '../../../Redux/Actions/Action';
import { useDispatch, useSelector } from 'react-redux';

import PageHeading from '../../../Component/PageHeading/PageHeading';


const Wishlist = () => {

    const dispatch = useDispatch();
    const Remove_Wishlist = (id) => {
        console.log(id)
        dispatch(REMOVE_WISHLIST(id))
    }

    const Inc_Wish = (item) => {
        console.log(item);
        dispatch(INCREMENT_WISHLIST(item))
    }

    const Dec_Wish = (item) => {
        console.log(item);
        dispatch(DECREMENT_WISHLIST(item))
    }

    const wishlistItem = useSelector((state) => state.cartreducer.Wishlist)
    // const [wishlistCounter, setwishlistCounter] = useState(null)
    console.log(wishlistItem)

    return (
        <div>
            <div className='cart-area'>
                <PageHeading goBackLink='Home' pageTitle='Wishlist' />
                <section className="mx-auto w-[100%] px-5">
                    <div className="mt-6 flex flex-col">
                        <div className="overflow-x-auto">
                            <div className="inline-block min-w-full py-2 align-middle">
                                <div className="overflow-hidden border border-gray-200">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th scope="col" className="">Images</th>
                                                <th scope="col" className="">Courses</th>
                                                <th scope="col" className="">Unit Price</th>
                                                <th scope="col" className="">Quantity</th>
                                                <th scope="col" className="">Total</th>
                                                <th scope="col" className="">Add To Cart</th>
                                                <th scope="col" className="">Remove</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200 bg-white text-center">
                                            {wishlistItem.map((item, ind) => {
                                                let { id, img, title, rate, quantity } = item
                                                return (
                                                    <tr key={ind}>
                                                        <td className="whitespace-nowrap">
                                                            <a href="#" className='flex justify-center'>
                                                                <img src={img} alt="" className='product-img w-[125px] h-[143px]' />
                                                            </a>
                                                        </td>
                                                        <td className="whitespace-nowrap">
                                                            <div className="product-name">{title}</div>
                                                        </td>
                                                        <td className="whitespace-nowrap">{rate}</td>
                                                        <td className="whitespace-nowrap">
                                                            <div className='input flex items-center justify-between border px-2'>
                                                                <div className='input-text'>
                                                                    <p>{quantity}</p>
                                                                </div>
                                                                <div className='input-btn flex flex-col'>
                                                                    <button onClick={() => Inc_Wish(item)}><IoMdArrowDropup /></button>
                                                                    <button onClick={() => Dec_Wish(item)}><IoMdArrowDropdown /></button>
                                                                </div>
                                                            </div>
                                                            {/* <input type="number" min={1} defaultValue={1} name='qty' className='qty' /> */}
                                                        </td>
                                                        <td className="whitespace-nowrap">{rate * quantity}</td>
                                                        <td>
                                                            <button className='tp-btn'>Add To Cart</button>
                                                        </td>
                                                        <td className="whitespace-nowrap">
                                                            <button onClick={() => Remove_Wishlist(id)}>Remove</button>
                                                        </td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <tr className='cart-item'>
                                    <td className=''>
                                        <a href="#" className='flex justify-center'>
                                            <img src={product5} alt="" className='' />
                                        </a>
                                    </td>
                                    <td>
                                        <a href="#" className='product-name'>Nathaniel Baldwin</a>
                                    </td>
                                    <td>$40</td>
                                    <td className=''>
                                        <input type="number" min={1} defaultValue={1} name='qty' className='qty' />
                                    </td>
                                    <td>$40.00</td>
                                    <td>
                                        <button className='tp-btn'>Add To Cart</button>
                                    </td>
                                    <td>
                                        <button>Remove</button>
                                    </td>
                                </tr> */}
            </div>
        </div>
    )
}

export default Wishlist