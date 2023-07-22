"use client";

import { Box, Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box maxW="container.lg" mx="auto">
      <Heading
        textAlign="center"
        lineHeight="none"
        fontSize="display.xl"
        color="transparent"
        bgClip="text"
        bgGradient="linear(to-r,blue.400,teal.400)"
      >
        Re-build free Figma UI kit and design system of Untitled UI using Chakra
        UI
      </Heading>
    </Box>
  );
}
