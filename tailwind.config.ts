import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    {
      pattern:
        /!text-(\d{2,3}|[a-z]+)-?(50|100|200|300|400|500|600|700|800|900|950)?/,
      variants: ["hover"],
    },
    {
      pattern:
        /!bg-(\d{2,3}|[a-z]+)-?(50|100|200|300|400|500|600|700|800|900|950)?/,
      variants: ["hover"],
    },
    {
      pattern:
        /!border-(\d{2,3}|[a-z]+)-?(50|100|200|300|400|500|600|700|800|900|950)?/,
    },
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
