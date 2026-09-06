# 6. Configurando Visual Studio Code

***Visual Studio Code*** es un **editor de código fuente** libre y multiplataforma desarrollado por Microsoft. Aunque inicialmente se diseñó como un editor ligero, con el uso de extensiones se puede convertir en un **entorno de desarrollo integrado (IDE)** muy potente para Java.

Es importante destacar que VSCode es **gratuito y de código abierto**, con una **comunidad muy activa** que desarrolla constantemente nuevas extensiones. Su **flexibilidad y personalización** lo convierten en una excelente opción para el desarrollo Java.

VSCode utiliza un **sistema de extensiones** que permite añadir funcionalidades específicas para cada lenguaje de programación. Para Java, existen extensiones oficiales que proporcionan **compilación automática, depuración, refactorización, IntelliSense e integración con sistemas de control de versiones**.

Entre sus **características principales** encontramos: **soporte multilenguaje, terminal integrado, control de versiones Git incorporado, sistema de tareas personalizable y una interfaz de usuario moderna e intuitiva**.

## 6.1. Instalación y configuración

### 6.1.1. Descarga de JDK y Visual Studio Code

**Descarga de JDK:**
Si no tienes JDK instalada, puedes descargarla desde el sitio oficial de Oracle o utilizar OpenJDK:

- Oracle JDK: https://www.oracle.com/java/technologies/downloads/
- OpenJDK: https://openjdk.org/

**Descarga de Visual Studio Code:**
Puedes descargar VSCode desde su sitio oficial:

- Visual Studio Code: https://code.visualstudio.com/

### 6.1.2. Instalación de JDK y VSCode

**Instalación de JDK:**
Ejecuta el instalador descargado y sigue las instrucciones. Asegúrate de que la variable de entorno JAVA_HOME esté correctamente configurada.

**Instalación de VSCode:**
La instalación de VSCode es muy sencilla. Simplemente ejecuta el instalador descargado y sigue los pasos indicados.

### 6.1.3. Configuración de extensiones para Java

Una vez instalado VSCode, necesitarás instalar las extensiones necesarias para trabajar con Java:

**Extension Pack for Java** (Recomendada):
Esta extensión incluye todo lo necesario para el desarrollo Java:
- Language Support for Java by Red Hat
- Debugger for Java
- Test Runner for Java
- Maven for Java
- Project Manager for Java
- Visual Studio IntelliCode

Para instalarla:
1. Abre VSCode
2. Pulsa Ctrl+Shift+X para abrir el panel de extensiones
3. Busca "Extension Pack for Java"
4. Haz clic en "Install"

<!--![VSCode - Extensiones Java](/uf3/vscode_java_extensions.jpg)
-->

## 6.2. Configuración del entorno Java

### 6.2.1. Verificación de la configuración Java

Después de instalar las extensiones, VSCode detectará automáticamente la instalación de Java. Puedes verificar la configuración:

1. Pulsa Ctrl+Shift+P para abrir la paleta de comandos
2. Escribe "Java: Show Runtime" y selecciona la opción
3. Aparecerá una ventana mostrando las versiones de Java detectadas

### 6.2.2. Configuración manual (si es necesario)

Si VSCode no detecta automáticamente Java, puedes configurarlo manualmente:

1. Ve a File → Preferences → Settings (Ctrl+,)
2. Busca "java.home"
3. Añade la ruta a tu instalación de JDK

## 6.3. Creación de proyectos Java

### 6.3.1. Creación de un proyecto nuevo

Para crear un nuevo proyecto Java en VSCode:

1. Abre VSCode
2. Pulsa Ctrl+Shift+P para abrir la paleta de comandos
3. Escribe "Java: Create Java Project"
4. Selecciona el tipo de proyecto:
   - **No build tools**: Proyecto Java simple
   - **Maven**: Proyecto con Maven
   - **Gradle**: Proyecto con Gradle

<!--[VSCode - Crear proyecto Java](/uf3/vscode_create_project.jpg)
-->

### 6.3.2. Estructura del proyecto

Cuando creas un proyecto Java simple, VSCode genera la estructura siguiente:

```
MiProyecto/
├── .vscode/
│   └── settings.json
├── lib/
├── src/
│   └── App.java
└── README.md
```

La carpeta `src` contiene los archivos fuente Java, mientras que `lib` se utiliza para bibliotecas externas.

### 6.3.3. Creación de clases Java

Para crear una nueva clase Java:

1. Haz clic derecho sobre la carpeta `src`
2. Selecciona "New File"
3. Escribe el nombre de la clase con extensión `.java`
4. VSCode generará automáticamente la estructura básica de la clase

Alternativamente, puedes utilizar:
- Ctrl+Shift+P → "Java: Create Java Class"

## 6.4. Compilación y ejecución

### 6.4.1. Compilación automática

VSCode compila automáticamente los archivos Java cuando los guardas. Los archivos compilados (.class) se almacenan en una carpeta temporal que gestiona la extensión.

