import React, { useEffect, useState } from "react";
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

    return (
        <>
            <div className="header">
                <nav>
                    <div className="column">
                        <div className="logo-container">
                            <img src={logoArray[logoCount]} alt="home-logo" />
                        </div>
                    </div>
                    <div className="column">

                    </div>
                    <div className="column">
                        <div className="contact-info-container">
                            <img src={contactLogo} />
                            <ul>
                                <li>info@frnrz.com</li>
                                <li>@sansfuccs</li>
                                <li>CALGARY | TORONTO</li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Header;