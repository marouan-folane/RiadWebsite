import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Payment() {
    const navigate = useNavigate();
    const [showAlert, setShowAlert] = useState(false);
    const [alertType, setAlertType] = useState('success');
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        cardNumber: '',
        cardHolder: '',
        expiryDate: '',
        cvv: '',
        email: ''
    });

    useEffect(() => {
        if (showAlert) {
            const timer = setTimeout(() => {
                setShowAlert(false);
                if (alertType === 'success') {
                    navigate('/');
                }
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [showAlert, alertType, navigate]);

    const validateForm = () => {
        const newErrors = {};
        if (!formData.cardNumber) newErrors.cardNumber = 'Card number is';
        if (!formData.cardHolder) newErrors.cardHolder = 'Card holder name is';
        if (!formData.expiryDate) newErrors.expiryDate = 'Expiry date is';
        if (!formData.cvv) newErrors.cvv = 'CVV is';
        if (!formData.email) newErrors.email = 'Email is';
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setAlertType('success');
            setShowAlert(true);
        } else {
            setAlertType('error');
            setShowAlert(true);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="container mx-auto px-4 py-16 relative"
        >
            {/* Alert Component */}
            <AnimatePresence>
                {showAlert && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className={`fixed top-4 left-1/2 transform -translate-x-1/2 p-4 rounded-lg shadow-lg z-50 ${
                            alertType === 'success' 
                                ? 'bg-green-500 text-white' 
                                : 'bg-red-500 text-white'
                        }`}
                    >
                        {alertType === 'success' 
                            ? 'Payment processed successfully!' 
                            : 'Please fill all fields correctly.'
                        }
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="max-w-2xl mx-auto">
                <h1 className="text-4xl font-bold mb-8 text-center">Payment Details</h1>
                
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white p-8 rounded-xl shadow-lg"
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-gray-700 mb-2">Card Number</label>
                            <input
                                type="text"
                                name="cardNumber"
                                placeholder="1234 5678 9012 3456"
                                value={formData.cardNumber}
                                onChange={handleInputChange}
                                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 
                                    ${errors.cardNumber ? 'border-red-500' : 'border-blue-300'}`}
                            
                            />
                            {errors.cardNumber && (
                                <span className="text-red-500 text-sm mt-1">{errors.cardNumber}</span>
                            )}
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-2">Card Holder Name</label>
                            <input
                                type="text"
                                name="cardHolder"
                                placeholder="John Doe"
                                value={formData.cardHolder}
                                onChange={handleInputChange}
                                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 
                                    ${errors.cardHolder ? 'border-red-500' : 'border-blue-300'}`}
                            
                            />
                            {errors.cardHolder && (
                                <span className="text-red-500 text-sm mt-1">{errors.cardHolder}</span>
                            )}
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-gray-700 mb-2">Expiry Date</label>
                                <input
                                    type="text"
                                    name="expiryDate"
                                    placeholder="MM/YY"
                                    value={formData.expiryDate}
                                    onChange={handleInputChange}
                                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 
                                        ${errors.expiryDate ? 'border-red-500' : 'border-blue-300'}`}
                                
                                />
                                {errors.expiryDate && (
                                    <span className="text-red-500 text-sm mt-1">{errors.expiryDate}</span>
                                )}
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2">CVV</label>
                                <input
                                    type="text"
                                    name="cvv"
                                    placeholder="123"
                                    value={formData.cvv}
                                    onChange={handleInputChange}
                                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 
                                        ${errors.cvv ? 'border-red-500' : 'border-blue-300'}`}
                                
                                />
                                {errors.cvv && (
                                    <span className="text-red-500 text-sm mt-1">{errors.cvv}</span>
                                )}
                            </div>
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="your@email.com"
                                value={formData.email}
                                onChange={handleInputChange}
                                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 
                                    ${errors.email ? 'border-red-500' : 'border-blue-300'}`}
                            
                            />
                            {errors.email && (
                                <span className="text-red-500 text-sm mt-1">{errors.email}</span>
                            )}
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors mt-6"
                        >
                            Pay Now
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </motion.div>
    );
}

export default Payment; 