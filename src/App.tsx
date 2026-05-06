import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Home from './pages/Home.tsx';
import Collections from './pages/Collections.tsx';
import About from './pages/About.tsx';
import Evenements from './pages/Evenements.tsx';
import Contact from './pages/Contact.tsx';
import ScrollToTop from './components/utils/ScrollToTop.tsx';
import Header from "./components/layout/Header.tsx";
import Footer from "./components/layout/Footer.tsx";
import NotFound from "./pages/NotFound.tsx";
import Tenues from "./pages/Tenues.tsx";
//import Footer from "./components/layout/Footer";
//import Menu from "./pages/Menu";
//import Order from "./pages/Order";
//import SmoothScroll from "./components/utils/SmoothScroll";

// Register plugins outside the component
gsap.registerPlugin(ScrollTrigger, useGSAP);

function AppContent() {
  const location = useLocation();

  // useGSAP handles cleanup and re-renders more reliably than useEffect
  useGSAP(() => {
    // Refresh ScrollTrigger whenever the route changes
    ScrollTrigger.refresh();

    // Optional: If you have global animations, define them here
    return () => {
      // Manual cleanup of all triggers if needed on route leave
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, { dependencies: [location.pathname] });

  return (
    <div className="relative flex min-h-screen overflow-hidden">

      {/* Background Gradients (Tailwind version) */}
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-[#07143f]/30 to-[#4e47c6]/20" />
      <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-br from-[#07143f]/20 to-[#4e47c6]/10" />

      {/* Main Content */}
      <main className="relative z-20 flex-grow overflow-auto">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/collections/tenues" element={<Tenues />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Evenements />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<NotFound /> }/>
        </Routes>
        <Footer />
      </main>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}