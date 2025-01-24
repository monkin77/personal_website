import React from "react";
import ExtendedResume from "./ExtendedResume";
import FloatingDockWrapper from "../components/ui/FloatingDock/Wrapper";
import { FaArrowLeft } from "react-icons/fa";
import InvertButton from "../components/ui/Buttons/InvertButton";
import Link from 'next/link';
import { BackgroundBeams } from "../components/ui/Bg/BackgroundBeams";

const Resume = () => {

    return (
        <main className="relative bg-background flex justify-center items-center flex-col overflow-x-clip mx-auto sm:px-10 px-5">
            <BackgroundBeams className="h-1/3" />

            <BackgroundBeams className="top-1/4 h-1/3" />

            <BackgroundBeams className="top-2/3 h-1/3" />

            <div className="max-w-[90rem] w-full my-10 min-h-screen relative" >
                <div className="sticky top-5 z-50">
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
            </div>

            <div className="fixed right-4 lg:right-[5%] 2xl:right-[8%] top-2/3 md:top-16 z-50">
                <FloatingDockWrapper className="" />
            </div>

           {/*  <BackgroundBeams className="h-[200vh] bottom-0" /> */}
        </main>
    );
};

export default Resume;
