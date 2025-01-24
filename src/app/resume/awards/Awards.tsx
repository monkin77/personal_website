import React from "react";
import ResumeSectionWrapper from "../ResumeSectionWrapper";
import { FaTrophy } from "react-icons/fa";
import AwardCards from "./AwardCards";

const Awards = () => {
    return (
        <ResumeSectionWrapper
            title="Awards"
            icon={<FaTrophy className="w-full h-full" />}
            id="awards"
        >
            <div className="w-full relative">
                <AwardCards />
            </div>
        </ResumeSectionWrapper>
    );
};

export default Awards;
