import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/blog/",
  title: "Mike's Blog",
  description: "A blog for documenting development processes and notes.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首頁", link: "/" },
      { text: "筆記", link: "/notes/introduction" },
      { text: "規格書", link: "/spec" },
    ],

    sidebar: [
      {
        text: "目錄",
        items: [
          {
            text: "筆記",
            items: [
              { text: "前言", link: "/notes/introduction" },
              { text: "使用技術", link: "/notes/tech" },
            ],
          },
          { text: "規格書", link: "/spec" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/Thrizzacode" }],
  },
  cleanUrls: true,
});
