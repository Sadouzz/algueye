import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/imgHeroHome.png';

export default function Footer() {
    const footerRef = useRef<HTMLElement>(null);
    const heroTextRef = useRef<HTMLHeadingElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);
    const colsRef = useRef<(HTMLDivElement | null)[]>([]);
    const marqueeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let ctx: any;
        const init = async () => {
            const { gsap } = await import('gsap');
            const { ScrollTrigger } = await import('gsap/ScrollTrigger');
            // const { SplitText } = await import('gsap/SplitText');
            gsap.registerPlugin(ScrollTrigger);

            ctx = gsap.context(() => {
                if (heroTextRef.current) {
                    gsap.from(heroTextRef.current, {
                        scrollTrigger: { trigger: heroTextRef.current, start: 'top 85%' },
                        y: 50,
                        opacity: 0,
                        duration: 1,
                        ease: 'power3.out',
                    });
                }

                gsap.from(colsRef.current, {
                    scrollTrigger: { trigger: footerRef.current, start: 'top 80%' },
                    y: 40,
                    opacity: 0,
                    stagger: 0.12,
                    duration: 0.9,
                    ease: 'power2.out',
                });

                if (lineRef.current) {
                    gsap.from(lineRef.current, {
                        scrollTrigger: { trigger: lineRef.current, start: 'top 90%' },
                        scaleX: 0,
                        transformOrigin: 'left center',
                        duration: 1.2,
                        ease: 'expo.out',
                    });
                }

                if (marqueeRef.current) {
                    gsap.to(marqueeRef.current, {
                        scrollTrigger: {
                            trigger: marqueeRef.current,
                            start: 'top bottom',
                            end: 'bottom top',
                            scrub: true,
                        },
                        x: -60,
                        ease: 'none',
                    });
                }
            }, footerRef);
        };
        init();
        return () => ctx && ctx.revert();
    }, []);

    const addCol = (el: HTMLDivElement | null) => {
        if (el && !colsRef.current.includes(el)) colsRef.current.push(el);
    };

    const navLinks = [
        { to: '/', label: 'Accueil' },
        { to: '/about', label: 'Notre Maison' },
        { to: '/collections', label: 'Collections' },
        { to: '/events', label: 'Événements' },
        { to: '/contact', label: 'Contact' },
    ];

    const socials = [
        { href: 'https://www.instagram.com/', label: 'Instagram' },
        { href: 'https://www.pinterest.com/', label: 'Pinterest' },
        { href: 'https://www.facebook.com/', label: 'Facebook' },
    ];

    const marqueeItems = [
        'HAUTE COUTURE', 'SUR-MESURE', 'ÉLÉGANCE', 'ARTISANAT',
        'DAKAR', 'STYLE', 'RETOUCHES', 'LUXE AFRICAIN',
    ];

    return (
        <footer
            ref={footerRef}
            style={{ fontFamily: "'DM Sans', sans-serif", overflow: 'hidden', position: 'relative' }}
            className="relative bg-black text-white"
        >
            {/* ── Marquee ─────────────────────────────────────── */}
            <div
                style={{
                    overflow: 'hidden',
                    borderBottom: '1px solid rgba(201,168,76,0.15)',
                    padding: '1.25rem 0',
                }}
                aria-hidden="true"
            >
                <div
                    ref={marqueeRef}
                    style={{ display: 'flex', gap: 0, whiteSpace: 'nowrap', willChange: 'transform' }}
                >
                    {[...marqueeItems, ...marqueeItems].map((item, i) => (
                        <span
                            key={i}
                            style={{
                                flexShrink: 0,
                                padding: '0 2rem',
                                fontSize: 'clamp(0.85rem, 2vw, 1.2rem)',
                                letterSpacing: '0.18em',
                                color: 'rgba(201,168,76,0.35)',
                                textTransform: 'uppercase',
                                transition: 'color 0.3s',
                                fontFamily: "'DM Sans', sans-serif",
                                fontWeight: 300,
                            }}
                        >
                            {item}
                            <span
                                style={{
                                    marginLeft: '2rem',
                                    verticalAlign: 'middle',
                                    fontSize: '0.5em',
                                    color: 'var(--color-gold)',
                                }}
                            >
                                ●
                            </span>
                        </span>
                    ))}
                </div>
            </div>

            {/* ── Divider ─────────────────────────────────────── */}
            <div
                ref={lineRef}
                style={{
                    height: '1px',
                    background: 'rgba(201,168,76,0.2)',
                    margin: '0 3rem',
                    transformOrigin: 'left center',
                }}
            />

            {/* ── Main Grid ───────────────────────────────────── */}
            <div style={{ padding: 'clamp(3.5rem, 8vw, 5rem) clamp(1.5rem, 5vw, 3rem) clamp(3rem, 6vw, 4rem)' }}>
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'clamp(180px, 25%, 280px) 1fr 1fr 1.6fr',
                        gap: 'clamp(2rem, 4vw, 4rem)',
                        alignItems: 'start',
                    }}
                    className="footer-grid"
                >
                    {/* ── Brand ─────────────────────────────────── */}
                    <div
                        ref={addCol}
                        style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
                    >
                        <img
                            src={logo}
                            alt="Algueye"
                            style={{ width: '56px', height: '56px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
                        />
                        <p
                            style={{
                                fontFamily: "'DM Sans', sans-serif",
                                fontSize: '0.875rem',
                                fontWeight: 300,
                                lineHeight: 1.8,
                                color: 'rgba(255,255,255,0.8)',
                                letterSpacing: '0.02em',
                                margin: 0,
                            }}
                        >
                            Maison de Couture,<br />
                            Artisanat &amp; Sur-Mesure,<br />
                            Dakar, Sénégal.
                        </p>
                        <a
                            href="mailto:contact@algueye-dakar.com"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.6rem',
                                fontSize: '0.7rem',
                                fontWeight: 500,
                                letterSpacing: '0.15em',
                                textTransform: 'uppercase',
                                color: 'var(--color-gold)',
                                textDecoration: 'none',
                                border: '1px solid rgba(201,168,76,0.6)',
                                padding: '0.75rem 1.25rem',
                                transition: 'background 0.3s, color 0.3s, border-color 0.3s',
                                alignSelf: 'flex-start',
                            }}
                            onMouseEnter={e => {
                                const el = e.currentTarget as HTMLAnchorElement;
                                el.style.background = 'var(--color-gold)';
                                el.style.color = '#000';
                                el.style.borderColor = 'var(--color-gold)';
                            }}
                            onMouseLeave={e => {
                                const el = e.currentTarget as HTMLAnchorElement;
                                el.style.background = 'transparent';
                                el.style.color = 'var(--color-gold)';
                                el.style.borderColor = 'rgba(201,168,76,0.6)';
                            }}
                        >
                            <span>Créons votre style</span>
                            <svg
                                style={{ width: '12px', height: '12px', transition: 'transform 0.3s' }}
                                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                            >
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                            </svg>
                        </a>
                    </div>

                    {/* ── Navigation ────────────────────────────── */}
                    <div
                        ref={addCol}
                        style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
                    >
                        <span
                            style={{
                                fontFamily: "'DM Sans', sans-serif",
                                fontSize: '0.6rem',
                                fontWeight: 500,
                                letterSpacing: '0.22em',
                                textTransform: 'uppercase',
                                color: 'var(--color-gold)',
                                paddingBottom: '0.75rem',
                                borderBottom: '1px solid rgba(201,168,76,0.2)',
                            }}
                        >
                            Boutique &amp; Atelier
                        </span>
                        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
                            {navLinks.map(({ to, label }) => (
                                <Link
                                    key={to}
                                    to={to}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        padding: '0.55rem 0',
                                        borderBottom: '1px solid rgba(255,255,255,0.06)',
                                        fontSize: '0.9rem',
                                        fontWeight: 300,
                                        color: 'rgba(255,255,255,0.8)',
                                        textDecoration: 'none',
                                        transition: 'color 0.25s',
                                        overflow: 'hidden',
                                    }}
                                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-gold-light)')}
                                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.8)')}
                                >
                                    <span>{label}</span>
                                    <svg
                                        style={{ width: '10px', height: '10px', opacity: 0.4 }}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                                    >
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* ── Réseaux ───────────────────────────────── */}
                    <div
                        ref={addCol}
                        style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
                    >
                        <span
                            style={{
                                fontFamily: "'DM Sans', sans-serif",
                                fontSize: '0.6rem',
                                fontWeight: 500,
                                letterSpacing: '0.22em',
                                textTransform: 'uppercase',
                                color: 'var(--color-gold)',
                                paddingBottom: '0.75rem',
                                borderBottom: '1px solid rgba(201,168,76,0.2)',
                            }}
                        >
                            Nous Suivre
                        </span>
                        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
                            {socials.map(({ href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        padding: '0.55rem 0',
                                        borderBottom: '1px solid rgba(255,255,255,0.06)',
                                        fontSize: '0.9rem',
                                        fontWeight: 300,
                                        color: 'rgba(255,255,255,0.8)',
                                        textDecoration: 'none',
                                        transition: 'color 0.25s',
                                    }}
                                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-gold-light)')}
                                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.8)')}
                                >
                                    <span>{label}</span>
                                    <svg
                                        style={{ width: '10px', height: '10px', opacity: 0.4 }}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                                    >
                                        <line x1="7" y1="17" x2="17" y2="7" />
                                        <polyline points="7 7 17 7 17 17" />
                                    </svg>
                                </a>
                            ))}
                        </nav>

                        {/* Adresse */}
                        <div style={{ marginTop: '1rem' }}>
                            <span
                                style={{
                                    fontFamily: "'DM Sans', sans-serif",
                                    fontSize: '0.6rem',
                                    letterSpacing: '0.18em',
                                    textTransform: 'uppercase',
                                    color: 'var(--color-gold)',
                                    display: 'block',
                                    marginBottom: '0.5rem',
                                }}
                            >
                                Atelier
                            </span>
                            <p
                                style={{
                                    fontFamily: "'DM Sans', sans-serif",
                                    fontSize: '0.85rem',
                                    fontWeight: 300,
                                    color: 'rgba(255,255,255,0.7)',
                                    lineHeight: 1.7,
                                    margin: 0,
                                }}
                            >
                                Médina, Dakar<br />
                                Sénégal
                            </p>
                        </div>
                    </div>

                    {/* ── Hero Text ─────────────────────────────── */}
                    <div
                        ref={addCol}
                        style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-end' }}
                    >
                        <h2
                            ref={heroTextRef}
                            style={{
                                fontFamily: "'Cormorant Garamond', Georgia, serif",
                                fontSize: 'clamp(2.8rem, 5vw, 5.5rem)',
                                fontWeight: 300,
                                lineHeight: 0.95,
                                letterSpacing: '0.02em',
                                color: '#fff',
                                margin: 0,
                                textAlign: 'right',
                            }}
                        >
                            FAÇONNER<br />
                            <em style={{ color: 'var(--color-gold)', fontStyle: 'italic' }}>VOTRE</em><br />
                            STYLE<br />
                            <span style={{ color: 'rgba(201,168,76,0.5)', fontSize: '0.65em', letterSpacing: '0.1em' }}>SUR-MESURE</span>
                        </h2>
                        <div
                            style={{
                                width: '60px',
                                height: '1px',
                                background: 'var(--color-gold)',
                                marginTop: '2rem',
                            }}
                        />
                    </div>
                </div>
            </div>

            {/* ── Gold separator ──────────────────────────────── */}
            <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.4), transparent)', margin: '0 3rem' }} />

            {/* ── Legal ───────────────────────────────────────── */}
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '1.25rem clamp(1.5rem, 5vw, 3rem)',
                    fontSize: '0.65rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.5)',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                }}
            >
                <span>© 2025 Algueye Dakar — Tous droits réservés</span>
                <span style={{ color: 'rgba(201,168,76,0.6)' }}>Dakar, SN</span>
            </div>

            {/* ── Responsive styles ───────────────────────────── */}
            <style>{`
                @media (max-width: 1024px) {
                    .footer-grid {
                        grid-template-columns: 1fr 1fr !important;
                        gap: 2.5rem !important;
                    }
                    .footer-grid > div:last-child {
                        grid-column: 1 / -1;
                        align-items: flex-start !important;
                    }
                    .footer-grid > div:last-child h2 {
                        text-align: left !important;
                        font-size: clamp(3rem, 8vw, 5rem) !important;
                    }
                }
                @media (max-width: 640px) {
                    .footer-grid {
                        grid-template-columns: 1fr !important;
                        gap: 2rem !important;
                    }
                }
            `}</style>
        </footer>
    );
}