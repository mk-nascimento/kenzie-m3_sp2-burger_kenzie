import { v4 as uuid } from "uuid";
import Card from "../Card/index.jsx";
import ProductsUl from "./List.js";
import Button from "../Button/index.jsx";

const ProductsList = ({ list = [], handle }) => {
  return (
    <ProductsUl>
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
            click={() => handle(id)}
          />
        </Card>
      ))}
    </ProductsUl>
  );
};

export default ProductsList;
