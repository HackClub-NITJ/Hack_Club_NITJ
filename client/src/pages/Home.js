import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import About2 from '../components/About2';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Telegram from '../components/Telegram';

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <About2 />
            <Telegram />
            <Footer />
        </>
    );
}

export default Home;