Para forzar una recompilación:
1. Pulsa Ctrl+Shift+P
2. Escribe "Java: Reload Projects"

### 6.4.2. Ejecución de aplicaciones

Para ejecutar una aplicación Java:

**Opción 1: Utilizar el botón Run**
- Abre el archivo Java con el método main
- Haz clic en "Run" que aparece sobre el método main

**Opción 2: Utilizar la paleta de comandos**
- Pulsa Ctrl+Shift+P
- Escribe "Java: Run Java"

**Opción 3: Utilizar el terminal integrado**
- Abre el terminal con Ctrl+`
- Navega hasta la carpeta del proyecto
- Ejecuta: `java -cp src NombreDeLaClase`

<!--![VSCode - Ejecutar Java](/uf3/vscode_run_java.jpg)
-->

### 6.4.3. Gestión de tareas

VSCode permite configurar tareas personalizadas para la compilación y ejecución:

1. Pulsa Ctrl+Shift+P
2. Escribe "Tasks: Configure Task"
3. Selecciona "Create tasks.json from template"
4. Elige "Others"

Ejemplo de archivo `tasks.json`:

```json
{
    "version": "2.0.0",
    "tasks": [
        {
            "label": "compile",
            "type": "shell",
            "command": "javac",
            "args": ["-d", "bin", "src/*.java"],
            "group": "build"
        },
        {
            "label": "run",
            "type": "shell",
            "command": "java",
            "args": ["-cp", "bin", "App"],
            "group": "test"
        }
    ]
}
```

## 6.5. Depuración (Debugging)

### 6.5.1. Configuración del debugger

VSCode incluye un potente debugger para Java. Para configurarlo:

1. Abre el archivo Java que quieres depurar
2. Pulsa F5 o ve a Run → Start Debugging
3. Selecciona "Java" como entorno de depuración

### 6.5.2. Puntos de ruptura (Breakpoints)

Para establecer puntos de ruptura:
- Haz clic a la izquierda del número de línea donde quieres parar la ejecución
- Aparecerá un punto rojo indicando el breakpoint

### 6.5.3. Controles de depuración

Una vez iniciada la depuración, tendrás acceso a los siguientes controles:

- **Continue** (F5): Continúa la ejecución hasta el siguiente breakpoint
- **Step Over** (F10): Ejecuta la línea actual sin entrar en las funciones
- **Step Into** (F11): Entra dentro de las funciones llamadas
- **Step Out** (Shift+F11): Sale de la función actual
- **Restart** (Ctrl+Shift+F5): Reinicia la sesión de depuración
- **Stop** (Shift+F5): Detiene la depuración

<!--![VSCode - Depuración](/uf3/vscode_debugging.jpg)
-->

### 6.5.4. Visualización de variables

Durante la depuración puedes:
- Ver las variables locales en el panel "Variables"
- Añadir expresiones de vigilancia en el panel "Watch"
- Inspeccionar la pila de llamadas en el panel "Call Stack"

## 6.6. Funcionalidades avanzadas

### 6.6.1. IntelliSense y autocompletado

VSCode ofrece:
- **Autocompletado inteligente** mientras escribes
- **Sugerencias de métodos** y propiedades
- **Documentación emergente** para clases y métodos
- **Detección de errores** en tiempo real

### 6.6.2. Refactorización

Puedes refactorizar el código fácilmente:
- **Rename Symbol** (F2): Cambia el nombre de una variable o método
- **Extract Method**: Extrae código a un método separado
- **Organize Imports**: Organiza y limpia las importaciones

### 6.6.3. Integración con Git

VSCode tiene integración nativa con Git:
- Visualiza cambios en los archivos
- Gestiona commits desde la interfaz
- Compara versiones del código
- Gestiona ramas

### 6.6.4. Extensiones útiles adicionales

- **Bracket Pair Colorizer**: Colorea los paréntesis coincidentes
- **GitLens**: Mejora la funcionalidad Git
- **Java Code Generators**: Genera código automáticamente
- **SonarLint**: Detecta errores y problemas de calidad del código

## 6.7. Ejemplo práctico

Creamos un ejemplo sencillo para probar todas las funcionalidades:

1. Crea un nuevo proyecto Java llamado "PrimerProyecto"
2. Crea una clase `Prueba.java` dentro de `src`
3. Añade el siguiente código:

::: tabs
== Java
```java
public class Prueba {
    public static void main(String[] args){
        System.out.println("¡Hola, mundo!");
    }
}
```
:::

4. Ejecuta y comprueba si aparece el mensaje en la terminal de resultados

Este ejemplo te permitirá probar la compilación, ejecución y depuración en VSCode.

VSCode es una herramienta muy potente para el desarrollo Java que, con la configuración adecuada, puede competir con IDE más pesados ofreciendo una experiencia de desarrollo fluida y eficiente.
