import React from 'react';
import './exprience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Exprience = () => {
    return (
        <section id='exprience'>
            <h5>What Skills I Have</h5>
            <h2>Exprience</h2>

            <div className="container exprience__container">

                {/* Backend Exprience */}
                <div className="experience__fronted">
                    <h3>Fronted Development</h3>
                    <div className="experience__content">

                        <article className='exprience__details'>
                            <BsPatchCheckFill className='exprience__details-icon'></BsPatchCheckFill>
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>Exprienced</small>
                            </div>
                        </article>
                        <article className='exprience__details'>
                            <BsPatchCheckFill className='exprience__details-icon'></BsPatchCheckFill>
                            <div>
                                <h4>CSS</h4>
                                <small className='text-light'>Exprienced</small>
                            </div>
                        </article>
                        <article className='exprience__details'>
                            <BsPatchCheckFill className='exprience__details-icon'></BsPatchCheckFill>
                            <div>
                                <h4>JAVASCRIPT</h4>
                                <small className='text-light'>Exprienced</small>
                            </div>
                        </article>
                        <article className='exprience__details'>
                            <BsPatchCheckFill className='exprience__details-icon'></BsPatchCheckFill>
                            <div>
                                <h4>REACT</h4>
                                <small className='text-light'>Exprienced</small>
                            </div>
                        </article>
                        <article className='exprience__details'>
                            <BsPatchCheckFill className='exprience__details-icon'></BsPatchCheckFill>
                            <div>
                                <h4>Boostrap</h4>
                                <small className='text-light'>Exprienced</small>
                            </div>
                        </article>
                        <article className='exprience__details'>
                            <BsPatchCheckFill className='exprience__details-icon'></BsPatchCheckFill>
                            <div>
                                <h4>Tailwind</h4>
                                <small className='text-light'>Exprienced</small>
                            </div>
                        </article>

                    </div>

                </div>

                {/* Backend Exprience */}
                <div className="experience__backend">
                    <h3>Backend Development</h3>
                    <div className="experience__content">

                        <article className='exprience__details'>
                            <BsPatchCheckFill className='exprience__details-icon'></BsPatchCheckFill>
                            <div>
                                <h4>NODE JS</h4>
                                <small className='text-light'>Exprienced</small>
                            </div>
                        </article>
                        <article className='exprience__details'>
                            <BsPatchCheckFill className='exprience__details-icon'></BsPatchCheckFill>
                            <div>
                                <h4>MONGODB</h4>
                                <small className='text-light'>Exprienced</small>
                            </div>
                        </article>
                        <article className='exprience__details'>
                            <BsPatchCheckFill className='exprience__details-icon'></BsPatchCheckFill>
                            <div>
                                <h4>PYTHON</h4>
                                <small className='text-light'>Exprienced</small>
                            </div>
                        </article>
                        <article className='exprience__details'>
                            <BsPatchCheckFill className='exprience__details-icon'></BsPatchCheckFill>
                            <div>
                                <h4>JAVA</h4>
                                <small className='text-light'>Exprienced</small>
                            </div>
                        </article>
                        <article className='exprience__details'>
                            <BsPatchCheckFill className='exprience__details-icon'></BsPatchCheckFill>
                            <div>
                                <h4>PHP</h4>
                                <small className='text-light'>Exprienced</small>
                            </div>
                        </article>
                        <article className='exprience__details'>
                            <BsPatchCheckFill className='exprience__details-icon'></BsPatchCheckFill>
                            <div>
                                <h4>BASIC</h4>
                                <small className='text-light'>Exprienced</small>
                            </div>
                        </article>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Exprience;