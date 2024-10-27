"use client";

import { Inter } from "next/font/google";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "./globals.css";

import Navbar from "@/components/navbar/navbar";

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
      <body className={`${inter.className} flex flex-col `}>
        <ChakraProvider theme={theme}>
          <Navbar />
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}
