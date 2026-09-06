# 8. Gestió d'un proyecte

## Concepte de Projecte

Un **projecte** és un conjunt organitzat de fitxers font, recursos, configuracions i metadades que defineixen una aplicació o llibreria. Els projectes proporcionen:

- **Organització estructurada** dels fitxers i recursos
- **Configuració de compilació** i construcció
- **Gestió de dependències** externes
- **Configuració de depuració** i execució
- **Metadades del projecte** com versió, autor, descripció

## Tipus de Projectes

Els IDEs solen oferir diferents tipus de plantilles de projecte:

- **Aplicacions d'escriptori**: Programes amb interfície gràfica
- **Aplicacions de consola**: Programes que s'executen en terminal
- **Aplicacions web**: Projectes per a desenvolupament web
- **Llibreries**: Components reutilitzables per a altres projectes
- **Aplicacions mòbils**: Projectes específics per a plataformes mòbils

## Creació d'un Nou Projecte

El procés típic per a crear un projecte inclou:

1. **Seleccionar el tipus** de projecte adequat
2. **Configurar el nom** i ubicació del projecte
3. **Especificar paràmetres** específics (versió del llenguatge, framework, etc.)
4. **Generar l'estructura** inicial de fitxers i carpetes
5. **Configurar les propietats** del projecte

::: tabs
== Java
```
// Exemple d'estructura típica d'un projecte:
MeuProjecte/
├── src/
│   └── main/
│       └── java/
│           └── com/
│               └── exemple/
│                   └── App.java
├── lib/
├── resources/
├── build/
└── README.md
```
:::


## Configuració de Compilació

La configuració típica inclou:

- **Directoris de codi font** i recursos
- **Rutes de llibreries** externes i dependències
- **Opcions del compilador** (optimització, avisos, etc.)
- **Directoris de sortida** per als fitxers compilats
- **Scripts de construcció** personalitzats

## Procés de Compilació

Els IDEs ofereixen diferents opcions de compilació:

- **Compilació automàtica**: El codi es compila automàticament quan es guarden els canvis.
- **Compilació manual**: L'usuari inicia explícitament el procés de compilació.
- **Compilació selectiva**: Només es recompilen els fitxers modificats.
- **Construcció completa**: Es neteja i recompila tot el projecte des de zero.

::: tabs
== Java

Exemple de comandes típics de compilació:
- Compilar el projecte: javac -d build src/*.java
- Executar l'aplicació: java -cp build NomDeLaClasse
- Crear un arxiu JAR: jar cf aplicacio.jar -C build.

:::

## Execució de Programes

Les opcions d'execució típiques inclouen:

- **Execució normal**: Llança l'aplicació de manera estàndard.
- **Execució amb arguments**: Permet especificar paràmetres específics per a aquesta execució.
- **Execució en mode de depuració**: Inicia l'aplicació preparada per a la depuració.
- **Execució de proves**: Llança suites de proves automatitzades.

## Gestió de la Consola de Sortida

Els IDEs proporcionen una consola integrada que mostra:

- **Sortida estàndard** del programa
- **Missatges d'error** i excepcions
- **Registres de compilació** i construcció
- **Entrada d'usuari** quan l'aplicació la requereix
- **Enllaços clicables** als errors per a navegació ràpida

## Gestió de projectes: Organització en Paquets

### Concepte de Paquet

En la programació moderna, les classes i funcionalitats no es troben totes juntes de manera desordenada, sinó que estan organitzades en **paquets** (també anomenats **espais de noms** o **mòduls** segons el llenguatge). Els paquets són una manera d'agrupar i organitzar les classes relacionades entre si.

Els paquets ofereixen diversos avantatges:

- **Organització**: Faciliten la localització de classes específiques
- **Evitar conflictes**: Permeten tenir classes amb el mateix nom en paquets diferents
- **Control d'accés**: Poden definir quines classes són accessibles des de l'exterior
- **Modularitat**: Faciliten la reutilització de codi en diferents projectes

### Jerarquia de Paquets

Els paquets segueixen una estructura jeràrquica similar a les carpetes d'un sistema d'arxius. Uns paquets poden contenir altres paquets, creant una organització en arbre que facilita la navegació i comprensió del codi.

Per exemple, en una jerarquia típica podríem trobar:
- Un paquet principal per a operacions matemàtiques
- Subpaquets específics per a geometria, estadística, càlcul, etc.
- Dins de cada subpaquet, les classes corresponents

### Paquets per Defecte

La majoria de llenguatges tenen un **paquet per defecte** que conté les funcionalitats més bàsiques i utilitzades. Aquest paquet especial està sempre disponible sense necessitat de fer cap importació explícita, ja que les seues classes es carreguen automàticament quan s'inicia el programa.

### Importació de Paquets

Per utilitzar classes que no pertanyen al paquet per defecte, cal **importar** explícitament el paquet corresponent al començament del programa. Aquesta importació indica al compilador o intèrpret on trobar les classes que necessitem utilitzar.

Sense la importació adequada, el programa no podrà localitzar les classes necessàries i es produirà un error de compilació o execució.

::: tabs
== Java

A Java, les classes sempre estan contingudes en un paquet. Cada paquet conté un conjunt de classes relacionades entre si, proporcionant una manera d'organització i estructura al codi.

Els paquets tenen una jerarquia similar a les carpetes d'un ordinador. Un exemple de jerarquia seria:

- **java.lang** (paquet principal)
- **java.lang.annotation** (subpaquet)
- **java.lang.instrument** (subpaquet)
- **java.lang.invoke** (subpaquet)
- **java.lang.management** (subpaquet)

El paquet **java.lang** és el paquet per defecte de Java. Totes les classes d'aquest paquet (com String, Math, System, etc.) es poden utilitzar directament sense necessitat d'importació explícita.

Per utilitzar classes d'altres paquets, cal importar-los al començament del programa:

```java
import java.util.Scanner;  // Importa una classe específica
import java.util.*;        // Importa totes les classes del paquet
```

Si no s'importa el paquet necessari, apareixerà un error de compilació indicant que la classe no es pot trobar.

:::

### Documentació de Paquets

La documentació oficial dels llenguatges sol organitzar la informació per paquets, mostrant:
- La jerarquia completa de paquets
- Les classes disponibles en cada paquet
- Els mètodes i funcionalitats de cada classe
- Exemples d'ús i paràmetres necessaris

Aquesta documentació és fonamental per conèixer les funcionalitats disponibles i aprendre a utilitzar-les correctament.