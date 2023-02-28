import React from 'react';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Exprience from './components/exprience/Exprience';
import Footer from './components/Footer/Footer';
import Header from './components/header/Header'
import Nav from './components/Nav/Nav';
import Portfolio from './components/portfolio/Portfolio';
import Service from './components/services/Service';
import Testimonial from './components/testimonial/Testimonial';

const App = () => {
    return (
        <>
            <Header></Header>
            <Nav></Nav>
            <About></About>
            <Exprience></Exprience>
            <Service></Service>
            <Portfolio></Portfolio>
            <Testimonial></Testimonial>
            <Contact></Contact>
            <Footer></Footer>
        </>
    );
};

export default App;