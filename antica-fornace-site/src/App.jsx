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

  // Fallback local data (ensure this matches your original structure if needed)
  const localPizzas = [
    { id: 1, name: "Margherita", price: "€5", ingredients: "Pomodoro, Mozzarella" },
    { id: 2, name: "Diavola", price: "€7", ingredients: "Pomodoro, Mozzarella, Salame piccante" },
    { id: 3, name: "Capricciosa", price: "€8", ingredients: "Pomodoro, Mozzarella, Prosciutto, Funghi, Carciofi" }
  ];
  const localAppetizers = [
    { id: 1, name: "Bruschetta al Pomodoro", price: "€4", description: "Pane tostato con pomodoro fresco, aglio, basilico e olio d'oliva." },
    { id: 2, name: "Tagliere di Salumi e Formaggi", price: "€12", description: "Selezione di salumi e formaggi locali con miele e marmellata." }
  ];
  const localDesserts = [
    { id: 1, name: "Tiramisù", price: "€6", description: "Classico tiramisù fatto in casa." },
    { id: 2, name: "Panna Cotta", price: "€5", description: "Panna cotta con frutti di bosco." }
  ];

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
          setError(`Supabase error: ${fetchError.message}. Falling back to local data.`);
          setPizzas(localPizzas);
          setAppetizers(localAppetizers);
          setDesserts(localDesserts);
          console.log("Using fallback local menu data due to Supabase fetch error.");
          setLoading(false);
          return;
        }

        console.log("Successfully fetched from Supabase:", menuItems);

        if (!menuItems || menuItems.length === 0) {
          console.log("No menu items found in Supabase. Falling back to local data.");
          setDataIsEmpty(true);
          setPizzas(localPizzas);
          setAppetizers(localAppetizers);
          setDesserts(localDesserts);
          setLoading(false);
          return;
        } else {
          // CRUCIAL LOGGING: Inspect the structure of the first fetched item
          console.log("************************************************************************************");
          console.log("DEBUGGING DATA STRUCTURE (Please share these logs):");
          console.log("1. First fetched item from Supabase (entire object):", menuItems[0]);
          console.log("2. All property names (keys/columns) of the first item:", Object.keys(menuItems[0]));
          
          // Check for common category column names and log their values if they exist
          const potentialCategoryKeys = ['category', 'categoria', 'type', 'item_type'];
          let foundCategoryKey = null;
          for (const key of potentialCategoryKeys) {
            if (menuItems[0] && menuItems[0].hasOwnProperty(key)) {
              console.log(`3. Value of '${key}' property in the first item:`, menuItems[0][key]);
              foundCategoryKey = key; // We'll assume the first one found is the intended category key for now
              break; 
            }
          }
          if (!foundCategoryKey) {
            console.log("3. Could not automatically find a common category key (e.g., 'category', 'categoria') in the first item. Please inspect log #2 to identify the category column.");
          }
          console.log("************************************************************************************");
        }

        // Filter items by category - THIS PART DEPENDS ON THE LOGS ABOVE
        // Based on your last confirmation, we are using 'category' as the column name.
        // PLEASE VERIFY THIS WITH THE LOGS FROM "DEBUGGING DATA STRUCTURE"
        const categoryColumnName = 'category'; // IMPORTANT: Confirm this with log #2 above.
        
        const fetchedPizzas = menuItems.filter(item => item[categoryColumnName] === 'pizzas');
        const fetchedAppetizers = menuItems.filter(item => item[categoryColumnName] === 'appetizers');
        const fetchedDesserts = menuItems.filter(item => item[categoryColumnName] === 'desserts');

        console.log("Filtered Pizzas (after attempting to filter):", fetchedPizzas);
        console.log("Filtered Appetizers:", fetchedAppetizers);
        console.log("Filtered Desserts:", fetchedDesserts);

        setPizzas(fetchedPizzas.length > 0 ? fetchedPizzas : localPizzas);
        setAppetizers(fetchedAppetizers.length > 0 ? fetchedAppetizers : localAppetizers);
        setDesserts(fetchedDesserts.length > 0 ? fetchedDesserts : localDesserts);
        
        if (fetchedPizzas.length === 0 && fetchedAppetizers.length === 0 && fetchedDesserts.length === 0) {
            console.log("No items matched categories, using all local fallback data.");
            setDataIsEmpty(true); // Or handle this state as you see fit
        } else {
            if (fetchedPizzas.length === 0) console.log("No pizzas found in Supabase for 'pizzas' category, using local pizzas.");
            if (fetchedAppetizers.length === 0) console.log("No appetizers found in Supabase for 'appetizers' category, using local appetizers.");
            if (fetchedDesserts.length === 0) console.log("No desserts found in Supabase for 'desserts' category, using local desserts.");
        }


      } catch (e) {
        console.error("Error in fetchMenuItems:", e);
        setError(`Application error: ${e.message}. Falling back to local data.`);
        setPizzas(localPizzas);
        setAppetizers(localAppetizers);
        setDesserts(localDesserts);
        console.log("Using fallback local menu data due to application error.");
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

  // Display error message if Supabase fetch failed but still show fallback data
  // The actual display of data (pizzas, appetizers, desserts) will use the state,
  // which has been set to fallback data in case of an error.
  return (
    <div className="App">
      <Header />
      <Hero />
      {error && <div className="text-center py-4 text-red-600 bg-red-100 border border-red-400 rounded m-4">{error}</div>}
      {dataIsEmpty && !error && <div className="text-center py-4 text-yellow-600 bg-yellow-100 border border-yellow-400 rounded m-4">No menu items found in the database. Displaying default menu.</div>}
      
      <Menu menu={{ pizzas, appetizers, desserts }} />
      <Gallery />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App
