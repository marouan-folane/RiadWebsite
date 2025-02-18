import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { useState, } from 'react';
import { FaUser, FaBars, FaTimes } from 'react-icons/fa';


import Home from './Home';
import Rooms from './Rooms';
import Reservation from './Reservation';
import Contact from './Contact';
import About from './About';
import Profile from './Profile';
import RoomDetail from './RoomDetail';
import Payment from './Payment';
import Dining from './Dining';
import Activities from './Activities';



function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
    const location = useLocation();
   
    const isHomePage = location.pathname === '/';
    const[theme,setTheme] = useState('light');
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };
    const handleLogout = () => {
        // Handle logout logic here
        navigate('/'); // Redirect to home after logout
    };
  
  
    return (
        <div className="min-h-screen">
            <style>
                {`
                    body {
                        background-color: ${theme === 'light' ? 'white' : 'black'};
                        color: ${theme === 'light' ? 'black' : 'white'};
                    }
                `}
            </style>
            <header className={`fixed w-full z-50 transition-all duration-300 ${
                isHomePage ? 'bg-transparent' : 'bg-white shadow-md'
            }`}>
                <nav className="container mx-auto px-4 py-4">
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex justify-center items-center space-x-8">
                        <Link to="/" className={`nav-link ${isHomePage ? 'text-white' : 'text-gray-800'}`}>Home</Link>
                        <Link to="/rooms" className={`nav-link ${isHomePage ? 'text-white' : 'text-gray-800'}`}>Rooms & Suites</Link>
                        <Link to="/reservation" className={`nav-link ${isHomePage ? 'text-white' : 'text-gray-800'}`}>Reservation</Link>
                        <Link to="/dining" className={`nav-link ${isHomePage ? 'text-white' : 'text-gray-800'}`}>Dining</Link>
                        <Link to="/activities" className={`nav-link ${isHomePage ? 'text-white' : 'text-gray-800'}`}>Activities</Link>
                        <Link to="/contact" className={`nav-link ${isHomePage ? 'text-white' : 'text-gray-800'}`}>Contact</Link>
                        <Link to="/about" className={`nav-link ${isHomePage ? 'text-white' : 'text-gray-800'}`}>About</Link>
                       

                        {/* Profile Icon - Not shown on home page */}
                        {!isHomePage && (
                            <div className="relative">
                                <button 
                                    onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                                    className="text-gray-800 hover:text-blue-500"
                                >
                                    <FaUser size={20} />
                                </button>
                                {isProfileMenuOpen && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-50">
                                        <Link to="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Profile</Link>
                                        <button className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={handleLogout}>Logout</button>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Mobile Navigation */}
                    <div className="md:hidden">
                        <button 
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className={`absolute right-4 top-4 z-50 ${isHomePage ? 'text-white' : 'text-gray-800'}`}
                        >
                            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>

                        {/* Mobile Menu */}
                        {isMenuOpen && (
                            <div className="fixed inset-0 bg-black bg-opacity-50 z-40">
                                <div className="absolute right-0 top-0 h-full w-64 bg-white shadow-lg p-4">
                                    <div className="flex flex-col space-y-4 mt-12">
                                        <Link to="/" className="nav-link-mobile" onClick={() => setIsMenuOpen(false)}>Home</Link>
                                        <Link to="/rooms" className="nav-link-mobile" onClick={() => setIsMenuOpen(false)}>Rooms & Suites</Link>
                                        <Link to="/reservation" className="nav-link-mobile" onClick={() => setIsMenuOpen(false)}>Reservation</Link>
                                        <Link to="/dining" className="nav-link-mobile" onClick={() => setIsMenuOpen(false)}>Dining</Link>
                                        <Link to="/activities" className="nav-link-mobile" onClick={() => setIsMenuOpen(false)}>Activities</Link>
                                        <Link to="/contact" className="nav-link-mobile" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                                        <Link to="/about" className="nav-link-mobile" onClick={() => setIsMenuOpen(false)}>About</Link>
                                        <Link to="/profile" className="nav-link-mobile" onClick={() => setIsMenuOpen(false)}>Profile</Link>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </nav>
            </header>

            <main className={`${!isHomePage && 'pt-24'}`}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/rooms" element={<Rooms />} />
                    <Route path="/reservation" element={<Reservation />} />
                    <Route path="/dining" element={<Dining />} />
                    <Route path="/activities" element={<Activities />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/room/:id" element={<RoomDetail />} />
                    <Route path="/payment" element={<Payment />} />
                </Routes>
            </main>
        </div>
    );
}

export default App; 