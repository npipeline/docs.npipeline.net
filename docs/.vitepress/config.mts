import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar'

const sidebar = generateSidebar({
  documentRootPath: '/docs',
  basePath: '/docs',
  collapsed: true,
  collapseDepth: 2,
  useTitleFromFileHeading: true,
  useTitleFromFrontmatter: true,
  useFolderTitleFromIndexFile: true,
  useFolderLinkFromIndexFile: true,
  hyphenToSpace: true,
  capitalizeEachWords: true,
  includeFolderIndexFile: false,
  sortMenusByFrontmatterOrder: true,
  excludeByGlobPattern: ['superpowers/**']
})

function fixLinks(items: any[]): any[] {
  return items.map(item => {
    const fixed = { ...item }
    if (fixed.link) {
      fixed.link = fixed.link
        .replace(/\/index\.md$/, '/')
        .replace(/\.md$/, '')
    }
    if (fixed.items) {
      fixed.items = fixLinks(fixed.items)
    }
    return fixed
  })
}

export default defineConfig({
  title: 'NPipeline',
  description: 'High-performance .NET data pipeline framework',
  cleanUrls: true,
  lastUpdated: true,
  sitemap: {
    hostname: 'https://docs.npipeline.net'
  },
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]],

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting-started/' },
      { text: 'Core Concepts', link: '/core-concepts/' },
      { text: 'Connectors', link: '/connectors/' },
      {
        text: 'GitHub',
        link: 'https://github.com/npipeline/NPipeline'
      }
    ],
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/npipeline/NPipeline' }
    ],
    sidebar: fixLinks(sidebar),
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright 2024-present NPipeline'
    }
  }
})