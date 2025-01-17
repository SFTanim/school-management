import type { Config } from 'tailwindcss';

const config: Config = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"], // Scan all files for Tailwind classes
  theme: {
    extend: {}, // Customize the default theme here
  },
  plugins: [], // Add Tailwind plugins if needed
};

export default config;