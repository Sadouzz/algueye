import Ticker from "../components/atoms/Ticker";
import Hero from "../components/Hero";
import StorySection from "../components/sections/StorySection";
import { HorizontalGallery } from "../components/sections/HorizontalGallery";
import ScrubbedBentoGallery from "../components/sections/ScrubbedBentoGallery";
import Testimonials from "../components/sections/Testimonials";
import CircularGallery from "../components/atoms/CircularGallery";

export default function Home() {
    return (
        <div className="min-h-screen ">
            <Hero></Hero>
            <Ticker></Ticker>
            <StorySection></StorySection>
            <div className="bg-white">
                <div className="pt-15!" style={{ textAlign: 'center'}}>
                    <div className="section-label " style={{ justifyContent: 'center', marginBottom: '1rem' }}>
                        <span>Explorer</span>
                    </div>
                    <h2 className="text-black text-3xl" style={{ marginBottom: '0' }}>Nos Collections</h2>
                </div>
            </div>
            <div className="bg-white border-b  border-gold-dark border-3 pb-5!" style={{ height: '1000px', position: 'relative' }}>
                
                <CircularGallery bend={1} textColor="#000" borderRadius={0}
                    scrollSpeed={2}
                    scrollEase={0.05}
                />
            </div>
            <HorizontalGallery></HorizontalGallery>
            <ScrubbedBentoGallery></ScrubbedBentoGallery>
            <Testimonials></Testimonials>
        </div>
    )
}