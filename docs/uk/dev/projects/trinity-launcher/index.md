# Trinity Launcher
**Модульне графічне середовище для Minecraft Bedrock на Linux**

![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)
![Qt](https://img.shields.io/badge/Qt-6.6+-success.svg)
![C++](https://img.shields.io/badge/C++-17-blue.svg)
![Flatpak](https://img.shields.io/badge/Packaging-Flatpak-flathub.svg)

Trinity Launcher — сучасне модульне графічне середовище для запуску та керування **Minecraft: Bedrock Edition** на Linux. Розроблений для роботи як у нативному режимі, так і всередині Flatpak, він використовує **Qt6** і дотримується чистої архітектури на основі окремих бібліотек (core та ui).

## Огляд компонентів

### Trinchete
**Основний лаунчер:** розширене керування версіями, експорт/імпорт, ярлики.

### Trinito
**Менеджер контенту:** встановлення, активація/деактивація та видалення модів, текстур, паків і світів.

## Технології
**Стек розробки**

| Компонент | Опис | Версія |
| :--- | :--- | :--- |
| **Мова** | Стандартний C++ | C++17 |
| **UI-фреймворк** | Qt Framework | Qt 6.6+ |
| **Система збірки** | CMake | 3.17+ |
| **Компілятор** | Clang | 16+ |
| **Пакування** | Flatpak | N/A |
| **Платформа** | Linux (x86_64, ARM64) | glibc |

## Тестування та дані
**Шляхи до даних**

| Середовище | Шлях |
| :--- | :--- |
| **Шлях Flatpak** | `~/.var/app/com.trench.trinity.launcher/data/mcpelauncher/` |
| **Локальний шлях** | `~/.local/share/mcpelauncher/` |

## Ліцензія
Trinity Launcher поширюється під **ліцензією BSD 3-Clause**. Повний текст дивіться в розділі [Про нас > Ліцензія](../../../about/license.md).
