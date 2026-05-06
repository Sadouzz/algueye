import React, { useRef, useState } from "react";
import HeroVideo from "./atoms/HeroVideo";
import img1 from "../assets/img1.jpg";
import imgHeroHome from "../assets/imgHeroHome.png";

const Hero: React.FC = () => {
    const sentinelRef = useRef<HTMLImageElement>(null);
    const [videoLoaded, setVideoLoaded] = useState<boolean>(false);

    return (
        <div
            id="hero"
            // Ajout de w-full ici :
            className="w-full flex justify-center items-center relative overflow-hidden"
            style={{
                height: "calc(100vh - 80px)"
            }}
        >
            {/* Image placeholder */}
            <img
                src={img1}
                alt="placeholder shadow-lg"
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    zIndex: 0,
                    transition: "opacity 0.8s ease",
                    opacity: videoLoaded ? 0 : 1,
                }}
            />

            {/* Vidéo */}
            <HeroVideo onLoaded={() => setVideoLoaded(true)} />

            {/* Contenu */}
            <div
                className="text-center text-white"
                style={{ zIndex: 1, position: "relative" }}
            >
                <img
                    ref={sentinelRef}
                    src={imgHeroHome}
                    alt="Toubacouta Evasion Logo"
                    style={{ maxWidth: "300px" }}
                />
            </div>
        </div>
    );
};

export default Hero;