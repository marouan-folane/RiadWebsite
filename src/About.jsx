import { motion } from 'framer-motion';

function About() {
    return (
        <motion.section 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="container mx-auto p-8"
        >
            <motion.h2 
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                className="text-4xl font-bold mb-8 text-center"
            >
                About Riad Elouahab
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <h3 className="text-2xl font-semibold mb-4">A Haven of Tranquility</h3>
                    <p className="text-gray-600 mb-6">
                        Nestled in the heart of Marrakech's historic medina, Riad Elouahab offers a perfect blend of traditional Moroccan architecture and modern luxury. Our riad features authentic design elements, hand-crafted furnishings, and peaceful courtyards that create an oasis of calm in the bustling city.
                    </p>
                    <p className="text-gray-600 mb-6">
                        With a commitment to exceptional service and attention to detail, we ensure each guest experiences the warmth of Moroccan hospitality and the comfort of a luxury stay.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="grid grid-cols-2 gap-4"
                >
                    <img 
                        src="https://images.unsplash.com/photo-1548013146-72479768bada?w=800&auto=format&fit=crop" 
                        alt="Riad Courtyard" 
                        className="w-full h-64 object-cover rounded-lg shadow-lg"
                    />
                    <img 
                        src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&auto=format&fit=crop" 
                        alt="Riad Interior" 
                        className="w-full h-64 object-cover rounded-lg shadow-lg"
                    />
                </motion.div>
            </div>
        </motion.section>
    );
}

export default About; 