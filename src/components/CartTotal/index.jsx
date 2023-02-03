import DivTotal from "./CartTotal.js";

const CartTotal = ({ total, children }) => {
  return (
    <DivTotal className="flex-column">
      <div className="flex-d-row align-center">
        <h3 className="headline color-gray-100">Total</h3>
        <p className="body-600 color-gray-50">{total}</p>
      </div>
      {children}
    </DivTotal>
  );
};

export default CartTotal;
