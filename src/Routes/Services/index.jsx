import React, { useState } from "react";
import "./index.css";

import PhysicsEngine from "../../Components/PhysicsEngine";

const Accordian = ({title, children}) => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <div className="accordion-wrapper">
            <article className={`accordion-title ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
                <h1>{title}</h1>
            </article>
            <article className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
                <div className="accordion-content">
                    {children}
                </div>
            </article>
        </div>
    )
}

const Services = () => {
    return (
        <>
            <main className="services-container">
                <article className="service-accordion-wrapper">
                    <Accordian title="Event Production">
                        <ul>
                            <li> Event Production & Management </li>
                            <li> Event Startegy & Creative Development </li>
                            <li> Event Consulting </li>
                        </ul>
                    </Accordian>
                </article>
                <article className="service-accordion-wrapper">
                    <Accordian title="Visual & Film Production">
                        <ul>
                            <li>
                                <article>
                                    <h1> Development & Design </h1>
                                    <ul>
                                        <li> Concept Creation and Development </li>
                                        <li> Project Design </li>
                                        <li> Scriptwriting </li>
                                        <li> Copywriting </li>
                                    </ul>
                                </article>
                            </li>
                            <li>
                                <article>
                                    <h1> Pre-production </h1>
                                    <ul>
                                        <li> Storyboarding </li>
                                        <li> Production Scheduling </li>
                                        <li> Production budget </li>
                                        <li> Location Scouting </li>
                                        <li> Crew and Talent Recruitment</li>
                                    </ul>
                                </article>
                            </li>
                            <li>
                                <article>
                                    <h1> Production </h1>
                                    <ul>
                                        <li> Directing </li>
                                        <li> Video Production </li>
                                        <li> Audio Production </li>
                                        <li> Location Management </li>
                                        <li> Scheduling and Budget Management</li>
                                    </ul>
                                </article> 
                            </li>
                            <li>
                                <article>
                                    <h1> Post-Production </h1>
                                    <ul>
                                        <li> Editing </li>
                                        <li> Visual effects </li>
                                        <li> Colour Grading </li>
                                        <li> Sound Design </li>
                                        <li> Soundtrack & Music Licensing </li>
                                    </ul>
                                </article>  
                            </li>
                        </ul>
                    </Accordian>
                </article>
                <article className="service-accordion-wrapper">
                    <Accordian title="Art Production & Artist Management">
                        <ul>
                            <li> Art Exhibition Production </li>
                            <li> Art Curation </li>
                            <li> Talent Management </li>
                            <li> Project-Based Consulting </li>
                        </ul>
                    </Accordian>
                </article>
                <article className="service-accordion-wrapper">
                    <Accordian title="Creative Services">
                        <ul>
                            <li> Illustration Services </li>
                            <li> Brand Strategy </li>
                            <li> Brand Development </li>
                            <li> Strategic Insight </li>
                            <li> Communications Planning </li>
                            <li> Digital Strategy </li>
                            <li> Content Strategy </li>
                            <li> Graphic Design </li>
                            <li> Sales Consulting </li>
                        </ul>
                    </Accordian>
                </article>
            </main>
            <PhysicsEngine />
        </>
    )
}

export default Services;