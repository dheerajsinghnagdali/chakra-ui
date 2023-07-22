import { extendTheme } from "@chakra-ui/react";

import { colors, typography, shadows, blurs } from "./foundations";

const overrides = {
  colors,
  shadows,
  blurs,
  ...typography,
};

export default extendTheme(overrides);
