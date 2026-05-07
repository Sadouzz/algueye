import img1 from '../assets/imgInsta/img1.jpeg';
import img2 from '../assets/imgInsta/img2.jpeg';
import img3 from '../assets/imgInsta/img3.jpeg';
import img4 from '../assets/imgInsta/img4.jpeg';
import img5 from '../assets/imgInsta/img5.jpeg';
import img6 from '../assets/imgInsta/img6.jpeg';
import img7 from '../assets/imgInsta/img7.jpeg';
import img8 from '../assets/imgInsta/img8.jpeg';

export type EventCategory = 'Tous' | 'Défilés' | 'Expositions' | 'Ateliers' | 'Ventes privées';

export interface Event {
    id: number;
    slug: string;
    category: Exclude<EventCategory, 'Tous'>;
    date: string;
    month: string;
    year: string;
    title: string;
    subtitle: string;
    location: string;
    city: string;
    description: string;
    status: 'À venir' | 'Passé';
    featured?: boolean;
    image: string;
}

export const EVENTS: Event[] = [
    {
        id: 1,
        slug: 'collection-ete-2026-harmattan',
        category: 'Défilés',
        date: '14',
        month: 'Juin',
        year: '2026',
        title: 'Collection Été 2026 — « Harmattan »',
        subtitle: 'Grand défilé de Haute Couture',
        location: 'Place du Souvenir Africain',
        city: 'Dakar, Sénégal',
        description: "Une collection qui célèbre la force et la douceur du vent de l'Est. Silhouettes fluides, broderies d'or et tissus aériens composent ce voyage esthétique au cœur de l'Afrique de l'Ouest.",
        status: 'À venir',
        featured: true,
        image: img1,
    },
    {
        id: 2,
        slug: 'exposition-racines',
        category: 'Expositions',
        date: '01',
        month: 'Jul',
        year: '2025',
        title: 'Exposition « Racines »',
        subtitle: 'Installation artistique & mode',
        location: 'Musée des Civilisations Noires',
        city: 'Dakar, Sénégal',
        description: 'Une exposition immersive explorant les racines culturelles de notre esthétique. Photographies, tissus ancestraux et pièces de la maison dialoguent dans un parcours inédit.',
        status: 'À venir',
        image: img2,
    },
    {
        id: 3,
        slug: 'atelier-broderie-art',
        category: 'Ateliers',
        date: '20',
        month: 'Jul',
        year: '2025',
        title: "Atelier Broderie d'Art",
        subtitle: 'Session intensive sur-mesure',
        location: 'Atelier Algueye',
        city: 'Dakar, Sénégal',
        description: 'Un atelier intensif de deux jours pour découvrir les techniques de broderie traditionnelles et contemporaines utilisées par nos artisans. Places limitées à 12 participants.',
        status: 'À venir',
        image: img3,
    },
    {
        id: 4,
        slug: 'vente-privee-archives',
        category: 'Ventes privées',
        date: '05',
        month: 'Août',
        year: '2025',
        title: 'Vente Privée — Archives & Pièces Rares',
        subtitle: 'Événement sur invitation',
        location: 'Studio Algueye',
        city: 'Dakar, Sénégal',
        description: "Accès exclusif à nos archives et pièces rares de collections passées. Une opportunité unique d'acquérir des pièces de collector à des tarifs préférentiels pour nos clients fidèles.",
        status: 'À venir',
        image: img4,
    },
    {
        id: 5,
        slug: 'simod-2025',
        category: 'Défilés',
        date: '10',
        month: 'Sep',
        year: '2025',
        title: 'Semaine Internationale de la Mode de Dakar',
        subtitle: 'Participation officielle',
        location: 'King Fahd Palace',
        city: 'Dakar, Sénégal',
        description: 'Algueye présente sa nouvelle collection sur la scène de la SIMOD, aux côtés des plus grandes maisons africaines contemporaines. Le clou de la saison mode à Dakar.',
        status: 'À venir',
        featured: true,
        image: img5,
    },
    {
        id: 6,
        slug: 'paris-african-fashion-week',
        category: 'Expositions',
        date: '15',
        month: 'Nov',
        year: '2024',
        title: 'Paris African Fashion Week',
        subtitle: 'Exposition & présentation de collection',
        location: 'Grand Palais Éphémère',
        city: 'Paris, France',
        description: 'Algueye a présenté sa collection « Sahelian Nights » dans le cadre de la PAFW, accueillie par un public international et plusieurs éditeurs de presse internationale.',
        status: 'Passé',
        image: img6,
    },
    {
        id: 7,
        slug: 'collection-printemps-2024-savane',
        category: 'Défilés',
        date: '22',
        month: 'Mar',
        year: '2024',
        title: 'Collection Printemps 2024 — « Savane »',
        subtitle: 'Défilé Prêt-à-Porter',
        location: 'Monument de la Renaissance',
        city: 'Dakar, Sénégal',
        description: 'Le retour aux terres. Une collection Prêt-à-Porter entièrement teintée à la main, inspirée des ocres et des verts de la savane sénégalaise en saison sèche.',
        status: 'Passé',
        image: img7,
    },
    {
        id: 8,
        slug: 'workshop-draping-construction',
        category: 'Ateliers',
        date: '08',
        month: 'Fév',
        year: '2024',
        title: 'Workshop Draping & Construction',
        subtitle: 'Masterclass avec les ateliers',
        location: 'Atelier Algueye',
        city: 'Dakar, Sénégal',
        description: 'Initiation aux techniques de draping sur corps et de construction de patrons. Un atelier pensé pour les étudiants en mode et les professionnels souhaitant approfondir leur savoir-faire.',
        status: 'Passé',
        image: img8,
    },
];

export const CATEGORIES: EventCategory[] = ['Tous', 'Défilés', 'Expositions', 'Ateliers', 'Ventes privées'];
