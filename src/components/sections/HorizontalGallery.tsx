import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Link } from 'react-router-dom';
import { EVENTS } from '../../data/events.data';

const zones = EVENTS.slice(0, 3).map((event, index) => ({
  id: event.slug,
  title: event.title,
  subtitle: event.category,
  number: `0${index + 1}`,
  image: event.image,
  color: 'text-white',
  date: `${event.date} ${event.month} ${event.year}`,
  link: `/events/${event.slug}`,
  description: event.description.length > 120 ? event.description.substring(0, 120) + '...' : event.description
}));

export const HorizontalGallery = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    // Pinning and horizontal scroll logic
    const getScrollAmount = () => -(scrollContainer.scrollWidth - window.innerWidth);

    const tween = gsap.to(scrollContainer, {
      x: getScrollAmount,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        start: "top top",
        end: () => `+=${Math.abs(getScrollAmount())}`,
        scrub: 0.5, // Slight smoothing
        invalidateOnRefresh: true,
      }
    });

    // Skew effect based on scroll velocity
    const proxy = { skew: 0 };
    const skewSetter = gsap.quickSetter('.gallery-skew-target', 'skewX', 'deg');
    const clamp = 0; // Limit maximum skew

    ScrollTrigger.create({
      onUpdate: (_self) => {
        // Calculate velocity. Multiply by a factor to increase/decrease sensitivity
        const velocity = clamp;

        // Only trigger skew if there is significant movement
        if (Math.abs(velocity) > 0.5) {
          proxy.skew = velocity;
          gsap.to(proxy, {
            skew: 0,
            duration: 0.8,
            ease: "power3",
            overwrite: true,
            onUpdate: () => skewSetter(proxy.skew)
          });
        }
      }
    });

    return () => {
      tween.kill();
    };
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="h-screen bg-white overflow-hidden relative mx-10">
      {/* Decorative background grid */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div ref={scrollContainerRef} className="h-full flex flex-nowrap items-center w-max px-[10vw]">

        <div className="w-[40vw] shrink-0 pr-20! mx-20!">
          {/* <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-gold-dark">
            évènements<br />
            <span className="text-transparent [-webkit-text-stroke:1px_var(--color-gold)]">en vedette</span>
          </h2> */}
          <div className="relative flex  flex-col-reverse ">
            <h2 className="uppercase font-bold text-black text-balance text-7xl lg:text-8xl block">
              Nos évènements
            </h2>
            <span className="w-full rotate-[-2deg] font-serif text-gold font-quickbrush -mb-2 xl:-mb-4 text-4xl lg:text-6xl">
              En Vedette
            </span>
          </div>
          <p className="text-black  mb-2! xl:mb-4! text-lg lg:text-xl">
            Découvrez nos dernières collections et nos évènements exclusifs. Plongez dans l'univers d'<em style={{ color: 'var(--color-gold)' }}>Algueye Dakar</em> et laissez-vous inspirer par nos créations uniques.
          </p>
          <Link to="/events" className="btn-gold self-start">
            <span>Tous les évènements</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {zones.map((zone) => (
          <div
            key={zone.id}
            className="w-[85vw] md:w-[60vw] h-[70vh] shrink-0 mx-8 md:mx-16 relative flex items-center group gallery-skew-target"
            style={{ transformOrigin: "bottom center", overflow: "hidden" }}
          >
            {/* Vertical Typography on the left */}
            <div className="absolute  bottom-12 -rotate-180 [writing-mode:vertical-rl] text-[8rem] font-black uppercase tracking-tighter  text-slate-900/40 z-0 select-none hidden md:block">
              {zone.title}
            </div>

            {/* The actual card */}
            <Link to={zone.link} className="relative w-full h-full z-10 overflow-hidden border mr-20! border-black block">
              <img
                src={zone.image}
                alt={zone.title}
                className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out mix-blend-luminosity group-hover:mix-blend-normal"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-gold/40 to-transparent p-12! flex flex-col justify-between">
                <div className="flex justify-between items-center">
                  {/* <div className={`p-4! rounded-xl bg-slate-950/80 backdrop-blur-sm border border-black ${zone.color}`}>
                    <zone.icon className="w-8 h-8" />
                  </div> */}
                  <div className={`py-1! px-3! uppercase text-xs rounded-xs text-gold-dark bg-gold-light border border-gold-dark`}>
                    <span>
                      {zone.subtitle}
                    </span>
                  </div>
                  
                  <div className={`py-1! px-3! rounded-sm bg-gold-dark/80 backdrop-blur-sm  ${zone.color}`}>
                    <span className={`text-sm  text-white`}>
                      {zone.date}
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="text-4xl md:text-5xl font-black uppercase text-white mb-4">
                    {zone.title}
                  </h3>
                  <p>
                    {zone.description}
                  </p>
                  <div className="w-12 h-1 bg-white mb-6" />
                </div>
              </div>
            </Link>
          </div>
        ))}

        <div className="w-[20vw] shrink-0" /> {/* End padding */}
      </div>
    </section>
  );
};
