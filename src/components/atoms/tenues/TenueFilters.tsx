export interface FilterItem {
    key: string;
    label: string;
    count: number;
}

interface TenueFiltersProps {
    filters: FilterItem[];
    activeFilter: string;
    onFilterClick: (key: string) => void;
}

export default function TenueFilters({ filters, activeFilter, onFilterClick }: TenueFiltersProps) {
    return (
        <div className="flex justify-center mb-12!">
            <div className="w-full">
                <div className="flex items-center flex-wrap gap-3">
                    <span className="text-[11px] text-gray-400 uppercase tracking-widest mr-2">
                        filters
                    </span>
                    {filters.map((filter) => {
                        const isActive = activeFilter === filter.key;
                        return (
                            <button
                                key={filter.key}
                                className={`
                                    cursor-pointer flex items-center gap-2 px-4! py-1.5! rounded-full! text-[11px] font-medium tracking-widest transition-all duration-300
                                    ${isActive
                                        ? 'border-2! border-gold-dark! text-gold-dark! bg-transparent'
                                        : 'border-2! border-gray-200! text-gray-700 bg-transparent hover:border-gold-dark! hover:text-gold-dark!'
                                    }
                                `}
                                onClick={() => onFilterClick(filter.key)}
                            >
                                {isActive && <span className="text-gold-dark">/</span>}
                                {filter.label}
                                <span className="text-[13px] text-gray-400 font-normal ml-1">
                                    ({filter.count})
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
