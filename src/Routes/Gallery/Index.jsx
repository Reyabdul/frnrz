import React, { useState, useEffect } from "react";
import "./Index.css";

import LoadingScreen from "../../Components/LoadingScreen";

import sanityClient from "../../client";

import image1 from "../../Assets/Images/DSC00373-min.jpg";
import image2 from "../../Assets/Images/DSC00405-min.jpg";
import image3 from "../../Assets/Images/DSC00408-min.jpg";
import image4 from "../../Assets/Images/DSC00518-min.jpg";
import image5 from "../../Assets/Images/DSC00541-min.jpg";
import image6 from "../../Assets/Images/IMG_8293copy-min.jpg";
import image7 from "../../Assets/Images/PRIYA_BTS_-7-min.jpg";
import image8 from "../../Assets/Images/PRIYA_EMAN_DAY_2-2-min.jpg";
import image10 from "../../Assets/Images/SRDF_02-min.jpg";
import image12 from "../../Assets/Images/SRDF_22-min.jpg";
import image13 from "../../Assets/Images/SRDF_25-min.jpg";
import image14 from "../../Assets/Images/SRDF_31-min.jpg";
import image15 from "../../Assets/Images/SRDF_33-min.jpg";
import image16 from "../../Assets/Images/SRDF_36-min.jpg";
import image17 from "../../Assets/Images/SRDF_37-min.jpg";
import image18 from "../../Assets/Images/SRDF_38-min.jpg";
import image19 from "../../Assets/Images/SRDF_42-min.jpg";
import image20 from "../../Assets/Images/SRDF_53-min.jpg";
import image21 from "../../Assets/Images/SRDF_66-min.jpg";
import image22 from "../../Assets/Images/SRDF_70-min.jpg";
  

  

const Gallery = () => {

    const imgGalleryArr = [image1, image2, image3, image4, image5, image6, image7, image8, image10, image12, image13, image14, image15, image16, image17, image18, image19, image20, image21, image22]


    return (
        <>
            <LoadingScreen />
            <div className="gallery-container grid">
                <div className="gallery__container grid">
                    {imgGalleryArr.map((img, j) => ({ img, sort: Math.random() }))
                        .sort((a, b) => a.sort - b.sort)
                        .map(({img}, i) => {
                            return(
                                <div className="masonry-item">
                                    <img
                                        key={i}
                                        src={img}
                                        className="masonry-content"
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
};

export default Gallery;