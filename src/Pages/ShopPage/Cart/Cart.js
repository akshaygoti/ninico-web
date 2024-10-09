import React, { useState, useRef } from 'react'

import PageHeading from '../../../Component/PageHeading/PageHeading'

import { REMOVE_CART, INCREMENT_CART, DECREMENT_CART, UPDATE_QUANTITY } from '../../../Redux/Actions/Action';
import { useDispatch, useSelector } from 'react-redux';

import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";

const Cart = () => {

    const dispatch = useDispatch();

    const Remove_Cart = (id) => {
        console.log(id);
        dispatch(REMOVE_CART(id))
    }

    const Inc_Cart = (item) => {
        console.log(item);
        dispatch(INCREMENT_CART(item))
    }

    const Dec_Cart = (item) => {
        console.log(item);
        dispatch(DECREMENT_CART(item))
    }

    const CartlistItem = useSelector((state) => state.cartreducer.carts);
    const quantities = useSelector((state) => state.cartreducer.quantities);
    console.log(CartlistItem);

    const changeQuantity = (event, id) => {
        const Quantity = parseInt(event.target.value);
        dispatch(UPDATE_QUANTITY(id, Quantity));
    };

    let Subtotal = 0;
    CartlistItem.forEach((item) => {
        const Quantity = quantities[item.id] || 1;
        Subtotal += item.rate * Quantity;
    });

    const Taxes = 9.00;

    return (
        <div>
            <div>
                <PageHeading goBackLink='Home' pageTitle='Cart' />
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
                                                <th scope="col" className="">Remove</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200 bg-white text-center">
                                            {CartlistItem.map((item, ind) => {
                                                let { id, img, title, rate } = item
                                                const quantity = quantities[id] || 1;
                                                const totalPrice = quantity * rate
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
                                                        <td className="whitespace-nowrap">${rate}.00</td>
                                                        <td className="whitespace-nowrap">
                                                            {/* <div className='input flex items-center justify-between border px-2'> */}
                                                            {/* <div className='input-text'>
                                                                    <p>{quantity}</p>
                                                                </div> */}
                                                            {/* <div className='input-btn flex flex-col'>
                                                                    <button onClick={() => Inc_Cart(item)}><IoMdArrowDropup /></button>
                                                                    <button onClick={() => Dec_Cart(item)}><IoMdArrowDropdown /></button>
                                                                </div> */}
                                                            <input onChange={(event) => changeQuantity(event, id)}
                                                                type='number'
                                                                name='number'
                                                                defaultValue={1}
                                                                min="1"
                                                                className='outline-none input-number border-none focus:border-none mx-2' />
                                                            {/* </div> */}
                                                        </td>
                                                        {/* <td className="whitespace-nowrap">${rate * quantity}.00</td> */}
                                                        <td className="whitespace-nowrap">${totalPrice.toFixed(2)}</td>
                                                        <td className="whitespace-nowrap">
                                                            <button onClick={() => Remove_Cart(id)}>Remove</button>
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
                <div className='btn-group px-5 mb-10'>
                    <div className='coupon1 flex justify-between flex-wrap'>
                        <div className='coupon'>
                            <input type="text" placeholder='Coupon code' className='input-text border mr-3 h-[50px] p-2 outline-0 rounded-md' />
                            <button className='tp-btn font-semibold'>Apply Coupon</button>
                        </div>
                        <div className='coupon2'>
                            <button className='tp-btn font-semibold'>Update cart</button>
                        </div>
                    </div>
                </div>
                <div className='flex justify-end px-5 mb-16 w-full'>
                    <div className='cart-page-total w-[50%]'>
                        <h2 className='text-2xl font-semibold mb-4'>Cart Totals</h2>
                        <ul className='mb-7'>
                            <li className='border flex items-center justify-between px-5 h-12'>
                                <p>Subtotal</p>
                                <p>${Subtotal.toFixed(2)}</p>
                                {/* <p>$20.00</p> */}
                            </li>
                            <li className='border flex items-center justify-between px-5 h-12'>
                                <p>Taxes</p>
                                <p>${(Subtotal * Taxes / 100).toFixed(2)}</p>
                                {/* <p>$20.00</p> */}
                            </li>
                            <li className='border flex items-center justify-between px-5 h-12'>
                                <p>Total</p>
                                <p>${(Subtotal + (Subtotal * Taxes / 100)).toFixed(2)}</p>
                                {/* <p>$20.00</p> */}
                            </li>
                        </ul>
                        <button className='bg-rose-600 p-3 text-white font-semibold rounded-md'>Proceed to Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
