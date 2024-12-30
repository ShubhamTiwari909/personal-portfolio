"use client";
import store from "@/hooks/store";
import { themesStore } from "@/hooks/theme";
import { Button, Container, Flex } from "@mantine/core";
import Image from "next/image";
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const AboutMe = () => {
  const theme = store((state) => state.theme);
  const currentTheme = themesStore[theme];

  return (
    <Container
      size="xl"
      className="w-full py-10 lg:py-16 scroll-m-20"
      id="about"
    >
      <ScrollAnimation animateIn="animate__rubberBand">
        <h2
          className={`mb-5 text-6xl text-center lg:mb-0 ${currentTheme["text-200"]}`}
        >
          About me
        </h2>
      </ScrollAnimation>

      <Flex justify="space-around" align="center" wrap="wrap">
        <Image
          src="/about-me-banner.png"
          alt="About me illutstration"
          width={500}
          height={500}
          className="object-cover"
        />
        <ul className="max-w-xl space-y-5 text-xl text-slate-300">
          <ScrollAnimation animateIn="animate__pulse">
            <li>
              Motivated Junior Frontend Developer with hands-on experience
              working on multiple projects built with JSP, React.js, and
              Next.js.
            </li>
            <li>
              Collaborative team player with a strong focus on delivering
              responsive, user-friendly, SEO and visually appealing web
              applications.
            </li>
            <li className="!mb-12">
              Skilled in optimizing performance, writing clean, maintainable
              code, and ensuring seamless integration with backend systems.
            </li>
          </ScrollAnimation>
          <ScrollAnimation animateIn="animate__swing">
            <li>
              <Button
                className={currentTheme["bg-500"]}
                size="lg"
                component="a"
                href="https://drive.google.com/uc?export=download&id=10QwFE9kJfu7aLU_X-K0Mz6J2hggi4UhD"
                download
              >
                Download CV
              </Button>
            </li>
          </ScrollAnimation>
        </ul>
      </Flex>
    </Container>
  );
};

export default AboutMe;
