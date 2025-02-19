import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="absolute inset-0">
            {/* Background Image */}
            <div 
                className="absolute inset-0"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1671181087708-be3050f1974e?q=80&w=1940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    minHeight: '100vh'
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>

            {/* Content */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="relative flex flex-col items-center justify-center min-h-screen px-4"
            >
                <motion.h1 
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-6xl md:text-8xl font-bold mb-8 text-center text-white"
                >
                    Riad ELouahab
                </motion.h1>
                
                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-xl md:text-2xl mb-12 text-center max-w-2xl text-white"
                >
                    Experience luxury and tranquility in the heart of Marrakech
                </motion.p>

                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center gap-4"
                >
                    <Link 
                        to="/reservation" 
                        className="bg-white text-black px-8 py-4 rounded-full text-xl font-semibold hover:bg-opacity-90 transition-all flex items-center group"
                    >
                        Make a Reservation
                        <motion.span 
                            className="ml-2"
                            animate={{ x: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                            →
                        </motion.span>
                    </Link>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default Home; 