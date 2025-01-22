"use client";

import React from "react";
import { ImagesSlider } from "./ui/ImagesSlider";
import { motion } from "framer-motion";

const animatedSrcs = [
    "avatars/monkin_avatar_firefly.jpg",
]
const portraitSrcs = [
    "avatars/portrait_nature.jpg",
    "avatars/funny_portrait.jpg",
    "avatars/portrait_led.jpg",
    "avatars/funny_portrait_2.jpg",
    "avatars/halloween_portrait.jpg",
    "avatars/portrait_rainbow.jpg",
    "avatars/pool_portrait.jpg"
];
// Sort the portraitSrcs array randomly. Keep the first element as it is.
portraitSrcs.sort(() => Math.random() - 0.5);

const avatarSrcs = [...animatedSrcs, ...portraitSrcs];

const AvatarSlider = () => {
    return (
        <ImagesSlider
            className="w-32 md:w-64 aspect-square rounded-full"
            autoplay={true}
            images={avatarSrcs}
            overlay={false}
        >
            <motion.div
                initial={{
                    opacity: 1,
                    y: -80,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.6,
                }}
                className="z-50 flex flex-col justify-center items-center"
            ></motion.div>
        </ImagesSlider>
    );
};

export default AvatarSlider;
