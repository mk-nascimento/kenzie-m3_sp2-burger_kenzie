import CartProductLi from "./CartProduct.js";

const CartProduct = ({ category, img, name, children }) => {
  return (
    <CartProductLi className="flex-d-row">
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
    </CartProductLi>
  );
};

export default CartProduct;
