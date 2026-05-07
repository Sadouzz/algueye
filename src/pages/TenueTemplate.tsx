import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { tenues } from '../data/tenues.data';
import Seo from '../components/seo/Seo';

export default function TenueTemplate() {
    const { slug } = useParams();
    const navigate = useNavigate();

    // On compare la fin du slug dans tenues.data.ts avec le paramètre d'URL (pour éviter les soucis avec /collections/tenues/ vs /tenues/)
    const tenue = tenues.find(t => {
        const slugParts = t.slug.split('/');
        return slugParts[slugParts.length - 1] === slug;
    });

    useEffect(() => {
        if (!tenue) {
            navigate('/collections');
        }
    }, [tenue, navigate]);

    if (!tenue) return null;

    return (
        // L'ajout de md:items-start est crucial ici pour que le sticky de la colonne de gauche fonctionne correctement
        <section className="bg-white min-h-screen flex flex-col md:flex-row pt-[80px]! md:items-start">
            <Seo 
                title={`${tenue.title} | Algueye Dakar`} 
                description={tenue.description}
                ogImage={tenue.image}
            />

            {/* Colonne gauche - Info STATIQUE */}
            <div className="w-full md:w-5/12 md:sticky md:top-[80px] p-8! md:p-16! lg:p-24! flex flex-col justify-center min-h-[50vh] md:min-h-[calc(100vh-80px)]">

                {/* Remplacement du style en ligne par des valeurs arbitraires Tailwind */}
                <Link
                    to="/collections"
                    className="text-[color:var(--color-gold-dark)]! uppercase tracking-widest text-xs font-semibold mb-14 flex items-center gap-2 hover:text-black transition-colors duration-300 w-max"
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Retour aux collections
                </Link>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase mb-8 text-gray-900 leading-tight tracking-tight">
                    {tenue.title}
                </h1>

                <div className="flex gap-3 flex-wrap mb-5!">
                    {tenue.tags.map((tag, i) => (
                        <span
                            key={i}
                            className="px-4 py-2 border border-[color:var(--color-gold-dark)] text-[color:var(--color-gold-dark)] text-xs font-medium tracking-widest uppercase bg-transparent"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="mb-16!">
                    <h3 className="text-xs tracking-widest text-gray-400 uppercase mb-6 font-bold border-b border-gray-200 pb-3">
                        Détails de la tenue
                    </h3>
                    <p className="text-base md:text-lg text-gray-600 leading-[2] font-light">
                        {tenue.description}
                    </p>
                </div>

                {/* J'ai gardé votre classe btn-gold, mais ajouté des classes de base au cas où vous souhaiteriez la remplacer */}
                <Link
                    to="/contact"
                    className="btn-gold self-start group flex items-center justify-center px-8 py-4 font-medium uppercase tracking-widest text-sm transition-all duration-300"
                >
                    <span>Prendre rendez-vous</span>
                    <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </Link>
            </div>

            {/* Colonne droite - Image */}
            <div className="w-full md:w-7/12 p-6! md:p-12! lg:p-20!">
                <div className="w-full h-full min-h-[60vh] md:min-h-[calc(100vh-140px)] overflow-hidden relative group shadow-2xl bg-gray-50">
                    {/* Overlay subtil au survol pour un effet de profondeur */}
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>

                    <img
                        src={tenue.image}
                        alt={tenue.title}
                        className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                </div>
            </div>

        </section>
    );
}