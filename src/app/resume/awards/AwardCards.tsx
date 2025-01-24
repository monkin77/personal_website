"use client";

import React from "react";
import {
    cardsContentProps,
    ExpandableCards,
} from "../../components/ui/ExpandableCard";

const cards: cardsContentProps[] = [
    {
        animID: "anim_1",
        title: "Visiting Research Scholarship",
        location: "Carnegie Mellon Portugal - Visiting Students Program",
        date: "Sept. 2024",
        src: "/companies/cmu_1.jpg",
        landscapeSrc: "/companies/cmu_2.jpg",
        ctaText: "See Article",
        ctaLink: "https://cmuportugal.org/media/cmu-portugal-will-be-hosting-18-research-visitors-to-carnegie-mellon-in-2024/",
        content: () => {
            return (
                <p>
                    Carnegie Mellon Portugal sponsored my Research Project at Carnegie Mellon University in Pittsburgh, USA. This opportunity allowed me
        to work with world-class computational neuroscientists and gain new perspectives on my research and the future of the field.
                    <br /> <br />
                    The Research Scholarship covered my university fees and living expenses during my stay and I'm grateful
                     for the support from the institution.
                </p>
            );
        },
    },
    {
        animID: "anim_2",
        title: "Huawei Merit Scholarship",
        location: "Scholarship for academic excellence and outstanding performance",  // Using the location field as the subtitle
        date: "March 2023",
        src: "/companies/huawei_2.png",
        landscapeSrc: "/companies/huawei.png",
        ctaText: "See Article",
        ctaLink: "https://sigarra.up.pt/feup/en/noticias_geral.ver_noticia?p_nr=149871",
        content: () => {
            return (
                <p>
                    Awarded a merit scholarship by Huawei for academic excellence and outstanding performance. With less than 1% selection rate, this scholarship is part
                    of the Huawei Scholarship Program, which aims to support students in their academic pursuits. I am grateful for the recognition and support from the company.
                    <br /> <br />
                </p>
            );
        },
    },
    {
        animID: "anim_3",
        title: "ActInSpace Portugal 2022 Winner",
        location: "Hackathon organized by ActInSpace, ESA & CNES",
        date: "November 2022",
        src: "/companies/actInSpace.png",
        landscapeSrc: "/companies/actInSpace.png",
        ctaText: "Competition",
        ctaLink: "https://actinspace.org/",
        content: () => {
            return (
                <p>
                    ActInSpace is an international innovation contest sponsored by the French Space Agency and the European Space Agency. I was part of the winning team in
        the Portuguese edition of the contest, where we ideated and explored the potential of a space-based solution for a real-world problem.
                    <br /> <br />
                    The victory allowed us to represent Portugal in the international final in France, where we connected with teams around the world!
                </p>
            );
        },
    },
    {
        animID: "anim_4",
        title: "Merit Grant for Dissertation Work",
        location: "OERN - Ordem dos Engenheiros Região Norte",
        date: "September 2024",
        src: "/companies/oern.webp",
        landscapeSrc: "/companies/oern.webp",
        ctaText: "See Article",
        ctaLink: "https://haengenharia.pt/noticias/fotogaleria-ordem-dos-engenheiros-regiao-norte-atribui-50-premios-de-merito-a-estudantes-de-mestrado/",
        content: () => {
            return (
                <p>
                    OERN, the Engineer's Syndicate of Northern Portugal, recognized the relevance of my dissertation in the field of Computational Neuroscience
                    and awarded me a Merit Grant. The participation involved presenting my work through a video presentation and a written report, 
                    from where 50 students were selected to receive the prize.
                    <br /> <br />
                    
                </p>
            );
        },
    },
    {
        animID: "anim_5",
        title: "Pmate 2017 & 2018 - 2nd Place",
        location: "National Mathematics Competition - Pmate",
        date: "2017 and 2018",
        src: "/companies/pmate.png",
        landscapeSrc: "/companies/pmate.png",
        ctaText: "Competition",
        ctaLink: "https://www.ua.pt/pt/pmate",
        content: () => {
            return (
                <p>
                    Pmate is a high-school level national mathematics competition hosted in Portugal, where students compete in a series of mathematical challenges.
                    The purpose of the competition is to solve all the problems in the shortest time possible. Having participated multiple times, I was awarded 
                    the 2nd place in both 2017 and 2018 editions.
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
