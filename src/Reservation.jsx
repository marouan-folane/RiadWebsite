import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const rooms = [
    {
        name: "Deluxe Room",
        price: "$150/night",
        number: "101",
        rating: "⭐⭐⭐⭐",
        image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&auto=format&fit=crop",
        description: "Luxurious room with garden view and modern amenities"
    },
    {
        name: "Suite",
        price: "$250/night",
        number: "102",
        rating: "⭐⭐⭐⭐⭐",
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&auto=format&fit=crop",
        description: "Spacious suite with separate living area and city views"
    },
    {
        name: "Standard Room",
        price: "$100/night",
        number: "103",
        rating: "⭐⭐⭐",
        image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&auto=format&fit=crop",
        description: "Comfortable room with essential amenities"
    }, {
        name: "Deluxe Room",
        price: "$150/night",
        number: "101",
        rating: "⭐⭐⭐⭐",
        image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&auto=format&fit=crop",
        description: "Luxurious room with garden view and modern amenities"
    }, {
        name: "Deluxe Room",
        price: "$150/night",
        number: "101",
        rating: "⭐⭐⭐⭐",
        image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&auto=format&fit=crop",
        description: "Luxurious room with garden view and modern amenities"
    }, {
        name: "Deluxe Room",
        price: "$150/night",
        number: "101",
        rating: "⭐⭐⭐⭐",
        image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&auto=format&fit=crop",
        description: "Luxurious room with garden view and modern amenities"
    },
];

function Reservation() {
    return (
        <section className="container mx-auto px-4 py-16">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-bold mb-12 text-center"
            >
                Our Rooms & Suites
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {rooms.map((room, index) => (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        key={index}
                        className="bg-white rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2"
                    >
                        <div className="relative h-64">
                            <img 
                                src={room.image} 
                                alt={room.name}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full">
                                {room.price}
                            </div>
                        </div>

                        <div className="p-6">
                            <h3 className="text-2xl font-semibold mb-2">{room.name}</h3>
                            <p className="text-gray-700 mb-4">{room.description}</p>
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-yellow-500">{room.rating}</span>
                                <span className="text-gray-500">Room {room.number}</span>
                            </div>
                            
                            <Link to={`/room/${index}`}>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center group"
                                >
                                    View Details
                                    <motion.span 
                                        className="ml-2 group-hover:translate-x-2 transition-transform"
                                    >
                                        →
                                    </motion.span>
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default Reservation; 