// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://ovari.dev',
  base: '/',  // ← trailing slash is important here!
  vite: {
    plugins: [tailwindcss()],
  },
  // Optional: cleaner URLs (no forced trailing slashes on pages)
  trailingSlash: 'never',
});