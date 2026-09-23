# La clase String (Java)

Las cadenas de texto son objetos especiales. Los textos deben manejarse creando objetos de tipo String.

Ejemplo:

::: tabs

== Java

```java

String texto1 = "Prueba de texto!";

```

:::

Las cadenas pueden ocupar varias líneas utilizando el operador de concatenación "+".

::: tabs

== Java

```java

String texto2 = "Este es un texto que ocupa " + "varias líneas, no obstante se puede " + "perfectamente encadenar";

```

:::

También se pueden crear objetos String sin utilizar constantes entre comillas, usando otros constructores:

::: tabs

== Java

```java

char[] palabra = {'P', 'a', 'r', 'a', 'u', 'l', 'a'}; // Array de char

String cadena = new String(palabra);

```

:::

## Comparación

**IMPORTANTE**: Los objetos String NO pueden compararse directamente con los operadores de comparación `==` como las variables simples.

En su lugar se deben utilizar estos métodos:

- **`cadena1.equals(cadena2)`**. El resultado es `true` si la cadena1 es igual a la cadena2. Ambas cadenas son variables de tipo String.

- **`cadena1.equalsIgnoreCase(cadena2)`**. Como el anterior, pero en este caso no se tienen en cuenta mayúsculas y minúsculas.

- **`cadena1.compareTo(cadena2)`**. Compara ambas cadenas, considerando el orden alfabético. Si la primera cadena es mayor en orden alfabético que la segunda, devuelve una diferencia positiva entre una cadena y otra; si son iguales devuelve `0` y si es la segunda la mayor, devuelve una diferencia negativa entre una cadena y otra. Hay que tener en cuenta que el orden no es el del alfabeto español, sino que utiliza la tabla ASCII; en esa tabla la letra ñ es mucho mayor que la o.

- **`cadena1.compareToIgnoreCase(cadena2)`**. Igual que el anterior, pero además ignora las mayúsculas y minúsculas.

Son funciones que poseen los propios objetos de tipo String. Para utilizarlas basta con poner el nombre del método y sus parámetros después del nombre del objeto String.

`objetoString.método(argumentos);`

## Métodos de la clase String

Algunos de los métodos más utilizados son:

- **`valueOf`**: Convierte valores que no son cadenas a una cadena.

::: tabs

== Java

```java

String numero = String.valueOf(1234); // Convierte el número int 1234 en el String "1234"

```

:::

- **`length`**: Devuelve la longitud de una cadena (el número de caracteres de la cadena):

::: tabs

== Java

```java

String texto1 = "Prueba";
System.out.println(texto1.length()); // Escribe un 5

```

:::

- **Concatenar cadenas**: Se puede hacer de dos formas, utilizando el método `concat` o con el operador `+`.

::: tabs

== Java

```java

String cadena1 = "Buen ", cadena2 = " día", cadena3, cadena4;

cadena3 = cadena1 + cadena2;

cadena4 = cadena1.concat(cadena2);

```

:::

En ambos casos el contenido de `cadena3` y `cadena4` sería el mismo: `"Buen día"`.

- **`charAt`**: Devuelve un carácter concreto de la cadena. El carácter que se devolverá se indica mediante su posición (el primer carácter está en la posición 0). Si la posición es negativa o sobrepasa el tamaño de la cadena, se produce un error de ejecución, una excepción de tipo **`IndexOutOfBoundsException`** (recuerda este tipo de error, se repetirá muchas veces).

::: tabs

== Java

```java

String cadena1 = "Prueba";

char caracter1 = cadena1.charAt(2); // caracter1 valdrá 'u'

```

:::

- **`substring`**: Devuelve una parte del texto de la cadena. La parte se obtiene desde una posición inicial hasta una posición final (sin incluir esa posición final) o desde una posición hasta el final de la cadena. Si las posiciones indicadas no son válidas se produce una excepción de tipo **`IndexOutOfBoundsException`**. Se empieza a contar desde la posición 0.

::: tabs

== Java

```java

String cadena1 = "Buen día";

String cadena2 = cadena1.substring(0, 3); // cadena2 = "Buen"

String cadena3 = cadena1.substring(3); // cadena3 = " día"

```

:::

- **`indexOf`**: Devuelve la primera posición en la que aparece un determinado texto en la cadena. En caso de que la cadena buscada no se encuentre, devuelve `-1`.

El texto que se busca puede ser `char` o `String`.

::: tabs

== Java

```java

String cadena1 = "Quería decirte que quiero que te vayas";

System.out.println(cadena1.indexOf("que")); // Devuelve 16

```

:::

También se puede buscar desde una determinada posición:

::: tabs

== Java

```java

String cadena1 = "Quería decirte que quiero que te vayas";

System.out.println(cadena1.indexOf("que", 17)); // Ahora devolvería 29

```

:::

- **`lastIndexOf`**: Devuelve la última posición en la que aparece un determinado texto en la cadena. Es casi idéntica a la anterior, solo que busca desde el final.

::: tabs

== Java

```java

String cadena1 = "Quería decirte que quiero que te vayas";

System.out.println(cadena1.lastIndexOf("que")); // Devolvería 29

```

:::

También permite comenzar a buscar desde una determinada posición.

- **`endsWith`**: Devuelve `true` si la cadena termina con un determinado texto.

::: tabs

== Java

```java

String cadena1 = "Quería decirte que quiero que te vayas";

System.out.println(cadena1.endsWith("vayas")); // Devolvería true

```

:::

- **`startsWith`**: Devuelve `true` si la cadena comienza con un determinado texto.

::: tabs

== Java

```java

String cadena1 = "Quería decirte que quiero que te vayas";

System.out.println(cadena1.startsWith("vayas")); // Devolvería false

```

