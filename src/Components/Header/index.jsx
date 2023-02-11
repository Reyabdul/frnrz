import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

import contactLogo from "../../Assets/media/misc/peacock_logo.png";

import logo1 from "../../Assets/media/logos/yellowblack_logo.PNG";
import logo2 from "../../Assets/media/logos/pinkwhite_logo.PNG";
import logo3 from "../../Assets/media/logos/blackpink_logo.PNG";
import logo4 from "../../Assets/media/logos/8.png";
import logo5 from "../../Assets/media/logos/7.png";
import logo6 from "../../Assets/media/logos/6.png";
import logo7 from "../../Assets/media/logos/5.png";

const Header = () => {
    const [logoCount, setLogoCount] = useState(0);

    const logoArray = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

    useEffect(() => {
        const logoInterval = setInterval(() => {
            setLogoCount((logoCount) => logoCount >= 6 ? logoCount - logoCount : logoCount + 1);
        }, 1000);

        return () => {
            clearInterval(logoInterval);
        }
    }, [])

    const galleryUrlChecker = (url) => {
        if (url.indexOf("/gallery") !== -1) {
            document.querySelector(".footer").classList.add("fixed-footer");
            document.querySelector(".header").classList.add("fixed-header");
        } else {
            document.querySelector(".footer").classList.remove("fixed-footer");
            document.querySelector(".header").classList.remove("fixed-header");
        }
    }

    const footerUrlChecker = (url) => {
        if (window.location.href.indexOf("/projects") !== -1) {
            document.querySelector(".footer").style.marginTop = "100vh";
        } else {
            document.querySelector(".footer").style.marginTop = "none";
        }
    }

    return (
        <>
            <div className="header">
                <nav>
                    <div className="column">
                        <Link exact to="/" onClick={(e) => {
                            setTimeout(() => {
                                galleryUrlChecker(window.location.href);
                                footerUrlChecker(window.location.href);
                            }, 300)}}>
                            <div className="logo-container">
                                <img src={logoArray[logoCount]} alt="home-logo" />
                            </div>
                        </Link>
                    </div>
                    <div className="column empty-box"></div>
                    <div className="column">
                        <div className="contact-info-container">
                            <ul>
                                <li><a href="mailto:info@frnrz.com">info@frnrz.com</a></li>
                                <li><a href="https://www.instagram.com/sansfuccs/" target="_blank">@sansfuccs</a></li>
                                <li>CALGARY | TORONTO</li>
                            </ul>
                            <img id="contact-logo" src={contactLogo} />
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Header;