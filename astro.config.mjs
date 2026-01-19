// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://ovaridavid.github.io',
  base: '/ovari-portfolio/',  // ← trailing slash is important here!
  vite: {
    plugins: [tailwindcss()],
  },
  // Optional: cleaner URLs (no forced trailing slashes on pages)
  trailingSlash: 'never',
});