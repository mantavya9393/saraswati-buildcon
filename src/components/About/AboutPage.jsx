import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { assets } from '../../assets/assets'; // Assuming you have your assets like about images

const AboutPage = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }, [location]);

    const containerVariants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
    };

    return (
        <div className="pt-20"> {/* Padding to offset navbar */}

            {/* Header Section */}
            <section className="bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#164e63] text-white py-20 px-6 md:px-20 text-center">
                <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                    <h1 className="text-4xl sm:text-6xl font-bold mb-4">
                        About <span className="underline underline-offset-4 decoration-2 font-light">Saraswati Buildcon</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-gray-300 text-lg sm:text-xl leading-relaxed">
                        Building Infrastructure. Empowering Progress.
                    </p>
                </motion.div>
            </section>

            {/* Company Introduction */}
            <section className="bg-white py-20 px-6 md:px-20">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center"
                >

                    {/* Image with hover zoom */}
                    <motion.img
                        src={assets.project_img_1}
                        alt="About Us"
                        className="rounded-xl shadow-lg object-cover h-full hover:scale-105 transition-transform duration-500"
                        whileHover={{ scale: 1.05 }}
                    />

                    <div>
                        {/*first two paragraphs */}
                        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#0f172a]">Who We Are</h2>
                        <p className="text-gray-700 leading-relaxed text-lg mb-4">
                            Saraswati Buildcon is a leading civil engineering contractor based in Gujarat, India, with a strong foundation established in 2010.
                            We are an <span className="font-semibold">"AA Class"</span> approved contractor registered with the Government of Gujarat and Rajasthan,
                            and a <span className="font-semibold">“Super Class”</span> approved contractor with the Government of Odisha. Specializing in Special Category "I" Road Works,
                            we deliver exceptional quality and expertise in infrastructure development.
                        </p>
                        <p className="text-gray-700 leading-relaxed text-lg">
                            Our success is driven by our commitment to continuous innovation, expansion, and an unwavering dedication to quality.
                            In a relatively short time, we have made significant strides in the industry, offering superior engineering and construction
                            services that exceed client expectations. With a highly skilled workforce, cutting-edge equipment, and visionary leadership, we ensure outstanding results across
                            every project. The dedication and talent of our people are the foundation of our growth and success.
                        </p>
                    </div>
                </motion.div>
            </section>

            {/* Detailed Content Full-Width */}
            <section className="bg-white mb-8 px-6 md:px-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="max-w-5xl mx-auto space-y-6 text-lg leading-relaxed"
                >
                    <p>
                        At Saraswati Buildcon, the well-being of our employees is a top priority. Safety is embedded in our values, and we are
                        steadfast in maintaining accident-free workplaces and project sites. By integrating health and safety into our business
                        practices, we create a secure and productive work environment.
                    </p>
                    <p>
                        We are also committed to sustainability and environmental stewardship. Regardless of project location or scope, we uphold
                        the highest standards of safety and environmental responsibility, ensuring that all our operations are conducted with the
                        utmost care for the environment.
                    </p>
                </motion.div>
            </section>

            {/* Our Strength Section */}
            <section className="bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#164e63] py-20 px-6 md:px-20">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10">
                        Our <span className="underline underline-offset-4 decoration-2 font-light">Strength</span>
                    </h2>

                    <p className="text-gray-300 text-lg leading-relaxed mb-12 max-w-3xl mx-auto">
                        At the heart of our success is a commitment to quality, reliability, and innovation. Over the years, we’ve built more than just structures—we’ve built trust. Our strength lies in our people, our processes, and our passion for delivering excellence in every project.
                    </p>

                    <motion.div
                        className="grid md:grid-cols-2 gap-8 text-left"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                    // viewport={{ once: true, amount: 0.2 }}
                    >
                        {/* Item 1 */}
                        <motion.div variants={itemVariants} className="flex items-start gap-4">
                            <span className="text-2xl text-white">🔹</span>
                            <div>
                                <h4 className="text-xl font-semibold text-white mb-2">Experienced Team</h4>
                                <p className="text-gray-300 leading-relaxed">
                                    Our team brings decades of hands-on experience across all areas of construction—from project management and engineering to procurement and on-site execution. We are driven by knowledge, craftsmanship, and a results-oriented mindset.
                                </p>
                            </div>
                        </motion.div>

                        {/* Item 2 */}
                        <motion.div variants={itemVariants} className="flex items-start gap-4">
                            <span className="text-2xl text-white">🔹</span>
                            <div>
                                <h4 className="text-xl font-semibold text-white mb-2">End-to-End Capabilities</h4>
                                <p className="text-gray-300 leading-relaxed">
                                    We manage every stage of the construction lifecycle with precision. From pre-construction planning and design coordination to project execution and handover, we ensure smooth delivery, every time.
                                </p>
                            </div>
                        </motion.div>

                        {/* Item 3 */}
                        <motion.div variants={itemVariants} className="flex items-start gap-4">
                            <span className="text-2xl text-white">🔹</span>
                            <div>
                                <h4 className="text-xl font-semibold text-white mb-2">Commitment to Quality & Safety</h4>
                                <p className="text-gray-300 leading-relaxed">
                                    We maintain the highest standards of quality and adhere to rigorous safety protocols. Our projects reflect attention to detail, durability, and compliance with industry best practices.
                                </p>
                            </div>
                        </motion.div>

                        {/* Item 4 */}
                        <motion.div variants={itemVariants} className="flex items-start gap-4">
                            <span className="text-2xl text-white">🔹</span>
                            <div>
                                <h4 className="text-xl font-semibold text-white mb-2">Client-Centric Approach</h4>
                                <p className="text-gray-300 leading-relaxed">
                                    We believe in building strong, lasting relationships. By listening closely to our clients’ needs and delivering on promises, we ensure satisfaction and long-term partnerships.
                                </p>
                            </div>
                        </motion.div>

                        {/* Item 5 */}
                        <motion.div variants={itemVariants} className="flex items-start gap-4 md:col-span-2 justify-self-center max-w-xl">
                            <span className="text-2xl text-white">🔹</span>
                            <div>
                                <h4 className="text-xl font-semibold text-white mb-2">Innovation & Technology</h4>
                                <p className="text-gray-300 leading-relaxed">
                                    We embrace modern construction techniques, sustainable practices, and digital tools to improve efficiency, accuracy, and project outcomes.
                                </p>
                            </div>
                        </motion.div>

                    </motion.div>
                </div>
            </section>

            {/* Our Strength Cards Section */}
            <section className="relative bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#164e63] py-20 px-6 md:px-20 overflow-hidden">
                <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
                    {/* Projects Completed */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                        className="p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition"
                    >
                        <h3 className="text-3xl font-bold text-[#0f172a] mb-2">100+</h3>
                        <p className="text-[#1e293b] leading-relaxed font-medium">Projects Completed</p>
                    </motion.div>

                    {/* Staff */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                        className="p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition"
                    >
                        <h3 className="text-3xl font-bold text-[#0f172a] mb-2">200+</h3>
                        <p className="text-[#1e293b] leading-relaxed font-medium">Technical & Non-Technical Staff</p>
                    </motion.div>

                    {/* Machinery */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                        className="p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition"
                    >
                        <h3 className="text-3xl font-bold text-[#0f172a] mb-2">300+</h3>
                        <p className="text-[#1e293b] leading-relaxed font-medium">Machineries in Operation</p>
                    </motion.div>
                </div>
            </section>


            {/* Partners Section */}
            <section className="bg-white py-20 px-6 md:px-20" id="our-partners">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-700 text-center mb-12">
                        Our <span className="underline underline-offset-4 decoration-2 font-light">Promoters</span>
                    </h2>
                    {[
                        {
                            img: assets.project_img_1,
                            name: "Mr. Rajendrabhai Govindbhai Patel",
                            title: "Founder & Partner",
                            description:
                                "With over 20 years of experience in infrastructure development, construction, and operations, Mr. Rajendrabhai Patel is the visionary founder of the company. His leadership and deep industry insight have been instrumental in building a strong and sustainable foundation for the organization.",
                            reverse: false
                        },
                        {
                            img: assets.project_img_2,
                            name: "Mr. Kamleshbhai Govindbhai Patel",
                            title: "Co-Founder & Partner",
                            description:
                                "An MBA by qualification, Mr. Kamleshbhai Patel brings 15 years of solid experience in infrastructure sectors including construction, project development, and operational management. His strategic thinking continues to guide the company’s growth trajectory.",
                            reverse: true
                        },
                        {
                            img: assets.project_img_2,
                            name: "Mr. Kunj Rajendra Patel",
                            title: "Promoter",
                            description:
                                "An M-Tech in Construction Engineering and Management from MIT, Pune, Mr. Kunj Rajendra Patel has 5+ years of experience in site management, client billing, tender handling, and technical operations. His expertise adds strong operational value to the company’s growth.",
                            reverse: false
                        },
                        {
                            img: assets.project_img_3,
                            name: "Mrs. Sarojben Rajendrabhai Patel",
                            title: "Partner",
                            description:
                                "A graduate in Business Administration, Mrs. Sarojben Patel has over 10 years of experience in office administration. Her role is vital in managing internal operations and ensuring administrative efficiency throughout the organization.",
                            reverse: true
                        }
                    ].map((partner, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.2 }}
                            className={`bg-white rounded-xl shadow-md flex flex-col ${partner.reverse ? 'md:flex-row-reverse' : 'md:flex-row'
                                } items-center md:items-start gap-6 p-6 mb-10 transform transition-all duration-300 hover:shadow-xl hover:scale-[1.015]`}
                        >
                            <img
                                src={partner.img}
                                alt={partner.name}
                                className="w-40 h-40 rounded-lg object-cover shadow-md hover:scale-105 transition-transform duration-300"
                            />
                            <div>
                                <h3 className="text-xl font-bold text-[#0f172a]">{partner.name}</h3>
                                <p className="text-sm font-medium text-gray-500 mb-2">{partner.title}</p>
                                <p className="text-gray-700 text-base leading-relaxed">{partner.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Vision, Mission, Values */}
            <section className="bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#164e63] py-20 px-6 md:px-20">
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">

                    {/* Vision */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                        className="p-8 bg-white/10 rounded-xl shadow-md hover:shadow-2xl transition"
                    >
                        <h3 className="text-2xl font-semibold text-white mb-4">Our Vision</h3>
                        <div className="text-gray-300 leading-relaxed text-left space-y-4">
                            <p>🔹 To be a leading force in India’s infrastructure development by delivering quality,
                                innovation, and sustainability in every project—while upholding the values of integrity, family unity, and social responsibility.</p>
                            <p>🔹 We envision a future where modern infrastructure not only enhances connectivity
                                but also uplifts communities and empowers economic growth across regions.</p>
                            <p>🔹 Our vision is rooted in building with purpose—structures that endure the test of time
                                while aligning with environmental responsibility and societal progress.</p>
                        </div>

                    </motion.div>

                    {/* Mission */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                        className="p-8 bg-white/10 rounded-xl shadow-md hover:shadow-2xl transition"
                    >
                        <h3 className="text-2xl font-semibold text-white mb-4">Our Mission</h3>
                        <div className="text-gray-300 leading-relaxed text-left space-y-2">
                            <p>
                                To build enduring infrastructure that empowers communities and enhances lives. We are driven by:
                            </p>
                            <p>🔹Executing government and private construction projects with excellence and efficiency.</p>
                            <p>🔹Maintaining professionalism, honesty, and fairness with all stakeholders.</p>
                            <p>🔹Embracing innovation, skilled manpower, and advanced equipment.</p>
                            <p>🔹Becoming a spearheading force in infrastructure development.</p>
                            <p>🔹Thinking globally, acting locally, and ensuring timely delivery.</p>
                        </div>
                    </motion.div>

                    {/* Values */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                        className="p-8 bg-white/10 rounded-xl shadow-md hover:shadow-2xl transition"
                    >
                        <h3 className="text-2xl font-semibold text-white mb-4">Core Values</h3>
                        <p className="text-gray-300 leading-relaxed text-left space-y-2">
                            🔹 Clients: We strive to exceed expectations and build long-term partnerships based on trust and performance.<br />
                            🔹 Employees: We nurture a fulfilling work environment that inspires loyalty and productivity.<br />
                            🔹 Trades & Suppliers: We foster mutual respect and teamwork, recognizing their essential role in every project's success.<br />                       </p>
                    </motion.div>

                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#164e63] text-white py-16 px-6 md:px-20 text-center">
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
                    <h2 className="text-3xl sm:text-5xl font-bold mb-4">Let's Build the Future Together</h2>
                    <p className="text-gray-300 max-w-2xl mx-auto mb-6 text-lg sm:text-xl leading-relaxed">
                        Partner with Saraswati Buildcon for your next infrastructure project and experience unparalleled excellence.
                    </p>
                    <a href="/contact">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="bg-white text-[#0f172a] font-semibold px-8 py-4 rounded-full text-lg hover:bg-gray-100 transition-all cursor-pointer"
                        >
                            Contact Us
                        </motion.button>
                    </a>
                </motion.div>
            </section>

        </div>
    );
};

export default AboutPage;
