import { useEffect, useState } from "react";
import Cart from "./components/Cart/index.jsx";
import Header from "./components/Header/index.jsx";
import Main from "./components/Main/index.jsx";
import ProductsList from "./components/ProductsList/index.jsx";
import api from "./services/axios.js";

const App = () => {
  console.clear();
  document.title = "Kenzie Burger";
  const cartStorage = localStorage.getItem("/*Burger-Kenzie*/:");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState(
    cartStorage ? JSON.parse(cartStorage) : []
  );
  const [cartTotal, setCartTotal] = useState(0);

  const getProducts = async () => {
    try {
      const apiProducts = await api();

      setProducts(apiProducts.data);
    } catch (error) {
      console.log(error);
    }
  };

  const hasFiltered = () =>
    filteredProducts.length > 0 ? filteredProducts : products;

  const handleClick = (productId) => {
    const find = hasFiltered().find((product) => product.id == productId);
    const alreadyInCart = cartProducts.some(
      (product) => product.id == productId
    );
    if (find && !alreadyInCart) {
      setCartProducts([...cartProducts, { ...find, quantity: 1 }]);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    console.log("oba, bão? >", products);
  }, [products]);

  useEffect(() => {
    const total = cartProducts
      .map(({ price, quantity }) => price * 1 * quantity)
      .reduce((acc, currentValue) => acc + currentValue, 0);

    setCartTotal(total);
    cartProducts.length > 0
      ? localStorage.setItem("/*Burger-Kenzie*/:", JSON.stringify(cartProducts))
      : localStorage.clear();
  }, [cartProducts]);

  return (
    <div className="App">
      <Header />
      <Main>
        <div className="container flex-column">
          <ProductsList list={hasFiltered()} handle={handleClick} />

          <Cart
            productsCart={cartProducts}
            cartTotal={cartTotal}
            clearCart={setCartProducts}
          />
        </div>
      </Main>
    </div>
  );
};

export default App;
