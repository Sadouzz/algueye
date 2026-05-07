import { useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { StaggeredMenu } from "./StaggeredMenu";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
    const location = useLocation();
    const headerRef = useRef<HTMLElement>(null);
    const isContact = location.pathname === "/contact";
    const [menuOpen, setMenuOpen] = useState(false);

    useGSAP(() => {
        const el = headerRef.current;
        if (!el) return;
        if (isContact) return;
    }, [isContact, location.pathname]);

    return (
        <>
            <header
                ref={headerRef}
                className="raleway overflow-hidden w-[calc(100vw-32px)] lg:w-[calc(100vw-64px)] max-w-[1800px] shadow-sm bg-white border border-black"
                style={{
                    position: 'fixed',
                    top: '10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    height: '64px',
                    zIndex: 1000
                }}
            >
                <nav className="flex w-full h-full items-center relative z-10 justify-between lg:justify-start">

                    {/* --- GAUCHE (Desktop uniquement) --- */}
                    <div className="hidden lg:flex flex-1 h-full items-center justify-start border-r border-black bg-white">
                        <HeaderLink to="/" label="Accueil" />
                        <HeaderLink to="/about" label="À propos" />
                        <HeaderLink to="/events" label="Evènements" />
                    </div>

                    {/* --- LOGO CENTRE (Desktop) / LOGO + MENU (Mobile) --- */}
                    {/* Desktop: logo centré */}
                    <NavLink
                        to="/"
                        className="group hidden lg:flex h-full w-[250px] md:w-[350px] lg:w-[500px] shrink-0 flex-col items-center justify-center overflow-hidden bg-white cursor-pointer relative mx-auto lg:mx-0 border-r border-black lg:border-r-0 lg:border-l-0 border-l"
                    >
                        <div
                            className="flex items-center justify-center transition-transform duration-500 group-hover:-translate-y-[250%]"
                            style={{ transitionTimingFunction: 'cubic-bezier(0.49, 0.03, 0.13, 0.99)' }}
                        >
                            <span className="font-black text-xl md:text-2xl lg:text-3xl tracking-[0.1em] lg:tracking-[0.15em] uppercase text-black">
                                ALGUEYE DAKAR
                            </span>
                        </div>
                        <p
                            className="absolute w-full translate-y-[250%] text-center text-lg lg:text-xl font-serif italic text-gold transition-transform duration-500 group-hover:translate-y-0"
                            style={{ transitionTimingFunction: 'cubic-bezier(0.49, 0.03, 0.13, 0.99)' }}
                        >
                            Les détails, où que vous soyez.
                        </p>
                    </NavLink>

                    {/* Mobile: ALGUEYE à gauche + MENU à droite */}
                    <div className="flex lg:hidden w-full h-full items-center justify-between px-4 bg-white">
                        <NavLink to="/" className="font-black text-lg tracking-[0.12em] uppercase text-black">
                            ALGUEYE
                        </NavLink>

                        <button
                            onClick={() => setMenuOpen(true)}
                            className="flex items-center gap-2 bg-transparent border-0 cursor-pointer font-bold tracking-widest text-xs uppercase text-black"
                            aria-label="Ouvrir le menu"
                            type="button"
                        >
                            <span>MENU</span>
                            {/* Hamburger icon */}
                            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                                <line x1="0" y1="1" x2="20" y2="1" />
                                <line x1="0" y1="7" x2="20" y2="7" />
                                <line x1="0" y1="13" x2="20" y2="13" />
                            </svg>
                        </button>
                    </div>

                    {/* --- DROITE (Desktop uniquement) --- */}
                    <div className="hidden lg:flex flex-1 h-full items-center justify-end border-l border-black bg-white">
                        <HeaderLink to="/confections" label="Confections" />
                        <HeaderLink to="/collections" label="Collections" />
                        <HeaderLink to="/tenues" label="Tenues" />
                        <HeaderLink to="/naru-goor" label="Naru Goor" />
                    </div>

                </nav>
            </header>

            {/* Staggered Menu (mobile) — contrôlé depuis ici */}
            <StaggeredMenu
                isOpen={menuOpen}
                onClose={() => setMenuOpen(false)}
                accentColor="var(--color-gold, #c9a84c)"
                colors={['#f5f5f0', '#efefea']}
                displaySocials={true}
                socialItems={[
                    { label: 'Instagram', link: 'https://instagram.com/algueyedakar' },
                    { label: 'Facebook', link: 'https://facebook.com' }
                ]}
                items={[
                    { label: 'Accueil', ariaLabel: 'Accueil', link: '/' },
                    { label: 'À propos', ariaLabel: 'À propos', link: '/about' },
                    { label: 'Evènements', ariaLabel: 'Evènements', link: '/events' },
                    { label: 'Confections', ariaLabel: 'Confections', link: '/confections' },
                    { label: 'Collections', ariaLabel: 'Collections', link: '/collections' },
                    { label: 'Tenues', ariaLabel: 'Tenues', link: '/tenues' },
                    { label: 'Naru Goor', ariaLabel: 'Naru Goor', link: '/naru-goor' }
                ]}
            />
        </>
    );
}

// --- Composant Lien ---
function HeaderLink({ to, label }: { to: string; label: string }) {
    const location = useLocation();
    return (
        <NavLink
            to={to}
            className={({ isActive }) => `
                group/link relative flex h-full grow items-center justify-center px-2 xl:px-4 font-bold uppercase text-[10px] xl:text-xs tracking-widest !text-black transition-colors duration-300
                border-r border-black last:border-r-0 hover:bg-gray-50
                ${isActive ? "bg-gold" : "bg-white"}
            `}
        >
            {label}
            <div className={`absolute bottom-0 left-0 h-[3px] w-full transition-colors duration-300 
                ${location.pathname === to ? 'bg-gold' : 'bg-transparent group-hover/link:bg-gold'}
            `} />
        </NavLink>
    );
}