import MiniTitleWithBar from "../components/atoms/MiniTitleWithBar";
import PageHeroSection from "../components/sections/PageHeroSection";
import ServiceElement from "../components/sections/ServiceElement";
import { collections } from "../data/collectionsData";
import useIsDesktop from "../hooks/useIsDesktop";

export default function Collections()
{
    const isDesktop = useIsDesktop();
    return(
        <>
            <PageHeroSection
                contentMiniBar="NOS COLLECTIONS"
                firstTitle="De l'esquisse à la création d'exception,"
                secondTitle="Nous donnons vie aux étoffes en leur insufflant élégance et caractère."
            />
            <section className="bg-white section-trigger py-4 text-black">
                <div className={`${isDesktop ? "" : "p-5"}`}>
                    <div className="my-12 px-12! ">
                        <div>
                            <h1 className="poppins split max-w-[500px]">
                                L'art de façonner le sur-mesure
                            </h1>
                        </div>

                        <div className="w-full">
                            <div className="flex flex-wrap justify-between items-end relative">

                                {isDesktop && (
                                    <div className="section-label mt-4 mb-4!">
                                        <span>NOTRE EXPERTISE</span>
                                    </div>
                                )}

                                <div className="w-full md:w-1/2 p-0 flex flex-col">
                                    <div className="raleway">
                                        <h4
                                            className={`font-semibold mb-4 split ${isDesktop ? "max-w-[300px]" : ""}`}
                                        >
                                            Au-delà de la mode, vers l'intemporel.
                                        </h4>
                                    </div>
                                    <div className="raleway">
                                        <p className="split m-0 max-w-[600px]">
                                            Nous concevons et confectionnons des pièces uniques pour transformer une vision en une véritable œuvre d'art à porter. Le choix des matières et la précision des coupes sont les instruments d'une histoire que nous tissons. À travers l'exigence de l'artisanat et le souci du détail, nous façonnons des créations qui subliment la silhouette et célèbrent l'élégance pure.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {collections.map((service) => (
                    <ServiceElement
                        key={service.id}
                        {...service}
                    />
                ))}
            </section>
        </>
    )
}