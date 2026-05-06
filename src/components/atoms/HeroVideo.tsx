import React, { useEffect, useState } from "react";
import vidPaysage from "../../assets/video.mp4";
import vidPortrait from "../../assets/video.mp4";

// Ajout des props pour communiquer avec le parent
interface HeroVideoProps {
    onLoaded?: () => void;
}

const HeroVideo: React.FC<HeroVideoProps> = ({ onLoaded }) => {
    const [isPortrait, setIsPortrait] = useState<boolean>(false);
    const [videoLoaded, setVideoLoaded] = useState<boolean>(false);

    useEffect(() => {
        const mediaQuery: MediaQueryList = window.matchMedia("(orientation: portrait)");

        const handleChange = (e: MediaQueryListEvent): void => {
            setIsPortrait(e.matches);
            setVideoLoaded(false); // reset fade quand on change orientation
        };

        // Vérification initiale
        setIsPortrait(mediaQuery.matches);

        // Listener
        mediaQuery.addEventListener("change", handleChange);

        return () => {
            mediaQuery.removeEventListener("change", handleChange);
        };
    }, []);

    // Fonction appelée quand la vidéo est prête
    const handleCanPlayThrough = () => {
        setVideoLoaded(true);
        if (onLoaded) {
            onLoaded(); // Prévient le parent de faire disparaître le placeholder
        }
    };

    return (
        <video
            key={isPortrait ? "portrait" : "paysage"}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            onCanPlayThrough={handleCanPlayThrough}
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
        >
            <source
                src={isPortrait ? vidPortrait : vidPaysage}
                type="video/mp4"
            />
        </video>
    );
};

export default HeroVideo;