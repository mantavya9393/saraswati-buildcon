import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets';

const About = () => {
    return (
        <motion.section
            id="About"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bg-gradient-to-br from-[#e0f7fa] via-[#f3e8ff] to-[#d0f0fd]  py-20 px-6 md:px-20"
        >
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
                {/* Text content */}
                <div>
                    <h2 className="text-2xl sm:text-4xl font-bold mb-4 relative block break-words">
                        <span className="inline-block border-b-4 pb-2 w-full sm:w-auto">
                            <Typewriter
                                words={['Welcome to Saraswati Buildcon']}
                                cursor
                                cursorStyle="_"
                                typeSpeed={70}
                                deleteSpeed={0}
                                delaySpeed={5000}
                                loop={0}
                            />
                        </span>
                    </h2>
                    <div className="text-center sm:text-left">
                        <p className="text-lg sm:text-xl leading-relaxed text-gray-700 max-w-3xl mx-auto sm:mx-0 mt-2">
                            Saraswati Buildcon is a leading civil engineering contractor based in Gujarat, India, with a strong foundation
                            established in 2010. We are an <span className="font-semibold text-blue-900">"AA Class"</span> approved contractor
                            registered with the Government of Gujarat and Rajasthan.
                        </p>

                        <p className="text-lg sm:text-xl leading-relaxed text-gray-700 max-w-3xl mx-auto sm:mx-0 mt-4">
                            Additionally, we are a <span className="font-semibold text-blue-900">“Super Class”</span> approved
                            contractor with the Government of Odisha. Specializing in <span className="font-semibold text-blue-900">Special Category "I" Road Works
                            </span>, we deliver exceptional quality and expertise in infrastructure development.
                        </p>
                    </div>

                    <Link
                        to="/about"
                        className="inline-block mt-8 bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#164e63]
                         text-white px-6 py-3 rounded hover:bg-blue-900 transition"
                    >
                        Learn More
                    </Link>
                </div>

                {/* SVG / Image */}
                <div className="w-full h-full flex items-stretch">
                    <img
                        src={assets.about_bg}
                        alt="Construction Illustration"
                        className="w-full h-full object-cover rounded-md"
                        loading="lazy"
                    />
                </div>

            </div>
        </motion.section>
    );
};

export default About;
