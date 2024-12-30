"use client";
import store, { Colors } from "@/hooks/store";
import { themesStore } from "@/hooks/theme";
import React from "react";

const themes: {
  color: Colors;
  className: string;
}[] = [
  {
    color: "orange",
    className: "bg-orange-500",
  },
  {
    color: "emerald",
    className: "bg-emerald-500",
  },
  {
    color: "violet",
    className: "bg-violet-500",
  },
  {
    color: "red",
    className: "bg-red-500",
  },
  {
    color: "sky",
    className: "bg-sky-500",
  },
];

const ThemeChanger = () => {
  const toggleTheme = store((state) => state.toggleTheme);
  const toggleColor = store((state) => state.toggleColor);

  const theme = store((state) => state.theme);
  const currentTheme = themesStore[theme];
  return (
    <div className={`fixed top-0 right-1/2 translate-x-2/3 lg:translate-x-1/2 ${currentTheme["bg-200"]} p-2 rounded-xl rounded-t-none flex gap-2 z-[100]`}>
      {themes.map((theme, index) => {
        return (
          <button
            key={index}
            onClick={() => {
              toggleTheme(theme.color);
              toggleColor(theme.color);
            }}
            className="text-white"
          >
            <span
              className={`inline-block size-5 rounded-full ${theme.className}`}
            ></span>
          </button>
        );
      })}
    </div>
  );
};

export default ThemeChanger;