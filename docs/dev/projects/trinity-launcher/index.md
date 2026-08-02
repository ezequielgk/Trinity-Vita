# Trinity Launcher
**Modular graphical environment for Minecraft Bedrock on Linux**

![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)
![Qt](https://img.shields.io/badge/Qt-6.6+-success.svg)
![C++](https://img.shields.io/badge/C++-17-blue.svg)
![Flatpak](https://img.shields.io/badge/Packaging-Flatpak-flathub.svg)

Trinity Launcher is a modern and modular graphical environment to run and manage **Minecraft: Bedrock Edition** on Linux. Designed to work both natively and inside Flatpak, it uses **Qt6** and follows a clean architecture based on separate libraries (core and ui).

## Components Overview

### Trinchete
**Main launcher:** advanced version management, export/import, shortcuts.

### Trinito
**Content manager:** installation, activation/deactivation, and deletion of mods, textures, packs, and worlds.

## Technologies
**Development Stack**

| Component | Description | Version |
| :--- | :--- | :--- |
| **Language** | Standard C++ | C++17 |
| **UI Framework** | Qt Framework | Qt 6.6+ |
| **Build System** | CMake | 3.17+ |
| **Compiler** | Clang | 16+ |
| **Packaging** | Flatpak | N/A |
| **Platform** | Linux (x86_64, ARM64) | glibc |

## Testing & Data
**Data paths**

| Environment | Path |
| :--- | :--- |
| **Flatpak Path** | `~/.var/app/com.trench.trinity.launcher/data/mcpelauncher/` |
| **Local Path** | `~/.local/share/mcpelauncher/` |

## License
Trinity Launcher is distributed under the **BSD 3-Clause License**. See the full text in [About > License](../../../about/license.md).
