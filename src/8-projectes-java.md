# 8. Gestión de un proyecto

## Concepto de Proyecto

Un **proyecto** es un conjunto organizado de archivos fuente, recursos, configuraciones y metadatos que definen una aplicación o biblioteca. Los proyectos proporcionan:

- **Organización estructurada** de los archivos y recursos
- **Configuración de compilación** y construcción
- **Gestión de dependencias** externas
- **Configuración de depuración** y ejecución
- **Metadatos del proyecto** como versión, autor, descripción

## Tipos de Proyectos

Los IDE suelen ofrecer diferentes tipos de plantillas de proyecto:

- **Aplicaciones de escritorio**: Programas con interfaz gráfica
- **Aplicaciones de consola**: Programas que se ejecutan en terminal
- **Aplicaciones web**: Proyectos para desarrollo web
- **Bibliotecas**: Componentes reutilizables para otros proyectos
- **Aplicaciones móviles**: Proyectos específicos para plataformas móviles

## Creación de un Nuevo Proyecto

El proceso típico para crear un proyecto incluye:

1. **Seleccionar el tipo** de proyecto adecuado
2. **Configurar el nombre** y ubicación del proyecto
3. **Especificar parámetros** específicos (versión del lenguaje, framework, etc.)
4. **Generar la estructura** inicial de archivos y carpetas
5. **Configurar las propiedades** del proyecto

::: tabs
== Java
```java
// Ejemplo de estructura típica de un proyecto:
MiProyecto/
├── src/
│   └── main/
│       └── java/
│           └── com/
│               └── ejemplo/
│                   └── App.java
├── lib/
├── resources/
├── build/
└── README.md
```
:::

## Configuración de Compilación

La configuración típica incluye:

- **Directorios de código fuente** y recursos
- **Rutas de bibliotecas** externas y dependencias
- **Opciones del compilador** (optimización, avisos, etc.)
- **Directorios de salida** para los archivos compilados
- **Scripts de construcción** personalizados

## Proceso de Compilación

Los IDE ofrecen diferentes opciones de compilación:

- **Compilación automática**: El código se compila automáticamente cuando se guardan los cambios.
- **Compilación manual**: El usuario inicia explícitamente el proceso de compilación.
- **Compilación selectiva**: Solo se recompilan los archivos modificados.
- **Construcción completa**: Se limpia y recompila todo el proyecto desde cero.

::: tabs
== Java

Ejemplo de comandos típicos de compilación:
- Compilar el proyecto: `javac -d build src/*.java`
- Ejecutar la aplicación: `java -cp build NombreDeLaClase`
- Crear un archivo JAR: `jar cf aplicacion.jar -C build .`

:::

## Ejecución de Programas

Las opciones de ejecución típicas incluyen:

- **Ejecución normal**: Lanza la aplicación de manera estándar.
- **Ejecución con argumentos**: Permite especificar parámetros específicos para esa ejecución.
- **Ejecución en modo de depuración**: Inicia la aplicación preparada para la depuración.
- **Ejecución de pruebas**: Lanza suites de pruebas automatizadas.

## Gestión de la Consola de Salida

Los IDE proporcionan una consola integrada que muestra:

- **Salida estándar** del programa
- **Mensajes de error** y excepciones
- **Registros de compilación** y construcción
- **Entrada de usuario** cuando la aplicación la requiere
- **Enlaces clicables** a los errores para una navegación rápida


## Gestión de proyectos: Organización en Paquetes

### Concepto de Paquete

En la programación moderna, las clases y funcionalidades no se encuentran todas juntas de manera desordenada, sino que están organizadas en **paquetes** (también llamados **espacios de nombres** o **módulos** según el lenguaje). Los paquetes son una manera de agrupar y organizar las clases relacionadas entre sí.

Los paquetes ofrecen varias ventajas:

- **Organización**: Facilitan la localización de clases específicas
- **Evitar conflictos**: Permiten tener clases con el mismo nombre en paquetes diferentes
- **Control de acceso**: Pueden definir qué clases son accesibles desde el exterior
- **Modularidad**: Facilitan la reutilización de código en diferentes proyectos

### Jerarquía de Paquetes

Los paquetes siguen una estructura jerárquica similar a las carpetas de un sistema de archivos. Unos paquetes pueden contener otros paquetes, creando una organización en árbol que facilita la navegación y comprensión del código.

Por ejemplo, en una jerarquía típica podríamos encontrar:

- Un paquete principal para operaciones matemáticas
- Subpaquetes específicos para geometría, estadística, cálculo, etc.
- Dentro de cada subpaquete, las clases correspondientes

### Paquetes por Defecto

La mayoría de lenguajes tienen un **paquete por defecto** que contiene las funcionalidades más básicas y utilizadas. Este paquete especial está siempre disponible sin necesidad de realizar ninguna importación explícita, ya que sus clases se cargan automáticamente cuando se inicia el programa.

### Importación de Paquetes

Para utilizar clases que no pertenecen al paquete por defecto, es necesario **importar** explícitamente el paquete correspondiente al comienzo del programa. Esta importación indica al compilador o intérprete dónde encontrar las clases que necesitamos utilizar.

Sin la importación adecuada, el programa no podrá localizar las clases necesarias y se producirá un error de compilación o ejecución.

::: tabs

== Java

En Java, las clases siempre están contenidas en un paquete. Cada paquete contiene un conjunto de clases relacionadas entre sí, proporcionando una forma de organización y estructura al código.

Los paquetes tienen una jerarquía similar a las carpetas de un ordenador. Un ejemplo de jerarquía sería:

- **java.lang** (paquete principal)
- **java.lang.annotation** (subpaquete)
- **java.lang.instrument** (subpaquete)
- **java.lang.invoke** (subpaquete)
- **java.lang.management** (subpaquete)

El paquete **java.lang** es el paquete por defecto de Java. Todas las clases de este paquete (como String, Math, System, etc.) se pueden utilizar directamente sin necesidad de importación explícita.

Para utilizar clases de otros paquetes, es necesario importarlas al comienzo del programa:

```java
import java.util.Scanner;  // Importa una clase específica

import java.util.*;        // Importa todas las clases del paquete
```

Si no se importa el paquete necesario, aparecerá un error de compilación indicando que no se puede encontrar la clase.

:::

### Documentación de Paquetes

La documentación oficial de los lenguajes suele organizar la información por paquetes, mostrando:

- La jerarquía completa de paquetes
- Las clases disponibles en cada paquete
- Los métodos y funcionalidades de cada clase
- Ejemplos de uso y parámetros necesarios

Esta documentación es fundamental para conocer las funcionalidades disponibles y aprender a utilizarlas correctamente.