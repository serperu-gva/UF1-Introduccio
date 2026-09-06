# 9.5. Operadores

Los **operadores** son una parte indispensable de la programación, ya que nos permiten realizar cálculos matemáticos y lógicos, entre otras cosas. Los operadores pueden ser:

- **<u>Aritméticos</u>**: sumas, restas, etc.

- **<u>Relacionales</u>**: menor, menor o igual, mayor, mayor o igual, etc.

- **<u>Lógicos</u>**: and, or, not, etc.

- **<u>Bits</u>**: prácticamente no los utilizaremos en este curso.

- **<u>Asignación</u>**: =

## 9.5.1. Aritméticos

| Operador | Formato | Descripción |
|----------|---------|-------------|
| + | op1 + op2 | Suma aritmética de dos operandos. |
| - | op1 - op2 <br> -op1 | Resta aritmética de dos operandos. <br> Cambio de signo |
| * | op1 * op2 | Multiplicación de dos operandos. |
| / | op1 / op2 | División de dos operandos. |
| % | op1 % op2 | Resto de la división (o módulo). |
| ++ | ++op1 <br> op1++ | Incremento unitario. |
| -- | --op1 <br> op1-- | Decremento unitario. |

El operador - puede utilizarse en su versión unaria ( - op1 ) y la operación que realiza es la de invertir el signo del operando.

Los operadores **++** y **--** realizan un incremento y un decremento unitario respectivamente. Es decir:

- **x++** equivale a **x = x + 1**

- **x--** equivale a **x = x - 1**

Los operadores ++ y -- admiten notación postfija y prefija:

- **op1++**: Primero se ejecuta la instrucción en la que está incluido y después se incrementa op1.

- **op1--**: Primero se ejecuta la instrucción en la que está incluido y después se decrementa op1.

- **++op1**: Primero se incrementa op1 y después se ejecuta la instrucción en la que está incluido.

- **--op1**: Primero se decrementa op1 y después se ejecuta la instrucción en la que está incluido.

Los operadores incrementales suelen utilizarse a menudo en los bucles (estructuras repetitivas). Lo veremos más adelante.

## 9.5.2. Relacionales

| Operador | Formato | Descripción |
|----------|---------|-------------|
| > | op1 > op2 | Devuelve true (cierto) si op1 es mayor que op2 |
| < | op1 < op2 | Devuelve true (cierto) si op1 es menor que op2 |
| >= | op1 >= op2 | Devuelve true (cierto) si op1 es mayor o igual que op2 |
| <= | op1 <= op2 | Devuelve true (cierto) si op1 es menor o igual que op2 |
| == | op1 == op2 | Devuelve true (cierto) si op1 es igual a op2 |
| != | op1 != op2 | Devuelve true (cierto) si op1 es diferente de op2 |

Los operadores relacionales actúan sobre valores numéricos y caracteres, y devuelven un valor del tipo booleano (true o false).

Por ejemplo:

::: tabs

== Java

```java
public static void main(String[] args){

   double op1, op2;

   char op3, op4;

   op1 = 1.34;

   op2 = 1.35;

   op3 = 'a';

   op4 = 'b';

   System.out.println("op1=" + op1 + "op2=" + op2);

   System.out.println("op1>op2 = " + (op1 > op2));

   System.out.println("op1<op2 = " + (op1 < op2));

   System.out.println("op1==op2 = " + (op1 == op2));

   System.out.println("op1!=op2 = " + (op1 != op2));

   System.out.println("'a' > 'b' = " + (op3 > op4));

}
```

Salida:

```
op1=1.34 op2=1.35

op1>op2 = false

op1<op2 = true

op1==op2 = false

op1!=op2 = true

'a' > 'b' = false
```

:::

## 9.5.3. Lógicos

| Operador | Formato | Descripción |
|----------|---------|-------------|
| && | op1 && op2 | Y lógico (and). Devuelve true (cierto) si son ciertos op1 y op2 |
| \|\| | op1 \|\| op2 | O lógico (or). Devuelve true (cierto) si son ciertos op1 o op2 |
| ! | !op1 | Negación lógica (not). Devuelve true (cierto) si op1 es falso |

Estos operadores actúan sobre operadores o expresiones lógicas, es decir, aquellos que se evalúan a cierto o falso (true / false).

Por ejemplo:

::: tabs

== Java

```java
public static void main(String[] args){

   boolean a, b, c, d;

   a=true;

   b=true;

   c=false;

   d=false;

   System.out.println("true Y true = " + (a && b));

   System.out.println("true Y false = " + (a && c));

   System.out.println("false Y false = " + (c && d));

   System.out.println("true O true = " + (a || b));

   System.out.println("true O false = " + (a || c));

   System.out.println("false O false = " + (c || d));

   System.out.println("NO true = " + !a);

   System.out.println("NO false = " + !c);

   System.out.println("(3 > 4) Y true = " + (3 > 4) && a);

}
```

Salida:

```
true Y true = true

true Y false = false

false Y false = false

true O true = true

true O false = true

false O false = false

NO true = false

NO false = true

(3 > 4) Y true = false
```

:::

## 9.5.4. De asignación

El operador de asignación es el símbolo igual: =

Sigue el esquema **variable = expresión**

Asigna a la variable el resultado de evaluar la expresión de la derecha. Es posible combinar el operador de asignación con otros operadores para, de forma abreviada, realizar un cálculo y asignarlo a una variable:

| Operador | Formato | Equivalencia |
|----------|---------|--------------|
| += | op1 += op2 | op1 = op1 + op2 |
| -= | op1 -= op2 | op1 = op1 - op2 |
| *= | op1 *= op2 | op1 = op1 * op2 |
| /= | op1 /= op2 | op1 = op1 / op2 |
| %= | op1 %= op2 | op1 = op1 % op2 |

## 9.5.5. Expresiones

Una expresión es la combinación de varios operadores y operandos. Por ejemplo, tenemos las siguientes expresiones:

7 + 5 * 4 - 2

10 + (1% 5) (7 * x) <= N

Los lenguajes de programación evalúan las expresiones aplicando los operadores uno a uno siguiendo un orden específico. Este orden se detalla en el siguiente punto.

## 9.5.6. Precedencia de operadores

Indica el orden **en el que se evalúan los operadores** en una expresión. No es necesario saberse toda la lista de memoria, pero **es importante conocer al menos los más utilizados**: matemáticos, relacionales, lógicos y de asignación.

El orden general de precedencia es:

1. Operadores postfijos y acceso: ++, --, (), [], .

2. Operadores unarios: ++, --, -, !, ~

3. Multiplicación y división: *, /, %

4. Suma y resta: +, -

5. Relacionales: <, >, <=, >=

6. Igualdad y desigualdad: ==, !=

7. AND lógico: &&

8. OR lógico: ||

9. Asignación: =, +=, -=, *=, /=, %=

## 9.5.7. Funciones matemáticas

La mayoría de los lenguajes de programación ofrecen una biblioteca con funciones matemáticas avanzadas para realizar cálculos complejos como potencias, raíces cuadradas, valores absolutos, funciones trigonométricas, etc.

::: tabs

== Java

```java
double x = Math.pow(3,3); // Potencia 3 ^ 3

double i = Math.sqrt(9); // Raíz cuadrada de 9
```

:::

También suelen incluir constantes matemáticas importantes:

::: tabs

== Java

```java
double PI = Math.PI; // El número Π (3,14159265…)

double E =  Math.E; // El número e (2,7182818245...)
```

:::