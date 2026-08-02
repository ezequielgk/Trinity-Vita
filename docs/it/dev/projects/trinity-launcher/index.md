# Trinity Launcher
**Ambiente grafico modulare per Minecraft Bedrock su Linux**

![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)
![Qt](https://img.shields.io/badge/Qt-6.6+-success.svg)
![C++](https://img.shields.io/badge/C++-17-blue.svg)
![Flatpak](https://img.shields.io/badge/Packaging-Flatpak-flathub.svg)

Trinity Launcher è un ambiente grafico moderno e modulare per eseguire e gestire **Minecraft: Bedrock Edition** su Linux. Progettato per funzionare sia nativamente che all'interno di Flatpak, usa **Qt6** e segue un'architettura pulita basata su librerie separate (core e ui).

## Panoramica dei componenti

### Trinchete
**Launcher principale:** gestione avanzata delle versioni, export/import, scorciatoie.

### Trinito
**Gestore dei contenuti:** installazione, attivazione/disattivazione ed eliminazione di mod, texture, pack e mondi.

## Tecnologie
**Stack di sviluppo**

| Componente | Descrizione | Versione |
| :--- | :--- | :--- |
| **Linguaggio** | C++ standard | C++17 |
| **Framework UI** | Qt Framework | Qt 6.6+ |
| **Sistema di build** | CMake | 3.17+ |
| **Compilatore** | Clang | 16+ |
| **Packaging** | Flatpak | N/A |
| **Piattaforma** | Linux (x86_64, ARM64) | glibc |

## Test e dati
**Percorsi dei dati**

| Ambiente | Percorso |
| :--- | :--- |
| **Percorso Flatpak** | `~/.var/app/com.trench.trinity.launcher/data/mcpelauncher/` |
| **Percorso locale** | `~/.local/share/mcpelauncher/` |

## Licenza
Trinity Launcher è distribuito sotto la **licenza BSD 3-Clause**. Vedi il testo completo in [Chi siamo > Licenza](../../../about/license.md).
