export const navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
}[] = [
    { name: "Home", link: "/" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Awards", link: "#awards" },
    { name: "Experience", link: "#experience" },
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
        iconLists: ["/technologies/react.svg", "/technologies/typescript.svg", "/technologies/nodejs.svg", "/technologies/docker.svg", "/technologies/material-ui.svg"],
        link: "https://github.com/NIAEFEUP/nijobs-fe",
        linkText: "Check Repository",
    },
    {
        id: 2,
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
    {
        id: 3,
        title: "Monkin's Habitat - Personal Website",
        des: "A Personal Portfolio Website, introducing myself to the world and showcasing my projects, experiences, and unique traits :)",
        img: "/projects/portfolio.png",
        iconLists: ["/technologies/next.svg", "/technologies/typescript.svg", "/technologies/tailwind.svg", "/technologies/threejs.svg", "/technologies/vercel.svg"],
        link: "/",
        linkText: "Check Live Website",
    },
    {
        id: 4,
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
];

export const testimonials: {quote: string, name: string, title: string, logo?: string}[] = [
    {
        quote: "Awarded a merit scholarship by Huawei for academic excellence and outstanding performance. With less than 1% selection rate, this scholarship is part of the Huawei \
        Scholarship Program, which aims to support students in their academic pursuits. I am grateful for the recognition and support from the company.",
        name: "Huawei",
        title: "Merit Scholarship",
        logo: "/companies/huawei_2.png"
    },
    {
        quote: "Carnegie Mellon Portugal sponsored my Research Project at Carnegie Mellon University in Pittsburgh, USA. This opportunity allowed me \
        to work with world-class computational neuroscientists and gain new perspectives on my research and the future of the field. The Research Scholarship \
        covered my university fees and living expenses during my stay and I'm grateful for the support from the institution.",
        name: "Carnegie Mellon Portugal",
        title: "Research Scholarship",
        logo: "/companies/cmu_2.jpg"
    },
    {
        quote: "ActInSpace is an international innovation contest sponsored by the French Space Agency and the European Space Agency. I was part of the winning team in \
        the Portuguese edition of the contest, where we ideated and explored the potential of a space-based solution for a real-world problem. The victory allowed us \
        to represent Portugal in the international final in France, where we connected with teams around the world!",
        name: "ActInSpace, ESA & CNES",
        title: "ActInSpace Portugal 2022 Winner",
        logo: "/companies/actInSpace.png"
    },
    {
        quote: "OERN, the Engineer's Syndicate of Northern Portugal, recognized the relevance of my dissertation in the field of Computational Neuroscience and awarded me a \
        Merit Grant. The participation involved presenting my work through a video presentation and a written report, fromo where 50 students were selected to receive the prize.",
        name: "OERN - Ordem dos Engenheiros Região Norte",
        title: "Merit Grant for Dissertation Work",
        logo: "/companies/oern.webp"
    },
    {
        quote: "Pmate is a high-school level national mathematics competition hosted in Portugal, where students compete in a series of mathematical challenges. \
        The purpose of the competition is to solve all the problems in the shortest time possible. Having participated multiple times, I was awarded the 2nd place \
        in both 2017 and 2018 editions.",
        name: "Pmate",
        title: "Pmate 2017 & 2018 - 2nd Place",
        logo: "/companies/pmate.png"
    },
];

export const companies: {id: number, name: string, img: string, nameImg?: string}[] = [
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
        title: "Frontend Engineer Intern",
        desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
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
        url: "https://www.linkedin.com/in/joao-mesquita7/"
    },
];
