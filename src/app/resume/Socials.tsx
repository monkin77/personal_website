"use client";

import React from "react";
import { extendedSocialMedia } from "../data";

const ResumeSocials = () => {
    return (
        <div className="flex items-center justify-center mt-2 md:mt-3 gap-x-4 md:gap-x-10">
            {extendedSocialMedia.map((profile) => (
                <div
                    key={profile.id}
                    className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg 
                                                saturate-180 bg-opacity-75 bg-black-200 rounded-2xl border border-black-300"
                >
                    <img
                        src={profile.img}
                        alt={`Img-${profile.id}`}
                        width={20}
                        height={20}
                        onClick={() => window.open(profile.url, "_blank")}
                    />
                </div>
            ))}
        </div>
    );
};

export default ResumeSocials;
