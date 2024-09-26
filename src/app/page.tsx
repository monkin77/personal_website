import Grid from "./components/Grid";
import Hero from "./components/Hero";
import { FloatingNav } from "./components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";

const navItems : {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[] = [
    {
        name: "Home",
        link: "/",
        icon: <FaHome />,
    },
];

export default function Home() {
    return (
        <main className="relative bg-background flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
            <div className="max-w-7xl w-full">
                <FloatingNav navItems={navItems} />

                <Hero />

                <Grid />
            </div>
        </main>
    );
}
