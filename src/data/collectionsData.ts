// servicesData.js
import a7 from "../assets/tenues/a7.jpg";
import a8 from "../assets/tenues/a8.jpg";
import a9 from "../assets/tenues/a9.jpg";
import b1 from "../assets/tenues/b1.jpg";
import { tenues } from "./tenuesData";

export const collections = [
    {
        id: "haute-couture",
        title: "Haute Couture",
        subtitle: "L'ART DE L'EXCELLENCE",
        content:
            "Création de pièces uniques sur mesure, alliant savoir-faire artisanal exceptionnel, broderies minutieuses et silhouettes avant-gardistes pour une élégance absolue.",
        keys: [
            "Fait main",
            "Soieries rares",
            "Broderies d'art",
            "Sur-mesure",
            "Lignes architecturales",
            "Héritage artisanal",
            "Détails précieux",
            "Avant-garde",
            "Conception visionnaire",
        ],
        miniTitleWithBar: "PIÈCES PHARES HAUTE COUTURE",
        img: a7,
        projects: [
            tenues[0],
            tenues[0],
            tenues[0],
            tenues[0],
        ],
    },

    {
        id: "pret-a-porter",
        title: "Prêt-à-Porter",
        subtitle: "L'ÉLÉGANCE AU QUOTIDIEN",
        content:
            "Une garde-robe contemporaine et sophistiquée qui redéfinit le luxe moderne, conçue pour sublimer l'allure avec fluidité, confort et audace.",
        keys: [
            "Coupes structurées",
            "Matières nobles",
            "Silhouettes fluides",
            "Palette intemporelle",
            "Vestiaire moderne",
            "Finitions luxueuses",
            "Confort absolu",
        ],
        miniTitleWithBar: "SÉLECTION PRÊT-À-PORTER",
        // projects: [
        //     projectsData[4],
        //     projectsData[5],
        //     projectsData[3],
        // ],
        img: a8,
        // projects: [
        //     projectsData[5]
        // ],
    },

    {
        id: "maroquinerie",
        title: "Maroquinerie & Accessoires",
        subtitle: "LE DÉTAIL SIGNATURE",
        content:
            "Sacs iconiques, ceintures sculptées et accessoires de caractère, façonnés dans les cuirs les plus précieux pour parfaire chaque silhouette.",
        keys: [
            "Cuirs d'exception",
            "Savoir-faire sellier",
            "Pièces métalliques dorées",
            "Design iconique",
            "Sacs structurés",
            "Esthétique intemporelle",
            "Finitions cousues main",
        ],
        miniTitleWithBar: "CRÉATIONS MAROQUINERIE",
        img: a9,
        projects: [],
    },

    {
        id: "tenues-soiree",
        title: "Tenues de Soirée",
        subtitle: "GLAMOUR & PRESTIGE",
        content:
            "Des robes de gala somptueuses et des smokings revisités, pensés pour capturer la lumière et laisser une empreinte inoubliable lors d'événements prestigieux.",
        keys: [
            "Tissus chatoyants",
            "Drapés majestueux",
            "Cristaux et sequins",
            "Jeux de transparence",
            "Volumes théâtraux",
            "Tapis rouge",
            "Allure sculpturale",
            "Édition limitée",
        ],
        miniTitleWithBar: "CRÉATIONS DE SOIRÉE",
        img: b1,
        // projects: [
        //     projectsData[1],
        //     projectsData[2],
        //     projectsData[3],
        //     // projectsData[3],
        //     // projectsData[4],
        //     // projectsData[6],
        //     // projectsData[7],
        // ],
    },
];