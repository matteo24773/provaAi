import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Funzioni SVG per sostituire Font Awesome temporaneamente
  const FacebookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 320 512" fill="currentColor">
      <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
    </svg>
  );
  
  const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 448 512" fill="currentColor">
      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
    </svg>
  );
  
  const TripadvisorIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 576 512" fill="currentColor">
      <path d="M528.91,178.82L575.79,68.44a24,24,0,0,0-19.75-37h0a24,24,0,0,0-16.62,6.87L480,96,436.23,38.62a24,24,0,0,0-36.06-3h0L288,146.86,175.83,35.59a24,24,0,0,0-36.06,3h0L96,96,36.58,38.28a24,24,0,0,0-16.62-6.87h0a24,24,0,0,0-19.75,37l46.88,110.37C-35.45,334.33,249.55,581.43,407.36,459.58c2.77-2.16,5.45-4.43,8.06-6.77,2.61,2.34,5.29,4.61,8.06,6.77,157.81,121.85,442.81-125.25,305.43-280.76ZM136,288a112,112,0,1,1,112,112A112,112,0,0,1,136,288Zm304,0A112,112,0,1,1,552,176,112,112,0,0,1,440,288Z"/>
    </svg>
  );
    const MapMarkerIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yugiGold mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
    const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yugiGold mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
    const EmailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yugiGold mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
  return (
    <footer className="bg-bgDark text-white pt-16 pb-8 relative overflow-hidden">
      {/* Decorative Egyptian hieroglyphs background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
           style={{
             backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"0 0 40 40\"%3E%3Cpath fill=\"%23DAA520\" d=\"M20 0L0 20h5v5H0v15h15v-5h5v5h15v-15h-5v-5h5L20 0zm0 4l12 12h-7v10h10v7h-7v-7H12v7H5v-7h10V16H8L20 4z\"/%3E%3C/svg%3E')",
             backgroundSize: "40px 40px"
           }}></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Column 1: Logo and Info */}
          <div className="flex flex-col">
            <h3 className="text-2xl font-yugioh text-yugiGold mb-4 relative inline-block">
              Pizzeria Millenaria
              <div className="eye-of-anubis absolute -top-3 -right-6 w-6 h-6 animate-millennium-glow"></div>
            </h3>
            <p className="mb-4 text-gray-300 border-l-4 border-primary pl-4">
              Forgiamo pizze secondo gli antichi rituali napoletani, tramandati dai Maestri del Regno della Pizza.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-yugiGold hover:text-primary transition-colors">
                <FacebookIcon />
              </a>
              <a href="#" className="text-yugiGold hover:text-primary transition-colors">
                <InstagramIcon />
              </a>
              <a href="#" className="text-yugiGold hover:text-primary transition-colors">
                <TripadvisorIcon />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-yugioh text-yugiGold mb-4 relative inline-block">
              Deck di Navigazione
              <div className="eye-of-anubis absolute -top-3 -right-6 w-5 h-5 animate-millennium-glow transform scale-75"></div>
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#menu" className="text-gray-300 hover:text-yugiGold transition-colors flex items-center">
                  <span className="inline-block w-2 h-2 bg-primary mr-2"></span>
                  Il Deck Delle Pizze
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-yugiGold transition-colors flex items-center">
                  <span className="inline-block w-2 h-2 bg-secondary mr-2"></span>
                  La Storia Millenaria
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-300 hover:text-yugiGold transition-colors flex items-center">
                  <span className="inline-block w-2 h-2 bg-yugiRed mr-2"></span>
                  Galleria delle Leggende
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-yugiGold transition-colors flex items-center">
                  <span className="inline-block w-2 h-2 bg-yugiGold mr-2"></span>
                  Prenota un Duello
                </a>
              </li>
            </ul>
          </div>{/* Column 3: Contact Info */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-4">Contatti e Orari</h4>
            <address className="not-italic text-gray-300 mb-4">
              <p className="flex items-start mb-2">
                <MapMarkerIcon />
                Via Roma 123, Milano, Italia
              </p>
              <p className="flex items-start mb-2">
                <PhoneIcon />
                <a href="tel:0220471117" className="hover:text-primary transition-colors">02 2047 1117</a>
              </p>
              <p className="flex items-start mb-2">
                <EmailIcon />
                <a href="mailto:info@anticafornace.it" className="hover:text-primary transition-colors">info@anticafornace.it</a>
              </p>
            </address>
            <div className="mt-4">
              <h5 className="font-bold mb-2">Orari di Apertura:</h5>
              <p className="text-gray-300">Martedì - Domenica: 12:00 - 15:00, 19:00 - 23:00</p>
              <p className="text-gray-300">Lunedì: Chiuso</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Pizzeria L'Antica Fornace. Tutti i diritti riservati.</p>
          <p className="mt-2">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a> | 
            <a href="#" className="hover:text-primary transition-colors ml-2">Cookie Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
