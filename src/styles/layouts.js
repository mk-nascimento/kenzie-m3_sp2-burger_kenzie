import { createGlobalStyle } from "styled-components";

const Layouts = createGlobalStyle`

.flex {
  display: flex;
}

.flex-column {
  display: flex;
  flex-direction: column;
}

.flex-d-row {
  display: flex;
  flex-direction: row;
}

.full-center {
  align-items: center;
  justify-content: center;
}

.justify-center {
  justify-items: center;
  justify-content: center;
}

.align-center {
  align-items: center;
  align-content: center;
}

.justify-between {
  justify-content: space-between;
}

`

export default Layouts;
