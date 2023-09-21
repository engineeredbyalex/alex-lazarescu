// importing images
import connectm from "@/assets/projects/connectm.png"
import openweather from "@/assets/projects/openweather.png"
import wikiSearch from "@/assets/projects/wikiSearch.png"

// importing icons 
import { MdDesignServices } from "react-icons/md"
import { SlScreenDesktop } from "react-icons/sl"
import { FiSmartphone } from "react-icons/fi"

export const projects = [
    {
        id: 1,
        title: "ConnecTM",
        desc: "Website construit pentru ConnecTM",
        technologies: "React JavaScript Tailwind ReactJS",
        img: connectm,
        link: "https://connectm.netlify.app/",
        delay: "2"
    },
    {
        id: 2,
        title: "OpenWeater",
        desc: "Website construit cu OpenWeatehr api",
        technologies: "Html Css JavaScript",
        img: openweather,
        link: "https://openweather-zenny.netlify.app",
        delay: "3"
    },
    {
        id: 3,
        title: "WikiSearch",
        desc: "Website construit cu Wikipedia api",
        technologies: "Html Css JavaScript",
        img: wikiSearch,
        link: "https://wikisearch-zenny.netlify.app/",
        delay: "4"
    },
]
export const services = [
    {
        id: 1,
        title: "UI/UX Design",
        content: "Designuri personalizate, perfect adaptate la toate tipurile de dispozitive.",
        icon: <MdDesignServices size={40} />,
        pret1: "50 EUR",
        pret2: "75 EUR",
        pret3: "100 EUR",
    },
    {
        id: 2,
        title: "Web Development",
        content: "Site personalizat, cu un design UI/UX inclus, creat la cerere.",
        icon: <SlScreenDesktop size={40} />,
        pret1: "250 EUR",
        pret2: "500 EUR",
        pret3: "750 EUR",
    },
    {
        id: 3,
        title: "Consultanță",
        content: "Consultăm îndeaproape cu clienții pentru a-i asista în identificarea nevoilor lor și pentru a crea soluții personalizate.",
        icon: <FiSmartphone size={40} />,
        pret1: "",
        pret2: "50 EUR/sesiune",
        pret3: "",
    }
]

export const testimonials = [
    {
        name: "Ana M.",
        review: "Colaborarea cu Alex a fost pur și simplu uimitoare. A transformat viziunea noastră în realitate și ne-a ajutat să creștem afacerea într-un mod remarcabil. Recomand cu încredere serviciile sale de top!"
    },
    {
        name: "Andrei C.",
        review: "Nu pot să spun decât cuvinte de laudă pentru munca lui Alex. Am avut nevoie de un site e-commerce și el a creat un produs care nu numai că arată minunat, dar a crescut și vânzările noastre. Excelent!"
    },
    {
        name: "Elena P.",
        review: "Alex este un expert în domeniul său! Am apelat la el pentru servicii de web design și strategii de marketing, iar rezultatele au fost uimitoare. E un profesionist pasionat și dedicat."
    },
    {
        name: "Andreea B.",
        review: "Alex a fost un consultant de încredere pentru afacerea mea. Discuțiile noastre au fost extrem de utile și au condus la soluții valoroase pentru creșterea afacerii."
    },
]
