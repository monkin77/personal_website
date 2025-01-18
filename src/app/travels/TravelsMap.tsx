"use client";

import React from "react";
import { WorldMap } from "../components/ui/WorldMap";

const portoCoords = {
    lat: 29.123,
    lng: -8.610630,
    label: "Porto",
};
const lisbonCoords = {
    lat: 25.123,
    lng: -9.0,
    label: "Lisbon",
};
const latOffset = - 12;   // The latitude is not correct, so we need to adjust it

const TravelsMap = () => {
    return (
        <div className="w-full md:w-11/12 aspect-[2/1] mx-auto my-25">
            <WorldMap
                dots={travelDots.sort(() => Math.random() - 0.5) /* Shuffle the Trips */ }
            />
        </div>
    );
};

const travelDots: { start: { lat: number; lng: number; label?: string; }; end: { lat: number; lng: number; label?: string; }; }[] = 
[
    /* {
        start: portoCoords,
        end: lisbonCoords,
    }, */
    {
        start: portoCoords,
        end: { lat: 40.416775 + latOffset, lng: -3.703790 }, // Madrid
    },
    {
        start: portoCoords,
        end: { lat: 48.856613 + latOffset, lng: 2.352222 }, // Paris
    },
    {
        start: portoCoords,
        end: { lat: 52.375 + latOffset, lng: 9.732 }, // Hanover
    },
    {
        start: portoCoords,
        end: { lat: 50.850 + latOffset, lng: 4.351 }, // Brussels
    },
    {
        start: portoCoords,
        end: { lat: 47.376 + latOffset, lng: 8.541 }, // Zurich
    },
    {
        start: portoCoords,
        end: { lat: 41.887 + latOffset, lng: 12.488 }, // Rome
    },
    {
        start: portoCoords,
        end: { lat: 48.196 + latOffset, lng: 16.385 }, // Vienna
    },
    {
        start: portoCoords,
        end: { lat: 22.309 + latOffset, lng: 114.175 }, // Hong Kong
    },
    {
        start: portoCoords,
        end: { lat: 39.938 + latOffset, lng: 116.438 }, // Beijing
    },
    {
        start: portoCoords,
        end: { lat: 40.444 + latOffset, lng: -79.986 }, // Pittsburgh
    },
    {
        start: portoCoords,
        end: { lat: 25.751 + latOffset, lng: -80.392 }, // Miami
    },
    {
        start: portoCoords,
        end: { lat: 31.613 + latOffset, lng: -7.911 }, // Morocco
    },
    {
        start: portoCoords,
        end: { lat: 16.714 + latOffset, lng: -22.919 }, // Cape Verde
    },
    {
        start: portoCoords,
        end: { lat: 59.673 + latOffset, lng: 12.344 }, // Sweden
    },
    {
        start: portoCoords,
        end: { lat: 59.693 + latOffset, lng: 36.497 }, // Russia
    },
    {
        start: portoCoords,
        end: { lat: 20.528 + latOffset, lng: 122.929 }, // Taiwan
    },
    {
        start: portoCoords,
        end: { lat: 35.852 + latOffset, lng: 139.746 }, // Japan
    },

];

export default TravelsMap;
