import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import back from './back.jpeg';

function Home() {
    return (
        <div className="absolute inset-0">
            {/* Background Image */}
            <div 
                className="absolute inset-0"
                style={{
                    backgroundImage: `url(${back})`,
                    overlay:'rgba(0, 0, 0, 0.8)',

                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    minHeight: '100vh'
                }}
            >
                {/* Removed the gray overlay */}
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

            {/* Scroll Indicator */}
            <motion.div 
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
            >
                <span className="text-white text-4xl">↓</span>
            </motion.div>
        </div>
    );
}

export default Home; 