import Navbar from '@/components/feature/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import RoomsSection from './components/RoomsSection';
import FacilitiesSection from './components/FacilitiesSection';
import CuisineSection from './components/CuisineSection';
import AccessSection from './components/AccessSection';
import ReservationSection from './components/ReservationSection';
import Footer from './components/Footer';
import FloatingReservationButton from '@/components/feature/FloatingReservationButton';
import background from '@/assets/background.png';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background-50">
      <Navbar />
      <FloatingReservationButton />
      <HeroSection />
      <AboutSection />

      {/* Rooms + Facilities 共通背景 */}
      <div className="relative">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: 'repeat',
            backgroundSize: 'auto',
            backgroundPosition: 'top center',
          }}
          aria-hidden
        />

        <RoomsSection />
        <FacilitiesSection />
      </div>

      <CuisineSection />
      <AccessSection />
      <ReservationSection />
      <Footer />
    </main>
  );
}