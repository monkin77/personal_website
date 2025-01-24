"use client";

import React from "react";
import { extendedSocialMedia } from "../data";
import Image from "next/image";

const ResumeSocials = () => {
    return (
        <div className="flex items-center justify-center mt-2 md:mt-3 gap-x-4 md:gap-x-10">
            {extendedSocialMedia.map((profile) => (
                <div
                    key={profile.id}
                    className="w-10 h-10 md:w-12 md:h-12 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg 
                                                saturate-180 bg-opacity-75 bg-black-200 rounded-2xl border border-black-300 hover:opacity-75"
                    onClick={() => window.open(profile.url, "_blank")}
                    title={profile.url}
                >
                    <div className="w-7 h-7 md:w-8 md:h-8 relative">
                        <Image
                            src={profile.img}
                            alt={`Img-${profile.id}`}
                            className=""
                            fill
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ResumeSocials;
