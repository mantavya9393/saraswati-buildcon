import React, { useEffect, useState } from 'react'
import { assets } from '../../assets/assets'
import './Navbar.css' // This should include your slideshow styles

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    // Detect scroll
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Lock scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = showMobileMenu ? 'hidden' : 'auto'
    }, [showMobileMenu])

    return (
        <div
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-[#f1f3f6] ${isScrolled ? 'shadow-lg' : ''
                }`}
        >
            <div className='max-w-[1440px] mx-auto flex justify-between items-center py-1 px-6 md:px-20 lg:px-32 transition-all duration-300'>
                {/* Logo */}
                {/* Logo and Slogan */}
                <div className='flex items-center gap-4'>
                    <a href='/'>
                        <img
                            src={assets.sb_logo}
                            width={75}
                            height={80}
                            alt='Logo'
                            className='cursor-pointer'
                        />
                    </a>
                    {/* <div className="slogan-banner">
                        <p className="slogan-shimmer">
                            The road to <span className="focus-word">Success</span> is always under construction
                        </p>
                    </div> */}


                </div>

                {/* Desktop Nav */}
                <ul className='hidden md:flex gap-7 transition-colors duration-300 text-black'>
                    {['Home', 'About', 'Projects', 'Careers', 'Contact'].map((item, index) => (
                        <a
                            key={index}
                            href={item === 'Home' ? `/` : `/${item}`}
                            className='cursor-pointer hover:text-gray-500 font-semibold'
                        >
                            {item}
                        </a>
                    ))}
                </ul>

                {/* Mobile Menu Icon */}
                <img
                    src={assets.menu_icon}
                    className={`md:hidden cursor-pointer w-7 transition duration-300 invert`}
                    alt='menu'
                    onClick={() => setShowMobileMenu(true)}
                />
            </div>

            {/* Mobile Nav */}
            <div
                className={`md:hidden fixed inset-0 bg-white z-40 transition-transform duration-300 ${showMobileMenu ? 'translate-x-0' : 'translate-x-full'
                    } transform`}
            >
                <div className='flex justify-end p-6'>
                    <img
                        src={assets.cross_icon}
                        className='cursor-pointer w-6'
                        alt='close'
                        onClick={() => setShowMobileMenu(false)}
                    />
                </div>
                <ul className='flex flex-col items-center gap-4 mt-5 text-lg font-medium text-black'>
                    {['Home', 'About', 'Projects', 'Careers', 'Contact'].map((item, index) => (
                        <a
                            key={index}
                            href={item === 'Home' ? `/` : `/${item}`}
                            className='cursor-pointer px-4 py-2 hover:bg-gray-100 rounded-full'
                            onClick={() => setShowMobileMenu(false)}
                        >
                            {item}
                        </a>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Navbar
