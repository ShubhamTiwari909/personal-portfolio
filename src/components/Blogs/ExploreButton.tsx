"use client";
import store from "@/hooks/store";
import { themesStore } from "@/hooks/theme";
import { Button, Flex } from "@mantine/core";
import React from "react";

const ExploreButton = () => {
  const theme = store((state) => state.theme);
  const currentTheme = themesStore[theme];
  return (
    <Flex justify="center">
      <Button
        component="a"
        href="https://dev.to/shubhamtiwari909"
        target="_blank"
        size="lg"
        className={currentTheme["bg-500"]}
      >
        Explore all blogs
      </Button>
    </Flex>
  );
};

export default ExploreButton;
