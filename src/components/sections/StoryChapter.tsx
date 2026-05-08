import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useIsDesktop from '../../hooks/useIsDesktop';

gsap.registerPlugin(ScrollTrigger);

interface StoryChapterProps {
    chapterNumber: string;
    title: string;
    subtitle?: string;
    content: string[];
    image: string;
    reverse?: boolean;
    darkTheme?: boolean;
}

export default function StoryChapter({
    chapterNumber,
    title,
    subtitle,
    content,
    image,
    reverse = false,
    darkTheme = false
}: StoryChapterProps) {
    const isDesktop = useIsDesktop();
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (textRef.current) {
                gsap.from(textRef.current.children, {
                    y: 30,
                    opacity: 0,
                    stagger: 0.2,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: textRef.current,
                        start: 'top 80%',
                    }
                });
            }

            if (imageRef.current) {
                gsap.from(imageRef.current, {
                    scale: 1.1,
                    opacity: 0,
                    duration: 1.5,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: imageRef.current,
                        start: 'top 85%',
                    }
                });
            }
        });

        return () => ctx.revert();
    }, []);

    const themeStyles = darkTheme 
        ? { bg: 'bg-black', text: 'text-white', muted: 'text-white/60', gold: 'text-gold' }
        : { bg: 'bg-white', text: 'text-black', muted: 'text-gray-600', gold: 'text-gold-dark' };

    return (
        <section 
            ref={containerRef}
            className={`${themeStyles.bg} py-24! lg:py-32! px-6! lg:px-12! overflow-hidden`}
        >
            <div className={`max-w-7xl mx-auto! flex flex-col ${reverse && isDesktop ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12! lg:gap-24!`}>
                
                {/* Image Section */}
                <div 
                    ref={imageRef}
                    className="w-full lg:w-1/2 aspect-[4/5] relative overflow-hidden!"
                >
                    <img 
                        src={image} 
                        alt={title}
                        className="w-full h-full object-cover!"
                    />
                    <div className="absolute inset-0 border-[1px] border-gold/20 m-4 pointer-events-none" />
                </div>

                {/* Text Section */}
                <div 
                    ref={textRef}
                    className="w-full lg:w-1/2 flex flex-col gap-6"
                >
                    
                    <div className="flex flex-col">
                        <span className={`font-serif italic ${themeStyles.gold} text-lg lg:text-xl mb-2`}>
                            {chapterNumber}
                        </span>
                        <h2 className={`text-4xl lg:text-6xl font-bold uppercase ${themeStyles.text} leading-tight`}>
                            {title}
                        </h2>
                        {subtitle && (
                            <span className={`font-quickbrush ${themeStyles.gold} text-3xl lg:text-4xl mt-2 rotate-[-2deg]`}>
                                {subtitle}
                            </span>
                        )}
                    </div>

                    <div className="space-y-6 mt-4">
                        {content.map((paragraph, index) => (
                            <p 
                                key={index}
                                className={`text-lg lg:text-xl leading-relaxed raleway ${themeStyles.muted}`}
                            >
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
