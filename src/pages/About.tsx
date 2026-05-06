import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PageHeroSection from '../components/sections/PageHeroSection';
import useIsDesktop from '../hooks/useIsDesktop';

gsap.registerPlugin(ScrollTrigger);

// ─── Données ──────────────────────────────────────────────────
const VALUES = [
    {
        icon: '✦',
        label: 'Excellence',
        desc: "Chaque point de couture, chaque coupe est pensé avec une exigence absolue. L'imperfection n'a pas sa place dans notre atelier.",
    },
    {
        icon: '◈',
        label: 'Authenticité',
        desc: "Nos créations s'ancrent dans l'identité africaine — ses textures, ses pigments, ses rythmes — pour rayonner sur la scène internationale.",
    },
    {
        icon: '◎',
        label: 'Intemporalité',
        desc: 'Nous créons contre la tyrannie des tendances. Une pièce Algueye doit traverser les décennies sans jamais vieillir.',
    },
    {
        icon: '⬡',
        label: 'Artisanat',
        desc: "Le savoir-faire est transmis de main en main. Chaque broderie, chaque drapé est l'œuvre d'artisans formés avec patience.",
    },
];

const TIMELINE = [
    { year: '2018', event: 'Naissance du concept à Dakar — un atelier, une vision.' },
    { year: '2019', event: 'Première collection capsule présentée à la FESPAD.' },
    { year: '2020', event: 'Ouverture du studio sur mesure, Médina, Dakar.' },
    { year: '2021', event: 'Participation à la semaine de la mode de Dakar.' },
    { year: '2022', event: 'Collaboration internationale — partenariat Paris & Lagos.' },
    { year: '2023', event: 'Lancement de la ligne Prêt-à-Porter « Silhouettes ».' },
    { year: '2024', event: 'Exposition permanente « Racines » — Musée des Civilisations Noires.' },
    { year: '2025', event: 'Algueye, Maison de mode reconnue sur 30+ marchés.' },
];

const STATS = [
    { num: '2018', label: 'Fondée à Dakar' },
    { num: '100+', label: 'Créations uniques' },
    { num: '30+', label: 'Pays & marchés' },
    { num: '∞', label: 'Élégance intemporelle' },
];

