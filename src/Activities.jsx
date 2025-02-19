import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import LoadingAnimation from './LoadingAnimation';

function Activities() {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const word = "Activities..."; // Tu peux changer le mot ici

   const letterVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
};

    const activities = [
        {
            title: "Our cooking classes",
            description: "In Morocco, the house cook is affectionately called \"Dada\". She reigns over the \"Kouzina\", the kitchen. A mysterious place where the thousand and one ways of blending flavors are carefully hidden from prying eyes. The workshop begins in the kitchen in the late afternoon for dinner. Our cook will then reveal her secrets of preparation, cutting, and cooking.",
            image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            link: "/cooking-classes"
        },
        {
            title: "The Hammam",
            description: "Of oriental tradition, the hammam is a place of relaxation, aimed at the awakening of the senses. A small pool decorated with zellige tiles and a traditional hammam have been built in the douyria adjoining the riad.",
            image: "https://images.unsplash.com/photo-1591343395082-e120087004b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
            link: "/hammam"
        },
        {
            title: "The treatments",
            description: "Here, you will receive specific treatments based on aromatic plants and essential oils. Most of the products used for these treatments come from the organic-aromatic farm of Ourika.",
            image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            link: "/treatments"
        },
        {
            title: "The pool",
            description: "On a secluded terrace, sheltered from prying eyes, not far from the hammam, the pool made of traditional Zelliges and Tadelakt offers a refreshing respite after a hot day in the Medina. In this oriental bath, the murmur of water blends with the captivating scents of jasmine, creating an exquisite haven of peace.",
            image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            link: "/pool"
        },
        {
            title: "Storyteller",
            description: "At La Villa Nomade, a unique cultural experience awaits visitors... a local storyteller recounts the fascinating legends of Morocco. In the intimate and warm atmosphere of the Riad, guests are transported into a world of enchanting tales, discovering the richness of Moroccan oral tradition, a captivating journey through the history and mythology of the country.",
            image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            link: "/storyteller"
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
                <LoadingAnimation word="Activities..." />
            ) : (
                <motion.section  
                    key="content"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="container mx-auto p-8"
                >
                    <motion.h2 
                        initial={{ y: -20 }}
                        animate={{ y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-4xl font-bold mb-8 text-center"
                    >
                        Activities
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="text-xl mb-12 text-center max-w-2xl mx-auto"
                    >
                        Numerous activities to discover within the Riad, around Marrakech, or throughout the southern Moroccan region.
                    </motion.p>
                    <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        transition={{ delay: 0.9, duration: 0.5 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    >
                        {activities.map((activity, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1 + index * 0.2 }}
                                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                            >
                                <div className="relative h-64">
                                    <img 
                                        src={activity.image} 
                                        alt={activity.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-semibold mb-4">{activity.title}</h3>
                                    <p className="text-gray-600 mb-4">{activity.description}</p>
                                    <motion.a 
                                        href={activity.link}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="inline-block bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors"
                                    >
                                        Discover
                                    </motion.a>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.section>
            )}
        </AnimatePresence>
    );
}

export default Activities; 