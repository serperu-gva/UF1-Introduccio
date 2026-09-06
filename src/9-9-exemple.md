# 9.9. Ejemplo de programa sencillo

Programa que lee dos números, calcula y muestra el valor de su suma, resta, producto y división.

:::: tabs

=== Java

::: tabs

== Código

```java
package ejemplo1;

import java.util.Scanner; // Importa la clase Scanner

public class Ejemplo1 {

    public static void main (String[] args){

        //Declaramos las variables que vamos a usar

        int x, y, suma, resta, mult, div;

        //Creamos el objeto Scanner para leer por teclado

        Scanner reader = new Scanner(System.in);

        //Pedimos y leemos x

        System.out.print("Dame el valor de x: ");

        x = reader.nextInt();

        //Pedimos y leemos y

        System.out.print("Dame el valor de y: ");

        y = reader.nextInt();

        //Realizamos los cálculos necesarios

        suma  = x + y;

        resta = x - y;

        mult  = x * y;

        div   = x / y;

        //Mostramos los resultados por pantalla

        System.out.println("Suma: " + suma);

        System.out.println("Resta: " + resta);

        System.out.println("Multiplicación: " + mult);

        System.out.println("División: " + div);

    }    

}
```

== Salida

```
Dame el valor de x: 4

Dame el valor de y: 2

Suma: 6

Resta: 2

Multiplicación: 8

División: 2
```

:::

::::