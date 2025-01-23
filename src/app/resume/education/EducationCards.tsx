"use client";

import React from "react";
import {
    cardsContentProps,
    ExpandableCards,
} from "../../components/ui/ExpandableCard";

const cards: cardsContentProps[] = [
    {
        animID: "anim_1",
        title: "Integrated Master's in Informatics and Computing Engineering",
        location: "University of Porto, Faculty of Engineering",
        date: "Sept. 2019 - July. 2024",
        src: "companies/feup.png",
        landscapeSrc: "companies/feup_hor.png",
        ctaText: "Learn More",
        ctaLink: "https://sigarra.up.pt/feup/en/cur_geral.cur_view?pv_ano_lectivo=2024&pv_curso_id=742&pv_origem=CAND&pv_tipo_cur_sigla=L",
        content: () => {
            return (
                <p>
                    CGPA: 18 / 20
                    <br /> <br />
                </p>
            );
        },
    },
    {
        animID: "anim_2",
        title: "Exchange Program in Computer Science, Big Data, and Bioengineering",
        location: "Hong Kong University of Science and Technology (HKUST)",
        date: "Sept. 2023 - Dec. 2023",
        src: "companies/hkust.png",
        landscapeSrc: "experiences/hkust.jpg",
        ctaText: "Learn More",
        ctaLink: "https://hkust.edu.hk/",
        content: () => {
            return (
                <p>
                    CGPA: ? / 20
                    <br /> <br />
                </p>
            );
        },
    },
    {
        animID: "anim_3",
        title: "Fundamentals of Neuroscience XSeries Program",
        location: "EDX, Remote",
        date: "Feb. 2020 - Feb. 2023",
        src: "companies/edx.png",
        landscapeSrc: "experiences/edx_neuro.png",
        ctaText: "Learn More",
        ctaLink: "https://pll.harvard.edu/series/fundamentals-neuroscience",
        content: () => {
            return (
                <p>
                    Grade: 93/100 (93%)
                    <br /> <br />
            
                </p>
            );
        },
    },
];

const EducationCards = () => {
    return <ExpandableCards cards={cards} />;
};

export default EducationCards;
