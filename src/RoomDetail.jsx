import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

function RoomDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Mock room data - you would typically fetch this based on the id
    const room = {
        name: "Deluxe Room",
        price: "$150/night",
        rating: "⭐⭐⭐⭐",
        description: "Experience luxury and comfort in our spacious Deluxe Room. Featuring elegant Moroccan décor, a private balcony, and modern amenities.",
        amenities: [
            "King-size bed",
            "Private bathroom",
            "Air conditioning",
            "Free Wi-Fi",
            "Mini bar",
            "Room service"
        ],
        images: [
            "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&auto=format&fit=crop"
        ],
        size: "40m²",
        maxOccupancy: "2 Adults, 1 Child"
    };

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % room.images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + room.images.length) % room.images.length);
    };

    // Add useEffect for automatic sliding
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % room.images.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(timer);
    }, [room.images.length]);

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="container mx-auto px-4 py-"
        >
            {/* Image Gallery - Updated height */}
            <div className="relative h-[400px] mb-8 rounded-xl overflow-hidden">
                <motion.img
                    key={currentImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    src={room.images[currentImageIndex]}
                    alt={`${room.name} view ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                />
                <button 
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
                >
                    <FaArrowLeft />
                </button>
                <button 
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
                >
                    <FaArrowRight />
                </button>
                
                {/* Image Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {room.images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-2 h-2 rounded-full ${
                                index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                            }`}
                        />
                    ))}
                </div>
            </div>

            {/* Room Details */}
            <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <h1 className="text-4xl font-bold mb-4">{room.name}</h1>
                    <p className="text-gray-600 mb-6">{room.description}</p>
                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-4">Room Details</h2>
                        <ul className="space-y-2 text-gray-600">
                            <li>Size: {room.size}</li>
                            <li>Max Occupancy: {room.maxOccupancy}</li>
                            <li>Rating: {room.rating}</li>
                        </ul>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="bg-white p-6 rounded-xl shadow-lg"
                >
                    <h2 className="text-2xl font-semibold mb-4">Amenities</h2>
                    <ul className="grid grid-cols-2 gap-4 mb-6">
                        {room.amenities.map((amenity, index) => (
                            <li key={index} className="flex items-center text-gray-600">
                                <span className="mr-2">•</span>
                                {amenity}
                            </li>
                        ))}
                    </ul>
                    
                    <div className="border-t pt-6">
                        <div className="text-3xl font-bold mb-4">{room.price}</div>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate('/payment')}
                            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                        >
                            Proceed to Payment
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}

export default RoomDetail; 