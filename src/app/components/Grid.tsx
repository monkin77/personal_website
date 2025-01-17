import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { aboutGridItems } from "../data";

function Grid() {
    return (
        <section id="about">
            <BentoGrid>
                {aboutGridItems.map((item, idx) => (
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
                ))}
            </BentoGrid>
        </section>
    );
}

export default Grid;
