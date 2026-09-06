# 9.4. Declaración de variables

A continuación, se muestran diversas formas de declarar e inicializar variables:

::: tabs

== Java

La forma básica de declarar (crear) una variable es la siguiente:

```java
tipo identificador;
```

Por ejemplo, creamos una variable de tipo `int` llamada `edad`:

```java
int edad;
```

:::

Las variables pueden ser inicializadas en el momento de su declaración, es decir, se les puede dar un valor inicial al crearlas. Por ejemplo, creamos una variable de tipo entero llamada `edad` y le asignamos 25 como valor inicial:

::: tabs

== Java

```java
int edad = 25;
```

Esto es equivalente a primero declararla y después asignarle el valor:

```java
int edad; 

edad = 25;
```

:::

También es posible declarar varias variables en una sola línea. Por ejemplo, creamos tres variables de tipo real llamadas `precio1`, `precio2` y `precio3`:

::: tabs

== Java

```java
float precio1, precio2, precio3;
```

Esto es equivalente a:

```java
float precio1; 

float precio2; 

float precio3;
```

:::

A su vez, también pueden inicializarse. Por ejemplo:

::: tabs

== Java

```java
float precio1 = 7.0, precio2 = 7.25, precio3 = 0.5;
```

Esto es equivalente a:

```java
float precio1 = 7.0; 

float precio2 = 7.25; 

float precio3 = 0.5;
```

:::

En resumen, la declaración de variables sigue el siguiente patrón:

::: tabs

== Java

| **tipo identificador** [ = valor][,identificador [= valor] ...]; |
|-------------------------------------------------------------------|

:::

Es decir, es **obligatorio indicar el tipo y el identificador** (además de terminar en punto y coma como todas las instrucciones). Opcionalmente se puede inicializar y/o se pueden declarar más variables.

::: tip **¡IMPORTANTE!**

Si una variable no ha sido inicializada, algunos lenguajes le asignan un valor por defecto automáticamente.

:::

Este valor suele ser:

- Para las variables de tipo numérico, el valor por defecto es cero (0).

- Para las variables de tipo carácter, un valor neutro.

- Para las variables de tipo booleano, el valor `false`.

- Para las variables de tipo referencial (objetos), un valor nulo.

Es una buena práctica inicializar siempre todas las variables.

## 9.4.1. Palabras clave y reservadas

Los lenguajes de programación tienen palabras clave que no se pueden utilizar como identificadores, ya que las utilizan para otras funciones del lenguaje. Estas palabras varían según el lenguaje específico.

::: tabs

== Java

![Palabras clave](/uf3/palabras_clave_java.jpg)

Además, el lenguaje reserva algunas palabras más, pero que hasta ahora no tienen una finalidad especificada:

![Palabras reservadas](/uf3/palabras_reserv_java.jpg)

:::

## 9.4.2. Ámbito de una variable

El ámbito de una variable es la porción del programa donde esta variable puede utilizarse, y puede pertenecer a diferentes categorías:

1. Variable local.

2. Atributo o variable de instancia.

3. Parámetro de una función o método.

4. Variable global (según el lenguaje).

**Por ahora utilizaremos solo variables locales**, las otras categorías las veremos en posteriores unidades.

### Variables locales

Una **variable local** se declara dentro del cuerpo de una función o método y es **visible únicamente dentro de esta función**.

Se puede declarar en cualquier lugar del cuerpo, incluso después de instrucciones ejecutables, aunque es una **buena costumbre declararlas justo al principio**.

También pueden declararse variables dentro de un bloque delimitado. En ese caso, solo serán "visibles" dentro de ese bloque.

**Por ejemplo** (no es necesario entender lo que hace el programa):

::: tabs

== Java

```java
public static void main(String[] args){

  int i;

  for (i=0;i<10;i++)

    System.out.println(i);

}
```

:::

En este ejemplo existe una variable local: `int i;` únicamente puede utilizarse dentro del bloque donde se creó.

## 9.4.3. Constantes

Al declarar una variable puede utilizarse una palabra reservada específica para indicar que el valor de la variable no podrá modificarse (es una constante).

::: tabs

== Java

Por ejemplo, creamos una variable constante de tipo `int` llamada `x` con valor 18:

```java
final int x = 18;
```

Por ejemplo, creamos una variable constante de tipo `float` llamada `pi` con valor 3.14:

```java
final float pi = 3.14;
```

Si posteriormente intentamos modificar sus valores se producirá un error:

```java
x = 20; // no permitido, produce error

pi = 7; // no permitido, produce error
```

:::

Por tanto, una variable precedida de esta palabra reservada se convierte en una **constante**.