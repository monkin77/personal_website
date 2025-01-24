"use client";

import React from "react";
import {
    cardsContentProps,
    ExpandableCards,
} from "../../components/ui/ExpandableCard";

const cards: cardsContentProps[] = [
    {
        animID: "anim_1",
        title: "SNNs to Detect Patterns of Neuronal Activity",
        location: "Master's Dissertation, FEUP & i3s",  // Using the location field as the subtitle
        date: "Sept. 2023 - Sept. 2024",
        src: "projects/intel-loihi_square.jpg",
        landscapeSrc: "projects/intel-loihi.jpg",
        ctaText: "Repository",
        ctaLink: "https://github.com/monkin77/thesis-lava/tree/main",
        content: () => {
            return (
                <p>
                    Exploring the Detection of relevant patterns of Neuronal Activity using Neuromorphic Hardware and SNNs.
                    <br /> <br />
                </p>
            );
        },
    },
    {
        animID: "anim_2",
        title: "NIJobs - Web Application",
        location: "A Platform for Companies to advertise their Job Opportunities to University of Porto's Students",
        date: "Jan. 2021 - Jan. 2023",
        src: "projects/nijobs_square.png",
        landscapeSrc: "projects/nijobs.png",
        ctaText: "Repository",
        ctaLink: "https://github.com/NIAEFEUP/nijobs-fe",
        content: () => {
            return (
                <p>
                    Contributed to a Web Application from NIAEFEUP that connects companies and students looking for jobs.
                    <br /> <br />
                </p>
            );
        },
    },
    {
        animID: "anim_3",
        title: "Monkin's Habitat - Personal Website",
        location: "A Personal Portfolio to introduce myself and showcase my work",
        date: "Feb. 2020 - Feb. 2023",
        src: "projects/portfolio_square.png",
        landscapeSrc: "projects/portfolio.png",
        ctaText: "Repository",
        ctaLink: "https://github.com/monkin77/personal_website",
        content: () => {
            return (
                <p>
                    A Personal Portfolio Website, introducing myself to the world and showcasing my projects, experiences, and unique traits :)
                    <br /> <br />

                </p>
            );
        },
    },
];

const AwardCards = () => {
    return <ExpandableCards cards={cards} />;
};

export default AwardCards;
