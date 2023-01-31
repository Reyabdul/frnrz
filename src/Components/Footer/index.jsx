import React from "react";
import "./index.css";

import videoReelIcon from "../../Assets/media/misc/video_reel_icon.png";

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="column">
                    <div className="video-reel-container">
                        <div className="icon-container">
                            <img src={videoReelIcon} />
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
                    <div className="copyright-container">
                         <p>Copyright Sansfuccs | FRNRZ 2023</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;