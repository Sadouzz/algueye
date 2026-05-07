import Ticker from "../components/atoms/Ticker";
import Hero from "../components/Hero";
import StorySection from "../components/sections/StorySection";
import { HorizontalGallery } from "../components/sections/HorizontalGallery";
//import ScrubbedBentoGallery from "../components/sections/ScrubbedBentoGallery";
import Testimonials from "../components/sections/Testimonials";
import CircularGallery from "../components/atoms/CircularGallery";
import { collections } from "../data/collections.data";
import { Link } from "react-router-dom";

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
            <div className="bg-white border-b-1  border-gold-dark pb-15! flex justify-center ">
                <Link to="/collections" className="btn-gold mt-4!">
                    <span>Découvrir nos collections</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </Link>
            </div>
            <HorizontalGallery></HorizontalGallery>
            {/* <ScrubbedBentoGallery></ScrubbedBentoGallery> */}
            <Testimonials></Testimonials>
        </div>
    )
}