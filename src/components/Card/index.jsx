import CardLi from "./Card.js";

const Card = ({ category, children, img, name, price }) => {
  return (
    <CardLi className="bg-white">
      <img className="bg-gray-0" src={img} alt={name} />
      <div className="info-card flex-column">
        <h3 className="info-card__name heading-3 color-gray-100">{name}</h3>
        <p className="info-card__category caption color-gray-50">{category}</p>
        <p className="info-card__price body-600 color-primary">
          {(price * 1).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
        {children}
      </div>
    </CardLi>
  );
};

export default Card;
