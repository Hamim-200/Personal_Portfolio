import React from 'react';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Exprience from './components/exprience/Exprience';
import Footer from './components/Footer/Footer';
import Header from './components/header/Header'
import Nav from './components/Nav/Nav';
import Portfolio from './components/portfolio/Portfolio';
import ScrollButton from './components/scroll/Scroll';

const App = () => {
    return (
        <>
            <Header></Header>
            <Nav></Nav>
            <About></About>
            <Exprience></Exprience>
            <Portfolio></Portfolio>
            <Contact></Contact>
            <Footer></Footer>
            <ScrollButton></ScrollButton>
        </>

    );
};

export default App;