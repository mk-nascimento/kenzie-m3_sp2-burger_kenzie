import { toast } from "react-toastify";
import Button from "../Button";
import CartList from "../CartList";
import CartTotal from "../CartTotal";
import StyledAside from "./styles.js";

const Aside = ({ cartStates, cartTotal }) => {
  const [productsCart, setCart] = cartStates;
  const removeAll = () => {
    setCart([]);

    toast.info("Todos os itens foram removidos !", {
      autoClose: 750,
      className: "color-gray-100",
      progressClassName: "bg-fb-info",
    });
  };

  return (
    <StyledAside className="flex-column bg-gray-0">
      <div className="Aside-Cart__header bg-primary color-white">
        <h3 className="Aside-Cart__header-title heading-3">
          Carrinho de compras
        </h3>
      </div>
      {productsCart.length > 0 ? (
        <>
          <CartList cart={cartStates}>
            <CartTotal
              total={cartTotal.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}>
              <Button
                text={"Remover todos"}
                className={"bg-gray-20 body-600 color-gray-50"}
                click={removeAll}
              />
            </CartTotal>
          </CartList>
        </>
      ) : (
        <div className="empty-cartProducts flex-column align-center">
          <h3 className="heading-3 color-gray-100">Sua sacola está vazia</h3>

          <p className="body color-gray-50">Adicione itens</p>
        </div>
      )}
    </StyledAside>
  );
};

export default Aside;
