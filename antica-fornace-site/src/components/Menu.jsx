import { useState } from 'react';

const Menu = ({ menuItems }) => {
  const [activeCategory, setActiveCategory] = useState('pizzas');

  const categories = [
    { id: 'pizzas', label: 'Pizze' },
    { id: 'appetizers', label: 'Sfizi' },
    { id: 'desserts', label: 'Dolci' }
  ];  return (    <section id="menu" className="section bg-bgLight">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
            Le Pizze del Super Saiyan
            <div className="absolute -top-3 -right-6 w-8 h-8 dragon-star"></div>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Pizze preparate con <span className="font-bold text-primary">l'energia del Ki</span> del forno a legna!
            <br/>
            <span className="text-secondary font-bold">Ingredienti selezionati dal Pianeta Terra Z.</span>
          </p>
          
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {categories.map((category) => (
              <button                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full text-lg font-dragonball transition-all transform hover:scale-105 border-2 border-black ${
                  activeCategory === category.id
                    ? 'bg-primary text-white animate-power-up shadow-lg'
                    : 'bg-gray-200 hover:bg-secondary hover:text-white'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>        {/* Menu Items as Dragon Ball Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {menuItems[activeCategory]?.map((item, index) => (
            <div 
              key={`${activeCategory}-${index}`} 
              className="dragonball-card p-0 relative transform transition-all hover:shadow-lg animate-power-up"
            >
              {/* Card Header - Name and Power Level */}
              <div className={`h-12 ${activeCategory === "pizzas" ? "bg-primary" : activeCategory === "appetizers" ? "bg-secondary" : "bg-dbRed"} text-white p-2 border-b-2 border-black flex justify-between items-center`}>
                <h3 className="text-lg font-dragonball tracking-wider">{item.name}</h3>
                <div className="flex items-center space-x-1">
                  <span className="text-xs font-bold">⚡⚡⚡</span>
                  <span className="bg-dbYellow text-black text-xs font-bold px-1 py-0.5 rounded border border-black">€{item.price}</span>
                </div>
              </div>
                {/* Card Image Placeholder */}
              <div className="h-48 bg-gray-200 border-b-2 border-black relative overflow-hidden">
                <img 
                  src={activeCategory === "pizzas" 
                    ? `https://images.unsplash.com/photo-${1550000000 + (index * 1111)}?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60` 
                    : activeCategory === "appetizers"
                      ? `https://images.unsplash.com/photo-${1560000000 + (index * 1111)}?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60`
                      : `https://images.unsplash.com/photo-${1570000000 + (index * 1111)}?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60`
                  }
                  alt={item.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback for any loading errors
                    e.target.src = "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-30"></div>
                <div className="absolute bottom-2 right-2">
                  <div className="dragon-star w-6 h-6 animate-dragonball-glow"></div>
                </div>
              </div>{/* Card Type */}
              <div className="bg-dbYellow text-black text-center text-xs font-bold py-1 border-b-2 border-t-2 border-black">
                {(() => {
                  if (activeCategory === "pizzas") return "[PIZZA / SAIYAN]";
                  if (activeCategory === "appetizers") return "[APPETIZER / KAME]";
                  return "[DESSERT / SENZU]";
                })()}
              </div>
              
              {/* Card Description */}
              <div className="bg-gray-100 p-3 text-sm">
                <p className="italic mb-2 text-xs">{item.description}</p>
                <p className="text-xs text-right font-bold text-dbRed mt-2">POWER: {(item.price * 1000).toFixed(0)} KI: {(item.price * 800).toFixed(0)}</p>
              </div>
              
              {/* Card Footer - Dragon Ball Symbol */}
              <div className="h-6 bg-dbYellow flex items-center justify-center border-t-2 border-black">
                <div className="text-xs font-dragonball text-black">L'ANTICA FORNACE · {(index + 1).toString().padStart(2, '0')}</div>
              </div>
              
              {/* Dragon Ball Corner */}
              <div className="absolute top-2 right-2 dragon-ball w-4 h-4 opacity-60">
                <div className="dragon-star w-4 h-4 transform scale-75"></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <a 
            href="https://www.anticafornace.it/menu.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            Scopri il Menu Completo
          </a>
        </div>
      </div>
    </section>
  );
};

export default Menu;
