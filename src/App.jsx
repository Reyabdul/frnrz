import React, { useState, useEffect } from "react";
import $ from "jquery";
import { Style } from "react-style-tag";

//React router Dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import cursor0 from "./Assets/media/misc/cursor0.png";
import cursor1 from "./Assets/media/misc/cursor1.png";
import cursor2 from "./Assets/media/misc/cursor2.png";
import cursor3 from "./Assets/media/misc/cursor3.png";
import cursor4 from "./Assets/media/misc/cursor4.png";

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
    let cursorCounter = 0;
    const cursors = [cursor0, cursor1, cursor2, cursor3, cursor4];

    return (
        <>
            <LoadingScreen />
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/vision" element={<Vision />} />
                    <Route path="/services" element={<Services />} />
                </Routes>
                <VideoReel />
            </BrowserRouter>
            <Footer />
            <Style>
                {`
                    body, html {
                        cursor: url(${cursors[4]}), default;
                    }
                `}
            </Style>
        </>
    )
}

export default App;