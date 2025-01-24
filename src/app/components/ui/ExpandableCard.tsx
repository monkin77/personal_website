"use client";

import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/app/hooks/useOutsideClick";
import { FaCalendarAlt } from "react-icons/fa";

export type cardsContentProps = {
    title: string;
    location: string;
    date: string;
    src: string;
    landscapeSrc: string;
    ctaText: string;
    ctaLink: string;
    content: () => JSX.Element;
    animID: string;
};

type ExpandableCardProps = {
    cards: cardsContentProps[];
};

export function ExpandableCards({ cards }: ExpandableCardProps) {
    const [active, setActive] = useState<
        (typeof cards)[number] | boolean | null
    >(null);
    const ref = useRef<HTMLDivElement>(null);
    const id = useId();

    useEffect(() => {
        function onKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setActive(false);
            }
        }

        if (active && typeof active === "object") {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [active]);

    useOutsideClick(ref, () => setActive(null));

    return (
        <>
            <AnimatePresence>
                {active && typeof active === "object" && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/20 h-full w-full z-10"
                    />
                )}
            </AnimatePresence>

            <AnimatePresence>
                {active && typeof active === "object" ? (
                    <div className="fixed inset-0 grid place-items-center z-[100]">
                        <motion.button
                            key={`button-${active.title}-${id}`}
                            layout
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            exit={{
                                opacity: 0,
                                transition: {
                                    duration: 0.05,
                                },
                            }}
                            className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
                            onClick={() => setActive(null)}
                        >
                            <CloseIcon />
                        </motion.button>
                        <motion.div
                            layoutId={`card-${active.animID}-${id}`}
                            ref={ref}
                            className="w-full max-w-3xl h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
                        >
                            <motion.div
                                layoutId={`image-${active.animID}-${id}`}
                            >
                                <img
                                    // priority
                                    src={active.landscapeSrc}
                                    alt={active.title}
                                    className="w-full h-60 lg:h-60 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                                />
                            </motion.div>

                            <div className="h-full">
                                <div className="flex justify-between items-start p-4">
                                    <div className="w-4/5">
                                        <motion.h3
                                            layoutId={`title-${active.animID}-${id}`}
                                            className="font-bold text-neutral-700 dark:text-neutral-200"
                                        >
                                            {active.title}
                                        </motion.h3>

                                        <motion.p
                                            layoutId={`location-${active.animID}-${id}`}
                                            className="text-neutral-600 dark:text-neutral-400 text-left md:text-lg md:mt-2"
                                        >
                                            {active.location}
                                        </motion.p>
                                    </div>

                                    {active.ctaLink != "" && (
                                        <motion.a
                                            layoutId={`button-${active.animID}-${id}`}
                                            href={active.ctaLink}
                                            target="_blank"
                                            className="text-sm rounded-full font-bold bg-green-500 text-white w-32 md:w-48 py-3 text-center my-2"
                                            title={active.ctaLink}
                                        >
                                            {active.ctaText}
                                        </motion.a>
                                    )}
                                </div>

                                <div className="px-4 flex flex-row items-center">
                                    <FaCalendarAlt className="text-teal-500 text-lg" />

                                    <motion.h3
                                        layoutId={`date-${active.animID}-${id}`}
                                        className="font-medium text-neutral-800 dark:text-neutral-200 ml-3"
                                    >
                                        {active.date}
                                    </motion.h3>
                                </div>

                                <div className="pt-4 relative px-4 pb-4">
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="text-neutral-600 text-xs md:text-sm lg:text-base h-fit pb-10 flex flex-col items-start gap-4 overflow-auto 
                                        dark:text-neutral-400 [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                                    >
                                        {typeof active.content === "function"
                                            ? active.content()
                                            : active.content}
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                ) : null}
            </AnimatePresence>

            <ul className="w-full mx-auto gap-4">
                {cards.map((card, idx) => (
                    <motion.div
                        layoutId={`card-${card.animID}-${id}`}
                        key={`card-${card.title}-${id}`}
                        onClick={() => setActive(card)}
                        className="flex flex-col md:flex-row md:justify-between items-center justify-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl
                        cursor-pointer relative h-72 md:h-48 pt-1 md:pt-0 md:p-6 md:bg-teal-950 md:bg-opacity-50 mb-2"
                    >
                        <div className="flex gap-3 md:gap-4 flex-col md:flex-row items-center md:items-start">
                            <motion.div layoutId={`image-${card.animID}-${id}`}>
                                <img
                                    src={card.src}
                                    alt={card.title}
                                    className="w-32 aspect-square rounded-lg object-contain object-top"
                                />
                            </motion.div>
                            <div className="md:p-1">
                                <motion.h3
                                    layoutId={`title-${card.animID}-${id}`}
                                    className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left md:text-xl"
                                >
                                    {card.title}
                                </motion.h3>

                                <motion.p
                                    layoutId={`location-${card.animID}-${id}`}
                                    className="text-neutral-600 dark:text-neutral-400 text-center md:text-left md:text-lg md:mt-2 max-w-xl"
                                >
                                    {card.location}
                                </motion.p>
                            </div>
                        </div>

                        <div className="flex flex-col h-full md:px-1 md:py-4 md:justify-between md:w-48">
                            <motion.h3
                                layoutId={`date-${card.animID}-${id}`}
                                className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left md:mt-3"
                            >
                                {card.date}
                            </motion.h3>

                            <motion.button
                                layoutId={`button-${card.animID}-${id}`}
                                className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black
                                mt-1 md:mt-0 md:mb-4"
                            >
                                Learn More
                            </motion.button>
                        </div>
                    </motion.div>
                ))}
            </ul>
        </>
    );
}

export const CloseIcon = () => {
    return (
        <motion.svg
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            exit={{
                opacity: 0,
                transition: {
                    duration: 0.05,
                },
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 text-black"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
        </motion.svg>
    );
};
