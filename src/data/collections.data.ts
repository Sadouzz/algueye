// servicesData.js
import a7 from "../assets/tenues/A7.jpeg";
import a8 from "../assets/tenues/A8.jpeg";
import a9 from "../assets/tenues/A9.jpeg";
import b1 from "../assets/tenues/B1.jpeg";
import ng1 from "../assets/tenues/naru-goor/img1.png";
import { tenues } from "./tenues.data.ts";

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
            tenues[0], // tenue-hc-1
            tenues[1], // tenue-hc-2
            tenues[2], // tenue-hc-3
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
        img: a8,
        projects: [
            tenues[3], // tenue-pap-1
            tenues[4], // tenue-pap-2
            tenues[5], // tenue-pap-3
            tenues[6], // tenue-pap-4
        ],
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
        projects: [
            tenues[9], // tenue-maroq-1
            tenues[10], // tenue-maroq-2
        ],
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
        projects: [
            tenues[7], // tenue-soiree-1
            tenues[8], // tenue-soiree-2
        ],
    },

    {
        id: "naru-goor",
        title: "Naru Goor",
        subtitle: "L'ÉLÉGANCE MASCULINE",
        content:
            "Naru Goor, la sous-marque exclusivement masculine d'ALGUEYE, allie la rigueur du tailleur classique à l'authenticité africaine pour un homme moderne, charismatique et fier de son identité.",
        keys: [
            "Tailleur homme",
            "Coupes franches",
            "Charisme",
            "Modernité",
            "Tradition sénégalaise",
            "Prestance",
        ],
        miniTitleWithBar: "SÉLECTION NARU GOOR",
        img: ng1,
        projects: [
            tenues[11], // tenue-ng-1
            tenues[12], // tenue-ng-2
            tenues[13], // tenue-ng-3
            tenues[14], // tenue-ng-4
            tenues[15], // tenue-ng-5
        ],
    },
];