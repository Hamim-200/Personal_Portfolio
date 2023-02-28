import React from 'react';
import './about.css'
import ME from '../../images/me-about.jpg'
import { FaAward, FaUsers, FaFolder } from 'react-icons/fa';


const About = () => {
    return (
        <section id='about'>

            <h5>Get To Know</h5>
            <h2>About</h2>

            <div className='container about__container'>
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icon'></FaAward>
                            <h5>Exprience</h5>
                            <small>3+ Years working</small>
                        </article>

                        <article className='about__card'>
                            <FaUsers className='about__icon'></FaUsers>
                            <h5>Clients</h5>
                            <small>10+ Clients</small>
                        </article>

                        <article className='about__card'>
                            <FaFolder className='about__icon'></FaFolder>
                            <h5>Project</h5>
                            <small>80+ project</small>
                        </article>
                    </div>

                    <p>
                        Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Id dignissimos quaerat officiis
                        blanditiis quam, beatae sed asperiores tenetur
                        eum excepturi reiciendis! Dolores
                        laudantium, vero maiores quidem ut
                        magnam harum numquam!
                    </p>

                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>

                </div>
            </div>
        </section>
    );
};

export default About;