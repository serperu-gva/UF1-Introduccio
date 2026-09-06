# 9.2. Elementos básicos

## 9.2.1. Comentarios

La mayoría de los lenguajes de programación modernos soportan distintos tipos de comentarios:

::: tabs

== Java

```java
// comentarios para una sola línea
```

```java
/*
comentarios de una o más líneas
*/
```

```java
/** comentario de documentación, de una o más líneas */
```

:::

Los comentarios de documentación, colocados inmediatamente antes de una declaración (de variable o función), indican que ese comentario debe ser incluido en la documentación que se genera automáticamente cuando se utilizan herramientas específicas de documentación. Este tipo de comentario lo veremos más adelante.

## 9.2.2. Identificadores

Los identificadores nombran variables, funciones, clases y objetos; cualquier cosa que el programador o programadora necesite identificar o utilizar.

Reglas para la creación de identificadores:

- **Muchos lenguajes modernos distinguen entre mayúsculas y minúsculas**, por tanto, nombres o identificadores como `var1`, `Var1` y `VAR1` son diferentes.

- Pueden estar formados por cualquiera de los caracteres del código Unicode, por tanto, se pueden declarar variables con el nombre: `añoDeCreación`, `raïm`, etc., aunque eso sí, **el primer carácter no** puede ser un **dígito numérico** y **no** pueden utilizarse **espacios en blanco ni símbolos coincidentes con operadores**.

- La **longitud** máxima de los identificadores es prácticamente **ilimitada**.

- **No** puede ser una **palabra reservada del lenguaje ni** los valores lógicos **`true` o `false`**.

- **No** pueden ser **iguales a otro identificador declarado** en el mismo ámbito.

- **IMPORTANTE** → Por convenio:

  - Los **nombres** de las **variables** y los **métodos** deberían comenzar por una **letra minúscula** y los de las **clases por mayúscula**.

  - Si el identificador está formado por **varias palabras**, la **primera** se escribe en **minúsculas** (excepto para las clases) y el **resto** de palabras se hacen **comenzar por mayúscula** (por ejemplo: `añoDeCreación`).

  - Estas **reglas** no son obligatorias, pero son **convenientes** ya que ayudan al proceso de codificación de un programa, así como a su legibilidad. Es más sencillo distinguir entre clases y métodos o variables.

**_Ejemplo: identificadores válidos_**


- `contador`

- `suma`

- `edad`

- `sueldoBruto`

- `sueldoNeto`

- `nombre_usuario`

- `nombre_Completo`

- `letraDni`

Y su uso sería, por ejemplo:

::: tabs

== Java

```java
int contador; // crea variable de tipo int llamada contador
float sueldoNeto; // crea variable de tipo float llamada sueldoNeto
char letraDni; // crea variable de tipo char llamada letraDni
```

:::