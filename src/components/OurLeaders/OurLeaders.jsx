import React from 'react';
import { motion } from 'framer-motion';
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

const leaders = [
    {
        name: 'Mr. Rajendrabhai Govindbhai Patel',
        position: 'Founder & Partner',
        image: assets.profile_img_1,
        bio: 'With over 30 years of experience in civil engineering and infrastructure development, Mr. Patel has been instrumental in steering the company towards excellence.',
    },
    {
        name: 'Mr. Kamleshbhai Govindbhai Patel',
        position: 'Co-Founder & Partner',
        image: assets.profile_img_2,
        bio: 'Mr. Kamleshbhai brings a wealth of knowledge in project management and has played a pivotal role in expanding the company\'s footprint across various states.',
    },
];

const OurLeaders = () => {
    const navigate = useNavigate();

    return (
        <motion.section
            id="OurLeaders"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bg-white text-blue-900 py-20 px-6 md:px-20"
        >
            <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl sm:text-4xl font-bold mb-12 text-center">
                    Our <span className="underline underline-offset-4 decoration-2 font-light">Leaders</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                    {leaders.map((leader, index) => (
                        <motion.div
                            key={index}
                            onClick={() => navigate('/about#our-partners')}
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                            className="bg-blue-50 p-8 rounded-xl shadow-lg hover:shadow-2xl cursor-pointer text-center"
                        >
                            <div className="w-40 h-40 mx-auto mb-6 overflow-hidden rounded-full border-4 border-white shadow-md">
                                <img
                                    src={leader.image}
                                    alt={leader.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-2xl font-semibold mb-2">{leader.name}</h3>
                            <p className="text-md text-gray-700 mb-4">{leader.position}</p>
                            <p className="text-sm text-gray-600">{leader.bio}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default OurLeaders;
