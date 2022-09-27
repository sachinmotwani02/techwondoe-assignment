import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TeamSection from './components/TeamSection';
import OurStrengths from './components/OurStrengths';
import CareerSection from './components/CareerSection';
import Footer from './components/Footer';
import WhyChooseUs from './components/WhyChooseUs';
import LatestNewsSection from './components/LatestNewsSection';

function App() {
  return (
    <div>
      <HeroSection />
      <WhyChooseUs />
      <TeamSection />
      <LatestNewsSection />
      <OurStrengths />
      <CareerSection />
      <Footer />
    </div>
  );
}

export default App;
