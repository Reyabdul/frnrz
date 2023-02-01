import React from "react";
import $ from "jquery"
import "./index.css";

import videoMedia from "../../Assets/media/static_media/video_reel/video_reel.mp4";

const VideoReel = () => {
    const handleVideoClose = (e) => {
        if ($(e.target).hasClass("video-reel-container")) {
            $(".video-reel-container").css({
                "transform": "scale(0)"
            }, 500);
    
            $(".video-reel-title h1").html("VIDEO REEL TITLE");

            if (document.querySelector(".video-reel-container").style.transform === "scale(0)") {
                setTimeout(() => {document.querySelector(".video-reel").load()}, 500);
            }
        }
    }

    return (
        <>
            <div className="video-reel-container" onClick={(e) => handleVideoClose(e)}>
                <video className="video-reel" controls>
                    <source src={videoMedia} type="video/mp4" />
                </video>
            </div>
        </>
    )
}

export default VideoReel;