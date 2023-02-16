import React from "react";
import { Link } from "react-router-dom";

import "./index.css";

const VisionTicker = () => {
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
            <Link to="/vision" onClick={(e) => {setTimeout(() => {galleryUrlChecker(window.location.href);}, 300)}}>
                <section className="vision-section">
                    <div className="vision-title">
                        <marquee width="100%" direction="left" vspace="1" scrollamount="10">
                            <h1> WE ARE ALL FOREIGNERZ. ONLY ART FROM THE GLOBAL UNDERGROUND WILL MOVE US FORWARD. </h1>
                        </marquee> 
                    </div>
                </section>
            </Link>
        </>
    )
}

export default VisionTicker;