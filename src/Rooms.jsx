import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Rooms() {
    const rooms = [
        {
            title: "Deluxe Suite",
            price: "$200/night",
            image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&auto=format&fit=crop",
            description: "Spacious suite with traditional Moroccan décor and modern amenities."
        },
        {
            title: "Royal Suite",
            price: "$300/night",
            image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&auto=format&fit=crop",
            description: "Luxurious suite with private terrace and stunning views."
        },
        {
            title: "Garden Room",
            price: "$150/night",
            image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&auto=format&fit=crop",
            description: "Charming room overlooking our peaceful garden courtyard."
        }
    ];

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
                Our Rooms & Suites
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {rooms.map((room, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        whileHover={{ y: -10 }}
                        className="bg-white rounded-xl overflow-hidden shadow-lg"
                    >
                        <div className="relative h-64">
                            <img 
                                src={room.image} 
                                alt={room.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full">
                                {room.price}
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">{room.title}</h3>
                            <p className="text-gray-600 mb-4">{room.description}</p>
                            <Link to="/reservation">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                                >
                                    Book Now
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}

export default Rooms; 