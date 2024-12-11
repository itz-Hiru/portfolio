import React, { useState } from "react";
import "./services.css";

const Services = () => {
    const [toggleState, setToggleState] = useState(null);

    const toggleTab = (index) => {
        setToggleState(index === toggleState ? null : index);
    };

    return (
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What I offer</span>
            <div className="services__container container grid">

                <div className="services__content">
                    <div>
                        <i className="bx bxl-android services__icon"></i>
                        <h3 className="services__title">Android <br /> Developer</h3>
                    </div>
                    <span className="services__button" onClick={() => toggleTab(1)}>
                        View more <i className="bx bx-chevrons-right services__button-icon"></i>
                    </span>
                    <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="bx bx-x services__modal-close"></i>
                            <h3 className="services__modal-title">Android Developer</h3>
                            <p className="services__modal-description">
                                I design and build high-performance Android apps with user-friendly interfaces, efficient functionality, and seamless experiences.
                            </p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="bx bx-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Android Studio</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="bx bx-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Java/ Kotlin</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="bx bx-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Creative user interface</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="bx bx-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Zero Errors</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="bx bx-world services__icon"></i>
                        <h3 className="services__title">Website <br /> Developer</h3>
                    </div>
                    <span className="services__button" onClick={() => toggleTab(2)}>
                        View more <i className="bx bx-chevrons-right services__button-icon"></i>
                    </span>
                    <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="bx bx-x services__modal-close"></i>
                            <h3 className="services__modal-title">Website Developer</h3>
                            <p className="services__modal-description">
                            I create responsive, high-performance websites with clean designs and smooth user experiences.
                            </p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="bx bx-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">React Bootstrap</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="bx bx-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">NodeJS</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="bx bx-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Creative UIs</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="bx bx-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Zero Errors</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="bx bxs-cookie services__icon"></i>
                        <h3 className="services__title">UI/UX <br /> Designer</h3>
                    </div>
                    <span className="services__button" onClick={() => toggleTab(3)}>
                        View more <i className="bx bx-chevrons-right services__button-icon"></i>
                    </span>
                    <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="bx bx-x services__modal-close"></i>
                            <h3 className="services__modal-title">UI/UX Designer</h3>
                            <p className="services__modal-description">
                            I design intuitive, user-centered interfaces that enhance user experiences through clean, functional, and aesthetically pleasing designs.
                            </p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="bx bx-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">User friendly interfaces</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="bx bx-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Figma/ AdobeXD/ Balsamiq</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="bx bx-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Wireframes and Prototypes</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;