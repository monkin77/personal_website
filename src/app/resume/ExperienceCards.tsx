"use client";

import React from "react";
import { cardsContentProps, ExpandableCards } from "../components/ui/ExpandableCard";

const cards: cardsContentProps[] = [
    {
        title: "CERN OpenLab Intern 2023",
        location: "Geneva, Switzerland",
        date: "June 2023 - Aug. 2023",
        description:
            "Worked on the Indico team to create a Progressive Web App that is responsible for checking-in participants and \
            managing events.",
        src: "experiences/cern2.jpg",
        ctaText: "Learn More",
        ctaLink: "https://ui.aceternity.com/templates",
        content: () => {
            return (
                <p>
                    Worked on the Indico team to create a Progressive Web App
                    that is responsible for checking-in participants and \
                    managing events.
                    <br /> <br /> Attended physics and computing
                    lectures/workshops on various state-of-the-art topics and
                    participated on events \ related to CERN, along with the 30
                    selected students around the world.
                </p>
            );
        },
    },
    {
        title: "Mitran Di Chhatri",
        location: "Geneva, Switzerland",
        date: "June 2023 - Aug. 2023",
        description: "Babbu Maan",
        src: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
        ctaText: "Play",
        ctaLink: "https://ui.aceternity.com/templates",
        content: () => {
            return (
                <p>
                    Babu Maan, a legendary Punjabi singer, is renowned for his
                    soulful voice and profound lyrics that resonate deeply with
                    his audience. Born in the village of Khant Maanpur in
                    Punjab, India, he has become a cultural icon in the Punjabi
                    music industry. <br /> <br /> His songs often reflect the
                    struggles and triumphs of everyday life, capturing the
                    essence of Punjabi culture and traditions. With a career
                    spanning over two decades, Babu Maan has released numerous
                    hit albums and singles that have garnered him a massive fan
                    following both in India and abroad.
                </p>
            );
        },
    },

    {
        description: "Metallica",
        title: "For Whom The Bell Tolls",
        location: "Geneva, Switzerland",
        date: "June 2023 - Aug. 2023",
        src: "https://assets.aceternity.com/demos/metallica.jpeg",
        ctaText: "Play",
        ctaLink: "https://ui.aceternity.com/templates",
        content: () => {
            return (
                <p>
                    Metallica, an iconic American heavy metal band, is renowned
                    for their powerful sound and intense performances that
                    resonate deeply with their audience. Formed in Los Angeles,
                    California, they have become a cultural icon in the heavy
                    metal music industry. <br /> <br /> Their songs often
                    reflect themes of aggression, social issues, and personal
                    struggles, capturing the essence of the heavy metal genre.
                    With a career spanning over four decades, Metallica has
                    released numerous hit albums and singles that have garnered
                    them a massive fan following both in the United States and
                    abroad.
                </p>
            );
        },
    },
    {
        description: "Led Zeppelin",
        title: "Stairway To Heaven",
        location: "Geneva, Switzerland",
        date: "June 2023 - Aug. 2023",
        src: "https://assets.aceternity.com/demos/led-zeppelin.jpeg",
        ctaText: "Play",
        ctaLink: "https://ui.aceternity.com/templates",
        content: () => {
            return (
                <p>
                    Led Zeppelin, a legendary British rock band, is renowned for
                    their innovative sound and profound impact on the music
                    industry. Formed in London in 1968, they have become a
                    cultural icon in the rock music world. <br /> <br /> Their
                    songs often reflect a blend of blues, hard rock, and folk
                    music, capturing the essence of the 1970s rock era. With a
                    career spanning over a decade, Led Zeppelin has released
                    numerous hit albums and singles that have garnered them a
                    massive fan following both in the United Kingdom and abroad.
                </p>
            );
        },
    },
    {
        description: "Mustafa Zahid",
        title: "Toh Phir Aao",
        location: "Geneva, Switzerland",
        date: "June 2023 - Aug. 2023",
        src: "https://assets.aceternity.com/demos/toh-phir-aao.jpeg",
        ctaText: "Play",
        ctaLink: "https://ui.aceternity.com/templates",
        content: () => {
            return (
                <p>
                    &quot;Aawarapan&quot;, a Bollywood movie starring Emraan
                    Hashmi, is renowned for its intense storyline and powerful
                    performances. Directed by Mohit Suri, the film has become a
                    significant work in the Indian film industry. <br /> <br />{" "}
                    The movie explores themes of love, redemption, and
                    sacrifice, capturing the essence of human emotions and
                    relationships. With a gripping narrative and memorable
                    music, &quot;Aawarapan&quot; has garnered a massive fan
                    following both in India and abroad, solidifying Emraan
                    Hashmi&apos;s status as a versatile actor.
                </p>
            );
        },
    },
];

const ExperienceCards = () => {
    return <ExpandableCards cards={cards} />;
};

export default ExperienceCards;
