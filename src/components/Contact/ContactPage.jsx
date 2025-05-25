import React from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import BrochureCTA from '../BrochureCTA/BrochureCTA';

const ContactPage = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "f722883d-7699-43e6-8e1a-298ccb28918d");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("");
            toast.success("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            toast.error(data.message);
            setResult("");
        }
    };

    return (
        <motion.section
            id="ContactPage"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="pt-20 w-full overflow-hidden"
        >
            {/* Header Section with Gradient */}
            <div className="bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#164e63] text-white text-center py-16 px-6 md:px-20">
                <h1 className="text-3xl sm:text-5xl font-bold mb-4">
                    Contact <span className="underline underline-offset-4 decoration-white/50 font-light">Us</span>
                </h1>
                <p className="text-white/80 text-lg">
                    We'd love to hear from you. Reach out to us and our team will get back to you shortly.
                </p>
            </div>

            {/* Contact Form and Office Info Section */}
            <div className="bg-white text-blue-900 py-20 px-6 md:px-20">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* Contact Form */}
                    <form className="space-y-6" onSubmit={onSubmit}>
                        <div>
                            <label className="block mb-2 font-semibold">Name</label>
                            <input
                                type="text"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-900"
                                name="Name"
                                placeholder="Your Name"
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-2 font-semibold">Email</label>
                            <input
                                type="email"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-900"
                                name="Email"
                                placeholder="Your Email"
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-2 font-semibold">Phone</label>
                            <input
                                type="tel"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-900"
                                name="Number"
                                placeholder="Your Phone Number"
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-2 font-semibold">Message</label>
                            <textarea
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-900"
                                rows="5"
                                name="Message"
                                placeholder="Your Message"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#164e63] text-white font-semibold py-3 rounded-lg hover:opacity-90 transition"
                        >
                            {result ? result : 'Send Message'}
                        </button>
                    </form>

                    {/* Office Info */}
                    <div className="bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#164e63] text-white rounded-lg p-8 space-y-8">
                        {/* Corporate Office */}
                        <div>
                            <h2 className="text-2xl font-bold mb-2">Corporate &amp; Communication Office</h2>
                            <p className="text-white/80">
                                Survey No. 687/1, Nr. Vasant Nagar, Ognaj - Gota Road,<br />
                                Ognaj, Ahmedabad-380059, Gujarat
                            </p>
                            <p className="mt-2">Contact No: +91-8980036097</p>
                            <p>Email: <a href="mailto:info@saraswatibuildcon.com" className="underline">info@saraswatibuildcon.com</a></p>
                        </div>

                        {/* Branch Office Gujarat */}
                        <div>
                            <h2 className="text-2xl font-bold mb-2">Branch Office (Gujarat)</h2>
                            <p className="text-white/80">
                                703-704, Zion Prime, Nr. Shilaj Flyover, Thaltej-Shilaj Road,<br />
                                Thaltej, Ahmedabad-380059, Gujarat
                            </p>
                            <p className="mt-2">Contact No: +91-8980036223</p>

                            <p className="mt-4 text-white font-medium">Also at:</p>
                            <p className="text-white/80">
                                311, Square One, Nr. Panchot Circle, Radhanpur Road,<br />
                                Mehsana-384002, Gujarat
                            </p>
                            <p>Contact No: +91-8980036223</p>
                        </div>

                        {/* Branch Office Orissa */}
                        <div>
                            <h2 className="text-2xl font-bold mb-2">Branch Office (Orissa)</h2>
                            <p className="text-white/80">
                                Khata No-43/1143, Kissam-Gharabari, Mauza-Aryapalli,<br />
                                Opp SMP-3, Ganjam District, Odisha
                            </p>
                            <p className="mt-2">Contact No: +91-8980036087</p>
                        </div>

                        {/* Branch Office Chhattisgarh */}
                        <div>
                            <h2 className="text-2xl font-bold mb-2">Branch Office (Chhattisgarh)</h2>
                            <p className="text-white/80">
                                Bungalow No-C9, Romanesque Villas, Labhandih,<br />
                                Near Jain Mandir, Raipur-492012, Chhattisgarh
                            </p>
                            <p className="mt-2">Contact No: +91-9755515666</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Google Map Section */}
            <div className="max-w-7xl mx-auto px-6 md:px-10 mt-5">
                <iframe
                    title="Company Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.643315310019!2d72.51891133628388!3d23.11014944016052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9d0067369a05%3A0xc54531eb86c1c096!2sSaraswati%20Buildcon!5e0!3m2!1sen!2sin!4v1745667446670!5m2!1sen!2sin"
                    height="500"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-[500px] rounded-lg shadow-lg"
                />
            </div>

            {/* CTA Brochure Section */}
            <BrochureCTA />
        </motion.section>
    );
};

export default ContactPage;
