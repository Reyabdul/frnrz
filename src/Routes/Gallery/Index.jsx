import React, { useState, useEffect } from "react";
import "./Index.css";

import sanityClient from "../../client";

import image1 from "../../Assets/Images/DSC00373.jpg";
import image2 from "../../Assets/Images/DSC00405.jpg";
import image3 from "../../Assets/Images/DSC00408.jpg";
import image4 from "../../Assets/Images/DSC00518.jpg";
import image5 from "../../Assets/Images/DSC00541.jpg";
import image6 from "../../Assets/Images/IMG_8293copy.jpg";
import image7 from "../../Assets/Images/PRIYA_BTS_-7.jpg";
import image8 from "../../Assets/Images/PRIYA_EMAN_DAY_2-2.jpg";
import image9 from "../../Assets/Images/PRIYA_EMAN_DAY_2-12.jpg";
import image10 from "../../Assets/Images/SRDF_02.jpg";
import image12 from "../../Assets/Images/SRDF_22.jpg";
import image13 from "../../Assets/Images/SRDF_25.jpg";
import image14 from "../../Assets/Images/SRDF_31.jpg";
import image15 from "../../Assets/Images/SRDF_33.jpg";
import image16 from "../../Assets/Images/SRDF_36.jpg";
import image17 from "../../Assets/Images/SRDF_37.jpg";
import image18 from "../../Assets/Images/SRDF_38.jpg";
import image19 from "../../Assets/Images/SRDF_42.jpg";
import image20 from "../../Assets/Images/SRDF_53.jpg";
import image21 from "../../Assets/Images/SRDF_66.jpg";
import image22 from "../../Assets/Images/SRDF_70.jpg";




const Gallery = () => {

    const imgGalleryArr = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image12, image13, image14, image15, image16, image17, image18, image19, image20, image21, image22]



    return (
        <div className="gallery__container grid">
            {imgGalleryArr.map((img, i) => {
                return(
                    <div>
                        <img
                            key={i}
                            className="masonry-content"
                            src={img}
                        />
                    </div>
                )
             }
            )}
        </div>
    )
};

export default Gallery;