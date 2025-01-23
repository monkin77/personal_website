import React from "react";
import ResumeSectionWrapper from "../ResumeSectionWrapper";
import { FaHammer } from "react-icons/fa";
import ProjectCards from "./ProjectCards";

const Projects = () => {
    return (
        <ResumeSectionWrapper
            title="Projects"
            icon={<FaHammer className="w-full h-full" />}
            id="projects"
        >
            <div className="w-full relative">
                <ProjectCards />
            </div>
        </ResumeSectionWrapper>
    );
};

export default Projects;
