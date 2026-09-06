# 7. Java per dins. Com funciona Java?

Una de les característiques principals de Java és que un programa no s'executa directament sobre el sistema operatiu, sinó que utilitza una capa intermèdia anomenada **Java Virtual Machine (JVM)**.

De manera simplificada, el procés és el següent:

```text
Codi Java (.java)
        │
        │ Compilador javac
        ▼
Bytecode (.class)
        │
        │ JVM
        ▼
Execució del programa
```

## 7.1. El codi font

El programador escriu el programa en fitxers amb l'extensió `.java`.

Per exemple:
::: tabs
== Java
```java
public class Hola {

    public static void main(String[] args) {
        System.out.println("Hola, món!");
    }

}
```
:::

Aquest fitxer conté el **codi font**, és a dir, les instruccions escrites pel programador utilitzant el llenguatge Java.

No obstant això, l'ordinador no pot executar directament aquest codi.

---

## 7.2. El compilador: `javac`

El codi font es transforma utilitzant el compilador de Java, anomenat `javac`.

```text
Hola.java
    │
    │ javac
    ▼
Hola.class
```

El resultat és un fitxer `.class` que conté **bytecode**.

El **bytecode** és un codi intermedi que no depén directament d'un sistema operatiu concret.

---

## 7.3. La JVM

El bytecode és executat per la **Java Virtual Machine o JVM**.

```text
Hola.class
     │
     ▼
    JVM
     │
     ▼
Sistema operatiu
     │
     ▼
Maquinari
```

La JVM és la responsable d'executar el programa Java en cada sistema.

Per exemple:

```text
              Programa Java
                   │
                   ▼
                Bytecode
                   │
        ┌──────────┼──────────┐
        ▼          ▼          ▼
      JVM        JVM        JVM
        │          │          │
     Windows     Linux      macOS
```

Això permet que el mateix programa Java puga executar-se en diferents sistemes operatius sempre que hi haja una **JVM compatible**.

Aquesta és la idea relacionada amb la coneguda expressió:

> **Write once, run anywhere**

És a dir, en termes generals, escrivim i compilem el programa una vegada i el podem executar en diferents sistemes que disposen d'una JVM compatible.

---

## 7.4 JDK, JRE i JVM

Per entendre l'entorn de Java és important diferenciar aquests tres conceptes.

### JVM: Java Virtual Machine

La **JVM** és la màquina virtual encarregada d'executar el **bytecode** dels programes Java.

La seua funció principal és actuar com a intermediària entre el programa Java i el sistema on s'està executant.

```text
Programa Java
      │
      ▼
   Bytecode
      │
      ▼
     JVM
      │
      ▼
Sistema operatiu i maquinari
```

---

### JRE: Java Runtime Environment

El **JRE** és l'entorn necessari per executar aplicacions Java.

Inclou principalment:

- La **JVM**.
- Les biblioteques i components necessaris per executar programes Java.

Podem representar-lo així:

```text
JRE
│
├── JVM
│
└── Biblioteques necessàries per executar Java
```

De manera simplificada:

> **El JRE serveix per executar programes Java.**

---

### JDK: Java Development Kit

El **JDK** és el conjunt d'eines necessàries per **desenvolupar aplicacions Java**.

Inclou les eines per:

- Escriure i compilar programes.
- Executar-los.
- Depurar-los.
- Utilitzar altres eines de desenvolupament.

Entre aquestes eines trobem:

```text
javac → Compilador de Java
java  → Executa aplicacions Java
javadoc → Genera documentació
jdb   → Depurador
```

Tradicionalment, la relació entre aquests conceptes es representa així:

```text
JDK
│
├── Eines de desenvolupament
│   ├── javac
│   ├── javadoc
│   └── jdb
│
└── JRE
    │
    ├── Biblioteques
    │
    └── JVM
```

Per tant, de manera simplificada:

```text
JDK
 └── JRE
      └── JVM
```