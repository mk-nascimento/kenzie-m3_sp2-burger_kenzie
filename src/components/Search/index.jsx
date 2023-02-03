import Search, { Input } from "./Search.js";
import Button from "../Button/index.jsx";

const HeaderSearch = () => {
  const prevent = () => {
    event.preventDefault();
  };

  return (
    <Search className="flex-d-row bg-white">
      <Input placeholder="Digitar Pesquisa" />
      <Button
        className={"bg-primary color-white"}
        text={"Pesquisar"}
        click={prevent}
      />
    </Search>
  );
};

export default HeaderSearch;
