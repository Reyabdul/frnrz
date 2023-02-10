import React, { useState, useEffect } from "react";

import $ from "jquery";
import "jquery-ui-bundle";

import sanityClient from "../../client";
import imageUrlBuilder from "@sanity/image-url";

import "./index.css";

const Lightbox = (data) => {
    const lightBoxData = data;
    const projectMedia = [];

    const builder = imageUrlBuilder(sanityClient);
    const urlFor = (source, width) => {
        return builder.image(source).auto('format').width(width).url();  
    }

    const handleCloseButton = () => {
        $(".projects-lightbox-container").css({
            "transform": "scale(0)"
        }, 500);
    }

    return (
        <>
            <div className="projects-lightbox-container">
                <div className="close-button" onClick={handleCloseButton}>
                    <button> return </button>    
                </div>
                <section className="project-information-container">
                    {Object.keys(lightBoxData).map((project) => {
                        return (
                            <>
                                <div className="column">
                                    <article className="project-title"><h1>{lightBoxData[project].project_title}</h1></article>
                                    <article className="project-description">
                                        <h2>{lightBoxData[project].project_description}</h2>
                                    </article>
                                    <article className="project-roles">
                                        <ul>
                                            {Object.keys(lightBoxData.data).length > 0 && lightBoxData.data.project_roles.map((role) => {
                                                return (
                                                    <li>{role}</li>
                                                )
                                            })}
                                        </ul>
                                    </article>
                                </div>
                                <div className="column">
                                    <section className="project-media-carousel">
                                        {Object.keys(lightBoxData.data).length > 0 && lightBoxData[project].project_media.map((media) => {
                                            projectMedia.push(urlFor(media.asset._ref));
                                            return (
                                                <img className="carousel-media" src={urlFor(media.asset._ref)} />
                                            )
                                        })}
                                    </section>
                                </div>
                            </>
                        )
                    })}
                </section>
            </div>
        </>
    )
}

export default Lightbox;