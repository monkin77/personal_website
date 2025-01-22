import Image from 'next/image';
import React from 'react'
import { FaHome } from 'react-icons/fa'
import { FloatingDock } from './FloatingDock';
import { cn } from '@/lib/utils';

const extendedResumeNavItems: {
    title: string;
    icon: JSX.Element;
    href: string;
}[] = [
    {
        title: "Top",
        icon: (
            <FaHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#",
    },
    {
        title: "Profile",
        icon: (
            <FaHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#profile",
    },
    {
        title: "Experience",
        icon: (
            <FaHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#experience",
    },
    {
        title: "Projects",
        icon: (
            <Image
                src="https://assets.aceternity.com/logo-dark.png"
                width={20}
                height={20}
                alt="Aceternity Logo"
            />
        ),
        href: "#projects",
    },
    {
        title: "Awards",
        icon: (
            <FaHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#awars",
    },

    {
        title: "Hobbies",
        icon: (
            <FaHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#hobbies",
    },
    {
        title: "Contact",
        icon: (
            <FaHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#contact",
    },
];

const FloatingDockWrapper = ({className}: {className?: string}) => {
  return (
    <div className={cn(className, "flex items-center justify-center w-full")}>
        <FloatingDock
            mobileClassName="translate-y-20" // only for demo, remove for production
            items={extendedResumeNavItems}
        />
    </div>
  )
}

export default FloatingDockWrapper