import React from "react";
import ExtendedResume from "./ExtendedResume";
import FloatingDockWrapper from "../components/ui/FloatingDock/Wrapper";
import { FaArrowLeft } from "react-icons/fa";
import InvertButton from "../components/ui/Buttons/InvertButton";
import Link from 'next/link';
import { BackgroundBeams } from "../components/ui/Bg/BackgroundBeams";

const Resume = () => {

    return (
        <main className="relative bg-background flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
            <BackgroundBeams />

            <div className="max-w-[90rem] w-full my-10 min-h-screen relative">
                <div className="sticky top-5">
                    <Link href="/">
                        <InvertButton
                            title="Back to Home"
                            icon={<FaArrowLeft />}
                            position="left"
                            otherClasses=""
                        />
                    </Link>
                    
                </div>

                <ExtendedResume />

                <div className="sticky bottom-20">
                    <FloatingDockWrapper className="" />
                </div>
            </div>
        </main>
    );
};

export default Resume;
