import React from "react";
import { slideData } from "../data";
import { CarouselCard } from "./ui/Carousel/CarouselCard";

const Experience = () => {
    return (
        <div className="pb-10 md:pb-20 w-full relative" id="experience">
            <h1 className="heading">
                My{"  "}
                <span className="text-purple">Work Experience</span>
            </h1>

            <div className="relative overflow-hidden w-full h-full pt-10 md:py-20">
                <CarouselCard slides={slideData} />
            </div>
        </div>
    );
};

export default Experience;
