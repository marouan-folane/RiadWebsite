import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCog } from 'react-icons/fa';

function Profile() {
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [profileData, setProfileData] = useState({
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '+1234567890',
        address: '123 Street, City',
        language: 'en',
        theme: 'light'
    });

    useEffect(() => {
        document.body.className = profileData.theme;
    }, [profileData.theme]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfileData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsEditing(false);
        // Here you would typically save the data to your backend
    };

    const handleLogout = () => {
        // Here you would typically handle the logout logic
        navigate('/');
    };

    const handleAddEmail = () => {
        // Logic to add a new email with password verification
        // You can implement a modal or a separate form for this
        console.log('Adding new email...');
    };

    const applyLanguageChange = (language) => {
        // Logic to apply language change throughout the application
        console.log(`Changing language to ${language}`);
        // Update the language in the profileData state
        setProfileData(prev => ({
            ...prev,
            language
        }));
        // Here you can add the logic to update the language across your application
    };

    return (
        <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="container mx-auto p-8"
        >
            <h2 className="text-4xl font-bold mb-8 text-center">Profile</h2>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-1">
                        <div className="flex flex-col items-center">
                            <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                                <img 
                                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" 
                                    alt="Profile" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-3xl font-semibold">{profileData.name}</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-xl">{profileData.email}</p>
                        </div>
                    </div>
                    <div className="md:col-span-2">
                        <form onSubmit={handleSubmit}>
                            <div className="space-y-6">
                                <div className="flex items-center">
                                    <FaUser className="text-gray-600 dark:text-gray-400 mr-4 text-2xl" />
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            name="name"
                                            value={profileData.name}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2 text-xl border border-blue-300 dark:border-blue-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 focus:border-blue-500 dark:focus:border-blue-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                                        />
                                    ) : (
                                        <p className="text-gray-700 dark:text-gray-400 text-xl mb-1">{profileData.name}</p>
                                    )}
                                </div>
                                <div className="flex items-center">
                                    <FaEnvelope className="text-gray-600 dark:text-gray-400 mr-4 text-2xl" />
                                    {isEditing ? (
                                        <input
                                            type="email"
                                            name="email"
                                            value={profileData.email}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2 text-xl border border-blue-300 dark:border-blue-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 focus:border-blue-500 dark:focus:border-blue-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                                        />
                                    ) : (
                                        <p className="text-gray-700 dark:text-gray-400 text-xl mb-1">{profileData.email}</p>
                                    )}
                                </div>
                                <div className="flex items-center">
                                    <FaPhone className="text-gray-600 dark:text-gray-400 mr-4 text-2xl" />
                                    {isEditing ? (
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={profileData.phone}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2 text-xl border border-blue-300 dark:border-blue-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 focus:border-blue-500 dark:focus:border-blue-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                                        />
                                    ) : (
                                        <p className="text-gray-700 dark:text-gray-400 text-xl mb-1">{profileData.phone}</p>
                                    )}
                                </div>
                                <div className="flex items-center">
                                    <FaMapMarkerAlt className="text-gray-600 dark:text-gray-400 mr-4 text-2xl" />
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            name="address"
                                            value={profileData.address}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2 text-xl border border-blue-300 dark:border-blue-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 focus:border-blue-500 dark:focus:border-blue-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                                        />
                                    ) : (
                                        <p className="text-gray-700 dark:text-gray-400 text-xl mb-1">{profileData.address}</p>
                                    )}
                                </div>
                            </div>

                            <div className="mt-8 space-y-4">
                                {isEditing ? (
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        type="submit"
                                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg text-xl"
                                    >
                                        Save Changes
                                    </motion.button>
                                ) : (
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        type="button"
                                        onClick={() => setIsEditing(true)}
                                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg text-xl"
                                    >
                                        Edit Profile
                                    </motion.button>
                                )}
                            </div>
                        </form>
                    </div>
                </div>

                <div className="mt-12">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="button"
                        onClick={() => setIsSettingsOpen(!isSettingsOpen)}
                        className="w-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-bold py-3 px-6 rounded-lg text-xl flex items-center justify-center"
                    >
                        <FaCog className="mr-2" />
                        Settings
                    </motion.button>
                    {isSettingsOpen && (
                        <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            className="mt-4 space-y-4"
                        >
                            <div>
                                <label className="block text-gray-700 dark:text-gray-400 text-xl mb-2">Language</label>
                                <select
                                    name="language"
                                    value={profileData.language}
                                    onChange={(e) => applyLanguageChange(e.target.value)}
                                    className="w-full px-4 py-2 text-xl border border-blue-300 dark:border-blue-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 focus:border-blue-500 dark:focus:border-blue-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                                >
                                    <option value="en">English</option>
                                    <option value="fr">Français</option>
                                    <option value="es">Español</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-gray-700 dark:text-gray-400 text-xl mb-2">Theme</label>
                                <select
                                    name="theme"
                                    value={profileData.theme}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 text-xl border border-blue-300 dark:border-blue-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 focus:border-blue-500 dark:focus:border-blue-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                                >
                                    <option value="light">Light</option>
                                    <option value="dark">Dark</option>
                                </select>
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                type="button"
                                onClick={handleAddEmail}
                                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg text-xl"
                            >
                                Add New Email
                            </motion.button>
                        </motion.div>
                    )}
                </div>

                <div className="mt-8">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="button"
                        onClick={handleLogout}
                        className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg text-xl"
                    >
                        Logout
                    </motion.button>
                </div>
            </div>
        </motion.section>
    );
}

export default Profile; 