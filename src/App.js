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
import Drawer from "./components/Drawer";
import Menu from "./components/Menu";

export const AppContext = React.createContext({});

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [searchOpened, setSearchOpened] = React.useState(false);
  const [burgerOpened, setBurgerOpened] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');


  React.useEffect(() => {
    async function fetchData() {
      try {
        const cartResponse = await axios.get('https://62ec127355d2bd170e7c282d.mockapi.io/Cart');
        const itemsResponse = await axios.get('https://62ec127355d2bd170e7c282d.mockapi.io/items');

        setCartItems(cartResponse.data)
        setItems(itemsResponse.data)

      } catch (error) {
        alert('Ошибка при запросе данных :(')
        console.error(error)
      }
    }
    fetchData()
  }, [])

  const onAddToCart = async (obj) => {
    try {
      const findItem = cartItems.find((cartObj) => Number(cartObj.parentId) === Number(obj.id));
      if (findItem) {
        setCartItems((prev) => prev.filter((item) => Number(item.parentId) !== Number(obj.id)));
        await axios.delete(`https://62ec127355d2bd170e7c282d.mockapi.io/Cart/${findItem.id}`);
      } else {
        const { data } = await axios.post('https://62ec127355d2bd170e7c282d.mockapi.io/Cart', obj);
        setCartItems((prev) => [...prev, data])
      }
    } catch (error) {
      alert('Не удалось добавить в корзину')
      console.error(error)
    }

  }

  const RemoveItemCart = (id) => {
    try {
      axios.delete(`https://62ec127355d2bd170e7c282d.mockapi.io/Cart/${id}`);
      setCartItems((prev) => prev.filter(item => Number(item.id) !== Number(id)));
    } catch (error) {
      alert('Ошибка при удалении данных :(')
      console.error(error)
    }
  }

  const isItemAddedToCart = (id) => {
    return cartItems.some(obj => Number(obj.parentId) === Number(id));
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
    console.log(searchValue)
  }

  const onClose = () => {
    setCartOpened(false);
    setBurgerOpened(false)
  }

  return (
    <AppContext.Provider value={{
      items,
      cartItems,
      setCartItems,
      isItemAddedToCart,
      onAddToCart,
      setCartOpened,
      setSearchOpened,
      searchOpened,
      onChangeSearchInput
    }}>
      <div className="wrapper">
        <Header
          onClickCart={() => setCartOpened(true)}
          onSearch={() => { setSearchOpened(!searchOpened) }}
          onBurger={() => { setBurgerOpened(true) }} />

        {cartOpened && <Drawer cartItems={cartItems} onClose={onClose} onRemove={RemoveItemCart} />}

        {burgerOpened && <Menu onClose={onClose} />}


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
            <Shop
              items={items}
              cartItems={cartItems}
              onAddToCart={onAddToCart}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput} />
          }
          />
        </Routes>

        <Footer />
      </div>
    </AppContext.Provider>
  );
}

export default App;
