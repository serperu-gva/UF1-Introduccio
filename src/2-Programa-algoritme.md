# 2. Programas y algoritmos

Cuando desarrollamos un programa informático, el objetivo es conseguir que un ordenador sea capaz de resolver un problema o realizar una determinada tarea. Para hacerlo, necesitamos definir **qué queremos conseguir**, **qué datos necesitamos** y **qué pasos debe seguir el ordenador**.

En este proceso aparecen dos conceptos fundamentales: **el algoritmo** y **el programa**.

## ¿Qué es un algoritmo?

Un **algoritmo** es un conjunto ordenado y finito de pasos que permite resolver un problema o realizar una tarea.

Un algoritmo indica **qué se debe hacer y en qué orden**, pero no está ligado necesariamente a un lenguaje de programación concreto.

Por ejemplo, si queremos calcular la media de tres números, podríamos definir el algoritmo de la siguiente manera:

1. Leer el primer número.
2. Leer el segundo número.
3. Leer el tercer número.
4. Sumar los tres números.
5. Dividir el resultado entre 3.
6. Mostrar la media.

Este algoritmo describe la **lógica necesaria para resolver el problema**.

## Del algoritmo al programa

Un ordenador no puede ejecutar directamente un algoritmo escrito en lenguaje natural. Necesitamos **expresar el algoritmo mediante un lenguaje de programación**.

Por ejemplo, el algoritmo anterior se podría implementar en Java:

```java
double num1 = 5;
double num2 = 7;
double num3 = 9;

double suma = num1 + num2 + num3;
double media = suma / 3;

System.out.println("La media es: " + media);
```