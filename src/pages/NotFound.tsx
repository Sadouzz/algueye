import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/imgHeroHome.png';
import Seo from '../components/seo/Seo';

const NotFound: React.FC = () => {
    return (
        <div className="relative flex items-center justify-center min-h-screen overflow-hidden bg-black text-white">
            <Seo title="404 - Page non trouvée | Algueye Dakar" />
            {/* Décoration en arrière-plan */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-[20vw] font-black opacity-5 select-none">
                    ERROR
                </span>
            </div>

            <div className="relative z-10 w-full max-w-4xl px-4 text-center">
                {/* Identité Visuelle */}
                <div className="flex justify-center mb-8">
                    <img
                        src={logo}
                        alt="Logo - Algueye DAKAR"
                        className="w-[100px] h-[100px] object-contain animate-spin-slow"
                    />
                </div>

                {/* Texte d'erreur massif */}
                <h1 className="font-bold leading-none text-gold text-8xl md:text-9xl mb-2">
                    404
                </h1>

                <h2 className="mb-6! text-3xl font-bold tracking-tighter uppercase md:text-5xl">
                    PAGE <span className="text-gold">non trouvée</span>.
                </h2>

                <p className="max-w-md mx-auto! mb-10! text-lg leading-relaxed opacity-70 md:text-xl">
                    Vous avez quitté la zone de couture.
                    <br />
                    Cette pièce de couture n'a pas encore été <span className="text-gold font-semibold">conçue</span>.
                </p>

                {/* Boutons d'action */}
                <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
                    <Link
                        to="/"
                        className="w-full px-10! py-4! font-bold text-white uppercase transition-colors duration-300 bg-gold md:w-auto hover:bg-gold-dark"
                    >
                        ACCUEIL
                    </Link>

                    {/* Version "Report Issue" si besoin */}
                    {/* 
          <Link
            to="/contact"
            className="w-full px-10 py-4 font-bold text-white uppercase transition-all duration-300 border border-white md:w-auto hover:bg-white hover:text-black"
          >
            Report Issue
          </Link> 
          */}
                </div>
            </div>
        </div>
    );
};

export default NotFound;