:::

- **`replace`**: Cambia todas las apariciones de un carácter (o caracteres) por otro/s en el texto indicado y lo almacena como resultado. **El texto original no cambia**, por lo que hay que asignar el resultado de `replace` a un String para almacenar el texto modificado.

::: tabs

== Java

```java

// Ejemplo 1

String cadena1 = "Mariposa";

System.out.println(cadena1.replace('a', 'e')); // Devuelve "Meripose"

System.out.println(cadena1); // Continúa valiendo "Mariposa"

```

:::

Para guardar el valor tendríamos que hacer:

::: tabs

== Java

```java

String cadena2 = cadena1.replace('a', 'e');

```

:::

::: tabs

== Java

```java

// Ejemplo 2

String cadena1 = "Buscar armadillos";

System.out.println(cadena1.replace("ar", "er")); // Devuelve "Buscer ermedillos"

System.out.println(cadena1); // Continúa valiendo "Buscar armadillos"

```

:::

- **`toUpperCase`**: Obtiene la versión en mayúsculas de la cadena. Es capaz de transformar todos los caracteres nacionales:

::: tabs

== Java

```java

String cadena1 = "Batallón de cigüeñas";

System.out.println(cadena1.toUpperCase()); // Escribe: BATALLÓN DE CIGÜEÑAS

```

:::

- **`toLowerCase`**: Obtiene la versión en minúsculas de la cadena.

- **`toCharArray`**: Obtiene un array de caracteres a partir de una cadena. De esta forma podemos utilizar las características de los arrays para manipular el texto, lo que puede resultar interesante para manipulaciones complicadas.

::: tabs

== Java

```java

String cadena = "texto de prueba";

char[] caracteres = cadena.toCharArray();

System.out.println(caracteres[3]); // Devuelve la letra t

System.out.println(cadena); // Devuelve el texto completo: texto de prueba

```

:::

- **`format`**: Modifica el formato de la cadena que se va a mostrar. Es muy útil para mostrar únicamente los decimales que necesitamos de un número decimal. Indicaremos `%` para indicar la parte entera más el número de decimales que se mostrarán, seguido de una `f`:

::: tabs

== Java

```java

System.out.println(String.format("%.2f", numero)); // Muestra el número con dos decimales.

```

:::

- **`matches`**: Examina la expresión regular que recibe como parámetro (en forma de String) y devuelve `true` si el texto que examina cumple la expresión regular. Una expresión regular es una expresión textual que utiliza símbolos especiales para realizar búsquedas avanzadas.

  Las expresiones regulares pueden contener:

  - Caracteres. Como `a`, `s`, `ñ`, … y los interpreta tal cual. Si una expresión regular contuviera únicamente un carácter, `matches` devolvería `true` si el texto contiene solamente ese carácter. Si contiene más de uno, obliga a que el texto tenga exactamente esos caracteres.

  - Caracteres de control (`\n`, `\\`, …).

  - Opciones de caracteres. Se ponen entre corchetes. Por ejemplo `[abc]` significa `a`, `b` o `c`.

  - Negación de caracteres. Funciona al contrario: impide que aparezcan los caracteres indicados. Se utiliza con corchetes dentro de los cuales se coloca el carácter circunflejo (`^`). `[^abc]` significa ni `a`, ni `b`, ni `c`.

  - Rangos. Se indican con guiones. Por ejemplo, `[a-z]` significa cualquier carácter de la `a` a la `z`.

  - Intersección. Utiliza `&&`. Por ejemplo, `[a-x&&r-z]` significa de la `r` a la `x` (intersección de ambas expresiones).

  - Sustracción. Ejemplo: `[a-x&&[^cde]]` significa de la `a` a la `x` excepto la `c`, `d` o `e`.

  - Cualquier carácter. Se representa con el símbolo punto (`.`).

  - Opcional. El símbolo `?` sirve para indicar que la expresión que lo precede puede aparecer una o ninguna vez. Por ejemplo, `a?` indica que puede aparecer la letra `a` o no.

  - Repetición. Se utiliza con el asterisco (`*`). Indica que la expresión puede repetirse varias veces o incluso no aparecer.

  - Repetición obligatoria. La realiza el signo `+`. La expresión se repite una o más veces (pero al menos una).

  - Repetición un número exacto de veces. Un número entre llaves indica las veces que se repite la expresión. Por ejemplo, `\d{7}` significa que el texto debe contener siete números (siete cifras del 0 al 9). Con una coma significa al menos, es decir, `\d{7,}` significa al menos siete veces (podría repetirse más veces). Si aparece un segundo número, indica un número máximo de veces: `\d{7,10}` significa de siete a diez veces.

![Ejemplos Matches](/uf5/Matches.jpg)

Como ya sabemos, la lectura de un String utilizando la clase Scanner se realiza con el método `nextLine()`:

::: tabs

== Java

```java

Scanner entrada = new Scanner(System.in);

String cadena = entrada.nextLine();

```

:::

**Si leemos un tipo de dato numérico**, entero por ejemplo, **antes de leer un String tendremos que limpiar el búfer de entrada**, ya que, en caso contrario, leerá el valor `\n` (salto de línea) introducido después del número y se lo asignará a la variable String, por lo que la entrada no se leerá correctamente.

Tendremos que hacer lo siguiente:

::: tabs

== Java

```java

Scanner entrada = new Scanner(System.in);

System.out.print("Introduce un número: ");

int numero = entrada.nextInt();

entrada.nextLine(); // Limpiamos el búfer de entrada

System.out.print("Introduce un String: ");

String cadena = entrada.nextLine();

```

:::