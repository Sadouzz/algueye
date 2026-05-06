import { useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
    const location = useLocation();
    const headerRef = useRef<HTMLElement>(null);
    const isContact = location.pathname === "/contact";

    useGSAP(() => {
        const el = headerRef.current;
        if (!el) return;

        //gsap.set(".collapsed", { color: 'white' });

        if (isContact) {
            // ... garde ton code contact
            return;
        }

        // ScrollTrigger.create({
        //     trigger: triggerElement,
        //     start: startValue,
        //     onEnter: () => {
        //         gsap.to(el, {
        //             position: 'fixed',
        //             top: '10px',
        //             left: '50%',
        //             xPercent: -50,
        //             duration: 0.4,
        //             ease: "power2.out",
        //         });
        //         gsap.to(".collapsed", { color: '#0e0e0e', duration: 0.3 });
        //     },
        //     onLeaveBack: () => {
        //         gsap.to(el, {
        //             position: 'absolute',
        //             top: 'calc(100vh - 100px)',
        //             left: '50%',
        //             xPercent: -50,
        //             duration: 0.4,
        //         });
        //         gsap.to(".collapsed", { color: 'white', duration: 0.3 });
        //     }
        // });
    }, [isContact, location.pathname]);

    return (
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
            <nav className="flex w-full h-full items-center relative z-10">

                {/* --- GAUCHE --- */}
                <div className="flex flex-1 h-full items-center justify-start border-r border-black bg-white">
                    <HeaderLink to="/" label="Accueil" />
                    <HeaderLink to="/about" label="À propos" />
                    <HeaderLink to="/events" label="Evènements" />
                </div>

                {/* --- CENTRE (Élargi et Animé) --- */}
                <NavLink
                    to="/"
                    className="group flex h-full w-[350px] lg:w-[500px] shrink-0 flex-col items-center justify-center overflow-hidden bg-white cursor-pointer relative"
                >
                    {/* Texte principal qui monte au survol */}
                    <div
                        className="flex items-center justify-center transition-transform duration-500 group-hover:-translate-y-[250%]"
                        style={{ transitionTimingFunction: 'cubic-bezier(0.49, 0.03, 0.13, 0.99)' }}
                    >
                        <span className="font-black text-2xl lg:text-3xl tracking-[0.15em] uppercase text-black">
                            ALGUEYE DAKAR
                        </span>
                    </div>

                    {/* Sous-texte cursif qui apparaît par le bas */}
                    <p
                        className="absolute w-full translate-y-[250%] text-center text-sm lg:text-base font-serif italic text-black transition-transform duration-500 group-hover:translate-y-0"
                        style={{ transitionTimingFunction: 'cubic-bezier(0.49, 0.03, 0.13, 0.99)' }}
                    >
                        Une tradition qui se savoure chaque jour
                    </p>
                </NavLink>

                {/* --- DROITE --- */}
                <div className="flex flex-1 h-full items-center justify-end border-l border-black bg-white">
                    <HeaderLink to="/confections" label="Confections" />
                    <HeaderLink to="/collections" label="Collections" />
                    <HeaderLink to="/contact" label="Contact" />
                </div>

            </nav>
        </header>
    );
}

// --- Composant Lien ---
function HeaderLink({ to, label }: { to: string; label: string }) {
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
            {/* Barre de soulignement accentuée au survol/active (Style LPQ) */}
            <div className={`absolute bottom-0 left-0 h-[3px] w-full transition-colors duration-300 
                ${location.pathname === to ? 'bg-gold' : 'bg-transparent group-hover/link:bg-gold'}
            `} />
        </NavLink>
    );
}