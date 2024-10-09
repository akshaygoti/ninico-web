import React from 'react'
import logo from '../../Assets/logo.png'
import uk from '../../Assets/uk.png'

import { Link, useNavigate } from 'react-router-dom'

import { PiShoppingCartLight } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa";
import { PiHeartStraight } from "react-icons/pi";

// get data using redux store
import { useSelector } from "react-redux";

import './header.css'

const Header = () => {

  const navigate = useNavigate();

  // redux concept
  const data = useSelector((state) => state.cartreducer.carts)
  // console.log(data, "data")

  const data2 = useSelector((state) => state.cartreducer.Wishlist)
  // console.log(data2, "data2")

  return (
    <div>
      <header>
        <div className='logo-area'>
          <div className='container mx-auto px-5 mt-1 flex items-center justify-between'>
            <div className='logo flex items-center'>
              <div className='manu-icon'>
                <button className='mr-4 mt-2'><i class="fa-solid fa-bars font-bold text-2xl text-black"></i></button>
              </div>
              <Link to="/" className='logo'>
                <img src={logo} alt="logo-img" className='mr-10' />
              </Link>
              <div className='search ml-10'>
                <div className='search-bar bg-slate-100 rounded-md w-[100%] flex items-center'>
                  <i className="fa-solid fa-magnifying-glass pl-3"></i>
                  <input type="text" placeholder='Search products...' className='p-3 rounded-md min-w-[150%] bg-slate-100 outline-0' />
                </div>
              </div>
            </div>
            <div className='head flex items-center'>
              {/* <div className='search'>
                <div className='search-bar border bg-slate-100 rounded-md min-w-[150%] flex items-center'>
                  <i className="fa-solid fa-magnifying-glass pl-3"></i>
                  <input type="text" placeholder='Search product' className='p-3 min-w-[150%] rounded-md bg-slate-100' />
                </div>
              </div> */}
              <div className='header-brand flex items-center'>
                <div className='dropdown'>
                  <button className='dropbtn flex items-center p-2 font-semibold rounded-md'>
                    <img src={uk} alt="uk_Img" className='mr-2' />
                    English
                    <i class="fa-solid fa-angle-down ml-1"></i>
                  </button>
                  <div className='dropdown-content bg-white'>
                    <a href="Arabic">Arabic</a>
                    <a href="Spanish">Spanish</a>
                    <a href="Mandarin">Mandarin</a>
                  </div>
                </div>
                <div className='header-meta-value ml-5'>
                  <select className='border border-gray-400 p-3 text-lg rounded-md'>
                    <option value="USD">USD</option>
                    <option value="YEAN">YEAN</option>
                    <option value="EURO">EURO</option>
                  </select>
                </div>
                <div className='header-meta-social ml-5 flex items-center'>
                  <button className='header-cart ml-3' onClick={() => navigate("/Cart")}>
                    <PiShoppingCartLight className='text-2xl text-gray-700' />
                    <span className='product-count'>{data.length}</span>
                  </button>
                  <button className='header-cart ml-5' onClick={() => navigate("/SignIn")}>
                    <FaRegUser className='text-xl text-gray-700 font-light' />
                  </button>
                  <button className='header-cart heart ml-5' onClick={() => navigate("/Wishlist")}>
                    <PiHeartStraight className='text-2xl text-gray-700' />
                    <span className='product-count'>{data2.length}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

    </div>
  )
}

export default Header
