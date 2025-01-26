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
        location: "MSc Dissertation: Neuromorphic Computing and Event-Driven Algorithms for the real-time analysis of neuronal Activity",  // Using the location field as the subtitle
        date: "Sept. 2023 - Sept. 2024",
        src: {
            url: "projects/intel-loihi_square.jpg",
            width: 1080,
            height: 1080,
        },
        landscapeSrc: "projects/intel-loihi.jpg",
        ctaText: "Repository",
        ctaLink: "https://github.com/monkin77/thesis-lava/tree/main",
        content: () => {
            return (
                <p>
                    Exploring the Detection of relevant patterns of Neuronal Activity using Neuromorphic Hardware and SNNs.
                    <br /> <br />
                    This project was conducted at the Neuroengineering and Computational Neuroscience group at i3s, under the supervision of {" "}
                    <a className="underline" href="https://scholar.google.com/citations?user=Jwr9SgMAAAAJ&hl=en&inst=1381320739207392350" target="_blank">Prof. Paulo Aguiar</a>.
                    <br /> <br />
                    Intel Labs supported the project by providing access to the Loihi Neuromorphic Chip. The written dissertation can be found {" "}
                    <a className="underline" href="https://hdl.handle.net/10216/161063" target="_blank">here</a>.
                </p>
            );
        },
    },
    {
        animID: "anim_2",
        title: "NIJobs - Web Application",
        location: "A Platform for Companies to advertise their Job Opportunities to University of Porto's Students",
        date: "Jan. 2021 - Jan. 2023",
        src: {
            url: "projects/nijobs_square.png",
            width: 826,
            height: 826,
        },
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
        src: {
            url: "projects/portfolio_square.png",
            width: 1079,
            height: 1079,
        },
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
        src: {
            url: "projects/java_compiler_code_square.png",
            width: 1186,
            height: 1186,
        },
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
        src: {
            url: "projects/distributed_db_square.png",
            width: 225,
            height: 225,
        },
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
        src: {
            url: "projects/fakeSocial_square.png",
            width: 906,
            height: 906,
        },
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
    {
        animID: "anim_7",
        title: "Panik @FEUP",
        location: "Unity Game developed as an introduction to Game Development",
        date: "Oct. 2022 - Feb. 2023",
        src: {
            url: "projects/panik_feup_square.png",
            width: 1080,
            height: 1080,
        },
        landscapeSrc: "projects/panik_feup.png",
        ctaText: "Play Game",
        ctaLink: "https://monkin77.itch.io/panik-feup",
        content: () => {
            return (
                <p>
                    Panik @Feup is located at the FEUP’s library cafeteria, where the main character is the Primary Baker of the Cafe. The Baker is very greedy and wants all 
                    the Panikes for herself. Therefore, she has to protect them from all the starving people, such as students and teachers, 
                    that may wish to have a bite of this delicacy.
                    <br /> <br />
                    This is a survival game that is divided into waves. The primary purpose of this game is to survive the most waves possible, 
                    using every game mechanic to help. Beware that there are special waves, the Panike Rounds, where a freshly baked Panike will 
                    be out of the oven and ready to be picked up by the Baker! Enemies will be especially stronger in these rounds.
                    
                </p>
            );
        },
    },
    {
        animID: "anim_8",
        title: "Wii Balance AlphaBot",
        location: "Development of a Real-Time Kernel for Embedded Systems",
        date: "Mar. 2022 - June. 2023",
        src: {
            url: "projects/wii_alphabot_square.png",
            width: 1079,
            height: 1079,
        },
        landscapeSrc: "projects/wii_alphabot.png",
        ctaText: "Repository",
        ctaLink: "https://github.com/monkin77/Wii-Balance-AlphaBot",
        content: () => {
            return (
                <p>
                    Implemented a real-time kernel to optimize task scheduling in an embedded system. Two versions of the kernel were developed using Python and C languages, respectively.
                    <br /> <br />
                    The system employed a Raspberry Pi, a Wii Balance Board, and an AlphaBot2-Pi robot. We used the Wii Balance Board to control the robot's movements and the Raspberry Pi 
                    to process the data and send commands to the robot. We defined a set of tasks and their respective time constraints to test the kernel's task scheduling capabilities.
                    <br /> <br />
                    For more details, check the repository linked above that contains the project's report and a video demonstration.
                </p>
            );
        },
    },
    {
        animID: "anim_9",
        title: "Mystic Realms - Unity 3D Game",
        location: "3D RPG Game with a focus on Elemental Magic and Exploration.",
        date: "Sept. 2023 - Feb. 2024",
        src: {
            url: "projects/mystic_realms_square.png",
            width: 347,
            height: 347,
        },
        landscapeSrc: "projects/mystic_realms.png",
        ctaText: "Play Game",
        ctaLink: "https://brunogomes30.itch.io/mystical-realms-power-of-the-elements",
        content: () => {
            return (
                <p>
                    Help the hero take revenge against the FireMighters and reconquer freedom for the 4 Great Villages: Earth, Wind, Fire and Lightning!
                    2 Gamemodes available, story and a Playground with all skills unlocked and enemies all around the map
                    <br /> <br />
                    This game was made by 7 Developers, 1 Sound Designer, and 1 Game Modeler.
                </p>
            );
        },
    },
    {
        animID: "anim_10",
        title: "Countdown - Social Network App",
        location: "Meet new people on a countdown!",
        date: "Mar. 2020 - Dec. 2020",
        src: {
            url: "projects/countdown.png",
            width: 500,
            height: 500,
        },
        landscapeSrc: "projects/countdown.png",
        ctaText: "",
        ctaLink: "",
        content: () => {
            return (
                <p>
                    Mobile Application developed on my first year's summer break, that was available on Play Store, with more than 1200 users.
                    <br /> <br />
                    Implemented authentication, cloud storage, firestore database, videostreaming, payments, notifications and ads.
                </p>
            );
        },
    },
    {
        animID: "anim_11",
        title: "Terrarius - Text-Based Sandbox Game",
        location: "Sandbox Game to learn about OOP in Java",
        date: "Sept. 2022 - Jan. 2023",
        src: {
            url: "projects/terrarius_square.png",
            width: 797,
            height: 797,
        },
        landscapeSrc: "projects/terrarius.png",
        ctaText: "Repository",
        ctaLink: "https://github.com/monkin77/LPOO-Terrarius",
        content: () => {
            return (
                <p>
                    Developed a sandbox game to learn more about OOP and good design pratices.
                    Including unit and property based testing of the game, achieving high code coverage and mutation testing results.
                    <br /> <br />
                    Usage of design patterns, such as MVC, State Pattern, Game loop. Search for code smells and respective refactors.
                </p>
            );
        },
    },
    {
        animID: "anim_12",
        title: "Computer Networks Configuration",
        location: "Configured a LAN with a Router, Switch, and 2 Computers to transfer files.",
        date: "Oct. 2021 - Jan. 2022",
        src: {
            url: "projects/feup_rcom.png",
            width: 800,
            height: 450,
        },
        landscapeSrc: "projects/feup_rcom.png",
        ctaText: "Repository",
        ctaLink: "https://github.com/monkin77/feup_iart",
        content: () => {
            return (
                <p>
                    Developed a system capable of sending data through 2 computers connected by serial port, using the OSI model as reference and 
                    implementing the Data Link Layer.
                    <br /> <br />
                    Configured a LAN from scratch to transfer files between PCs connected to a Cisco router, using a self-developed application
                     that relies on the FTP protocol.
                </p>
            );
        },
    },
    {
        animID: "anim_13",
        title: "Loan Predictor - ML Model",
        location: "Automated Loan Approval System for Banks using ML",
        date: "Sept. 2021 - Jan. 2022",
        src: {
            url: "projects/loan_predictor_square.png",
            width: 688,
            height: 500,
        },
        landscapeSrc: "projects/loan_predictor.png",
        ctaText: "Repository",
        ctaLink: "https://github.com/monkin77/feup-ac",
        content: () => {
            return (
                <p>
                    Data Mining project following the <i>CRISP-DM</i> methodology to identify good and bad clients for a bank, as well as 
                    to predict if a loan would be successful.
                    <br /> <br />
                    For more details, follow the Repository link above.
                </p>
            );
        },
    },
    {
        animID: "anim_14",
        title: "Interactive Graphic Systems (WebGL)",
        location: "Projects developed in the Computer Graphics course using WebGL",
        date: "Sept. 2021 - Jan. 2022",
        src: {
            url: "projects/sgi_square.png",
            width: 991,
            height: 991,
        },
        landscapeSrc: "projects/sgi.png",
        ctaText: "Repository",
        ctaLink: "https://github.com/monkin77/feup-sgi",
        content: () => {
            return (
                <p>
                    Explored several features from WebGL that culminated into a final project where it is possible to play Checkers in an interactive environment, including a robust parser to
                    parse the scene file, a scene inspired in the <i>Lara Croft</i> videogame, custom primitives, NURBS, materials, textures,
                     keyframe animations, 3D objects, etc.
                    <br /> <br />
                    For more details, follow the Repository link above containing the 3 sub-projects.
                </p>
            );
        },
    },
    {
        animID: "anim_15",
        title: "Indwish",
        location: "Information Retrieval System for Company Reviews",
        date: "Sept. 2022 - Jan. 2023",
        src: {
            url: "projects/indwish_square.png",
            width: 324,
            height: 324,
        },
        landscapeSrc: "projects/indwish.png",
        ctaText: "Repository",
        ctaLink: "https://github.com/monkin77/feup-pri",
        content: () => {
            return (
                <p>
                    Developed a search engine to find companies that match users' interests and see their rating according to workers.
                    <br /> <br />
                    The Process was divided into 3 main parts: <i>Data Preparation</i>, <i>Document Indexing and Retrieval</i>, and the <i>UI</i>.
                </p>
            );
        },
    }
    /* {
        animID: "anim_13",
        title: "Newtify, Web App",
        location: "Collaborative News Site",
        date: "Sept. 2021 - Jan. 2022",
        src: "projects/newtify.png",
        landscapeSrc: "projects/newtify.png",
        ctaText: "Repository",
        ctaLink: "https://github.com/monkin77/Newtify",
        content: () => {
            return (
                <p>
                    Developed a Collaborative News Site, going through the main steps of a product development, 
                    including Requirements Specification, User Stories, Information Architecture, Database Specification, etc.
                    <br /> <br />
                    
                </p>
            );
        },
    }, */
    
];

const ProjectCards = () => {
    return <ExpandableCards cards={cards} />;
};

export default ProjectCards;
