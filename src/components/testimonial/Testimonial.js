import React from 'react';
import './testimonial.css'
import AVTR1 from '../../images/avatar1.jpg'
import AVTR2 from '../../images/avatar2.jpg'
import AVTR3 from '../../images/avatar3.jpg'
import AVTR4 from '../../images/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
    {
        avatar: AVTR1,
        name: 'Tina Snow',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vehicula egestas felis, vel lobortis arcu sollicitudin et. Integer eleifend augue nec diam interdum, in hendrerit enim venenatis. Praesent lobortis luctus elit, vitae rhoncus est. Nam eu ipsum at libero vestibulum lobortis. Maecenas diam turpis, porttitor lacinia eros vel'
    },
    {
        avatar: AVTR2,
        name: 'Hola Mafw',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vehicula egestas felis, vel lobortis arcu sollicitudin et. Integer eleifend augue nec diam interdum, in hendrerit enim venenatis. Praesent lobortis luctus elit, vitae rhoncus est. Nam eu ipsum at libero vestibulum lobortis. Maecenas diam turpis  Pellentesque porttitor elit ut tortor rhoncus vestibulum.'
    },
    {
        avatar: AVTR3,
        name: 'Riggret Roy',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vehicula egestas felis, vel lobortis arcu sollicitudin et. Integer eleifend augue nec diam interdum, in hendrerit enim venenatis. Praesent lobortis luctus elit, vitae rhoncus est. Nam eu ipsum at libero vestibulum lobortis. Maecenas diam turpis, porttitor lacinia eros vel, ornare sagittis metus.'
    },
    {
        avatar: AVTR4,
        name: 'Desi Boy',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vehicula egestas felis, vel lobortis arcu sollicitudin et. Integer eleifend augue nec diam interdum, in hendrerit enim venenatis. Praesent lobortis luctus elit, vitae rhoncus est. Nam eu ipsum at libero vestibulum lobortis. Maecenas diam turpis, porttitor lacinia eros vel, ornare sagittis met'
    }
]

const Testimonial = () => {
    return (
        <section id='testimonial'>
            <h5>Review From client</h5>
            <h2>Testimonials</h2>

            <Swiper className="container testimonilas__container"

                // install Swiper modules
                modules={Pagination}
                spaceBetween={40}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
            >
                {
                    data.map(({ avatar, name, review }, index) => {
                        return (
                            <SwiperSlide key={index} className="testimonial" >

                                <div className="client__avatar">
                                    <img src={avatar} alt="" srcset="" />
                                </div>
                                <h5 className='client__name'>{name}</h5>
                                <small className='client__review'>{review}</small>
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>
        </section >
    );
};

export default Testimonial;