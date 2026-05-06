"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";

// import reel from "../../assets/tenues/A7.jpg"
// import img1 from "../../assets/tenues/A8.jpg"
// import img2 from "../../assets/tenues/A9.jpg"
// import img3 from "../../assets/tenues/B1.jpg"
// import img4 from "../../assets/tenues/B2.jpg"
// import img5 from "../../assets/tenues/B3.jpg"
// import img6 from "../../assets/tenues/B4.jpg"
// import img7 from "../../assets/tenues/B5.jpg"

import img1 from "../../assets/imgInsta/img1.jpeg"
import img2 from "../../assets/imgInsta/img2.jpeg"
import img3 from "../../assets/imgInsta/img3.jpeg"
import img4 from "../../assets/imgInsta/img4.jpeg"
import img5 from "../../assets/imgInsta/img5.jpeg"
import img6 from "../../assets/imgInsta/img6.jpeg"
import img7 from "../../assets/imgInsta/img7.jpeg"
import img8 from "../../assets/imgInsta/img8.jpeg"
import img9 from "../../assets/imgInsta/img9.jpeg"
import img10 from "../../assets/imgInsta/img10.jpeg"
import img12 from "../../assets/imgInsta/img12.jpeg"
import img13 from "../../assets/imgInsta/img13.jpeg"
import img14 from "../../assets/imgInsta/img14.jpeg"
import img15 from "../../assets/imgInsta/img15.jpeg"


if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, Flip);
}

