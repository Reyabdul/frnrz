import React, { useEffect, useState } from "react";
import $ from "jquery";

import loadingVideo_MOBILE from "../../Assets/media/static_media/loading/MOBILE.mp4";

import "./index.css";

const LoadingScreen = (props) => {
    const [doneLoading, setDoneLoading] = useState(false);

    const hideLoadingScreen = () => {
        $(".loading-screen").fadeOut(1000);
    }

    return (

        <>
            <div className="loading-screen">
                <video id="loading-video" autoPlay={true} muted loop={false} preload="none" playsInline onEnded={hideLoadingScreen}>
                    <source src={loadingVideo_MOBILE} type="video/mp4" />    
                </video>
            </div>
        </>

    )
}

export default LoadingScreen;