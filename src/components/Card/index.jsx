import StyledLiCard from "./styles.js";

const Card = ({ category, children, img, name, price }) => {
  return (
    <StyledLiCard className="bg-white">
      <img className="bg-gray-0" src={img} alt={name} />
      <div className="info-card flex-column">
        <h3 className="info-card__name heading-3 color-gray-100">
          {name.length <= 15 ? name : `${name.slice(0, 12)}...`}
        </h3>
        <p className="info-card__category caption color-gray-50">{category}</p>
        <p className="info-card__price body-600 color-primary">
          {(price * 1).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
        {children}
      </div>
    </StyledLiCard>
  );
};

export default Card;
