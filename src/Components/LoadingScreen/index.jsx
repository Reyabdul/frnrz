import React, { useEffect, useState } from "react";
import $ from "jquery";

import loadingVideo_DESKTOP from "../../Assets/media/static_media/loading/DESKTOP.mp4";
import loadingVideo_MOBILE from "../../Assets/media/static_media/loading/MOBILE.mp4";

import "./index.css";

const LoadingScreen = () => {
    window.onload = () => {
        let video = document.getElementById("loading-video");
        let source = document.createElement("source");

        if (window.innerWidth <= 400) {
            source.setAttribute("src", loadingVideo_MOBILE);
            source.setAttribute("type", "video/mp4");
        } else {
            source.setAttribute("src", loadingVideo_DESKTOP);
            source.setAttribute("type", "video/mp4");
        }

        video.appendChild(source);
        video.play();
    }

    const hideLoadingScreen = () => $(".loading-screen").fadeOut(1000);

    return (

        <>
            <div className="loading-screen">
                <video id="loading-video" autoPlay={true} muted onEnded={hideLoadingScreen}></video>
            </div>
        </>

    )
}

export default LoadingScreen;