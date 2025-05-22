import { useState, useEffect } from 'react'
import './App.css'

// Componenti della landing page
import Header from './components/Header'
import Hero from './components/Hero'
import Menu from './components/Menu'
import About from './components/About'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  // Stato per il caricamento del menu
  const [menuItems, setMenuItems] = useState([]);
  
  // Simulazione caricamento dati menu
  useEffect(() => {
    // In una vera app, questo potrebbe essere un API call
    const menuData = {
      pizzas: [
        { name: 'Margherita', price: '9.00', description: 'Passata di pomodoro San Marzano Dop, fior di latte, Parmigiano Reggiano, basilico fresco, olio extravergine d\'oliva biologico' },
        { name: 'Marinara', price: '8.00', description: 'Passata di pomodoro San Marzano Dop, pomodori datterini rossi, origano di collina, aglio, basilico fresco, olio extravergine d\'oliva biologico' },
        { name: 'Bufala', price: '12.00', description: 'Passata di pomodoro San Marzano Dop, bufala campana Dop, pepe nero, basilico fresco, olio extravergine d\'oliva biologico' },
        { name: 'Napoli', price: '13.00', description: 'Passata di pomodoro San Marzano Dop, fior di latte, alici di Cetara, olive Riviera, capperi di Salina, origano, basilico fresco, olio extravergine d\'oliva biologico' },
        { name: 'Diavola Gialla', price: '14.00', description: 'Passata di pomodorini del Piennolo del Vesuvio gialli, fior di latte, salamino piccante, fili di peperoncino, \'nduja calabrese Madeo, basilico fresco, olio extravergine d\'oliva biologico' },
      ],
      appetizers: [
        { name: 'Polpette di Bovino Piemontese', price: '9.00', description: 'Con passata di pomodoro San Marzano Dop, Parmigiano Reggiano, basilico fresco e pane cotto nel forno a legna' },
        { name: 'Burrata Pugliese con Datterini', price: '10.00', description: 'Rossi e gialli e olio extravergine d\'oliva biologico' },
        { name: 'Tagliere di Salumi', price: '12.00', description: 'Con crudo San Daniele, salame dolce piacentino, speck, prosciutto cotto e focaccia' },
      ],
      desserts: [
        { name: 'Tiramusù con Ricotta di Bufala', price: '7.00', description: '' },
        { name: 'Cannolo Siciliano Scomposto', price: '6.00', description: 'Con crema di ricotta e gocce di cioccolato' },
        { name: 'Affogato al Caffè', price: '7.00', description: 'Con gelato alla nocciola e granella di nocciole' },
      ]
    };

    setMenuItems(menuData);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <Menu menuItems={menuItems} />
        <About />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
