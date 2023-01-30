import React from "react";
import Home from "./Components/Home";
import YearVision from "./Components/2023Vision";
import About from "./Components/About";
import Gallery from "./Components/Gallery";
import Projects from "./Components/Projects";
import Lightbox from "./Components/ProjectsLightbox";
import Services from "./Components/Services";
import VideoReel from "./Components/VideoReel";

const App = () => {
    return (
        <>
            <div>
                <h1> FRNRZ </h1>
                <Home />
                <YearVision />
                <About />
                <Gallery />
                <Projects />
                <Lightbox />
                <Services />
                <VideoReel />
            </div>
        </>
    )
}

export default App;