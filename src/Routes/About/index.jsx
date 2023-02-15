import React from "react";
import "./index.css";

import yellowPinkLogo from "../../Assets/media/logos/yellowpink_logo.PNG";

import img1 from "../../Assets/media/static_media/about/clients/1.jpeg";
import img2 from "../../Assets/media/static_media/about/clients/2.svg";
import img3 from "../../Assets/media/static_media/about/clients/3.png";
import img4 from "../../Assets/media/static_media/about/clients/4.png";
import img5 from "../../Assets/media/static_media/about/clients/5.png";
import img6 from "../../Assets/media/static_media/about/clients/6.png";
import img7 from "../../Assets/media/static_media/about/clients/7.png";
import img8 from "../../Assets/media/static_media/about/clients/8.png";
import img9 from "../../Assets/media/static_media/about/clients/9.png";
import img10 from "../../Assets/media/static_media/about/clients/10.JPG";
import img11 from "../../Assets/media/static_media/about/clients/11.PNG";
import img12 from "../../Assets/media/static_media/about/clients/12.PNG";
import img13 from "../../Assets/media/static_media/about/clients/13.PNG";
import img14 from "../../Assets/media/static_media/about/clients/14.PNG";
import img15 from "../../Assets/media/static_media/about/clients/15.PNG";
import img16 from "../../Assets/media/static_media/about/clients/16.png";
import img17 from "../../Assets/media/static_media/about/clients/17.png";
import img18 from "../../Assets/media/static_media/about/clients/18.png";

const About = () => {
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
                            <li><img src={img3}/></li>
                            <li><img src={img4}/></li>
                            <li><img src={img5}/></li>
                            <li><img src={img6}/></li>
                            <li><img src={img7}/></li>
                            <li><img src={img8}/></li>
                            <li><img src={img9}/></li>
                        </ul>
                        <ul>
                            <li><img src={img10}/></li>
                            <li><img src={img11}/></li>
                            <li><img src={img12}/></li>
                            <li><img src={img13}/></li>
                            <li><img src={img14}/></li>
                            <li><img src={img15}/></li>
                            <li><img src={img16}/></li>
                            <li><img src={img17}/></li>
                            <li><img src={img18}/></li>
                        </ul>
                    </section>
                </div>
            </div>
        </>
    )
}

export default About;