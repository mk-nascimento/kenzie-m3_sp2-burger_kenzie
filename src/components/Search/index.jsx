import SearchForm, { Input } from "./Search.js";
import Button from "../Button/index.jsx";
import { useState } from "react";

const HeaderSearch = ({ filterStates, products, setNewValue }) => {
  const [inputValue, setInputValue] = useState("");

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
    else {
      filterStates(false);
      setInputValue("");
    }
  };

  return (
    <SearchForm className="flex-d-row bg-white" onSubmit={filterProducts}>
      <Input
        placeholder="Digitar Pesquisa"
        onChange={() => setInputValue(event.target.value.toLowerCase())}
        defaultValue={inputValue ? inputValue : ""}
      />

      <Button
        className={"bg-primary color-white"}
        click={(e) => (e.target.form[0].value = "")}
        text={"Pesquisar"}
        type="submit"
      />
    </SearchForm>
  );
};

export default HeaderSearch;
