import React from 'react'
import { motion } from 'framer-motion'
import { assets } from '../../assets/assets'
import './Header.css' // This should include your slideshow styles

const Header = () => {
    return (
        <div id='Header' className='pt-35 relative min-h-screen w-full overflow-hidden'>

            {/* Background Video */}
            <video
                className="absolute inset-0 w-full h-full object-cover z-0"
                src={assets.sb_header_video}
                autoPlay
                muted
                loop
                playsInline
            />

            {/* Content */}
            <div className='relative z-20 flex flex-col items-center justify-center min-h-screen text-white text-center px-6 md:px-12'>
                <div className='mt-10 flex flex-wrap justify-center gap-6'>
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        href='#Projects'
                        className="bg-white/20 backdrop-blur-sm border border-white text-white px-8 py-3 rounded transition-all duration-300 hover:bg-white hover:text-black"
                    >
                        Projects
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        href='#Contact'
                        className="bg-white/20 backdrop-blur-sm border border-white text-white px-8 py-3 rounded transition-all duration-300 hover:bg-white hover:text-black"
                    >
                        Contact Us
                    </motion.a>
                </div>
            </div>
        </div>
    )
}

export default Header
