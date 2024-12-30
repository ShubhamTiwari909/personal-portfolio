"use client";
import store from "@/hooks/store";
import  { themeColors, themesStore } from "@/hooks/theme";
import { Container, Flex, RingProgress, Text } from "@mantine/core";
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const technicalSkills = [
  {
    value: 90,
    color: "#ea580c",
    label: "HTML5",
  },
  {
    value: 90,
    color: "#3b82f6",
    label: "CSS3",
  },
  {
    value: 90,
    color: "#facc15",
    label: "JavaScript",
  },
  {
    value: 70,
    color: "#1d4ed8",
    label: "TypeScript",
  },
  {
    value: 80,
    color: "#93c5fd",
    label: "React JS",
  },
  {
    value: 80,
    color: "#334155",
    label: "Next JS",
  },
  {
    value: 90,
    color: "#3b82f6",
    label: "Tailwind CSS",
  },
  {
    value: 80,
    color: "#ec4899",
    label: "SCSS",
  },
  {
    value: 70,
    color: "#b91c1c",
    label: "Astro JS",
  },
  {
    value: 80,
    color: "#6b7280",
    label: "Payload CMS",
  },
];

const nonTechnicalSkills = [
  {
    value: 100,
    label: "Communication",
  },
  {
    value: 80,
    label: "JIRA",
  },
  {
    value: 80,
    label: "Confluence",
  },
  {
    value: 90,
    label: "Documentation",
  },
];

const Skills = () => {
  const theme = store((state) => state.theme);
  const currentTheme = themesStore[theme];

  const color = store((state) => state.color);
  const currentColor = themeColors[color];

  return (
    <Container size="xl" className="w-full py-10 lg:py-16 scroll-m-20" id="skills">
      <ScrollAnimation animateIn="animate__rubberBand">
        <h2 className={`mb-10 text-6xl text-center ${currentTheme["text-200"]}`}>
          Technical Skills
        </h2>
      </ScrollAnimation>
      <Flex wrap="wrap" gap={50} justify="center" className="mb-16">
        {technicalSkills.map((skill, index) => {
          return (
            <ScrollAnimation key={index} animateIn="animate__fadeInUp">
              <RingProgress
                size={210}
                sections={[{ value: skill.value, color: skill.color }]}
                label={
                  <Text c="#ffffff" fw={700} ta="center" size="xl">
                    {skill.label}
                  </Text>
                }
              />
            </ScrollAnimation>
          );
        })}
      </Flex>
      <ScrollAnimation animateIn="animate__rubberBand">
        <h2 className={`mb-10 text-4xl text-center lg:text-6xl ${currentTheme["text-200"]}`}>
          Non-Technical Skills
        </h2>
      </ScrollAnimation>

      <Flex wrap="wrap" gap={50} justify="center">
        {nonTechnicalSkills.map((skill, index) => {
          return (
            <ScrollAnimation key={index} animateIn="animate__fadeInUp">
              <RingProgress
                size={240}
                sections={[{ value: skill.value, color: currentColor["500"] }]}
                label={
                  <Text c="#ffffff" fw={700} ta="center" size="xl">
                    {skill.label}
                  </Text>
                }
              />
            </ScrollAnimation>
          );
        })}
      </Flex>
    </Container>
  );
};

export default Skills;