// ─── Composant principal ──────────────────────────────────────
export default function About() {
    const isDesktop = useIsDesktop();

    const valuesRef = useRef<HTMLDivElement>(null);
    const statsRef = useRef<HTMLDivElement>(null);
    const timelineRef = useRef<HTMLDivElement>(null);
    const manifestoRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Value cards stagger
            if (valuesRef.current) {
                gsap.from(valuesRef.current.querySelectorAll('.value-card'), {
                    y: 60,
                    opacity: 0,
                    stagger: 0.15,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: valuesRef.current,
                        start: 'top 80%',
                        once: true,
                    },
                });
            }

            // Stats counter animation
            if (statsRef.current) {
                gsap.from(statsRef.current.querySelectorAll('.stat-item'), {
                    y: 40,
                    opacity: 0,
                    stagger: 0.12,
                    duration: 0.9,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: statsRef.current,
                        start: 'top 85%',
                        once: true,
                    },
                });
            }

            // Timeline items
            if (timelineRef.current) {
                gsap.from(timelineRef.current.querySelectorAll('.timeline-item'), {
                    x: -40,
                    opacity: 0,
                    stagger: 0.1,
                    duration: 0.8,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: timelineRef.current,
                        start: 'top 80%',
                        once: true,
                    },
                });
            }

            // Manifesto reveal
            if (manifestoRef.current) {
                gsap.from(manifestoRef.current, {
                    opacity: 0,
                    y: 50,
                    duration: 1.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: manifestoRef.current,
                        start: 'top 80%',
                        once: true,
                    },
                });
            }
        });

        return () => ctx.revert();
    }, []);

    return (
        <>
            {/* ── Hero ──────────────────────────────────────── */}
            <PageHeroSection
                contentMiniBar="NOTRE MAISON"
                firstTitle="Façonner l'élégance africaine,"
                secondTitle="Depuis Dakar, pour le monde entier."
            />

            {/* ── Section Histoire (fond blanc, layout 2 col) ── */}
            <section className="bg-white section-trigger py-0! text-black">
                <div className={`${isDesktop ? 'px-12!' : 'px-5'} py-20!`}>
                    {/* Section label */}
                    <div className="section-label mb-4!">
                        <span>NOTRE HISTOIRE</span>
                    </div>

                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: isDesktop ? '1fr 1fr' : '1fr',
                            gap: 'clamp(3rem, 6vw, 6rem)',
                            alignItems: 'start',
                        }}
                    >
                        {/* Colonne gauche : texte */}
                        <div>
                            <h1
                                className="poppins split"
                                style={{
                                    fontFamily: 'var(--font-serif)',
                                    fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                                    fontWeight: 300,
                                    lineHeight: 1.1,
                                    marginBottom: '2rem',
                                    color: '#000',
                                }}
                            >
                                Une vision née<br />
                                <em style={{ color: 'var(--color-gold-dark)' }}>dans la Médina</em>
                            </h1>
                            <p
                                className="raleway"
                                style={{
                                    fontSize: '1rem',
                                    lineHeight: 1.9,
                                    color: '#374151',
                                    marginBottom: '1.5rem',
                                    maxWidth: '540px',
                                }}
                            >
                                Algueye est née d'une conviction profonde : l'Afrique possède un patrimoine stylistique unique, riche de textures, de couleurs et de savoirs ancestraux qui méritent d'être portés à l'avant-scène mondiale.
                            </p>
                            <p
                                className="raleway"
                                style={{
                                    fontSize: '1rem',
                                    lineHeight: 1.9,
                                    color: '#374151',
                                    marginBottom: '2rem',
                                    maxWidth: '540px',
                                }}
                            >
                                Fondée à Dakar, notre maison allie la rigueur du luxe européen à l'âme vibrante de l'artisanat sénégalais. Chaque collection est un dialogue entre tradition et modernité, entre héritage et innovation.
                            </p>
                            <a href="/collections" className="btn-gold">
                                <span>Découvrir nos collections</span>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>

                        {/* Colonne droite : image décorative */}
                        <div
                            style={{
                                position: 'relative',
                                aspectRatio: '4/5',
                                overflow: 'hidden',
                                background: 'linear-gradient(160deg, #f9f6ee 0%, #ede8d9 100%)',
                            }}
                        >
                            <div
                                style={{
                                    position: 'absolute',
                                    inset: 0,
                                    backgroundImage: 'radial-gradient(ellipse 70% 70% at 50% 40%, rgba(139,105,20,0.12) 0%, transparent 70%)',
                                }}
                            />
                            <div
                                style={{
                                    position: 'absolute',
                                    inset: 0,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    textAlign: 'center',
                                    gap: '1.5rem',
                                }}
                            >
                                <div style={{ width: '60px', height: '1px', background: 'var(--color-gold-dark)' }} />
                                <p
                                    style={{
                                        fontFamily: 'var(--font-serif)',
                                        fontStyle: 'italic',
                                        fontSize: 'clamp(1.3rem, 3vw, 2rem)',
                                        color: 'var(--color-gold-dark)',
                                        letterSpacing: '0.04em',
                                        lineHeight: 1.4,
                                        padding: '0 2rem',
                                    }}
                                >
                                    "L'Élégance Africaine<br />au Sommet du Monde"
                                </p>
                                <div style={{ width: '60px', height: '1px', background: 'var(--color-gold-dark)' }} />
                            </div>
                            {/* Cadre doré */}
                            <div
                                style={{
                                    position: 'absolute',
                                    top: '1.25rem',
                                    left: '1.25rem',
                                    right: '1.25rem',
                                    bottom: '1.25rem',
                                    border: '1px solid rgba(139,105,20,0.3)',
                                    pointerEvents: 'none',
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Chiffres clés (fond noir) ──────────────────── */}
            <section className="bg-black py-20!" ref={statsRef}>
                <div className={`container`}>
                    <div className="section-label" style={{ marginBottom: '3rem', justifyContent: 'center' }}>
                        <span>EN CHIFFRES</span>
                    </div>
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: isDesktop ? 'repeat(4, 1fr)' : 'repeat(2, 1fr)',
                            gap: '2px',
                        }}
                    >
                        {STATS.map(({ num, label }) => (
                            <div
                                key={label}
                                className="stat-item"
                                style={{
                                    padding: 'clamp(2rem, 5vw, 4rem) 2rem',
                                    textAlign: 'center',
                                    borderRight: '1px solid rgba(201,168,76,0.15)',
                                }}
                            >
                                <p
                                    style={{
                                        fontFamily: 'var(--font-serif)',
                                        fontSize: 'clamp(3rem, 6vw, 5rem)',
                                        fontWeight: 300,
                                        color: 'var(--color-gold)',
                                        lineHeight: 1,
                                        marginBottom: '0.75rem',
                                    }}
                                >
                                    {num}
                                </p>
                                <p
                                    style={{
                                        fontFamily: 'var(--font-sans)',
                                        fontSize: '0.65rem',
                                        letterSpacing: '0.2em',
                                        color: 'rgba(255,255,255,0.45)',
                                        textTransform: 'uppercase',
                                    }}
                                >
                                    {label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Nos Valeurs (fond blanc) ───────────────────── */}
            <section className="bg-white py-20! text-black">
                <div className={isDesktop ? 'px-12!' : 'px-5'} style={{ maxWidth: 'var(--container)', margin: '0 auto' }}>
                    <div className="section-label mb-4!">
                        <span>NOS VALEURS</span>
                    </div>
                    <h2
                        style={{
                            fontFamily: 'var(--font-serif)',
                            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                            fontWeight: 300,
                            lineHeight: 1.1,
                            marginBottom: 'clamp(3rem, 6vw, 5rem)',
                            color: '#000',
                        }}
                    >
                        Ce qui guide<br />
                        <em style={{ color: 'var(--color-gold-dark)' }}>chaque geste</em>
                    </h2>

                    <div
                        ref={valuesRef}
                        style={{
                            display: 'grid',
                            gridTemplateColumns: isDesktop ? 'repeat(4, 1fr)' : '1fr',
                            gap: '1px',
                            background: 'rgba(0,0,0,0.08)',
                        }}
                    >
                        {VALUES.map(({ icon, label, desc }) => (
                            <div
                                key={label}
                                className="value-card"
                                style={{
                                    background: '#fff',
                                    padding: 'clamp(2rem, 4vw, 3rem) clamp(1.5rem, 3vw, 2.5rem)',
                                    transition: 'background 0.3s',
                                    cursor: 'default',
                                }}
                                onMouseEnter={e => (e.currentTarget.style.background = '#f9f6ee')}
                                onMouseLeave={e => (e.currentTarget.style.background = '#fff')}
                            >
                                <div
                                    style={{
                                        fontFamily: 'var(--font-serif)',
                                        fontSize: '2rem',
                                        color: 'var(--color-gold-dark)',
                                        marginBottom: '1.5rem',
                                        lineHeight: 1,
                                    }}
                                >
                                    {icon}
                                </div>
                                <h3
                                    style={{
                                        fontFamily: 'var(--font-sans)',
                                        fontSize: '0.65rem',
                                        letterSpacing: '0.2em',
                                        fontWeight: 500,
                                        textTransform: 'uppercase',
                                        color: '#000',
                                        marginBottom: '1rem',
                                    }}
                                >
                                    {label}
                                </h3>
                                <p
                                    style={{
                                        fontFamily: 'var(--font-sans)',
                                        fontSize: '0.9rem',
                                        lineHeight: 1.8,
                                        color: '#6b7280',
                                        margin: 0,
                                    }}
                                >
                                    {desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Manifeste (fond noir) ──────────────────────── */}
            <section className="bg-black py-24!" ref={manifestoRef}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div className="section-label" style={{ justifyContent: 'center', marginBottom: '3rem' }}>
                        <span>NOTRE MANIFESTE</span>
                    </div>
                    <blockquote
                        style={{
                            fontFamily: 'var(--font-serif)',
                            fontStyle: 'italic',
                            fontSize: 'clamp(1.6rem, 4vw, 2.8rem)',
                            fontWeight: 300,
                            lineHeight: 1.4,
                            color: 'rgba(255,255,255,0.9)',
                            textAlign: 'center',
                            borderLeft: 'none',
                            padding: 0,
                            margin: 0,
                        }}
                    >
                        "Nous ne créons pas des vêtements.<br />
                        <em style={{ color: 'var(--color-gold)' }}>Nous façonnons des identités.</em><br />
                        Nous tissons des histoires qui voyagent."
                    </blockquote>
                    <div
                        style={{
                            width: '80px',
                            height: '1px',
                            background: 'var(--color-gold)',
                            margin: '3rem auto 0',
                        }}
                    />
                    <p
                        style={{
                            textAlign: 'center',
                            fontFamily: 'var(--font-sans)',
                            fontSize: '0.65rem',
                            letterSpacing: '0.25em',
                            color: 'rgba(255,255,255,0.35)',
                            textTransform: 'uppercase',
                            marginTop: '1.5rem',
                        }}
                    >
                        — Fondateur, Algueye Dakar
                    </p>
                </div>
            </section>

            {/* ── Timeline (fond blanc) ─────────────────────── */}
            <section className="bg-white py-20! text-black">
                <div className={isDesktop ? 'px-12!' : 'px-5'} style={{ maxWidth: 'var(--container)', margin: '0 auto' }}>
                    <div className="section-label mb-4!">
                        <span>NOTRE PARCOURS</span>
                    </div>
                    <h2
                        style={{
                            fontFamily: 'var(--font-serif)',
                            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                            fontWeight: 300,
                            lineHeight: 1.1,
                            marginBottom: 'clamp(3rem, 6vw, 5rem)',
                            color: '#000',
                        }}
                    >
                        Les étapes d'une<br />
                        <em style={{ color: 'var(--color-gold-dark)' }}>maison qui grandit</em>
                    </h2>

                    <div ref={timelineRef} style={{ position: 'relative' }}>
                        {/* Ligne verticale */}
                        <div
                            style={{
                                position: 'absolute',
                                left: isDesktop ? '120px' : '60px',
                                top: 0,
                                bottom: 0,
                                width: '1px',
                                background: 'rgba(139,105,20,0.25)',
                            }}
                        />

                        {TIMELINE.map(({ year, event }, i) => (
                            <div
                                key={i}
                                className="timeline-item"
                                style={{
                                    display: 'flex',
                                    gap: isDesktop ? '3rem' : '1.5rem',
                                    paddingBottom: '2.5rem',
                                    alignItems: 'flex-start',
                                    position: 'relative',
                                }}
                            >
                                {/* Année */}
                                <div
                                    style={{
                                        flexShrink: 0,
                                        width: isDesktop ? '120px' : '60px',
                                        fontFamily: 'var(--font-serif)',
                                        fontSize: isDesktop ? '1.5rem' : '1.1rem',
                                        color: 'var(--color-gold-dark)',
                                        fontWeight: 300,
                                        textAlign: 'right',
                                        paddingRight: isDesktop ? '2rem' : '1rem',
                                        lineHeight: 1,
                                        paddingTop: '2px',
                                    }}
                                >
                                    {year}
                                </div>

                                {/* Point sur la ligne */}
                                <div
                                    style={{
                                        position: 'absolute',
                                        left: isDesktop ? '112px' : '52px',
                                        top: '6px',
                                        width: '16px',
                                        height: '16px',
                                        borderRadius: '50%',
                                        background: '#fff',
                                        border: '2px solid var(--color-gold-dark)',
                                        zIndex: 1,
                                    }}
                                />

                                {/* Texte */}
                                <p
                                    style={{
                                        paddingLeft: isDesktop ? '1.5rem' : '1rem',
                                        fontFamily: 'var(--font-sans)',
                                        fontSize: '1rem',
                                        lineHeight: 1.7,
                                        color: '#374151',
                                        margin: 0,
                                    }}
                                >
                                    {event}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA Final (fond noir) ──────────────────────── */}
            <section
                className="bg-black py-24!"
                style={{
                    textAlign: 'center',
                    borderTop: '1px solid rgba(201,168,76,0.2)',
                }}
            >
                <div className="container">
                    <div className="section-label" style={{ justifyContent: 'center', marginBottom: '2rem' }}>
                        <span>TRAVAILLER AVEC NOUS</span>
                    </div>
                    <h2
                        style={{
                            fontFamily: 'var(--font-serif)',
                            fontSize: 'clamp(2rem, 5vw, 4rem)',
                            fontWeight: 300,
                            lineHeight: 1.1,
                            color: '#fff',
                            marginBottom: '2.5rem',
                        }}
                    >
                        Donnons vie à votre<br />
                        <em style={{ color: 'var(--color-gold)' }}>vision sur-mesure</em>
                    </h2>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="/contact" className="btn-gold">
                            <span>Prendre rendez-vous</span>
                        </a>
                        <a href="/collections" className="btn-outline">
                            <span>Voir les collections</span>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
