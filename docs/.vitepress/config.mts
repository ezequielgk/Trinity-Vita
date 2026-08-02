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
                  },
                  {
                    text: 'BedrockOnLinux',
                    collapsed: true,
                    items: [
                      { text: 'Home', link: '/dev/projects/bedrock-on-linux/' }
                    ]
                  },
                  {
                    text: 'GenovaLauncher',
                    collapsed: true,
                    items: [
                      { text: 'Home', link: '/dev/projects/genova-launcher/' }
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
              },
              {
                text: 'BedrockOnLinux',
                collapsed: true,
                items: [
                  { text: 'Home', link: '/launchers/bedrock-on-linux/' }
                ]
              },
              {
                text: 'GenovaLauncher',
                collapsed: true,
                items: [
                  { text: 'Home', link: '/launchers/genova-launcher/' }
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
                  },
                  {
                    text: 'BedrockOnLinux',
                    collapsed: true,
                    items: [
                      { text: 'Inicio', link: '/es/dev/projects/bedrock-on-linux/' }
                    ]
                  },
                  {
                    text: 'GenovaLauncher',
                    collapsed: true,
                    items: [
                      { text: 'Inicio', link: '/es/dev/projects/genova-launcher/' }
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
              },
              {
                text: 'BedrockOnLinux',
                collapsed: true,
                items: [
                  { text: 'Inicio', link: '/es/launchers/bedrock-on-linux/' }
                ]
              },
              {
                text: 'GenovaLauncher',
                collapsed: true,
                items: [
                  { text: 'Inicio', link: '/es/launchers/genova-launcher/' }
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
    },
    pt: {
      label: 'Português',
      lang: 'pt',
      link: '/pt/',
      themeConfig: {
        logo: '/logo-compact.svg',
        outlineTitle: 'Nesta página',
        docFooter: {
          prev: 'Página anterior',
          next: 'Próxima página'
        },
        returnToTopLabel: 'Voltar ao topo',
        sidebarMenuLabel: 'Menu',
        darkModeSwitchLabel: 'Aparência',
        nav: [
          { text: 'Início', link: '/pt/' },
          { text: 'Guias', link: '/pt/guides/' },
          { text: 'Projetos', link: '/pt/dev/projects/' }
        ],
        sidebar: [
          {
            text: 'Começando',
            collapsed: false,
            items: [
              { text: 'Visão geral', link: '/pt/guides/' }
            ]
          },
          {
            text: 'Desenvolvimento',
            collapsed: false,
            items: [
              { text: 'Visão geral', link: '/pt/dev/' },
              {
                text: 'Projetos',
                collapsed: true,
                items: [
                  { text: 'Visão geral', link: '/pt/dev/projects/' },
                  {
                    text: 'Trinity Launcher',
                    collapsed: true,
                    items: [
                      { text: 'Início', link: '/pt/dev/projects/trinity-launcher/' },
                      { text: 'Arquitetura', link: '/pt/dev/projects/trinity-launcher/architecture' },
                      { text: 'Instâncias', link: '/pt/dev/projects/trinity-launcher/instance-management' },
                      { text: 'Compilação', link: '/pt/dev/projects/trinity-launcher/build-process' }
                    ]
                  },
                  {
                    text: 'Neko Void',
                    collapsed: true,
                    items: [
                      { text: 'Início', link: '/pt/dev/projects/neko-void/' }
                    ]
                  },
                  {
                    text: 'CMUS++',
                    collapsed: true,
                    items: [
                      { text: 'Início', link: '/pt/dev/projects/cmuspp/' }
                    ]
                  },
                  {
                    text: 'Audio Source',
                    collapsed: true,
                    items: [
                      { text: 'Início', link: '/pt/dev/projects/audiosource/' }
                    ]
                  },
                  {
                    text: 'BedrockOnLinux',
                    collapsed: true,
                    items: [
                      { text: 'Início', link: '/pt/dev/projects/bedrock-on-linux/' }
                    ]
                  },
                  {
                    text: 'GenovaLauncher',
                    collapsed: true,
                    items: [
                      { text: 'Início', link: '/pt/dev/projects/genova-launcher/' }
                    ]
                  }
                ]
              }
            ]
          },
          {
            text: 'Lançadores',
            collapsed: false,
            items: [
              { text: 'Visão geral', link: '/pt/launchers/' },
              {
                text: 'Minecraft',
                collapsed: true,
                items: [
                  { text: 'Visão geral', link: '/pt/launchers/minecraft/overview' },
                  { text: 'Instalação', link: '/pt/launchers/minecraft/installation' },
                  { text: 'Configuração', link: '/pt/launchers/minecraft/configuration' },
                  { text: 'Solução de Problemas', link: '/pt/launchers/minecraft/troubleshooting' }
                ]
              },
              {
                text: 'BedrockOnLinux',
                collapsed: true,
                items: [
                  { text: 'Início', link: '/pt/launchers/bedrock-on-linux/' }
                ]
              },
              {
                text: 'GenovaLauncher',
                collapsed: true,
                items: [
                  { text: 'Início', link: '/pt/launchers/genova-launcher/' }
                ]
              }
            ]
          },
          {
            text: 'Sobre',
            collapsed: false,
            items: [
              { text: 'Introdução', link: '/pt/about/' },
              { text: 'Equipe', link: '/pt/about/team' },
              { text: 'Missão', link: '/pt/about/mission' },
              { text: 'Valores da Comunidade', link: '/pt/about/community-values' },
              { text: 'Licença', link: '/pt/about/license' }
            ]
          }
        ],
        footer: {
          message: 'Publicado sob a Licença BSD-3-Clause.',
          copyright: 'Copyright © 2025-present Trinity Projects'
        },
        socialLinks: [
          { icon: 'github', link: 'https://github.com/Trinity-LA/Trinity-Launcher' },
          { icon: 'discord', link: 'https://discord.gg/EFFpSCDmcJ' },
          { icon: { svg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3C6.48 3 2 6.58 2 11c0 2.05.98 3.9 2.56 5.32-.15 1.23-.58 2.32-1.25 3.26-.1.14.02.34.19.29 1.38-.39 2.55-1.06 3.53-1.89.94.32 1.95.5 3 .5 5.52 0 10-3.58 10-8s-4.48-8-10-8z" fill="currentColor"/><circle cx="8" cy="11" r="1.5" fill="var(--vp-c-bg)"/><circle cx="12" cy="11" r="1.5" fill="var(--vp-c-bg)"/><circle cx="16" cy="11" r="1.5" fill="var(--vp-c-bg)"/></svg>' }, link: 'https://fluxer.gg/OlQ0bSc8' },
          { icon: { svg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12A1.25 1.25 0 0 0 8 13.25a1.25 1.25 0 0 0 1.25 1.25 1.25 1.25 0 0 0 0-2.5zm5.5 0a1.25 1.25 0 0 0 0 2.5 1.25 1.25 0 0 0 0-2.5zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.094z" fill="currentColor"/></svg>' }, link: 'https://www.reddit.com/r/TrinityUnix/' }
        ]
      }
    },
    de: {
      label: 'Deutsch',
      lang: 'de',
      link: '/de/',
      themeConfig: {
        logo: '/logo-compact.svg',
        outlineTitle: 'Auf dieser Seite',
        docFooter: {
          prev: 'Vorherige Seite',
          next: 'Nächste Seite'
        },
        returnToTopLabel: 'Zurück nach oben',
        sidebarMenuLabel: 'Menü',
        darkModeSwitchLabel: 'Darstellung',
        nav: [
          { text: 'Start', link: '/de/' },
          { text: 'Anleitungen', link: '/de/guides/' },
          { text: 'Projekte', link: '/de/dev/projects/' }
        ],
        sidebar: [
          {
            text: 'Erste Schritte',
            collapsed: false,
            items: [
              { text: 'Übersicht', link: '/de/guides/' }
            ]
          },
          {
            text: 'Entwicklung',
            collapsed: false,
            items: [
              { text: 'Übersicht', link: '/de/dev/' },
              {
                text: 'Projekte',
                collapsed: true,
                items: [
                  { text: 'Übersicht', link: '/de/dev/projects/' },
                  {
                    text: 'Trinity Launcher',
                    collapsed: true,
                    items: [
                      { text: 'Start', link: '/de/dev/projects/trinity-launcher/' },
                      { text: 'Architektur', link: '/de/dev/projects/trinity-launcher/architecture' },
                      { text: 'Instanzen', link: '/de/dev/projects/trinity-launcher/instance-management' },
                      { text: 'Build', link: '/de/dev/projects/trinity-launcher/build-process' }
                    ]
                  },
                  {
                    text: 'Neko Void',
                    collapsed: true,
                    items: [
                      { text: 'Start', link: '/de/dev/projects/neko-void/' }
                    ]
                  },
                  {
                    text: 'CMUS++',
                    collapsed: true,
                    items: [
                      { text: 'Start', link: '/de/dev/projects/cmuspp/' }
                    ]
                  },
                  {
                    text: 'Audio Source',
                    collapsed: true,
                    items: [
                      { text: 'Start', link: '/de/dev/projects/audiosource/' }
                    ]
                  },
                  {
                    text: 'BedrockOnLinux',
                    collapsed: true,
                    items: [
                      { text: 'Start', link: '/de/dev/projects/bedrock-on-linux/' }
                    ]
                  },
                  {
                    text: 'GenovaLauncher',
                    collapsed: true,
                    items: [
                      { text: 'Start', link: '/de/dev/projects/genova-launcher/' }
                    ]
                  }
                ]
              }
            ]
          },
          {
            text: 'Launcher',
            collapsed: false,
            items: [
              { text: 'Übersicht', link: '/de/launchers/' },
              {
                text: 'Minecraft',
                collapsed: true,
                items: [
                  { text: 'Übersicht', link: '/de/launchers/minecraft/overview' },
                  { text: 'Installation', link: '/de/launchers/minecraft/installation' },
                  { text: 'Konfiguration', link: '/de/launchers/minecraft/configuration' },
                  { text: 'Fehlerbehebung', link: '/de/launchers/minecraft/troubleshooting' }
                ]
              },
              {
                text: 'BedrockOnLinux',
                collapsed: true,
                items: [
                  { text: 'Start', link: '/de/launchers/bedrock-on-linux/' }
                ]
              },
              {
                text: 'GenovaLauncher',
                collapsed: true,
                items: [
                  { text: 'Start', link: '/de/launchers/genova-launcher/' }
                ]
              }
            ]
          },
          {
            text: 'Über',
            collapsed: false,
            items: [
              { text: 'Einführung', link: '/de/about/' },
              { text: 'Team', link: '/de/about/team' },
              { text: 'Mission', link: '/de/about/mission' },
              { text: 'Community-Werte', link: '/de/about/community-values' },
              { text: 'Lizenz', link: '/de/about/license' }
            ]
          }
        ],
        footer: {
          message: 'Veröffentlicht unter der BSD-3-Clause-Lizenz.',
          copyright: 'Copyright © 2025-present Trinity Projects'
        },
        socialLinks: [
          { icon: 'github', link: 'https://github.com/Trinity-LA/Trinity-Launcher' },
          { icon: 'discord', link: 'https://discord.gg/EFFpSCDmcJ' },
          { icon: { svg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3C6.48 3 2 6.58 2 11c0 2.05.98 3.9 2.56 5.32-.15 1.23-.58 2.32-1.25 3.26-.1.14.02.34.19.29 1.38-.39 2.55-1.06 3.53-1.89.94.32 1.95.5 3 .5 5.52 0 10-3.58 10-8s-4.48-8-10-8z" fill="currentColor"/><circle cx="8" cy="11" r="1.5" fill="var(--vp-c-bg)"/><circle cx="12" cy="11" r="1.5" fill="var(--vp-c-bg)"/><circle cx="16" cy="11" r="1.5" fill="var(--vp-c-bg)"/></svg>' }, link: 'https://fluxer.gg/OlQ0bSc8' },
          { icon: { svg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12A1.25 1.25 0 0 0 8 13.25a1.25 1.25 0 0 0 1.25 1.25 1.25 1.25 0 0 0 0-2.5zm5.5 0a1.25 1.25 0 0 0 0 2.5 1.25 1.25 0 0 0 0-2.5zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.094z" fill="currentColor"/></svg>' }, link: 'https://www.reddit.com/r/TrinityUnix/' }
        ]
      }
    },
    ru: {
      label: 'Русский',
      lang: 'ru',
      link: '/ru/',
      themeConfig: {
        logo: '/logo-compact.svg',
        outlineTitle: 'На этой странице',
        docFooter: {
          prev: 'Предыдущая страница',
          next: 'Следующая страница'
        },
        returnToTopLabel: 'Наверх',
        sidebarMenuLabel: 'Меню',
        darkModeSwitchLabel: 'Внешний вид',
        nav: [
          { text: 'Главная', link: '/ru/' },
          { text: 'Руководства', link: '/ru/guides/' },
          { text: 'Проекты', link: '/ru/dev/projects/' }
        ],
        sidebar: [
          {
            text: 'Начало работы',
            collapsed: false,
            items: [
              { text: 'Обзор', link: '/ru/guides/' }
            ]
          },
          {
            text: 'Разработка',
            collapsed: false,
            items: [
              { text: 'Обзор', link: '/ru/dev/' },
              {
                text: 'Проекты',
                collapsed: true,
                items: [
                  { text: 'Обзор', link: '/ru/dev/projects/' },
                  {
                    text: 'Trinity Launcher',
                    collapsed: true,
                    items: [
                      { text: 'Главная', link: '/ru/dev/projects/trinity-launcher/' },
                      { text: 'Архитектура', link: '/ru/dev/projects/trinity-launcher/architecture' },
                      { text: 'Экземпляры', link: '/ru/dev/projects/trinity-launcher/instance-management' },
                      { text: 'Сборка', link: '/ru/dev/projects/trinity-launcher/build-process' }
                    ]
                  },
                  {
                    text: 'Neko Void',
                    collapsed: true,
                    items: [
                      { text: 'Главная', link: '/ru/dev/projects/neko-void/' }
                    ]
                  },
                  {
                    text: 'CMUS++',
                    collapsed: true,
                    items: [
                      { text: 'Главная', link: '/ru/dev/projects/cmuspp/' }
                    ]
                  },
                  {
                    text: 'Audio Source',
                    collapsed: true,
                    items: [
                      { text: 'Главная', link: '/ru/dev/projects/audiosource/' }
                    ]
                  },
                  {
                    text: 'BedrockOnLinux',
                    collapsed: true,
                    items: [
                      { text: 'Главная', link: '/ru/dev/projects/bedrock-on-linux/' }
                    ]
                  },
                  {
                    text: 'GenovaLauncher',
                    collapsed: true,
                    items: [
                      { text: 'Главная', link: '/ru/dev/projects/genova-launcher/' }
                    ]
                  }
                ]
              }
            ]
          },
          {
            text: 'Загрузчики',
            collapsed: false,
            items: [
              { text: 'Обзор', link: '/ru/launchers/' },
              {
                text: 'Minecraft',
                collapsed: true,
                items: [
                  { text: 'Обзор', link: '/ru/launchers/minecraft/overview' },
                  { text: 'Установка', link: '/ru/launchers/minecraft/installation' },
                  { text: 'Настройка', link: '/ru/launchers/minecraft/configuration' },
                  { text: 'Решение проблем', link: '/ru/launchers/minecraft/troubleshooting' }
                ]
              },
              {
                text: 'BedrockOnLinux',
                collapsed: true,
                items: [
                  { text: 'Главная', link: '/ru/launchers/bedrock-on-linux/' }
                ]
              },
              {
                text: 'GenovaLauncher',
                collapsed: true,
                items: [
                  { text: 'Главная', link: '/ru/launchers/genova-launcher/' }
                ]
              }
            ]
          },
          {
            text: 'О проекте',
            collapsed: false,
            items: [
              { text: 'Введение', link: '/ru/about/' },
              { text: 'Команда', link: '/ru/about/team' },
              { text: 'Миссия', link: '/ru/about/mission' },
              { text: 'Ценности сообщества', link: '/ru/about/community-values' },
              { text: 'Лицензия', link: '/ru/about/license' }
            ]
          }
        ],
        footer: {
          message: 'Выпущено под лицензией BSD-3-Clause.',
          copyright: 'Copyright © 2025-present Trinity Projects'
        },
        socialLinks: [
          { icon: 'github', link: 'https://github.com/Trinity-LA/Trinity-Launcher' },
          { icon: 'discord', link: 'https://discord.gg/EFFpSCDmcJ' },
          { icon: { svg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3C6.48 3 2 6.58 2 11c0 2.05.98 3.9 2.56 5.32-.15 1.23-.58 2.32-1.25 3.26-.1.14.02.34.19.29 1.38-.39 2.55-1.06 3.53-1.89.94.32 1.95.5 3 .5 5.52 0 10-3.58 10-8s-4.48-8-10-8z" fill="currentColor"/><circle cx="8" cy="11" r="1.5" fill="var(--vp-c-bg)"/><circle cx="12" cy="11" r="1.5" fill="var(--vp-c-bg)"/><circle cx="16" cy="11" r="1.5" fill="var(--vp-c-bg)"/></svg>' }, link: 'https://fluxer.gg/OlQ0bSc8' },
          { icon: { svg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12A1.25 1.25 0 0 0 8 13.25a1.25 1.25 0 0 0 1.25 1.25 1.25 1.25 0 0 0 0-2.5zm5.5 0a1.25 1.25 0 0 0 0 2.5 1.25 1.25 0 0 0 0-2.5zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.094z" fill="currentColor"/></svg>' }, link: 'https://www.reddit.com/r/TrinityUnix/' }
        ]
      }
    },
    uk: {
      label: 'Українська',
      lang: 'uk',
      link: '/uk/',
      themeConfig: {
        logo: '/logo-compact.svg',
        outlineTitle: 'На цій сторінці',
        docFooter: {
          prev: 'Попередня сторінка',
          next: 'Наступна сторінка'
        },
        returnToTopLabel: 'Вгору',
        sidebarMenuLabel: 'Меню',
        darkModeSwitchLabel: 'Вигляд',
        nav: [
          { text: 'Головна', link: '/uk/' },
          { text: 'Посібники', link: '/uk/guides/' },
          { text: 'Проєкти', link: '/uk/dev/projects/' }
        ],
        sidebar: [
          {
            text: 'Початок роботи',
            collapsed: false,
            items: [
              { text: 'Огляд', link: '/uk/guides/' }
            ]
          },
          {
            text: 'Розробка',
            collapsed: false,
            items: [
              { text: 'Огляд', link: '/uk/dev/' },
              {
                text: 'Проєкти',
                collapsed: true,
                items: [
                  { text: 'Огляд', link: '/uk/dev/projects/' },
                  {
                    text: 'Trinity Launcher',
                    collapsed: true,
                    items: [
                      { text: 'Головна', link: '/uk/dev/projects/trinity-launcher/' },
                      { text: 'Архітектура', link: '/uk/dev/projects/trinity-launcher/architecture' },
                      { text: 'Інстанси', link: '/uk/dev/projects/trinity-launcher/instance-management' },
                      { text: 'Збірка', link: '/uk/dev/projects/trinity-launcher/build-process' }
                    ]
                  },
                  {
                    text: 'Neko Void',
                    collapsed: true,
                    items: [
                      { text: 'Головна', link: '/uk/dev/projects/neko-void/' }
                    ]
                  },
                  {
                    text: 'CMUS++',
                    collapsed: true,
                    items: [
                      { text: 'Головна', link: '/uk/dev/projects/cmuspp/' }
                    ]
                  },
                  {
                    text: 'Audio Source',
                    collapsed: true,
                    items: [
                      { text: 'Головна', link: '/uk/dev/projects/audiosource/' }
                    ]
                  },
                  {
                    text: 'BedrockOnLinux',
                    collapsed: true,
                    items: [
                      { text: 'Головна', link: '/uk/dev/projects/bedrock-on-linux/' }
                    ]
                  },
                  {
                    text: 'GenovaLauncher',
                    collapsed: true,
                    items: [
                      { text: 'Головна', link: '/uk/dev/projects/genova-launcher/' }
                    ]
                  }
                ]
              }
            ]
          },
          {
            text: 'Запускачі',
            collapsed: false,
            items: [
              { text: 'Огляд', link: '/uk/launchers/' },
              {
                text: 'Minecraft',
                collapsed: true,
                items: [
                  { text: 'Огляд', link: '/uk/launchers/minecraft/overview' },
                  { text: 'Встановлення', link: '/uk/launchers/minecraft/installation' },
                  { text: 'Налаштування', link: '/uk/launchers/minecraft/configuration' },
                  { text: 'Усунення проблем', link: '/uk/launchers/minecraft/troubleshooting' }
                ]
              },
              {
                text: 'BedrockOnLinux',
                collapsed: true,
                items: [
                  { text: 'Головна', link: '/uk/launchers/bedrock-on-linux/' }
                ]
              },
              {
                text: 'GenovaLauncher',
                collapsed: true,
                items: [
                  { text: 'Головна', link: '/uk/launchers/genova-launcher/' }
                ]
              }
            ]
          },
          {
            text: 'Про нас',
            collapsed: false,
            items: [
              { text: 'Вступ', link: '/uk/about/' },
              { text: 'Команда', link: '/uk/about/team' },
              { text: 'Місія', link: '/uk/about/mission' },
              { text: 'Цінності спільноти', link: '/uk/about/community-values' },
              { text: 'Ліцензія', link: '/uk/about/license' }
            ]
          }
        ],
        footer: {
          message: 'Випущено за ліцензією BSD-3-Clause.',
          copyright: 'Copyright © 2025-present Trinity Projects'
        },
        socialLinks: [
          { icon: 'github', link: 'https://github.com/Trinity-LA/Trinity-Launcher' },
          { icon: 'discord', link: 'https://discord.gg/EFFpSCDmcJ' },
          { icon: { svg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3C6.48 3 2 6.58 2 11c0 2.05.98 3.9 2.56 5.32-.15 1.23-.58 2.32-1.25 3.26-.1.14.02.34.19.29 1.38-.39 2.55-1.06 3.53-1.89.94.32 1.95.5 3 .5 5.52 0 10-3.58 10-8s-4.48-8-10-8z" fill="currentColor"/><circle cx="8" cy="11" r="1.5" fill="var(--vp-c-bg)"/><circle cx="12" cy="11" r="1.5" fill="var(--vp-c-bg)"/><circle cx="16" cy="11" r="1.5" fill="var(--vp-c-bg)"/></svg>' }, link: 'https://fluxer.gg/OlQ0bSc8' },
          { icon: { svg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12A1.25 1.25 0 0 0 8 13.25a1.25 1.25 0 0 0 1.25 1.25 1.25 1.25 0 0 0 0-2.5zm5.5 0a1.25 1.25 0 0 0 0 2.5 1.25 1.25 0 0 0 0-2.5zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.094z" fill="currentColor"/></svg>' }, link: 'https://www.reddit.com/r/TrinityUnix/' }
        ]
      }
    },
    it: {
      label: 'Italiano',
      lang: 'it',
      link: '/it/',
      themeConfig: {
        logo: '/logo-compact.svg',
        outlineTitle: 'In questa pagina',
        docFooter: {
          prev: 'Pagina precedente',
          next: 'Pagina successiva'
        },
        returnToTopLabel: 'Torna in alto',
        sidebarMenuLabel: 'Menu',
        darkModeSwitchLabel: 'Aspetto',
        nav: [
          { text: 'Home', link: '/it/' },
          { text: 'Guide', link: '/it/guides/' },
          { text: 'Progetti', link: '/it/dev/projects/' }
        ],
        sidebar: [
          {
            text: 'Per iniziare',
            collapsed: false,
            items: [
              { text: 'Panoramica', link: '/it/guides/' }
            ]
          },
          {
            text: 'Sviluppo',
            collapsed: false,
            items: [
              { text: 'Panoramica', link: '/it/dev/' },
              {
                text: 'Progetti',
                collapsed: true,
                items: [
                  { text: 'Panoramica', link: '/it/dev/projects/' },
                  {
                    text: 'Trinity Launcher',
                    collapsed: true,
                    items: [
                      { text: 'Home', link: '/it/dev/projects/trinity-launcher/' },
                      { text: 'Architettura', link: '/it/dev/projects/trinity-launcher/architecture' },
                      { text: 'Istanze', link: '/it/dev/projects/trinity-launcher/instance-management' },
                      { text: 'Compilazione', link: '/it/dev/projects/trinity-launcher/build-process' }
                    ]
                  },
                  {
                    text: 'Neko Void',
                    collapsed: true,
                    items: [
                      { text: 'Home', link: '/it/dev/projects/neko-void/' }
                    ]
                  },
                  {
                    text: 'CMUS++',
                    collapsed: true,
                    items: [
                      { text: 'Home', link: '/it/dev/projects/cmuspp/' }
                    ]
                  },
                  {
                    text: 'Audio Source',
                    collapsed: true,
                    items: [
                      { text: 'Home', link: '/it/dev/projects/audiosource/' }
                    ]
                  },
                  {
                    text: 'BedrockOnLinux',
                    collapsed: true,
                    items: [
                      { text: 'Home', link: '/it/dev/projects/bedrock-on-linux/' }
                    ]
                  },
                  {
                    text: 'GenovaLauncher',
                    collapsed: true,
                    items: [
                      { text: 'Home', link: '/it/dev/projects/genova-launcher/' }
                    ]
                  }
                ]
              }
            ]
          },
          {
            text: 'Launcher',
            collapsed: false,
            items: [
              { text: 'Panoramica', link: '/it/launchers/' },
              {
                text: 'Minecraft',
                collapsed: true,
                items: [
                  { text: 'Panoramica', link: '/it/launchers/minecraft/overview' },
                  { text: 'Installazione', link: '/it/launchers/minecraft/installation' },
                  { text: 'Configurazione', link: '/it/launchers/minecraft/configuration' },
                  { text: 'Risoluzione dei problemi', link: '/it/launchers/minecraft/troubleshooting' }
                ]
              },
              {
                text: 'BedrockOnLinux',
                collapsed: true,
                items: [
                  { text: 'Home', link: '/it/launchers/bedrock-on-linux/' }
                ]
              },
              {
                text: 'GenovaLauncher',
                collapsed: true,
                items: [
                  { text: 'Home', link: '/it/launchers/genova-launcher/' }
                ]
              }
            ]
          },
          {
            text: 'Info',
            collapsed: false,
            items: [
              { text: 'Introduzione', link: '/it/about/' },
              { text: 'Team', link: '/it/about/team' },
              { text: 'Missione', link: '/it/about/mission' },
              { text: 'Valori della comunità', link: '/it/about/community-values' },
              { text: 'Licenza', link: '/it/about/license' }
            ]
          }
        ],
        footer: {
          message: 'Rilasciato sotto la licenza BSD-3-Clause.',
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
