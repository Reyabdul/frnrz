import React, { useState, useEffect } from "react";
import $ from "jquery";
import { Link } from "react-router-dom";
import "./index.css";

import VisionTicker from "../../Components/VisionTicker";
import Stars from "../../Components/Stars";

import bullHead from "../../Assets/media/static_media/about/bullhead.png";
import dragon from "../../Assets/media/static_media/about/dragon.png";
import peacockHead from "../../Assets/media/static_media/about/peacockhead.png";
import galleryVideo from "../../Assets/media/static_media/gallery/video_reel_tall.mp4";

const Home = () => {
    const [imageCount, setImageCount] = useState(0);
    const imageArray = [bullHead, dragon, peacockHead];

    useEffect(() => {
        if (window.location.href.indexOf("/") !== -1) {
            document.getElementsByTagName("body")[0].classList.remove("about-gradient-variant");
            document.getElementsByTagName("body")[0].classList.remove("space-gradient");
            $("#star-background").fadeIn(500);
        }

        const imageInterval = setInterval(() => {
            setImageCount((imageCount) => imageCount >= 2 ? imageCount - imageCount : imageCount + 1);
        }, 3000);

        return () => {
            clearInterval(imageInterval);
        }
    }, []);

    const galleryUrlChecker = (url) => {
        let deviceOrientation = "";

        if (window.innerWidth <= 500) {
            deviceOrientation = "mobile";
        } else {
            deviceOrientation = "desktop";
        }

        if (url.indexOf("/gallery") !== -1 && deviceOrientation === "desktop") {
            document.querySelector(".footer").classList.add("fixed-footer");
            document.querySelector(".header").classList.add("fixed-header");
        } else {
            document.querySelector(".footer").classList.remove("fixed-footer");
            document.querySelector(".header").classList.remove("fixed-header");
        }
    }

    return (
        <>
            <div className="noise-overlay" />
            <main className="page">
                <VisionTicker />
                <div className="home">
                    <div className="column">
                        <section className="about-section">
                            <Link to="/about" onClick={(e) => {
                                setTimeout(() => {
                                    galleryUrlChecker(window.location.href);
                                }, 300)}
                            }>
                                <img src={imageArray[imageCount]} />
                                <article className="about-preview-info">
                                    <h1>
                                    FOREIGNERZ is an art and production house focused on pushing boundaries in film, music, art and culture. 
                                    </h1>
                                </article>
                            </Link>
                        </section>
                    </div>
                    <div className="column">
                        <section className="navigation-section">
                            <ul>
                                <Link to="/projects" onClick={(e) => {setTimeout(() => {galleryUrlChecker(window.location.href);}, 300)}}>
                                    <li><h1> Projects </h1></li>
                                </Link>
                                <Link to="/services" onClick={(e) => {setTimeout(() => {galleryUrlChecker(window.location.href);}, 300)}}>
                                    <li><h1> Services </h1></li>
                                </Link>
                                <Link to="/gallery" onClick={(e) => {setTimeout(() => {galleryUrlChecker(window.location.href);}, 300)}}>
                                    <li><h1> Gallery </h1></li>
                                </Link>
                                <Link to="/vision" onClick={(e) => {setTimeout(() => {galleryUrlChecker(window.location.href);}, 300)}}>
                                    <li><h1> Vision </h1></li>
                                </Link>
                                <Link to="/about" onClick={(e) => {setTimeout(() => {galleryUrlChecker(window.location.href);}, 300)}}>
                                    <li><h1> About </h1></li>
                                </Link>
                            </ul>
                        </section>
                    </div>
                    <div className="column">
                        <section className="gallery-section">
                            <div className="gallery-preview-container">
                                {/*Using Link rather than 'a tag elements. Refer to App.js to ensure 'Link' corresponds to what is in App.js */}
                                <Link to="/gallery" onClick={(e) => {
                                    setTimeout(() => {
                                        galleryUrlChecker(window.location.href);
                                    }, 300)}}>
                                    <video muted loop autoPlay={true} playsInline={true}>
                                        <source src={galleryVideo} type="video/mp4" />
                                    </video>
                                </Link>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
            <Stars />
        </>
    )
}
export default Home;