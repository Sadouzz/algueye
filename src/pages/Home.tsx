import Ticker from "../components/atoms/Ticker";
import Hero from "../components/Hero";
import StorySection from "../components/sections/StorySection";
import { HorizontalGallery } from "../components/sections/HorizontalGallery";
import Testimonials from "../components/sections/Testimonials";
import PartnersSection from "../components/sections/PartnersSection";
import InstagramFeed from "../components/sections/InstagramFeed";
import CircularGallery from "../components/atoms/CircularGallery";
import { collections } from "../data/collections.data";
import { Link } from "react-router-dom";
import ng1 from '../assets/tenues/naru-goor/img1.png';

export default function Home() {
    // Map collections to the format expected by CircularGallery
    // Duplicate to ensure the gallery is full enough
    const galleryItems = [...collections, ...collections].map(collection => ({
        image: collection.img,
        text: collection.title
    }));

    return (
        <div className="min-h-screen ">
            <Hero></Hero>
            <Ticker></Ticker>
            <StorySection></StorySection>
            <div className="bg-white">
                <div className="relative flex w-full flex-col-reverse pt-15! text-center">
                    <h2 className="uppercase font-bold text-black text-balance text-7xl lg:text-8xl block">
                        SOPHISTIQUÉES. RAFFINÉES.<em style={{ color: 'var(--color-gold)' }}> INTEMPORELLES.</em>
                    </h2>
                    <span className="w-full rotate-[-2deg] font-serif text-center text-gold font-quickbrush -mb-2 xl:-mb-4 text-4xl lg:text-6xl">
                        Nos Collections
                    </span>
                </div>
                {/* <div className="pt-15!" style={{ textAlign: 'center'}}>
                    <div className="section-label " style={{ justifyContent: 'center', marginBottom: '1rem' }}>
                        <span>Explorer</span>
                    </div>
                    <h2 className="text-black text-3xl" style={{ marginBottom: '0' }}>Nos Collections</h2>
                </div> */}
            </div>
            <div className="bg-white pb-5!" style={{ height: '600px', position: 'relative' }}>

                <CircularGallery
                    items={galleryItems}
                    bend={1}
                    textColor="#000"
                    borderRadius={0}
                    font="bold 30px serif"
                    scrollSpeed={2}
                    scrollEase={0.05}
                />
            </div>
            <div className="bg-white border-b-1 border-gold-dark pb-15! flex justify-center ">
                <Link to="/collections" className="btn-gold mt-4!">
                    <span>Découvrir nos collections</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </Link>
            </div>

            {/* Section Naru Goor — Editorial */}
            <div className="w-full bg-black flex flex-col md:flex-row min-h-[50vh]! overflow-hidden">
                {/* Colonne image */}
                <div className="relative w-full md:w-1/2 h-[50vh] md:h-auto overflow-hidden">
                    <img
                        src={ng1}
                        alt="Naru Goor"
                        className="w-full h-full object-cover object-center opacity-70 hover:opacity-90 hover:scale-105 transition-all! duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent md:bg-gradient-to-r" />
                </div>

                {/* Colonne texte */}
                <div className="w-full md:w-1/2 flex flex-col justify-center px-10! md:px-20! text-white">
                    <span className="text-[var(--color-gold)] tracking-[0.4em] text-xs uppercase font-bold">Sous-marque exclusive</span>
                    <div className="relative flex w-full flex-col-reverse pt-5! ">
                        <h2 className="uppercase font-bold text-balance text-7xl lg:text-8xl block">
                            Naru <em className="not-italic" style={{ color: 'var(--color-gold)' }}>Goor</em>
                        </h2>
                        <span className="w-full rotate-[-2deg] font-serif  text-gold font-quickbrush -mb-2 xl:-mb-4 text-4xl lg:text-6xl">
                            L'élégance masculine
                        </span>
                    </div>

                    <p className="text-gray-300 max-w-sm text-base md:text-lg font-light leading-[1.9] mb-5!">
                        Naru Goor est la collection exclusive d'ALGUEYE dédiée à l'homme moderne. Des créations qui allient le charisme africain à une coupe contemporaine.
                    </p>

                    <Link to="/naru-goor" className="btn-gold self-start">
                        <span>Explorer Naru Goor</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>

            <HorizontalGallery></HorizontalGallery>
            <PartnersSection></PartnersSection>
            <InstagramFeed></InstagramFeed>
            {/* <ScrubbedBentoGallery></ScrubbedBentoGallery> */}
            <Testimonials></Testimonials>
        </div>
    )
}