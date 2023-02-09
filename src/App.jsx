import React, { useState, useEffect } from "react";

//React router Dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Components
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import VideoReel from "./Components/VideoReel";
import "./root.css";

//Routes
import Gallery from "./Routes/Gallery/Index"
import About from "./Routes/About";
import Home from "./Routes/Home";
import Projects from "./Routes/Projects";


const App = () => {

    return (
        <>
            <BrowserRouter>
                <Header />
                {/*Routes - path relevant to 'Routes' folder and not the 'Components' folder  */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/projects" element={<Projects />} />
                </Routes>
                <Footer />
                <VideoReel />
            </BrowserRouter>
        </>
    )
}

export default App;