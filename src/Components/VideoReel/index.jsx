import React, { useEffect, useState } from "react";
import $ from "jquery"
import "./index.css";

import sanityClient from "../../client";

const VideoReel = () => {
    const [videoReelData, setVideoReelData] = useState([]);

    const editUrlString = (urlString) => {
        let strUrl = urlString.replace(/file-/g, "");
        strUrl = strUrl.replace("-", ".");

        return `https://cdn.sanity.io/files/ufskghtn/production/${strUrl}`;
    }

    const handleVideoClose = (e) => {
        if ($(e.target).hasClass("video-reel-container")) {
            $(".video-reel-container").css({
                "transform": "scale(0)"
            }, 500);
    
            $(".video-reel-title h1").html("2023 SIZZLE REEL");

            if (document.querySelector(".video-reel-container").style.transform === "scale(0)") {
                setTimeout(() => {document.querySelector(".video-reel").load()}, 500);
            }
        }
    }

    useEffect(() => {
        sanityClient.fetch(
            `*[_type == "video_reel"]{
                video_upload
              }`
        ).then((data) => {
            setVideoReelData(editUrlString(data[0].video_upload.asset._ref));
        }).catch(console.error);
    }, []);

    return (
        <>
            <div className="video-reel-container" onClick={(e) => handleVideoClose(e)}>
                <video className="video-reel" controls>
                    <source src={videoReelData} type="video/mp4" />
                </video>
            </div>
        </>
    )
}

export default VideoReel;
