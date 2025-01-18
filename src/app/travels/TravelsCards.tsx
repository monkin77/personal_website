import React from "react";
import { Card, FocusCards } from "../components/ui/FocusCards";

const cards: { [continentName: string]: Card[] } = {
    "Europe": [
        {
            title: "Portugal",
            src: "/countries/portugal.jpg",
        },
        {
            title: "Spain",
            src: "/countries/spain.jpg",
        },
        {
            title: "France",
            src: "/countries/france.jpg",
        },
        {
            title: "Italy",
            src: "/countries/italy.jpg",
        },
        {
            title: "Germany",
            src: "/countries/germany.jpg",
        },
    ],
    "Asia": [
        {
            title: "Hong Kong",
            src: "/countries/hongKong.jpeg",
        },
        {
            title: "China",
            src: "/countries/china.jpg",
        },
        {
            title: "Taiwan",
            src: "/countries/taiwan.jpg",
        },
        {
            title: "Thailand",
            src: "/countries/thailand.jpg",
        },
        {
            title: "Vietnam",
            src: "/countries/vietnam.jpg",
        },
    ],
};

const TravelsCards = () => {
    return (
        <div>
            {Object.entries(cards).map(([continent, countries], keyIdx) => (
                <div key={keyIdx} className="flex-row w-full md:w-9/12 mx-auto">
                    <h1 className="text-xl md:text-3xl dark:text-white text-black font-bold font-mono my-4 md:my-8">{continent}</h1>

                    <FocusCards cards={countries} />
                </div>
            ))}
        </div>
    );
};

export default TravelsCards;
