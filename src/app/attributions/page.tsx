import React from "react";
import { Spotlight } from "../components/ui/Spotlight";
import Image from "next/image";

type sourceType =
    | "Animation"
    | "Illustration"
    | "Image"
    | "Icon"
    | "Logo"
    | "Video"
    | "Audio"
    | "Font"
    | "Code"
    | "Text"
    | "Data"
    | "Design"
    | "3D Model"
    | "Other";

const sources: { author: string; link: string; type: sourceType }[] = [
    {
        author: "Harvinder Singh",
        link: "https://lottiefiles.com/",
        type: "Animation",
    },
    {
        author: "Daru Broodryk",
        link: "https://lottiefiles.com/",
        type: "Animation",
    },
];

const Attributions = () => {
    return (
        <div className="p-5 md:p-10 w-full relative overflow-x-clip bg-background">
            <div className="w-full absolute left-0 -bottom-72 min-h-96">
                <Image
                    src="/footer-grid.svg"
                    alt="grid"
                    className="w-full h-full opacity-50"
                    width={1920}
                    height={1080}
                />
            </div>

            <h1 className="font-bold text-xl md:text-4xl dark:text-white text-black">
                Attributions
            </h1>

            <div className="mt-5 md:mt-10 grid grid-cols-2 md:grid-cols-4">
                {sources.map((source, index) => (
                    <div key={index} className="text-center">
                        <p className="text-lg dark:text-white text-black">
                            {source.type} made by
                        </p>
                        <p>{source.author}</p>
                        <p>from</p>
                        <p>{source.link}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Attributions;
