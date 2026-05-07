import PageHeroSection from '../components/sections/PageHeroSection';
import Highlights from '../components/atoms/Highlights';
import Seo from '../components/seo/Seo';

import img1 from '../assets/img1.jpg';
import dsc02056 from '../assets/tenues/DSC02056.jpeg';
import dsc02151 from '../assets/tenues/DSC02151.jpeg';

export default function News() {
    const newsFeatures = [
        {
            title: "L'Héritage de la Création",
            accentText: "Depuis 2012",
            description: "ALGUEYE est une marque de mode fondée en 2012 par Abdou Lahad GUEYE. Le nom de la marque provient des noms et prénoms du fondateur, ce qui la rend vraiment unique. ALGUEYE DAKAR propose des vêtements d’inspiration moderne et ethnique pour hommes et femmes qui sont conçus pour être élégants et authentiques à n’importe quelle phase de la vie.",
            buttons: [{ label: 'Notre Histoire', href: '/about', primary: true }],
            imageSrc: dsc02056,
            imageAlt: "Création Algueye Dakar Heritage",
        },
        {
            title: "L'Essence du Style",
            accentText: "Vision",
            description: "Nous fournissons des vêtements chics et glamour en mettant l’accent sur l’agilité et l’adaptabilité. Nos vêtements permettent aux clients d’exprimer leur propre style tout en répondant à leurs besoins quotidiens.",
            buttons: [{ label: 'Explorer le Style', href: '/collections', primary: true }],
            imageSrc: img1,
            imageAlt: "Vision Style Algueye Dakar",
        },
        {
            title: "Créez votre Look",
            accentText: "Expression",
            description: "Nos créations permettent de rester à jour avec les dernières tendances sans sacrifier l’intemporalité. Avec nos vêtements, vous pouvez créer votre propre look unique pour toute occasion.",
            buttons: [
                { label: 'Voir les Tenues', href: '/tenues', primary: false },
                { label: 'Contactez-nous', href: '/contact', primary: true }
            ],
            imageSrc: dsc02151,
            imageAlt: "Expression du style Algueye",
        }
    ];

    return (
        <main className="bg-[#fcfcfc] pb-10!">
            <Seo 
                title="À Propos | Algueye Dakar" 
                description="Découvrez l'histoire de la maison Algueye Dakar, fondée par Abdou Lahad GUEYE. Excellence, authenticité et intemporalité."
            />
            
            <PageHeroSection
                contentMiniBar="L'UNIVERS ALGUEYE"
                firstTitle="Plus qu'une marque, une identité,"
                secondTitle="Découvrez l'histoire et la vision de la maison Algueye Dakar."
            />


            <Highlights features={newsFeatures} />
        </main>
    );
}
