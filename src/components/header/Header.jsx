import { useEffect } from "react";
import React, { useState }from "react";
import "./header.css"

const Header = () => {
    const[Toggle, showMenu] = useState(false);

    const[activeNav, setActiveNav] = useState("#home");

    useEffect(() => {
        const element = document.getElementById('your-element-id');
        if (element) {
            element.classList.add('your-class-name');
        }
    }, []);

    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        if (this.scrollY >= 80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
    })

    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo">Hirumitha</a>

                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" onClick={() => setActiveNav('#home')} 
                            className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}>
                                <i className="bx bxs-home nav__icon"></i> Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" onClick={() => setActiveNav('#about')} 
                            className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}>
                                <i className="bx bxs-user nav__icon"></i> About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" onClick={() => setActiveNav('#skills')} 
                            className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"}>
                                <i className="bx bxs-file-blank nav__icon"></i> Skills
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#services" onClick={() => setActiveNav('#services')} 
                            className={activeNav === "#services" ? "nav__link active-link" : "nav__link"}>
                                <i className="bx bxs-briefcase nav__icon"></i> Services
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" onClick={() => setActiveNav('#contact')} 
                            className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}>
                                <i className="bx bx-message-alt-detail nav__icon"></i> Contact
                            </a>
                        </li>
                    </ul>
                    <i className="bx bx-x nav__close" onClick={() => showMenu(!Toggle)}></i>
                </div>

                <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                    <i className="bx bx-menu"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header;