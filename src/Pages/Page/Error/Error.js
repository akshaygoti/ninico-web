import React from 'react'
import { useNavigate } from 'react-router-dom'

import PageHeading from '../../../Component/PageHeading/PageHeading'
import errorlogo from '../../../Assets/error.png'

const Errorpage = () => {

    const navigate = useNavigate();
    const backToHome = () => {
        navigate("/");
    };

    return (
        <div>
            <PageHeading goBackLink='Home' pageTitle='Error'/>
            <div className='container mx-auto'>
                <div className='text-center my-16'>
                    <div className='flex justify-center mb-7'>
                        <img src={errorlogo} alt="..." className='' />
                    </div>
                    <h1 className='text-5xl font-bold'>404. Page not found</h1>
                    <p className='my-5 text-lg text-gray-500'>Sorry, we couldn't find the page you where looking for. We suggest that <br/> you return to homepage.</p>
                    <button className='bg-rose-600 text-white px-6 py-3 rounded-md font-semibold' onClick={backToHome}> <i class="fa-solid fa-arrow-left mr-2"></i> Back To Home</button>
                </div>
            </div>
        </div>
    )
}

export default Errorpage