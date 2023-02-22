import React, { useLayoutEffect, useState } from "react";
import $ from "jquery";

import loadingVideo_MOBILE from "../../Assets/media/static_media/loading/MOBILE.mp4";

import "./index.css";

const LoadingScreen = () => {
    const [doneLoading, setDoneLoading] = useState(true);

    const hideLoadingScreen = (duration) => {
        $(".loading-screen").fadeOut(duration);
    }

    const loadingRequest = () => {
        return new Promise(resolve => setTimeout(() => resolve(), 3000));
    }

    useLayoutEffect(() => {
        const loadingScreen = document.querySelector(".loading-screen");

        if (window.location.href.indexOf("/projects") !== -1) {
            hideLoadingScreen(0);
        } else {
            loadingRequest().then(() => {
                if (loadingScreen) {
                    hideLoadingScreen(1000);
                    setDoneLoading(!doneLoading);
                }
            });
        }
    });

    return (
        <>
            <div className="loading-screen">
                <video id="loading-video" autoPlay={true} muted loop={false} preload="none" playsInline>
                    <source src={loadingVideo_MOBILE} type="video/mp4" />    
                </video>
            </div>
        </>

    )
}

export default LoadingScreen;