# Trinity Launcher
**Entorno gráfico modular para Minecraft Bedrock en Linux**

![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)
![Qt](https://img.shields.io/badge/Qt-6.6+-success.svg)
![C++](https://img.shields.io/badge/C++-17-blue.svg)
![Flatpak](https://img.shields.io/badge/Packaging-Flatpak-flathub.svg)

Trinity Launcher es un entorno gráfico moderno y modular para ejecutar y gestionar **Minecraft: Bedrock Edition** en Linux. Diseñado para funcionar tanto de forma nativa en el sistema como dentro de Flatpak, utiliza **Qt6** y sigue una arquitectura limpia basada en bibliotecas separadas (núcleo e interfaz de usuario).

## Visión general de componentes

### Trinchete
**Lanzador principal:** gestión avanzada de versiones, exportar/importar, accesos directos.

### Trinito
**Gestor de contenido:** instalación, activación/desactivación y eliminación de mods, texturas, packs y mundos.

## Tecnologías
**Stack de Desarrollo**

| Componente | Descripción | Versión |
| :--- | :--- | :--- |
| **Lenguaje** | C++ Estándar | C++17 |
| **Framework de UI** | Framework Qt | Qt 6.6+ |
| **Sistema de Construcción** | CMake | 3.17+ |
| **Compilador** | Clang | 16+ |
| **Empaquetado** | Flatpak | N/A |
| **Plataforma** | Linux (x86_64, ARM64) | glibc |

## Pruebas y Datos
**Rutas de datos**

| Entorno | Ruta |
| :--- | :--- |
| **Ruta Flatpak** | `~/.var/app/com.trench.trinity.launcher/data/mcpelauncher/` |
| **Ruta Local** | `~/.local/share/mcpelauncher/` |

## Licencia
Trinity Launcher se distribuye bajo la **Licencia BSD de 3 Cláusulas**. Consulta el texto completo en [Acerca de > Licencia](../../../about/license.md).
