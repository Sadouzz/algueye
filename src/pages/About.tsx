import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PageHeroSection from '../components/sections/PageHeroSection';
import Seo from '../components/seo/Seo';
import StoryChapter from '../components/sections/StoryChapter';

// Assets
import childhoodImg from '../assets/story/childhood.png';
import videoMp4 from '../assets/vidCouture.mp4';
import dakarImg from '../assets/story/dakar.png';
import artisanImg from '../assets/story/artisan.png'
import imgA7 from '../assets/tenues/A7.jpeg';
import imgA9 from '../assets/tenues/A9.jpeg';
import imgB1 from '../assets/tenues/B1.jpeg';
import imgB2 from '../assets/tenues/B2.jpeg';
import imgB3 from '../assets/tenues/B3.jpeg';
import imgWorld1 from '../assets/tenues/DSC02056.jpeg';
import imgWorld2 from '../assets/tenues/DSC02098.jpeg';
import imgWorld3 from '../assets/tenues/DSC02151.jpeg';
import heroImg from '../assets/imgHeroHomeBlack.png';

gsap.registerPlugin(ScrollTrigger);

const IngredientsDetailSection = () => (
    <section className="relative z-10 mb-14 flex max-w-[120rem] items-center justify-center bg-black lg:my-24 lg:px-[64px]">
        <div className="relative mx-6 my-6 grid grid-cols-1 items-center gap-8 text-center lg:mx-0 lg:my-0 lg:grid-cols-12 lg:gap-20 lg:text-left">
            <div className="relative row-start-2 aspect-square lg:col-span-6 lg:row-start-auto">
                <div className="h-full w-full">
                    <img alt="Atelier de couture haute couture" loading="lazy" src={imgA7} className="absolute inset-0 h-full w-full object-cover shadow-2xl" />
                </div>
            </div>
            <div className="flex flex-col gap-8 lg:col-span-6 lg:col-start-7">
                <div className="relative mt-16 flex flex-col gap-8 md:mt-4 lg:-mt-4">
                    <div className="relative flex w-full flex-col-reverse lg:text-start text-center mb-4!">
                        <h2 className="uppercase font-bold text-4xl lg:text-6xl! text-balance block">
                            Le secret de
                            <em style={{ color: 'var(--color-gold-dark)' }}> nos créations</em>
                        </h2>
                        <span className="w-full font-serif rotate-[-2deg] lg:text-start text-center text-gold font-quickbrush mb-3! xl:-mb-2 text-4xl lg:text-5xl block">
                            L'exigence absolue
                        </span>
                    </div>
                    <p>Chez Algueye DAKAR, nous croyons obstinément que l'élégance véritable ne se précipite pas. Alors que l'industrie s'accélère, nous chérissons l'art lent de la haute couture, avec un travail manuel méticuleux et des finitions qui exigent des dizaines d'heures d'attention.</p>
                </div>
                <div className="grid gap-x-14 gap-y-8 md:grid-cols-2">
                    <div className="flex flex-col gap-3">
                        <h3 className="text-xl font-bold text-gold-light">Coupe millimétrée</h3>
                        <p className="text-balance text-base">Notre processus sur mesure permet à chaque étoffe de déployer tout son potentiel pour épouser parfaitement votre silhouette...</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h3 className="text-xl font-bold text-gold-light">Matières d'exception</h3>
                        <p className="text-balance text-base">Nos créations ne sont pas seulement majestueuses, elles sont confectionnées avec des tissus nobles qui respirent et subliment le porteur...</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h3 className="text-xl font-bold text-gold-light">Durabilité intemporelle</h3>
                        <p className="text-balance text-base">En prenant le temps de renforcer chaque point à la main, nous garantissons la longévité de votre vêtement, de génération en génération...</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h3 className="text-xl font-bold text-gold-light">Finitions sophistiquées</h3>
                        <p className="text-balance text-base">Le travail acharné de nos maîtres-tailleurs donne à nos tenues cette allure prestigieuse et ce tombé irréprochable...</p>
                    </div>
                </div>
            </div>

            {/* Coins Décoratifs */}
            {/* <div aria-hidden="true" className="absolute size-[120px] lg:size-[175px] -top-3 -left-3 lg:-top-5 lg:-left-5 scale-x-[-1]" style={{ maskSize: '100% 100%', maskImage: 'url("/images/image_corner.png")', backgroundColor: 'var(--color-gold)' }}></div>
            <div aria-hidden="true" className="absolute size-[120px] lg:size-[175px] -top-3 -right-3 lg:-top-5 lg:-right-5" style={{ maskSize: '100% 100%', maskImage: 'url("/images/image_corner.png")', backgroundColor: 'var(--color-gold)' }}></div>
            <div aria-hidden="true" className="absolute size-[120px] lg:size-[175px] -bottom-3 -right-3 lg:-bottom-5 lg:-right-5 rotate-180 scale-x-[-1]" style={{ maskSize: '100% 100%', maskImage: 'url("/images/image_corner.png")', backgroundColor: 'var(--color-gold)' }}></div>
            <div aria-hidden="true" className="absolute size-[120px] lg:size-[175px] -bottom-4 -left-3 lg:-bottom-7 lg:-left-7 rotate-180" style={{ maskSize: '100% 100%', maskImage: 'url("/images/image_corner.png")', backgroundColor: 'var(--color-gold)' }}></div> */}
        </div>
    </section>
);

