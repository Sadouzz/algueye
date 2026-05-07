import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PageHeroSection from '../components/sections/PageHeroSection';
import useIsDesktop from '../hooks/useIsDesktop';

gsap.registerPlugin(ScrollTrigger);

// ─── Types ────────────────────────────────────────────────────
type EventCategory = 'Tous' | 'Défilés' | 'Expositions' | 'Ateliers' | 'Ventes privées';

interface Event {
    id: number;
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
}

// ─── Données ──────────────────────────────────────────────────
const EVENTS: Event[] = [
    {
        id: 1,
        category: 'Défilés',
        date: '14',
        month: 'Juin',
        year: '2025',
        title: 'Collection Été 2025 — « Harmattan »',
        subtitle: 'Grand défilé de Haute Couture',
        location: 'Place du Souvenir Africain',
        city: 'Dakar, Sénégal',
        description: "Une collection qui célèbre la force et la douceur du vent de l'Est. Silhouettes fluides, broderies d'or et tissus aériens composent ce voyage esthétique au cœur de l'Afrique de l'Ouest.",
        status: 'À venir',
        featured: true,
    },
    {
        id: 2,
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
    },
    {
        id: 3,
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
    },
    {
        id: 4,
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
    },
    {
        id: 5,
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
    },
    {
        id: 6,
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
    },
    {
        id: 7,
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
    },
    {
        id: 8,
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
    },
];

const CATEGORIES: EventCategory[] = ['Tous', 'Défilés', 'Expositions', 'Ateliers', 'Ventes privées'];

const STATUS_STYLES: Record<Event['status'], React.CSSProperties> = {
    'À venir': { background: 'rgba(201,168,76,0.15)', color: 'var(--color-gold-dark)', border: '1px solid rgba(201,168,76,0.3)' },
    'Passé': { background: 'rgba(0,0,0,0.06)', color: '#6b7280', border: '1px solid rgba(0,0,0,0.1)' },
};

