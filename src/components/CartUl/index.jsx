import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import CartUl from "./CartUl.js";
import CartProduct from "../CartProduct/index.jsx";
import Button from "../Button/index.jsx";

const UlCart = ({ cart, children }) => {
  const [listCart, setCart] = cart;

  const removeProduct = (product) => {
    setCart(
      listCart.filter((productFiltered) => productFiltered.id != product.id)
    );

    toast.info("Item removido com sucesso !", {
      autoClose: 750,
      className: "color-gray-100",
      progressClassName: "bg-fb-info",
    });
  };

  return (
    <>
      <ToastContainer autoClose />
      <CartUl className="flex-column">
        {listCart.map((product) => (
          <CartProduct cart={cart} product={product}>
            <Button
              text={"Remover"}
              className={"color-gray-50"}
              click={() => removeProduct(product)}
            />
          </CartProduct>
        ))}
      </CartUl>
      <hr />
      {children}
    </>
  );
};

export default UlCart;
