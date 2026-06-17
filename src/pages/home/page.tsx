import Navbar from '@/components/feature/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import RoomsSection from './components/RoomsSection';
import FacilitiesSection from './components/FacilitiesSection';
import CuisineSection from './components/CuisineSection';
import PricingSection from './components/PricingSection';
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
      <PricingSection />
      <AccessSection />
      <ReservationSection />
      <Footer />
    </main>
  );
}