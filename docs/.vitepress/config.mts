import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Trinity Projects",
  description: "A open source eco-system",
  lang: 'en-US',
  cleanUrls: true,
  lastUpdated: true,
  sitemap: {
    hostname: 'https://trinity.example.com'
  },
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#7bc5e4' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'en_US' }],
    ['meta', { property: 'og:site_name', content: 'Trinity Projects' }],
    ['meta', { property: 'og:image', content: 'https://trinity.example.com/og-image.png' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:image', content: 'https://trinity.example.com/og-image.png' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo-compact.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guides', link: '/guides/' },
      { text: 'Projects', link: '/dev/projects/' },
      { text: 'Docs', link: '/docs/' },
      { text: 'About', link: '/about/' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        collapsed: false,
        items: [
          { text: 'Overview', link: '/guides/' },
          { text: 'Getting Started', link: '/guides/getting-started/' },
          {
            text: 'Troubleshooting',
            collapsed: true,
            items: [
              { text: 'Common Issues', link: '/guides/troubleshooting/common-issues' },
              { text: 'Logs & Reports', link: '/guides/troubleshooting/logs-reports' }
            ]
          }
        ]
      },
      {
        text: 'Development',
        collapsed: false,
        items: [
          { text: 'Overview', link: '/dev/' },
          {
            text: 'Contributing',
            collapsed: true,
            items: [
              {
                text: 'Trinity Launcher',
                collapsed: false,
                items: [
                  { text: 'Guide', link: '/dev/contributing/trinity-launcher/' },
                  { text: 'How to Contribute', link: '/dev/contributing/trinity-launcher/how-to-contribute' },
                  { text: 'Code Style', link: '/dev/contributing/trinity-launcher/code-style' },
                  { text: 'Commit Strategy', link: '/dev/contributing/trinity-launcher/commit-strategy' },
                  { text: 'Issues', link: '/dev/contributing/trinity-launcher/issues' },
                  { text: 'Pull Requests', link: '/dev/contributing/trinity-launcher/pull-requests' }
                ]
              },
              {
                text: 'Hytale Launcher',
                collapsed: true,
                items: [
                  { text: 'Guide', link: '/dev/contributing/hytale-launcher/' },
                  { text: 'How to Contribute', link: '/dev/contributing/hytale-launcher/how-to-contribute' },
                  { text: 'Code Style', link: '/dev/contributing/hytale-launcher/code-style' },
                  { text: 'Commit Strategy', link: '/dev/contributing/hytale-launcher/commit-strategy' },
                  { text: 'Issues', link: '/dev/contributing/hytale-launcher/issues' },
                  { text: 'Pull Requests', link: '/dev/contributing/hytale-launcher/pull-requests' }
                ]
              }]
          },
          {
            text: 'Projects',
            collapsed: true,
            items: [
              { text: 'Overview', link: '/dev/projects/' },
              {
                text: 'Trinity Launcher',
                collapsed: true,
                items: [
                  { text: 'Home', link: '/dev/projects/trinity-launcher/' },
                  { text: 'Architecture', link: '/dev/projects/trinity-launcher/architecture' },

                  { text: 'Instances', link: '/dev/projects/trinity-launcher/instance-management' },
                  { text: 'Build', link: '/dev/projects/trinity-launcher/build-process' }
                ]
              },
              {
                text: 'Hytale Launcher',
                collapsed: true,
                items: [
                  { text: 'Home', link: '/dev/projects/hytale-launcher/' },
                  { text: 'Architecture', link: '/dev/projects/hytale-launcher/architecture' },
                  { text: 'Instances', link: '/dev/projects/hytale-launcher/instance-management' },
                  { text: 'Build', link: '/dev/projects/hytale-launcher/build-process' }
                ]
              }

            ]
          }
        ]
      },
      {
        text: 'Documentation',
        collapsed: false,
        items: [
          { text: 'Overview', link: '/docs/' },
          { text: 'Concepts', link: '/docs/concepts/' },
          { text: 'Configuration', link: '/docs/configuration/' }
        ]
      },
      {
        text: 'Launchers',
        collapsed: false,
        items: [
          { text: 'Overview', link: '/launchers/' },
          {
            text: 'Minecraft',
            collapsed: true,
            items: [
              { text: 'Overview', link: '/launchers/minecraft/overview' },
              { text: 'Installation', link: '/launchers/minecraft/installation' },
              { text: 'Configuration', link: '/launchers/minecraft/configuration' },
              { text: 'Usage', link: '/launchers/minecraft/usage' },
              { text: 'Troubleshooting', link: '/launchers/minecraft/troubleshooting' }
            ]
          },
          {
            text: 'Hytale',
            collapsed: true,
            items: [
              { text: 'Overview', link: '/launchers/hytale/overview' },
              { text: 'Installation', link: '/launchers/hytale/installation' },
              { text: 'Configuration', link: '/launchers/hytale/configuration' },
              { text: 'Usage', link: '/launchers/hytale/usage' },
              { text: 'Troubleshooting', link: '/launchers/hytale/troubleshooting' }
            ]
          }
        ]
      },
      {
        text: 'About',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/about/' },
          { text: 'Mission', link: '/about/mission' },
          { text: 'Community Values', link: '/about/community-values' },
          { text: 'License', link: '/about/license' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Trinity-LA/Trinity-Launcher' },
      { icon: 'discord', link: 'https://discord.gg/ettXssJs4b' },
      { icon: { svg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M21.68 3.56c-.28-.2-.68-.24-1.02-.08L3.26 10.4c-.7.3-1.14.98-1.14 1.74s.44 1.44 1.14 1.74l4.46 1.9 1.58 5.16a1.98 1.98 0 0 0 1.88 1.4c.54 0 1.06-.22 1.44-.6l2.12-2.12 4.46 3.06c.38.26.84.34 1.3.22s.84-.44 1.02-.88l4-16a2 2 0 0 0-.84-2.46zM13 14 8.7 11.8l9.6-6-8.2 8.6v.02L13 14z"/></svg>' }, link: 'https://t.me/CyberCoffeFossOrg' }
    ],

    footer: {
      message: 'Released under the BSD-3-Clause License.',
      copyright: 'Copyright © 2025-present Trinity Projects'
    }
  }
})
