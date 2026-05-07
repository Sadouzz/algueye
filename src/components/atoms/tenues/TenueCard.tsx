import { useRef, useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import useIsDesktop from '../../../hooks/useIsDesktop';

export interface Tenue {
    id: string;
    slug: string;
    title: string;
    tags: string[];
    image: string;
    description: string;
}

interface TenueCardProps {
    tenue: Tenue;
    height?: string;
}

export default function TenueCard({ tenue, height = "300px" }: TenueCardProps) {
    const isDesktop = useIsDesktop();
    const cardRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    // Observer pour détecter la visibilité de la carte
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.3, rootMargin: '50px' }
        );

        if (cardRef.current) observer.observe(cardRef.current);
        return () => observer.disconnect();
    }, []);

    // Effet Parallax
    const handleScroll = useCallback(() => {
        if (!isVisible || !cardRef.current || !imageRef.current || !isDesktop) return;

        const rect = cardRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        const scrollPercent = Math.max(
            0,
            Math.min(1, (windowHeight - rect.top) / (windowHeight + rect.height))
        );

        const parallaxOffset = (scrollPercent - 0.5) * 10;
        imageRef.current.style.transform = `translateY(${parallaxOffset}%) scale(1.1)`;
    }, [isVisible, isDesktop]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    return (
        <div ref={cardRef} className="transition-all duration-300 ease-in-out group">
            <Link to={tenue.slug} className="no-underline block cursor-pointer">
                <div className="flex flex-col h-full rounded-none border-0 overflow-hidden transition-all duration-300 ease-in-out">
                    <div className="relative overflow-hidden w-full" style={{ height }}>
                        <img
                            ref={imageRef}
                            src={tenue.image}
                            alt={tenue.title}
                            className="w-full h-full object-cover transition-transform duration-500 ease-out will-change-transform"
                            style={{ borderRadius: '12px 12px 0 0' }}
                        />

                        {/* Overlay Noir Gradient au survol/permanent */}
                        <div
                            className="absolute top-0 left-0 w-full h-full transition-opacity duration-300"

                        >
                            <div className="flex justify-between p-4!">
                                {tenue.tags && tenue.tags[0] && (
                                    <span className="px-3! py-2! bg-[var(--color-gold-dark)]! text-white text-xs tracking-wider uppercase font-medium">
                                        {tenue.tags[0]}
                                    </span>
                                )}
                            </div>

                            {tenue.tags && tenue.tags.length > 1 && (
                                <div className="absolute bottom-0 left-0 w-full p-4!">
                                    <div className="flex flex-wrap gap-2">
                                        {tenue.tags.slice(1, 4).map((tag, index) => (
                                            <span
                                                key={index}
                                                className="px-2! py-1! bg-black/75 text-white text-xs tracking-wider uppercase"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                        <div
                            className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.5) 100%)' }}
                        >
                            <div className="flex justify-end p-4!">

                                <div className="scale-75 transition-transform duration-300 group-hover:scale-90">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="7" y1="17" x2="17" y2="7"></line>
                                        <polyline points="7 7 17 7 17 17"></polyline>
                                    </svg>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="w-full p-0 pt-3">
                        <div className="flex justify-between items-start mt-1">
                            <div className="w-full">
                                <h6 className="font-semibold text-lg text-gray-800 mb-2 uppercase tracking-wide">
                                    {tenue.title}
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}
