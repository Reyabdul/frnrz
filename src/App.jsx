import React, { useState, useEffect } from "react";
import $ from "jquery";

//React router Dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Components
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import VideoReel from "./Components/VideoReel";
import LoadingScreen from "./Components/LoadingScreen";
// import Blob from "./Components/Blob";
import "./root.css";

//Routes
import Gallery from "./Routes/Gallery/Index"
import About from "./Routes/About";
import Home from "./Routes/Home";
import Projects from "./Routes/Projects";
import Vision from "./Routes/Vision";
import Services from "./Routes/Services";


const App = () => {
    const [doneLoading, setDoneLoading] = useState(true);

    const hideLoadingScreen = () => {
        $(".loading-screen").fadeOut(1000);
    }

    const loadingRequest = () => {
        return new Promise(resolve => setTimeout(() => resolve(), 2500));
    }

    useEffect(() => {
        loadingRequest().then(() => {
            const loadingScreen = document.querySelector(".loading-screen");

            if (loadingScreen) {
                console.log("done loading");
                hideLoadingScreen();
                setDoneLoading(!doneLoading);
            }
        });
    });

    return (
        <>
            <LoadingScreen />
            <BrowserRouter>
                <Header />
                {/*Routes - path relevant to 'Routes' folder and not the 'Component' folder  */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/vision" element={<Vision />} />
                    <Route path="/services" element={<Services />} />
                </Routes>
                {/* <Blob /> */}
                <Footer />
                <VideoReel />
            </BrowserRouter>
        </>
    )
}

export default App;