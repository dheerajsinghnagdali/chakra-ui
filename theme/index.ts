import { extendTheme } from "@chakra-ui/react";

import { colors, typography, shadows, blur, breakpoints } from "./foundations";
import { components } from "./components";

const overrides = {
  colors,
  shadows,
  blur,
  breakpoints,
  components,
  ...typography,
};

export default extendTheme(overrides);
