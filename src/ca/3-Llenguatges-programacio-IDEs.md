# 3 Llenguatges de programació i IDEs

## 3.1 Llenguatges de programació

### Què és un llenguatge de programació?

Un **llenguatge de programació** és un llenguatge formal que permet a les persones **escriure instruccions que un ordinador pot interpretar i executar**.

Els ordinadors només poden executar directament instruccions expressades en un llenguatge que el seu processador puga entendre. Per això, els llenguatges de programació proporcionen una forma més pròxima al llenguatge humà per descriure les operacions que ha de realitzar un ordinador.

Mitjançant un llenguatge de programació podem indicar, entre altres coses:

- Quines dades ha d'utilitzar un programa.
- Com s'han d'emmagatzemar aquestes dades.
- Quines operacions s'han de realitzar.
- Quines decisions ha de prendre el programa.
- Quines instruccions s'han de repetir.
- Com s'han d'organitzar les diferents parts del programa.
- Com s'han de comunicar diferents components o aplicacions.

Per exemple, una instrucció molt senzilla en Java podria ser:

::: tabs
==Java
```java
System.out.println("Hola, món!");
```
:::

Hi ha diferents tipus de llenguatges de programació i existeixen molts criteris diferents per classificar els llenguatges de programació.

Per exemple, podem parlar de:

- Llenguatges **compilats i interpretats**.
- Llenguatges **de baix nivell i d'alt nivell**.
- Llenguatges **imperatius, funcionals, declaratius, etc.**
- Llenguatges **orientats a objectes**.

Aquestes classificacions no són excloents. Un mateix llenguatge pot pertànyer a diverses categories.

Per exemple, **Java és un llenguatge d'alt nivell**, **compilat** a bytecode, multiplataforma, **orientat a objectes** i també permet utilitzar altres paradigmes de programació.

### Els 10 llenguatges de programació més utilitzats

La popularitat dels llenguatges de programació varia segons la font i el criteri utilitzat: nombre de projectes, ús professional, preguntes dels desenvolupadors, ofertes de treball, repositoris, etc.

La següent taula mostra deu llenguatges que es troben habitualment entre els més utilitzats en l'actualitat.

| # | Llenguatge | Paradigmes principals | Usos habituals |
|---:|---|---|---|
| 1 | **Python** | Imperatiu, orientat a objectes, funcional | IA, ciència de dades, automatització, web |
| 2 | **JavaScript** | Imperatiu, funcional, orientat a objectes | Web, frontend, backend |
| 3 | **Java** | Orientat a objectes, imperatiu, funcional | Aplicacions empresarials, backend, Android |
| 4 | **C#** | Orientat a objectes, imperatiu, funcional | .NET, aplicacions empresarials, videojocs |
| 5 | **C++** | Imperatiu, orientat a objectes, genèric | Sistemes, videojocs, aplicacions d'alt rendiment |
| 6 | **C** | Imperatiu, procedimental | Sistemes operatius, sistemes encastats |
| 7 | **TypeScript** | Imperatiu, funcional, orientat a objectes | Aplicacions web i backend |
| 8 | **PHP** | Imperatiu, orientat a objectes | Desenvolupament web |
| 9 | **Go** | Imperatiu, concurrent, estructurat | Backend, xarxes, cloud i microserveis |
| 10 | **Kotlin** | Orientat a objectes, funcional | Android, backend i aplicacions JVM |

### Importància de Java

Dins d'aquesta classificació, **Java** té una especial importància en l'aprenentatge de la programació orientada a objectes.

Java permet treballar de manera clara amb els principals conceptes de l'orientació a objectes com vorem al llarg del curs.


## 3.2 Entorns de Desenvolupament Integrat (IDEs)

Un **entorn de desenvolupament integrat (IDE - "Integrated Development Environment")** és una aplicació informàtica que proporciona serveis integrals per al desenvolupament de programari. Els IDEs combinen un editor de codi font, eines de compilació, depuradors i altres utilitats en una sola interfície gràfica d'usuari.

Els **avantatges principals** d'utilitzar un IDE inclouen:

- **Productivitat millorada** gràcies a l'autocompletat de codi i la detecció d'errors en temps real
- **Depuració integrada** amb punts de ruptura, inspecció de variables i execució pas a pas
- **Gestió de projectes** simplificada amb organització automàtica de fitxers i recursos
- **Integració amb sistemes de control de versions** com Git
- **Refactoring automatitzat** per a millorar l'estructura del codi sense canviar la funcionalitat
- **Suport per a múltiples llenguatges** de programació
- **Extensions i plugins** per a funcionalitats específiques

### Tipus d'IDEs

Els IDEs es poden classificar segons diferents criteris:

**Per especialització:**
- **IDEs específics**: Dissenyats per a un llenguatge o plataforma concreta
- **IDEs generals**: Suporten múltiples llenguatges de programació mitjançant extensions

**Per model de llicència:**
- **IDEs lliures i de codi obert**: Gratuïts i amb codi font disponible
- **IDEs comercials**: De pagament amb suport professional
- **IDEs freemium**: Versió gratuïta amb funcionalitats limitades i versió de pagament completa

**Per plataforma:**
- **IDEs multiplataforma**: Funcionen en Windows, macOS i Linux
- **IDEs específics de plataforma**: Dissenyats per a un sistema operatiu concret

### Funcionalitats Bàsiques dels IDEs

#### Editor de Codi

L'editor de codi és el component central de qualsevol IDE i ofereix:

- **Sintaxi destacada**: Colorejat automàtic del codi segons el llenguatge de programació per a millorar la llegibilitat.
- **Autocompletat intel·ligent**: Suggeriments automàtics de mètodes, variables i paraules clau mentre s'escriu el codi.
- **Detecció d'errors**: Identificació d'errors sintàctics i semàntics en temps real amb indicadors visuals.
- **Plegament de codi**: Capacitat de col·lapsar blocs de codi per a millorar la navegació en fitxers grans.
- **Navegació ràpida**: Salts directes a definicions de funcions, classes o variables.

####  Gestió de Fitxers i Navegació

Els IDEs proporcionen diferents vistes per a organitzar i navegar pel codi:

- **Vista de projectes**: Mostra l'estructura lògica del projecte organitzada per paquets o mòduls.
- **Vista de fitxers**: Presenta l'estructura física de directoris i fitxers del sistema d'arxius.
- **Vista d'esquema**: Mostra la jerarquia de classes, mètodes i variables dins d'un fitxer.
- **Navegació per pestanyes**: Permet mantindre múltiples fitxers oberts simultàniament.

#### Cerca i Substitució

Els IDEs ofereixen potents eines de cerca:

- **Cerca simple** en el fitxer actual
- **Cerca global** en tot el projecte
- **Cerca amb expressions regulars** per a patrons complexes
- **Cerca i substitució massiva** amb vista prèvia dels canvis
- **Cerca de referències** per a trobar tots els usos d'una variable o funció