export default function About() {
    const manifestoRef = useRef<HTMLDivElement>(null);
    const [videoLoaded, setVideoLoaded] = useState(false);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (manifestoRef.current) {
                gsap.from(manifestoRef.current, {
                    opacity: 0,
                    y: 50,
                    duration: 1.5,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: manifestoRef.current,
                        start: 'top 80%',
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
                title="Notre Histoire | Algueye Dakar" 
                description="Découvrez l'âme de la maison Algueye Dakar. Un voyage entre tradition, passion et élégance contemporaine."
            />
            <section className="relative w-full flex justify-center items-center overflow-hidden" style={{ height: "calc(100vh - 80px)" }}>
                <img
                    alt="Détail de couture haute couture placeholder"
                    className="absolute inset-0 z-0 h-full w-full object-cover"
                    src={imgA7}
                    style={{
                        transition: "opacity 0.8s ease",
                        opacity: videoLoaded ? 0 : 1,
                    }}
                />
                <video
                    preload="auto"
                    loop
                    muted
                    playsInline
                    autoPlay
                    src={videoMp4}
                    onCanPlayThrough={() => setVideoLoaded(true)}
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                        zIndex: 0,
                        transition: "opacity 0.8s ease",
                        opacity: videoLoaded ? 1 : 0,
                    }}
                />
                {/* Subtle dark overlay to make text pop */}
                <div className="absolute inset-0 bg-black/20 z-[1]"></div>

                <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 w-full h-full">
                    <h1 className="text-balance text-4xl leading-[1.1] text-white sm:text-[60px] md:text-7xl font-bold uppercase block shadow-sm">
                        DES ÉTOFFES NOBLES.<br />
                        DES COUPES PRÉCISES.<br />
                        <em style={{ color: 'var(--color-gold-light)', fontStyle: 'normal' }}>UNE ÉLÉGANCE.</em>
                    </h1>

                    <button className="absolute bottom-[5svh] md:bottom-10" tabIndex={0} aria-label="Faites défiler vers le bas pour explorer nos créations">
                        <div className="relative flex items-center justify-center gap-3 animate-bounce" aria-hidden="true">
                            <div className="relative h-[48px] w-[48px] flex items-center justify-center overflow-hidden  border border-solid border-white/50 bg-black/20 backdrop-blur-sm text-white">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M12 5v14M5 12l7 7 7-7" />
                                </svg>
                            </div>
                        </div>
                    </button>
                </div>

                <div className="absolute bottom-0 left-0 right-0 flex uppercase z-10 pointer-events-none">
                    {/* Bandeau de matières animées */}
                    <div className="hidden w-full pb-6 md:flex opacity-80 mix-blend-overlay">
                        <div className="flex w-full flex-1 items-center px-10">
                            <h2 className="font-bold text-5xl xl:text-[100px] text-white">Soie</h2>
                            <div className="mx-[20px] h-[3px] flex-1 xl:mx-[64px] bg-white"></div>
                            <h2 className="font-bold text-5xl xl:text-[100px] text-white">Bazin</h2>
                            <div className="mx-[20px] h-[3px] flex-1 xl:mx-[64px] bg-white"></div>
                            <h2 className="font-bold text-5xl xl:text-[100px] text-white">Lin</h2>
                        </div>
                    </div>
                </div>
            </section>
            {/* ── Hero ──────────────────────────────────────── */}
            <PageHeroSection
                contentMiniBar="L'ÂME DE LA MAISON"
                firstTitle="Plus qu'une marque,"
                secondTitle="Une histoire de passion et de racines."
            />

            

            {/* ── Chapitre 1: L'Origine ─────────────────────── */}
            <StoryChapter
                chapterNumber="CHAPITRE I"
                title="L'Origine du Geste"
                subtitle="L'enfance d'une passion"
                image={childhoodImg}
                content={[
                    "Tout a commencé dans le silence feutré d'un atelier, au rythme régulier d'une machine à coudre qui, pour l'enfant qu'était Abdou Lahad GUEYE, chantait une mélodie de création.",
                    "Fasciné par la métamorphose d'un simple fil en une parure d'exception, il a appris très tôt que la mode n'était pas qu'une question de tissu, mais une question d'émotion, de respect et de transmission.",
                    "Chaque création Algueye porte en elle ce souvenir : celui d'un regard émerveillé posé sur le savoir-faire des anciens."
                ]}
            />

            {/* ── Chapitre 2: Dakar ────────────────────────── */}
            <StoryChapter
                chapterNumber="CHAPITRE II"
                title="Dakar dans les Veines"
                subtitle="Le souffle de la ville"
                image={dakarImg}
                reverse={true}
                darkTheme={true}
                content={[
                    "Dakar n'est pas seulement notre port d'attache ; c'est notre muse. Entre la poussière ocre, les embruns de l'Atlantique et l'énergie vibrante des marchés, la ville respire à travers nos pièces.",
                    "Nous puisons dans cette dualité — entre héritage ancestral et modernité urbaine — pour créer un style qui ne ressemble à aucun autre. Un style qui parle au monde depuis le cœur du Sénégal.",
                    "Porter Algueye, c'est emporter avec soi un fragment de cette lumière dakaroise, solaire et indomptable."
                ]}
            />

            {/* ── Chapitre 3: L'Artisanat ───────────────────── */}
            <StoryChapter
                chapterNumber="CHAPITRE III"
                title="La Patience de l'Artisan"
                subtitle="L'éloge de la lenteur"
                image={artisanImg}
                content={[
                    "Dans un monde qui court après la tendance éphémère, nous avons choisi le chemin de la patience. Chaque broderie, chaque drapé est le fruit de dizaines d'heures de travail minutieux.",
                    "Nos artisans ne se contentent pas de coudre ; ils tissent des liens entre le passé et le futur. Leurs mains connaissent le secret des matières, la tension juste d'un fil d'or, la souplesse d'un coton tissé.",
                    "L'excellence n'est pas un but, c'est une exigence quotidienne. C'est ce qui rend chaque pièce Algueye éternelle."
                ]}
            />

            {/* ── Valeurs Incarnées ─────────────────────────── */}
            <section className="bg-black py-24! border-y! border-gray-100!">
                <div className="container mx-auto! px-6!">
                    <div className="relative flex w-full flex-col-reverse pt-5! ">
                        <h2 className="uppercase font-bold text-balance text-3xl lg:text-6xl block">
                            Nos Valeurs<em className="not-italic" style={{ color: 'var(--color-gold)' }}> Incarnées.</em>
                        </h2>
                        <span className="w-full rotate-[-2deg] font-serif  text-gold font-quickbrush -mb-2 xl:-mb-4 text-3xl lg:text-5xl">
                            Esprit Algueye
                        </span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-16">
                        {[
                            { label: 'Excellence', img: imgA9, desc: "Chaque point de couture, chaque coupe est pensé avec une exigence absolue. L'imperfection n'a pas sa place dans notre atelier." },
                            { label: 'Authenticité', img: imgB1, desc: "Nos créations s'ancrent dans l'identité africaine — ses textures, ses pigments, ses rythmes — pour rayonner sur la scène internationale." },
                            { label: 'Intemporalité', img: imgB2, desc: "Nous créons contre la tyrannie des tendances. Une pièce Algueye doit traverser les décennies sans jamais vieillir." },
                            { label: 'Artisanat', img: imgB3, desc: "Le savoir-faire est transmis de main en main. Chaque broderie, chaque drapé est l'œuvre d'artisans formés avec patience." }
                        ].map((v, i) => (
                            <div key={i} className="flex flex-col gap-6 group">
                                <div className="aspect-[3/4] overflow-hidden  relative">
                                    <img src={v.img} alt={v.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <span className="text-gold font-serif text-2xl">0{i+1}.</span>
                                    <h3 className="text-xl font-bold uppercase tracking-widest text-white">{v.label}</h3>
                                    <p className="text-white/60 leading-relaxed raleway text-sm">{v.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Manifeste ────────────────────────────────── */}
            <section className="bg-gold py-32! lg:py-48!" ref={manifestoRef}>
                <div className="container max-w-4xl mx-auto px-6 text-center">
                    <div className="relative flex w-full flex-col-reverse pt-5! ">
                        <h2 className="uppercase font-bold text-balance text-3xl lg:text-6xl block">
                            Notre<em className="not-italic" style={{ color: 'var(--color-black)' }}> Manifeste</em>
                        </h2>
                        <span className="w-full rotate-[-2deg] font-serif  text-black font-quickbrush -mb-2 xl:-mb-4 text-3xl lg:text-5xl">
                            Esprit Algueye
                        </span>
                    </div>
                    <blockquote className="text-3xl lg:text-5xl font-serif italic text-white/90 leading-tight mb-12">
                        "Nous ne créons pas des vêtements. <br/>
                        <span className="text-black">Nous façonnons des identités.</span> <br/>
                        Nous tissons des histoires qui voyagent, <br/>
                        des racines qui s'envolent."
                    </blockquote>
                    <div className="w-20 h-[1px] bg-gold mx-auto mb-8" />
                    <p className="uppercase tracking-[0.3em] text-xs text-white/40">
                        — Abdou Lahad GUEYE, Fondateur
                    </p>
                </div>
            </section>

            {/* ── Les Secrets de Confection ────────────────── */}
            <IngredientsDetailSection/>

            {/* ── Chapitre 4: L'Héritage ───────────────────── */}
            <StoryChapter
                chapterNumber="CHAPITRE IV"
                title="L'Écho du Monde"
                subtitle="Un héritage sans frontières"
                image={heroImg}
                reverse={true}
                content={[
                    "Aujourd'hui, Algueye Dakar franchit les océans. De Paris à Lagos, de New York à Tokyo, notre vision de l'élégance africaine s'impose par sa justesse et son intemporalité.",
                    "Mais peu importe où nos collections voyagent, elles reviennent toujours à leur essence : l'authenticité. Nous restons fidèles à nos valeurs de transmission et d'artisanat d'excellence.",
                    "L'aventure ne fait que commencer. Chaque nouveau client, chaque nouvelle rencontre est un nouveau chapitre que nous écrivons ensemble."
                ]}
            />

            {/* Gallery for L'Echo du Monde */}
            <section className="bg-white py-20! overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="aspect-[4/5] overflow-hidden  shadow-xl">
                            <img src={imgWorld1} alt="Algueye World" className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                        </div>
                        <div className="aspect-[4/5] overflow-hidden  shadow-xl md:translate-y-12">
                            <img src={imgWorld2} alt="Algueye World" className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                        </div>
                        <div className="aspect-[4/5] overflow-hidden  shadow-xl">
                            <img src={imgWorld3} alt="Algueye World" className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Chiffres Clés ────────────────────────────── */}
            <section className="bg-black py-24! text-white">
                <div className="container mx-auto px-6">
                    <div className="relative flex w-full text-center flex-col-reverse pt-5! ">
                        <h2 className="uppercase font-bold text-balance text-3xl lg:text-6xl block">
                            Réalisations <em className="not-italic" style={{ color: 'var(--color-gold)' }}>Clés</em>
                        </h2>
                        <span className="w-full rotate-[-2deg] font-serif  text-gold font-quickbrush -mb-2 xl:-mb-4 text-3xl lg:text-5xl">
                            Notre histoire en chiffres
                        </span>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
                        {[
                            { num: '2012', label: "Le début d'un rêve à Dakar" },
                            { num: '1000+', label: 'Âmes sublimées par nos coupes' },
                            { num: '30+', label: "Frontières franchies par l'élégance" },
                            { num: '80+', label: 'Heures de dévouement par pièce' }
                        ].map((s, i) => (
                            <div key={i} className="text-center group">
                                <div className="text-4xl lg:text-7xl font-serif text-gold mb-2 group-hover:scale-110 transition-transform duration-500">{s.num}</div>
                                <div className="text-[10px] lg:text-xs uppercase tracking-[0.3em] text-white/50 leading-relaxed">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA Final ────────────────────────────────── */}
            <section className="bg-white py-24! text-center border-t border-gray-100">
                <div className="container mx-auto px-6">
                    <div className="relative flex w-full text-center flex-col-reverse pt-5! ">
                        <h2 className="uppercase font-bold text-balance text-black text-3xl lg:text-6xl block">
                            Rejoignez <em className="not-italic" style={{ color: 'var(--color-gold)' }}>l'Aventure</em>
                        </h2>
                        <span className="w-full rotate-[-2deg] font-serif  text-gold font-quickbrush -mb-2 xl:-mb-4 text-3xl lg:text-5xl">
                            Un univers à portée de main
                        </span>
                    </div>
                    <p className="text-gray-600 max-w-2xl mx-auto! mb-12! text-lg lg:text-xl">
                        Que ce soit pour une pièce sur-mesure ou pour découvrir nos collections, 
                        chaque rencontre commence par une histoire.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <a href="/contact" className="btn-gold">
                            <span>Écrivons votre histoire</span>
                        </a>
                        <a href="/collections" className="btn-outline">
                            <span>Explorer les collections</span>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
