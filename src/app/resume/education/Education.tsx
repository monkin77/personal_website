import React from "react";
import ResumeSectionWrapper from "../ResumeSectionWrapper";
import { FaGraduationCap } from "react-icons/fa";
import EducationCards from "./EducationCards";

const Education = () => {
    return (
        <ResumeSectionWrapper
            title="Education"
            icon={<FaGraduationCap className="w-full h-full" />}
            id="education"
        >
            <div className="w-full relative">
                <EducationCards />
            </div>
        </ResumeSectionWrapper>
    );
};

export default Education;
