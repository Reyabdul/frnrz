import React, { useEffect, useState } from "react";
import $ from "jquery";
import "./index.css";

import videoReelIconPlay from "../../Assets/media/misc/video_reel_icon.png";

const Footer = () => {
    const [footerFlag, setFooterFlag] = useState(true);

    const handleVideoButton = (e) => {
        $(".video-reel-container").css({
            "transform": "scale(1)"
        }, 500);

        $(".video-reel-title h1").html("VIDEO PLAYING");
    }

    const footerHandler = () => {
        return new Promise(resolve => setTimeout(() => resolve(), 500))
    }

    useEffect(() => {
        footerHandler().then(() => {
            const footer = document.querySelector(".footer");

            if (footer) {
                if (window.location.href.indexOf("/projects") !== -1 && window.innerWidth < 500) {
                    footer.style.marginTop = "100vh";
                } else {
                    footer.style.marginTop = "0";
                }
                setFooterFlag(!footerFlag);
            }
        });
    })

    return (
        <>
            <div className="footer">
                <div className="column">
                    <div className="video-reel-section">
                        <div className="icon-container">
                            <img src={videoReelIconPlay} onClick={(e) => handleVideoButton(e)}/>
                        </div>
                        <div className="video-reel-title">
                            <marquee width="100%" direction="left" vspace="20" scrollamount="10">
                                <h1> VIDEO REEL TITLE </h1>
                            </marquee> 
                        </div>
                    </div>
                </div>
                <div className="column">

                </div>
                <div className="column">
                    <div className="copyright-section">
                         <p>Copyright FOREIGNERZ. Built by <a href="https://www.instagram.com/_hexstudio">hexstudio</a></p>
                    </div>
                </div>
            </div>
        </>
        
    )
}

export default Footer;