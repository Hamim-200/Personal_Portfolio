import React from 'react';
import './Nav.css'
import { FaHome, FaUser, FaBook, FaPortrait } from 'react-icons/fa';
import { RiMessage2Fill } from 'react-icons/ri';
import { useState } from 'react';


const Nav = () => {
    const [activeNav, setActiveNav] = useState('#home')
    return (
        <nav>
            <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}> <FaHome></FaHome></a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUser></FaUser></a>
            <a href="#exprience" onClick={() => setActiveNav('#exprience')} className={activeNav === '#exprience' ? 'active' : ''}><FaBook></FaBook></a>
            <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><FaPortrait></FaPortrait></a>
            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><RiMessage2Fill></RiMessage2Fill></a>
        </nav>
    );
};

export default Nav;