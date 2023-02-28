import React from 'react';
import CTA from './CTA';
import ME from '../../images/avatar3.jpg'
import HeaderSocial from './HeaderSocial';
import './header.css'
import Typewriter from "typewriter-effect"

const Header = () => {
    return (
        <header id='home'>
            <div className='container header_container'>
                <h5>Helllo I'm</h5>
                <h1>Hamim Ahmed</h1>
                <h5 className='text-light'>
                    <Typewriter
                        options={{
                            autoStart: true,
                            loop: true,
                            delay: 50,
                            strings: [
                                "Web developre",
                                "App developer",
                                "Programmer"
                            ],
                        }}

                    ></Typewriter>

                </h5>

                {/* ICon & Buttons */}
                <CTA></CTA>
                <HeaderSocial></HeaderSocial>

                {/* Image */}

                <div className="me_img">
                    <img src={ME} alt="me" />
                </div>

                <a href="#contact" className='scroll__down'>Contact ME</a>
            </div>
        </header>
    );
};

export default Header;