import React from 'react';
import Navbar from './Navbar';
import vectorSVG from '../assets/vectorSVG/vector-svg-1.svg';
import '../App.css';

const HeroSection = () => {
  return (
    <section className="flex hero-contain relative overflow-hidden justify-center items-center h-screen w-full bg-hero-bg bg-no-repeat bg-cover">
      <img
        src={vectorSVG}
        className="absolute right-0 bottom-0 z-0 hero-vector"
      />
      <Navbar />
      <h2 className="text-white font-semibold lg:text-4xl text-2xl">
        Take the leap with us
      </h2>
    </section>
  );
};

export default HeroSection;
