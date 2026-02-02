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
          { text: 'Advanced', link: '/guides/advanced/' },
          {
            text: 'Troubleshooting',
            collapsed: true,
            items: [
              { text: 'Index', link: '/guides/troubleshooting/' },
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
          { text: 'Setup', link: '/dev/setup' },
          { text: 'Libraries', link: '/dev/libraries/' },
          {
            text: 'Contributing',
            collapsed: true,
            items: [
              { text: 'Guide', link: '/dev/contributing/' },
              { text: 'How to Contribute', link: '/dev/contributing/how-to-contribute' },
              { text: 'Code Style', link: '/dev/contributing/code-style' },
              { text: 'Commit Strategy', link: '/dev/contributing/commit-strategy' },
              { text: 'Issues', link: '/dev/contributing/issues' },
              { text: 'Pull Requests', link: '/dev/contributing/pull-requests' }
            ]
          },
          {
            text: 'Dev Setup',
            collapsed: true,
            items: [
              { text: 'Requirements', link: '/dev/development-setup/requirements' },
              { text: 'Local Environment', link: '/dev/development-setup/local-environment' },
              { text: 'Build & Run', link: '/dev/development-setup/build-run' },
              { text: 'Debugging', link: '/dev/development-setup/debugging' }
            ]
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
                  { text: 'Auth', link: '/dev/projects/trinity-launcher/authentication' },
                  { text: 'Instances', link: '/dev/projects/trinity-launcher/instance-management' },
                  { text: 'Build', link: '/dev/projects/trinity-launcher/build-process' }
                ]
              },
              {
                text: 'Trinity SDK',
                collapsed: true,
                items: [
                  { text: 'Home', link: '/dev/projects/trinity-sdk/' },
                  { text: 'Overview', link: '/dev/projects/trinity-sdk/overview' },
                  { text: 'API', link: '/dev/projects/trinity-sdk/api' }
                ]
              }
            ]
          },
          {
            text: 'Shared Technical',
            collapsed: true,
            items: [
              { text: 'Index', link: '/dev/shared-technical/' },
              { text: 'Architecture', link: '/dev/shared-technical/core-architecture' },
              { text: 'Configuration', link: '/dev/shared-technical/configuration-system' },
              { text: 'File Layout', link: '/dev/shared-technical/file-layout' },
              { text: 'Logging', link: '/dev/shared-technical/logging' }
            ]
          }
        ]
      },
      {
        text: 'Documentation',
        collapsed: false,
        items: [
          { text: 'Overview', link: '/docs/' },
          {
            text: 'Concepts',
            collapsed: true,
            items: [
              { text: 'Index', link: '/docs/concepts/' },
              { text: 'Instances', link: '/docs/concepts/instances' },
              { text: 'Profiles', link: '/docs/concepts/profiles' },
              { text: 'Synchronization', link: '/docs/concepts/synchronization' }
            ]
          },
          {
            text: 'Configuration',
            collapsed: true,
            items: [
              { text: 'Index', link: '/docs/configuration/' },
              { text: 'Global Settings', link: '/docs/configuration/global-settings' },
              { text: 'Advanced Options', link: '/docs/configuration/advanced-options' }
            ]
          },
          { text: 'Downloads', link: '/docs/downloads/' }
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
              { text: 'Index', link: '/launchers/minecraft/' },
              { text: 'Overview', link: '/launchers/minecraft/overview' },
              { text: 'Installation', link: '/launchers/minecraft/installation' },
              { text: 'Configuration', link: '/launchers/minecraft/configuration' },
              { text: 'Usage', link: '/launchers/minecraft/usage' },
              { text: 'Troubleshooting', link: '/launchers/minecraft/troubleshooting' }
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
          { text: 'Open Source', link: '/about/open-source' },
          { text: 'License', link: '/about/license' },
          { text: 'Privacy Policy', link: '/privacy/' },
          { text: 'DMCA', link: '/dmca/' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Trinity-Vita' },
      { icon: 'discord', link: 'https://discord.gg/trinity' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Trinity Projects'
    }
  }
})
