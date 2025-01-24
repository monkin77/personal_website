import React from "react";
import Experience from "./experience/Experience";
import Profile from "./Profile";
import Education from "./education/Education";
import Projects from "./projects/Projects";
import Awards from "./awards/Awards";
import Hobbies from "./hobbies/Awards";

const ExtendedResume = () => {
    return (
        <div className="min-h-screen">
            <Profile />

            <Experience />

            <Education />

            <Projects />

            <Awards />

            <Hobbies />
        </div>
    );
};

export default ExtendedResume;
