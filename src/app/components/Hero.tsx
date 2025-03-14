import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/Buttons/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import AvatarSlider from "./AvatarSlider";

const Hero = () => {
    return (
        <div className="pt-12 pb-12 md:pb-20 md:pt-24">
            <div>
                <Spotlight
                    className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
                    fill="white"
                />

                <Spotlight
                    className="top-10 left-full h-[80vh] w-[50vw]"
                    fill="purple"
                />

                <Spotlight
                    className="top-28 left-80 h-[80vh] w-[50vw]"
                    fill="blue"
                />
            </div>

            <div className="h-screen w-full dark:bg-black bg-white dark:bg-grid-white/[0.05] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
                {/* Radial gradient for the container to give a faded look */}
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            </div>

            <div className="flex justify-center relative mt-20 mb-5 md:mb-10 z-10 flex-col md:flex-row">
                <div className="flex flex-col items-center justify-center relative h-full">
                    <AvatarSlider />
                </div>

                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60] flex flex-col items-center justify-center">
                    {/* <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
                        Dynamic Web Magic with Next.js
                    </h2> */}

                    <TextGenerateEffect
                        className="text-center"
                        textClassName="md:text-3xl lg:text-4xl"
                        words="Welcome to João Mesquita's (Monkin) Habitat :)"
                        duration={0.5}
                        colorShiftIdx={4}
                        filter={true}
                    />

                    <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
                        {"Computer Engineer | Researcher | Passionate Learner"}
                    </p>

                    <a href="#projects">
                        <MagicButton
                            title="Show my Projects"
                            icon={<FaLocationArrow />}
                            position="right"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
