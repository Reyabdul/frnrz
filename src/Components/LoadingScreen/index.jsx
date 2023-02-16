import React, { useEffect, useState } from "react";
import $ from "jquery";

import loadingVideo_MOBILE from "../../Assets/media/static_media/loading/MOBILE.mp4";

import "./index.css";

const LoadingScreen = (props) => {
    const [doneLoading, setDoneLoading] = useState(true);

    const hideLoadingScreen = () => {
        $(".loading-screen").fadeOut(1000);
    }

    const loadingRequest = () => {
        return new Promise(resolve => setTimeout(() => resolve(), 3000));
    }

    useEffect(() => {
        loadingRequest().then(() => {
            const loadingScreen = document.querySelector(".loading-screen");

            if (loadingScreen) {
                hideLoadingScreen();
                setDoneLoading(!doneLoading);
            }
        });
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