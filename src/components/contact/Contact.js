import React from 'react';
import './Contact.css';
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'

const Contact = () => {
    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className='contact__option-icon'></MdOutlineEmail>
                        <h4>Email</h4>
                        <h5>hamim.ahmed484@gmail.com</h5>
                        <a href="mailto:hamim.ahmed484@gmail.com">Send a message</a>
                    </article>

                    <article className="contact__option">
                        <RiMessengerLine className='contact__option-icon'></RiMessengerLine>
                        <h4>Messenger</h4>
                        <h5>Hamim Ahmed</h5>
                        <a href="https://m.me/profile.php?id=100074178963843" target="_blank">Send a message</a>
                    </article>

                    <article className="contact__option">
                        <BsWhatsapp className='contact__option-icon'></BsWhatsapp>
                        <h4>Whatsapp</h4>
                        <h5>+88 01219802929</h5>
                        <a href="mailto:hamim.ahmed484@gmail.com" target="_blank">Send a message</a>
                    </article>
                </div>
                {/* End of contact options */}

                <form action="">
                    <input type="text" name='name' placeholder='Your Full Name' required />
                    <input type="email" name='email' placeholder='Your Email' required />
                    <textarea name="message" rows="7" placeholder='Your message' required></textarea>
                    <button type='submit' className='btn btn-primary'> Send Message</button>
                </form>


            </div>
        </section>
    );
};

export default Contact;