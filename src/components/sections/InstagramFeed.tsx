import img1 from '../../assets/imgInsta/img1.jpeg';
import img2 from '../../assets/imgInsta/img2.jpeg';
import img3 from '../../assets/imgInsta/img3.jpeg';
import img4 from '../../assets/imgInsta/img4.jpeg';
import img5 from '../../assets/imgInsta/img5.jpeg';
import img6 from '../../assets/imgInsta/img6.jpeg';

export default function InstagramFeed() {
    const images = [img1, img2, img3, img4, img5, img6];

    return (
        <section className="bg-white py-24!">
            <div className="  px-6! md:px-12! mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
                <div className="relative flex w-full flex-col-reverse pt-5!">
                    <h2 className="uppercase font-bold text-black text-balance text-5xl lg:text-8xl block">
                        Notre <em className="text-[color:var(--color-gold)]">Atelier</em>
                    </h2>
                    <span className="w-full rotate-[-2deg] font-serif text-gold font-quickbrush -mb-2 xl:-mb-4 text-4xl lg:text-6xl">
                        Suivez-nous
                    </span>
                </div>
                <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noreferrer"
                    className="btn-gold self-start md:self-auto mb-5!"
                >
                    <span>@algueye.dakar</span>
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0">
                {images.map((src, index) => (
                    <a 
                        key={index} 
                        href="https://instagram.com" 
                        target="_blank" 
                        rel="noreferrer"
                        className="relative block aspect-square group overflow-hidden"
                    >
                        <img 
                            src={src} 
                            alt={`Instagram ${index + 1}`} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}
