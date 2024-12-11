import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="qualification section">
            <h2 className="section__title">Qualifications</h2>
            <span className="section__subtitle">My personal journey</span>
            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div
                        onClick={() => toggleTab(1)}
                        className={
                            toggleState === 1
                                ? "qualification__button qualification__active button--flex"
                                : "qualification__button button--flex"
                        }
                    >
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        Education
                    </div>
                    <div
                        onClick={() => toggleTab(2)}
                        className={
                            toggleState === 2
                                ? "qualification__button qualification__active button--flex"
                                : "qualification__button button--flex"
                        }
                    >
                        <i className="uil uil-briefcase-alt qualification__icon"></i>
                        Work Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div
                        className={
                            toggleState === 1
                                ? "qualification__content qualification__content-active"
                                : "qualification__content"
                        }
                    >
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">O/Ls</h3>
                                <span className="qualification__subtitle">Kelani Maha Vidyalaya</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2012 - 2019
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">A/Ls</h3>
                                <span className="qualification__subtitle">Sri Dharmaloka College</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2020 - 2022
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Diploma in Software Engineering</h3>
                                <span className="qualification__subtitle">NAITA</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2023 - Present
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>

                    <div
                        className={
                            toggleState === 2
                                ? "qualification__content qualification__content-active"
                                : "qualification__content"
                        }
                    >
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title"></h3>
                                <span className="qualification__subtitle"></span>
                                <div className="qualification__calendar">
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Qualification;
