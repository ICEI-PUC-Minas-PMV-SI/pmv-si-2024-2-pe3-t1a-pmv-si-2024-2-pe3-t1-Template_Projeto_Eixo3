"use client";

import { Inter } from "next/font/google";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

const theme = extendTheme({
  colors: {
    brand: {
      100: "#f7fafc",
      900: "#1202c",
    },
  },
});
export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        {children}
        <ChakraProvider theme={theme}></ChakraProvider>
      </body>
    </html>
  );
}
