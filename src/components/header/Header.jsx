import React from 'react';
import CTA from './CTA';
import ME from '../../images/me.png'
import HeaderSocial from './HeaderSocial';
import './header.css'


const Header = () => {
    return (
        <header id='home'>
            <div className='container header_container'>
                <h5>Helllo I'm</h5>
                <h1>Hamim Ahmed</h1>
                <h5 className='text-light'>Fullstack Developer</h5>

                {/* ICon & Buttons */}
                <CTA></CTA>
                <HeaderSocial></HeaderSocial>

                {/* Image */}
                <div className="me">
                    <img src={ME} alt="me" />
                </div>

                <a href="#contact" className='scroll__down'>Scroll Down</a>
            </div>
        </header>
    );
};

export default Header;