import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Trinity Projects",
  description: "A open source eco-system",
  cleanUrls: true,
  lastUpdated: true,
  sitemap: {
    hostname: 'https://docs-trinity.vercel.app'
  },
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#9596C5' }],
    ['meta', { name: 'author', content: 'Trinity Projects' }],
    ['meta', { name: 'keywords', content: 'Trinity, Open Source, Development, Launcher, Minecraft, Community, Projects' }],
    ['meta', { name: 'description', content: 'A open source eco-system providing tools and software like Trinity Launcher.' }],
    
    // Open Graph / Facebook
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: 'https://docs-trinity.vercel.app/' }],
    ['meta', { property: 'og:title', content: 'Trinity Projects' }],
    ['meta', { property: 'og:description', content: 'A open source eco-system providing tools and software like Trinity Launcher.' }],
    ['meta', { property: 'og:image', content: 'https://docs-trinity.vercel.app/banner.webp' }],
    ['meta', { property: 'og:locale', content: 'en_US' }],
    ['meta', { property: 'og:site_name', content: 'Trinity Projects' }],

    // Twitter
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:url', content: 'https://docs-trinity.vercel.app/' }],
    ['meta', { name: 'twitter:title', content: 'Trinity Projects' }],
    ['meta', { name: 'twitter:description', content: 'A open source eco-system providing tools and software like Trinity Launcher.' }],
    ['meta', { name: 'twitter:image', content: 'https://docs-trinity.vercel.app/banner.webp' }]
  ],

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Guides', link: '/guides/' },
          { text: 'Projects', link: '/dev/projects/' }
        ],
        sidebar: [
          {
            text: 'Getting Started',
            collapsed: false,
            items: [
              { text: 'Overview', link: '/guides/' }
            ]
          },
          {
            text: 'Development',
            collapsed: false,
            items: [
              { text: 'Overview', link: '/dev/' },
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
                    text: 'Neko Void',
                    collapsed: true,
                    items: [
                      { text: 'Home', link: '/dev/projects/neko-void/' }
                    ]
                  },
                  {
                    text: 'CMUS++',
                    collapsed: true,
                    items: [
                      { text: 'Home', link: '/dev/projects/cmuspp/' }
                    ]
                  },
                  {
                    text: 'Audio Source',
                    collapsed: true,
                    items: [
                      { text: 'Home', link: '/dev/projects/audiosource/' }
                    ]
                  }
                ]
              }
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
              { text: 'Team', link: '/about/team' },
              { text: 'Mission', link: '/about/mission' },
              { text: 'Community Values', link: '/about/community-values' },
              { text: 'License', link: '/about/license' }
            ]
          }
        ]
      }
    },
    es: {
      label: 'Español',
      lang: 'es',
      link: '/es/',
      themeConfig: {
        logo: '/logo-compact.svg',
        outlineTitle: 'En esta página',
        docFooter: {
          prev: 'Página anterior',
          next: 'Página siguiente'
        },
        returnToTopLabel: 'Volver arriba',
        sidebarMenuLabel: 'Menú',
        darkModeSwitchLabel: 'Apariencia',
        nav: [
          { text: 'Inicio', link: '/es/' },
          { text: 'Guías', link: '/es/guides/' },
          { text: 'Proyectos', link: '/es/dev/projects/' }
        ],
        sidebar: [
          {
            text: 'Comenzando',
            collapsed: false,
            items: [
              { text: 'Resumen', link: '/es/guides/' }
            ]
          },
          {
            text: 'Desarrollo',
            collapsed: false,
            items: [
              { text: 'Resumen', link: '/es/dev/' },
              {
                text: 'Proyectos',
                collapsed: true,
                items: [
                  { text: 'Resumen', link: '/es/dev/projects/' },
                  {
                    text: 'Lanzador Trinity',
                    collapsed: true,
                    items: [
                      { text: 'Inicio', link: '/es/dev/projects/trinity-launcher/' },
                      { text: 'Arquitectura', link: '/es/dev/projects/trinity-launcher/architecture' },
                      { text: 'Instancias', link: '/es/dev/projects/trinity-launcher/instance-management' },
                      { text: 'Compilación', link: '/es/dev/projects/trinity-launcher/build-process' }
                    ]
                  },
                  {
                    text: 'Neko Void',
                    collapsed: true,
                    items: [
                      { text: 'Inicio', link: '/es/dev/projects/neko-void/' }
                    ]
                  },
                  {
                    text: 'CMUS++',
                    collapsed: true,
                    items: [
                      { text: 'Inicio', link: '/es/dev/projects/cmuspp/' }
                    ]
                  },
                  {
                    text: 'Audio Source',
                    collapsed: true,
                    items: [
                      { text: 'Inicio', link: '/es/dev/projects/audiosource/' }
                    ]
                  }
                ]
              }
            ]
          },
          {
            text: 'Lanzadores',
            collapsed: false,
            items: [
              { text: 'Resumen', link: '/es/launchers/' },
              {
                text: 'Minecraft',
                collapsed: true,
                items: [
                  { text: 'Resumen', link: '/es/launchers/minecraft/overview' },
                  { text: 'Instalación', link: '/es/launchers/minecraft/installation' },
                  { text: 'Configuración', link: '/es/launchers/minecraft/configuration' },
                  { text: 'Solución de Problemas', link: '/es/launchers/minecraft/troubleshooting' }
                ]
              }
            ]
          },
          {
            text: 'Acerca de',
            collapsed: false,
            items: [
              { text: 'Introducción', link: '/es/about/' },
              { text: 'Equipo', link: '/es/about/team' },
              { text: 'Misión', link: '/es/about/mission' },
              { text: 'Valores de la Comunidad', link: '/es/about/community-values' },
              { text: 'Licencia', link: '/es/about/license' }
            ]
          }
        ],
        footer: {
          message: 'Lanzado bajo la Licencia BSD-3-Clause.',
          copyright: 'Copyright © 2025-present Trinity Projects'
        },
        socialLinks: [
          { icon: 'github', link: 'https://github.com/Trinity-LA/Trinity-Launcher' },
          { icon: 'discord', link: 'https://discord.gg/EFFpSCDmcJ' },
          { icon: { svg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3C6.48 3 2 6.58 2 11c0 2.05.98 3.9 2.56 5.32-.15 1.23-.58 2.32-1.25 3.26-.1.14.02.34.19.29 1.38-.39 2.55-1.06 3.53-1.89.94.32 1.95.5 3 .5 5.52 0 10-3.58 10-8s-4.48-8-10-8z" fill="currentColor"/><circle cx="8" cy="11" r="1.5" fill="var(--vp-c-bg)"/><circle cx="12" cy="11" r="1.5" fill="var(--vp-c-bg)"/><circle cx="16" cy="11" r="1.5" fill="var(--vp-c-bg)"/></svg>' }, link: 'https://fluxer.gg/OlQ0bSc8' },
          { icon: { svg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12A1.25 1.25 0 0 0 8 13.25a1.25 1.25 0 0 0 1.25 1.25 1.25 1.25 0 0 0 0-2.5zm5.5 0a1.25 1.25 0 0 0 0 2.5 1.25 1.25 0 0 0 0-2.5zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.094z" fill="currentColor"/></svg>' }, link: 'https://www.reddit.com/r/TrinityUnix/' }
        ]
      }
    }
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo-compact.svg',

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Trinity-LA/Trinity-Launcher' },
      { icon: 'discord', link: 'https://discord.gg/EFFpSCDmcJ' },
      { icon: { svg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3C6.48 3 2 6.58 2 11c0 2.05.98 3.9 2.56 5.32-.15 1.23-.58 2.32-1.25 3.26-.1.14.02.34.19.29 1.38-.39 2.55-1.06 3.53-1.89.94.32 1.95.5 3 .5 5.52 0 10-3.58 10-8s-4.48-8-10-8z" fill="currentColor"/><circle cx="8" cy="11" r="1.5" fill="var(--vp-c-bg)"/><circle cx="12" cy="11" r="1.5" fill="var(--vp-c-bg)"/><circle cx="16" cy="11" r="1.5" fill="var(--vp-c-bg)"/></svg>' }, link: 'https://fluxer.gg/OlQ0bSc8' },
      { icon: { svg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12A1.25 1.25 0 0 0 8 13.25a1.25 1.25 0 0 0 1.25 1.25 1.25 1.25 0 0 0 0-2.5zm5.5 0a1.25 1.25 0 0 0 0 2.5 1.25 1.25 0 0 0 0-2.5zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.094z" fill="currentColor"/></svg>' }, link: 'https://www.reddit.com/r/TrinityUnix/' }
    ],

    footer: {
      message: 'Released under the BSD-3-Clause License.',
      copyright: 'Copyright © 2025-present Trinity Projects'
    }
  }
})
