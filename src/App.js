
import React from 'react';
import './App.css';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeatureGrid from './components/FeatureGrid';
import BottomGrid from './components/BottomGrid';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <FeatureGrid />
      <BottomGrid />
      <Footer />
    </>
  );
}

export default App;
