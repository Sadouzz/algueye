import { Link } from "react-router-dom";

export default function FloatingContact() {
    return (
        <Link 
            to="/contact" 
            className="fixed bottom-6 right-6 z-[100] flex h-14 w-14 items-center justify-center rounded-full bg-black text-white shadow-xl hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 border border-[var(--color-gold-dark)]"
            aria-label="Nous contacter"
            title="Nous contacter"
        >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold-dark)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
        </Link>
    );
}
