import React from 'react';
import { motion } from 'framer-motion';
import { assets } from '../../assets/assets';
import './Clients.css'; // Keep your CSS

const clientLogos = [
    assets.roads_and_building_department_gujarat,
    assets.jda_jaipur,
    assets.irel_india_ltd,
    assets.morth_india,
    assets.pwd_odisha,
    assets.nalco_india
];

const Clients = () => (
    <>
        <section id="Clients" className="relative bg-gradient-to-br from-blue-100 via-white to-cyan-200 py-20 px-6 md:px-32 overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-blue-900 px-6 md:px-20"
            >
                <h2 className="text-2xl sm:text-4xl font-bold mb-14 text-center">
                    Our <span className="underline underline-offset-4 decoration-2 font-light">Clients</span>
                </h2>

                <div className="logo-marquee-wrapper">
                    <div className="logo-marquee">
                        {[...clientLogos, ...clientLogos].map((logo, index) => (
                            <div className="logo-item" key={index}>
                                <img src={logo} alt={`Client ${index + 1}`} className="h-full object-contain" />
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>

        {/* Download & Call To Action Section */}
        <motion.section
            id="AboutCTA"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#164e63] text-white py-16 px-6 md:px-20"
        >
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                    Want to know more about Saraswati Buildcon?
                </h2>
                <p className="mb-8 text-lg">
                    Download our brochure or give us a call to discuss your next project.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <a
                        href={assets.sb_brouchure}
                        download
                        className="inline-block bg-white text-blue-900 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition"
                    >
                        📄 Download Brochure
                    </a>
                    <a
                        href="tel:+918980036097"
                        className="inline-block bg-green-500 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-green-600 transition"
                    >
                        📞 Call Now
                    </a>
                </div>
            </div>
        </motion.section>
    </>
);

export default Clients;
