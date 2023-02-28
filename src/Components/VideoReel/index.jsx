import React from "react";
import $ from "jquery"
import "./index.css";

const VideoReel = () => {
    const handleVideoClose = (e) => {
        if ($(e.target).hasClass("video-reel-container")) {
            $(".video-reel-container").css({
                "transform": "scale(0)"
            }, 500);
    
            $(".video-reel-title h1").html("2023 SIZZLE REEL");

            if (document.querySelector(".video-reel-container").style.transform === "scale(0)") {
                setTimeout(() => {document.querySelector(".video-reel").src = `https://www.youtube.com/embed/w1DJR_ww-TM`}, 500);
            }
        }
    }

    return (
        <>
            <div className="video-reel-container" onClick={(e) => handleVideoClose(e)}>
                <iframe className="video-reel" 
                    src="https://www.youtube.com/embed/w1DJR_ww-TM" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen>
                </iframe>
            </div>
        </>
    )
}

export default VideoReel;
