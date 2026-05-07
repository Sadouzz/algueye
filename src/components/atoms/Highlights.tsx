import React from 'react';

// --- Types ---
interface ButtonProps {
    label: string;
    href: string;
    primary?: boolean;
}

interface FeatureBlockProps {
    title: string;
    accentText: string;
    description: string;
    buttons: ButtonProps[];
    imageSrc: string;
    imageAlt: string;
    reverse?: boolean; // Permet d'inverser l'ordre Image/Texte sur desktop
}

// --- Sous-composant : Bloc de contenu ---
const FeatureBlock: React.FC<FeatureBlockProps> = ({
    title,
    accentText,
    description,
    buttons,
    imageSrc,
    imageAlt,
    reverse = false,
}) => {
    return (
        <div className="relative my-5! grid h-fit grid-cols-1 overflow-hidden border border-black bg-white lg:sticky lg:top-[5rem] lg:my-6! lg:min-h-[calc(100vh-100px)] lg:grid-cols-2">

            {/* Zone Image */}
            <div className={`relative aspect-square min-h-full lg:aspect-auto ${reverse ? 'lg:order-2' : 'lg:order-1'}`}>
                <img
                    src={imageSrc}
                    alt={imageAlt}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                />
            </div>

            {/* Zone Texte */}
            <div className={`flex flex-col items-center justify-center p-8 text-center md:p-16 ${reverse ? 'lg:border-l border-black lg:order-1' : 'lg:border-l border-black lg:order-2'}`}>
                <div className="relative flex w-full flex-col items-center">

                    {/* Titre et Accent */}
                    <div className="relative flex w-full flex-col-reverse mt-4 items-center">
                        <h2 className="text-balance uppercase font-black tracking-tighter text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-center leading-[0.9]">
                            {title}
                        </h2>
                        {/* Texte d'accentuation (style manuscrit/italique) */}
                        <span className="block w-full rotate-[-2deg] text-center text-primary font-serif italic mb-2 lg:-mb-4 text-4xl lg:text-5xl">
                            {accentText}
                        </span>
                    </div>

                    <p className="mx-auto mt-8 max-w-lg text-center text-gray-800 md:text-lg">
                        {description}
                    </p>

                    {/* Boutons */}
                    <div className="mt-10 flex flex-wrap justify-center gap-4">
                        {buttons.map((btn, index) => (
                            <a
                                key={index}
                                href={btn.href}
                                className={`text-base font-medium whitespace-nowrap px-8! py-3! flex items-center justify-center border border-black transition-colors duration-300 mb-5! ${btn.primary
                                        ? 'bg-gold text-white hover:bg-white hover:text-black'
                                        : 'bg-white text-black hover:bg-gray-100'
                                    }`}
                            >
                                {btn.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

interface HighlightsProps {
    features?: FeatureBlockProps[];
}

// --- Composant Principal ---
const Highlights: React.FC<HighlightsProps> = ({ features }) => {
    const defaultFeatures: FeatureBlockProps[] = [
        {
            title: "Nos Nouveaux Grains",
            accentText: "Découvrez",
            description: "Le café nourrit non seulement le corps, mais aussi l'esprit. Nos nouvelles torréfactions regorgent de notes florales et cacaotées, pures et authentiques !",
            buttons: [{ label: 'Voir notre carte', href: '#menu', primary: true }],
            imageSrc: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=1600&auto=format&fit=crop",
            imageAlt: "Tasse de café",
            reverse: false,
        }
    ];

    const displayFeatures = features || defaultFeatures;

    return (
        <section className="relative px-4! lg:px-8! bg-[#fcfcfc] py-12">
            <div className="relative max-w-[1800px] mx-auto">
                {displayFeatures.map((feature, index) => (
                    <FeatureBlock
                        key={index}
                        {...feature}
                        reverse={feature.reverse ?? index % 2 !== 0}
                    />
                ))}
            </div>
        </section>
    );
};

export default Highlights;