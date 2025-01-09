import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { companies, testimonials } from "../data";

function Clients() {
    return (
        <div className="py-20" id="testimonials">
            <h1 className="heading">
                Kind words from{"  "}
                <span className="text-purple">satisfied clients</span>
            </h1>

            <div className="flex flex-col items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="normal"
                />

                <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
                    {companies.map(({id, img, name, nameImg}) => (
                        <div key={id} className="flex max-w-32 md:max-w-60 gap-2">
                            {/* Show Short and Long LOGO */}

                            {img && <img src={img} alt={name} className="md:w-10 w-5" />}

                            {nameImg && <img src={nameImg} alt={name} className="md:w-24 w-20" />   }          
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Clients;
