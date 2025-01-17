import React from "react";
import { BentoGrid } from "./ui/BentoGrid";

function Grid() {
    return (
        <section id="about">
            <BentoGrid />
                {/* {aboutGridItems.map((item, idx) => (
                    <BentoGridItem
                        key={idx}
                        id={item.id}
                        title={item.title}
                        description={item.description}
                        className={item.className}
                        img={item.img}
                        animIdx={item.animIdx}
                        imgClassName={item.imgClassName}
                        titleClassName={item.titleClassName}
                        spareImg={item.spareImg}
                    />
                ))} */}
        </section>
    );
}

export default Grid;
