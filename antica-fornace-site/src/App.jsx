import { useState, useEffect } from 'react'
import './App.css'
import { supabase } from './supabaseClient'; // Import Supabase client

// Componenti della landing page
import Header from './components/Header'
import Hero from './components/Hero'
import Menu from './components/Menu'
import About from './components/About'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [pizzas, setPizzas] = useState([]);
  const [appetizers, setAppetizers] = useState([]);
  const [desserts, setDesserts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dataIsEmpty, setDataIsEmpty] = useState(false);

  useEffect(() => {
    const fetchMenuItems = async () => {
      setLoading(true);
      setError(null);
      setDataIsEmpty(false);
      console.log("Attempting to fetch menu items from Supabase...");

      try {
        // Fetch all items from the menu_items table
        const { data: menuItems, error: fetchError } = await supabase
          .from('menu_items') // Assuming the table is named 'menu_items'
          .select('*');

        if (fetchError) {
          console.error("Supabase fetch error:", fetchError);
          setError(`Supabase error: ${fetchError.message}. Menu data could not be loaded.`);
          // No longer setting local data
          console.log("Menu data could not be loaded due to Supabase fetch error.");
          setLoading(false);
          return;
        }

        console.log("Successfully fetched from Supabase:", menuItems);

        if (!menuItems || menuItems.length === 0) {
          console.log("No menu items found in Supabase.");
          setDataIsEmpty(true); // Set flag that data is empty
          // No longer setting local data
          setLoading(false);
          return;
        } else {
          // ...existing code...
          // CRUCIAL LOGGING: Inspect the structure of the first fetched item
          console.log("************************************************************************************");
          console.log("DEBUGGING DATA STRUCTURE (Please share these logs if issues persist):");
          console.log("1. First fetched item from Supabase (entire object):", menuItems[0]);
          console.log("2. All property names (keys/columns) of the first item:", Object.keys(menuItems[0]));
          
          const potentialCategoryKeys = ['category', 'categoria', 'type', 'item_type'];
          let foundCategoryKey = null;
          for (const key of potentialCategoryKeys) {
            if (menuItems[0] && menuItems[0].hasOwnProperty(key)) {
              console.log(`3. Value of '${key}' property in the first item:`, menuItems[0][key]);
              foundCategoryKey = key; 
              break; 
            }
          }
          if (!foundCategoryKey) {
            console.log("3. Could not automatically find a common category key (e.g., 'category', 'categoria') in the first item. Please inspect log #2 to identify the category column. Defaulting to 'category'.");
            // If no key is found, we'll default to 'category' as per previous logic,
            // but this might need adjustment based on actual DB structure.
          }
          console.log("************************************************************************************");
        }

        const categoryColumnName = 'category'; 
        
        const fetchedPizzas = menuItems.filter(item => item[categoryColumnName] === 'pizzas');
        const fetchedAppetizers = menuItems.filter(item => item[categoryColumnName] === 'appetizers');
        const fetchedDesserts = menuItems.filter(item => item[categoryColumnName] === 'desserts');

        console.log("Filtered Pizzas (after attempting to filter):", fetchedPizzas);
        console.log("Filtered Appetizers:", fetchedAppetizers);
        console.log("Filtered Desserts:", fetchedDesserts);

        setPizzas(fetchedPizzas);
        setAppetizers(fetchedAppetizers);
        setDesserts(fetchedDesserts);
        
        if (fetchedPizzas.length === 0 && fetchedAppetizers.length === 0 && fetchedDesserts.length === 0) {
            console.log("No items matched categories after filtering, or Supabase returned data that didn't match expected categories.");
            setDataIsEmpty(true); // Set if all categories are empty after filtering
        } else {
            if (fetchedPizzas.length === 0) console.log("No pizzas found in Supabase for 'pizzas' category.");
            if (fetchedAppetizers.length === 0) console.log("No appetizers found in Supabase for 'appetizers' category.");
            if (fetchedDesserts.length === 0) console.log("No desserts found in Supabase for 'desserts' category.");
        }

      } catch (e) {
        console.error("Error in fetchMenuItems:", e);
        setError(`Application error: ${e.message}. Menu data could not be loaded.`);
        // No longer setting local data
        console.log("Menu data could not be loaded due to application error.");
      } finally {
        setLoading(false);
        console.log("Finished fetching menu items. Loading set to false.");
      }
    };

    fetchMenuItems();
  }, []); // Empty dependency array means this effect runs once on mount

  if (loading) {
    return <div className="text-center py-10">Loading menu... Please wait.</div>;
  }

  return (
    <div className="App">
      <Header />
      <Hero />
      {error && <div className="text-center py-4 text-red-600 bg-red-100 border border-red-400 rounded m-4">{error}</div>}
      {dataIsEmpty && !error && <div className="text-center py-4 text-yellow-600 bg-yellow-100 border border-yellow-400 rounded m-4">No menu items found in the database. The menu is currently empty.</div>}
      
      <Menu menu={{ pizzas, appetizers, desserts }} />
      <Gallery />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
