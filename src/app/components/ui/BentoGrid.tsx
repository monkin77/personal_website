"use client";

import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GridGlobe } from "./Globe/GridGlobe";
import { leftTechStack, rightTechStack } from "@/app/data";
import Lottie from "react-lottie";
import { useState } from "react";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import confettiAnimData from "../../data/confetti.json";
import compEngAnimData from "../../data/anim/computer_engineer_anim2.json";
import { aboutGridItems as gridItems } from "@/app/data";

const animationList = [compEngAnimData, confettiAnimData];

export const BentoGrid = ({ className }: { className?: string }) => {
    return (
        <div
            className={cn(
                /* previous styling: "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ", */
                "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
                className
            )}
        >
            {/* Grid Item 1 */}
            <BentoGridItemWrapper
                className="lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60-vh]"
                innerClassName="relative"
            >
                <div className="relative h-full">
                    {/* ANIMATION BG*/}
                    <div className="w-full h-full absolute">
                        <div className="bottom-1 h-[95%]">
                            {gridItems[0].animIdx != null && (
                                <Lottie
                                    options={{
                                        loop: true,
                                        autoplay: true,
                                        animationData:
                                            animationList[gridItems[0].animIdx],
                                        rendererSettings: {
                                            /* preserveAspectRatio:
                                            "xMidYMid slice", */
                                        },
                                    }}
                                    speed={0.75}
                                />
                            )}
                        </div>
                    </div>

                    {/* Main Grid Item Content (Title and so on)*/}
                    <div className="group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10 text-center">
                        <div className="font-sans font-bold text-lg lg:text-3xl z-10 w-full">
                            {gridItems[0].title}
                        </div>
                    </div>
                </div>
            </BentoGridItemWrapper>

            {/* Grid Item 2 */}
            <BentoGridItemWrapper className="lg:col-span-2 md:col-span-3 md:row-span-2">
                <div className="group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10 justify-start">
                    <div className="font-sans font-bold text-lg lg:text-3xl z-10 w-full">
                        {gridItems[1].title}
                    </div>

                    <GridGlobe />
                </div>
            </BentoGridItemWrapper>


            {/* Grid Item 3 */}
            <BentoGridItemWrapper className="lg:col-span-2 md:col-span-3 md:row-span-2">
                <div className="group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10 justify-center">
                    <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
                        {gridItems[2].description}
                    </div>

                    <div className="font-sans font-bold text-lg lg:text-3xl z-10 w-full">
                        {gridItems[2].title}
                    </div>

                    <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
                        <div className="flex flex-col gap-3 lg:gap-8">
                            {leftTechStack.map((item, idx) => (
                                <span
                                    key={idx}
                                    className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132e]"
                                >
                                    {item}
                                </span>
                            ))}

                            <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />
                        </div>

                        <div className="flex flex-col gap-3 lg:gap-8">
                            <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />

                            {rightTechStack.map((item, idx) => (
                                <span
                                    key={idx}
                                    className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132e]"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </BentoGridItemWrapper>

            
        </div>
    );
};

const BentoGridItemWrapper = ({
    className,
    innerClassName,
    children,
}: {
    className?: string;
    innerClassName?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border border-white/[0.1]",
                className
            )}
            style={{
                background: "rgb(2, 0, 36)",
                backgroundColor:
                    "linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(59, 59, 68, 1) 26%, rgba(93, 108, 111, 1) 100%)",
            }}
        >
            <div className={cn("h-full", innerClassName)}>{children}</div>
        </div>
    );
};

const contactEmail = "test@gmail.com";

export const BentoGridItem = ({
    className,
    title,
    description,
    header,
    icon,
    id,
    img,
    animIdx,
    imgClassName,
    titleClassName,
    spareImg,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
    id: number;
    img?: string;
    animIdx?: number;
    imgClassName?: string;
    titleClassName?: string;
    spareImg?: string;
}) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        // TODO: Get the email from .env file
        navigator.clipboard.writeText(contactEmail);

        setCopied(true);
    };

    return (
        <div
            className={cn(
                "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border border-white/[0.1]",
                className
            )}
            style={{
                background: "rgb(2, 0, 36)",
                backgroundColor:
                    "linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(59, 59, 68, 1) 26%, rgba(93, 108, 111, 1) 100%)",
            }}
        >
            <div
                className={`${id === 6 ? "flex justify-center" : ""} ${
                    id === 1 ? "relative" : ""
                } h-full`}
            >
                <div className="w-full h-full absolute">
                    {img && (
                        <img
                            src={img}
                            alt={img}
                            className={cn(
                                imgClassName,
                                "object-cover" // , object-center"
                            )}
                        />
                    )}

                    {animIdx != null && [1].includes(id) && (
                        <div className="bottom-1 h-[95%]">
                            <Lottie
                                options={{
                                    loop: true,
                                    autoplay: true,
                                    animationData: animationList[animIdx],
                                    rendererSettings: {
                                        /* preserveAspectRatio:
                                            "xMidYMid slice", */
                                    },
                                }}
                                speed={0.75}
                            />
                        </div>
                    )}
                </div>

                <div
                    className={`absolute right-0 -bottom-5 ${
                        id === 5 && "w-full opacity-80"
                    }`}
                >
                    {spareImg && (
                        <img
                            src={spareImg}
                            alt={spareImg}
                            className="object-cover, object-center w-full h-full"
                        />
                    )}
                </div>

                {id === 6 && (
                    // Render animation
                    <BackgroundGradientAnimation />
                )}

                <div
                    className={cn(
                        titleClassName,
                        "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
                    )}
                >
                    <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
                        {description}
                    </div>

                    <div className="font-sans font-bold text-lg lg:text-3xl z-10 w-full">
                        {title}
                    </div>

                    {id === 2 && <GridGlobe />}

                    {id === 3 && (
                        <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
                            <div className="flex flex-col gap-3 lg:gap-8">
                                {leftTechStack.map((item, idx) => (
                                    <span
                                        key={idx}
                                        className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132e]"
                                    >
                                        {item}
                                    </span>
                                ))}

                                <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />
                            </div>

                            <div className="flex flex-col gap-3 lg:gap-8">
                                <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />

                                {rightTechStack.map((item, idx) => (
                                    <span
                                        key={idx}
                                        className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132e]"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {id === 6 && (
                        <div className="mt-5 relative">
                            <div className={`absolute -bottom-5 right-0`}>
                                <Lottie
                                    options={{
                                        loop: copied,
                                        autoplay: copied,
                                        animationData: confettiAnimData,
                                        rendererSettings: {
                                            preserveAspectRatio:
                                                "xMidYMid slice",
                                        },
                                    }}
                                />
                            </div>

                            <MagicButton
                                title={
                                    copied ? "Email copied!" : "Copy my email"
                                }
                                icon={<IoCopyOutline />}
                                position="left"
                                otherClasses="!bg-[#161a31]"
                                onClick={handleCopy}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
