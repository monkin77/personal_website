import React from "react";
import AvatarSlider from "../components/AvatarSlider";

const ExtendedResume = () => {
    return (
        <div className="min-h-screen">
            <div className="flex justify-center relative mt-20 mb-5 md:mb-10 z-10 flex-col md:flex-row">
                <div className="flex flex-col items-center justify-center relative h-full">
                    <AvatarSlider />
                </div>

                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60] flex flex-col items-center justify-center md:ml-10 mt-2 md:mt-0">
                    <h1 className="uppercase heading tracking-wider text-center text-blue-100 text-2xl">
                        João Mesquita
                    </h1>

                    {/* <TextGenerateEffect
                        className="text-center"
                        textClassName="md:text-3xl lg:text-4xl"
                        words="Welcome to João Mesquita's (Monkin) Habitat :)"
                        duration={0.5}
                        colorShiftIdx={4}
                        filter={true}
                    /> */}

                    <p className="text-center md:tracking-wider text-sm md:text-base lg:text-xl mt-2">
                        {"Computer Engineer | Researcher | Passionate Learner"}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ExtendedResume;
