import TenueCard, { type Tenue } from './TenueCard';
import useIsDesktop from '../../../hooks/useIsDesktop';

interface TenueGroupProps {
    tenues: Tenue[];
    startIndex: number;
}

export default function TenueGroup({ tenues, startIndex }: TenueGroupProps) {
    const getTenue = (index: number) => {
        const tenueIndex = startIndex + index;
        return tenues[tenueIndex] || null;
    };

    const isDesktop = useIsDesktop();

    return (
        <div className="flex flex-col gap-6 md:gap-12 mb-6! md:mb-12!">
            {/* Ligne 1: 1 projet sur toute la largeur */}
            <div className="w-full">
                {getTenue(0) && (
                    <TenueCard
                        tenue={getTenue(0)}
                        height={isDesktop ? "700px" : "350px"}
                    />
                )}
            </div>

            {/* Ligne 2: 1/2 + 1/4 + 1/4 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-6">
                    {getTenue(1) && (
                        <TenueCard
                            tenue={getTenue(1)}
                            height={isDesktop ? "400px" : "300px"}
                        />
                    )}
                </div>
                <div className="md:col-span-3">
                    {getTenue(2) && (
                        <TenueCard
                            tenue={getTenue(2)}
                            height={isDesktop ? "300px" : "300px"}
                        />
                    )}
                </div>
                <div className="md:col-span-3">
                    {getTenue(3) && (
                        <TenueCard
                            tenue={getTenue(3)}
                            height={isDesktop ? "300px" : "300px"}
                        />
                    )}
                </div>
            </div>

            {/* Ligne 3: 1/4 + 1/4 + 1/2 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-3">
                    {getTenue(4) && (
                        <TenueCard
                            tenue={getTenue(4)}
                            height={isDesktop ? "300px" : "300px"}
                        />
                    )}
                </div>
                <div className="md:col-span-3">
                    {getTenue(5) && (
                        <TenueCard
                            tenue={getTenue(5)}
                            height={isDesktop ? "300px" : "300px"}
                        />
                    )}
                </div>
                <div className="md:col-span-6">
                    {getTenue(6) && (
                        <TenueCard
                            tenue={getTenue(6)}
                            height={isDesktop ? "400px" : "300px"}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}
