import HeaderSearch from "../Search/index.jsx";
import CompHeader from "./Header.js";
import logo from "/src/assets/logo.svg";

const Header = () => {
  return (
    <CompHeader className="bg-gray-0">
      <div className="container flex-column">
        <img src={logo} alt="Logo" aria-label="Logo" />
        <HeaderSearch />
      </div>
    </CompHeader>
  );
};

export default Header;
