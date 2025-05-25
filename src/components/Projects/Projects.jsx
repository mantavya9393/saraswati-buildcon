import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets';

const sectors = [
    {
        title: 'Road Construction',
        image: assets.sector_road,
        description:
            'We build durable, high-quality roads for all terrains, ensuring long-lasting connectivity from local paths to major highways.',
    },
    {
        title: 'Coal Mining',
        image: assets.sector_coal_mining,
        description:
            'We prioritize safety and scale in our coal mining operations, reliably supporting energy and industrial needs.',
    },
    {
        title: 'Sand Mining',
        image: assets.sector_sand_mining,
        description:
            'We handle excavation, loading, transport, and unloading of sand for extraction of rare minerals at various plants.',
    },
    {
        title: 'Transportation',
        image: assets.sector_transportation,
        description:
            'Our efficient fleet and logistics enhance transport efficiency for quick delivery and reduced downtime.',
    },
    {
        title: 'Bridge Work',
        image: assets.sector_bridge,
        description:
            'We build strong bridges that connect communities, ensuring stability, safety, and longevity.',
    },
    {
        title: 'Pipeline & Network',
        image: assets.sector_pipeline,
        description:
            'We provide end-to-end pipeline and utility network solutions focused on safety and reliability.',
    },
];

const SectorCard = ({ sector, isActive, onClick }) => (
    <motion.div
        onClick={onClick}
        className={`relative cursor-pointer transition-all duration-500 overflow-hidden ${isActive ? 'flex-[2]' : 'flex-1'} h-[400px] rounded-xl shadow-lg group`}
        whileHover={{ scale: 1.01 }}
        viewport={{ once: true }}
    >
        {/* Background Image */}
        <img
            src={sector.image}
            alt={sector.title}
            // loading="lazy"
            className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10 flex items-end transition-all duration-300">
            <div className="p-4 text-white z-20">
                <h3 className="text-xl font-semibold">{sector.title}</h3>
                {isActive && (
                    <p className="text-sm mt-2 transition-opacity duration-500">{sector.description}</p>
                )}
            </div>
        </div>
    </motion.div>
);


const Projects = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <>
            <motion.section
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#164e63] text-white pt-16 pb-8 px-6 md:px-20"
                viewport={{ once: true }}
                id="Projects"
            >
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                    <div className="md:w-2/3">
                        <h2 className="text-3xl sm:text-5xl font-bold mb-3">
                            Our <span className="underline underline-offset-4 decoration-white font-light">Projects</span>
                        </h2>
                        <p className="text-blue-100 max-w-xl text-sm sm:text-base">
                            From Road Construction to Coal Mining and Pipeline projects, we’re delivering excellence across India.
                        </p>
                    </div>
                    <div className="md:w-auto">
                        <Link to="/projects">
                            <button className="bg-white text-blue-900 font-semibold px-6 py-3 rounded-full text-sm sm:text-base shadow-md hover:bg-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out">
                                View All Projects
                            </button>
                        </Link>
                    </div>
                </div>
            </motion.section>

            <section className="bg-gradient-to-br from-[#e0f7fa] via-[#f3e8ff] to-[#d0f0fd] py-20 px-6 md:px-20 text-blue-900">
                <h2 className="text-3xl sm:text-5xl font-bold text-center mb-10">
                    Our <span className="underline underline-offset-4 decoration-2 font-light">Sectors</span>
                </h2>

                <div className="flex gap-4 transition-all duration-700 max-w-7xl mx-auto">
                    {sectors.map((sector, index) => (
                        <SectorCard
                            key={index}
                            sector={sector}
                            isActive={activeIndex === index}
                            onClick={() => setActiveIndex(index)}
                        />
                    ))}
                </div>
            </section>
        </>
    );
};

export default Projects;
