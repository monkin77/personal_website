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
            src: "/countries/spain.webp",
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
        {
            title: "England",
            src: "/countries/england.jpg",
        },
        {
            title: "Ireland",
            src: "/countries/ireland.webp",
        },
        {
            title: "Scotland",
            src: "/countries/scotland.jpg",
        },
        {
            title: "Austria",
            src: "/countries/austria.jpg",
        },
        {
            title: "Belgium",
            src: "/countries/belgium.webp",
        },
        {
            title: "Sweden",
            src: "/countries/sweden.jpg",
        },
        /*
        {
            title: "Greece",
            src: "/countries/greece.jpg",
        },
        {
            title: "Croatia",
            src: "/countries/croatia.jpg",
        },
        {
            title: "Turkey",
            src: "/countries/turkey.jpg",
        },
        {
            title: "Norway",
            src: "/countries/norway.jpg",
        },
        
        {
            title: "Finland",
            src: "/countries/sweden.jpg",
        },
        {
            title: "Estonia",
            src: "/countries/sweden.jpg",
        },
        {
            title: "Russia",
            src: "/countries/sweden.jpg",
        }, */
    ],
    "Asia": [
        {
            title: "Hong Kong",
            src: "/countries/hongKong.webp",
        },
        {
            title: "China",
            src: "/countries/china.jpg",
        },
        {
            title: "Taiwan",
            src: "/countries/taiwan.webp",
        },
        {
            title: "Thailand",
            src: "/countries/thailand.jpg",
        },
        {
            title: "Vietnam",
            src: "/countries/vietnam.jpg",
        },
        {
            title: "Macau",
            src: "/countries/macau.webp",
        },
        {
            title: "Malaysia",
            src: "/countries/malaysia.jpg",
        },
    ],
    "North America": [
        {
            title: "Pittsburgh",
            src: "/countries/pittsburgh.jpg",
        },
        {
            title: "Miami",
            src: "/countries/miami.jpg",
        },
        {
            title: "Canada",
            src: "/countries/canada.webp",
        },
    ]
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
