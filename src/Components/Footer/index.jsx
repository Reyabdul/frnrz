import React, { useState, useEffect } from "react";
import $ from "jquery";
import "./index.css";

import videoReelIconPlay from "../../Assets/media/misc/video_reel_icon.png";

const Footer = () => {
    const handleVideoButton = (e) => {
        $(".video-reel-container").css({
            "transform": "scale(1)"
        }, 500);

        $(".video-reel-title h1").html("VIDEO PLAYING");
    }

    return (
        <>
            <div className="footer">
                <div className="column">
                    <div className="video-reel-section">
                        <div className="icon-container">
                            <img src={videoReelIconPlay} onClick={(e) => handleVideoButton(e)}/>
                        </div>
                        <div className="video-reel-title">
                            <marquee width="100%" direction="left" vspace="20" scrollamount="20">
                                <h1> VIDEO REEL TITLE </h1>
                            </marquee> 
                        </div>
                    </div>
                </div>
                <div className="column">

                </div>
                <div className="column">
                    <div className="copyright-section">
                         <p>Copyright Sansfuccs | FRNRZ 2023</p>
                    </div>
                </div>
            </div>
        </>
        
    )
}

export default Footer;