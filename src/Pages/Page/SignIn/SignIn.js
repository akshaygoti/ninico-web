import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom';
import PageHeading from '../../../Component/PageHeading/PageHeading';

import loginbg from '../../../Assets/loginbg.jpg'
import signbg from '../../../Assets/signbg.jpg'

import { useFormik } from 'formik';
import * as Yup from 'yup';

import { LuLock } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa6";
import { GoKey } from "react-icons/go";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { GiHandBag, GiSwallow } from "react-icons/gi";
// import { IoRemoveOutline } from "react-icons/io5";

import Swal from 'sweetalert2'

import './signin.css'

const SignupSchema = Yup.object({
    Email: Yup.string().email("Invalid Email").required("Email is Required Field"),
    Password: Yup.string()
    .min(2, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Password is Required Field')
})

const SignIn = () => {

    const navigate = useNavigate();

    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    // const getemail = localStorage.getItem("Email");
    // const getpassword = localStorage.getItem("Password");

    // function onSubmitFun(e) {
    //     e.preventDefault();
    //     if (!email || !password) {
    //         alert("fill all data");
    //     } else {
    //         alert("Succesfully register");
    //         localStorage.setItem("Email", email);
    //         localStorage.setItem("Password", password);
    //         navigate("/")
    //     }
    // }

    // function onSubmitlogin(e) {
    //     e.preventDefault();
    //     if (!email && !password) {
    //         alert("fill all data");
    //     } else if (email !== getemail || password !== getpassword) {
    //         alert("plz fill currect details");
    //     }
    //     else {
    //         alert("succesfully login user")
    //     }
    // }

    // const handleClick = () =>{
    //     Swal.fire({
    //         title: "Good job!",
    //         text: "You clicked the button!",
    //         icon: "success"
    //       });
    // }

    const { values, handleChange, handleSubmit, handleBlur, errors, touched } = useFormik({
        initialValues: {
            Email: "",
            Password: ""
        },
        validationSchema: SignupSchema,

        onSubmit: (value) => {
            console.log(value, "value");
        }
    })
    console.log(values, "values")
    console.log(useFormik);
    console.log(touched, "touched")

    function HandleChange_2 () {
        return {
            handleChange
        }
    }

    function handleBlur_2 () {
        handleBlur()
    }

    return (
        <div>
            <div>
                <PageHeading goBackLink='Home' pageTitle='Sign In'/>
            </div>
            <div className='track-area my-16'>
                <div className='container mx-auto px-5'>
                    <div className='grid lg:grid-cols-2 gap-7'>
                        <form onSubmit={handleSubmit}>
                            <div className='tptrack-product'>
                                <div className='tptrack-thumb'>
                                    <img src={signbg} alt="signbg" className='w-full' />
                                </div>
                                <div className='tptrack-content bg-gray-100 px-11 py-16'>
                                    <div className='flex mb-7'>
                                        <div className='lock-icon flex items-center justify-center bg-white h-[50px] w-[100px] text-rose-600 text-lg rounded-md'>
                                            <GiHandBag />
                                        </div>
                                        <div className='ml-5'>
                                            <h3 className='text-xl font-semibold'>Sign Up</h3>
                                            <p className='personal-data text-gray-500'>Your personal data will be used to support your experience throughout this website, to manage access to your account. </p>
                                        </div>
                                    </div>
                                    <div className='tptrack-id mb-3'>
                                        <form onSubmit={handleSubmit} action="#" className='flex items-center bg-white'>
                                            <span className='text-xl ml-6'><MdOutlineMailOutline /></span>
                                            <input type="email" name='Email' value={values.Email} onChange={handleChange} onBlur={handleBlur} placeholder='Email address' className='w-[100%] h-[55px] pl-3' />
                                        </form>
                                    </div>
                                    <div className='tptrack-id bg-white mb-4'>
                                        <form onSubmit={handleSubmit} action="#" className='flex items-center '>
                                            <span className='text-lg ml-6'><GoKey /> </span>
                                            <input type="password" name='Password' value={values.Password} onChange={handleChange} onBlur={handleBlur} placeholder='Password' className='w-[100%] h-[55px] pl-3' />
                                        </form>
                                    </div>
                                    <div className='tpsign-remember mb-5'>
                                        <div className='tpsign-pass'>
                                            <a href="#" className='underline tpsign-pass2'>Already Have Account?</a>
                                        </div>
                                    </div>
                                    <div className='tptrack-btn tptrack-btn2'>
                                        <button className='tptrack-submition font-semibold flex items-center justify-center rounded-md w-full h-[50px]'>Register Now
                                            <FaArrowRightLong className='ml-4' />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <form onSubmit={handleSubmit}>
                            <div className='tptrack-product'>
                                <div className='tptrack-thumb'>
                                    <img src={loginbg} alt="loginbg" className='w-full' />
                                </div>
                                <div className='tptrack-content bg-gray-100 px-11 py-16'>
                                    <div className='flex mb-7'>
                                        <div className='lock-icon flex items-center justify-center bg-white h-[55px] w-[100px] text-rose-600 text-lg rounded-md'>
                                            <LuLock />
                                        </div>
                                        <div className='ml-5'>
                                            <h3 className='text-xl font-semibold'>Login Here</h3>
                                            <p className='personal-data text-gray-500'>Your personal data will be used to support your experience throughout this website, to manage access to your account. </p>
                                        </div>
                                    </div>
                                    <div className='tptrack-id mb-3'>
                                        <div  className='flex items-center bg-white'>
                                            <span className='text-lg ml-6'><FaRegUser /></span>
                                            <input type="email" name='Email' value={values.Email} onChange={HandleChange_2} onBlur={handleBlur} placeholder='Username / email address' className='w-[100%] h-[55px] pl-3' />
                                        </div>
                                    </div>
                                    <div className='tptrack-id bg-white mb-4'>
                                        <div  className='flex items-center '>
                                            <span className='text-lg ml-5'><GoKey /> </span>
                                            <input type="password" name='Password' value={values.Password} onChange={handleChange} onBlur={handleBlur} placeholder='Password' className='w-[100%] h-[55px] pl-3' />
                                        </div>
                                    </div>
                                    <div className='tpsign-remember flex justify-between mb-5'>
                                        <div className='form-check'>
                                            <input type="checkbox" className='form-check-input' />
                                            <label className="form-check-label ml-2 text-gray-500">Remember me</label>
                                        </div>
                                        <div className='tpsign-pass'>
                                            <a href="#" className='underline'>Forget Password</a>
                                        </div>
                                    </div>
                                    <div className='tptrack-btn'>
                                        <button className='tptrack-submition bg-rose-600 text-white font-semibold flex items-center justify-center rounded-md w-full h-[50px]'>Login Now
                                            <FaArrowRightLong className='ml-4'/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn