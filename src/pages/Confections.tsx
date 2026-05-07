//import imgHeroHome from '../assets/imgHeroHome.png'
import videoMp4 from '../assets/vidCouture.mp4';
import imgA7 from '../assets/tenues/A7.jpeg';
import imgA8 from '../assets/tenues/A8.jpeg';
import imgB1 from '../assets/tenues/B1.jpeg';
import imgB2 from '../assets/tenues/B2.jpeg';
import imgB3 from '../assets/tenues/B3.jpeg';
import { Link } from 'react-router-dom';
import { useState } from 'react';

// --- SVGs et Icônes ---
// const MainLogo = () => (
//     <>
//         <img src={imgHeroHome} alt="" /></>

// );

// --- Composants de la page ---

const HeroSection = () => {
    const [videoLoaded, setVideoLoaded] = useState(false);

    return (
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
            <div className="absolute inset-0 bg-black/40 z-[1]"></div>
            
            <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 w-full h-full">
                <h1 className="text-balance text-5xl leading-[1.1] text-white sm:text-[70px] md:text-8xl font-bold uppercase block shadow-sm">
                    DES ÉTOFFES NOBLES.<br />
                    DES COUPES PRÉCISES.<br />
                    <em style={{ color: 'var(--color-gold-light)', fontStyle: 'normal' }}>UNE ÉLÉGANCE.</em>
                </h1>
                
                <button className="absolute bottom-[5svh] md:bottom-10" tabIndex={0} aria-label="Faites défiler vers le bas pour explorer nos créations">
                    <div className="relative flex items-center justify-center gap-3 animate-bounce" aria-hidden="true">
                        <div className="relative h-[48px] w-[48px] flex items-center justify-center overflow-hidden rounded-[50%] border border-solid border-white/50 bg-black/20 backdrop-blur-sm text-white">
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
    );
};

