import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <a href="#" className={`text-2xl md:text-3xl font-serif font-bold ${!isScrolled ? 'text-white' : 'text-primary'}`}>
            L'Antica Fornace
          </a>
        </div>{/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#menu" className={`font-medium hover:text-primary transition-colors ${!isScrolled ? 'text-white' : ''}`}>Menu</a>
          <a href="#about" className={`font-medium hover:text-primary transition-colors ${!isScrolled ? 'text-white' : ''}`}>Chi Siamo</a>
          <a href="#gallery" className={`font-medium hover:text-primary transition-colors ${!isScrolled ? 'text-white' : ''}`}>Galleria</a>
          <a href="#contact" className={`font-medium hover:text-primary transition-colors ${!isScrolled ? 'text-white' : ''}`}>Contatti</a>
          <a href="tel:0220471117" className="btn btn-primary">Prenota</a>
        </nav>        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden ${!isScrolled ? 'text-white' : 'text-bgDark'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-md py-4">
          <div className="container-custom flex flex-col space-y-4">
            <a 
              href="#menu" 
              className="font-medium hover:text-primary transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Menu
            </a>
            <a 
              href="#about" 
              className="font-medium hover:text-primary transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Chi Siamo
            </a>
            <a 
              href="#gallery" 
              className="font-medium hover:text-primary transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Galleria
            </a>
            <a 
              href="#contact" 
              className="font-medium hover:text-primary transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contatti
            </a>
            <a 
              href="tel:0220471117" 
              className="btn btn-primary inline-block text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Prenota
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
