# 9.3. Tipos de datos

En los lenguajes de programación existen dos tipos principales de datos:

- **Tipos de datos simples**: Nos permiten crear variables que almacenan un solo valor. Por ejemplo, para un contador, edad, precio, etc. Son los que más utilizaremos por ahora.

- **Tipos de datos compuestos**: Estructuras de datos más complejas que permiten almacenar muchos datos (vectores, objetos, etc.). Los veremos en futuras unidades.

Los tipos de datos simples más comunes son:

- Para números enteros: diferentes precisiones (8, 16, 32, 64 bits)

- Para números reales: precisión simple y doble

- Para caracteres: representación de texto individual

- Para valores lógicos: verdadero o falso

::: tabs

== Java

| Tipo    | Descripción                                      | Memoria ocupada | Rango de valores permitidos                    |
|---------|--------------------------------------------------|-----------------|------------------------------------------------|
| byte    | Número entero de 1 byte                          | 1 byte          | -128 … 127                                     |
| short   | Número entero corto                              | 2 bytes         | -32768 … 32767                                 |
| int     | Número entero                                    | 4 bytes         | -2147483648 … 2147483647                       |
| long    | Número entero largo                              | 8 bytes         | -9223372036854775808 … 9223372036854775807     |
| float   | Número real en coma flotante de precisión simple | 32 bits         | ±3,4*10⁻³⁸ … ±3,4*10³⁸                         |
| double  | Número real en coma flotante de precisión doble  | 64 bits         | ±1,7*10⁻³⁰⁸ … ±1,7*10³⁰⁸                       |
| char    | Un solo carácter                                 | 2 bytes         |                                                |
| boolean | Valor lógico                                     | 1 bit           | true o false                                   |

:::

::: tip **¡IMPORTANTE!**

Algunos lenguajes de programación **no realizan comprobación de los rangos**. Es decir, si a una variable con el valor máximo se le suma 1, sorprendentemente el resultado puede ser el valor mínimo negativo (no produce un error de tipo desbordamiento, sino que **se comporta de manera cíclica**).

:::

Existe un **<u>tipo de dato compuesto</u>** llamado **cadena de texto** o **string** que conviene conocer, ya que permite representar texto. Más adelante veremos cómo se utiliza.