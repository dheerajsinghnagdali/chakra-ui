import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  fallback: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Helvetica",
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ],
});

export const metadata: Metadata = {
  title: "Re-build Untitled UI using Chakra UI",
  description:
    "Re-build free Figma UI kit and design system of Untitled UI using Chakra UI.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={inter.variable} lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
