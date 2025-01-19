import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { companies, testimonials } from "../data";

const Awards = () => {
    return (
        <div className="py-20" id="awards">
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
                                        <img
                                            src={img}
                                            alt={name}
                                            className="md:w-10 w-5"
                                        />

                                        <img
                                            src={nameImg}
                                            alt={name}
                                            className="md:w-24 w-20"
                                        />
                                    </>
                                ) : (
                                    <img
                                        src={img}
                                        alt={name}
                                        className="md:w-32 w-20"
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
