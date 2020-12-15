import React from 'react';
//Animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

const ContactUs = () => {
    return(
        <motion.div exit="exit" variants={pageAnimation} initial="hidden" animate="show" style={{background: "#FFF" }}>
            <h1>Contact Us</h1>
        </motion.div>
    );
};

export default ContactUs;