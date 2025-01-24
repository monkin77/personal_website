import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { companies, testimonials } from "../data";
import Image from "next/image";

const Awards = () => {
    return (
        <div className="pb-10" id="awards">
            <h1 className="heading">
                Collection of <span className="text-purple">Awards</span>,{" "}
                <span className="text-purple">Scholarships</span> &{" "}
                <span className="text-purple">Certificates</span>
            </h1>

            <div className="flex flex-col items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="fast"
                />

                <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
                    {companies.map(({ id, img, name, nameImg }) => (
                        <div
                            key={id}
                            className="flex gap-2"
                        >
                            {/* Show Short and Long LOGO */}
                            {img &&
                                (nameImg ? (
                                    <>
                                        <Image
                                            src={img.url}
                                            alt={name}
                                            className="md:w-10 w-5"
                                            width={img.width}
                                            height={img.height}
                                        />

                                        <Image
                                            src={nameImg.url}
                                            alt={name}
                                            className="md:w-24 w-20"
                                            width={nameImg.width}
                                            height={nameImg.height}
                                        />
                                    </>
                                ) : (
                                    <Image
                                        src={img.url}
                                        alt={name}
                                        className="md:w-32 w-20"
                                        width={img.width}
                                        height={img.height}
                                    />
                                ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Awards;
