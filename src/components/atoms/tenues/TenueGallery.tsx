import { useState, useMemo } from 'react';
import TenueFilters, { type FilterItem } from './TenueFilters';
import TenueGroup from './TenueGroup';
import { type Tenue } from './TenueCard';

interface TenueGalleryProps {
    tenues?: Tenue[];
}

export default function TenueGallery({ tenues = [] }: TenueGalleryProps) {
    const [activeFilter, setActiveFilter] = useState('all');

    // Extraire tous les tags uniques pour créer les filtres
    const filters = useMemo(() => {
        const allTags = new Set<string>();
        tenues.forEach(tenue => {
            if (tenue.tags) {
                tenue.tags.forEach(tag => allTags.add(tag));
            }
        });

        const filterItems: FilterItem[] = [
            { key: 'all', label: 'TOUTES', count: tenues.length }
        ];

        Array.from(allTags).sort().forEach(tag => {
            filterItems.push({
                key: tag,
                label: tag,
                count: tenues.filter(t => t.tags?.includes(tag)).length
            });
        });

        return filterItems;
    }, [tenues]);

    // Filtrer les tenues
    const filteredTenues =
        activeFilter === 'all'
            ? tenues
            : tenues.filter(tenue =>
                tenue.tags?.includes(activeFilter)
            );

    const handleFilterClick = (filterKey: string) => {
        setActiveFilter(filterKey);
    };

    // Calculer le nombre de groupes nécessaires (7 tenues par groupe)
    const numberOfGroups = Math.ceil(filteredTenues.length / 7);

    return (
        <div className="px-4! lg:px-15! py-10! w-full">
            {/* Section Header */}
            <div className='w-full'>
                <TenueFilters
                    filters={filters}
                    activeFilter={activeFilter}
                    onFilterClick={handleFilterClick}
                />
            </div>

            {/* Grille des tenues avec layout fixe */}
            <div className='w-full!'>
                {filteredTenues.length > 0 ? (
                    Array.from({ length: numberOfGroups }, (_, groupIndex) => (
                        <TenueGroup
                            key={groupIndex}
                            tenues={filteredTenues}
                            startIndex={groupIndex * 7}
                        />
                    ))
                ) : (
                    <div className="text-center py-20 flex flex-col items-center">
                        <div className="mb-6 opacity-50">
                            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                <line x1="9" y1="9" x2="15" y2="15"></line>
                                <line x1="15" y1="9" x2="9" y2="15"></line>
                            </svg>
                        </div>
                        <h4 className="text-gray-500 mb-4 text-xl uppercase tracking-widest font-light">Aucune tenue trouvée</h4>
                        <p className="text-gray-400 font-light">Essayez un autre filtre pour voir nos créations</p>
                    </div>
                )}
            </div>
        </div>
    );
}
