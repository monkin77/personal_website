import React from 'react'
import { FaAddressCard, FaBriefcase, FaHammer, FaRunning, FaTrophy, FaUser } from 'react-icons/fa'
import { FloatingDock } from './FloatingDock';
import { cn } from '@/lib/utils';

const extendedResumeNavItems: {
    title: string;
    icon: JSX.Element;
    href: string;
}[] = [
    {
        title: "Profile",
        icon: (
            <FaUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#",
    },
    {
        title: "Experience",
        icon: (
            <FaBriefcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#experience",
    },
    {
        title: "Projects",
        icon: <FaHammer className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
        href: "#projects",
    },
    {
        title: "Awards",
        icon: (
            <FaTrophy className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#awards",
    },

    {
        title: "Hobbies",
        icon: (
            <FaRunning className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#hobbies",
    },
    {
        title: "Contacts",
        icon: (
            <FaAddressCard className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#contacts",
    },
];

const FloatingDockWrapper = ({className}: {className?: string}) => {
  return (
    <div className={cn(className, "flex right-0 -top-16 absolute md:relative md:right-0 md:top-0")}>
        <FloatingDock
            mobileClassName="" // only for demo, remove for production
            desktopClassName=""
            items={extendedResumeNavItems}
        />
    </div>
  )
}

export default FloatingDockWrapper