# 3 Lenguajes de programación e IDEs

## 3.1 Lenguajes de programación

### ¿Qué es un lenguaje de programación?

Un **lenguaje de programación** es un lenguaje formal que permite a las personas **escribir instrucciones que un ordenador puede interpretar y ejecutar**.

Los ordenadores solo pueden ejecutar directamente instrucciones expresadas en un lenguaje que su procesador pueda entender. Por eso, los lenguajes de programación proporcionan una forma más próxima al lenguaje humano para describir las operaciones que debe realizar un ordenador.

Mediante un lenguaje de programación podemos indicar, entre otras cosas:

- Qué datos debe utilizar un programa.
- Cómo se deben almacenar estos datos.
- Qué operaciones se deben realizar.
- Qué decisiones debe tomar el programa.
- Qué instrucciones se deben repetir.
- Cómo se deben organizar las diferentes partes del programa.
- Cómo se deben comunicar diferentes componentes o aplicaciones.

Por ejemplo, una instrucción muy sencilla en Java podría ser:

::: tabs
==Java
```java
System.out.println("¡Hola, mundo!");
```
:::

Hay diferentes tipos de lenguajes de programación y existen muchos criterios diferentes para clasificar los lenguajes de programación.

Por ejemplo, podemos hablar de:

- Lenguajes **compilados e interpretados**.
- Lenguajes **de bajo nivel y de alto nivel**.
- Lenguajes **imperativos, funcionales, declarativos, etc.**
- Lenguajes **orientados a objetos**.

Estas clasificaciones no son excluyentes. Un mismo lenguaje puede pertenecer a varias categorías.

Por ejemplo, **Java es un lenguaje de alto nivel**, **compilado** a bytecode, multiplataforma, **orientado a objetos** y también permite utilizar otros paradigmas de programación.

### Los 10 lenguajes de programación más utilizados

La popularidad de los lenguajes de programación varía según la fuente y el criterio utilizado: número de proyectos, uso profesional, preguntas de los desarrolladores, ofertas de trabajo, repositorios, etc.

La siguiente tabla muestra diez lenguajes que se encuentran habitualmente entre los más utilizados en la actualidad.

| # | Lenguaje | Paradigmas principales | Usos habituales |
|---:|---|---|---|
| 1 | **Python** | Imperativo, orientado a objetos, funcional | IA, ciencia de datos, automatización, web |
| 2 | **JavaScript** | Imperativo, funcional, orientado a objetos | Web, frontend, backend |
| 3 | **Java** | Orientado a objetos, imperativo, funcional | Aplicaciones empresariales, backend, Android |
| 4 | **C#** | Orientado a objetos, imperativo, funcional | .NET, aplicaciones empresariales, videojuegos |
| 5 | **C++** | Imperativo, orientado a objetos, genérico | Sistemas, videojuegos, aplicaciones de alto rendimiento |
| 6 | **C** | Imperativo, procedimental | Sistemas operativos, sistemas empotrados |
| 7 | **TypeScript** | Imperativo, funcional, orientado a objetos | Aplicaciones web y backend |
| 8 | **PHP** | Imperativo, orientado a objetos | Desarrollo web |
| 9 | **Go** | Imperativo, concurrente, estructurado | Backend, redes, cloud y microservicios |
| 10 | **Kotlin** | Orientado a objetos, funcional | Android, backend y aplicaciones JVM |

### Importancia de Java

Dentro de esta clasificación, **Java** tiene una especial importancia en el aprendizaje de la programación orientada a objetos.

Java permite trabajar de manera clara con los principales conceptos de la orientación a objetos como veremos a lo largo del curso.


## 3.2 Entornos de Desarrollo Integrado (IDEs)

Un **entorno de desarrollo integrado (IDE - "Integrated Development Environment")** es una aplicación informática que proporciona servicios integrales para el desarrollo de software. Los IDE combinan un editor de código fuente, herramientas de compilación, depuradores y otras utilidades en una sola interfaz gráfica de usuario.

Las **principales ventajas** de utilizar un IDE incluyen:

- **Productividad mejorada** gracias al autocompletado de código y la detección de errores en tiempo real
- **Depuración integrada** con puntos de ruptura, inspección de variables y ejecución paso a paso
- **Gestión de proyectos** simplificada con organización automática de archivos y recursos
- **Integración con sistemas de control de versiones** como Git
- **Refactorización automatizada** para mejorar la estructura del código sin cambiar la funcionalidad
- **Soporte para múltiples lenguajes** de programación
- **Extensiones y plugins** para funcionalidades específicas

### Tipos de IDE

Los IDE se pueden clasificar según diferentes criterios:

**Por especialización:**
- **IDE específicos**: Diseñados para un lenguaje o plataforma concreta
- **IDE generales**: Admiten múltiples lenguajes de programación mediante extensiones

**Por modelo de licencia:**
- **IDE libres y de código abierto**: Gratuitos y con código fuente disponible
- **IDE comerciales**: De pago con soporte profesional
- **IDE freemium**: Versión gratuita con funcionalidades limitadas y versión de pago completa

**Por plataforma:**
- **IDE multiplataforma**: Funcionan en Windows, macOS y Linux
- **IDE específicos de plataforma**: Diseñados para un sistema operativo concreto

### Funcionalidades básicas de los IDE

#### Editor de código

El editor de código es el componente central de cualquier IDE y ofrece:

- **Sintaxis destacada**: Coloreado automático del código según el lenguaje de programación para mejorar la legibilidad.
- **Autocompletado inteligente**: Sugerencias automáticas de métodos, variables y palabras clave mientras se escribe el código.
- **Detección de errores**: Identificación de errores sintácticos y semánticos en tiempo real con indicadores visuales.
- **Plegado de código**: Capacidad de colapsar bloques de código para mejorar la navegación en archivos grandes.
- **Navegación rápida**: Saltos directos a definiciones de funciones, clases o variables.

#### Gestión de archivos y navegación

Los IDE proporcionan diferentes vistas para organizar y navegar por el código:

- **Vista de proyectos**: Muestra la estructura lógica del proyecto organizada por paquetes o módulos.
- **Vista de archivos**: Presenta la estructura física de directorios y archivos del sistema de archivos.
- **Vista de esquema**: Muestra la jerarquía de clases, métodos y variables dentro de un archivo.
- **Navegación por pestañas**: Permite mantener múltiples archivos abiertos simultáneamente.

#### Búsqueda y sustitución

Los IDE ofrecen potentes herramientas de búsqueda:

- **Búsqueda simple** en el archivo actual
- **Búsqueda global** en todo el proyecto
- **Búsqueda con expresiones regulares** para patrones complejos
- **Búsqueda y sustitución masiva** con vista previa de los cambios
- **Búsqueda de referencias** para encontrar todos los usos de una variable o función
