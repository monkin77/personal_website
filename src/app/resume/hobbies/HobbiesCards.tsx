"use client";

import React from "react";
import { Card, FocusCards } from "@/app/components/ui/FocusCards";

const cards: Card[] = [
    {
        title: "Neuroscience",
        src: "/interests/neuroscience.jpg",
    },
    {
        title: "Basketball",
        src: "/interests/basketball.jpg",
    },
    {
        title: "Travelling",
        src: "/interests/travel.jpg",
    },
    {
        title: "Food Markets",
        src: "/interests/foodMarket.jpg",
    },
    {
        title: "Volleyball",
        src: "/interests/volleyball.jpg",
    },
];

const HobbiesCards = () => {
    {
        /* <ExpandableCards cards={cards} />; */
    }
    return (
        <div>
            <div className="flex-row w-5/6 md:w-full mx-auto">
                <FocusCards cards={cards} />
            </div>
        </div>
    );
};

export default HobbiesCards;
