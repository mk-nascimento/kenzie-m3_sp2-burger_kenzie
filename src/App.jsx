import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";

import api from "./services/axios.js";
import Aside from "./components/Aside";
import Header from "./components/Header";
import HeaderSearch from "./components/Search";
import ProductsList from "./components/ProductsList";
import Button from "./components/Button";

const App = () => {
  document.title = "Kenzie Burger";

  const cartStorage = localStorage.getItem("/*Burger-Kenzie*/:");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState(
    cartStorage ? JSON.parse(cartStorage) : []
  );
  const [cartTotal, setCartTotal] = useState(0);
  const [valueSearch, setValueSearch] = useState("");
  const hasFiltered = filteredProducts.length > 0;

  const getProducts = async () => {
    try {
      const apiProducts = await api();

      setProducts(apiProducts.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = (productId) => {
    const productsShowed = hasFiltered ? filteredProducts : products;

    const find = productsShowed.find((product) => product.id == productId);
    const alreadyInCart = cartProducts.some(
      (product) => product.id == productId
    );
    if (find && !alreadyInCart) {
      setCartProducts([...cartProducts, { ...find, quantity: 1 }]);

      toast.success("Item adicionado com sucesso !", {
        autoClose: 750,
        className: "color-gray-100",
        progressClassName: "bg-fb-sucess",
      });
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    const total = cartProducts
      .map(({ price, quantity }) => price * 1 * quantity)
      .reduce((acc, currentValue) => acc + currentValue, 0);

    setCartTotal(total);
    cartProducts.length > 0
      ? localStorage.setItem("/*Burger-Kenzie*/:", JSON.stringify(cartProducts))
      : localStorage.clear();
  }, [cartProducts]);

  const clearSearch = () => {
    setValueSearch("");
    setFilteredProducts([]);
  };

  return (
    <div className="App">
      <ToastContainer autoClose />
      <Header>
        <HeaderSearch
          filterStates={setFilteredProducts}
          products={products}
          setNewValue={setValueSearch}
          valueSearch={valueSearch}
        />
      </Header>
      <main>
        {valueSearch ? (
          <div className="search-container container flex-d-row">
            <h3 className="heading-1 color-gray-100">
              Resultados para a pesquisa:{"  "}
              <span className="color-gray-50">{valueSearch}</span>
            </h3>
            <Button
              className={"bg-primary color-white"}
              click={clearSearch}
              text={"Limpar busca"}
            />
          </div>
        ) : (
          <></>
        )}
        <div className="container flex-column">
          {filteredProducts !== false ? (
            <ProductsList
              cartStates={[cartProducts, setCartProducts]}
              handle={handleClick}
              list={hasFiltered ? filteredProducts : products}
            />
          ) : (
            <>
              <h3 className="search-not-found color-gray-50 heading-2">
                Não foram encontrados produtos para a sua pesquisa!!!
              </h3>
            </>
          )}

          <Aside
            cartTotal={cartTotal}
            cartStates={[cartProducts, setCartProducts]}
          />
        </div>
      </main>
    </div>
  );
};

export default App;
