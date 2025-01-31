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
        src: {
            url: "companies/feup.png",
            width: 195,
            height: 195,
        },
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
        src: {
            url: "companies/hkust.png",
            width: 1200,
            height: 1847,
        },
        landscapeSrc: "experiences/hkust.jpg",
        ctaText: "Learn More",
        ctaLink: "https://hkust.edu.hk/",
        content: () => {
            return (
                <p>
                    Studied for a semester in Hong Kong as part of an exchange program, where I took courses in Computer Science, Big Data, and Bioengineering.
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
        src: {
            url: "companies/edx.png",
            width: 1200,
            height: 675,
        },
        landscapeSrc: "experiences/edx_neuro.png",
        ctaText: "Learn More",
        ctaLink: "https://pll.harvard.edu/series/fundamentals-neuroscience",
        content: () => {
            return (
                <p>
                    Grade: 93/100 (93%)
                    <br /> <br />
                    Based on the introductory neurobiology courses taught at Harvard College, Fundamentals of Neuroscience is a three-part series that explores the structure 
                    and function of the entire nervous system — from the microscopic inner workings of a single nerve cell to the staggering complexity of the brain.
                </p>
            );
        },
    },
];

const EducationCards = () => {
    return <ExpandableCards cards={cards} />;
};

export default EducationCards;
