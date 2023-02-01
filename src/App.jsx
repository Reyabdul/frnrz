import React from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import VideoReel from "./Components/VideoReel/index";
import "./root.css";

const App = () => {
    return (
        <>
            <Header />
            <div className="page">
                <Home />
            </div>
            <Footer />
            <VideoReel />
        </>
    )
}

export default App;