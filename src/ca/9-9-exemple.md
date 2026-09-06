# 9.9. Exemple senzill

Programa que llig dos números, calcula i mostra el valor de les seues suma, resta, producte i divisió.


:::: tabs
=== Java

::: tabs
== Codi

```java
package exemple1;

import java.util.Scanner; // Importa la classe Scanner

public class Exemple1 {

    public static void main (String[] args){

        //Declarem les variables que anem a usar
        int x, y, suma, resta, mult, div;

        //Creem l'objecte Scanner per a llegir per teclat
        Scanner reader = new Scanner(System.in);

        //Demanem i llegim x
        System.out.print("Dona'm el valor de x: ");
        x = reader.nextInt();

        //Demanem i llegim y
        System.out.print("Dona'm el valor de y: ");
        y = reader.nextInt();

        //Relitzem els càlculs necessaris
        suma  = x + y;
        resta = x - y;
        mult  = x * y;
        div   = x / y;

        //Mostrem els resultats per pantalla
        System.out.println("Suma: " + suma);
        System.out.println("Resta: " + resta);
        System.out.println("Multiplicació: " + mult);
        System.out.println("Divisió: " + div);
    }    
}
```

== Eixida

```
Dona'm el valor de x: 4
Dona'm el valor de y: 2
Suma: 6
Resta: 2
Multiplicació: 8
Divisió: 2
```

:::
::::

