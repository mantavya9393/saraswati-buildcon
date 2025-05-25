import React from 'react'
import { Link } from 'react-router-dom';

import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#164e63]
                w-full overflow-hidden' id='Footer'>
            <div className='container mx-auto flex flex-col md:flex-row
                justify-between items-start'>
                {/* Company Logo and Info */}
                <div className='w-full md:w-1/3 mb-8 md:mb-0'>
                    {/* <Link to="/">
                        <img src={assets.sb_logo} width={50} height={50} alt="logo" className="cursor-pointer" />
                    </Link> */}
                    <p className='text-gray-400 mt-4'>Saraswati Buildcon is a leading civil engineering contractor based in Gujarat, India,
                        with a strong foundation established in 2010. We are an "AA Class" approved contractor registered with the Government of Gujarat
                        and Rajasthan, and a “Super Class” approved contractor with the Government of Odisha.</p>
                </div>
                {/* Company Routes */}
                <div className='w-full md:w-1/5 mb-8 md:mb-0'>
                    <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
                    <ul className='flex flex-col gap-2 text-gray-400'>
                        <a href='/' className='hover:text-white'>Home</a>
                        <a href='/about' className='hover:text-white'>About Us</a>
                        <a href='/contact' className='hover:text-white'>Contact</a>
                        <a href='/careers' className='hover:text-white'>Careers</a>
                    </ul>
                </div>
                {/* Company Contact Details */}
                <div className='w-full md:w-1/3'>
                    <h3 className='text-white text-lg font-bold mb-4'>Company Contact Details</h3>
                    <ul className='flex flex-col gap-2 text-gray-400'>
                        <a className='hover:text-white'>+91 89800 36097/24616</a>
                        <a href='mailto:info@saraswatibuildcon.com' className='hover:text-white'>info@saraswatibuildcon.com</a>
                        <a className='hover:text-white'>SurveyNo. 687/1, Ognaj-Gota Road,
                            Near Vasant Nagar Township,
                            Ognaj, Ahmedabad - 380060.
                            Gujarat, India</a>
                    </ul>
                </div>
            </div>

            <div className='border-t border-gray-500 py-4 mt-5 text-center
            text-gray-500'>
                Copyright © saraswatibuildcon.com
            </div>
        </div>
    )
}

export default Footer