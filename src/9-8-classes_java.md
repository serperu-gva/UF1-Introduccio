# 9.8. Las clases Math, String y Scanner

Todo programa Java debe estar compuesto por al menos una clase.

Las clases en Java pueden ser de dos tipos: clases propias (son las que creamos nosotros) y clases definidas (String, Math, Array, Thread, etc.).

Hay cientos de clases y cada una con una gran diversidad de métodos. La cantidad es tan amplia que no se pueden conocer todas de memoria y mucho menos su sintaxis. Por eso, en Java existe lo que se denomina Biblioteca de Clases o API de Java, que no es más que una biblioteca donde aparecen relacionadas todas las clases de Java y sus métodos.

Con frecuencia accederemos a esta biblioteca para realizar consultas. Para ello realizaremos una búsqueda desde cualquier navegador con el texto "Java API", que nos llevará al siguiente enlace.

<[https://docs.oracle.com/javase/8/docs/api/](https://docs.oracle.com/javase/8/docs/api/)>

![Java API](/uf3/Java_api.jpg)

En el panel inferior izquierdo podremos ver todas las clases existentes en Java, cuyo funcionamiento y consulta analizaremos más adelante.

## La clase Math

Centrándonos en la clase Math veremos algunos métodos de gran utilidad.

- **Math.round**(decimal): redondeo de un número

- **Math.sqrt**(n): raíz cuadrada

- **Math.pow**(base, exponente): calcula la potencia de un número base elevado a un exponente

- **Math.sin**(ángulo): seno de un ángulo (igual que el resto de funciones trigonométricas)

También existen las constantes de clase.

**Math.PI**: número PI

En la parte superior izquierda de la imagen vemos que aparece el concepto de Paquetes.

Debemos tener en cuenta que las clases siempre están contenidas en un paquete, es decir, que cada paquete contiene un conjunto de clases. Esto no es más que una forma de ordenar las clases.

Además, los paquetes también tienen una cierta jerarquía (como ocurre con las carpetas de nuestro ordenador). Unos paquetes pueden contener otros. Así, por ejemplo, podemos ver esta jerarquía:

- **java.lang**

- **java.lang.annotation**

- **java.lang.instrument**

- **java.lang.invoke**

- **java.lang.management**

- **java.lang.ref**

- **java.lang.reflect**

donde el paquete **java.lang.annotation** y todos los siguientes están contenidos en el paquete principal **java.lang**.

Adicionalmente, debemos tener en cuenta que el paquete **java.lang** es el paquete que Java importa por defecto, de manera que todas las funciones que veremos a continuación se pueden utilizar sin tener que hacer ninguna mención explícita a este paquete.

Todo lo que veremos a continuación lo podemos hacer creando una clase **Prueba**.

Una vez en el cuerpo del método principal comenzaremos a escribir la siguiente instrucción:

`int raiz=Math.`

En el momento en que tecleamos el **punto** `.`, vemos que aparece una ventana de ayuda como la siguiente, que nos indica los métodos y constantes que podemos utilizar dentro de la clase **Math**.

![Math + punto](/uf3/Math_punt.jpg)

Si continuamos tecleando la palabra "sq", veremos que, a medida que escribimos cada letra, la ayuda se va concretando hasta llegar finalmente al método que nos interesa, que es "sqrt" o raíz cuadrada.

![Math + sq](/uf3/Math_sq.jpg)

Otro aspecto muy importante de esta ayuda es que ya nos indica tanto el tipo de dato en el que deben estar definidos los parámetros (en el ejemplo indica que un hipotético nombre de parámetro "a" debe estar definido como **double**), como el tipo de dato en el que debe estar definida la variable de destino (en nuestro caso, la variable "raiz" debería haberse definido como **double** y no como **int**, pero veamos qué ocurre si cometemos este error).

Volvemos al editor y continuamos completando nuestra instrucción. Veremos cómo el editor muestra que hemos cometido un error.

![Math error](/uf3/Math_error.jpg)

Primero nos marca al inicio de la línea un aviso. Si colocamos el puntero encima sin hacer clic, nos indicará que los tipos de datos son incompatibles. Si hacemos clic sobre el aviso, veremos las propuestas de solución que nos ofrece. La segunda solución nos propone que definamos correctamente el tipo de datos para la variable raiz.

![Math cambiar a double](/uf3/Math_canvi_double.jpg)

La primera solución nos propone que, si queremos mantener la variable `raiz` como entera, apliquemos una conversión de tipo (casting o cast, que explicaremos más adelante) sobre la clase, lo que dará como resultado la siguiente instrucción.

`int raiz=(int) Math.sqrt(25);`

Si hacemos clic sobre cualquiera de las soluciones veremos cómo el editor realiza automáticamente los cambios.

Ahora pasamos a trabajar con el método **round** de la clase **Math**. Para ello, primero declararemos la variable `numero1`.

`float numero1=7.5793F;`

Ahora comenzaremos a escribir la instrucción para el redondeo hasta que nos aparezca la ayuda:

`int resultado1=Math.ro`

![Math + ro](/uf3/Math_ro.jpg)

Como vemos, la clase **Math** tiene dos métodos round: uno que redondea una variable **float** y la deja en una variable entera, y otro que redondea una variable **double** y la deja en una variable de tipo **long**.

Completaremos las instrucciones para el primer caso y después las repetiremos para utilizar el segundo caso sobre las variables `numero2` (con valor 7.493) y `resultado2`.

Adicionalmente, se pueden incluir más instrucciones con diversos tipos de datos y diferentes valores decimales (p. ej., intercambiando los valores de numero1 y numero2) para observar los resultados.

Finalmente pasaremos a trabajar con el método de elevar a un exponente. Para ello, crearemos una variable para la base y otra para el exponente.

`double base=10;`

`double exponente=5;`

Realizaremos el cálculo del exponente sobre una variable `resultado3`. Seguiremos los mismos pasos que antes para que nos aparezca la ayuda de autocompletado.

`int resultado3=Math.pow`

Y acabaremos completando la instrucción con los parámetros `base` y `exponente`.

Nuestro programa completo será:

::: tabs Codi

== Java

```java
public class UF04EjemploClaseMath {

    public static void main(String[] args) {

        // Cálculos con el método de raíz cuadrada

        int raiz=(int) Math.sqrt(25);

        double raizD= Math.sqrt(25);

        System.out.println(raiz);

        System.out.println(raizD);

        // Cálculos con el método de redondeo

        float numero1=7.579F;

        int resultado1=Math.round(numero1);

        double numero2=7.4793;

        long resultado2=Math.round(numero2);

        System.out.println(resultado1);

        System.out.println(resultado2);

        // Cálculos con el método de elevar a un exponente

        double base=10;

        double exponente=5;

        double resultado3=Math.pow(base,exponente);

        System.out.println(resultado3);

    }

}
```

:::

## La clase String

Como ya hemos comentado, para la gestión de los datos de tipo carácter en Java no existe un tipo de datos primitivo, sino que esto se realiza a través de la clase **String**.

Para la definición de variables lo haremos como lo hacíamos con los tipos de datos primitivos.

`String texto="Primer texto"`

En este caso, texto es una variable objeto o instancia de la clase **String**.

String, como clase que es, tiene sus métodos. Así, el método **length()** nos permite saber la longitud de una cadena de caracteres, **charAt()** nos permite conocer la posición de un carácter en una cadena, **substring()** permite extraer una subcadena de una cadena a partir de una posición y un número de caracteres a extraer, o **equals()** nos indica si dos cadenas son iguales o no.

::: info Nota:

Hay que tener en cuenta que la primera posición de una cadena no es la 1 sino la 0.

:::

Los métodos de esta clase no están declarados como **estáticos**. Por eso, para utilizarlos necesitaremos **instanciar una variable de tipo String** mediante un **constructor**.

Un constructor nos permitirá instanciar los objetos que utilizaremos de esta clase y tiene el mismo nombre que la clase. Podemos encontrarnos con clases que tienen varios constructores con el mismo nombre, pero diferentes parámetros, es decir, que son para diferentes usos. De momento, nos quedaremos con esta idea y ya profundizaremos más adelante. En nuestro caso utilizaremos el primer constructor.

![Instancia String](/uf3/Instancia_String.jpg)

**Ejemplo de la clase String:**



::: tabs Codi



== Java



```java

public class UF04EjemploClaseString {

    public static void main(String[] args) {

        

        String descartes="Pienso, luego existo";

        System.out.println("Descartes dice: " + descartes);

        System.out.println("Lo que dice Descartes tiene una longitud de " + descartes.length() + " letras");

        System.out.println("Lo que dice Descartes comienza por la letra " + descartes.charAt(0));

        int ultimaLetra=descartes.length();

        System.out.println("La última letra es " + descartes.charAt(ultimaLetra-1));

        System.out.println(descartes.substring(0, 16));

    }

}

```



:::

## La clase Scanner

Como habíamos mencionado previamente, todos los métodos de la clase Math y los métodos de la clase String los hemos podido utilizar porque pertenecen al paquete java.lang.

Pero ¿qué pasa si queremos utilizar la clase Scanner? Esta clase no pertenece al paquete por defecto java.lang, de manera que nos dará un error. Por tanto, aquí sí que tendremos que indicar explícitamente que queremos utilizar un paquete.

![Error falta importar java.util](/uf3/Error_import_java_util.jpg)

Vemos que el error nos está indicando que es necesario importar el paquete **java.util** para poder utilizar esta clase. Por tanto, la primera instrucción que introduciremos en nuestra clase es:

`import java.util.*;`

La clase Scanner tiene una serie de métodos que no son **estáticos**, como **nextLine()** para introducir texto, **nextInt()** para introducir números enteros o **nextDouble()** para números decimales. Esto implica que para utilizarlos no basta con acceder a la clase, sino que es necesario crear un objeto de la clase **Scanner** o, lo que es lo mismo, instanciarla. Igualmente, el método **hasNextInt()** y similares los podremos utilizar para verificar el tipo de dato introducido por teclado.

Aunque esto se verá detalladamente más adelante, para saber qué paquete debemos importar podemos consultarlo por internet en la web Java API y buscar la clase **Scanner**. Al principio veremos que nos indica en qué paquete se encuentra y, por tanto, este será el que debemos importar.

![Clase Scanner](/uf3/Classe_Scanner.jpg)

Igualmente, si avanzamos en la página, más adelante nos indica cuáles son los constructores de la clase, que ya hemos explicado que sirven para instanciar los objetos o variables que utilizaremos de esta clase.

![Constructor Scanner](/uf3/Cosntructor%20Scanner.jpg)

Igualmente, más adelante en la página aparece la lista de métodos de esta clase.

![Lista de métodos](/uf3/Llista_metodes.jpg)

Entre estos métodos encontraremos los tres métodos mencionados y, como vemos, ninguno es **static**, lo que implica que antes de utilizarlos tendremos que haber creado un objeto (o instanciado la clase).

![Métodos Scanner](/uf3/Metodes_Scanner.jpg)

Haciendo clic sobre estos accederemos a la información ampliada, donde comprobaremos que no son estáticos.

![Método no estático](/uf3/No_estatic.jpg)

Ahora completaremos el código de la clase tal como se indica a continuación.

Como vemos, primero se instancia la clase Scanner creando el objeto "entrada", que se utilizará a continuación para utilizar los métodos de la clase. Igualmente, el resultado de la lectura se almacenará en variables que deben definirse con el tipo de datos que corresponda.

**Ejemplo:** leer texto del teclado.

::: tabs Codi



== Java



```java

public class UF04EjemploClaseScanner1 {

    public static void main(String[] args) {



        // Instanciamos la clase Scanner para realizar las entradas

        Scanner entrada = new Scanner(System.in);



        // Solicitamos el primer dato de tipo texto a través del objeto Scanner creado

        System.out.println("Introduce tu nombre");

        String nombre=entrada.nextLine();



        // Solicitamos el segundo dato de tipo texto a través del objeto Scanner creado

        System.out.println("Introduce tu edad");

        int edad=entrada.nextInt();



        // Mostramos los mensajes de salida finales

        System.out.println("Hola " + nombre + ", tienes " + edad + " años.");

        System.out.println("El año que viene tendrás " + (edad+1) + " años.");

        entrada.close();

    } 

}

```



:::



::: info Nota

¿Qué ocurre si en lugar de escribir (edad+1) escribimos lo mismo sin los paréntesis? Realiza la prueba.

:::

Veamos otro ejemplo.

**Ejemplo:** leer un entero del teclado y comprobar que es correcto.

::: tabs Codi



== Java



```java

public class UF04EjemploClaseScanner2 {

 

    public static void main(String[] args) {

        Scanner entrada = new Scanner(System.in);

        int valor = 0;



        System.out.print("Escribe un valor entero: ");

        if (entrada.hasNextInt()) {

            valor = entrada.nextInt();

            System.out.println("El valor era " + valor + ".");

        } else {

            entrada.next();

            System.out.print("El valor no era entero.");

        }



        entrada.nextLine();

        entrada.close();

    } 

}

```



:::

El método de la clase Scanner asociado a la lectura de una cadena de texto compuesta **de una única palabra** es **next()**.

Recuerda que, si en una misma línea escribes más de una palabra, las sucesivas invocaciones a este método no bloquearán el programa, sino que irán evaluando los sucesivos datos pendientes de leer.

El método de la clase Scanner asociado a la lectura de una cadena de texto en forma de frase donde hay **varias palabras separadas por espacios** es **nextLine()**.