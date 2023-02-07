import SearchForm from "./styles.js";
import Button from "../Button";
import { useState } from "react";

const HeaderSearch = ({ filterStates, products, setNewValue, valueSearch }) => {
  const [inputValue, setInputValue] = useState(valueSearch);

  const productMatch = (product) => {
    return (
      product.name.toLowerCase().includes(inputValue) ||
      product.category.toLowerCase().includes(inputValue) ||
      (product.name.toLowerCase().includes(inputValue) &&
        product.category.toLowerCase().includes(inputValue))
    );
  };

  const filterProducts = () => {
    event.preventDefault();
    setNewValue(inputValue);

    const filteredProducts = products.filter((product) =>
      productMatch(product)
    );

    if (filteredProducts.length) filterStates(filteredProducts);
    else filterStates(false);

    setInputValue("");
  };

  return (
    <SearchForm className="flex-d-row bg-white" onSubmit={filterProducts}>
      <input
        value={inputValue ? inputValue : ""}
        onChange={() => setInputValue(event.target.value.toLowerCase())}
        placeholder="Digitar Pesquisa"
      />

      <Button
        className={"bg-primary color-white"}
        text={"Pesquisar"}
        type="submit"
      />
    </SearchForm>
  );
};

export default HeaderSearch;
