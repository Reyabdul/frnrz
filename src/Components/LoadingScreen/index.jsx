import React, { useEffect, useState } from "react";
import $ from "jquery";

import loadingVideo_MOBILE from "../../Assets/media/static_media/loading/MOBILE.mp4";

import "./index.css";

const LoadingScreen = () => {

    const hideLoadingScreen = () => $(".loading-screen").fadeOut(1000);

    return (

        <>
            <div className="loading-screen">
                <video id="loading-video" autoPlay={true} muted loop={true} preload="none" playsInline>
                    <source src={loadingVideo_MOBILE} type="video/mp4" />    
                </video> {/*onEnded={hideLoadingScreen}*/}
            </div>
        </>

    )
}

export default LoadingScreen;