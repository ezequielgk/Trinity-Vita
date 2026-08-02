# Trinity Launcher
**Modulare grafische Umgebung für Minecraft Bedrock unter Linux**

![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)
![Qt](https://img.shields.io/badge/Qt-6.6+-success.svg)
![C++](https://img.shields.io/badge/C++-17-blue.svg)
![Flatpak](https://img.shields.io/badge/Packaging-Flatpak-flathub.svg)

Trinity Launcher ist eine moderne und modulare grafische Umgebung zum Ausführen und Verwalten von **Minecraft: Bedrock Edition** unter Linux. Entwickelt für den Betrieb sowohl nativ als auch in Flatpak, nutzt es **Qt6** und folgt einer sauberen Architektur auf Basis getrennter Bibliotheken (core und ui).

## Komponentenübersicht

### Trinchete
**Haupt-Launcher:** erweiterte Versionsverwaltung, Export/Import, Verknüpfungen.

### Trinito
**Inhaltsmanager:** Installation, Aktivierung/Deaktivierung und Löschung von Mods, Texturen, Packs und Welten.

## Technologien
**Entwicklungs-Stack**

| Komponente | Beschreibung | Version |
| :--- | :--- | :--- |
| **Sprache** | Standard-C++ | C++17 |
| **UI-Framework** | Qt Framework | Qt 6.6+ |
| **Build-System** | CMake | 3.17+ |
| **Compiler** | Clang | 16+ |
| **Packaging** | Flatpak | N/A |
| **Plattform** | Linux (x86_64, ARM64) | glibc |

## Test & Daten
**Datenpfade**

| Umgebung | Pfad |
| :--- | :--- |
| **Flatpak-Pfad** | `~/.var/app/com.trench.trinity.launcher/data/mcpelauncher/` |
| **Lokaler Pfad** | `~/.local/share/mcpelauncher/` |

## Lizenz
Trinity Launcher wird unter der **BSD-3-Clause-Lizenz** verteilt. Den vollständigen Text findest du unter [Über > Lizenz](../../../about/license.md).
