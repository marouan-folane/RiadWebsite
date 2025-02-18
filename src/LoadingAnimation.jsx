import { motion } from 'framer-motion';

function LoadingAnimation({ word }) {
    const letterVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center z-50 text-white"
            style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1570133435573-fcb96d98f69b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <motion.div
                initial="hidden"
                animate="visible"
                transition={{ staggerChildren: 0.2 }}
                className="flex space-x-1"
            >
                {word.split("").map((letter, index) => (
                    <motion.span key={index} variants={letterVariants}>
                        {letter}
                    </motion.span>
                ))}
            </motion.div>
        </motion.div>
    );
}

export default LoadingAnimation; 