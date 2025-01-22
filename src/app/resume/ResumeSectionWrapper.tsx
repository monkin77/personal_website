import React from "react";
import Divider from "../components/ui/Divider";
import { TracingBeam } from "../components/ui/TracingBeam";

const ResumeSectionWrapper = ({
    children,
    title,
    icon,
    id,
}: {
    children: JSX.Element;
    title: string;
    icon: JSX.Element;
    id: string;
}) => {
    return (
        <TracingBeam>
            <div
                className="max-w-[90vw] min-h-96 flex flex-col items-center mt-10 md:mt-15 px-1 py-5 md:px-5 md:py-10 relative"
                id={id}
            >
                {" "}
                {/* bg-black-100 */}
                <div className="flex flex-row items-center">
                    <div className="w-16 h-16 relative text-teal-500">
                        {icon}
                    </div>
                    <h1 className="ml-3 md:ml-6 tracking-wide text-2xl md:text-5xl">
                        {title}
                    </h1>
                </div>
                <Divider className="w-10/12 md:w-8/12" />
                {children}
            </div>
        </TracingBeam>
    );
};

export default ResumeSectionWrapper;
