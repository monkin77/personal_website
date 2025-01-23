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
    {
        animID: "anim_4",
        title: "Java Compiler",
        location: "Compiler for the Java-- Programming Language",
        date: "Mar. 2022 - Jun. 2022",
        src: "projects/java_compiler_code_square.png",
        landscapeSrc: "projects/java_compiler_code.png",
        ctaText: "Repository",
        ctaLink: "https://github.com/monkin77/feup-comp",
        content: () => {
            return (
                <p>
                    Built a compiler for a subset of the Java programming language (JMM), going through all the stages of compilation:
                    Lexical Analysis, Syntactic Analysis, Semantic Analysis, High & Low level Optimization, and Code Generation.
                    <br /> <br />
                    
                </p>
            );
        },
    },
    {
        animID: "anim_5",
        title: "Distributed Key-Value Store",
        location: "Distributed Key-Value Persistent Store for a Large Cluster, inspired by Amazon Dynamo Design",
        date: "Mar. 2022 - Jun. 2022",
        src: "projects/distributed_db_square.png",
        landscapeSrc: "projects/distributed_db.png",
        ctaText: "Repository",
        ctaLink: "https://github.com/monkin77/feup-key-value-store",
        content: () => {
            return (
                <p>
                    Built a distributed key-value persistent store for a large cluster, inspired by the Amazon Dynamo design. This service
                    is able to handle concurrent requests and tolerates both node crashes and message loss.
                    <br /> <br />
                    {/* TALK ABOUT TECHNOLOGIES USED */}
                </p>
            );
        },
    },
    {
        animID: "anim_6",
        title: "Fake Social - P2P Social Network",
        location: "Decentralized Social Network using a P2P Network",
        date: "Sept. 2022 - Jan. 2023",
        src: "projects/fakeSocial_square.png",
        landscapeSrc: "projects/fakeSocial.png",
        ctaText: "Repository",
        ctaLink: "https://github.com/monkin77/feup-sdle-2/tree/main",
        content: () => {
            return (
                <p>
                    Created a peer-to-peer timeline service, similar to the centralized option Twitter. The application supports peer
                    discovery, content routing, pub/sub, persistent storage, crash recovery, garbage collection, as well as a clean UI.
                    <br /> <br />
                    
                </p>
            );
        },
    },
];

const ProjectCards = () => {
    return <ExpandableCards cards={cards} />;
};

export default ProjectCards;
