'use client';

import React from "react";

import { Heading, chakra } from "@chakra-ui/react";

export default function Home() {
  return (
    <main>
      <header>
        <Heading as="h3" size="lg">
          Boabá
        </Heading>

        <chakra.button
          px="3"
          py="2"
          bg="green.200"
          rounded="md"
          _hover={{ bg: "green.300" }}
        >
          Click me
        </chakra.button>
      </header>
    </main>
  );
}
