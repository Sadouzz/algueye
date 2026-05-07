import { Link } from 'react-router-dom';
import { tenues } from '../data/tenues.data';
import TenueCard from '../components/atoms/tenues/TenueCard';
import Seo from "../components/seo/Seo";
import ng1 from '../assets/tenues/naru-goor/img1.png';
import ng2 from '../assets/tenues/naru-goor/img2.png';
import ng3 from '../assets/tenues/naru-goor/img3.png';
import ng4 from '../assets/tenues/naru-goor/img4.png';
import ng5 from '../assets/tenues/naru-goor/img5.png';

const naruGoorTenues = tenues.filter(t => t.tags.includes('NARU GOOR'));

const VALUES = [
    {
        title: 'Prestance',
        desc: 'Chaque silhouette est taillée pour imposer respect et charisme dans tous les contextes.'
    },
    {
        title: "Artisanat d'exception",
        desc: 'Finitions à la main, tissus nobles et coupes millimétrées pour un résultat digne des plus grandes maisons.'
    },
    {
        title: 'Authenticité africaine',
        desc: "Des motifs et des inspirations enracinés dans le patrimoine sénégalais, portés fièrement dans la modernité."
    },
];

export default function NaruGoor() {
    return (
        <div className="bg-white min-h-screen">
            <Seo 
                title="Naru Goor | Élégance Masculine par Algueye Dakar" 
                description="Découvrez Naru Goor, la sous-marque exclusivement masculine d'ALGUEYE Dakar. L'alliance parfaite entre tradition africaine et coupe contemporaine."
                url="https://www.algueyedakar.com/naru-goor"
            />

            {/* ── Hero ─────────────────────────────────────────── */}
            <div className="relative h-screen flex items-end overflow-hidden bg-black" data-header-theme="black">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-60"
                    style={{ backgroundImage: `url(${ng1})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                <div className="relative z-10 w-full px-8! md:px-20! pb-16! md:pb-24!">
                    <div className="flex  flex-col-reverse pt-15! mb-3! ">
                        <span className="w-full rotate-[-2deg] font-serif  text-gold font-quickbrush -mb-2 xl:-mb-4 text-4xl lg:text-6xl">
                            ALGUEYE DAKAR — Sous-marque exclusive
                        </span>
                    </div>

                    <h1 className="text-white text-5xl md:text-[10rem] font-extrabold uppercase leading-[0.9] tracking-tight mb-6">
                        Naru<br /><em className="not-italic" style={{ color: 'var(--color-gold)' }}>Goor</em>
                    </h1>
                    <p className="text-gray-300 max-w-lg text-lg md:text-xl font-light leading-relaxed mb-10!">
                        L'élégance masculine redéfinie. Pour l'homme moderne qui porte sa culture comme une couronne.
                    </p>
                    <Link to="/tenues" className="btn-gold">
                        <span>Voir toutes les créations</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>

            {/* ── Valeurs ──────────────────────────────────────── */}
            <div className="bg-black text-white py-20! md:py-32! px-8 md:px-20!" data-header-theme="black">
                <div className="mx-15! flex justify-center items-center flex-col">
                    <div className="relative flex text-center w-full flex-col-reverse pt-5! mb-8!">
                        <h2 className="uppercase font-bold text-balance text-4xl lg:text-8xl block">
                            L'homme <em style={{ color: 'var(--color-gold)' }}>Naru Goor</em>
                        </h2>
                        <span className="w-full rotate-[-2deg] font-serif  text-gold font-quickbrush -mb-2 xl:-mb-4 text-4xl lg:text-6xl">
                            Notre philosophie
                        </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {VALUES.map((v, i) => (
                            <div key={i} className="flex flex-col gap-4 border-t border-white/10 pt-8!">
                                <h3 className="text-xl font-bold uppercase tracking-wider text-[var(--color-gold)]">{v.title}</h3>
                                <p className="text-gray-400 font-light leading-relaxed">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── Grille 3 photos ──────────────────────────────── */}
            <div className="grid grid-cols-2 md:grid-cols-3 h-[60vh]" data-header-theme="black">
                <div className="overflow-hidden relative group col-span-1">
                    <img src={ng2} alt="Naru Goor Tradition" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
                    <div className="absolute bottom-4 left-4 text-white">
                        <p className="text-xs tracking-widest uppercase text-gold mb-1">Collection Homme</p>
                        <p className="text-xl font-bold uppercase">Tradition</p>
                    </div>
                </div>
                <div className="overflow-hidden relative group col-span-1 md:col-span-1">
                    <img src={ng3} alt="Naru Goor Boubou" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
                    <div className="absolute bottom-4 left-4 text-white">
                        <p className="text-xs tracking-widest uppercase text-gold mb-1">Collection Homme</p>
                        <p className="text-xl font-bold uppercase">Boubou Moderne</p>
                    </div>
                </div>
                <div className="overflow-hidden relative group col-span-2 md:col-span-1">
                    <img src={ng4} alt="Naru Goor Prestige" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
                    <div className="absolute bottom-4 left-4 text-white">
                        <p className="text-xs tracking-widest uppercase text-gold mb-1">Collection Homme</p>
                        <p className="text-xl font-bold uppercase">Prestige Dakar</p>
                    </div>
                </div>
            </div>

            {/* ── Collection complète ──────────────────────────── */}
            {naruGoorTenues.length > 0 && (
                <div className="py-20! md:py-28 px-8! md:px-15! bg-white" data-header-theme="white">
                    <div className="">
                        <div className="flex justify-center items-center mb-14">
                            <div className="relative flex w-full flex-col-reverse pt-5! text-center">
                                <h2 className="uppercase font-bold text-black text-balance text-4xl lg:text-8xl block">
                                    La <em style={{ color: 'var(--color-gold)' }}> Collection.</em>
                                </h2>
                                <span className="w-full rotate-[-2deg] font-serif text-center text-gold font-quickbrush -mb-2 xl:-mb-4 text-4xl lg:text-6xl">
                                    Créations exclusives
                                </span>
                            </div>
                        </div>
                        <div className="flex justify-center items-center mb-14!">
                            <Link to="/tenues" className="btn-outline hidden md:flex">
                                <span>Voir tout</span>
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {naruGoorTenues.map(tenue => (
                                <TenueCard key={tenue.id} tenue={tenue} height="480px" />
                            ))}
                        </div>
                        <div className="mt-10 flex justify-center md:hidden">
                            <Link to="/tenues" className="btn-gold">
                                <span>Voir toutes les créations</span>
                            </Link>
                        </div>
                    </div>
                </div>
            )}

            {/* ── Split ng5 + CTA ───────────────────────────────── */}
            <div className="flex flex-col md:flex-row min-h-[60vh]" data-header-theme="black">
                <div className="w-full md:w-1/2 overflow-hidden relative">
                    <img src={ng5} alt="Naru Goor Essentiel" className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-black/30" />
                </div>
                <div className="w-full md:w-1/2 bg-black text-white flex flex-col justify-center px-10! md:px-16! py-16">
                    <div className="relative flex w-full flex-col-reverse pt-5!">
                        <h2 className="uppercase font-bold  text-balance text-4xl lg:text-8xl block">
                            Votre tenue,<br /><em style={{ color: 'var(--color-gold)' }}> votre identité.</em>
                        </h2>
                        <span className="w-full rotate-[-2deg] font-serif text-gold font-quickbrush -mb-2 xl:-mb-4 text-4xl lg:text-6xl">
                            Sur mesure
                        </span>
                    </div>
                    <p className="text-gray-400 font-light leading-[1.9] mb-10! max-w-sm">
                        Chaque homme mérite une pièce unique. Prenez rendez-vous avec nos artisans pour une création sur mesure.
                    </p>
                    <Link to="/contact" className="btn-gold self-start">
                        <span>Prendre rendez-vous</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
}