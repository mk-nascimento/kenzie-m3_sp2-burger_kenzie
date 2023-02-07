import { v4 as uuid } from "uuid";
import Button from "../Button";
import Card from "../Card";
import StyledUlProducts from "./styles.js";

const ProductsList = ({ cartStates, handle, list = [] }) => {
  const [listCart, setNewListCart] = cartStates;

  const addCart = (id) => {
    const alreadyInCart = listCart.some((product) => product.id == id);

    if (!alreadyInCart) handle(id);
    else {
      const incrementedProducts = listCart.map((product) => {
        if (product.id == id) product.quantity++;

        return product;
      });
      setNewListCart(incrementedProducts);
    }
  };

  return (
    <StyledUlProducts>
      {list.map(({ category, id, img, name, price }) => (
        <Card
          category={category}
          img={img}
          price={price}
          name={name}
          key={uuid()}>
          <Button
            text="Adicionar"
            className="body-600 bg-primary color-white"
            click={() => addCart(id)}
          />
        </Card>
      ))}
    </StyledUlProducts>
  );
};

export default ProductsList;
