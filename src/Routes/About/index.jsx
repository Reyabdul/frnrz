import React, { useEffect } from "react";
import $ from "jquery";

import "./index.css";

import yellowPinkLogo from "../../Assets/media/logos/yellowpink_logo.PNG";

import img1 from "../../Assets/media/static_media/about/clients/1.svg";
import img2 from "../../Assets/media/static_media/about/clients/2.svg";
import img5 from "../../Assets/media/static_media/about/clients/5.svg";
import img7 from "../../Assets/media/static_media/about/clients/7.svg";
import img8 from "../../Assets/media/static_media/about/clients/8.svg";
import img9 from "../../Assets/media/static_media/about/clients/9.svg";
import img10 from "../../Assets/media/static_media/about/clients/10.svg";
import img11 from "../../Assets/media/static_media/about/clients/11.svg";
import img12 from "../../Assets/media/static_media/about/clients/12.svg";
import img13 from "../../Assets/media/static_media/about/clients/13.svg";
import img14 from "../../Assets/media/static_media/about/clients/14.svg";
import img15 from "../../Assets/media/static_media/about/clients/15.svg";
import img16 from "../../Assets/media/static_media/about/clients/16.svg";
import img18 from "../../Assets/media/static_media/about/clients/18.svg";
import img19 from "../../Assets/media/static_media/about/clients/19.svg";
import img20 from "../../Assets/media/static_media/about/clients/20.svg";

import imgVariant1 from "../../Assets/media/static_media//about/clients/1.png";
import imgVariant2 from "../../Assets/media/static_media/about/clients/2.png";
import imgVariant3 from "../../Assets/media/static_media/about/clients/3.png";
import imgVariant4 from "../../Assets/media/static_media/about/clients/4.png";
import imgVariant5 from "../../Assets/media/static_media/about/clients/5.png";
import imgVariant6 from "../../Assets/media/static_media/about/clients/6.png";

const About = () => {
    useEffect(() => {
        if (window.location.href.indexOf("/about") !== -1) {
            document.getElementsByTagName("body")[0].classList.add("about-gradient-variant");
            $("#star-background").fadeIn(500);
        }
    }, []);

    return (
        <>
            <div className="about-container">
                <div className="column">
                    <article className="about-description">
                        <div className="article-text">
                            <h1> About us </h1>
                            <h3>
                                <span className="starter-text">FOREIGNERZ</span> is an art and production house focused on pushing boundaries in film, music, art and culture. 
                                The team is composed of multidisciplinary artists who are working to create visionary films, creative campaigns, installations, visuals and music video productions with a focus on uncovering new narratives in Canada and beyond. 
                                Our work and vision amplifies bold stories, uncompromising artistry and seeks to re-imagine the future.<br /><br />
                                Since its inception, FOREIGNERZ has gone from creating music videos, to curating exhibitions, designing creative campaigns, documentary film making, advertising and most recently full film production. 
                                FOREIGNERZ is set to release two fully produced in house short films in 2023, IN THE DARKNESS I PURSUE ONLY YOU and JINN JULIAN. FOREIGNERZ also tells the stories of important organisations and institutions, with notable clients that include Sled Island, Sub Pop Records, Trellis Society, Beakerhead, Patron, Calgary Philharmonic Orchestra, Arts Commons and more. 
                                FOREIGNERZ has offices in Calgary & Toronto.
                            </h3>
                        </div>
                        <img src={yellowPinkLogo} />
                    </article>
                </div>
                <div className="column">
                    <article className="about-description">
                        <h1> Creative Vision & Process</h1>
                        <h3>
                            <span className="starter-text">FOREIGNERZ</span> is made up of a diverse group of multidisciplinary creatives who bring technical and artistic expertise to each project. 
                            All FOREIGNERZ projects involve in-house creative direction, production, cinematography, editing and sound curation. We strongly believe in powerful storytelling paired with an aesthetic sensibility that is global, ambitious and larger than life. 
                            As creatives, we are informed by a multitude of histories, ideas, cultural references and experiences which can be seen in our work. 
                            We look at Alberta, and Canada as an ecosystem which requires a level of creative disruption. Our work in various artistic spaces plays with the idea of imagining big, leaning into the surreal, capturing the illusory and presenting something profound.

                            In 2018, in the heart of the prairies ‘SANSFUCCS’ was born - a collective of artists moving together to create noise in the Alberta underground through music, through basement shows, with film, fashion, visual art and storytelling in every medium. SANSFUCCS was a pressure valve to the arts and culture landscape of Calgary and created small but potent spaces. opportunities for BIPOC artists to begin to develop their passion, push their artistic philosophy and strive to center a new vision for the arts overall. The spirit of SANSFUCCS - to create bold, uncompromising art and challenge the spaces a new generation of artists find themselves in to permanently shift sits at the very heart of FOREIGNERZ.
                        </h3>
                    </article>
                </div>
            </div>
            <div className="clients-container">
                <div className="row">
                    <section className="clients">
                        <h1> Some of our past clients </h1>
                        <ul>
                            <li><img src={img1}/></li>
                            <li><img src={img2}/></li>
                            <li><img src={imgVariant1}/></li>
                            <li><img src={imgVariant2}/></li>
                            <li><img src={img5}/></li>
                            <li><img src={img7}/></li>
                            <li><img src={img8}/></li>
                            <li><img src={imgVariant3}/></li>
                            <li><img src={img9}/></li>
                            <li><img src={img10}/></li>
                            <li><img src={img11}/></li>
                        </ul>
                        <ul>
                            <li><img src={img12}/></li>
                            <li><img src={img13}/></li>
                            <li><img src={imgVariant4}/></li>
                            <li><img src={img14}/></li>
                            <li><img src={img15}/></li>
                            <li><img src={img16}/></li>
                            <li><img src={imgVariant5}/></li>
                            <li><img src={img18}/></li>
                            <li><img src={img19}/></li>
                            <li><img src={img20}/></li>
                            <li><img src={imgVariant6}/></li>
                        </ul>
                    </section>
                </div>
            </div>
        </>
    )
}

export default About;