export default function ScrubbedBentoGallery() {
    const galleryRef = useRef<HTMLDivElement>(null);
    const flipCtxRef = useRef<gsap.Context | null>(null);

    const createTween = () => {
        const galleryElement = galleryRef.current;
        if (!galleryElement) return;

        const galleryItems = galleryElement.querySelectorAll(".gallery__item");
        const galleryWrap = galleryElement.parentElement;

        // Clean up previous context
        if (flipCtxRef.current) {
            flipCtxRef.current.revert();
        }

        // Remove final class if present
        galleryElement.classList.remove("gallery--final");

        flipCtxRef.current = gsap.context(() => {
            // Temporarily add the final class to capture the final state
            galleryElement.classList.add("gallery--final");
            const flipState = Flip.getState(galleryItems);
            galleryElement.classList.remove("gallery--final");

            const flip = Flip.to(flipState, {
                simple: true,
                ease: "expoScale(1, 5)"
            });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: galleryElement,
                    start: "center center",
                    end: "+=100%",
                    scrub: true,
                    pin: galleryWrap
                    // markers: true // Uncomment for debugging
                }
            });
            tl.add(flip);
            return () => gsap.set(galleryItems, { clearProps: "all" });
        });
    };

    useEffect(() => {
        // Small delay to ensure images are loaded
        const timer = setTimeout(() => {
            createTween();
        }, 100);

        window.addEventListener("resize", createTween);

        return () => {
            clearTimeout(timer);
            window.removeEventListener("resize", createTween);
            if (flipCtxRef.current) {
                flipCtxRef.current.revert();
            }
            // Kill all ScrollTriggers
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <main className="bg-gold text-white min-h-screen">
            <style>{`
                .gallery-wrap {
                    position: relative;
                    width: 100%;
                    height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    overflow: hidden;
                }

                .gallery {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    flex: none;
                }

                .gallery__item {
                    background-position: 50% 50%;
                    background-size: cover;
                    flex: none;
                    position: relative;
                    overflow: hidden;
                }

                .gallery__item img {
                    object-fit: cover;
                    width: 100%;
                    height: 100%;
                    display: block;
                }

                /* Bento Grid Layout */
                .gallery--bento {
                    display: grid;
                    gap: 1vh;
                    grid-template-columns: repeat(3, 32.5vw);
                    grid-template-rows: repeat(4, 23vh);
                    justify-content: center;
                    align-content: center;
                    padding: 2vh;
                }

                /* Final layout (expanded) */
                .gallery--final.gallery--bento {
                    grid-template-columns: repeat(3, 100vw);
                    grid-template-rows: repeat(4, 49.5vh);
                    gap: 1vh;
                    padding: 0;
                }

                /* Grid positions for bento layout */
                .gallery--bento .gallery__item:nth-child(1) {
                    grid-area: 1 / 1 / 3 / 2;
                }

                .gallery--bento .gallery__item:nth-child(2) {
                    grid-area: 1 / 2 / 2 / 3;
                }

                .gallery--bento .gallery__item:nth-child(3) {
                    grid-area: 2 / 2 / 4 / 3;
                }

                .gallery--bento .gallery__item:nth-child(4) {
                    grid-area: 1 / 3 / 3 / 4;
                }

                .gallery--bento .gallery__item:nth-child(5) {
                    grid-area: 3 / 1 / 4 / 2;
                }

                .gallery--bento .gallery__item:nth-child(6) {
                    grid-area: 3 / 3 / 5 / 4;
                }

                .gallery--bento .gallery__item:nth-child(7) {
                    grid-area: 4 / 1 / 5 / 2;
                }

                .gallery--bento .gallery__item:nth-child(8) {
                    grid-area: 4 / 2 / 5 / 3;
                }

                /* Final layout grid positions */
                .gallery--final.gallery--bento .gallery__item:nth-child(1) {
                    grid-area: 1 / 1 / 3 / 2;
                }

                .gallery--final.gallery--bento .gallery__item:nth-child(2) {
                    grid-area: 1 / 2 / 2 / 3;
                }

                .gallery--final.gallery--bento .gallery__item:nth-child(3) {
                    grid-area: 2 / 2 / 4 / 3;
                }

                .gallery--final.gallery--bento .gallery__item:nth-child(4) {
                    grid-area: 1 / 3 / 3 / 4;
                }

                .gallery--final.gallery--bento .gallery__item:nth-child(5) {
                    grid-area: 3 / 1 / 4 / 2;
                }

                .gallery--final.gallery--bento .gallery__item:nth-child(6) {
                    grid-area: 3 / 3 / 5 / 4;
                }

                .gallery--final.gallery--bento .gallery__item:nth-child(7) {
                    grid-area: 4 / 1 / 5 / 2;
                }

                .gallery--final.gallery--bento .gallery__item:nth-child(8) {
                    grid-area: 4 / 2 / 5 / 3;
                }

                .section {
                    padding: 4rem 5rem;
                    max-width: 800px;
                    margin: 0 auto;
                }

                .section h2 {
                    font-size: 2rem;
                    font-weight: bold;
                    margin-bottom: 1rem;
                    color: white;
                }

                .section p {
                    font-size: 1.1rem;
                    margin-bottom: 1.5rem;
                    line-height: 1.6;
                    color: #d1d5db;
                }

                @media (max-width: 768px) {
                    .section {
                        padding: 2rem 1.5rem;
                    }
                    
                    .section h2 {
                        font-size: 1.5rem;
                    }
                    
                    .section p {
                        font-size: 1rem;
                    }
                    
                    .gallery--bento {
                        gap: 0.5vh;
                        grid-template-columns: repeat(3, 33vw);
                        grid-template-rows: repeat(4, 24vh);
                    }
                }
            `}</style>

            <div className="gallery-wrap">
                <div
                    ref={galleryRef}
                    className="gallery gallery--bento gallery--switch"
                    id="gallery-8"
                >
                    <div className="gallery__item">
                        <img src={img1} alt="Portrait pattern 1" />
                    </div>
                    <div className="gallery__item">
                        <img src={img2} alt="Portrait 12" />
                    </div>
                    <div className="gallery__item">
                        <img src={img3} alt="Portrait pattern 2" />
                        {/* <video
                            src={reel}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover"
                        /> */}
                    </div>
                    <div className="gallery__item">
                        <img src={img3} alt="Portrait pattern 2" />
                    </div>
                    <div className="gallery__item">
                        <img src={img4} alt="Portrait 4" />
                    </div>
                    <div className="gallery__item">
                        <img src={img5} alt="Portrait 3" />
                    </div>
                    <div className="gallery__item">
                        <img src={img6} alt="Portrait pattern 3" />
                    </div>
                    <div className="gallery__item">
                        <img src={img7} alt="Portrait 1" />
                    </div>
                </div>
            </div>

            <div className="section">
                <h2>Here is some content</h2>
                {[...Array(8)].map((_, idx) => (
                    <p key={idx}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                ))}
            </div>
        </main>
    );
}