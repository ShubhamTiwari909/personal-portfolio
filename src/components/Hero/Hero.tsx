"use client";
import { Button, Container, Flex } from "@mantine/core";
import Image from "next/image";
import React from "react";
import SocialIcons from "./SocialIcons";
import Stats from "./Stats";
import store from "@/hooks/store";
import { themesStore } from "@/hooks/theme";

const Hero = () => {
  const theme = store((state) => state.theme);
  const currentTheme = themesStore[theme];

  return (
    <Container
      size="xl"
      className="w-full py-10 lg:py-16 scroll-m-20"
      id="introduction"
    >
      <Flex className="!block lg:!flex lg:justify-between">
        <div className="mb-10 lg:mb-0">
          <p className="mb-3 text-2xl text-slate-400 animate__animated animate__backInDown">
            Hi I am
          </p>
          <p className="mb-8 text-4xl text-slate-300 animate__animated animate__backInLeft">
            Shubham Tiwari
          </p>
          <h1
            className={`mb-5 font-serif text-5xl ${currentTheme["text-500"]} lg:text-6xl animate__animated animate__bounceIn`}
          >
            Jr. Frontend Engineer
          </h1>
          <SocialIcons />
          <Flex gap={40} wrap="wrap" className="mb-10">
            <Button
              size="lg"
              component="a"
              href="mailto:shubhmtiwri00@gmail.com"
              className={`animate__animated animate__fadeIn ${currentTheme["bg-500"]}`}
            >
              Hire me
            </Button>
            <Button
              size="lg"
              className={`animate__animated animate__fadeIn ${currentTheme["bg-500"]}`}
              component="a"
              href="https://drive.google.com/uc?export=download&id=10QwFE9kJfu7aLU_X-K0Mz6J2hggi4UhD"
              download
            >
              Download CV
            </Button>
          </Flex>
          <Stats />
        </div>
        <Image
          src="/hero-profile.png"
          alt="Shubham"
          width={400}
          height={400}
          className="object-cover border-2 shadow-lg lg:mr-20 border-slate-100/20 rounded-xl shadow-slate-100/10 animate__animated animate__rubberBand"
        />
      </Flex>
    </Container>
  );
};

export default Hero;
