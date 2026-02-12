import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Experience from './components/Experience';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';
import ScrollToTop from './components/ScrollToTop';

const Home = () => (
  <main>
    <Hero />
    <Gallery />
    <Experience />
    <About />
    <Contact />
  </main>
);

function App() {
  return (
    <div className="min-h-screen bg-paper text-dark selection:bg-pink/30">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:slug" element={<ProjectDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
