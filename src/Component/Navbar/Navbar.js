import React from 'react'
import Categories from '../Categories/Categories'

import { Link } from 'react-router-dom'

import { useNavigate } from 'react-router-dom';

import './navbar.css'

const Navbar = () => {

    const navigate = useNavigate();

  return (
    <div>
        <div className='main-menu-area mt-1'>
            <div className='container mx-auto px-5 flex items-center justify-between'>
                
                <div className='main-manu flex items-center'>
                    <Categories/>
                    {/* <button className='cat-btn'>
                        <i class="fa-solid fa-bars mr-3"></i>
                        Categories
                    </button> */}
                    <div className='dropdown1'>
                        <ul className='dropbtn1'>
                            <li><Link to="/">Home <i class="fa-solid fa-angle-down ml-1"></i> </Link></li>
                        </ul>
                        {/* <button className='dropbtn1'>
                            Home
                            <i class="fa-solid fa-angle-down ml-1"></i>
                        </button> */}
                        <div className='dropdown-content1 ml-4 bg-white'>
                            <ul className='w-[15rem] my-3'>
                                <li> <Link to="/">Wooden Home</Link> </li>
                                <li> <Link to="fashionHome">Fashion Home</Link> </li>
                                <li> <Link to="furnitureHome">Furniture Home</Link> </li>
                                <li> <Link to="cosmeticsHome">Cosmetics Home</Link> </li>
                                <li> <Link to="foodGrocery">Food Grocery</Link> </li>
                            </ul>
                        </div>
                    </div>
                    <div className='dropdown1'>
                        <ul className='dropbtn1'>
                            <li>
                                <Link to="/shop">Shop
                                <i class="fa-solid fa-angle-down ml-1"></i>
                                </Link>
                            </li>   
                        </ul>
                        {/* <button className='dropbtn1'>
                            Shop
                            <i class="fa-solid fa-angle-down ml-1"></i>
                        </button> */}
                        <div className='dropdown-content1 ml-4 bg-white'>
                            <ul className='w-[15rem] my-3'>
                                <li> <Link to="/shop">Shop</Link> </li>
                                <li> <Link to="/shop2">Shop 2</Link> </li>
                                <li> <Link to="/shopDetails/1">Shop Details</Link> </li>
                                <li> <Link to="/shopDetails2">Shop Details 2</Link> </li>
                                <li> <Link to="/shopLocation">Shop Location</Link> </li>
                                <li> <Link to="/cart">Cart</Link> </li>
                                <li> <Link to="/signIn">Sign In</Link> </li>
                                <li> <Link to="/checkout">Checkout</Link> </li>
                                <li> <Link to="/wishlist">Wishlist</Link> </li>
                                <li> <Link to="/productTrack">Product Track</Link> </li>
                            </ul>
                        </div>
                    </div>
                    <div className='dropdown1'>
                        <button className='dropbtn1'>
                            Pages
                            <i class="fa-solid fa-angle-down ml-1"></i>
                        </button>
                        <div className='dropdown-content1 ml-4 bg-white'>
                            <div className='flex'>
                                <ul className='w-[15rem] my-3'>
                                    <li className='ml-4 mb-3 text-sm font-bold'> <h1 className='hover:text-red-500'>PAGE LAYOUT</h1> </li>
                                    <li> <Link to="shopFiltersV1">Shop Filters V1</Link> </li>
                                    <li> <Link to="shopFiltersV2">Shop Filters V2</Link> </li>
                                    <li> <Link to="shopSidebar">Shop Sidebar</Link> </li>
                                    <li> <Link to="shopRightsidebar">Shop Right Sidebar</Link> </li>
                                    <li> <Link to="shopListview">Shop List View</Link> </li>
                                </ul>

                                <ul className='w-[15rem] my-3'>
                                    <li className='ml-4 mb-3 text-sm font-bold'> <h1 className='hover:text-red-500'>PAGE LAYOUT</h1> </li>
                                    <li> <Link to="about">About</Link> </li>
                                    <li> <Link to="cart">Cart</Link> </li>
                                    <li> <Link to="checkout">Checkout</Link> </li>
                                    <li> <Link to="/signin">Sign In</Link> </li>
                                    <li> <Link to="/login">Log In</Link> </li>
                                </ul>

                                <ul className='w-[15rem] my-3'>
                                    <li className='ml-4 mb-3 text-sm font-bold'> <h1 className='hover:text-red-500'>PAGE TYPE</h1> </li>
                                    <li> <Link to="productTrack">Product Track</Link> </li>
                                    <li> <Link to="wishlist">Wishlist</Link> </li>
                                    <li> <Link to="*">404 / Error</Link> </li>
                                    <li> <Link to="comingSoon">Coming Soon</Link> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='dropdown1'>
                        <button className='dropbtn1'>
                            Blog
                            <i class="fa-solid fa-angle-down ml-1"></i>
                        </button>
                        <div className='dropdown-content1 ml-4 bg-white'>
                            <ul className='w-[15rem] my-3'>
                                <li> <Link to="blog">Blog</Link> </li>
                                <li> <Link to="blogDetails">Blog Details</Link> </li>
                            </ul>
                        </div>
                    </div>
                    <ul className='dropbtn1'>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>   
                        </ul>
                    {/* <div className='dropdown1'>
                        <button className='dropbtn1'>Contact</button>
                    </div> */}
                </div>
                <div className='menu-contact'>
                    <ul className='flex items-center'>
                        <li className='mr-5'>
                            <a href="mobile" className='hover:text-red-500'>
                            <i class="fa-solid fa-phone-flip mr-2 text-red-600"></i>
                            908. 408. 501. 89
                            </a>
                        </li>
                        <li>
                            <a href="find_store" className='hover:text-red-500'>
                            <i class="fa-solid fa-location-dot mr-2 text-red-600"></i>
                            Find Store
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar