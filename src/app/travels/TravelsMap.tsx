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
        end: { lat: 42.653 + latOffset, lng: 18.138 }, // Dubrovnik
    },
    {
        start: portoCoords,
        end: { lat: 38.0613 + latOffset, lng: 23.730 }, // Athens
    },
    {
        start: portoCoords,
        end: { lat: 40.060 + latOffset, lng: 28.117 }, // Turkey
    },
    {
        start: portoCoords,
        end: { lat: 51.423 + latOffset, lng: -0.163 }, // London
    },
    {
        start: portoCoords,
        end: { lat: 53.342 + latOffset, lng: -6.334 }, // Dublin
    },
    {
        start: portoCoords,
        end: { lat: 55.922 + latOffset, lng: -3.222 }, // Scotland
    },
    {
        start: portoCoords,
        end: { lat: 50.247 + latOffset, lng: 20.023 }, // Krakow
    },
    {
        start: portoCoords,
        end: { lat: 59.301 + latOffset/2, lng: 24.971 }, // Estonia
    },
    {
        start: portoCoords,
        end: { lat: 60.160, lng: 25.048 }, // Finland
    },
    {
        start: portoCoords,
        end: { lat: 59.301, lng: 10.664 }, // Oslo, Norway
    },
    {
        start: portoCoords,
        end: { lat: 59.489, lng: 14.905 }, // Sweden
    },
    {
        start: portoCoords,
        end: { lat: 59.693 + latOffset, lng: 36.497 }, // Russia
    },

    /* Asia */
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
        end: { lat: 20.528 + latOffset, lng: 122.929 }, // Taiwan
    },
    {
        start: portoCoords,
        end: { lat: 35.852 + latOffset, lng: 139.746 }, // Japan
    },
    {
        start: portoCoords,
        end: { lat: 14.057 + latOffset, lng: 100.726 }, // Thailand
    },
    {
        start: portoCoords,
        end: { lat: 21.072 + latOffset, lng: 105.503 }, // Vietnam
    },
    {
        start: portoCoords,
        end: { lat: 3.022 + latOffset, lng: 101.702 }, // Kuala Lumpur, Malaysia
    },
    {
        start: portoCoords,
        end: { lat: 1.297 + latOffset, lng: 103.869 }, // Singapore
    },



    /* America */
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
        end: { lat: 40.748 + latOffset, lng: -73.967 }, // NY
    },
    {
        start: portoCoords,
        end: { lat: 42.400 + latOffset, lng: -71.045 }, //  Boston
    },
    {
        start: portoCoords,
        end: { lat: 38.415 + latOffset, lng: -79.829 }, //  West Virginia
    },
    {
        start: portoCoords,
        end: { lat: 43.743 + latOffset, lng: -79.399 }, //  Toronto
    },
    {
        start: portoCoords,
        end: { lat: 38.875 + latOffset, lng: -76.975 }, //  Washington DC
    },




    /* Africa */
    {
        start: portoCoords,
        end: { lat: 31.613 + latOffset, lng: -7.911 }, // Morocco
    },

    /* Islands */
    {
        start: portoCoords,
        end: { lat: 16.714 + latOffset, lng: -22.919 }, // Cape Verde
    },
    {
        start: portoCoords,
        end: { lat: 28.212 + latOffset, lng: -16.630 }, // Tenerife, Canary Islands
    },
    {
        start: portoCoords,
        end: { lat: 32.727 + latOffset, lng: -16.975 }, // Madeira
    },
    {
        start: portoCoords,
        end: { lat: 37.773 + latOffset, lng: -25.480 }, // Açores
    },
];

export default TravelsMap;
