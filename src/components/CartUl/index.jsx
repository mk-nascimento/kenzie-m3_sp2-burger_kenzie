import CartUl from "./CartUl.js";
import CartProduct from "../CartProduct/index.jsx";
import Button from "../Button/index.jsx";

const UlCart = ({ list = [], children }) => {
  return (
    <>
      <CartUl className="flex-column">
        {list.map(({ category, id, img, name, price, quantity }) => (
          <CartProduct
            category={category}
            img={img}
            name={name}
            price={price}
            key={id}>
            <Button
              text={"Remover"}
              className={"color-gray-50"}
              click={() => {
                console.log(quantity);
              }}
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
