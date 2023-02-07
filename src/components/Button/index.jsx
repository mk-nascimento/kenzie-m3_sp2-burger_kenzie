import StyledButton from "./styles.js";

const Button = ({ click, className, text, type }) => {
  const buttontype = type ? type : "button";

  return (
    <StyledButton className={className} onClick={click} type={buttontype}>
      {text}
    </StyledButton>
  );
};

export default Button;
