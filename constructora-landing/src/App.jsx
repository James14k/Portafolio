import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Nosotros from './components/Nosotros';
import Servicios from './components/Servicios';
import Portafolio from './components/Portafolio';
import Blog from './components/Blog';
import TrabajaConNosotros from './components/TrabajaConNosotros';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <div className="app-constructora">
      <Navbar />
      <main>
        <Hero />
        <Nosotros />
        <Servicios />
        <Portafolio />
        <Blog />
        <TrabajaConNosotros />
      </main>
      <Footer />
      <WhatsAppFloat />
      <Chatbot />
    </div>
  );
}

export default App;
