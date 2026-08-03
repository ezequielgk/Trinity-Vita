# Установка Trinity Launcher
**Полное руководство для систем Linux**

Trinity Launcher — проект, управляемый сообществом, распространяемый в первую очередь как пакет **Flatpak**, чтобы обеспечить максимальную совместимость и безопасность в экосистеме Linux.

::: tip Перед началом
Убедитесь, что **Flatpak** установлен в вашей системе. Это гарантирует, что лаунчер и его зависимости (например, поддерживаемые сообществом движки Minecraft Bedrock) работают в стабильной изолированной среде.

Если у вас его ещё нет, посетите официальное руководство по настройке: [Перейти на Flatpak.org](https://flatpak.org/setup/)
:::

## Установка Trinity Launcher
Выберите метод, который лучше всего подходит для вашего рабочего процесса.

### Способ A: Из репозитория Testing-Beta (РЕКОМЕНДУЕТСЯ)
Это предпочтительный способ для участников сообщества, которые хотят новейшие функции и автоматические обновления прямо из нашего конвейера разработки.

**Выполните эти команды по порядку в терминале:**

1. **Удалите репозиторий Trinity (если у вас была старая версия):**
    ```bash
    flatpak remote-delete trinity
    ```

2. **Добавьте репозиторий Trinity:**
    ```bash
    flatpak remote-add trinity https://github.com/Trinity-LA/Trinity-Launcher/releases/download/flatpak/com.trench.trinity.launcher.flatpakrepo
    ```

3. **Установите зависимости (runtime KDE и Qt WebEngine):**
    ```bash
    flatpak install flathub org.kde.Platform//6.10 io.qt.qtwebengine.BaseApp//6.10
    ```

4. **Установите Trinity Launcher:**
    ```bash
    flatpak install com.trench.trinity.launcher
    ```

> **Преимущества:** Прямой доступ к последним бета-версиям и автоматические фоновые обновления.

### Способ B: Из магазина программного обеспечения

Если вы предпочитаете графический интерфейс:

1. **Удалите старый репозиторий (если применимо):**
    ```bash
    flatpak remote-delete trinity
    ```

2. Сначала добавьте репозиторий:
    ```bash
    flatpak remote-add trinity https://github.com/Trinity-LA/Trinity-Launcher/releases/download/flatpak/com.trench.trinity.launcher.flatpakrepo
    ```

3. Найдите **«Trinity Launcher»** в вашем магазине программного обеспечения (GNOME Software, Discover).
    > *Примечание: После добавления репозитория магазин, возможно, потребуется перезапустить.*

### Способ C: AppImage (Beta — Портативный)

Идеально для пользователей, предпочитающих ручное управление без менеджеров пакетов.

1. **Скачать:**  
   <MinecraftButton link="https://github.com/Trinity-LA/Trinity-Launcher/releases/download/latest/Trinity_Launcher-x86_64.AppImage" label="Скачать AppImage (x86_64)" />
   <MinecraftButton link="https://github.com/Trinity-LA/Trinity-Launcher/releases/download/latest/Trinity_Launcher-aarch64.AppImage" label="Скачать AppImage (ARM)" />

2. **Установите Gear Level:** Найдите «Gear Level» в своём магазине приложений и установите его.
3. **Открыть с помощью Gear Level:** Правый клик по файлу `.AppImage` -> Открыть с помощью -> **Gear Level**.
4. **Разблокировать и интегрировать:** Нажмите **«Unlock»**, чтобы сделать его исполняемым, и **«Add to apps menu»** для лёгкого доступа.

## Удалённый вход (только AppImage)

::: warning Локальный vs удалённый
Этот шаг **обязателен только** для версии **AppImage**, чтобы включить аутентификацию через учётную запись Microsoft.
:::

### Шаг 1: Включение в настройках
1. Откройте Trinity и перейдите в **Настройки**.
2. Перейдите в **Настройки аккаунта** и включите **Удалённый вход**.
3. Полностью **перезапустите** игру.

### Шаг 2: Аутентификация в браузере
1. Перейдите на [microsoft.com/link](https://microsoft.com/link).
2. Введите **код**, показанный в игре.
3. Завершите вход в браузере.
4. Закройте диалог в игре.

---

## Запуск Trinity Launcher (Flatpak)

- **Из меню:** Найдите «Trinity Launcher» в панели приложений.
- **Из терминала:**
    ```bash
    flatpak run com.trench.trinity.launcher
    ```

---

### Метод D: NixOS

Для пользователей NixOS и других систем на основе Nix прочитайте официальные шаги:

- [Шаги для запуска на NixOS или использования Nix](https://codeberg.org/javiercplus/Trinity-Launcher-NIXOS/src/branch/main/)

### Метод E: macOS (Beta - DMG)

Скачайте и распакуйте `trinity-macos-dmg`:

- [Нажмите, чтобы скачать DMG x86_64](https://github.com/Trinity-LA/Trinity-Launcher/releases/download/2.6-beta/trinity-macos-x86_64-dmg.zip)
- [Нажмите, чтобы скачать DMG ARM](https://github.com/Trinity-LA/Trinity-Launcher/releases/download/2.6-beta/trinity-macos-arm64-dmg.zip)

Переместите **Trinity.app** в папку **Программы**, а затем запустите его из терминала:

```sh
cd /Applications/Trinity.app/Contents/MacOS/
./trinity-bin
```

#### Решение проблем

Если вы получили сообщение «Trinity not opened; Apple could not verify Trinity is free of malware», перейдите в **Системные настройки > Конфиденциальность и безопасность**, прокрутите вниз — вы должны увидеть «Trinity was locked» с опцией **Всё равно открыть**. Нажмите **Всё равно открыть**.

- Убедитесь, что приложение находится в папке «Программы».

<CommunityCard />
