import { FiPlus, FiMinus } from "react-icons/fi";
import { toast } from "react-toastify";
import Button from "../Button";
import StyledLiCart from "./styles.js";

const CartProduct = ({ cart, children, product }) => {
  const { category, id, img, name, quantity } = product;

  const [listCart, setNewListCart] = cart;

  const decrement = () => {
    if (quantity > 1) {
      const decrementedProducts = listCart.map((product) => {
        if (product.id == id && product.quantity > 1) product.quantity--;

        return product;
      });

      setNewListCart(decrementedProducts);
    } else {
      setNewListCart(listCart.filter((product) => product.id != id));

      toast.info("Item removido com sucesso !", {
        autoClose: 750,
        className: "color-gray-100",
        progressClassName: "bg-fb-info",
      });
    }
  };

  const increment = () => {
    const incrementedProducts = listCart.map((product) => {
      if (product.id == id) product.quantity++;

      return product;
    });

    setNewListCart(incrementedProducts);
  };

  return (
    <StyledLiCart className="flex-d-row">
      <img className="bg-gray-20" src={img} alt={`produto: ${name}`} />
      <div className="info-product flex-column">
        {children}
        <h3 className="info-product__name heading-3 color-gray-100">
          {name.length <= 17 ? name : `${name.slice(0, 14)}...`}
        </h3>
        <p className="info-product__category caption color-gray-50">
          {category}
        </p>
      </div>
      <div className="count flex-d-row align-center caption bg-white color-gray-50">
        <Button click={decrement} text={<FiMinus />} />
        <span>{quantity}</span>
        <Button click={increment} text={<FiPlus />} />
      </div>
    </StyledLiCart>
  );
};

export default CartProduct;
