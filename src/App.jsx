import React from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import "./root.css";

const App = () => {
    return (
        <>
            <Header />
            <div className="page">
                <Home />
            </div>
            <Footer />
        </>
    )
}

export default App;