//import imgHeroHome from '../assets/imgHeroHome.png'

// --- SVGs et Icônes ---
// const MainLogo = () => (
//     <>
//         <img src={imgHeroHome} alt="" /></>

// );

// --- Composants de la page ---

const HeroSection = () => (
    <section className="relative z-aboveTop flex h-[200vh] w-full" data-top-hide="true">
        <div className="sticky left-0 top-0 flex h-screen w-full overflow-hidden">
            <div className="absolute left-0 top-0 z-10 h-screen w-full bg-dough-500 mix-blend-lighten">
                <div className="absolute left-0 top-0 z-10 flex h-screen w-full items-center justify-center overflow-hidden">
                    <div className="absolute z-10 flex flex-1 items-center justify-center">
                        <h1 className="mx-[28px] text-balance text-center text-[75px] leading-[0.9] text-black sm:text-[100px] md:text-9xl font-druk block">
                            DES ÉTOFFES NOBLES.<br />
                            DES COUPES PRÉCISES.<br />
                            UNE ÉLÉGANCE.
                        </h1>
                    </div>
                </div>
            </div>
            <div className="absolute left-0 top-0 z-20 flex h-screen w-full items-center justify-center">
                <div className="absolute z-10 flex flex-1 items-center justify-center">
                    <h1 aria-hidden="true" className="mx-[28px] text-balance text-center text-[75px] leading-[0.9] text-transparent sm:text-[100px] md:text-[120px] lg:text-[160px] font-druk">
                        DES ÉTOFFES NOBLES.<br />
                        DES COUPES PRÉCISES.<br />
                        UNE ÉLÉGANCE.
                    </h1>
                    <img alt="Cercle de mise en valeur" aria-hidden="true" className="absolute left-[50%] block aspect-[2618/1004] max-w-none translate-x-[-50%] mix-blend-normal bottom-[-48px] w-[90%] sm:bottom-[-40px] sm:w-[70%] md:bottom-[-88px] md:w-[80%] lg:bottom-[-64px] lg:w-[75%] xl:bottom-[-88px]" src="/images/highlight.png" />
                </div>
                <button className="absolute bottom-[15svh] md:bottom-5" tabIndex={0} aria-label="Faites défiler vers le bas pour explorer nos créations">
                    <div className="relative flex items-center justify-center gap-3" aria-hidden="true">
                        <div className="relative h-[48px] w-[48px] overflow-hidden rounded-[50%] border-[1px] border-solid border-black bg-white">
                            {/* Icônes de défilement */}
                        </div>
                    </div>
                </button>
            </div>
            <div className="relative h-full w-full" id="mux-video-wrapper">
                <img alt="Détail de couture haute couture" className="absolute inset-0 -z-10 h-full w-full object-cover" src="https://example.com/thumbnail-atelier.jpg" />
                <div aria-hidden="true" style={{ width: '100%', height: '100%' }}>
                    {/* Vidéo d'un tailleur au travail */}
                    <video preload="auto" loop style={{ objectFit: 'cover', height: '100%', width: '100%' }} playsInline autoPlay src="blob:https://www.algueyedakar.com/video-atelier"></video>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 flex uppercase">
                {/* Bandeau de matières animées */}
                <div className="hidden w-full pb-4 md:flex">
                    <div className="flex w-full flex-1 items-center px-10">
                        <h2 className="font-druk text-8xl text-gold xl:text-[160px]">Soie</h2>
                        <div className="mx-[20px] h-[10px] flex-1 bg-gold xl:mx-[64px]"></div>
                        <h2 className="font-druk text-8xl text-gold xl:text-[160px]">Bazin</h2>
                        <div className="mx-[20px] h-[10px] flex-1 bg-gold xl:mx-[64px]"></div>
                        <h2 className="font-druk text-8xl text-gold xl:text-[160px]">Lin</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const IngredientsDetailSection = () => (
    <section className="relative z-10 mb-14 flex max-w-[120rem] items-center justify-center bg-dough-500 lg:my-24 lg:px-[64px]">
        <div className="relative mx-6 my-6 grid grid-cols-1 items-center gap-8 text-center lg:mx-0 lg:my-0 lg:grid-cols-12 lg:gap-20 lg:text-left">
            <div className="relative row-start-2 aspect-square lg:col-span-6 lg:row-start-auto">
                <div className="h-full w-full">
                    <img alt="Atelier de couture haute couture" loading="lazy" src="https://example.com/atelier-couture.jpeg" className="absolute inset-0 h-full w-full object-cover" />
                </div>
            </div>
            <div className="flex flex-col gap-8 lg:col-span-6 lg:col-start-7">
                <div className="relative mt-16 flex flex-col gap-8 md:mt-4 lg:-mt-4">
                    <h2 className="uppercase font-druk text-7xl text-balance block">Le secret de nos créations</h2>
                    <span className="w-full rotate-[-2deg] text-center text-gold font-quickbrush -mb-2 text-4xl lg:text-5xl lg:text-start block">L'exigence absolue</span>
                    <p>Chez Algueye DAKAR, nous croyons obstinément que l'élégance véritable ne se précipite pas. Alors que l'industrie s'accélère, nous chérissons l'art lent de la haute couture, avec un travail manuel méticuleux et des finitions qui exigent des dizaines d'heures d'attention.</p>
                </div>
                <div className="grid gap-x-14 gap-y-8 md:grid-cols-2">
                    <div className="flex flex-col gap-3">
                        <h3 className="text-xl font-bold">Coupe millimétrée</h3>
                        <p className="text-balance text-base">Notre processus sur mesure permet à chaque étoffe de déployer tout son potentiel pour épouser parfaitement votre silhouette...</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h3 className="text-xl font-bold">Matières d'exception</h3>
                        <p className="text-balance text-base">Nos créations ne sont pas seulement majestueuses, elles sont confectionnées avec des tissus nobles qui respirent et subliment le porteur...</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h3 className="text-xl font-bold">Durabilité intemporelle</h3>
                        <p className="text-balance text-base">En prenant le temps de renforcer chaque point à la main, nous garantissons la longévité de votre vêtement, de génération en génération...</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h3 className="text-xl font-bold">Finitions sophistiquées</h3>
                        <p className="text-balance text-base">Le travail acharné de nos maîtres-tailleurs donne à nos tenues cette allure prestigieuse et ce tombé irréprochable...</p>
                    </div>
                </div>
            </div>

            {/* Coins Décoratifs */}
            <div aria-hidden="true" className="absolute size-[120px] lg:size-[175px] -top-3 -left-3 lg:-top-5 lg:-left-5 scale-x-[-1]" style={{ maskSize: '100% 100%', maskImage: 'url("/images/image_corner.png")', backgroundColor: 'var(--color-gold)' }}></div>
            <div aria-hidden="true" className="absolute size-[120px] lg:size-[175px] -top-3 -right-3 lg:-top-5 lg:-right-5" style={{ maskSize: '100% 100%', maskImage: 'url("/images/image_corner.png")', backgroundColor: 'var(--color-gold)' }}></div>
            <div aria-hidden="true" className="absolute size-[120px] lg:size-[175px] -bottom-3 -right-3 lg:-bottom-5 lg:-right-5 rotate-180 scale-x-[-1]" style={{ maskSize: '100% 100%', maskImage: 'url("/images/image_corner.png")', backgroundColor: 'var(--color-gold)' }}></div>
            <div aria-hidden="true" className="absolute size-[120px] lg:size-[175px] -bottom-4 -left-3 lg:-bottom-7 lg:-left-7 rotate-180" style={{ maskSize: '100% 100%', maskImage: 'url("/images/image_corner.png")', backgroundColor: 'var(--color-gold)' }}></div>
        </div>
    </section>
);

const StorySection = () => (
    <div>
        <div className="sticky top-0 flex min-h-[400px] w-full flex-col justify-between bg-dough-500 px-4 pt-32 lg:min-h-[600px] lg:px-6 lg:pt-28">
            <div>
                <h2>
                    <span className="font-druk text-7xl uppercase lg:text-9xl">Nos créations.</span><br />
                    <span className="font-druk text-7xl uppercase lg:text-9xl">Votre allure.</span><br />
                    <span className="font-druk text-7xl uppercase lg:text-9xl"><span className="font-druk text-gold">Héritage.</span></span><br />
                </h2>
            </div>
            <div className="mb-[-0.9rem] flex items-center justify-end gap-6">
                <h2 className="font-druk text-6xl uppercase text-white lg:text-9xl">©2010</h2>
                <div className="h-2 w-16 bg-white lg:w-[156px]"></div>
                <h2 className="font-druk text-6xl uppercase text-white lg:text-9xl">2026</h2>
            </div>
        </div>

        <div className="sticky top-0 z-40 h-5 bg-white"></div>
        <div className="relative z-aboveTop bg-white px-4 pb-4 pt-4 lg:px-6 lg:pb-14 lg:pt-3">
            {/* Contenu Éditorial */}
            <div className="relative w-full text-start">
                <div className="relative aspect-square lg:aspect-video">
                    <img alt="Boutique de luxe" loading="lazy" src="https://example.com/boutique-luxe-dakar.jpg" className="absolute inset-0 h-full w-full object-cover" />
                    <div className="absolute hidden max-w-[450px] border border-black bg-white p-6 lg:block bottom-6 left-6">
                        <div className="flex flex-col gap-6">
                            <h2 className="font-druk text-6xl uppercase">Le grand boubou est-il l'ultime vêtement de luxe ?</h2>
                            <p className="line-clamp-3">Les esthètes et célébrités du monde entier qui visitent notre atelier s'accordent souvent à dire que l'art de la broderie manuelle...</p>
                            <a className="font-medium" href="/editorial/boubou-ultime-luxe">Lire l'article</a>
                        </div>
                    </div>
                </div>
            </div>

            <a className="text-base font-medium whitespace-nowrap content-center px-6 py-3 bg-white text-black flex items-center gap-2.5 border border-black justify-center mt-2 lg:mt-10" href="/editorial">
                Parcourir l'éditorial complet
            </a>
        </div>
    </div>
);

const MenuSection = () => (
    <section className="relative flex w-full flex-col items-center justify-around gap-48 overflow-hidden bg-dough-500 px-4 pt-32 lg:px-6 lg:pt-48 mb-[-6rem]" data-top-hide="false">
        <div className="relative flex w-full flex-1 flex-col items-center justify-center text-center">
            <div className="relative flex w-full flex-col items-center">
                <div className="relative flex w-full flex-col-reverse">
                    <h2 className="uppercase font-druk text-balance text-7xl lg:text-8xl block">
                        SOPHISTIQUÉES. RAFFINÉES. INTEMPORELLES.
                    </h2>
                    <span className="w-full rotate-[-2deg] text-center text-gold font-quickbrush -mb-2 xl:-mb-4 text-4xl lg:text-6xl block">
                        Nos Collections
                    </span>
                </div>
                <p className="mt-8 max-w-[600px]">Nos créations mettent à l'honneur des étoffes prestigieuses et un artisanat d'art, travaillés minutieusement chaque jour. Et au cœur de tout cela, il y a la coupe parfaite qui révèle votre prestance.</p>
                <a className="text-base font-medium whitespace-nowrap content-center px-6 py-3 bg-black text-white flex items-center gap-2.5 border border-black justify-center mt-8 w-fit" href="/collections">
                    Laissez-vous inspirer par nos collections
                </a>
            </div>
        </div>

        <div className="relative flex w-[220%] -translate-y-[20%] translate-x-20 md:w-full md:translate-x-0">
            <div className="relative -mx-[40px] flex aspect-[1.49] flex-1 items-center justify-center overflow-hidden bg-white p-[5px]" style={{ transform: 'rotate(-9deg)' }}>
                <img alt="Costume sur mesure" loading="lazy" src="https://example.com/costume-1.jpg" className="absolute inset-0 h-full w-full object-cover" />
            </div>
            <div className="relative -mx-[40px] flex aspect-[1.49] flex-1 items-center justify-center overflow-hidden bg-white p-[5px]" style={{ transform: 'rotate(2deg)' }}>
                <img alt="Tenue traditionnelle brodée" loading="lazy" src="https://example.com/boubou-1.jpg" className="absolute inset-0 h-full w-full object-cover" />
            </div>
            <div className="relative -mx-[40px] flex aspect-[1.49] flex-1 items-center justify-center overflow-hidden bg-white p-[5px]" style={{ transform: 'rotate(-4deg)' }}>
                <img alt="Détail broderie" loading="lazy" src="https://example.com/broderie-1.jpg" className="absolute inset-0 h-full w-full object-cover" />
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

                <section className="sticky top-0 flex h-screen w-full items-center justify-center bg-dough-500">
                    <div className="relative mx-6 flex w-full justify-center">
                        <div className="relative flex w-full flex-col-reverse mb-8">
                            <span className="text-balance uppercase font-druk text-center text-5xl md:text-8xl block">
                                Une création sur mesure requiert 80 heures de travail.
                            </span>
                            <span className="w-full rotate-[-2deg] text-center text-gold font-quickbrush -mb-2 text-3xl md:text-5xl block">
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