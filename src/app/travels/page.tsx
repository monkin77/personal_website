import React from "react";
import TravelsMap from "./TravelsMap";
import { TextGenerateEffect } from "../components/ui/TextGenerateEffect";
import { Meteors } from "../components/ui/Bg/MeteorEffect";
import TravelsCards from "./TravelsCards";
import Link from "next/link";
import InvertButton from "../components/ui/Buttons/InvertButton";
import { FaArrowLeft } from "react-icons/fa";

const TravelLog = () => {
    return (
        <div className="py-5 md:py-10 dark:bg-black bg-black w-full relative overflow-x-clip">            
            <div className="w-full text-center mb-4 md:mb-8">
                <Meteors number={20}  />

                <div className="hidden lg:inline-block absolute top-10 left-10 z-50">
                    <Link href="/">
                        <InvertButton
                            title="Back to Home"
                            icon={<FaArrowLeft />}
                            position="left"
                            otherClasses=""
                        />
                    </Link>
                </div>

                <TextGenerateEffect
                    className="text-center"
                    textClassName="font-bold text-xl md:text-4xl dark:text-white text-black"
                    words="Welcome to Monkin's Travel Log!"
                    duration={0.5}
                    colorShiftIdx={3}
                    filter={false}
                />

                <p className="text-sm md:text-lg text-neutral-500 max-w-3xl mx-auto py-2 text-center">
                    I&apos;ve be traveling since a very young age (thanks mom
                    and dad) and it&apos;s one of my favorite hobbies. Since it
                    started to become difficult to keep track of all the places
                    I&apos;ve been to, I decided to create this map 🌍!
                </p>
            </div>

            <TravelsMap />

            <div className="mt-8 md:mt-15">
                <h1 className="text-center text-3xl md:text-4xl dark:text-white text-black font-bold font-mono mb-5 md:mb-10">
                    List of Visited Countries
                </h1>

                <TravelsCards />
            </div>
        </div>
    );
};

export default TravelLog;
