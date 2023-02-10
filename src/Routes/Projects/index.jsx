import React, { useEffect, useState } from "react";
import "./index.css";
import ProjectsLightbox from "../ProjectsLightbox"

import sanityClient from "../../client";
import imageUrlBuilder from "@sanity/image-url";

import $ from "jquery";
import "jquery-ui-bundle";

const Projects = () => {
    const [projectData, setProjectData] = useState([]);
    const [projectLightboxData, setProjectLightboxData] = useState([]);

    const builder = imageUrlBuilder(sanityClient);
    const urlFor = (source, width) => {
        return builder.image(source).auto('format').width(width).url();  
    }

    useEffect(() => {
        sanityClient.fetch(
            `*[_type == "projects"]{
                project_title,
                project_media,
                project_year,
                video_embed,
                video_file,
                project_description,
                project_year,
                project_roles,
                project_cover
              }`
        ).then((data) => {
            setProjectData(data);
        }).catch(console.error);

        $("#projects-container").draggable({disabled: true});
        $(".projects-carousel").draggable({
            axis: "x",
            opacity: "0.95",
            drag: ((e) => {

            }),
            cursor: "crosshair",
            scrollSpeed: 1
        });
    }, []);

    const handleLightbox = (e) => {
        if ($(e.target).hasClass("project-thumbnail")) {
            $(".projects-lightbox-container").css({
                "transform": "scale(0.95)"
            }, 500);
        }
    }

    const getProjectData = (e) => {
        let projectFlag = e.target.src;

        sanityClient.fetch(
            `*[_type == "projects"]{
                project_title,
                project_media,
                project_year,
                video_embed,
                video_file,
                project_description,
                project_year,
                project_roles,
                project_cover
              }`
        ).then((data) => {
            data.forEach((project) => {
                if (urlFor(project.project_cover.asset._ref) === projectFlag) {
                    setProjectLightboxData(project);
                    handleLightbox(e)
                }
            })
        }).catch(console.error);
    }

    const handleScrollAnimation = () => {
        let photoCarousel = document.querySelector(".project-media-carousel");

        setInterval(() => {
            let photoCarouselWidth = photoCarousel.offsetWidth;

            if (photoCarousel.scrollLeft !== photoCarouselWidth || photoCarousel.scrollLeft === 0) {
                photoCarousel.scrollTo(photoCarousel.scrollLeft + 1, 0);
            }
        }, 15);
    }

    return (
        <>
            <div id="projects-container" className="projects-container">
                <h1> Projects </h1>
                <section className="projects-carousel">
                    {projectData.map((project) => {
                        return (
                            <div className="project-cover-image" onClick={(e) => {
                                getProjectData(e);
                                handleScrollAnimation();
                            }}>
                                <img className="project-thumbnail" src={urlFor(project.project_cover.asset._ref)} />
                            </div>
                        )
                    })}
                </section>  
            </div>
            <ProjectsLightbox data={projectLightboxData} />
        </>
    )
}

export default Projects;