import React, { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
//import MiniTitleWithBar from "../atoms/MiniTitleWithBar";
import CarouselParallax from "../atoms/CarouselParallax";
import useIsDesktop from "../../hooks/useIsDesktop";

gsap.registerPlugin(SplitText, ScrollTrigger);

interface ServiceElementProps {
    id: string;
    title: React.ReactNode;
    subtitle: React.ReactNode;
    content: React.ReactNode;
    keys?: string[];
    img?: string;
    miniTitleWithBar?: any;
    projects?: any[];
}

const ServiceElement: React.FC<ServiceElementProps> = ({
    id,
    title,
    subtitle,
    content,
    keys,
    img,
    miniTitleWithBar,
    projects,
}) => {
    const isDesktop = useIsDesktop();
    //const [spacerHeight, setSpacerHeight] = useState<number>(0);

    const sectionRef = useRef<HTMLDivElement>(null);
    const compRef = useRef<HTMLDivElement>(null);
    const headerWrapper = useRef<HTMLDivElement>(null);
    const sectionHeader = useRef<HTMLDivElement>(null);
    const keysRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (!compRef.current) return;
        //const compPaddingTop = parseFloat(
            window.getComputedStyle(compRef.current).paddingTop
        //);
        //setSpacerHeight(compPaddingTop);
    }, []);

    useEffect(() => {
        const ctx = gsap.context(() => {
            document.fonts.ready.then(() => {
                const el = sectionRef.current;
                const header = sectionHeader.current;
                const headerWrap = headerWrapper.current;
                const image = el?.nextElementSibling?.querySelector("img") as HTMLImageElement | null;
                const keysContainer = keysRef.current;

                if (!el || !header || !headerWrap || !image || !keysContainer) return;

                cleanupScrollTriggers();
                initializeSplitTexts(el, keysContainer);
                createPinAnimation(headerWrap, image);

                if (isDesktop) {
                    createContentAnimations(el);
                    createKeysAnimation(keysContainer);
                }

                setTimeout(() => ScrollTrigger.refresh(), 150);
            });
        }, sectionRef);

        return () => {
            ctx.revert();
            cleanupScrollTriggers();
        };
    }, [id, isDesktop]);

    const cleanupScrollTriggers = (): void => {
        ScrollTrigger.getAll().forEach((trigger) => {
            if (
                trigger.trigger === sectionRef.current ||
                trigger.trigger === headerWrapper.current ||
                (trigger.vars.id && trigger.vars.id.includes(id))
            ) {
                trigger.kill();
            }
        });
    };

    const initializeSplitTexts = (el: HTMLElement, keysContainer: HTMLElement): void => {
        const contentDiv = el.querySelector(".content") as HTMLElement;
        if (contentDiv) new SplitText(contentDiv, { type: "lines" });

        try {
            const keysElements = keysContainer.querySelectorAll(".keys");
            if (keysElements.length > 0) new SplitText(keysElements, { type: "lines" });
        } catch (error) {
            console.warn("SplitText keys error:", error);
        }
    };

    const createPinAnimation = (headerWrap: HTMLElement, image: HTMLImageElement): void => {
        const headerWrapHeight = headerWrap.offsetHeight;
        const endValue = `bottom top+=${-20 + headerWrapHeight}px`;

        ScrollTrigger.create({
            trigger: headerWrap,
            start: "top top",
            endTrigger: image,
            end: endValue,
            pin: true,
            pinSpacing: false,
            anticipatePin: 1,
            id: `pin-${id}`,
        });
    };

    const createContentAnimations = (el: HTMLElement): void => {
        const contentDiv = el.querySelector(".content") as HTMLElement;
        if (!contentDiv) return;

        const splitContent = new SplitText(contentDiv, { type: "lines" });

        gsap.fromTo(
            contentDiv,
            { y: 0 },
            {
                y: () => {
                    const parentHeight = el.offsetHeight - 200;
                    const contentHeight = contentDiv.offsetHeight;
                    return parentHeight - contentHeight;
                },
                ease: "none",
                scrollTrigger: {
                    trigger: el,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1,
                    invalidateOnRefresh: true,
                    id: `content-scroll-${id}`,
                },
            }
        );

        if (splitContent.lines) {
            gsap.from(splitContent.lines, {
                yPercent: 100,
                stagger: 0.1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                    end: "top 60%",
                    toggleActions: "play reverse play reverse",
                    scrub: true,
                    id: `content-lines-${id}`,
                },
            });
        }
    };

    const createKeysAnimation = (keysContainer: HTMLElement): void => {
        const keysElements = keysContainer.querySelectorAll(".keys");
        if (!keysElements.length) return;

        const splitKeys = new SplitText(keysElements, { type: "lines" });

        if (splitKeys?.lines && splitKeys.lines.length > 0) {
            gsap.from(splitKeys.lines, {
                yPercent: 150,
                autoAlpha: 0,
                stagger: 0.05,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: keysContainer,
                    start: "top bottom-=200px",
                    end: "bottom center",
                    toggleActions: "play reverse play reverse",
                    scrub: true,
                    id: `keys-${id}`,
                },
            });
        }
    };

    return (
        <div
            ref={compRef}
            className="lg:px-15! pb-5 border-t border-gray-200"
            id={id}
        >
            <div ref={sectionRef}>
                {/* Header Section */}
                {/* Bootstrap: pin-wrapper z-1 container-fluid → Tailwind: z-[1] w-full */}
                <div ref={headerWrapper} className="pin-wrapper z-[1] w-full">
                    {/* Bootstrap: row pt-5 bg-white + paddingClass → Tailwind: flex flex-wrap pt-10 bg-white + px-5 on mobile */}
                    <div
                        ref={sectionHeader}
                        className={`flex flex-wrap pt-20! bg-white ${!isDesktop ? "px-5" : ""}`}
                    >
                        {/* Bootstrap: col-12 ps-0 col-md-6 → Tailwind: w-full md:w-1/2 pl-0 */}
                        <div className="w-full md:w-1/2 pl-0">
                            <span className=" rotate-[-2deg] font-serif text-gold font-quickbrush mb-4! xl:-mb-4 text-4xl lg:text-3xl">
                                {subtitle}
                            </span>
                            <h1 className="mt-3 mb-0 text-4xl font-bold">
                                <span className="font-[Poppins] text-gold">{"- "}</span>
                                {title}
                            </h1>
                        </div>
                        {/* Bootstrap: col-6 → Tailwind: w-1/2 (desktop spacer) */}
                        <div className="hidden md:block md:w-1/2" />
                    </div>
                    {/* Bootstrap: row bg-white-to-transparent h-[20px] → Tailwind equivalent */}
                    <div
                        className="w-full bg-gradient-to-b from-white to-transparent"
                        style={{ height: "20px" }}
                    />
                </div>

                {/* Content Section */}
                {/* Bootstrap: container-fluid → Tailwind: w-full */}
                <div className="w-full">
                    {/* Bootstrap: row d-flex justify-content-between position-relative + paddingClass */}
                    <div
                        className={`flex flex-wrap justify-between relative ${!isDesktop ? "px-5" : ""}`}
                    >
                        {/* Bootstrap: col-12 col-md-6 position-relative ps-0 */}
                        <div className="w-full md:w-1/2 relative pl-0">
                            <p className="content m-0 max-w-[500px]">
                                {content}
                            </p>
                        </div>

                        {/* Bootstrap: col-12 col-md-6 ps-0 d-flex flex-column */}
                        <div
                            ref={keysRef}
                            className="w-full md:w-1/2 pl-0 flex flex-col font-[Raleway]"
                        >
                            {keys && keys.length > 0 ? (
                                keys.map((key, index) => (
                                    <h3 key={index} className="keys text-xl font-semibold">
                                        {key}
                                    </h3>
                                ))
                            ) : (
                                <h3 className="keys text-xl font-semibold text-gray-400">
                                    No keys provided
                                </h3>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Image Section */}
            {img && (
                <div
                    className="w-full my-5 overflow-hidden"
                    style={{ height: "clamp(280px, 60vw, 600px)" }}
                >
                    <img
                        src={img}
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </div>
            )}

            {/* Projects Section */}
            {projects && (
                <div className={!isDesktop ? "px-5" : ""}>
                    <div className="section-label mt-3!" style={{ marginBottom: '1rem' }}>
                        <span>{miniTitleWithBar}</span>
                    </div>
                    <div className="mt-3!">
                        <CarouselParallax projects={projects} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ServiceElement;