import React from 'react';
import { motion } from 'framer-motion';

const Careers = () => {
    const jobOpenings = [
        {
            title: "Civil Engineer",
            location: "Gujarat, India",
            description: "Looking for an experienced Civil Engineer to manage construction projects. Must have experience in road construction.",
        },
        {
            title: "Site Supervisor",
            location: "Maharashtra, India",
            description: "Site Supervisor needed to oversee ongoing construction projects. Experience in managing teams required.",
        },
        {
            title: "Project Manager",
            location: "Rajasthan, India",
            description: "Project Manager needed to lead large civil engineering projects. Must have a minimum of 5 years of experience.",
        },
    ];

    return (
        <div className="pt-20 w-full overflow-hidden">
            {/* Careers Page Header */}
            <section className="bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#164e63] text-white py-20 px-6 md:px-20 text-center">
                <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                    <h1 className="text-4xl sm:text-6xl font-bold mb-4">
                        Careers @ <span className="underline underline-offset-4 decoration-2 font-light">Saraswati Buildcon</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-gray-300 text-lg sm:text-xl leading-relaxed">
                        Building Infrastructure. Empowering Progress.
                    </p>
                </motion.div>
            </section>

            {/* Job Listings Section */}
            <div className="container mx-auto p-10">
                <h2 className="text-3xl font-bold mb-6 text-center text-[#0f172a]">
                    Current Job Openings
                </h2>
                <p className="text-center mb-10 text-gray-500">
                    We are always looking for talented individuals to join our growing team. Here are some of our current job openings.
                </p>

                <div className="space-y-6">
                    {jobOpenings.map((job, index) => (
                        <div key={index} className="bg-gradient-to-r from-[#e0f2fe] via-[#cbd5e1] to-[#e0f2fe] shadow-md rounded-lg p-6 border border-gray-200 hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold text-[#1e293b]">{job.title}</h3>
                            <p className="text-[#475569]">{job.location}</p>
                            <p className="mt-4 text-gray-600">{job.description}</p>
                            <button className="mt-4 bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#164e63] hover:bg-blue-900 hover:scale-105 duration-300 ease-in-out text-white px-6 py-2 rounded-full transition cursor-pointer">
                                Apply Now
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Careers;
