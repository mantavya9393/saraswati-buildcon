import React from 'react';
import { motion } from 'framer-motion';

const parseValue = (val) => {
    const num = parseFloat(val.replace(/[^\d.]/g, ''));
    return isNaN(num) ? 0 : num;
};

const completedProjects = [
    {
        srNo: 1,
        name: "Widening & Strengthening Of Jinaj Padra Khakhasar Kanewal Isanpur Road Km.0/0 To 25/3",
        client: "Executive Engineer, R&B Division, Anand",
        state: "Gujarat",
        value: "₹8.06 Cr",
        year: "2013"
    },
    {
        srNo: 2,
        name: "3054 S.R. To Road Work Resurfacing Of Internal Road Of Sector No. 20 To 30 In GTS",
        client: "Capital Project, Division-1, Gandhinagar",
        state: "Gujarat",
        value: "₹11.00 Cr",
        year: "2014"
    },
    {
        srNo: 3,
        name: "Widening & Strengthening of Tenpur Limb Rozad Punsari Bhavanpur Patiya Road (SH - 57)",
        client: "R & B Division, Himatnagar",
        state: "Gujarat",
        value: "₹40.96 Cr",
        year: "2015"
    },
    {
        srNo: 4,
        name: "Widening & Strengthening Naroda Dehgam-Harsol-Dhansura Road (SH 68)",
        client: "R & B Division, Himatnagar",
        state: "Gujarat",
        value: "₹59.70 Cr",
        year: "2015"
    },
    {
        srNo: 5,
        name: "Strengthening and Renewal Of Delhi ByePass Road From Sadwa Mod (Ramgarh Tiraha) to JDA NH-11 Boundary",
        client: "EE Zone-10, JDA, Jaipur",
        state: "Rajasthan",
        value: "₹12.22 Cr",
        year: "2016"
    },
    {
        srNo: 6,
        name: "Widening & Strengthening of Dakor Pali Road Km. 90/200 to 112/200 (Four Lanning & Necessary Works)",
        client: "R & B Division, Nadiad",
        state: "Gujarat",
        value: "₹52.20 Cr",
        year: "2018"
    },
    {
        srNo: 7,
        name: "Widening of Morbi Jetpar Aniyari Road SH 321 km 3/2 to 27/5",
        client: "R and B Division, Morbi",
        state: "Gujarat",
        value: "₹42.92 Cr",
        year: "2018"
    },
    {
        srNo: 8,
        name: "Widening of Morbi Halvad Road SH 22 Km 53/6 to 72/0",
        client: "R and B Division, Morbi",
        state: "Gujarat",
        value: "₹24.09 Cr",
        year: "2018"
    },
    {
        srNo: 9,
        name: "Strengthening & Widening of Kheda Matar Tarapur Road km 55/2 to 84/0",
        client: "R & B Division, Nadiad",
        state: "Gujarat",
        value: "₹30.39 Cr",
        year: "2018"
    },
    {
        srNo: 10,
        name: "Construction Of B.T. Roads In PAP Area Of Ring Road (Inner Side-North Side- Ch-27500 to 33100) Zone-14, JDA, JAIPUR",
        client: "EE Zone-14, JDA, Jaipur",
        state: "Rajasthan",
        value: "₹10.24 Cr",
        year: "2019"
    },
    {
        srNo: 11,
        name: "Resurfacing of Santrod Santrampur Doli Morva Road Km. 0/0 to 33/0 Dist. Panchmahal",
        client: "Executive Engineer, R&B Division, Godhara",
        state: "Gujarat",
        value: "₹11.51 Cr",
        year: "2019"
    },
    {
        srNo: 12,
        name: "Widening and Strengthening of Nadiad Dakor Pali Road, Km. 71/200 to 82/00 And 84/500 to 86/200",
        client: "Executive Engineer, R&B Division, Anand",
        state: "Gujarat",
        value: "₹22.94 Cr",
        year: "2020"
    },
    {
        srNo: 13,
        name: "S R to Ladvel Pankhiya branch road km 0/000 to 16/500",
        client: "R & B Division, Nadiad",
        state: "Gujarat",
        value: "₹33.13 Cr",
        year: "2020"
    },
    {
        srNo: 14,
        name: "Widening & Strengthening of Dakor Ladvel Junction Road Km. 3/000 to 18/200 (Four Lanning & Necessary Works)",
        client: "R & B Division, Nadiad",
        state: "Gujarat",
        value: "₹26.72 Cr",
        year: "2020"
    },
    {
        srNo: 15,
        name: "Widening and Strengthening of Viramgam Bechraji Road Km. 25/4 to 43/6 (Four Lane Widening)",
        client: "R & B Division, Ahmedabad",
        state: "Gujarat",
        value: "₹50.20 Cr",
        year: "2020"
    },
    {
        srNo: 16,
        name: "Widening of Kalol Borisana Sanand Road Upto Ranchhodpura Chokadi Km 0/000 to 17/600",
        client: "Capital Division Project-3, Gandhinagar",
        state: "Gujarat",
        value: "₹19.03 Cr",
        year: "2021"
    },
    {
        srNo: 17,
        name: "Widening & Strengthening of Kadi Manipur Mehda Chandrasan Khodano Dhal Road Km. 0/0 to 28/950",
        client: "Executive Engineer, R&B(P) Division, Mehsana",
        state: "Gujarat",
        value: "₹12.42 Cr",
        year: "2021"
    },
    {
        srNo: 18,
        name: "Strengthening and Resurfacing of Roads under R and B Sub Division at Viramgam (Package 1)",
        client: "Executive Engineer, R&B Division, Ahmedabad",
        state: "Gujarat",
        value: "₹12.06 Cr",
        year: "2022"
    },
    {
        srNo: 19,
        name: "Widening and Strengthening of Viramgam Bechraji Road Km 0/0 to 25/400 (Four Lane Widening)",
        client: "R & B Division, Ahmedabad",
        state: "Gujarat",
        value: "₹90.20 Cr",
        year: "2023"
    }
];
// .sort((a, b) => parseValue(a.value) - parseValue(b.value));

