import { cn } from "@/lib/utils";
import React from "react";

const SimpleButton = ({
    title,
    onClick,
    otherClasses,
}: {
    title: string;
    onClick?: () => void;
    otherClasses?: string; // type of className
}) => {
    return (
        <button
            className={cn(
                otherClasses,
                "px-4 py-2 rounded-md border border-neutral-300 bg-neutral-100 text-neutral-500 text-sm hover:-translate-y-1 transform \
    transition duration-200 hover:shadow-md"
            )}
            onClick={onClick}
        >
            {title}
        </button>
    );
};

export default SimpleButton;
