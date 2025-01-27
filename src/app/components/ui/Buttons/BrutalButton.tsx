import { cn } from "@/lib/utils";
import React from "react";

const BrutalButton = ({
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
                "px-8 py-0.5  border-2 border-black dark:border-white uppercase bg-white text-black transition duration-200 \
                text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] \
                dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)])}"
            )}
            onClick={onClick}
        >
            {title}
        </button>
    );
};

export default BrutalButton;
