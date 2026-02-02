import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",

  devtools: { enabled: false },

  modules: ["@nuxtjs/i18n"],

  css: ["~/assets/css/main.css"],

  app: {
    head: {
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100..700;1,100..700&display=swap",
        },
        {
          rel: "icon",
          type: "image/svg+xml",
          href: "/favicon.svg",
        },
      ],
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  i18n: {
    locales: [
      { code: "pt", name: "PT", file: "pt.json" },
      { code: "en", name: "EN", file: "en.json" },
    ],
    defaultLocale: "pt",
    langDir: "locales",
    strategy: "no_prefix",
  },
});
