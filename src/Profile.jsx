import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Profile() {
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);
    const [profileData, setProfileData] = useState({
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '+1234567890',
        address: '123 Street, City'
    });

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

    return (
        <section className="container mx-auto p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Profile</h2>
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
                <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-gray-700 mb-2">Name</label>
                            {isEditing ? (
                                <input
                                    type="text"
                                    name="name"
                                    value={profileData.name}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            ) : (
                                <p className="text-gray-700 mb-1">{profileData.name}</p>
                            )}
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2">Email</label>
                            {isEditing ? (
                                <input
                                    type="email"
                                    name="email"
                                    value={profileData.email}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            ) : (
                                <p className="text-gray-700 mb-1">{profileData.email}</p>
                            )}
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2">Phone</label>
                            {isEditing ? (
                                <input
                                    type="tel"
                                    name="phone"
                                    value={profileData.phone}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            ) : (
                                <p className="text-gray-700 mb-1">{profileData.phone}</p>
                            )}
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2">Address</label>
                            {isEditing ? (
                                <input
                                    type="text"
                                    name="address"
                                    value={profileData.address}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            ) : (
                                <p className="text-gray-700 mb-1">{profileData.address}</p>
                            )}
                        </div>
                    </div>

                    <div className="mt-6 space-y-2">
                        {isEditing ? (
                            <button
                                type="submit"
                                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                            >
                                Save Changes
                            </button>
                        ) : (
                            <button
                                type="button"
                                onClick={() => setIsEditing(true)}
                                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                            >
                                Edit Profile
                            </button>
                        )}
                        <button
                            type="button"
                            onClick={handleLogout}
                            className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                        >
                            Logout
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Profile; 