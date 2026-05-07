import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import { Crown, Gem, Sparkles, Diamond, Anchor, Hexagon } from 'lucide-react';

const partners = [
    { name: "Vogue Africa", icon: Crown },
    { name: "LVMH", icon: Diamond },
    { name: "Dakar Fashion", icon: Sparkles },
    { name: "Maison Royale", icon: Gem },
    { name: "Oceanic", icon: Anchor },
    { name: "Hexa Design", icon: Hexagon },
];

export default function PartnersSection() {
    const trackRef = useRef<HTMLDivElement>(null);
    const animRef = useRef<gsap.core.Tween | null>(null);

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        // Clone elements for infinite scroll
        // In the render, we duplicate the array `[...partners, ...partners]`
        const totalWidth = track.scrollWidth / 2;
        animRef.current = gsap.to(track, {
            x: -totalWidth,
            duration: 25,
            ease: 'none',
            repeat: -1,
        });

        const handleMouseEnter = () => animRef.current?.pause();
        const handleMouseLeave = () => animRef.current?.play();

        track.addEventListener('mouseenter', handleMouseEnter);
        track.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            animRef.current?.kill();
            track.removeEventListener('mouseenter', handleMouseEnter);
            track.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    const duplicatedPartners = [...partners, ...partners];

    return (
        <section className="bg-black py-24! text-white border-t border-b border-gray-900 overflow-hidden">
            <div className="relative flex w-full flex-col-reverse text-center">
                <h2 className="uppercase font-bold text-balance text-5xl lg:text-8xl block">
                    Ils nous font <em style={{ color: 'var(--color-gold)' }}>confiance.</em>
                </h2>
                <span className="w-full rotate-[-2deg] font-serif text-center text-gold font-quickbrush -mb-2 xl:-mb-4 text-xl lg:text-6xl">
                    Nos Partenaires
                </span>
            </div>
            <div className='text-center flex justify-center my-5!'>

            <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed text-center">
                Nous collaborons avec les maisons et les créateurs les plus prestigieux pour vous offrir une expérience d'élégance absolue.
            </p>
            </div>

            <div className="relative w-full overflow-hidden mb-16">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

                <div 
                    ref={trackRef} 
                    className="flex items-center gap-16! md:gap-32! w-max px-8!"
                >
                    {duplicatedPartners.map((partner, index) => {
                        const Icon = partner.icon;
                        return (
                            <div 
                                key={index} 
                                className="flex items-center gap-4! text-gray-400 hover:text-[color:var(--color-gold)] transition-colors duration-300 cursor-pointer"
                            >
                                <Icon size={40} strokeWidth={1} />
                                <span className="font-sans tracking-widest uppercase text-xl font-light">
                                    {partner.name}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="text-center my-10!">
                <Link to="/contact" className="btn-outline inline-flex items-center">
                    <span>Vous pouvez aussi y figurer</span>
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </Link>
            </div>
        </section>
    );
}
