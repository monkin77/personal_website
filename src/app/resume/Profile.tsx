import React from "react";
import AvatarSlider from "../components/AvatarSlider";
import { FaHome } from "react-icons/fa";
import ResumeSocials from "./Socials";

const Profile = () => {
    return (
        <div
            className="flex justify-center relative mt-14 mb-5 md:mb-10 z-10 flex-col md:flex-row"
            id="#"
        >
            <div className="flex flex-col items-center justify-center relative h-full">
                <AvatarSlider />
            </div>

            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60] flex flex-col items-center justify-center md:ml-10 mt-2 md:mt-0">
                <h1 className="uppercase heading tracking-wider text-center text-blue-100 text-2xl">
                    João Mesquita
                </h1>

                <p className="text-center md:tracking-wider text-sm md:text-base lg:text-xl mt-2 md:mt-3">
                    {"Computer Engineer | Researcher | Passionate Learner"}
                </p>

                <div className="flex flex-row justify-around items-center mt-2 md:mt-3 w-full">
                    <div className="flex flex-row items-center gap-x-3">
                        <FaHome className="w-8 h-8 text-teal-100 dark:text-teal-100" />
                        <span className="text-base md:text-lg lg:text-xl">
                            Porto, Portugal
                        </span>
                    </div>

                    <div>
                        <span className="text-base md:text-lg lg:text-xl">
                            23 years
                        </span>
                    </div>
                </div>

                <ResumeSocials />
            </div>
        </div>
    );
};

export default Profile;
