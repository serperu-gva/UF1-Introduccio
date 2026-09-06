# 9.1 Características de Java

El lenguaje de programación Java es una herramienta de propósito **general, concurrente y orientada a objetos** que ha sido diseñada específicamente para tener tan pocas dependencias de implementación como sea posible. Su objetivo es permitir que los desarrolladores de aplicaciones escriban el programa una vez y lo ejecuten en cualquier dispositivo, lo que significa que **el código puede escribirse una sola vez y ser ejecutado en cualquier tipo de dispositivo (PC, móvil, etc.)**.

Algunas de las características más importantes de los lenguajes de programación orientados a objetos como Java son:

- **Sencillez**: Son lenguajes sencillos de aprender.

- **Orientación a Objetos**: En estos lenguajes, a excepción de los tipos fundamentales de variables, todo es un objeto.

- **Capacidad Distribuida**: Están muy orientados al trabajo en red, soportando protocolos como TCP/IP, UDP, HTTP y FTP.

- **Robustez**: Los compiladores detectan muchos errores que otros compiladores solo detectarían en tiempo de ejecución o incluso nunca.

- **Seguridad**: Especialmente importante en el desarrollo de aplicaciones web y applets.

- **Portabilidad**: No hay aspectos dependientes de la implementación, todas las implementaciones siguen los mismos estándares.

- **Neutralidad de Arquitectura**: El código generado por el compilador es independiente de la arquitectura y puede ejecutarse en diferentes entornos.

- **Rendimiento**: Actualmente la velocidad de procesamiento es comparable a la de otros lenguajes orientados a objetos.

- **Multihilo**: Soportan de manera nativa los hilos de ejecución (threads), sin necesidad del uso de bibliotecas específicas.

## Mi primer programa (y el de todo el mundo)

La aplicación más pequeña posible es la que simplemente imprime un mensaje en la pantalla. Tradicionalmente, el mensaje suele ser "Hola Mundo!". Esto es justamente lo que hace el siguiente fragmento de código:

::: tabs

== Java

```java
public class HolaMundo{

    public static void main(String[] args){

        System.out.println("¡Hola, mundo!");

    }

}
```

:::

Hay que observar detalladamente la aplicación anterior, línea a línea. Esas líneas de código contienen los componentes mínimos para imprimir *¡Hola Mundo!* en la pantalla. Es un ejemplo muy simple, que no instancia objetos de ninguna otra clase.

::: tabs

== Java

```java
public class HolaMundo
```

:::

Esta línea declara la clase principal. El nombre de la clase especificado en el archivo fuente se utiliza para crear un archivo compilado en el directorio en el que se compila la aplicación.

::: tabs

== Java

```java
public static void main(String[] args)
```

:::

Esta línea especifica el método principal que el intérprete busca para ejecutar en primer lugar. Los lenguajes de programación utilizan una palabra clave para especificar la primera función que se ejecutará. En este ejemplo tan simple no se pasan argumentos.

- **public** significa que el método principal puede ser llamado por cualquiera, incluido el intérprete.

- **static** es una palabra clave que le dice al compilador que el método se refiere a la propia clase y no a ninguna instancia de la clase.

- **void** indica que el método principal no devuelve nada.

- **args[]** es la declaración de un array de cadenas de texto. Estos son los argumentos que se pueden pasar desde la línea de comandos.

::: tabs

== Java

```java
System.out.println("¡Hola, mundo!");
```

:::

Esta es la funcionalidad de la aplicación. Esta línea muestra el uso de un nombre de clase y método para mostrar información en la pantalla. Se utiliza un método que toma una cadena como argumento y la escribe en el flujo de salida estándar; en este caso, la ventana donde se ejecuta la aplicación.

::: tip **¡IMPORTANTE!**

Todas las instrucciones (creación de variables, llamadas a métodos, asignaciones) deben finalizar con un **punto y coma**.

:::