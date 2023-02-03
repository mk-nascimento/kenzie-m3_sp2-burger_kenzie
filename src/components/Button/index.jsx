import ComponentButton from "./Button.js";

const Button = ({ click, className, text, type }) => {
  const buttontype = type ? type : "button";

  return (
    <ComponentButton className={className} onClick={click} type={buttontype}>
      {text}
    </ComponentButton>
  );
};

export default Button;
