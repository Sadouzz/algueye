import { useState, useEffect } from 'react';

export interface EventData {
    id: number;
    slug: string;
    category: string;
    date: string;
    month: string;
    year: string;
    title: string;
    subtitle: string;
    location: string;
    city: string;
    description: string;
    status: 'À venir' | 'Passé';
    featured?: boolean;
    image: string;
}

export const useEvents = () => {
    const [events, setEvents] = useState<EventData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const baseURL = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000';
                const response = await fetch(`${baseURL}/api/events`);
                if (!response.ok) {
                    throw new Error('Erreur lors de la récupération des événements');
                }
                const data = await response.json();
                
                // Formater les URLs d'images
                const formattedData = data.map((item: any) => ({
                    ...item,
                    image: item.image ? `${baseURL}${item.image}` : ''
                }));
                
                setEvents(formattedData);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
    }, []);

    return { events, loading, error };
};
