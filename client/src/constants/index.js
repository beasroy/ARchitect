

import { facebook, instagram, twitter } from "../assets/icons/index.js";

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];

export const footerLinks = [
    {
        title: "Features",
        links: [
            { name: "3D Immeraive visualisation", link: "/" },
            { name: "Customization on Real time", link: "/" },
            { name: "Real time Budgest estimation", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@architect.com", link: "mailto:customer@architect.com" },
            { name: "+911234567890", link: "tel:+911234567890"},
        ],
    },
];