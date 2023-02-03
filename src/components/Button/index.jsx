import { ScButton } from "./Button.js";

const Button = ({ text, className, click }) => {
  return (
    <ScButton className={className} onClick={click}>
      {text}
    </ScButton>
  );
};

export default Button;
