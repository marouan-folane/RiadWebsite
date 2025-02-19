import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaUtensils, FaWineGlass, FaCoffee } from 'react-icons/fa';
import LoadingAnimation from './LoadingAnimation';

function Dining() {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const menuItems = [
        {
            title: "Traditional Moroccan Cuisine",
            description: "Experience authentic Moroccan dishes prepared with local ingredients and traditional recipes.",
            icon: <FaUtensils className="text-3xl text-amber-600" />,
            image: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?w=800&auto=format&fit=crop"
        },
        {
            title: "Rooftop Bar & Lounge",
            description: "Enjoy refreshing cocktails and stunning views from our rooftop terrace.",
            icon: <FaWineGlass className="text-3xl text-amber-600" />,
            image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop"
        },
        {
            title: "Breakfast & Café",
            description: "Start your day with our delicious breakfast buffet featuring local and international options.",
            icon: <FaCoffee className="text-3xl text-amber-600" />,
            image: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?w=800&auto=format&fit=crop"
        }
    ];

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);

    useEffect(() => {
        if (!isLoading) {
            setTimeout(() => {
                setIsOpen(true);
            }, 700);
        }
    }, [isLoading]);

    return (
        <AnimatePresence>
            {isLoading ? (
                <LoadingAnimation word="Dining..." />
            ) : (
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
                        Dining Experience
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {menuItems.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                            >
                                <div className="relative h-64">
                                    <img 
                                        src={item.image} 
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center mb-4">
                                        {item.icon}
                                        <h3 className="text-xl font-semibold ml-3">{item.title}</h3>
                                    </div>
                                    <p className="text-gray-600">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>
            )}
        </AnimatePresence>
    );
}

export default Dining; 