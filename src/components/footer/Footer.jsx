import React from "react";
import "./footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Hirumitha</h1>
                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#skills" className="footer__link">Skills</a>
                    </li>
                    <li>
                        <a href="#services" className="footer__link">Services</a>
                    </li>
                </ul>
                <div className="footer__social">
                    <a href="https://www.behance.net/hirumitkuladew" className="footer__social-link" target="_blank">
                        <i className="bx bxl-behance"></i>
                    </a>
                    <a href="https://dribbble.com/x_Hiru_xx" className="footer__social-link" target="_blank">
                        <i class='bx bxl-dribbble'></i>
                    </a>
                    <a href="https://www.instagram.com/x_hiru23/profilecard/?igsh=Zmc4Y253MGFkdXNn" className="footer__social-link" target="_blank">
                        <i class='bx bxl-instagram' ></i>
                    </a>
                </div>
                <span className="footer__copy">
                    &#169; Hirumitha Kuladewa, All rights reserved
                </span>
            </div>
        </footer>
    )
}

export default Footer;