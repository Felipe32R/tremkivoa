import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  modules: ["@nuxtjs/i18n"],
  css: ["./app/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    locales: [
      { code: "pt", name: "PT", file: "pt.json" },
      { code: "en", name: "EN", file: "en.json" },
    ],
    defaultLocale: "pt",
    lazy: true,
    langDir: "locales",
    strategy: "no_prefix",
  },
});
