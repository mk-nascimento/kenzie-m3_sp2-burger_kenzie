import { createGlobalStyle } from "styled-components";

const Typography = createGlobalStyle`

.heading-1 {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: calc(26rem/16);
}

.heading-2 {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: calc(22rem/16);
}

.heading-3 {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: calc(18rem/16);
}

.heading-4 {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: calc(14rem/16);
}

.headline {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: calc(16rem/16);
}

.body {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: calc(14rem/16);
}

.body-600 {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: calc(14rem/16);
}

.caption {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: calc(12rem/16);
}

`
export default Typography;
