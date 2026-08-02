# Trinity Launcher
**Ambiente gráfico modular para Minecraft Bedrock no Linux**

![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)
![Qt](https://img.shields.io/badge/Qt-6.6+-success.svg)
![C++](https://img.shields.io/badge/C++-17-blue.svg)
![Flatpak](https://img.shields.io/badge/Packaging-Flatpak-flathub.svg)

O Trinity Launcher é um ambiente gráfico moderno e modular para executar e gerenciar o **Minecraft: Bedrock Edition** no Linux. Projetado para funcionar tanto nativamente quanto dentro do Flatpak, ele usa **Qt6** e segue uma arquitetura limpa baseada em bibliotecas separadas (core e ui).

## Visão Geral dos Componentes

### Trinchete
**Lançador principal:** gerenciamento avançado de versões, exportação/importação, atalhos.

### Trinito
**Gerenciador de conteúdo:** instalação, ativação/desativação e exclusão de mods, texturas, packs e mundos.

## Tecnologias
**Stack de Desenvolvimento**

| Componente | Descrição | Versão |
| :--- | :--- | :--- |
| **Linguagem** | C++ padrão | C++17 |
| **Framework de UI** | Qt Framework | Qt 6.6+ |
| **Sistema de Build** | CMake | 3.17+ |
| **Compilador** | Clang | 16+ |
| **Empacotamento** | Flatpak | N/A |
| **Plataforma** | Linux (x86_64, ARM64) | glibc |

## Teste e Dados
**Caminhos de dados**

| Ambiente | Caminho |
| :--- | :--- |
| **Caminho Flatpak** | `~/.var/app/com.trench.trinity.launcher/data/mcpelauncher/` |
| **Caminho Local** | `~/.local/share/mcpelauncher/` |

## Licença
O Trinity Launcher é distribuído sob a **Licença BSD de 3 Cláusulas**. Consulte o texto completo em [Sobre > Licença](../../../about/license.md).
