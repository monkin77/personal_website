import React from "react";
import ExtendedResume from "./ExtendedResume";
import FloatingDockWrapper from "../components/ui/FloatingDock/Wrapper";

const Resume = () => {
    return (
        <main className="relative bg-background flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
            <div className="max-w-7xl w-full mb-10 min-h-screen relative">
                <div className="sticky top-1">
                    Back To Home
                </div>

                <ExtendedResume />

                <div className="flex items-center justify-center w-full sticky bottom-20">
                    <FloatingDockWrapper className="" />
                </div>
            </div>
        </main>
    );
};

export default Resume;
