import { toast } from "react-toastify";
import Button from "../Button/index.jsx";
import CartProduct from "../CartProduct/index.jsx";
import StyledUlCart from "./styles.js";

const CartList = ({ cart, children }) => {
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
      <StyledUlCart className="flex-column">
        {listCart.map((product) => (
          <CartProduct cart={cart} product={product} key={product.id}>
            <Button
              text={"Remover"}
              className={"color-gray-50"}
              click={() => removeProduct(product)}
            />
          </CartProduct>
        ))}
      </StyledUlCart>
      <hr />
      {children}
    </>
  );
};

export default CartList;
