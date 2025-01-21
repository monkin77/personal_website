"use client";

import { useMediaQuery } from "@/app/hooks/useMediaQuery";
import React, { useEffect, useState } from "react";

const CarouselCardDetails = ({bulletPoints}: {bulletPoints?: string[]}) => {
    const [isMediumOrLarger, setIsMediumOrLarger] = useState(false);

    const mediumOrLarger = useMediaQuery("(min-width: 768px)");
    useEffect(() => {
        setIsMediumOrLarger(mediumOrLarger);   // TailwindCSS breakpoint
    }, [mediumOrLarger]);

    return (
        isMediumOrLarger && (
            <ul className="mx-5 md:mx-14 md:mt-8">
                {bulletPoints?.map((point, index) => (
                    <li
                        key={index}
                        className="text-gray-200 mt-3 list-disc text-sm md:text-lg"
                    >
                        {point}
                    </li>
                ))}
            </ul>
        )
    );
};

export default CarouselCardDetails;
