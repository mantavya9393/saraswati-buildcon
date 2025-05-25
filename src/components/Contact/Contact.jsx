import React from 'react';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

const Contact = () => {
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
        <motion.div
            initial={{ opacity: 0, x: -200 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="w-full px-6 py-20 bg-gradient-to-r from-blue-50 via-white to-blue-100"
            id="Contact"
        >
            <h1 className="text-2xl sm:text-4xl font-bold mb-4 text-center">
                Contact <span className="underline underline-offset-4 decoration-2 font-light">With Us</span>
            </h1>
            <p className="text-gray-500 text-lg text-center mb-12 mx-auto max-w-2xl">
                Ready to make a move? Let’s build your future together. Get in touch with us today!
            </p>

            <form className="max-w-2xl mx-auto text-gray-600 pt-8 text-left" onSubmit={onSubmit}>
                <div className="flex flex-wrap mb-6">
                    <div className="w-full md:w-1/2 text-left mb-4 md:mb-0">
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded py-3 px-4 mt-2 focus:outline-none focus:ring-2 focus:[#1e293b] transition-all"
                            name="Name"
                            placeholder="Your Name"
                            required
                        />
                    </div>
                    <div className="w-full md:w-1/2 text-left md:pl-4">
                        <input
                            type="email"
                            className="w-full border border-gray-300 rounded py-3 px-4 mt-2 focus:outline-none focus:ring-2 focus:[#1e293b] transition-all"
                            name="Email"
                            placeholder="Your Email"
                            required
                        />
                    </div>
                </div>

                <div className="my-6 text-left">
                    <textarea
                        className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none focus:outline-none focus:ring-2 focus:[#1e293b] transition-all"
                        name="Message"
                        placeholder="Your Message"
                        required
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#164e63] text-white py-3 px-12 mb-10 rounded-lg hover:[#1e293b] transition-all duration-300 transform hover:scale-105"
                >
                    {result ? result : 'Send Message'}
                </button>
            </form>
        </motion.div>
    );
};

export default Contact;
