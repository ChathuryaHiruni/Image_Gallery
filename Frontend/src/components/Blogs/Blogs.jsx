import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

export const FadeUp = (delay) => {
    return {
        initial: {
            opacity: 0,
            y: 50,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                duration: 0.5,
                delay: delay,
                ease: "easeInOut",
            },
        },
    };
}

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        // Fetch images from backend
        axios.get('http://localhost:5000/api/images')
            .then(response => {
                console.log('Fetched images:', response.data);
                // Update state with the response data
                // Assuming response.data is an array of URLs or objects with a URL property
                const imageObjects = response.data.map((url, index) => ({
                    id: index, // Assign a unique id
                    photo_url: url, // Update this based on how your API returns data
                    title: `Image ${index + 1}`, // Just a placeholder title, you can customize it
                    delay: index * 0.1 // Create a delay for animations
                }));
                setBlogs(imageObjects); // Set the formatted data
            })
            .catch(error => console.error('Error fetching blogs:', error));
    }, []);

    return (
        <div>
            <section className='bg-light'>
                <div className='container pb-14 pt-16 '>
                    <h1 className='text-4xl font-bold text-left pb-10'>
                        Gallery
                    </h1>
                    <div className="container mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-6 gap-3">
                            {blogs.map(blog => (
                                <motion.div 
                                    key={blog.id}
                                    variants={FadeUp(blog.delay)}
                                    initial='initial'
                                    whileInView={'animate'}
                                    viewport={{ once: true }} 
                                    className="p-0 bg-gray-100 shadow-lg rounded-2xl hover:bg-white hover:scale-110 
                                    duration-300 hover:shadow-2xl cursor-pointer" 
                                >
                                    <img src={blog.photo_url} alt={`Image ${blog.id}`} className="w-full h-80 object-fill mb-4 rounded-lg" />
                                    <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Blogs;
