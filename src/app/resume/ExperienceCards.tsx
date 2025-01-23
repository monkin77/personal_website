"use client";

import React from "react";
import { cardsContentProps, ExpandableCards } from "../components/ui/ExpandableCard";

const cards: cardsContentProps[] = [
    {
        animID: "anim_1",
        title: "CERN OpenLab Intern 2023",
        location: "CERN, Switzerland",
        date: "June 2023 - Aug. 2023",
        src: "companies/cern.png",
        landscapeSrc: "experiences/cern.jpg",
        ctaText: "Learn More",
        ctaLink: "https://github.com/monkin77/indico-checkin-pwa",
        content: () => {
            return (
                <p>
                    Worked on the Indico team to create a Progressive Web App that is responsible for checking-in 
                    participants and managing events.
                    <br /> <br /> 
                    Attended physics and computing lectures/workshops on various state-of-the-art topics and
                    participated on events related to CERN, along with the 30 selected students around the world.
                </p>
            );
        },
    },
    {
        animID: "anim_2",
        title: "Computational Neuroscience Researcher",
        location: "Carnegie Mellon University, Pittsburgh",
        date: "Oct. 2024 - Dec. 2024",
        src: "companies/cmu.png",
        landscapeSrc: "experiences/cmu.jpg",
        ctaText: "Learn More",
        ctaLink: "https://chaselab.github.io/research.html",
        content: () => {
            return (
                <p>
                    Apply data science and machine learning techniques to analyze the Dynamic Range Adaptation phenomenon in the
                    Primary Motor Cortex, under the supervision of Prof. Steven Chase.
                    <br /> <br /> 
                    
                </p>
            );
        },
    },
    {
        animID: "anim_3",
        title: "Computational Neuroscience Researcher",
        location: "i3s, Porto",
        date: "Sept. 2023 - July 2024",
        src: "companies/i3s_white.png",
        landscapeSrc: "experiences/i3s.png",
        ctaText: "Learn More",
        ctaLink: "https://www.i3s.up.pt/research-group.php?groupid=125",
        content: () => {
            return (
                <p>
                    Explore the viability of Neuromorphic Computing as a highly efficient alternative to traditional computing systems to
                    perform the real-time analysis of neuronal activity.
                    <br /> <br /> 
                    Work with Intel’s neuromorphic chip (Loihi) and the LAVA framework to design neuromorphic algorithms that
                    characterize the activity of in-vitro neuronal cultures available at i3s.
                    Worked on the Indico team to create a Progressive Web App that is responsible for checking-in 
                    participants and managing events.
                </p>
            );
        },
    },
    {
        animID: "anim_4",
        title: "Co-Founder",
        location: "VRPortal, Porto",
        date: "Oct. 2018 - Dec. 2022",
        src: "companies/vrportal.png",
        landscapeSrc: "experiences/vrportal.jpg",
        ctaText: "Learn More",
        ctaLink: "https://www.vrportal.pt/",
        content: () => {
            return (
                <p>
                    Launched a Virtual Reality arcade with 7000+ customers so far, providing the first VR experiences in Portugal to the
                    general public and achieving a 5.0 max rating in Google from more than 270 reviews.
                    <br /> <br /> 
                    
                </p>
            );
        },
    },
    {
        animID: "anim_5",
        title: "Mobile Developer",
        location: "Smartex.ai, Porto",
        date: "July 2021 - July 2022",
        src: "companies/smartex.jpeg",
        landscapeSrc: "experiences/smartex.png",
        ctaText: "Learn More",
        ctaLink: "https://www.smartex.ai/",
        content: () => {
            return (
                <p>
                    Development of a React Native Application to manage industrial production and reduce waste. This App is installed
                    in more than 300 machines around multiple countries.
                    <br /> <br /> 
                    Design for system reliability and fault resilience, reducing the system downtime by more than 50%.
                    <br /> <br /> 
                    Implementation of an open-source Android Module to communicate with the EsperSDK (&gt; 91 000 Downloads)
                </p>
            );
        },
    },
    {
        animID: "anim_6",
        title: "Critical Software Summer Camp 2022",
        location: "Critical Software, Porto",
        date: "July 2021 - July 2022",
        src: "companies/critical_software.png",
        landscapeSrc: "experiences/critical_software_hor.jpg",
        ctaText: "Learn More",
        ctaLink: "https://criticalsoftware.com/en",
        content: () => {
            return (
                <p>
                    Overview of the areas inside the company, resulting in a final project for each one, namely: Digital Enterprise
                    Solutions (AngularJS and Quarkus), High Integrity Systems (Python) and Smart Technology Solutions (AWS).
                    <br /> <br /> 
                </p>
            );
        },
    },
];

const ExperienceCards = () => {
    return <ExpandableCards cards={cards} />;
};

export default ExperienceCards;
