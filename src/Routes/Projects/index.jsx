import React, { useEffect, useState } from "react";
import "./index.css";
import ProjectsLightbox from "../ProjectsLightbox"

import sanityClient from "../../client";
import imageUrlBuilder from "@sanity/image-url";

import $ from "jquery";
import "jquery-ui-bundle";

const Projects = () => {
    const [projectData, setProjectData] = useState([]);

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
                console.log(e)
                $(".projects-carousel img").toggleClass(".scale-up");
            }),
            cursor: "crosshair",
            scrollSpeed: 1
        });
    }, []);

    return (
        <>
            <div id="projects-container" className="projects-container">
                <h1> Projects </h1>
                <section className="projects-carousel">
                    {projectData.map((project) => {
                        return (
                            <div className="project-cover-image">
                                <img src={urlFor(project.project_cover.asset._ref)} />
                            </div>
                        )
                    })}
                </section>  
            </div>
            <ProjectsLightbox />
        </>
    )
}

export default Projects;