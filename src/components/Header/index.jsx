import ComponentHeader from "./Header.js";
import logo from "/src/assets/logo.svg";

const Header = ({ children }) => {
  return (
    <ComponentHeader className="bg-gray-0">
      <div className="container flex-column">
        <img src={logo} alt="Logo" aria-label="Logo" />
        {children}
      </div>
    </ComponentHeader>
  );
};

export default Header;
