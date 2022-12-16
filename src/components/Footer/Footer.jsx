import React from 'react';
import './Footer.css'
import { FaFacebook, FaLinkedin, FaGithub, FaDribbble } from 'react-icons/fa';


const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer__logo'>PORTFOLIO</a>


            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#exprience">Exprience</a></li>
                <li><a href="#service">Service</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://www.linkedin.com/in/hamim-ahmed-36b231241/" rel="noreferrer" target="_blank"  ><FaLinkedin></FaLinkedin></a>
                <a href="https://github.com/Hamim-200" target="_blank" rel="noreferrer"><FaGithub></FaGithub></a>
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><FaFacebook></FaFacebook></a>
                <a href="https://dribbble.com/hamim_ahmed" target="_blank" rel="noreferrer"><FaDribbble></FaDribbble></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; Hamim Ahmed 360 degree</small>
            </div>
        </footer>
    );
};

export default Footer;