const IngredientsDetailSection = () => (
    <section className="relative z-10 mb-14 flex max-w-[120rem] items-center justify-center bg-black lg:my-24 lg:px-[64px]">
        <div className="relative mx-6 my-6 grid grid-cols-1 items-center gap-8 text-center lg:mx-0 lg:my-0 lg:grid-cols-12 lg:gap-20 lg:text-left">
            <div className="relative row-start-2 aspect-square lg:col-span-6 lg:row-start-auto">
                <div className="h-full w-full">
                    <img alt="Atelier de couture haute couture" loading="lazy" src={imgA8} className="absolute inset-0 h-full w-full object-cover shadow-2xl" />
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

const StorySection = () => (
    <div>
        <div className="sticky top-0 flex min-h-[400px] w-full flex-col justify-between bg-gold-light px-4 pt-32 lg:min-h-[600px] lg:px-6! lg:pt-28!">
            <div>
                <h2 className="font-bold text-5xl lg:text-8xl! uppercase leading-[1.1]">
                    Nos créations.<br />
                    Votre allure.<br />
                    <em style={{ color: 'var(--color-gold-dark)' }}>Héritage.</em>
                </h2>
            </div>
            <div className="mb-[-0.9rem] flex items-center justify-end gap-6">
                <h2 className="font-bold text-4xl lg:text-7xl uppercase text-white">©2010</h2>
                <div className="h-2 w-16 bg-white lg:w-[156px]"></div>
                <h2 className="font-bold text-4xl lg:text-7xl uppercase text-white">2026</h2>
            </div>
        </div>

        <div className="relative z-aboveTop bg-white px-4 pb-4 pt-4 lg:px-6 lg:pb-14 lg:pt-3 text-black">
            {/* Contenu Éditorial */}
            <div className="relative w-full text-start">
                <div className="relative aspect-square lg:aspect-video rounded-xl overflow-hidden shadow-2xl">
                    <img alt="Boutique de luxe" loading="lazy" src={imgB1} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
                    <div className="absolute hidden max-w-[450px] border border-black bg-white p-6! lg:block bottom-6 left-6">
                        <div className="flex flex-col gap-6">
                            <h2 className="font-bold text-3xl lg:text-4xl uppercase">
                                Le grand boubou est-il
                                <em style={{ color: 'var(--color-gold-dark)' }}> l'ultime vêtement de luxe ?</em>
                            </h2>
                            <p className="line-clamp-3">Les esthètes et célébrités du monde entier qui visitent notre atelier s'accordent souvent à dire que l'art de la broderie manuelle...</p>
                            <a className="font-medium" href="/editorial/boubou-ultime-luxe">Lire l'article</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
);

const MenuSection = () => (
    <section className="relative flex w-full flex-col items-center justify-around gap-48 overflow-hidden bg-dough-500 px-4 pt-32! lg:px-6 lg:pt-48! pb-[6rem]! bg-black" data-top-hide="false">
        <div className="relative flex w-full flex-1 flex-col items-center justify-center text-center">
            <div className="relative flex w-full flex-col items-center">
                <div className="relative flex w-full flex-col-reverse">
                    <h2 className="uppercase font-bold text-balance text-4xl lg:text-8xl block">
                        SOPHISTIQUÉES. RAFFINÉES.
                        <em style={{ color: 'var(--color-gold)' }}> INTEMPORELLES.</em> 
                    </h2>
                    <span className="w-full rotate-[-2deg] font-serif text-center text-gold font-quickbrush -mb-2 xl:-mb-4 text-4xl lg:text-6xl block">
                        Nos Collections
                    </span>
                </div>
                <p className="mt-8 max-w-[600px]">Nos créations mettent à l'honneur des étoffes prestigieuses et un artisanat d'art, travaillés minutieusement chaque jour. Et au cœur de tout cela, il y a la coupe parfaite qui révèle votre prestance.</p>
                <Link to="/collections" className="btn-gold mt-4!">
                    <span>Découvrir nos collections</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </Link>
            </div>
        </div>

        <div className="relative flex w-[220%] -translate-y-[20%] translate-x-20 md:w-full md:translate-x-0 pb-16">
            <div className="relative -mx-[40px] flex aspect-[1.49] flex-1 items-center justify-center overflow-hidden bg-white p-[5px] shadow-xl hover:z-10 transition-transform hover:scale-105" style={{ transform: 'rotate(-9deg)' }}>
                <img alt="Costume sur mesure" loading="lazy" src={imgB1} className="absolute inset-0 h-full w-full object-cover" />
            </div>
            <div className="relative -mx-[40px] flex aspect-[1.49] flex-1 items-center justify-center overflow-hidden bg-white p-[5px] shadow-xl hover:z-10 transition-transform hover:scale-105" style={{ transform: 'rotate(2deg)' }}>
                <img alt="Tenue traditionnelle brodée" loading="lazy" src={imgB2} className="absolute inset-0 h-full w-full object-cover" />
            </div>
            <div className="relative -mx-[40px] flex aspect-[1.49] flex-1 items-center justify-center overflow-hidden bg-white p-[5px] shadow-xl hover:z-10 transition-transform hover:scale-105" style={{ transform: 'rotate(-4deg)' }}>
                <img alt="Détail broderie" loading="lazy" src={imgB3} className="absolute inset-0 h-full w-full object-cover" />
            </div>
        </div>
    </section>
);

// --- Composant Principal de la Page ---

export default function Confections() {
    return (
        <main className="flex min-h-svh flex-col">
            <div id="main-content">
                <HeroSection />

                <section className="sticky top-0 flex h-screen w-full items-center justify-center bg-white">
                    <div className="relative mx-6 flex w-full justify-center">
                        <div className="relative flex w-full flex-col-reverse mb-8">
                            <h2 className="uppercase font-bold text-balance text-center text-black text-4xl md:text-6xl! block mt-6!">
                                Une création sur mesure requiert<br/>
                                <em style={{ color: 'var(--color-gold-dark)' }}> + 80 heures de travail.</em>
                            </h2>
                            <span className="w-full font-serif rotate-[-2deg] text-center text-gold font-quickbrush mb-1! text-4xl md:text-6xl block">
                                L'art de la perfection
                            </span>
                        </div>
                    </div>
                    {/* Le pattern "basket" est conservé pour ne pas briser la mise en page, vous pourrez le remplacer par un motif "tissu/couture" */}
                    <div className="absolute bottom-0 left-0 right-0 h-[120px] bg-basket-pattern bg-[length:30px] bg-repeat-x"></div>
                </section>

                <IngredientsDetailSection />
                <StorySection />
                <MenuSection />
            </div>
        </main>
    );
}