import Navbar from '@/components/feature/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import RoomsSection from './components/RoomsSection';
import FacilitiesSection from './components/FacilitiesSection';
import CuisineSection from './components/CuisineSection';
import AccessSection from './components/AccessSection';
import ReservationSection from './components/ReservationSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background-50">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <RoomsSection />
      <FacilitiesSection />
      <CuisineSection />
      <AccessSection />
      <ReservationSection />
      <Footer />
    </main>
  );
}