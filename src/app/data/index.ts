import { SlideCardData } from "../components/ui/Carousel/CarouselCard";

export const navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
}[] = [
    { name: "Home", link: "/" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Experience", link: "#experience" },
    { name: "Awards", link: "#awards" },
    { name: "Contact", link: "#contact" },
];

export const aboutGridItems: {
    id: number;
    title: string;
    description: string;
    img: string;
    animIdx?: number;
    spareImg: string;
}[] = [
    {
        id: 1,
        title: "Take a look at my", // who takes interest in various scientific fields.",
        description: "",
        img: "",
        animIdx: 0,
        spareImg: "",
    },
    {
        id: 2,
        title: "Visit my Travel Log!",
        description: "",
        img: "",
        spareImg: "",
    },
    {
        id: 3,
        title: "AI & Neuroscience",
        description: "Bridging the gap between",
        img: "",
        spareImg: "",
    },
    {
        id: 4,
        title: "Tech enthusiast with a passion for development.",
        description: "",
        img: "/grid.svg",
        spareImg: "/b4.svg",
    },

    {
        id: 5,
        title: "Specializing in Comp. Neuroscience & Spiking Neural Networks.",
        description: "What have I been up to lately?",
        img: "/b5.svg",
        spareImg: "/grid.svg",
    },
    {
        id: 6,
        title: "See my Previous Work Experiences",
        description: "",
        img: "",
        spareImg: "",
    },
];

export const leftTechStack = ["Python", "C++", "C", "Haskell"]; // 'Prolog'
export const rightTechStack = ["React.js", "Next.js", "Typescript", "Java"]; // 'Javascript'

export const projects = [
    {
        id: 1,
        title: "NIJobs",
        des: "A platform for companies to advertise their job opportunities to University of Porto's students.",
        img: "/projects/nijobs.png",
        iconLists: [
            "/technologies/react.svg",
            "/technologies/typescript.svg",
            "/technologies/nodejs.svg",
            "/technologies/docker.svg",
            "/technologies/material-ui.svg",
        ],
        link: "https://github.com/NIAEFEUP/nijobs-fe",
        linkText: "Check Repository",
    },
    {
        id: 2,
        title: "SNNs to Detect Patterns of Neuronal Activity",
        des: "Exploring the Detection of relevant patterns of Neuronal Activity using Neuromorphic Hardware and Spiking NNs.",
        img: "/projects/intel-loihi.jpg",
        imgCite: "Source: Intel Corporation",
        iconLists: [
            "/technologies/python.svg",
            "/technologies/jupyter.svg",
            "/technologies/poetry.svg",
            "/technologies/numpy.svg",
            "/technologies/scikit-learn.svg",
        ],
        link: "https://github.com/monkin77/thesis-lava/tree/main",
        linkText: "Check Repository",
    },
    {
        id: 3,
        title: "Monkin's Habitat - Personal Website",
        des: "A Personal Portfolio Website, introducing myself to the world and showcasing my projects, experiences, and unique traits :)",
        img: "/projects/portfolio.png",
        iconLists: [
            "/technologies/next.svg",
            "/technologies/typescript.svg",
            "/technologies/tailwind.svg",
            "/technologies/threejs.svg",
            "/technologies/vercel.svg",
        ],
        link: "https://github.com/monkin77/personal_website",
        linkText: "Check Repository",
    },
    {
        id: 4,
        title: "Java Compiler",
        des: "A Compiler for a subset of Java (Java--), going through all compilation stages: Lexical, Syntatic, and Semantic Analysis,\
         Optimizations and Code Generation.",
        img: "/projects/java_compiler_code.png",
        iconLists: [
            "/technologies/java.svg",
            "/technologies/gradle.svg",
            "/technologies/github-white.svg",
        ],
        link: "https://github.com/monkin77/feup-comp",
        linkText: "Check Repository",
    },
];

export const testimonials: {
    quote: string;
    name: string;
    title: string;
    logo?: string;
}[] = [
    {
        quote: "Awarded a merit scholarship by Huawei for academic excellence and outstanding performance. With less than 1% selection rate, this scholarship is part of the Huawei \
        Scholarship Program, which aims to support students in their academic pursuits. I am grateful for the recognition and support from the company.",
        name: "Huawei",
        title: "Merit Scholarship",
        logo: "/companies/huawei_2.png",
    },
    {
        quote: "Carnegie Mellon Portugal sponsored my Research Project at Carnegie Mellon University in Pittsburgh, USA. This opportunity allowed me \
        to work with world-class computational neuroscientists and gain new perspectives on my research and the future of the field. The Research Scholarship \
        covered my university fees and living expenses during my stay and I'm grateful for the support from the institution.",
        name: "Carnegie Mellon Portugal",
        title: "Research Scholarship",
        logo: "/companies/cmu_2.jpg",
    },
    {
        quote: "ActInSpace is an international innovation contest sponsored by the French Space Agency and the European Space Agency. I was part of the winning team in \
        the Portuguese edition of the contest, where we ideated and explored the potential of a space-based solution for a real-world problem. The victory allowed us \
        to represent Portugal in the international final in France, where we connected with teams around the world!",
        name: "ActInSpace, ESA & CNES",
        title: "ActInSpace Portugal 2022 Winner",
        logo: "/companies/actInSpace.png",
    },
    {
        quote: "OERN, the Engineer's Syndicate of Northern Portugal, recognized the relevance of my dissertation in the field of Computational Neuroscience and awarded me a \
        Merit Grant. The participation involved presenting my work through a video presentation and a written report, fromo where 50 students were selected to receive the prize.",
        name: "OERN - Ordem dos Engenheiros Região Norte",
        title: "Merit Grant for Dissertation Work",
        logo: "/companies/oern.webp",
    },
    {
        quote: "Pmate is a high-school level national mathematics competition hosted in Portugal, where students compete in a series of mathematical challenges. \
        The purpose of the competition is to solve all the problems in the shortest time possible. Having participated multiple times, I was awarded the 2nd place \
        in both 2017 and 2018 editions.",
        name: "Pmate",
        title: "Pmate 2017 & 2018 - 2nd Place",
        logo: "/companies/pmate.png",
    },
];

export const companies: {
    id: number;
    name: string;
    img: string;
    nameImg?: string;
}[] = [
    {
        id: 1,
        name: "Huawei",
        img: "/companies/huawei.png",
        // nameImg: "/cloudName.svg",
    },
    {
        id: 2,
        name: "OERN",
        img: "/companies/oern.webp",
        // nameImg: "/appName.svg",
    },
    {
        id: 3,
        name: "CMU Portugal",
        img: "/companies/cmu_2.jpg",
        // nameImg: "/hostName.svg",
    },
    {
        id: 4,
        name: "ESA",
        img: "/companies/esa.png",
        // nameImg: "/streamName.svg",
    },
    {
        id: 5,
        name: "CNES",
        img: "/companies/cnes.png",
    },
];

export const workExperience = [
    {
        id: 1,
        title: "CERN OpenLab Intern 2023",
        desc: "Developed a novel Mobile App for the Indico Project, a web-based event management system used by CERN and other research institutions. Additionally, attended \
        a series of lectures on Physics and High-Performance Computing and other CERN-related events for the 30 selected students worldwide.",
        className: "md:col-span-2",
        thumbnail: "/exp1.svg",
    },
    {
        id: 2,
        title: "Mobile App Dev - JSM Tech",
        desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
        className: "md:col-span-2", // change to md:col-span-2
        thumbnail: "/exp2.svg",
    },
    {
        id: 3,
        title: "Freelance App Dev Project",
        desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
        className: "md:col-span-2", // change to md:col-span-2
        thumbnail: "/exp3.svg",
    },
    {
        id: 4,
        title: "Lead Frontend Developer",
        desc: "Developed and maintained user-facing features using modern frontend technologies.",
        className: "md:col-span-2",
        thumbnail: "/exp4.svg",
    },
];

export const slideData: SlideCardData[] = [
    {
        title: "CERN OpenLab Intern 2023",
        dates: "June 2023 - Aug. 2023",
        company: "CERN",
        src: "experiences/cern2.jpg",
        companyLogo: "companies/cern.png",
        slideClassName: "opacity-70",
        bulletPoints: [
            "Worked on the Indico team to create a Progressive Web App that is responsible for checking-in participants and \
            managing events.", 
            "Attended physics and computing lectures/workshops on various state-of-the-art topics and participated on events \
            related to CERN, along with the 30 selected students around the world."
        ]
    },
    {
        title: "Computational Neuroscience Researcher",
        dates: "Oct. 2024 - Dec. 2024",
        company: "Carnegie Mellon University",
        src: "experiences/cmu.jpg",
        companyLogo: "companies/cmu.png",
        slideClassName: "opacity-70 ",
        bulletPoints: [
            "Apply data science and machine learning techniques to analyze the Dynamic Range Adaptation phenomenon in the \
            Primary Motor Cortex, under the supervision of Prof. Steven Chase.", 
        ]
    },
    {
        title: "Computational Neuroscience Researcher",
        dates: "Sept. 2023 - July 2024",
        company: "i3s",
        src: "experiences/i3s.png",
        companyLogo: "companies/i3s.png",
        slideClassName: "opacity-70",
        bulletPoints: [
            "Explore the viability of Neuromorphic Computing as a highly efficient alternative to traditional computing systems to \
                perform the real-time analysis of neuronal activity",
            "Work with Intel's neuromorphic chip (Loihi) and the LAVA framework to design neuromorphic algorithms that \
                characterize the activity of in-vitro neuronal cultures available at i3s."
        ]
    },
    {
        title: "Co-Founder",
        dates: "Oct. 2018 - Dec. 2022",
        company: "VRPortal",
        src: "experiences/vrportal.jpg",
        companyLogo: "companies/vrportal.png",
        slideClassName: "opacity-70",
        bulletPoints: [
            "Launched a Virtual Reality arcade with 7000+ customers so far, providing the first VR experiences in Portugal to the \
                public and achieving a 5.0 max rating in Google from more than 270 reviews."
        ]
    },
    {
        title: "Mobile Developer",
        dates: "July 2021 - July 2022",
        company: "Smartex.ai",
        src: "experiences/smartex.png",
        companyLogo: "companies/smartex.jpeg",
        slideClassName: "opacity-45",
        bulletPoints: [
            "Development of a React Native Application to manage industrial production and reduce waste. This App is installed \
                in more than 300 machines around multiple countries.",
            "Design for system reliability and fault resilience, reducing the system downtime by more than 50%",
            "Implementation of an open-source Android Module to communicate with the EsperSDK (> 91 000 Downloads)"
        ]
    },
    {
        title: "Software Engineer Intern",
        dates: "July 2022 - Aug. 2022",
        company: "Critical Software",
        src: "experiences/critical_software.jpg",
        companyLogo: "companies/critical_software.png",
        slideClassName: "opacity-70",
        bulletPoints: [
            "Overview of the areas inside the company, resulting in a final project for each one, namely: Digital Enterprise \
                Solutions (AngularJS and Quarkus), High Integrity Systems (Python) and Smart Technology Solutions (AWS)."
        ]
    },
];

export const socialMedia = [
    {
        id: 1,
        img: "/socials/github.svg",
        url: "https://github.com/monkin77",
    },
    {
        id: 2,
        img: "/socials/twitter.svg",
        url: "https://x.com/Monkinerin0",
    },
    {
        id: 3,
        img: "/socials/linked-in.svg",
        url: "https://www.linkedin.com/in/joao-mesquita7/",
    },
];

export const extendedSocialMedia = [
    {
        id: 1,
        img: "/socials/github.svg",
        url: "https://github.com/monkin77",
    },
    {
        id: 2,
        img: "/socials/instagram.svg",
        url: "https://www.instagram.com/joaogilmesquita/",
    },
    {
        id: 3,
        img: "/socials/twitter.svg",
        url: "https://x.com/Monkinerin0",
    },
    {
        id: 4,
        img: "/socials/linked-in.svg",
        url: "https://www.linkedin.com/in/joao-mesquita7/",
    },
];

