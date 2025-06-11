import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Demo from './components/sections/Demo';
import HowItWorks from './components/sections/HowItWorks';
import Benefits from './components/sections/Benefits';
import Testimonials from './components/sections/Testimonials';
import Pricing from './components/sections/Pricing';
import Success from './pages/Success';

function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Hero />
        <Demo />
        <HowItWorks />
        <Benefits />
        <Testimonials />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </div>
  );
}

export default App;