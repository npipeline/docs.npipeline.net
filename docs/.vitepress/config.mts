import { defineConfig } from "vitepress";
import { generateSidebar } from "vitepress-sidebar";

const sidebar = generateSidebar({
  documentRootPath: "/docs",
  basePath: "/docs",
  collapsed: true,
  collapseDepth: 1,
  useTitleFromFileHeading: true,
  useTitleFromFrontmatter: true,
  useFolderTitleFromIndexFile: true,
  useFolderLinkFromIndexFile: true,
  hyphenToSpace: true,
  capitalizeEachWords: true,
  includeFolderIndexFile: false,
  sortMenusByFrontmatterOrder: true,
});

// function fixLinks(items: any[]): any[] {
//   return items.map((item) => {
//     const fixed = { ...item };
//     if (fixed.link) {
//       fixed.link = fixed.link.replace(/\/index\.md$/, "/").replace(/\.md$/, "");
//     }
//     if (fixed.items) {
//       fixed.items = fixLinks(fixed.items);
//     }
//     return fixed;
//   });
// }

export default defineConfig({
  title: "NPipeline",
  description: "High-Performance, Type-Safe, Streaming Data Pipelines in .NET",
  cleanUrls: true,
  lastUpdated: true,
  sitemap: {
    hostname: "https://docs.npipeline.net",
  },
  head: [["link", { rel: "icon", type: "image/png", href: "/npipeline.png" }]],

  themeConfig: {
    logo: "/npipeline.png",
    nav: [
      { text: "Quick Start", link: "/getting-started/quick-start" },
      { text: "Core Concepts", link: "/core-concepts/" },
      { text: "Storage Providers", link: "/storage-providers/" },
      { text: "Connectors", link: "/connectors/" },
      { text: "Extensions", link: "/extensions/" },
      { text: "Analyzers", link: "/analyzers/" },
    ],
    search: {
      provider: "local",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/npipeline/NPipeline" },
      // { icon: "twitter", link: "https://twitter.com/NPipeline_" },
    ],
    sidebar: sidebar, //fixLinks(sidebar),
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright 2026-present NPipeline",
    },
  },
});
