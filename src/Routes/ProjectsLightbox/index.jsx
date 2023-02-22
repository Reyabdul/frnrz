import React, { useState } from "react";

import $ from "jquery";
import "jquery-ui-bundle";

import sanityClient from "../../client";
import imageUrlBuilder from "@sanity/image-url";

import "./index.css";

const Lightbox = (data) => {
    const lightBoxData = data;
    const projectMedia = [];
    const projectLink = lightBoxData.data.project_link;

    const builder = imageUrlBuilder(sanityClient);
    const urlFor = (source, width) => {
        return builder.image(source).auto('format').width(width).url();  
    }

    const handleCloseButton = () => {
        $(".projects-lightbox-container").css({
            "transform": "scale(0)"
        }, 500);

        $("#projects-container").fadeIn(500);
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
                                    <article className="project-sub-heading"><h3>{lightBoxData[project].project_subheading}</h3></article>
                                    <article className="project-description">
                                        <h2>{lightBoxData[project].project_description}</h2>
                                    </article>
                                    <article className="project-roles">
                                        <ul>
                                            {Object.keys(lightBoxData.data).length > 0 && 
                                            lightBoxData.data.project_roles != null &&  
                                            lightBoxData.data.project_roles.map((role) => {
                                                return (
                                                    <li>{role}</li>
                                                )
                                            })}
                                        </ul>
                                    </article>
                                </div>
                                <div className="column">
                                    <section className="project-media-carousel">
                                        {Object.keys(lightBoxData.data).length > 0 && 
                                        lightBoxData[project].project_media != null && 
                                        lightBoxData[project].project_media.map((media) => {
                                            console.log(media);
                                            
                                            if (media._type === "video_embed") {
                                                return (
                                                    <iframe className="carousel-media" src={media.video_embed} frameBorder="0" allowFullScreen={true} />
                                                )
                                            } else if (media._type === "image_upload") {
                                                projectMedia.push(urlFor(media.asset._ref));

                                                return (
                                                    <img className="carousel-media" src={urlFor(media.asset._ref)} />
                                                )
                                            }
                                        })}
                                    </section>
                                    <section className="project-button">
                                        <div className="project-link-button">
                                            <button><a href={projectLink} target="_blank"> View Project </a></button>
                                        </div>
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