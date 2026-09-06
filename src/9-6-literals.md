# 9.6. Literales

A la hora de trabajar con valores de los tipos de datos simples (y de tipo cadenas de caracteres) se utiliza lo que se denomina "literales". Los literales son elementos que sirven para representar un valor en el código fuente del programa. En la mayoría de lenguajes de programación existen literales para los siguientes tipos de datos:

- Lógicos (boolean)

- Carácter (char)

- Enteros (enteros de diferentes tamaños)

- Reales (decimales de precisión simple y doble)

- Cadenas de caracteres (strings)

## 9.6.1. Literales lógicos

Son únicamente dos, las palabras reservadas true y false.

::: tabs

== Java

```java
boolean activado = false;
```

:::

## 9.6.2. Literales enteros

Los literales de tipo entero (números enteros) pueden expresarse en decimal (base 10), octal (base 8) o hexadecimal (base 16). Además, en muchos lenguajes puede añadirse al final del mismo una letra para indicar que el entero es considerado como entero largo (de mayor tamaño).

Los compiladores identifican un entero decimal (base 10) al encontrar un número cuyo primer dígito es cualquier símbolo decimal excepto el cero (del 1 al 9). A continuación pueden aparecer dígitos del 0 al 9.

La letra para indicar enteros largos puede aplicarse a cualquier sistema de numeración e indica que el número decimal sea tratado como un entero largo (de mayor tamaño). Esta letra puede ser mayúscula o minúscula, aunque es aconsejable utilizar la mayúscula, ya que en caso contrario puede confundirse con el dígito uno (1) en los listados.

::: tabs

== Java

```java
long max1 = 9223372036854775807L; //este es el valor máximo para un entero largo
```

:::

## 9.6.3. Literales reales

Los literales de tipo real sirven para indicar valores decimales de precisión simple o doble. A diferencia de los literales de tipo entero, **no pueden expresarse en octal o hexadecimal**.

Existen dos formatos de representación: mediante su parte entera, el punto decimal ( . ) y la parte fraccionaria; o mediante notación exponencial o científica:

```
3.1415

0.31415e1

.31415e1 0.031415E+2

.031415e2 314.15e-2

31415E-4
```

Igual que los literales que representan enteros, se puede poner una letra como sufijo para indicar el tipo específico de decimal:

::: tabs

== Java

```java
3.1415F  // float

.031415d // double
```

:::

## 9.6.4. Literales carácter

Los literales de tipo carácter se representan siempre entre comillas simples. Entre las comillas simples puede aparecer:

- Un **símbolo** (letra) siempre que el carácter esté asociado a un código de carácter válido. Ejemplos: 'a' , 'B' , '{' , 'ñ' , 'á' .

- Una **"secuencia de escape"**. Las secuencias de escape son combinaciones del símbolo contrabarra \ seguido de una letra, y sirven para representar caracteres que no tienen una equivalencia en forma de símbolo. Las posibles secuencias de escape más comunes son:

```
\n // Nueva Línea

\t // Tabulador

\r // Retorno de Carro

\f // Comienzo de Página

\b // Borrado a la Izquierda

\\ // El carácter barra inversa ( \ )

\' // El carácter comilla simple ( ' )

\" // El carácter comilla doble o bi-prima ( " )
```

Por ejemplo:

- Para imprimir una diagonal inversa se utiliza: `\\`

- Para imprimir comillas dobles en una cadena se utiliza: `\"`

## 9.6.5. Literales cadenas de caracteres

Las cadenas de caracteres son secuencias de caracteres que se representan mediante literales específicos para este propósito.

Un literal de tipo cadena va encerrado entre comillas dobles ( " ) y debe estar incluido completamente en una sola línea del programa fuente (no puede dividirse en varias líneas).

Entre las comillas dobles puede incluirse cualquier carácter válido del sistema de codificación utilizado, además de las secuencias de escape vistas anteriormente en los literales de tipo carácter.

Así, por ejemplo, para incluir un cambio de línea dentro de un literal de tipo cadena deberá hacerse mediante la secuencia de escape \n:

::: tabs

== Java

```java
System.out.println("Primera línea\nSegunda línea del string\n"); 

System.out.println("Hola");
```

:::

La visualización de la cadena anterior produciría la siguiente salida por pantalla:

::: tabs

== Java

```text
Primera línea

Segunda línea del string

Hola
```

:::

La manera de incluir los caracteres 'comillas dobles' `"` y 'contrabarra' `\` es mediante su código precedido de `\`.

Si la cadena es demasiado larga y debe dividirse en varias líneas en el archivo fuente, puede utilizarse el operador de concatenación de cadenas `+` de la siguiente forma:

```text
"Esta cadena es demasiado larga para estar en una línea del"
+ "archivo fuente y se ha dividido en dos."
```