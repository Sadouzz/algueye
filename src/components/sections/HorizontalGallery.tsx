import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MonitorPlay, Trophy, Crown, Gamepad } from 'lucide-react';

import a7 from "../../assets/tenues/a7.jpg";
import a8 from "../../assets/tenues/a8.jpg";
import a9 from "../../assets/tenues/a9.jpg";
import b1 from "../../assets/tenues/b1.jpg";
import b2 from "../../assets/tenues/b2.jpg";
import b3 from "../../assets/tenues/b3.jpg";
import b4 from "../../assets/tenues/b4.jpg";
import b5 from "../../assets/tenues/b5.jpg";

const zones = [
  {
    id: 'esport',
    title: 'ARÈNE E-SPORT',
    number: '01',
    image: a7,
    icon: Trophy,
    color: 'text-neon-green',
    date: "20/11/2025",
    link: "/"
  },
  {
    id: 'vr',
    title: 'SIMULATEURS & VR',
    number: '02',
    image: a8,
    icon: MonitorPlay,
    color: 'text-electric-blue',
    date: "20/11/2025",
    link: "/"
  },
  {
    id: 'retro',
    title: 'RETRO ARCADE',
    number: '03',
    image: a9,
    icon: Gamepad,
    color: 'text-purple-500',
    date: "20/11/2025",
    link: "/"
  },
  
];

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
      onUpdate: (self) => {
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
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-gold-dark">
            évènements<br />
            <span className="text-transparent [-webkit-text-stroke:1px_var(--color-gold)]">en vedette</span>
          </h2>
          <p className="mt-8 text-black max-w-sm text-lg">
            Découvrez nos évènements phares.
          </p>
        </div>

        {zones.map((zone) => (
          <div
            key={zone.id}
            className="w-[85vw] md:w-[60vw] h-[70vh] shrink-0 mx-8 md:mx-16 relative flex items-center group gallery-skew-target"
            style={{ transformOrigin: "bottom center" }}
          >
            {/* Vertical Typography on the left */}
            <div className="absolute -left-12 bottom-12 -rotate-180 [writing-mode:vertical-rl] text-[8rem] font-black uppercase tracking-tighter  text-slate-900/40 z-0 select-none hidden md:block">
              {zone.title}
            </div>

            {/* The actual card */}
            <div className="relative w-full h-full z-10 overflow-hidden border mr-20! border-slate-800">
              <img
                src={zone.image}
                alt={zone.title}
                className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out mix-blend-luminosity group-hover:mix-blend-normal"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-gold/40 to-transparent p-12! flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className={`p-4! rounded-xl bg-slate-950/80 backdrop-blur-sm border border-slate-800 ${zone.color}`}>
                    <zone.icon className="w-8 h-8" />
                  </div>
                  <span className={`text-4xl  text-white`}>
                    {zone.date}
                  </span>
                </div>

                <div>
                  <h3 className="text-4xl md:text-5xl font-black uppercase text-white mb-4">
                    {zone.title}
                  </h3>
                  <div className="w-12 h-1 bg-white mb-6" />
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="w-[20vw] shrink-0" /> {/* End padding */}
      </div>
    </section>
  );
};
