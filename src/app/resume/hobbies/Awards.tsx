import React from "react";
import ResumeSectionWrapper from "../ResumeSectionWrapper";
import { FaRunning } from "react-icons/fa";
import HobbiesCards from "./HobbiesCards";

const Hobbies = () => {
    return (
        <ResumeSectionWrapper
            title="Hobbies"
            icon={<FaRunning className="w-full h-full" />}
            id="hobbies"
        >
            <div className="w-full relative">
                <HobbiesCards />
            </div>
        </ResumeSectionWrapper>
    );
};

export default Hobbies;
