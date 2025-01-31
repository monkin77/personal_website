import React from "react";
import { projects } from "../data";
import { PinContainer } from "./ui/3DPin/PinContainer";
import { FaLocationArrow } from "react-icons/fa";
import { LinkPreview } from "./ui/LinkPreview";
import Image from "next/image";

function RecentProjects() {
    return (
        <div className="py-20" id="projects">
            <h1 className="heading">
                A small selection of{" "}
                <span className="text-purple">Recent Projects</span>
            </h1>

            <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10 z-20 relative">
                {projects.map(
                    (
                        {
                            id,
                            title,
                            des,
                            img,
                            iconLists,
                            link,
                            linkText,
                            imgCite,
                        },
                        idx
                    ) => (
                        <div
                            key={idx}
                            className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
                        >
                            <PinContainer title={link} href={link}>
                                <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                                    <div className="relative w-full h-full overflow-hidden rounded-lg lg:rounded-3xl bg-[#13162d]">
                                        <Image
                                            src="/bg.png"
                                            alt="background img"
                                            fill
                                        />
                                    </div>

                                    <div className="absolute w-11/12 h-[90%] my-auto">
                                        <Image
                                            src={img}
                                            alt={title}
                                            className="object-cover rounded-lg lg:rounded-xl"
                                            fill
                                        />
                                    </div>

                                    {imgCite && (
                                        <p className="absolute top-[10%] right-[7%] opacity-60 text-[0.5rem] md:text-xs">
                                            {imgCite}
                                        </p>
                                    )}
                                </div>

                                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                                    {title}
                                </h1>

                                <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                                    {des}
                                </p>

                                <div className="flex items-center justify-between mt-7 mb-3">
                                    <div className="flex items-center ">
                                        {iconLists.map((icon, iconIdx) => (
                                            <div
                                                key={iconIdx}
                                                className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center z-10 relative"
                                                style={{
                                                    transform: `translateX(-${
                                                        6 * iconIdx
                                                    }px)`,
                                                }}
                                            >
                                                <Image
                                                    src={icon}
                                                    alt={icon}
                                                    className="p-2 z-10 relative"
                                                    fill
                                                />
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex flex-row justify-center items-center">
                                        <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                                            {linkText}
                                        </p>
                                        <FaLocationArrow
                                            className="ms-3 "
                                            color="#CBACF9"
                                        />
                                    </div>
                                </div>
                            </PinContainer>
                        </div>
                    )
                )}
            </div>

            <h1 className="!leading-normal sub-heading z-50 relative mt-3 md:mt-6">
                Visit my{" "}
                <LinkPreview
                    url="/resume"
                    imageSrc="resume_preview.png"
                    isStatic
                >
                    <span className="text-purple underline">
                        Extended Resume
                    </span>
                </LinkPreview>{" "}
                for the Complete List!
            </h1>
        </div>
    );
}

export default RecentProjects;
