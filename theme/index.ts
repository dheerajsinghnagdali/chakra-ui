import { extendTheme } from "@chakra-ui/react";

import { colors, typography, shadows, blur, breakpoints } from "./foundations";

const overrides = {
  colors,
  shadows,
  blur,
  breakpoints,
  ...typography,
};

export default extendTheme(overrides);
