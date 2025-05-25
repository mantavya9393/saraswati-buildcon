import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets';

const BrochureCTA = () => {
    return (
        <div className="bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#164e63] text-white text-center py-24 px-6 md:px-20 mt-16 shadow-2xl"
            style={{ backgroundImage: `url(${assets.phone_banner})` }}>
            <h2 className="text-3xl font-bold mb-4">Delivering Excellence with Integrity</h2>
            <div className="flex flex-wrap justify-center gap-4">
                <a
                    href={assets.sb_brouchure}
                    download
                    className="inline-block border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-blue-900 transition"
                >
                    📄 Download Our Brochure
                </a>
                <a
                    href="tel:+918980036097"
                    className="inline-block bg-green-800 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-green-700 transition"
                >
                    📞 Call Now
                </a>
            </div>
        </div>
    );
};

export default BrochureCTA;
