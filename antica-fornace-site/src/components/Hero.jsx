import { useState, useEffect } from 'react';
import pizzaImg1 from '../assets/image.png';
import pizzaImg2 from '../assets/OIP.png';

const Hero = () => {
  // Lista di immagini di sfondo
  const backgroundImages = [
    pizzaImg1,
    pizzaImg2,
    'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?q=80&w=2070&auto=format&fit=crop',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Cambia l'immagine di sfondo ogni 5 secondi
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);  return (    <section 
      className="relative h-screen flex items-center justify-center overflow-hidden hero-section"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 128, 0.7), rgba(255, 107, 0, 0.6)), url(${backgroundImages[currentImageIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 1s ease-in-out'
      }}
    >      <div className="container-custom text-center text-white z-10">
        {/* Dragon Ball Style Title */}
        <div className="relative mb-8">
          <div className="bg-bgDark bg-opacity-90 p-6 border-t-4 border-b-4 border-dbYellow shadow-xl">
            <div className="dragon-ball mb-4 inline-block">
              <svg className="w-16 h-16 animate-dragonball-glow" viewBox="0 0 24 24" fill="#FFD600">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                <circle cx="12" cy="12" r="5" fill="#FFD600"/>
              </svg>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-dbYellow mb-4">PIZZERIA DRAGON BALL</h1>
            <h2 className="text-2xl md:text-3xl text-white mb-6">L'ANTICA FORNACE</h2>
            <p className="text-xl md:text-2xl mb-6 max-w-2xl mx-auto font-serif border-l-4 border-r-4 border-primary px-4 py-2">
              Rilascia il vero potere della <span className="text-dbYellow font-bold">Pizza Artigianale</span>!
              <br />
              Ingredienti di alta qualità che aumentano il tuo Ki a ogni morso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#menu" className="btn btn-primary relative overflow-hidden group">
                Scopri il Menu
                <span className="absolute left-2 top-1/2 transform -translate-y-1/2 eye-of-anubis opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </a>
              <a href="tel:0220471117" className="btn bg-accent text-bgDark border-black hover:bg-accent/90">
                Prenota Ora
              </a>
            </div>
          </div>
          
          {/* Yu-Gi-Oh Elements */}
          <div className="absolute -top-4 -right-4 w-12 h-12 bg-yugiGold rounded-full animate-float flex items-center justify-center font-yugioh text-black text-xs font-bold border-2 border-black">
            YGO
          </div>
          <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary rounded-full animate-shadow-realm flex items-center justify-center text-white text-xs font-bold border-2 border-black" style={{ animationDelay: '0.5s' }}>
            <span>LP</span>
          </div>
        </div>
      </div>

      {/* Shadow Realm Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-yugiPurple/40 to-transparent"></div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#DAA520" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
