import React from "react";
import "./index.css";
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Qualification from "./components/qualification/Qualification";
import Skills from './components/skills/Skills';
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";

const App = () => {
    return (
        <>
        <Header />
        <main className="main">
        <Home />
        <About />
        <Qualification />
        <Skills />
        <Services />
        <Contact />
        </main>
        <Footer />
        <ScrollUp />
        </>
    )
}

export default App;