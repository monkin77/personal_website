import { cn } from "@/lib/utils";

const InvertButton = ({
    title,
    icon,
    position,
    onClick,
    otherClasses,
}: {
    title: string;
    icon?: React.ReactNode;
    position?: "left" | "right";
    onClick?: () => void;
    otherClasses?: string; // type of className
}) => {
    return (
        // Button code
        <button
            className={cn(
                otherClasses,
                "px-8 py-2 rounded-md bg-teal-600 text-white font-bold transition duration-200 hover:bg-teal-400 hover:text-black border-2 border-transparent hover:border-teal-500"
            )}
            onClick={onClick}
        >
            {/* <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" /> */}
            <span
                className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg text-sm font-medium backdrop-blur-3xl gap-2 ${otherClasses}`}
            >
                {position === "left" && icon}

                {title}
                {position == "right" && icon}
            </span>
        </button>
    );
};

export default InvertButton;
