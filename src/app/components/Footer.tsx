"use client";

import React from "react";
import { socialMedia } from "../data";
import ShimmerButton from "./ui/Buttons/ShimmerButton";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="w-full md:pt-10 pb-10" id="contact">
            <div className="w-full absolute left-0 -bottom-72 min-h-96">
                <Image
                    src="/footer-grid.svg"
                    alt="grid"
                    className="w-full h-full opacity-50"
                    width={1920}
                    height={1080}
                />
            </div>

            <div className="flex flex-col items-center">
                <h1 className="heading lg:max-w-[70vw] text-lg lg:text-4xl xl:text-5xl">
                    Feel free to check out{" "}
                    <span className="text-purple">My Socials</span> <br />
                    and get in touch :&#41;
                </h1>

                <div className="flex items-center md:gap-3 gap-6 mt-5 md:mt-10 justify-center">
                    {socialMedia.map((profile) => (
                        <div key={profile.id} className="mx-1 md:mx-6">
                            <ShimmerButton
                                className="w-16 h-16 md:w-24 md:h-24 relative hover:scale-105"
                                onClick={() =>
                                    window.open(profile.url, "_blank")
                                }
                                title={profile.url}
                            >
                                <Image
                                    src={profile.img}
                                    alt={`Img-${profile.id}`}
                                    className="p-3 md:p-4"
                                    fill
                                />
                            </ShimmerButton>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
                <p className="md:text-base text-sm md:font-normal font-light">
                    Copyright © 2025 Monkin
                </p>
                
                <div className="flex flex-row align-middle z-10">
                    <div className="flex items-center mr-5 md:mr-10">
                        <Link href="/attributions" className="cursor-pointer hover:underline">Attributions</Link>
                    </div>

                    <div className="flex items-center md:gap-3 gap-6 md:mt-0 mt-2">
                        {socialMedia.map((profile) => (
                            <div
                                key={profile.id}
                                className="w-10 h-10 md:w-10 md:h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg 
                                saturate-180 bg-opacity-75 bg-black-200 rounded-2xl border border-black-300"
                            >
                                <Image
                                    src={profile.img}
                                    alt={`Img-${profile.id}`}
                                    /* width={20}
                                    height={20} */
                                    onClick={() =>
                                        window.open(profile.url, "_blank")
                                    }
                                    title={profile.url}
                                    fill
                                    className="p-2 md:p-2"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                
            </div>
        </footer>
    );
};

export default Footer;
