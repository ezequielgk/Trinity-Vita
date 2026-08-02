# Trinity Launcher
**Модульная графическая среда для Minecraft Bedrock на Linux**

![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)
![Qt](https://img.shields.io/badge/Qt-6.6+-success.svg)
![C++](https://img.shields.io/badge/C++-17-blue.svg)
![Flatpak](https://img.shields.io/badge/Packaging-Flatpak-flathub.svg)

Trinity Launcher — современная модульная графическая среда для запуска и управления **Minecraft: Bedrock Edition** на Linux. Разработан для работы как в нативном режиме, так и внутри Flatpak, использует **Qt6** и следует чистой архитектуре на основе раздельных библиотек (core и ui).

## Обзор компонентов

### Trinchete
**Основной лаунчер:** расширенное управление версиями, экспорт/импорт, ярлыки.

### Trinito
**Менеджер контента:** установка, активация/деактивация и удаление модов, текстур, паков и миров.

## Технологии
**Стек разработки**

| Компонент | Описание | Версия |
| :--- | :--- | :--- |
| **Язык** | Стандартный C++ | C++17 |
| **UI-фреймворк** | Qt Framework | Qt 6.6+ |
| **Система сборки** | CMake | 3.17+ |
| **Компилятор** | Clang | 16+ |
| **Упаковка** | Flatpak | N/A |
| **Платформа** | Linux (x86_64, ARM64) | glibc |

## Тестирование и данные
**Пути к данным**

| Среда | Путь |
| :--- | :--- |
| **Путь Flatpak** | `~/.var/app/com.trench.trinity.launcher/data/mcpelauncher/` |
| **Локальный путь** | `~/.local/share/mcpelauncher/` |

## Лицензия
Trinity Launcher распространяется под **лицензией BSD 3-Clause**. Полный текст см. в разделе [О нас > Лицензия](../../../about/license.md).
