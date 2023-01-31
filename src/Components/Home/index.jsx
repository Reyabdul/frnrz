import React from "react";
import "./index.css";

import aboutPreview from "../../Assets/media/static_media/about/image_preview.png";

const Home = () => {
    return (
        <>
            <div className="home">
                <div className="column">
                    <section className="about-section">
                        <img src={aboutPreview} />
                        <article className="about-preview-info">
                            <h1>
                                Some text outlining what FRNRZ is verybriefly. The rest is to be seen in the about page.  
                            </h1>
                        </article>
                    </section>
                </div>
                <div className="column">
                    <section className="projects-section"></section>
                    <section className="services-section"></section>
                </div>
                <div className="column">
                    <section className="vision-section"></section>
                    <section className="gallery-section"></section>
                </div>
            </div>
        </>
    )
}

export default Home;