const ongoingProjects = [
    {
        srNo: 1,
        name: "Execution of Road works, Civil & Associated work on EPC basis of Palanpur-Radhanpur-Samakhiyali section (NH-27)",
        client: "Trupti Infrastructure PVT. Limited",
        state: "Gujarat",
        value: "₹68.70 Cr",
        year: "2025"
    },
    {
        srNo: 2,
        name: "Excavation Loading and transportation of raw sand from Mining areas (5,950,000 tonne)",
        client: "IREL (India) Limited",
        state: "Orissa",
        value: "₹61.99 Cr",
        year: "2025"
    },
    {
        srNo: 3,
        name: "Removal of Pond Ash and Filling in Low Lying Areas in NALCO Damanjodi",
        client: "NALCO",
        state: "Orissa",
        value: "₹9.98 Cr",
        year: "2027"
    },
    {
        srNo: 4,
        name: "Maintenance works on Pipalapanka-Mundamarai section (NH-59) on PBMC mode",
        client: "MoRTH, through PWD-NH",
        state: "Orissa",
        value: "₹32.34 Cr",
        year: "2030"
    },
    {
        srNo: 5,
        name: "Construction of three-lane Railway Over Bridge near Vejalpur, Ahmedabad",
        client: "Chetan Construction Co.",
        state: "Gujarat",
        value: "₹66.76 Cr",
        year: "2025"
    }
];
// .sort((a, b) => parseValue(a.value) - parseValue(b.value));

const ProjectPage = () => {
    return (
        <div className="pt-20 w-full overflow-hidden">
            {/* Page Header */}
            <section className="bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#164e63] text-white py-20 px-6 md:px-20 text-center">
                <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                    <h1 className="text-4xl sm:text-6xl font-bold mb-4">
                        Our <span className="underline underline-offset-4 decoration-2 font-light">Projects</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-gray-300 text-lg sm:text-xl leading-relaxed">
                        Road & Bridge Works, Mining - Completed and Ongoing Projects
                    </p>
                </motion.div>
            </section>

            {/* Completed Projects */}
            <div className="container mx-auto p-10 px-6 md:px-20 pb-16">
                <h2 className="text-3xl font-bold text-[#0f172a] mb-6 text-center">Our Major Completed Projects</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white shadow rounded-lg overflow-hidden">
                        <thead className="bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#164e63] text-white">
                            <tr>
                                <th className="py-3 px-4 text-left">Sr. No</th>
                                <th className="py-3 px-4 text-left">Project Name</th>
                                <th className="py-3 px-4 text-left">Client</th>
                                <th className="py-3 px-4 text-left">State</th>
                                <th className="py-3 px-4 text-left">Value</th>
                                <th className="py-3 px-4 text-left">Year</th>
                            </tr>
                        </thead>
                        <tbody>
                            {completedProjects.map((project) => (
                                <tr key={project.srNo} className="border-b hover:bg-gray-100">
                                    <td className="py-3 px-4">{project.srNo}</td>
                                    <td className="py-3 px-4">{project.name}</td>
                                    <td className="py-3 px-4">{project.client}</td>
                                    <td className="py-3 px-4">{project.state}</td>
                                    <td className="py-3 px-4">{project.value}</td>
                                    <td className="py-3 px-4">{project.year}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Ongoing Projects */}
            <div className="container mx-auto px-6 md:px-20 pb-20">
                <h2 className="text-3xl font-bold text-[#0f172a] mb-6 text-center">Our Major Ongoing Projects</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white shadow rounded-lg overflow-hidden">
                        <thead className="bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#164e63] text-white">
                            <tr>
                                <th className="py-3 px-4 text-left">Sr. No</th>
                                <th className="py-3 px-4 text-left">Project Name</th>
                                <th className="py-3 px-4 text-left">Client</th>
                                <th className="py-3 px-4 text-left">State</th>
                                <th className="py-3 px-4 text-left">Value</th>
                                <th className="py-3 px-4 text-left">Est. Completion</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ongoingProjects.map((project) => (
                                <tr key={project.srNo} className="border-b hover:bg-gray-100">
                                    <td className="py-3 px-4">{project.srNo}</td>
                                    <td className="py-3 px-4">{project.name}</td>
                                    <td className="py-3 px-4">{project.client}</td>
                                    <td className="py-3 px-4">{project.state}</td>
                                    <td className="py-3 px-4">{project.value}</td>
                                    <td className="py-3 px-4">{project.year}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ProjectPage;
