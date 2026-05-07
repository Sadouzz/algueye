import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PageHeroSection from '../components/sections/PageHeroSection';
import useIsDesktop from '../hooks/useIsDesktop';
import img1 from '../assets/img1.jpg'; // We can use this as a banner image
import Seo from '../components/seo/Seo';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
    const isDesktop = useIsDesktop();
    const infoRef = useRef<HTMLDivElement>(null);
    const formRef = useRef<HTMLFormElement>(null);
    const bannerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate info items
            if (infoRef.current) {
                gsap.from(infoRef.current.querySelectorAll('.info-item'), {
                    y: 40,
                    opacity: 0,
                    stagger: 0.15,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: infoRef.current,
                        start: 'top 85%',
                        once: true,
                    },
                });
            }

            // Animate form fields
            if (formRef.current) {
                gsap.from(formRef.current.querySelectorAll('.form-field'), {
                    y: 30,
                    opacity: 0,
                    stagger: 0.1,
                    duration: 0.8,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: formRef.current,
                        start: 'top 85%',
                        once: true,
                    },
                });
            }

            // Animate banner image
            if (bannerRef.current) {
                gsap.from(bannerRef.current.querySelector('img'), {
                    scale: 1.1,
                    duration: 1.5,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: bannerRef.current,
                        start: 'top 90%',
                        once: true,
                    },
                });
            }
        });

        return () => ctx.revert();
    }, []);

    return (
        <>
            <Seo 
                title="Contact | Algueye Dakar" 
                description="Prenez rendez-vous avec la maison Algueye Dakar pour vos créations sur-mesure. Notre atelier est situé à Dakar, Sénégal."
            />
            {/* ── Hero ──────────────────────────────────────── */}
            <PageHeroSection
                contentMiniBar="CONTACT & RÉSERVATIONS"
                firstTitle="Rencontrons-nous,"
                secondTitle="Votre vision devient notre création."
            />

            {/* ── Main Contact Section (White) ──────────────── */}
            <section className="bg-white py-20! text-black border-t border-gray-200">
                <div className={isDesktop ? 'px-12!' : 'px-5'} style={{ maxWidth: 'var(--container)', margin: '0 auto' }}>
                    
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: isDesktop ? '1fr 1fr' : '1fr',
                            gap: 'clamp(4rem, 8vw, 8rem)',
                            alignItems: 'start',
                        }}
                    >
                        {/* ── Colonne Gauche : Informations ── */}
                        <div ref={infoRef}>
                            <div className="relative flex w-full flex-col-reverse pt-15! mb-3! ">
                                <h2 className="uppercase font-bold text-black text-balance text-5xl lg:text-6xl block">
                                    L'artisanat prend vie
                                    <em style={{ color: 'var(--color-gold-dark)' }}> au cœur de Dakar.</em>
                                </h2>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                                {/* Info Item 1 */}
                                <div className="info-item">
                                    <h3
                                        style={{
                                            fontFamily: 'var(--font-sans)',
                                            fontSize: '0.65rem',
                                            letterSpacing: '0.2em',
                                            textTransform: 'uppercase',
                                            color: 'var(--color-gold-dark)',
                                            marginBottom: '0.5rem',
                                        }}
                                    >
                                        Adresse
                                    </h3>
                                    <p
                                        style={{
                                            fontFamily: 'var(--font-sans)',
                                            fontSize: '1.05rem',
                                            fontWeight: 400,
                                            lineHeight: 1.6,
                                            color: '#374151',
                                            margin: 0,
                                        }}
                                    >
                                        Atelier Algueye Dakar<br />
                                        Dakar, Sénégal
                                    </p>
                                </div>

                                {/* Info Item 2 */}
                                <div className="info-item">
                                    <h3
                                        style={{
                                            fontFamily: 'var(--font-sans)',
                                            fontSize: '0.65rem',
                                            letterSpacing: '0.2em',
                                            textTransform: 'uppercase',
                                            color: 'var(--color-gold-dark)',
                                            marginBottom: '0.5rem',
                                        }}
                                    >
                                        Contact
                                    </h3>
                                    <p
                                        style={{
                                            fontFamily: 'var(--font-sans)',
                                            fontSize: '1.05rem',
                                            fontWeight: 400,
                                            lineHeight: 1.6,
                                            color: '#374151',
                                            margin: 0,
                                        }}
                                    >
                                        +221 33 000 00 00<br />
                                        contact@algueye-dakar.com
                                    </p>
                                </div>

                                {/* Info Item 3 */}
                                <div className="info-item">
                                    <h3
                                        style={{
                                            fontFamily: 'var(--font-sans)',
                                            fontSize: '0.65rem',
                                            letterSpacing: '0.2em',
                                            textTransform: 'uppercase',
                                            color: 'var(--color-gold-dark)',
                                            marginBottom: '0.5rem',
                                        }}
                                    >
                                        Horaires d'ouverture
                                    </h3>
                                    <p
                                        style={{
                                            fontFamily: 'var(--font-sans)',
                                            fontSize: '1.05rem',
                                            fontWeight: 400,
                                            lineHeight: 1.6,
                                            color: '#374151',
                                            margin: 0,
                                        }}
                                    >
                                        Lundi – Samedi : 09:00 – 18:00<br />
                                        <em style={{ color: '#9ca3af', fontSize: '0.9rem' }}>Visites sur rendez-vous uniquement.</em>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* ── Colonne Droite : Formulaire ── */}
                        <div>
                            <div className="section-label mb-4!">
                                <span>NOUS ÉCRIRE</span>
                            </div>
                            <form
                                ref={formRef}
                                onSubmit={e => e.preventDefault()}
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '2rem',
                                    background: '#f9f9f9',
                                    padding: isDesktop ? '3rem' : '2rem',
                                    border: '1px solid rgba(0,0,0,0.05)',
                                }}
                            >
                                <div className="form-field" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <label htmlFor="name" style={labelStyle}>Nom Complet</label>
                                    <input type="text" id="name" style={inputStyle} placeholder="Votre nom" />
                                </div>

                                <div className="form-field" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <label htmlFor="email" style={labelStyle}>Email</label>
                                    <input type="email" id="email" style={inputStyle} placeholder="votre@email.com" />
                                </div>

                                <div className="form-field" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <label htmlFor="subject" style={labelStyle}>Sujet</label>
                                    <div style={{ position: 'relative' }}>
                                        <select id="subject" style={{ ...inputStyle, appearance: 'none', width: '100%' }}>
                                            <option value="">Sélectionnez un sujet...</option>
                                            <option value="sur-mesure">Création sur-mesure</option>
                                            <option value="presse">Presse & Médias</option>
                                            <option value="collaboration">Collaboration</option>
                                            <option value="autre">Autre demande</option>
                                        </select>
                                        {/* Custom arrow for select */}
                                        <svg
                                            style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}
                                            width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                        >
                                            <path d="M6 9l6 6 6-6" />
                                        </svg>
                                    </div>
                                </div>

                                <div className="form-field" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <label htmlFor="message" style={labelStyle}>Message</label>
                                    <textarea id="message" rows={5} style={{ ...inputStyle, resize: 'vertical' }} placeholder="Comment pouvons-nous vous aider ?"></textarea>
                                </div>

                                <div className="form-field" style={{ marginTop: '1rem' }}>
                                    <button type="submit" className="btn-gold w-full justify-center">
                                        <span>Envoyer le message</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Banner Image Section (Black) ──────────────── */}
            <section className="bg-black py-0" style={{ overflow: 'hidden' }}>
                <div 
                    ref={bannerRef}
                    style={{ 
                        width: '100%', 
                        height: 'clamp(30vh, 50vw, 60vh)', 
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                >
                    <img 
                        src={img1} 
                        alt="Atelier Algueye" 
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            filter: 'grayscale(30%) brightness(0.6)',
                            willChange: 'transform'
                        }}
                    />
                    
                    {/* Gold Overlay Frame */}
                    <div 
                        style={{
                            position: 'absolute',
                            inset: 'clamp(1rem, 3vw, 2rem)',
                            border: '1px solid rgba(201,168,76,0.3)',
                            pointerEvents: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <h3
                            style={{
                                fontFamily: 'var(--font-serif)',
                                fontSize: 'clamp(2rem, 5vw, 4rem)',
                                fontWeight: 300,
                                color: '#fff',
                                textAlign: 'center',
                                letterSpacing: '0.05em',
                            }}
                        >
                            L'excellence à chaque <em style={{ color: 'var(--color-gold)', fontStyle: 'italic' }}>point.</em>
                        </h3>
                    </div>
                </div>
            </section>
        </>
    );
}

// Styles constants pour le formulaire
const labelStyle: React.CSSProperties = {
    fontFamily: 'var(--font-sans)',
    fontSize: '0.75rem',
    fontWeight: 500,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: '#374151',
};

const inputStyle: React.CSSProperties = {
    fontFamily: 'var(--font-sans)',
    fontSize: '0.95rem',
    padding: '0.9rem 1.25rem',
    background: '#fff',
    border: '1px solid rgba(0,0,0,0.1)',
    color: '#000',
    outline: 'none',
    transition: 'border-color 0.3s',
};
