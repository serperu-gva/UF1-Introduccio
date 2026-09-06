# 9.7. Entrada y salida estándar

## 9.7.1. Salida estándar

La mayoría de lenguajes de programación proporcionan mecanismos para mostrar información por pantalla. Los conceptos básicos son:

- Imprimir texto por pantalla

- Imprimir texto por pantalla e introducir un salto de línea

- Mostrar mensajes de error

Los lenguajes suelen distinguir entre la salida estándar (para información normal) y la salida de error (para mensajes de error o avisos).

Por ejemplo:

::: tabs

== Java

```java
public static void main(String[] args){

   System.out.print("HOLA "); 

   System.out.println("mundo");

   System.err.println("Mensaje de error");

}
```

Salida:

```
HOLA mundo  

Mensaje de error
```

:::

También pueden imprimirse variables de cualquier tipo, así como combinaciones de texto y variables concatenadas con el operador +:

::: tabs

== Java

```java
public static void main(String[] args){

   String nombre = "Pepito";

   int edad = 25;

   System.out.println(nombre);

   System.out.println(edad);

   System.out.println(nombre + " tiene " + edad + " años");

}
```

Salida:

```
Pepito

25

Pepito tiene 25 años
```

:::

## 9.7.2. Entrada estándar

La entrada estándar (leer información del teclado, escrita por el usuario) es una funcionalidad presente en todos los lenguajes de programación, aunque la implementación puede variar según el lenguaje.

Los conceptos generales para la lectura de datos son:

- Leer cadenas de texto

- Leer números enteros

- Leer números decimales

- Leer caracteres individuales

Normalmente es necesario inicializar un objeto o estructura que permita leer de la entrada estándar:

::: tabs

== Java

```java
Scanner reader = new Scanner(System.in);
```

:::

Una vez inicializado, podemos utilizarlo para leer diferentes tipos de datos:

::: tabs

== Java

```java
String texto = reader.nextLine();
```

:::

Los métodos disponibles para leer diferentes tipos de datos suelen incluir:

- Leer cadenas de texto completas

- Leer números enteros de diferentes tamaños

- Leer números decimales de diferente precisión

- Leer palabras individuales (hasta un espacio)

::: tabs

== Java

Para poder utilizar la clase Scanner es necesario importarla:

```java
import java.util.Scanner;
```

:::

**Ejemplo:** leemos una cadena de texto y la mostramos por pantalla:

::: tabs

== Java

```java
import java.util.Scanner;

public class EjemploScanner{

   public static void main(String[] args){

     String nombre;

     Scanner entrada = new Scanner (System.in);

     System.out.println ("Introduce tu nombre: ");

     nombre = entrada.nextLine();

     System.out.println ("Hola " + nombre);

   }

}
```

Salida:

```
Introduce tu nombre: Pepito

Hola Pepito
```

:::

**Ejemplo:** leemos un valor decimal:

El programa pide al usuario que introduzca el radio de un círculo, después calcula su área y circunferencia y, finalmente, lo muestra por pantalla.

::: tabs

== Java

```java
import java.util.Scanner;

public class EjemploScanner{

   public static void main(String[] args){

     double radio, area, circunferencia;

     Scanner entrada = new Scanner (System.in);

     System.out.println ("Introduce el radio: ");

     radio = entrada.nextDouble();

     area = Math.PI * Math.pow(radio, 2);

     circunferencia = 2 * Math.PI * radio;

     System.out.println ("El área es " + area);

     System.out.println ("La circunferencia es " + circunferencia);

   }

}
```

Salida:

```
Introduce el radio: 2,9

El área es 26.42079421669016

La circunferencia es: 18.2212373908208
```

:::

::: info Importante

Para comprender mejor cómo funcionan las entradas y salidas en los diferentes lenguajes, es recomendable consultar las funcionalidades específicas de cada lenguaje. Cada lenguaje tiene sus propias bibliotecas y métodos para gestionar la entrada y salida de datos.

:::