import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'

export default ({
  base: '/UF1-Introduccio/',
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
      title: 'UF1 - Introducción a la Programación y Java',
      description: 'Unidad 1 donde se abordan los conceptos de que es programar y los algoritmos y se introduce Java y los entornos de programación.',
      themeConfig: {
        siteTitle: 'Introducción a la Programación <br> y Java',
        outline: { label: 'En esta página' },
          docFooter: { prev: 'Anterior', next: 'Siguiente' },
          nav: [
            { text: '🏠 Inicio', link: '/' },
            { text: '📚 Contenidos', items: [
              { text: '1. Introducción', link: '/1-introduccio' },
              { text: '2. Programas y algoritmos', link: '/2-Programa-algoritme' },
              { text: '3. Lenguajes de programación e IDEs', link: '/3-Llenguatges-programacion-IDEs' },
              { text: '4. IDE populares para el desarrollo', link: '/4-tipus_ides' },
              { text: "5. Extensiones de un IDE", link: '/5-extensions' },
              { text: "6. Configurando Visual Studio Code", link: '/6-guia_vsc' },
              { text: "7. Java por dentro. ¿Cómo funciona Java?", link: '/7-Java-per-dins' },
              { text: "8. Gestión de un Proyecto", link: '/8-projectes-java' },
              { text: "9.1 Características de Java", link: '/9-1-Caracteristiques_Java' },
                { text: "9.2 Elementos básicos", link: '/9-2-elements' },
                { text: "9.3 Tipos de datos", link: '/9-3-dades' },
                { text: "9.4 Declaración de variables", link: '/9-4-variables' },
                { text: "9.5 Operadores", link: '/9-5-operadors' },
                { text: "9.6 Literales", link: '/9-6-literals' },
                { text: "9.7 Entrada y salida estándar", link: '/9-7-ioestandard' },
                { text: "9.8 Las clases Math, String y Scanner", link: '/9-8-classes_java' },
                { text: "9.9 Ejemplo sencillo", link: '/9-9-exemple' }
            ]}
          ]
      }
    },
    ca: {
      label: 'Valencià',
      lang: 'ca-ES',
      link: '/ca/',
      title: 'UF1 - Introducció a la Programació i Java',
      description: 'Unitat 1 on es tracten els conceptes de què és programar i que són els algoritmes algoritmos i s´introdueix Java y los entorns de programació.',
      themeConfig: {
        siteTitle: 'Introducció a la Programació <br> i Java',
        outline: { label: 'En aquesta pàgina' },
          docFooter: { prev: 'Anterior', next: 'Següent' },
          nav: [
            { text: '🏠 Inici', link: '/ca/index' },
            { text: '📚 Continguts', items: [
              { text: '1. Introducció', link: '/ca/1-introduccio' },
              { text: '2. Programes i algoritmes', link: '/ca/2-Programa-algoritme' },
              { text: '3. Llenguatges de programació i IDEs', link: '/ca/3-Llenguatges-programacion-IDEs' },
              { text: '4. IDEs Populars per al Desenvolupament', link: '/ca/4-tipus_ides' },
              { text: "5. Extensions d'un IDE", link: '/ca/5-extensions' },
              { text: "6. Configurant Visual Studio Code", link: '/ca/6-guia_vsc' },
              { text: "7. Java per dins. Com funciona Java?", link: '/ca/7-Java-per-dins' },
              { text: "8. Gestió d'un proyecte", link: '/ca/8-projectes-java' },
              { text: "9. Característiques de Java", link: '/ca/9-1-Caracteristiques_Java' },
                { text: "9.2 Elements bàsics", link: '/ca/9-2-elements' },
                { text: "9.3 Tipus de dades", link: '/ca/9-3-dades' },
                { text: "9.4 Declaració de variables", link: '/ca/9-4-variables' },
                { text: "9.5 Operadors", link: '/ca/9-5-operadors' },
                { text: "9.6 Literals", link: '/ca/9-6-literals' },
                { text: "9.7 Eixida i entrada estàndard", link: '/ca/9-7-ioestandard' },
                { text: "9.8 Les classes Math, String i Scanner", link: '/ca/9-8-classes_java' },
                { text: "9.9 Exemple senzill", link: '/ca/9-9-exemple' }
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
              { text: '2. Programas y algoritmos', link: '/2-Programa-algoritme' },
              { text: '3. Lenguajes de programación e IDEs', link: '/3-Llenguatges-programacion-IDEs' },
              { text: '4. IDE populares para el desarrollo', link: '/4-tipus_ides' },
              { text: "5. Extensiones de un IDE", link: '/5-extensions' },
              { text: "6. Configurando Visual Studio Code", link: '/6-guia_vsc' },
              { text: "7. Java por dentro. ¿Cómo funciona Java?", link: '/7-Java-per-dins' },
              { text: "8. Gestión de un Proyecto", link: '/8-projectes-java' },
              { text: "9.1 Características de Java", link: '/9-1-Caracteristiques_Java' },
                { text: "9.2 Elementos básicos", link: '/9-2-elements' },
                { text: "9.3 Tipos de datos", link: '/9-3-dades' },
                { text: "9.4 Declaración de variables", link: '/9-4-variables' },
                { text: "9.5 Operadores", link: '/9-5-operadors' },
                { text: "9.6 Literales", link: '/9-6-literals' },
                { text: "9.7 Entrada y salida estándar", link: '/9-7-ioestandard' },
                { text: "9.8 Las clases Math, String y Scanner", link: '/9-8-classes_java' },
                { text: "9.9 Ejemplo sencillo", link: '/9-9-exemple' }
          ]
        }
      ],
      '/ca/': [
        { text: '📚 Continguts', items: [
            { text: '🏠 Inici', link: '/ca/index' },
            { text: '📚 Continguts', items: [
              { text: '1. Introducció', link: '/ca/1-introduccio' },
              { text: '2. Programes i algoritmes', link: '/ca/2-Programa-algoritme' },
              { text: '3. Llenguatges de programació i IDEs', link: '/ca/3-Llenguatges-programacion-IDEs' },
              { text: '4. IDEs Populars per al Desenvolupament', link: '/ca/4-tipus_ides' },
              { text: "5. Extensions d'un IDE", link: '/ca/5-extensions' },
              { text: "6. Configurant Visual Studio Code", link: '/ca/6-guia_vsc' },
              { text: "7. Java per dins. Com funciona Java?", link: '/ca/7-Java-per-dins' },
              { text: "8. Gestió d'un proyecte", link: '/ca/8-projectes-java' },
              { text: "9. Característiques de Java", link: '/ca/9-1-Caracteristiques_Java' },
                { text: "9.2 Elements bàsics", link: '/ca/9-2-elements' },
                { text: "9.3 Tipus de dades", link: '/ca/9-3-dades' },
                { text: "9.4 Declaració de variables", link: '/ca/9-4-variables' },
                { text: "9.5 Operadors", link: '/ca/9-5-operadors' },
                { text: "9.6 Literals", link: '/ca/9-6-literals' },
                { text: "9.7 Eixida i entrada estàndard", link: '/ca/9-7-ioestandard' },
                { text: "9.8 Les classes Math, String i Scanner", link: '/ca/9-8-classes_java' },
                { text: "9.9 Exemple senzill", link: '/ca/9-9-exemple' }
          ]
        }
      ]
    },
    footer: {
      message: '<img src="/img/logo-autor.png" alt="Autor Principal" style="height:60px; margin: 0 auto; display:block;" />',
      copyright: 'Copyright © 2025'
    }
  }
})
