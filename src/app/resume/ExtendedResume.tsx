import React from "react";
import Experience from "./experience/Experience";
import Profile from "./Profile";
import Education from "./education/Education";
import Projects from "./projects/Projects";

const ExtendedResume = () => {
    return (
        <div className="min-h-screen">
            <Profile />

            <Experience />

            <Education />

            <Projects />
        </div>
    );
};

export default ExtendedResume;
