import React from "react";
import Experience from "./experience/Experience";
import Profile from "./Profile";
import Education from "./education/Education";

const ExtendedResume = () => {
    return (
        <div className="min-h-screen">
            <Profile />

            <Experience />

            <Education />
        </div>
    );
};

export default ExtendedResume;