// ─── Composant Carte Événement ──────────────────────────────
function EventCard({ event, isDesktop }: { event: Event; isDesktop: boolean }) {
    const isPast = event.status === 'Passé';

    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: isDesktop ? '90px 1fr' : '1fr',
                gap: isDesktop ? '0' : '1.5rem',
                borderTop: '1px solid rgba(0,0,0,0.1)',
                paddingTop: '2rem',
                paddingBottom: '2rem',
                opacity: isPast ? 0.7 : 1,
                transition: 'opacity 0.3s',
            }}
            onMouseEnter={e => { if (!isPast) (e.currentTarget as HTMLDivElement).style.opacity = '1'; }}
            onMouseLeave={e => { if (isPast) (e.currentTarget as HTMLDivElement).style.opacity = '0.7'; }}
        >
            {/* Date Block */}
            {isDesktop && (
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        paddingTop: '4px',
                        borderRight: '1px solid rgba(139,105,20,0.2)',
                        paddingRight: '2rem',
                    }}
                >
                    <span
                        style={{
                            fontFamily: 'var(--font-serif)',
                            fontSize: '2.5rem',
                            fontWeight: 300,
                            color: isPast ? '#9ca3af' : 'var(--color-gold-dark)',
                            lineHeight: 1,
                        }}
                    >
                        {event.date}
                    </span>
                    <span
                        style={{
                            fontFamily: 'var(--font-sans)',
                            fontSize: '0.6rem',
                            letterSpacing: '0.15em',
                            textTransform: 'uppercase',
                            color: '#9ca3af',
                            marginTop: '0.4rem',
                        }}
                    >
                        {event.month} {event.year}
                    </span>
                </div>
            )}

            {/* Content */}
            <div style={{ paddingLeft: isDesktop ? '2rem' : '0' }}>
                {/* Mobile: date inline */}
                {!isDesktop && (
                    <div style={{ marginBottom: '0.75rem' }}>
                        <span
                            style={{
                                fontFamily: 'var(--font-sans)',
                                fontSize: '0.65rem',
                                letterSpacing: '0.15em',
                                textTransform: 'uppercase',
                                color: 'var(--color-gold-dark)',
                            }}
                        >
                            {event.date} {event.month} {event.year}
                        </span>
                    </div>
                )}

                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
                    <div style={{ flex: 1 }}>
                        {/* Badge catégorie + statut */}
                        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                            <span
                                style={{
                                    fontFamily: 'var(--font-sans)',
                                    fontSize: '0.6rem',
                                    letterSpacing: '0.15em',
                                    textTransform: 'uppercase',
                                    color: '#6b7280',
                                    fontWeight: 400,
                                }}
                            >
                                {event.category}
                            </span>
                            <span
                                style={{
                                    fontFamily: 'var(--font-sans)',
                                    fontSize: '0.55rem',
                                    letterSpacing: '0.15em',
                                    textTransform: 'uppercase',
                                    padding: '3px 10px',
                                    borderRadius: '2px',
                                    fontWeight: 500,
                                    ...STATUS_STYLES[event.status],
                                }}
                            >
                                {event.status}
                            </span>
                            {event.featured && (
                                <span
                                    style={{
                                        fontFamily: 'var(--font-sans)',
                                        fontSize: '0.55rem',
                                        letterSpacing: '0.15em',
                                        textTransform: 'uppercase',
                                        padding: '3px 10px',
                                        borderRadius: '2px',
                                        fontWeight: 600,
                                        background: 'rgba(139,105,20,0.12)',
                                        color: 'var(--color-gold-dark)',
                                        border: '1px solid rgba(139,105,20,0.4)',
                                    }}
                                >
                                    ✦ Événement phare
                                </span>
                            )}
                        </div>

                        {/* Titre */}
                        <h3
                            style={{
                                fontFamily: 'var(--font-serif)',
                                fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
                                fontWeight: 300,
                                lineHeight: 1.2,
                                color: '#000',
                                marginBottom: '0.4rem',
                            }}
                        >
                            {event.title}
                        </h3>
                        <p
                            style={{
                                fontFamily: 'var(--font-sans)',
                                fontSize: '0.8rem',
                                color: '#6b7280',
                                marginBottom: '1rem',
                                letterSpacing: '0.05em',
                            }}
                        >
                            {event.subtitle}
                        </p>

                        {/* Description */}
                        <p
                            style={{
                                fontFamily: 'var(--font-sans)',
                                fontSize: '0.9rem',
                                lineHeight: 1.75,
                                color: '#374151',
                                maxWidth: '620px',
                                marginBottom: '1rem',
                            }}
                        >
                            {event.description}
                        </p>

                        {/* Lieu */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#8B6914" strokeWidth="2">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                            </svg>
                            <span
                                style={{
                                    fontFamily: 'var(--font-sans)',
                                    fontSize: '0.75rem',
                                    color: '#6b7280',
                                    letterSpacing: '0.05em',
                                }}
                            >
                                {event.location} — <em>{event.city}</em>
                            </span>
                        </div>
                    </div>

                    {/* CTA */}
                    {!isPast && (
                        <div style={{ flexShrink: 0, alignSelf: 'center' }}>
                            <button className="btn-outline" style={{ whiteSpace: 'nowrap' }}>
                                <span>S'inscrire</span>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

// ─── Composant principal ──────────────────────────────────────
export default function Evenements() {
    const isDesktop = useIsDesktop();
    const [activeCategory, setActiveCategory] = useState<EventCategory>('Tous');
    const listRef = useRef<HTMLDivElement>(null);
    const featuredRef = useRef<HTMLDivElement>(null);

    const filtered = activeCategory === 'Tous'
        ? EVENTS
        : EVENTS.filter(e => e.category === activeCategory);

    const upcoming = filtered.filter(e => e.status === 'À venir');
    const past = filtered.filter(e => e.status === 'Passé');

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (listRef.current) {
                gsap.from(listRef.current.querySelectorAll('.event-row'), {
                    y: 30,
                    opacity: 0,
                    stagger: 0.08,
                    duration: 0.7,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: listRef.current,
                        start: 'top 80%',
                        once: true,
                    },
                });
            }

            if (featuredRef.current) {
                gsap.from(featuredRef.current, {
                    opacity: 0,
                    y: 60,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: featuredRef.current,
                        start: 'top 85%',
                        once: true,
                    },
                });
            }
        });

        return () => ctx.revert();
    }, [activeCategory]);

    return (
        <>
            {/* ── Hero ──────────────────────────────────────── */}
            <PageHeroSection
                contentMiniBar="AGENDA ALGUEYE"
                firstTitle="Événements & rencontres,"
                secondTitle="Vivez l'univers Algueye, de Dakar au monde."
            />

            {/* ── Événement phare en vedette ────────────────── */}
            {EVENTS.filter(e => e.featured && e.status === 'À venir').length > 0 && (
                <section className="bg-black py-20!" ref={featuredRef}>
                    <div className={`container`}>
                        <div className="relative flex w-full flex-col-reverse ">
                            <h2 className="uppercase font-bold text-balance text-4xl lg:text-7xl! block">
                                Événement
                                <em style={{ color: 'var(--color-gold-dark)' }}> phare</em>
                            </h2>
                            <span className="w-full rotate-[-2deg] font-serif text-gold font-quickbrush mb-3! xl:-mb-4 text-4xl lg:text-6xl">
                                Showcase
                            </span>
                        </div>

                        {EVENTS.filter(e => e.featured && e.status === 'À venir').slice(0, 1).map(event => (
                            <div
                                key={event.id}
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: isDesktop ? '1fr 1fr' : '1fr',
                                    gap: 'clamp(2rem, 5vw, 5rem)',
                                    alignItems: 'center',
                                    border: '1px solid rgba(201,168,76,0.2)',
                                    padding: 'clamp(2rem, 5vw, 4rem)',
                                }}
                            >
                                {/* Bloc gauche: infos */}
                                <div>
                                    <div style={{ marginBottom: '2rem' }}>
                                        <span
                                            style={{
                                                fontFamily: 'var(--font-sans)',
                                                fontSize: '0.6rem',
                                                letterSpacing: '0.2em',
                                                textTransform: 'uppercase',
                                                color: 'var(--color-gold)',
                                                display: 'block',
                                                marginBottom: '0.5rem',
                                            }}
                                        >
                                            {event.category}
                                        </span>
                                        <h2
                                            style={{
                                                fontFamily: 'var(--font-serif)',
                                                fontSize: 'clamp(1.8rem, 4vw, 3.2rem)',
                                                fontWeight: 300,
                                                lineHeight: 1.15,
                                                color: '#fff',
                                                marginBottom: '0.75rem',
                                            }}
                                        >
                                            {event.title}
                                        </h2>
                                        <p
                                            style={{
                                                fontFamily: 'var(--font-sans)',
                                                fontSize: '0.85rem',
                                                color: 'rgba(255,255,255,0.5)',
                                                letterSpacing: '0.08em',
                                                marginBottom: '1.5rem',
                                            }}
                                        >
                                            {event.subtitle}
                                        </p>
                                        <p
                                            style={{
                                                fontFamily: 'var(--font-sans)',
                                                fontSize: '0.95rem',
                                                lineHeight: 1.8,
                                                color: 'rgba(255,255,255,0.7)',
                                                marginBottom: '2rem',
                                            }}
                                        >
                                            {event.description}
                                        </p>
                                    </div>
                                    <a href="#inscription" className="btn-gold">
                                        <span>Réserver ma place</span>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>

                                {/* Bloc droit: date + lieu */}
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '2rem',
                                        borderLeft: isDesktop ? '1px solid rgba(201,168,76,0.2)' : 'none',
                                        paddingLeft: isDesktop ? 'clamp(2rem, 4vw, 4rem)' : '0',
                                        borderTop: !isDesktop ? '1px solid rgba(201,168,76,0.2)' : 'none',
                                        paddingTop: !isDesktop ? '2rem' : '0',
                                    }}
                                >
                                    {[
                                        { label: 'Date', value: `${event.date} ${event.month} ${event.year}` },
                                        { label: 'Lieu', value: event.location },
                                        { label: 'Ville', value: event.city },
                                        { label: 'Accès', value: 'Entrée libre sur inscription' },
                                    ].map(({ label, value }) => (
                                        <div key={label}>
                                            <p
                                                style={{
                                                    fontFamily: 'var(--font-sans)',
                                                    fontSize: '0.6rem',
                                                    letterSpacing: '0.2em',
                                                    textTransform: 'uppercase',
                                                    color: 'var(--color-gold)',
                                                    marginBottom: '0.4rem',
                                                }}
                                            >
                                                {label}
                                            </p>
                                            <p
                                                style={{
                                                    fontFamily: 'var(--font-serif)',
                                                    fontSize: '1.1rem',
                                                    fontWeight: 300,
                                                    color: '#fff',
                                                    letterSpacing: '0.02em',
                                                }}
                                            >
                                                {value}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* ── Liste des événements (fond blanc) ─────────── */}
            <section className="bg-white py-20! text-black">
                <div className={isDesktop ? 'px-12!' : 'px-5'} style={{ maxWidth: 'var(--container)', margin: '0 auto' }}>

                    {/* Filtres par catégorie */}
                    <div
                        style={{
                            display: 'flex',
                            gap: '0',
                            marginBottom: 'clamp(3rem, 5vw, 5rem)',
                            borderBottom: '1px solid rgba(0,0,0,0.1)',
                            flexWrap: 'wrap',
                        }}
                    >
                        {CATEGORIES.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                style={{
                                    fontFamily: 'var(--font-sans)',
                                    fontSize: '0.65rem',
                                    letterSpacing: '0.15em',
                                    textTransform: 'uppercase',
                                    fontWeight: activeCategory === cat ? 600 : 400,
                                    color: activeCategory === cat ? '#000' : '#6b7280',
                                    background: 'none',
                                    border: 'none',
                                    borderBottom: activeCategory === cat ? '2px solid #000' : '2px solid transparent',
                                    padding: '0.75rem 1.5rem',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s',
                                    marginBottom: '-1px',
                                }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Événements À venir */}
                    {upcoming.length > 0 && (
                        <div ref={listRef} style={{ marginBottom: '5rem' }}>
                            <div className="relative flex w-full flex-col-reverse ">
                                <h2 className="uppercase font-bold text-balance text-4xl lg:text-7xl! block">
                                    Événements
                                    <em style={{ color: 'var(--color-gold-dark)' }}> À venir</em>
                                </h2>
                                <span className="w-full rotate-[-2deg] font-serif text-gold font-quickbrush mb-3! xl:-mb-4 text-4xl lg:text-6xl">
                                    Upcoming
                                </span>
                            </div>
                            {upcoming.map(event => (
                                <div key={event.id} className="event-row">
                                    <EventCard event={event} isDesktop={isDesktop} />
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Événements Passés */}
                    {past.length > 0 && (
                        <div>
                            <div className="relative flex w-full flex-col-reverse ">
                                <h2 className="uppercase font-bold text-balance text-4xl lg:text-7xl! block">
                                    Événements
                                    <em style={{ color: 'var(--color-gold-dark)' }}> Passés</em>
                                </h2>
                                <span className="w-full rotate-[-2deg] font-serif text-gold font-quickbrush mb-3! xl:-mb-4 text-4xl lg:text-6xl">
                                    Past showcase
                                </span>
                            </div>
                            {past.map(event => (
                                <div key={event.id} className="event-row">
                                    <EventCard event={event} isDesktop={isDesktop} />
                                </div>
                            ))}
                        </div>
                    )}

                    {filtered.length === 0 && (
                        <div style={{ textAlign: 'center', padding: '5rem 0' }}>
                            <p
                                style={{
                                    fontFamily: 'var(--font-serif)',
                                    fontStyle: 'italic',
                                    fontSize: '1.5rem',
                                    color: '#9ca3af',
                                }}
                            >
                                Aucun événement dans cette catégorie.
                            </p>
                        </div>
                    )}
                </div>
            </section>

            {/* ── Newsletter / Inscription (fond noir) ─────── */}
            <section
                id="inscription"
                className="bg-black py-20!"
                style={{
                    textAlign: 'center',
                    borderTop: '1px solid rgba(201,168,76,0.2)',
                }}
            >
                <div className="container" style={{ maxWidth: '1440px' }}>
                    <div className="relative flex w-full flex-col-reverse ">
                        <h2 className="uppercase font-bold text-balance text-4xl lg:text-7xl! block">
                            Restez informés des
                            <em style={{ color: 'var(--color-gold-dark)' }}> nouveaux évènements</em>
                        </h2>
                        <span className="w-full rotate-[-2deg] font-serif text-gold font-quickbrush mb-3! xl:-mb-4 text-4xl lg:text-6xl">
                            Newsletter
                        </span>
                    </div>
                    <h2
                        style={{
                            fontFamily: 'var(--font-serif)',
                            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                            fontWeight: 300,
                            lineHeight: 1.15,
                            color: '#fff',
                            marginBottom: '1rem',
                        }}
                    >
                        Ne manquez aucun<br />
                        <em style={{ color: 'var(--color-gold)' }}>événement Algueye</em>
                    </h2>
                    <p
                        style={{
                            fontFamily: 'var(--font-sans)',
                            fontSize: '0.95rem',
                            lineHeight: 1.75,
                            color: 'rgba(255,255,255,0.55)',
                            marginBottom: '2.5rem',
                        }}
                    >
                        Inscrivez-vous à notre agenda privé et recevez les invitations en avant-première.
                    </p>

                    <form
                        onSubmit={e => e.preventDefault()}
                        style={{ display: 'flex', gap: '0', flexWrap: 'wrap', justifyContent: 'center' }}
                    >
                        <input
                            type="email"
                            placeholder="votre@email.com"
                            style={{
                                fontFamily: 'var(--font-sans)',
                                fontSize: '0.85rem',
                                padding: '0.9rem 1.5rem',
                                background: 'rgba(255,255,255,0.06)',
                                border: '1px solid rgba(201,168,76,0.3)',
                                borderRight: 'none',
                                color: '#fff',
                                width: 'clamp(200px, 60%, 340px)',
                                letterSpacing: '0.02em',
                                outline: 'none',
                            }}
                        />
                        <button
                            type="submit"
                            className="btn-gold"
                            style={{ borderRadius: '0' }}
                        >
                            <span>S'abonner</span>
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
}
