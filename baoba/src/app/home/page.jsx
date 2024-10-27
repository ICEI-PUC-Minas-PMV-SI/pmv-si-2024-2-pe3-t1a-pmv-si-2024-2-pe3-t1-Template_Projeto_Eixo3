"use client";

import React from "react";

import { Text, Grid, GridItem, Card } from "@chakra-ui/react";
import Image from "next/image";
import CustomCard from "@/components/custom-card/custom-card";

export default function Home() {
  return (
    <main>
      <section className="flex mt-16 justify-around">
        <Text textAlign="justify" className="w-1/2">
          O Baobá é uma árvore antiga, nativa do continente africano. É chamada
          de árvore da vida, pois resiste a um ecossistema pouco fértil e
          bastante seco. Este é o nome do nosso projeto por representar a
          perseverança na adversidade da crise climática, a resiliência e
          possibilidade de renovação, o que reflete um paralelo com todo o meio
          ambiente e a chance de sua recuperação se tomarmos ações para
          preservação de nossa fauna e flora.
        </Text>
        <aside>
          <Image src="/baoba-home.jpg" alt="Baobá" width={200} height={200} />
        </aside>
      </section>

      <Grid className="mt-8 p-12" templateColumns="repeat(4, 1fr)" gap="20">
        <GridItem colSpan={1}>
          <CustomCard src={"/biomas.png"}
            alt={'Biomas'}
            width={200}
            height={200}
            title={'Biomas'}>
          </CustomCard>
        </GridItem>
        <GridItem colSpan={1}>
        <CustomCard src={"/arara.png"}
            alt={'Animais'}
            width={200}
            height={200}
            title={'Animais'}>
          </CustomCard>
        </GridItem>
        <GridItem colSpan={1}>
        <CustomCard src={"/ecoturismo.png"}
            alt={'Ecoturismo'}
            width={200}
            height={200}
            title={'Ecoturismo'}>
          </CustomCard>
        </GridItem>
        <GridItem colSpan={1}>
        <CustomCard src={"/sustent.png"}
            alt={'Sustentabilidade'}
            width={200}
            height={200}
            title={'Sustentabilidade'}>
          </CustomCard>
        </GridItem>
      </Grid>
    </main>
  );
}
