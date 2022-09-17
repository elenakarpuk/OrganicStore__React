import React from "react";
import { Route, Routes } from "react-router-dom"
import axios from "axios";

import Header from "./components/Header";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Shop from "./pages/Shop";
import Footer from "./components/Footer";

export const AppContext = React.createContext({});

function App() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const itemsResponse = await axios.get('https://62ec127355d2bd170e7c282d.mockapi.io/items');
        setItems(itemsResponse.data)

      } catch (error) {
        alert('Ошибка при запросе данных :(')
        console.error(error)
      }
    }
    fetchData()
  }, [])

  return (
    <AppContext.Provider value={{
      items
    }}>
      <div className="wrapper">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" exact element={
            <About />
          }
          />

          <Route path="/blog" exact element={
            <Blog />
          }
          />

          <Route path="/recipes" exact element={
            <Recipes />
          }
          />

          <Route path="/shop" exact element={
            <Shop items={items} />
          }
          />
        </Routes>

        <Footer />
      </div>
    </AppContext.Provider>
  );
}

export default App;
