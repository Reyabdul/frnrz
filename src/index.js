import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import LoadingScreen from "./Components/LoadingScreen";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<LoadingScreen />);
const appRenderInterval = setInterval(() => {
    if (document.querySelector(".loading-screen").style.display === "none") {
        root.render(<App />);
        clearInterval(appRenderInterval);
    }
}, 100);