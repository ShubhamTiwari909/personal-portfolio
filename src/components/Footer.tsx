"use client";
import store from "@/hooks/store";
import { themesStore } from "@/hooks/theme";
import { Container, Flex, Text } from "@mantine/core";
import Link from "next/link";
import React from "react";
import SocialIcons from "./Hero/SocialIcons";

const Links = [
  {
    label: "Introduction",
    href: "#introduction",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Blogs",
    href: "#blogs",
  },
];

const Footer = () => {
  const theme = store((state) => state.theme);
  const currentTheme = themesStore[theme];
  return (
    <Container
      size="xl"
      className="!max-w-full !mx-0 lg:flex lg:justify-center lg:items-center bg-slate-950"
    >
      <div className="py-10 lg:py-16">
        <Flex wrap="wrap" align="center" gap={80} className="mb-10 !flex-col lg:!flex-row !gap-y-5">
          {Links.map((link, index) => {
            return (
              <Link
                key={index}
                href={link.href}
                className={`${currentTheme["text-200"]} text-xl`}
              >
                {link.label}
              </Link>
            );
          })}
        </Flex>
        <Flex justify="center" wrap="wrap">
          <SocialIcons />
        </Flex>
        <Flex
          justify="center"
          wrap="wrap"
          gap={40}
          className="pb-10 mb-5 border-b-2 border-b-white/20"
        >
          <div>
            <Link
              href="mailto:shubhmtiwri00@gmail.com"
              className={`${currentTheme["text-200"]} text-xl`}
            >
              shubhmtiwri00@gmail.com
            </Link>
          </div>
          <div>
            <Link
              href="tel:+919627253516"
              className={`${currentTheme["text-200"]} text-xl`}
            >
              +91 9627253516
            </Link>
          </div>
        </Flex>
        <Text className={`${currentTheme["text-200"]} text-xl text-center`}>
          Developed by Shubham Tiwari
        </Text>
      </div>
    </Container>
  );
};

export default Footer;
