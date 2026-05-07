import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'

gsap.registerPlugin(ScrollTrigger)

export default function StorySection() {
  const sectionRef = useRef<HTMLElement>(null)
  const imgRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imgRef.current, {
        x: -80,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          once: true,
        },
      })
      gsap.from(textRef.current, {
        x: 80,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          once: true,
        },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-20! bg-black" style={{ overflow: 'hidden' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(3rem, 6vw, 6rem)', alignItems: 'center' }}>

          {/* Image gauche */}
          <div ref={imgRef} style={{ position: 'relative', aspectRatio: '4/5', overflow: 'hidden' }}>
            <div style={{
              width: '100%', height: '100%',
              background: 'linear-gradient(160deg, #1a1208 0%, #0d0b06 40%, #1c1408 100%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              position: 'relative',
            }}>
              {/* Abstract fashion silhouette */}
              <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(ellipse 60% 80% at 50% 40%, rgba(201,168,76,0.15) 0%, transparent 70%)' }} />
              <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                <div style={{ width: '80px', height: '1px', background: 'var(--gold)', margin: '0 auto 2rem' }} />
                <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(1.2rem, 3vw, 2rem)', color: 'var(--gold)', letterSpacing: '0.05em', marginBottom: '2rem' }}>
                  "L'Élégance Africaine<br />au Sommet du Monde"
                </p>
                <div style={{ width: '80px', height: '1px', background: 'var(--gold)', margin: '0 auto' }} />
              </div>
            </div>
            {/* Gold border accent */}
            <div style={{ position: 'absolute', top: '1rem', left: '1rem', right: '1rem', bottom: '1rem', border: '1px solid rgba(201,168,76,0.25)', pointerEvents: 'none' }} />
          </div>

          {/* Texte droit */}
          <div ref={textRef}>
            <div className="relative flex w-full flex-col-reverse ">
              <h2 className="uppercase font-bold text-balance text-4xl lg:text-7xl! block">
                UNE VISION
              </h2>
              <span className="w-full rotate-[-2deg] font-serif text-gold font-quickbrush -mb-2 xl:-mb-4 text-4xl lg:text-6xl">
                Notre Histoire
              </span>
            </div>
            <div style={{ height: '1px', background: 'var(--border)', marginBottom: '2rem', width: '60px' }} />
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.9, marginBottom: '1.5rem' }}>
              ALGUEYE est une marque de mode fondée en 2012 par Abdou Lahad GUEYE. Le nom de la marque provient des noms et prénoms du fondateur, ce qui la rend vraiment unique. ALGUEYE DAKAR propose des vêtements d’inspiration moderne et ethnique pour hommes et femmes.
            </p>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.9, marginBottom: '2.5rem' }}>
              Nos vêtements permettent d’exprimer son propre style tout en répondant aux besoins quotidiens, alliant dernières tendances et intemporalité pour créer un look unique, chic et glamour, pour toute occasion.
            </p>
            <div style={{ display: 'flex', gap: '3rem', marginBottom: '2.5rem' }}>
              {[['2012', 'Fondation'], ['100+', 'Créations'], ['30+', 'Pays']].map(([num, lbl]) => (
                <div key={lbl}>
                  <p style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', fontWeight: 300, color: 'var(--gold)', lineHeight: 1 }}>{num}</p>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.65rem', letterSpacing: '0.2em', color: 'var(--text-muted)', textTransform: 'uppercase', marginTop: '0.4rem' }}>{lbl}</p>
                </div>
              ))}
            </div>
            <Link to="/about" className="btn-outline">
              <span>Notre Story Complète</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
