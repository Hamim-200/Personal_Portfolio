import React from 'react';
import { FaFacebook, FaLinkedin, FaGithub, FaDribbble } from 'react-icons/fa';


const HeaderSocial = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/hamim-ahmed-36b231241/" rel="noreferrer" target="_blank"  ><FaLinkedin></FaLinkedin></a>
            <a href="https://github.com/Hamim-200" target="_blank" rel="noreferrer"><FaGithub></FaGithub></a>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><FaFacebook></FaFacebook></a>
            <a href="https://dribbble.com/hamim_ahmed" target="_blank" rel="noreferrer"><FaDribbble></FaDribbble></a>

        </div>
    );
};

export default HeaderSocial;