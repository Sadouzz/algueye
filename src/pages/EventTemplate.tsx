import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEvents } from '../hooks/useEvents';
import Seo from '../components/seo/Seo';

export default function EventTemplate() {
    const { slug } = useParams();
    const navigate = useNavigate();

    const { events, loading } = useEvents();
    const event = events.find(e => e.slug === slug);

    useEffect(() => {
        if (!loading && !event) {
            navigate('/events');
        }
    }, [event, navigate, loading]);

    if (loading) return (
        <div className="min-h-screen bg-white flex flex-col md:flex-row pt-32! animate-pulse">
            <div className="w-full md:w-5/12 p-8! md:p-16! lg:p-24! space-y-6">
                <div className="h-4 w-32 bg-gray-100"></div>
                <div className="h-16 w-full bg-gray-100"></div>
                <div className="h-4 w-24 bg-gray-100"></div>
                <div className="h-32 w-full bg-gray-50"></div>
            </div>
            <div className="w-full md:w-7/12 p-6! md:p-12! lg:p-20!">
                <div className="w-full h-full min-h-[60vh] bg-gray-50"></div>
            </div>
            <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
                <div className="w-12 h-12 border-2 border-gold/20 border-t-gold rounded-full animate-spin"></div>
            </div>
        </div>
    );
    if (!event) return null;

    return (
        <section className="bg-white min-h-screen flex flex-col md:flex-row pt-[80px]! md:items-start">
            <Seo 
                title={`${event.title} | Événements Algueye`} 
                description={event.description}
                ogImage={event.image}
            />

            {/* Colonne gauche - Info STATIQUE */}
            <div className="w-full md:w-5/12 md:sticky md:top-[80px] p-8! md:p-16! lg:p-24! flex flex-col justify-center min-h-[50vh] md:min-h-[calc(100vh-80px)]">

                <Link
                    to="/events"
                    className="text-[color:var(--color-gold-dark)]! uppercase tracking-widest text-xs font-semibold mb-14 flex items-center gap-2 hover:text-black transition-colors duration-300 w-max"
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Retour aux événements
                </Link>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase mb-8 text-gray-900 leading-tight tracking-tight">
                    {event.title}
                </h1>

                <div className="flex gap-3 flex-wrap mb-5!">
                    <span className="px-4 py-2 border border-[color:var(--color-gold-dark)] text-[color:var(--color-gold-dark)] text-xs font-medium tracking-widest uppercase bg-transparent">
                        {event.category}
                    </span>
                    <span className="px-4 py-2 border border-gray-400 text-gray-600 text-xs font-medium tracking-widest uppercase bg-transparent">
                        {event.status}
                    </span>
                </div>

                <div className="mb-16!">
                    <h3 className="text-xs tracking-widest text-gray-400 uppercase mb-6 font-bold border-b border-gray-200 pb-3">
                        Détails de l'événement
                    </h3>
                    
                    <div className="mb-6">
                        <p className="text-sm text-gray-500 uppercase tracking-widest mb-1">Date</p>
                        <p className="text-lg font-medium text-gray-900">{event.date} {event.month} {event.year}</p>
                    </div>

                    <div className="mb-6">
                        <p className="text-sm text-gray-500 uppercase tracking-widest mb-1">Lieu</p>
                        <p className="text-lg font-medium text-gray-900">{event.location}, {event.city}</p>
                    </div>

                    <div className="mt-8">
                        <p className="text-base md:text-lg text-gray-600 leading-[2] font-light">
                            {event.description}
                        </p>
                    </div>
                </div>

                {event.status !== 'Passé' && (
                    <Link
                        to="/contact"
                        className="btn-gold self-start group flex items-center justify-center px-8 py-4 font-medium uppercase tracking-widest text-sm transition-all duration-300"
                    >
                        <span>S'inscrire</span>
                        <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                )}
            </div>

            {/* Colonne droite - Image */}
            <div className="w-full md:w-7/12 p-6! md:p-12! lg:p-20!">
                <div className="w-full h-full min-h-[60vh] md:min-h-[calc(100vh-140px)] overflow-hidden relative group shadow-2xl bg-gray-50">
                    {/* Overlay subtil au survol pour un effet de profondeur */}
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>

                    <img
                        src={event.image}
                        alt={event.title}
                        className={`absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out ${event.status === 'Passé' ? 'grayscale' : ''}`}
                    />
                </div>
            </div>

        </section>
    );
}
