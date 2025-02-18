import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaInstagram, FaFacebook } from 'react-icons/fa';

function Contact() {
    return (
        <motion.section 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="container mx-auto p-4 md:p-8"
        >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Contact Us</h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {/* Contact Form */}
                <motion.div 
                    initial={{ x: -50 }}
                    animate={{ x: 0 }}
                    className="bg-white p-6 rounded-lg shadow-lg"
                >
                    <h3 className="text-xl font-semibold mb-4">Send us a message</h3>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                            <input type="text" id="name" className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                            <input type="email" id="email" className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                            <textarea id="message" rows="4" className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"></textarea>
                        </div>
                        <button 
                            type="submit" 
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
                        >
                            Send Message
                        </button>
                    </form>
                </motion.div>

                {/* Contact Information */}
                <motion.div 
                    initial={{ x: 50 }}
                    animate={{ x: 0 }}
                    className="space-y-6"
                >
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <FaPhone className="text-blue-500" />
                                <span>+212 123 456 789</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <FaEnvelope className="text-blue-500" />
                                <span>contact@villanomade.com</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <FaMapMarkerAlt className="text-blue-500" />
                                <span>123 Medina Street, Marrakech, Morocco</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                               className="text-pink-500 hover:text-pink-600 transition-colors">
                                <FaInstagram size={24} />
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                               className="text-blue-500 hover:text-blue-600 transition-colors">
                                <FaFacebook size={24} />
                            </a>
                        </div>
                    </div>

                    {/* Add Google Maps iframe here */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-4">Location</h3>
                        <div className="aspect-w-16 aspect-h-9">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397...."
                                width="100%"
                                height="300"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="rounded-lg"
                            ></iframe>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}

export default Contact; 