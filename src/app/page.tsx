import Grid from "./components/Grid";
import Hero from "./components/Hero";
import RecentProjects from "./components/RecentProjects";
import { FloatingNav } from "./components/ui/FloatingNav";
import { navItems } from "./data";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Awards from "./components/Awards";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Monkin's Habitat - Personal Portfolio",
    description: "Digital Profile of João Mesquita (Monkin). A Computer Engineer from Portugal interested in Neuroscience, AI, and many more...",
    openGraph: {
        title: "Monkin's Habitat - Personal Portfolio",
        description: "Digital Profile of João Mesquita (Monkin). A Computer Engineer from Portugal interested in Neuroscience, AI, and many more...",
        type: "website",
        url: "https://monkin-habitat.vercel.app/",
        images: ["/homepage_preview.png"],
    },
}

export default function Home() {
    return (
        <main className="relative bg-background flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
            <div className="max-w-7xl w-full mb-10">
                <FloatingNav navItems={navItems} />

                <Hero />

                <Grid />

                <RecentProjects />

                <Experience />

                <Awards />

                <Footer />
            </div>
        </main>
    );
}
