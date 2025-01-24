"use client";
import { FaArrowRight } from "react-icons/fa";
import { useState, useRef, useId, useEffect } from "react";
import { cn } from "@/lib/utils";
import CarouselCardDetails from "./CarouselCardDetails";
import Image from "next/image";

export interface SlideCardData {
    title: string;
    bulletPoints?: string[];
    src: string;
    slideClassName?: string;
    dates: string;
    company: string;
    companyLogo: string;
    logoW: number; // Logo Width
    logoH: number; // Logo Height
}

interface SlideProps {
    slide: SlideCardData;
    index: number;
    current: number;
    handleSlideClick: (index: number) => void;
}

const Slide = ({ slide, index, current, handleSlideClick }: SlideProps) => {
    const slideRef = useRef<HTMLLIElement>(null);

    const xRef = useRef(0);
    const yRef = useRef(0);
    const frameRef = useRef<number>();

    useEffect(() => {
        const animate = () => {
            if (!slideRef.current) return;

            const x = xRef.current;
            const y = yRef.current;

            slideRef.current.style.setProperty("--x", `${x}px`);
            slideRef.current.style.setProperty("--y", `${y}px`);

            frameRef.current = requestAnimationFrame(animate);
        };

        frameRef.current = requestAnimationFrame(animate);

        return () => {
            if (frameRef.current) {
                cancelAnimationFrame(frameRef.current);
            }
        };
    }, []);

    const handleMouseMove = (event: React.MouseEvent) => {
        const el = slideRef.current;
        if (!el) return;

        const r = el.getBoundingClientRect();
        xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
        yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
    };

    const handleMouseLeave = () => {
        xRef.current = 0;
        yRef.current = 0;
    };

    const imageLoaded = (event: React.SyntheticEvent<HTMLImageElement>) => {
        event.currentTarget.style.opacity = "1";
    };

    const { src, bulletPoints, title, slideClassName } = slide;

    return (
        <div className="[perspective:1200px] [transform-style:preserve-3d]">
            <li
                ref={slideRef}
                className="flex flex-1 flex-col relative text-white opacity-100 transition-all duration-300 ease-in-out w-[70vmin] h-[70vmin] mx-[4vmin] z-10 "
                onClick={() => handleSlideClick(index)}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    transform:
                        current !== index
                            ? "scale(0.98) rotateX(8deg)"
                            : "scale(1) rotateX(0deg)",
                    transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                    transformOrigin: "bottom",
                }}
            >
                <div
                    className={cn(
                        slideClassName,
                        "absolute top-0 left-0 w-full h-full bg-[#1D1F2F] rounded-[1%] overflow-hidden transition-all duration-150 ease-out"
                    )}
                    style={{
                        transform:
                            current === index
                                ? "translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)"
                                : "none",
                    }}
                >
                    <Image
                        className="absolute inset-0 w-[120%] h-[120%] object-cover transition-opacity duration-600 ease-in-out"
                        style={{
                            opacity: current === index ? 1 : 0.5,
                        }}
                        alt={title}
                        src={src}
                        onLoad={imageLoaded}
                        loading="eager"
                        decoding="sync"
                        height={4096}
                        width={3072}
                        /* TODO: CHeck if this is okay */
                    />
                    {current === index && (
                        <div className="absolute inset-0 bg-black/30 transition-all duration-1000" />
                    )}
                </div>

                {/* Text Area */}
                <article
                    className={`relative transition-opacity duration-1000 ease-in-out overflow-hidden overflow-ellipsis ${
                        current === index
                            ? "opacity-100 visible"
                            : "opacity-0 invisible"
                    }`}
                >
                    <h2 className="text-lg md:text-2xl lg:text-4xl font-bold relative px-4 md:px-8 pt-4 md:pt-8 rounded">
                        {" "}
                        {/* bg-gray-900 bg-opacity-70  */}
                        {title}
                    </h2>

                    <div className="flex flex-col md:flex-row justify-between px-5 pt-3 md:px-9 align-middle">
                        <div className="flex flex-row gap-x-3 h-7 md:h-10 items-center relative">
                            <div className="h-7 md:h-10 relative">
                                <Image
                                    src={slide.companyLogo}
                                    alt={`${slide.company} logo`}
                                    className="h-full w-auto"
                                    width={slide.logoW}
                                    height={slide.logoH}
                                />
                            </div>

                            <h4 className="text-sm md:text-base lg:text-lg font-semibold">
                                {slide.company}
                            </h4>
                        </div>

                        <h4 className="text-sm md:text-lg lg:text-xl font-semibold mt-2 md:mt-0">
                            {slide.dates}
                        </h4>
                    </div>

                    {/* Render if screen is at least at md breakpoint */}
                    <CarouselCardDetails bulletPoints={bulletPoints} />
                </article>
            </li>
        </div>
    );
};

interface CarouselControlProps {
    type: string;
    title: string;
    handleClick: () => void;
}

const CarouselControl = ({
    type,
    title,
    handleClick,
}: CarouselControlProps) => {
    return (
        <button
            className={`w-10 h-10 flex items-center mx-2 justify-center bg-neutral-200 dark:bg-neutral-800 border-3 border-transparent rounded-full focus:border-[#6D64F7] focus:outline-none hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200 ${
                type === "previous" ? "rotate-180" : ""
            }`}
            title={title}
            onClick={handleClick}
        >
            <FaArrowRight className="text-neutral-600 dark:text-neutral-200" />
        </button>
    );
};

interface CarouselProps {
    slides: SlideCardData[];
}

export function CarouselCard({ slides }: CarouselProps) {
    const [current, setCurrent] = useState(0);

    const handlePreviousClick = () => {
        const previous = current - 1;
        setCurrent(previous < 0 ? slides.length - 1 : previous);
    };

    const handleNextClick = () => {
        const next = current + 1;
        setCurrent(next === slides.length ? 0 : next);
    };

    const handleSlideClick = (index: number) => {
        if (current !== index) {
            setCurrent(index);
        }
    };

    const id = useId();

    return (
        <>
            <div
                className="relative w-[70vmin] h-[70vmin] mx-auto"
                aria-labelledby={`carousel-heading-${id}`}
            >
                <ul
                    className="absolute flex mx-[-4vmin] transition-transform duration-1000 ease-in-out"
                    style={{
                        transform: `translateX(-${
                            current * (100 / slides.length)
                        }%)`,
                    }}
                >
                    {slides.map((slide, index) => (
                        <Slide
                            key={index}
                            slide={slide}
                            index={index}
                            current={current}
                            handleSlideClick={handleSlideClick}
                        />
                    ))}
                </ul>

                {/* Div with same height as absolute container */}
                <div className="" />
            </div>

            <div className="flex flex-row justify-center w-full mt-4 md:mt-8">
                <CarouselControl
                    type="previous"
                    title="Go to previous slide"
                    handleClick={handlePreviousClick}
                />

                <CarouselControl
                    type="next"
                    title="Go to next slide"
                    handleClick={handleNextClick}
                />
            </div>
        </>
    );
}
