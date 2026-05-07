import TenueGallery from '../components/atoms/tenues/TenueGallery';
import { tenues } from '../data/tenues.data';

export default function Tenues() {
    return (
        <div className="bg-white min-h-screen pt-[120px]! pb-20">
            <div className="container mx-auto! px-4! mb-12!">
                <div className="relative flex w-full flex-col-reverse pt-15! text-center">
                    <h2 className="uppercase font-bold text-black text-balance text-7xl lg:text-8xl block">
                        Élégantes. Modernes.<em style={{ color: 'var(--color-gold)' }}> Fashion.</em>
                    </h2>
                    <span className="w-full rotate-[-2deg] font-serif text-center text-gold font-quickbrush -mb-2 xl:-mb-4 text-4xl lg:text-6xl">
                        Nos tenues en vedette
                    </span>
                </div>
                <div className="text-center">
                    <p className="text-gray-500 text-lg md:text-xl font-light ">
                        Explorez l'intégralité de nos créations, de la Haute Couture au Prêt-à-Porter, en passant par Naru Goor.
                    </p>
                </div>
            </div>

            <TenueGallery tenues={tenues} />
        </div>
    );
}