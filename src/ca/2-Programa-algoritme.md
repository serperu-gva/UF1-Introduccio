# 2. Programes i algoritmes

Quan desenvolupem un programa informàtic, l'objectiu és aconseguir que un ordinador siga capaç de resoldre un problema o realitzar una determinada tasca. Per fer-ho, necessitem definir **què volem aconseguir**, **quines dades necessitem** i **quins passos ha de seguir l'ordinador**.

En aquest procés apareixen dos conceptes fonamentals: **l'algoritme** i **el programa**.

## Què és un algoritme?

Un **algoritme** és un conjunt ordenat i finit de passos que permet resoldre un problema o realitzar una tasca.

Un algoritme indica **què s'ha de fer i en quin ordre**, però no està lligat necessàriament a un llenguatge de programació concret.

Per exemple, si volem calcular la mitjana de tres nombres, podríem definir l'algoritme de la següent manera:

1. Llegir el primer nombre.
2. Llegir el segon nombre.
3. Llegir el tercer nombre.
4. Sumar els tres nombres.
5. Dividir el resultat entre 3.
6. Mostrar la mitjana.

Aquest algoritme descriu la **lògica necessària per resoldre el problema**.

## De l'algoritme al programa

Un ordinador no pot executar directament un algoritme escrit en llenguatge natural. Necessitem **expressar l'algoritme mitjançant un llenguatge de programació**.

Per exemple, l'algoritme anterior es podria implementar en Java:

```java
double num1 = 5;
double num2 = 7;
double num3 = 9;

double suma = num1 + num2 + num3;
double mitjana = suma / 3;

System.out.println("La mitjana és: " + mitjana);
```