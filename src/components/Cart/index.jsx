import Aside from "./Cart.js";
import Button from "../Button/index.jsx";
import CartTotal from "../CartTotal/index.jsx";
import UlCart from "../CartUl/index.jsx";

const Cart = ({ cartTotal, clearCart, productsCart = [] }) => {
  //

  return (
    <Aside className="flex-column bg-gray-0">
      <div className="Aside-Cart__header bg-primary color-white">
        <h3 className="Aside-Cart__header-title heading-3">
          Carrinho de compras
        </h3>
      </div>
      {productsCart.length > 0 ? (
        <>
          <UlCart list={productsCart}>
            <CartTotal
              total={cartTotal.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}>
              <Button
                text={"Remover todos"}
                className={"bg-gray-20 body-600 color-gray-50"}
                click={() => clearCart([])}
              />
            </CartTotal>
          </UlCart>
        </>
      ) : (
        <div className="empty-cartProducts flex-column align-center">
          <h3 className="heading-3 color-gray-100">Sua sacola está vazia</h3>

          <p className="body color-gray-50">Adicione itens</p>
        </div>
      )}
    </Aside>
  );
};

export default Cart;
