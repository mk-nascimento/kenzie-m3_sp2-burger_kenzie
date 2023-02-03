import Reset from "./reset.js";
import Global from "./globals.js";
import Layouts from "./layouts.js";
import Colors from "./colors.js";
import Typography from "./typography.js";

const GlobalStyles = () => {
  return (
    <>
      <Reset />
      <Global />
      <Layouts />
      <Colors />
      <Typography />
    </>
  );
};

export default GlobalStyles;
