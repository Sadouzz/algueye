import a7 from '../assets/tenues/A7.jpeg';
import a8 from '../assets/tenues/A8.jpeg';
import a9 from '../assets/tenues/A9.jpeg';
import b1 from '../assets/tenues/B1.jpeg';
import b2 from '../assets/tenues/B2.jpeg';
import b3 from '../assets/tenues/B3.jpeg';
import b4 from '../assets/tenues/B4.jpeg';
import h1 from '../assets/tenues/H1.jpeg';
import h2 from '../assets/tenues/H2.jpeg';
import img1 from '../assets/tenues/DSC00990.jpeg';
import img2 from '../assets/tenues/DSC01985.jpeg';
import ng1 from '../assets/tenues/naru-goor/img1.png';
import ng2 from '../assets/tenues/naru-goor/img2.png';
import ng3 from '../assets/tenues/naru-goor/img3.png';
import ng4 from '../assets/tenues/naru-goor/img4.png';
import ng5 from '../assets/tenues/naru-goor/img5.png';

export const tenues = [
    // ── Haute Couture ───────────────────────────────────────────────────────
    {
        id: "tenue-hc-1",
        slug: '/collections/tenues/grand-boubou-imperial',
        title: 'Grand Boubou Impérial',
        tags: ['HAUTE COUTURE', 'BRODERIE'],
        image: a7,
        description: "Un grand boubou d'exception avec des finitions à la main, incarnant le prestige de la haute couture africaine."
    },
    {
        id: "tenue-hc-2",
        slug: '/collections/tenues/ensemble-royal',
        title: 'Ensemble Royal',
        tags: ['HAUTE COUTURE', 'SOIE'],
        image: a8,
        description: "Pièce maîtresse alliant matières nobles et coupe millimétrée."
    },
    {
        id: "tenue-hc-3",
        slug: '/collections/tenues/tunique-prestige',
        title: 'Tunique Prestige',
        tags: ['HAUTE COUTURE', 'SUR MESURE'],
        image: a9,
        description: "Tunique majestueuse ornée de détails dorés signature."
    },
    // ── Prêt-à-Porter ───────────────────────────────────────────────────────
    {
        id: "tenue-pap-1",
        slug: '/collections/tenues/costume-croise',
        title: 'Costume Croisé',
        tags: ['PRET-A-PORTER', 'TAILLEUR'],
        image: b1,
        description: "L'élégance moderne avec une structure impeccable pour le quotidien."
    },
    {
        id: "tenue-pap-2",
        slug: '/collections/tenues/veste-structuree',
        title: 'Veste Structurée',
        tags: ['PRET-A-PORTER', 'COTON'],
        image: b2,
        description: "Une veste contemporaine qui sublime chaque silhouette."
    },
    {
        id: "tenue-pap-3",
        slug: '/collections/tenues/ensemble-casual-chic',
        title: 'Ensemble Casual Chic',
        tags: ['PRET-A-PORTER', 'LIN'],
        image: b3,
        description: "Le confort du lin couplé à une esthétique raffinée."
    },
    {
        id: "tenue-pap-4",
        slug: '/collections/tenues/tunique-minimaliste',
        title: 'Tunique Minimaliste',
        tags: ['PRET-A-PORTER', 'ESSENTIEL'],
        image: b4,
        description: "Une pièce épurée, parfaite pour toutes les occasions."
    },
    // ── Soirée ──────────────────────────────────────────────────────────────
    {
        id: "tenue-soiree-1",
        slug: '/collections/tenues/robe-emeraude',
        title: 'Robe de Soirée Émeraude',
        tags: ['SOIREE', 'SEQUINS'],
        image: h1,
        description: "Une robe éblouissante conçue pour les tapis rouges."
    },
    {
        id: "tenue-soiree-2",
        slug: '/collections/tenues/smoking-velours',
        title: 'Smoking Velours',
        tags: ['SOIREE', 'ELEGANCE'],
        image: h2,
        description: "L'allure ultime avec ce smoking aux finitions luxueuses."
    },
    // ── Maroquinerie & Accessoires ──────────────────────────────────────────
    {
        id: "tenue-maroq-1",
        slug: '/collections/tenues/sac-signature',
        title: 'Sac Signature',
        tags: ['MAROQUINERIE', 'CUIR'],
        image: img1,
        description: "Sac structuré façonné dans les cuirs les plus précieux."
    },
    {
        id: "tenue-maroq-2",
        slug: '/collections/tenues/pochette-soiree',
        title: 'Pochette Soirée',
        tags: ['ACCESSOIRES', 'PREMIUM'],
        image: img2,
        description: "Le détail incontournable pour parfaire votre tenue."
    },
    // ── Naru Goor ──────────────────────────────────────────────────────────
    {
        id: "tenue-ng-1",
        slug: '/collections/tenues/naru-goor-classique',
        title: 'Le Classique',
        tags: ['NARU GOOR', 'HOMME'],
        image: ng1,
        description: "La pièce iconique Naru Goor : coupe impeccable, tissu noble, prestance absolue."
    },
    {
        id: "tenue-ng-2",
        slug: '/collections/tenues/naru-goor-tradition',
        title: 'Tradition Royale',
        tags: ['NARU GOOR', 'HOMME', 'TRADITION'],
        image: ng2,
        description: "Un hommage à la tradition sénégalaise avec des finitions modernes et épurées."
    },
    {
        id: "tenue-ng-3",
        slug: '/collections/tenues/naru-goor-boubou-moderne',
        title: 'Boubou Moderne',
        tags: ['NARU GOOR', 'HOMME', 'BOUBOU'],
        image: ng3,
        description: "Le boubou revisité pour l'homme d'aujourd'hui — fluidité et allure à la fois."
    },
    {
        id: "tenue-ng-4",
        slug: '/collections/tenues/naru-goor-prestige',
        title: 'Prestige Dakar',
        tags: ['NARU GOOR', 'HOMME', 'SUR MESURE'],
        image: ng4,
        description: "Une silhouette taillée sur mesure pour les grandes occasions, incarnant le luxe discret."
    },
    {
        id: "tenue-ng-5",
        slug: '/collections/tenues/naru-goor-essentiel',
        title: "L'Essentiel",
        tags: ['NARU GOOR', 'HOMME'],
        image: ng5,
        description: "La pièce du quotidien qui ne sacrifie rien à l'élégance — sobre, ajustée, impeccable."
    },
];