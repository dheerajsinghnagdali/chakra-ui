import { defineStyleConfig } from "@chakra-ui/react";

export default defineStyleConfig({
  baseStyle: {
    transitionProperty: "common",
    transitionDuration: "normal",
    fontWeight: "semibold",
    borderRadius: "lg",
    _disabled: {
      cursor: "not-allowed",
    },
  },
  sizes: {
    sm: {
      fontSize: "sm",
      lineHeight: "6",
      py: "2",
      px: "3.5",
    },
    md: {
      fontSize: "sm",
      lineHeight: "6",
      py: "2.5",
      px: "4",
    },
    lg: {
      fontSize: "md",
      lineHeight: "7",
      py: "2.5",
      px: "4.5",
    },
    xl: {
      fontSize: "md",
      lineHeight: "7",
      py: "3",
      px: "5",
    },
    "2xl": {
      fontSize: "lg",
      lineHeight: "8",
      py: "4",
      px: "7",
    },
  },
  variants: {
    solid: ({ colorScheme: c }) => ({
      bg: `${c}.600`,
      color: "white",
      _hover: {
        bg: `${c}.700`,
      },
      _focusVisible: {
        ring: "0.25rem",
        ringColor: `${c}.100`,
      },
      _disabled: {
        bg: `${c}.200`,
      },
    }),
    flushed: ({ colorScheme: c }) => ({
      bg: `${c}.50`,
      color: `${c}.700`,
      _hover: {
        bg: `${c}.100`,
      },
      _focusVisible: {
        ring: "0.25rem",
        ringColor: `${c}.100`,
      },
      _disabled: {
        bg: `${c}.25`,
        color: `${c}.300`,
      },
    }),
    outlined: ({ colorScheme: c }) => ({
      boxShadow: "xs",
      border: "1",
      borderColor: `${c}.300`,
      color: `${c}.700`,
      _focusVisible: {
        ring: "0.25rem",
        ringColor: `${c}.100`,
      },
      _disabled: {
        color: `${c}.300`,
        borderColor: `${c}.200`,
      },
    }),
    ghost: ({ colorScheme: c }) => ({
      color: `${c}.700`,
      _hover: {
        bg: `${c}.50`,
      },
      _focusVisible: {
        ring: "0",
      },
      _disabled: {
        color: `${c}.300`,
      },
    }),
    unstyled: ({ colorScheme: c }) => ({
      color: `${c}.700`,
      _hover: {
        color: `${c}.800`,
      },
      _focusVisible: {
        ring: "0",
      },
      _disabled: {
        color: `${c}.300`,
      },
    }),
    link: ({ colorScheme: c }) => ({
      color: `${c}.700`,
      _hover: {
        color: `${c}.800`,
        textDecoration: "none",
      },
      _focusVisible: {
        ring: "0",
      },
      _disabled: {
        color: `${c}.300`,
      },
    }),
  },
  defaultProps: {
    colorScheme: "primary",
    size: "sm",
    variant: "solid",
  },
});
