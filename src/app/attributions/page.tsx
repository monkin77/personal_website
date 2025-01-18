import React from "react";

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
];

const Attributions = () => {
    return (
        <div className="py-5 md:py-10 w-full relative overflow-x-clip">
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
