import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'

export default ({
  base: '/UF1/',
  outDir: '../docs',
  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin)
    }
  },
  head: [
  ['link', { rel: 'icon', href: '/img/logo.png' }],
  ],
  locales: {
    root: {
      label: 'Español',
      lang: 'es-ES',
      link: '/',
      title: 'UF1 - Fundamentos de Programación',
      description: 'Unidad 1 donde se abordan los conceptos de que es programar y los algoritmos.',
      themeConfig: {
        siteTitle: 'Fundamentos de </br>Programación',
        outline: { label: 'En esta página' },
          docFooter: { prev: 'Anterior', next: 'Siguiente' },
          nav: [
            { text: '🏠 Inicio', link: '/' },
            { text: '📚 Contenidos', items: [
              { text: '1. Introducción', link: '/1-introduccio' },
              { text: '2. Cómo funcionan los ordenadores', link: '/2-funcionament-ordinadors' },
              { text: '3. Pensamiento computacional', link: '/3-pensament-computacional' },
              { text: '4. Ciclo de vida', link: '/4-cicle-vida' },
              { text: "5. Elementos de un programa", link: '/5-elements' },
              { text: '💡Ejemplos', link: '/6-exemples' },
              { text: '✏️ Ejercicios', link: '/7-exercicis' },
            ]}
          ]
      }
    },
    ca: {
      label: 'Valencià',
      lang: 'ca-ES',
      link: '/ca/',
      title: 'UF1 - Fonaments de Programació',
      description: 'Unitat 1 on s\'aborden els conceptes de que es programar i els algoritmes.',
      themeConfig: {
        siteTitle: 'Fonaments de </br>Programació',
        outline: { label: 'En aquesta pàgina' },
          docFooter: { prev: 'Anterior', next: 'Següent' },
          nav: [
            { text: '🏠 Inici', link: '/ca/index' },
            { text: '📚 Continguts', items: [
              { text: '1. Introducció', link: '/ca/1-introduccio' },
              { text: '2. Com funcionen els ordinadors', link: '/ca/2-funcionament-ordinadors' },
              { text: '3. Pensament-computacional', link: '/ca/3-pensament-computacional' },
              { text: '4. Cicle de Vida', link: '/ca/4-cicle-vida' },
              { text: "5. Elements d'un Programa", link: '/ca/5-elements' },
              { text: "💡Exemples", link: '/ca/6-exemples' },
              { text: "✏️ Exercicis", link: '/ca/7-exercicis' },
            ]}
          ]
      }
    }
  },
  // Tema por idioma
  themeConfig: {
    logo: '/img/logo.png',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/GGEdu' }
    ],
    sidebar: {
      '/': [
        { text: '📚 Contenidos', items: [
            { text: '1. Introducción', link: '/1-introduccio' },
            { text: '2. Cómo funcionan los ordenadores', link: '/2-funcionament-ordinadors' },
            { text: '3. Pensamiento computacional', link: '/3-pensament-computacional' },
            { text: '4. Ciclo de vida', link: '/4-cicle-vida' },
            { text: "5. Elementos de un programa", link: '/5-elements' },
            { text: '💡Ejemplos', link: '/6-exemples' },
            { text: '✏️ Ejercicios', link: '/7-exercicis' },
            { text: '<img src="img/logo-gva.png" class="logo-anim" style="vertical-align:middle; height:150px; margin-top:100px;">', link: '' },
            { text: '<img src="img/logo-centro.png" class="logo-anim" style="vertical-align:middle; height:150px;">', link: '' }
          ]
        }
      ],
      '/ca/': [
        { text: '📚 Continguts', items: [
            { text: '1. Introducció', link: '/ca/1-introduccio' },
            { text: '2. Com funcionen els ordinadors', link: '/ca/2-funcionament-ordinadors' },
            { text: '3. Pensament-computacional', link: '/ca/3-pensament-computacional' },
            { text: '4. Cicle de Vida', link: '/ca/4-cicle-vida' },
            { text: "5. Elements d'un Programa", link: '/ca/5-elements' },
            { text: "💡Exemples", link: '/ca/6-exemples' },
            { text: "✏️ Exercicis", link: '/ca/7-exercicis' },
            { text: '<img src="../img/logo-gva.png" class="logo-anim" style="vertical-align:middle; height:150px; margin-top:100px;">', link: '' },
            { text: '<img src="../img/logo-centro.png" class="logo-anim" style="vertical-align:middle; height:150px;">', link: '' }
          ]
        }
      ]
    },
    footer: {
  message: '<img src="/img/logo-gva.png" alt="GVA" style="height:60px; margin: 0 auto; display:block;" />',
      copyright: 'Copyright © 2025'
    }
  }
})
