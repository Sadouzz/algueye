import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

// 1. Définition de la structure d'un projet
export interface Project {
    id?: string | number;
    slug?: string;
    link?: string;
    image: string;
    title: string;
    tags?: string[];
}

// 2. Définition des props du composant
interface CarouselParallaxProps {
    projects?: Project[];
}

const CarouselParallax: React.FC<CarouselParallaxProps> = ({ projects = [] }) => {
    // 3. Typage des références DOM
    const carouselRef = useRef<HTMLDivElement>(null);
    const carouselTrackRef = useRef<HTMLDivElement>(null);
    
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [isVisible, setIsVisible] = useState<boolean>(false);

    // Vérification de la disponibilité des projets
    const safeProjects = projects || [];
    const maxIndex = safeProjects.length - 1;

    // Observer pour détecter quand le carousel est visible
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                threshold: 0.3,
                rootMargin: '50px'
            }
        );

        if (carouselRef.current) {
            observer.observe(carouselRef.current);
        }

        return () => {
            if (carouselRef.current) {
                observer.unobserve(carouselRef.current);
            }
        };
    }, []);

    // Effet parallax sur les images
    const handleScroll = useCallback(() => {
        if (!isVisible || !carouselTrackRef.current) return;

        const slides = carouselTrackRef.current.querySelectorAll('.carousel-slide');
        slides.forEach((slide) => {
            // 4. Assertion en HTMLElement pour accéder aux styles
            const htmlSlide = slide as HTMLElement;
            const image = htmlSlide.querySelector('.carousel-image') as HTMLElement | null;
            const rect = htmlSlide.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Calcul de la position relative dans la fenêtre
            const scrollPercent = Math.max(0, Math.min(1,
                (windowHeight - rect.top) / (windowHeight + rect.height)
            ));

            // Effet parallax
            const parallaxOffset = scrollPercent * 40;
            if (image) {
                image.style.transform = `translate3d(0px, -${parallaxOffset}px, 0px)`;
            }
        });
    }, [isVisible]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    // Navigation
    const goToSlide = (index: number) => {
        if (safeProjects.length === 0) return;

        const newIndex = Math.max(0, Math.min(index, maxIndex));
        setCurrentIndex(newIndex);

        if (carouselTrackRef.current) {
            // Calcul dynamique basé sur la largeur réelle des slides
            const slideElement = carouselTrackRef.current.querySelector('.carousel-slide') as HTMLElement | null;
            if (slideElement) {
                const slideWidth = slideElement.offsetWidth;
                const trackWidth = carouselTrackRef.current.offsetWidth;
                const gap = 5; // 5% du viewport
                const gapPixels = (trackWidth * gap) / 100;
                const translateX = newIndex * (slideWidth + gapPixels);
                carouselTrackRef.current.style.transform = `translate3d(-${translateX}px, 0px, 0px)`;
            }
        }
    };

    const nextSlide = () => {
        if (safeProjects.length === 0) return;
        const nextIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
        goToSlide(nextIndex);
    };

    const prevSlide = () => {
        if (safeProjects.length === 0) return;
        const prevIndex = currentIndex <= 0 ? maxIndex : currentIndex - 1;
        goToSlide(prevIndex);
    };

    // Si pas de projets, afficher un message
    if (safeProjects.length === 0) {
        return (
            <div style={{
                padding: '40px',
                textAlign: 'center',
                color: '#666',
                border: '1px dashed #ccc',
                borderRadius: '8px'
            }}>
                No projects to display
            </div>
        );
    }

    // 5. Typage de l'objet styles pour React.CSSProperties
    const styles: Record<string, CSSProperties> = {
        container: {
            margin: 0,
            boxSizing: 'border-box',
        },
        carouselWrapper: {
            position: 'relative',
        },
        viewport: {
            overflow: 'hidden',
            position: 'relative'
        },
        containerTrack: {
            display: 'flex',
            transition: 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            gap: '5%'
        },
        slide: {
            flex: '0 0 auto', 
            position: 'relative',
            textDecoration: 'none',
            color: 'inherit',
            width: '33.333%', 
            minWidth: '350px', 
        },
        imageWrapper: {
            position: 'relative',
            width: '100%',
            overflow: 'hidden',
            height: '238px',
        },
        image: {
            display: 'block',
            overflow: 'hidden',
            backfaceVisibility: 'hidden',
            backgroundPosition: 'center center',
            width: '100%',
            height: '309.4px',
            willChange: 'transform',
            transition: 'transform 0.2s ease-out'
        },
        slideContent: {
            padding: '10px 0'
        },
        projectName: {
            fontSize: '1rem',
            fontWeight: '600',
            margin: '0 0 10px 0',
        },
        tags: {
            display: 'flex',
            gap: '8px',
            flexWrap: 'wrap'
        },
        tag: {
            // Ajout du style pour les tags si nécessaire
        },
        actions: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '20px',
            gap: '20px'
        },
        buttonWrapper: {
            position: 'relative',
            display: 'inline-block'
        },
        button: {
            background: 'transparent',
            border: '1px solid #cc001e',
            color: '#cc001e',
            padding: '12px 30px',
            borderRadius: '25px',
            fontSize: '0.9rem',
            cursor: 'pointer',
            position: 'relative',
            overflow: 'hidden',
            transition: 'all 0.3s ease'
        },
        buttonContent: {
            position: 'relative',
            zIndex: 2
        },
        carouselActions: {
            display: 'flex',
            alignItems: 'center',
            gap: '20px'
        },
        arrowButton: {
            background: 'transparent',
            border: '1px solid #cc001e',
            color: '#cc001e',
            width: '45px',
            height: '45px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
        },
        progress: {
            width: '100px',
            height: '2px',
            background: 'rgba(255, 255, 255, 0.2)',
            position: 'relative',
            borderRadius: '1px'
        },
        progressBar: {
            position: 'absolute',
            height: '100%',
            background: '#cc001e',
            borderRadius: '1px',
            transition: 'transform 0.3s ease',
            width: `${(currentIndex + 1) / safeProjects.length * 100}%`
        },
        visibilityIndicator: {
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: isVisible ? '#cc001e' : '#f44336',
            color: 'white',
            padding: '5px 10px',
            borderRadius: '12px',
            fontSize: '0.7rem',
            zIndex: 20,
            fontWeight: 'bold'
        }
    };

    return (
        <section style={styles.container}>
            <div style={styles.carouselWrapper} ref={carouselRef}>
                <div style={styles.viewport}>
                    <div style={styles.containerTrack} ref={carouselTrackRef}>
                        {safeProjects.map((project, index) => (
                            <a
                                key={project.id || index}
                                href={project.link || project.slug}
                                style={styles.slide}
                                className="carousel-slide cursor-target"
                            >
                                <div style={styles.imageWrapper}>
                                    <div
                                        className="carousel-image"
                                        style={{
                                            ...styles.image,
                                            backgroundImage: `url(${project.image})`,
                                            backgroundSize: 'cover'
                                        }}
                                    />
                                </div>
                                <div style={styles.slideContent} className='d-flex justify-content-between align-items-center'>
                                    <p style={styles.projectName} className='m-0'>{project.title}</p>
                                    <div style={styles.tags}>
                                        {project.tags && project.tags.map((tag, tagIndex) => (
                                            <span 
                                                key={tagIndex} 
                                                // Remplacé href par undefined ou transformé en Link car une balise span n'accepte pas l'attribut href 
                                                className='tag-project rounded-1 uppercase raleway' 
                                                style={styles.tag}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

                <div className='mt-5'>
                    <Link to={'/projects'} className='naked-link fw-bold cursor-target rounded-0'>
                        SEE ALL PROJECTS
                    </Link>
                </div>

                <div style={styles.actions}>
                    <div style={styles.carouselActions}>
                        <button
                            className='cursor-target'
                            style={styles.arrowButton}
                            onClick={prevSlide}
                            disabled={safeProjects.length === 0}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 9 16" width="9" height="16">
                                <path stroke="#cc001e" strokeLinecap="round" d="M8 1 1.169 7.831 8 14.663" />
                            </svg>
                        </button>

                        <div style={styles.progress}>
                            <div className='bg-red' style={styles.progressBar} />
                        </div>

                        <button
                            className='cursor-target'
                            style={styles.arrowButton}
                            onClick={nextSlide}
                            disabled={safeProjects.length === 0}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 9 16" width="9" height="16">
                                <path stroke="#cc001e" strokeLinecap="round" d="m1 1 6.831 6.831L1 14.663" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CarouselParallax;