# 7. Java por dentro. ¿Cómo funciona Java?

Una de las características principales de Java es que un programa no se ejecuta directamente sobre el sistema operativo, sino que utiliza una capa intermedia llamada **Java Virtual Machine (JVM)**.

De manera simplificada, el proceso es el siguiente:

```text
Código Java (.java)
        │
        │ Compilador javac
        ▼
Bytecode (.class)
        │
        │ JVM
        ▼
Ejecución del programa
```

## 7.1. El código fuente

El programador escribe el programa en archivos con la extensión `.java`.

Por ejemplo:
::: tabs
== Java
```java
public class Hola {

    public static void main(String[] args) {
        System.out.println("¡Hola, mundo!");
    }

}
```
:::

Este archivo contiene el **código fuente**, es decir, las instrucciones escritas por el programador utilizando el lenguaje Java.

Sin embargo, el ordenador no puede ejecutar directamente este código.

---

## 7.2. El compilador: `javac`

El código fuente se transforma utilizando el compilador de Java, llamado `javac`.

```text
Hola.java
    │
    │ javac
    ▼
Hola.class
```

El resultado es un archivo `.class` que contiene **bytecode**.

El **bytecode** es un código intermedio que no depende directamente de un sistema operativo concreto.

---

## 7.3. La JVM

El bytecode es ejecutado por la **Java Virtual Machine o JVM**.

```text
Hola.class
     │
     ▼
    JVM
     │
     ▼
Sistema operativo
     │
     ▼
Hardware
```

La JVM es la responsable de ejecutar el programa Java en cada sistema.

Por ejemplo:

```text
               Programa Java
                   │
                   ▼
                 Bytecode
                   │
         ┌──────────┼──────────┐
         ▼          ▼          ▼
       JVM        JVM        JVM
         │          │          │
      Windows     Linux      macOS
```

Esto permite que el mismo programa Java pueda ejecutarse en diferentes sistemas operativos siempre que haya una **JVM compatible**.

Esta es la idea relacionada con la conocida expresión:

> **Write once, run anywhere**

Es decir, en términos generales, escribimos y compilamos el programa una vez y podemos ejecutarlo en diferentes sistemas que dispongan de una JVM compatible.

---

## 7.4 JDK, JRE y JVM

Para entender el entorno de Java es importante diferenciar estos tres conceptos.

### JVM: Java Virtual Machine

La **JVM** es la máquina virtual encargada de ejecutar el **bytecode** de los programas Java.

Su función principal es actuar como intermediaria entre el programa Java y el sistema donde se está ejecutando.

```text
Programa Java
      │
      ▼
   Bytecode
      │
      ▼
     JVM
      │
      ▼
Sistema operativo y hardware
```

---

### JRE: Java Runtime Environment

El **JRE** es el entorno necesario para ejecutar aplicaciones Java.

Incluye principalmente:

- La **JVM**.
- Las bibliotecas y componentes necesarios para ejecutar programas Java.

Podemos representarlo así:

```text
JRE
│
├── JVM
│
└── Bibliotecas necesarias para ejecutar Java
```

De manera simplificada:

> **El JRE sirve para ejecutar programas Java.**

---

### JDK: Java Development Kit

El **JDK** es el conjunto de herramientas necesarias para **desarrollar aplicaciones Java**.

Incluye las herramientas para:

- Escribir y compilar programas.
- Ejecutarlos.
- Depurarlos.
- Utilizar otras herramientas de desarrollo.

Entre estas herramientas encontramos:

```text
javac → Compilador de Java
java  → Ejecuta aplicaciones Java
javadoc → Genera documentación
jdb   → Depurador
```

Tradicionalmente, la relación entre estos conceptos se representa así:

```text
JDK
│
├── Herramientas de desarrollo
│   ├── javac
│   ├── javadoc
│   └── jdb
│
└── JRE
    │
    ├── Bibliotecas
    │
    └── JVM
```

Por tanto, de manera simplificada:

```text
JDK
 └── JRE
      └── JVM
```
