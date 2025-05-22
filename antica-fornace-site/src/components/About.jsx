
import pizzaioloImg from '../assets/OIP.png';

const About = () => {
  return (    <section id="about" className="section bg-bgDark text-white relative">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">          <div>
            <h2 className="text-3xl md:text-4xl font-dragonball text-dbYellow mb-6 relative bg-black bg-opacity-50 p-3 rounded-lg inline-block">
              La Leggenda di L'Antica Fornace
              <div className="dragon-star absolute -top-3 -right-6 w-8 h-8 animate-dragonball-glow"></div>
            </h2>
            <p className="text-lg mb-4 border-l-4 border-primary pl-4">
              Dal 1985 L'Antica Fornace custodisce i segreti della vera pizza napoletana, 
              tramandati dai Maestri Pizzaioli come tecniche di arti marziali attraverso le generazioni.
            </p>
            <p className="text-lg mb-4 border-l-4 border-secondary pl-4">
              Il nostro potere? Ingredienti selezionati dal Pianeta Terra Z, un impasto che riposa 24 ore e la 
              potenza del forno a legna che conferisce alla pizza un livello di Ki unico e inimitabile.
            </p>
            <p className="text-lg mb-6 border-l-4 border-accent pl-4">
              La nostra esperienza nella Ristorazione ci permette di offrirvi un'esperienza 
              leggendaria in un ambiente che evoca i colori e le sfide del Torneo Tenkaichi.
            </p>
            
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center dragon-ball">
                <div className="text-4xl font-bold text-dbYellow animate-dragonball-glow">38</div>
                <div className="text-sm mt-1">Anni di Leggenda</div>
              </div>
              <div className="text-center dragon-ball">
                <div className="text-4xl font-bold text-dbYellow animate-dragonball-glow">2</div>
                <div className="text-sm mt-1">Dojo a Milano</div>
              </div>
              <div className="text-center dragon-ball">
                <div className="text-4xl font-bold text-dbYellow animate-dragonball-glow">15+</div>
                <div className="text-sm mt-1">Pizze Super Saiyan</div>
              </div>
            </div>
          </div>          <div className="relative">
            <div className="dragonball-card overflow-hidden transform hover:rotate-3 transition-all duration-500">
              <img 
                src={pizzaioloImg}
                alt="Il maestro pizzaiolo" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-0 left-0 w-full h-8 bg-primary"></div>
              <div className="absolute bottom-0 left-0 w-full h-8 bg-dbYellow flex items-center justify-center">
                <span className="text-xs font-dragonball text-black">MAESTRO PIZZAIOLO LIVELLO 9000</span>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-5 bg-yugiGold p-4 rounded yugioh-card animate-shadow-realm">
              <p className="text-bgDark font-yugioh text-lg italic">
                {"La vera pizza è la magia più potente del Regno!"}
              </p>
              <div className="absolute top-0 right-0 eye-of-anubis w-6 h-6 animate-millennium-glow"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Millennium Items in the background */}
      <div className="absolute top-10 left-10 opacity-10 w-20 h-20 eye-of-anubis"></div>
      <div className="absolute bottom-10 right-10 opacity-10 w-20 h-20 eye-of-anubis"></div>
    </section>
  );
};

export default About;
