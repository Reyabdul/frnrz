import React, { useState, useEffect } from "react";
import "./index.css";

import aboutPreview from "../../Assets/media/static_media/about/image_preview.png";
import image1 from "../../Assets/media/static_media/gallery/1.png";
import image2 from "../../Assets/media/static_media/gallery/2.png";
import image3 from "../../Assets/media/static_media/gallery/3.jpg";
import image4 from "../../Assets/media/static_media/gallery/4.jpeg";
import image5 from "../../Assets/media/static_media/gallery/5.jpeg";
import image6 from "../../Assets/media/static_media/gallery/6.png";
import image7 from "../../Assets/media/static_media/gallery/7.jpg";
import image8 from "../../Assets/media/static_media/gallery/8.png";
import image9 from "../../Assets/media/static_media/gallery/9.png";
import image10 from "../../Assets/media/static_media/gallery/10.png";

const Home = () => {
    const [galleryCount, setGalleryCount] = useState(0);
    const galleryArray = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10];

    useEffect(() => {
        const galleryInterval = setInterval(() => {
            setGalleryCount((galleryCount) => galleryCount >= 9 ? galleryCount - galleryCount : galleryCount + 1);
        }, 700);

        return () => {
            clearInterval(galleryInterval);
        }
    }, [])
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
                    <section className="projects-section">
                        <ul>
                            <li>
                                <div className="project-row">
                                    <h1> Projects </h1>
                                </div>
                            </li>
                            <li>
                                <div className="projects-row">
                                    <span className="video-time">1:50</span>
                                    <span> Project Title: sample </span>
                                </div>
                            </li>
                            <li>
                                <div className="projects-row">
                                    <span className="video-time">1:50</span>
                                    <span> Project Title: sample </span>
                                </div>
                            </li>
                            <li>
                                <div className="projects-row">
                                    <span className="video-time">1:50</span>
                                    <span> Project Title: sample </span> 
                                </div>
                            </li>
                            <li>
                                <div className="projects-row">
                                    <span className="video-time">1:50</span>
                                    <span> Project Title: sample </span> 
                                </div>
                            </li>
                        </ul>
                    </section>
                    <section className="services-section">
                        <ul>
                            <li>
                                <h1> Services </h1>
                            </li>
                            <li> service </li>
                            <li> service </li>
                            <li> service </li>
                            <li> service </li>
                        </ul>
                        <div className="service-preview"></div>
                    </section>
                </div>
                <div className="column">
                    <section className="vision-section">
                        <div className="vision-title">
                            <marquee width="120%" direction="left" vspace="20" scrollamount="20">
                                <h1> 2023 VISION </h1>
                            </marquee> 
                        </div>
                    </section>
                    <section className="gallery-section">
                        <div className="gallery-preview-container">
                            <img src={galleryArray[galleryCount]} />
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Home;