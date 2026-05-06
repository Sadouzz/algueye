import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/imgHeroHome.png"; // Remplacer par le logo de l'agence

export default function Footer() {
    const footerRef = useRef<HTMLDivElement>(null);
    const heroTextRef = useRef<HTMLHeadingElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);
    const colsRef = useRef<(HTMLDivElement | null)[]>([]);
    const marqueeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let ctx: any;
        const init = async () => {
            const { gsap } = await import('gsap');
            const { ScrollTrigger } = await import('gsap/ScrollTrigger');
            const { SplitText } = await import('gsap/SplitText');
            gsap.registerPlugin(ScrollTrigger, SplitText);

            ctx = gsap.context(() => {
                if (heroTextRef.current) {
                    const split = new SplitText(heroTextRef.current, { type: 'chars, words' });
                    gsap.from(split.chars, {
                        scrollTrigger: {
                            trigger: heroTextRef.current,
                            start: 'top 85%',
                        },
                        y: 80,
                        opacity: 0,
                        rotateX: -40,
                        stagger: 0.025,
                        duration: 0.8,
                        ease: 'power3.out',
                    });
                }

                gsap.from(colsRef.current, {
                    scrollTrigger: {
                        trigger: footerRef.current,
                        start: 'top 80%',
                    },
                    y: 40,
                    opacity: 0,
                    stagger: 0.12,
                    duration: 0.9,
                    ease: 'power2.out',
                });

                if (lineRef.current) {
                    gsap.from(lineRef.current, {
                        scrollTrigger: {
                            trigger: lineRef.current,
                            start: 'top 90%',
                        },
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
        { to: '/atelier', label: 'Notre Atelier' },
        { to: '/collections', label: 'Collections' },
        { to: '/sur-mesure', label: 'Sur-Mesure' },
        { to: '/contact', label: 'Contact' },
    ];

    const socials = [
        { href: 'https://www.instagram.com/', label: 'Instagram' },
        { href: 'https://www.pinterest.com/', label: 'Pinterest' },
        { href: 'https://www.facebook.com/', label: 'Facebook' },
    ];

    const marqueeItems = ['HAUTE COUTURE', 'SUR-MESURE', 'ÉLÉGANCE', 'ARTISANAT', 'DESIGN', 'STYLE', 'RETOUCHES'];

    return (
        <footer
            className="relative overflow-hidden bg-[#0d0d0d] text-[#f0ece4]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            ref={footerRef}
        >
            {/* ── Marquee ── */}
            <div className="overflow-hidden border-b border-[#f0ece4] bg-[#0d0d0d] py-5" aria-hidden="true">
                <div className="flex gap-0 whitespace-nowrap will-change-transform" ref={marqueeRef}>
                    {[...marqueeItems, ...marqueeItems].map((item, i) => (
                        <span
                            key={i}
                            className="flex-shrink-0 px-8 text-[clamp(1rem,2vw,1.5rem)] tracking-[0.12em] text-[#f0ece4] transition-colors duration-300 hover:text-[#cc001e]"
                        >
                            {item}
                            <span className="ml-8 align-middle text-[0.5em] text-[#cc001e]">●</span>
                        </span>
                    ))}
                </div>
            </div>

            {/* ── Divider ── */}
            <div className="mx-6 h-[1px] origin-left bg-[#f0ece4] sm:mx-12" ref={lineRef}></div>

            {/* ── Main Grid ── */}
            <div className="px-6 py-14 pb-12 sm:px-12 sm:pt-20 sm:pb-16">
                <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1.8fr] lg:gap-12">

                    {/* Brand col */}
                    <div className="flex flex-col gap-5" ref={addCol}>
                        <img src={logo} alt="Maison de Couture" className="h-14 w-14 object-contain" />
                        <p className="m-0 text-sm font-light leading-relaxed tracking-[0.02em] text-[#f0ece4]">
                            Maison de Couture,
                            <br /> Artisanat & Sur-Mesure
                        </p>
                        <a
                            href="mailto:contact@votre-agence-couture.com"
                            className="group mt-2 inline-flex self-start items-center gap-2 border border-[#f0ece4] px-5 py-3 text-[0.8rem] font-medium uppercase tracking-[0.12em] text-[#f0ece4] no-underline transition-all duration-300 hover:border-[#cc001e] hover:bg-[#cc001e] hover:text-white"
                        >
                            <span>Créons votre style</span>
                            <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-[3px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                        </a>
                    </div>

                    {/* Nav col */}
                    <div className="flex flex-col gap-6" ref={addCol}>
                        <span className="border-b border-[#cc001e] pb-3 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-[#cc001e]">Boutique & Atelier</span>
                        <nav className="flex flex-col gap-0.5">
                            {navLinks.map(({ to, label }) => (
                                <Link key={to} to={to} className="group relative flex items-center justify-between overflow-hidden border-b border-white py-2 text-[0.95rem] font-light text-white no-underline transition-colors duration-300 hover:text-[#cc001e]">
                                    <span
                                        className="relative inline-block transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] after:absolute after:left-0 after:top-full after:font-normal after:text-[#f0ece4] after:content-[attr(data-content)]"
                                        data-content={label}
                                    >
                                        {label}
                                    </span>
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Social col */}
                    <div className="flex flex-col gap-6" ref={addCol}>
                        <span className="border-b border-[#cc001e]/30 pb-3 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-[#cc001e]">Nous Suivre</span>
                        <nav className="flex flex-col gap-0.5">
                            {socials.map(({ href, label }) => (
                                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="group relative flex items-center justify-between overflow-hidden border-b border-[#f0ece4]/[0.06] py-2 text-[0.95rem] font-light text-[#f0ece4]/65 no-underline transition-colors duration-300 hover:text-[#ffae2e]">
                                    <span
                                        className="relative inline-block transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] after:absolute after:left-0 after:top-full after:font-normal after:text-[#f0ece4] after:content-[attr(data-content)]"
                                        data-content={label}
                                    >
                                        {label}
                                    </span>
                                    <svg className="h-3.5 w-3.5 shrink-0 -translate-x-1 translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Hero text col */}
                    <div className="flex flex-col gap-6 md:col-span-2 lg:col-span-1 lg:justify-end" ref={addCol}>
                        <h2
                            className="m-0 text-left text-[clamp(3.5rem,14vw,5rem)] leading-[0.95] tracking-[0.02em] text-[#f0ece4] md:text-[clamp(3rem,8vw,5rem)] lg:text-right lg:text-[clamp(2.8rem,5vw,5.5rem)]"
                            ref={heroTextRef}
                        >
                            FAÇONNER<br />
                            <span className="text-[#cc001e] [-webkit-text-stroke:0px]">VOTRE</span><br />
                            STYLE<br />
                            <span className="text-[#cc001e] [-webkit-text-stroke:0px]">SUR-MESURE</span>.
                        </h2>
                    </div>
                </div>
            </div>

            {/* ── Legal ── */}
            <div className="flex flex-col items-center justify-between gap-2 border-t border-[#f0ece4]/[0.08] px-6 py-5 text-center text-[0.7rem] uppercase tracking-[0.1em] text-[#cc001e]/60 sm:flex-row sm:gap-0 sm:px-12 sm:text-left">
                <span>© 2026 Atelier Couture — Tous droits réservés</span>
                <span>Dakar, SN</span>
            </div>
        </footer>
    );
}