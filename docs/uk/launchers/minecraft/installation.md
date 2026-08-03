# Встановлення Trinity Launcher
**Повний посібник для систем Linux**

Trinity Launcher — проєкт, керований спільнотою, який поширюється насамперед як пакет **Flatpak**, щоб забезпечити максимальну сумісність і безпеку в екосистемі Linux.

::: tip Перед початком
Переконайтеся, що **Flatpak** встановлено у вашій системі. Це гарантує, що лаунчер і його залежності (наприклад, підтримувані спільнотою рушії Minecraft Bedrock) працюють у стабільному ізольованому середовищі.

Якщо у вас його ще немає, відвідайте офіційний посібник із налаштування: [Перейти на Flatpak.org](https://flatpak.org/setup/)
:::

## Встановлення Trinity Launcher
Оберіть метод, який найкраще підходить для вашого робочого процесу.

### Спосіб A: З репозиторію Testing-Beta (РЕКОМЕНДОВАНО)
Це найкращий спосіб для учасників спільноти, які хочуть новітні функції та автоматичні оновлення прямо з нашого конвеєра розробки.

**Виконайте ці команди по порядку в терміналі:**

1. **Видаліть репозиторій Trinity (якщо у вас була стара версія):**
    ```bash
    flatpak remote-delete trinity
    ```

2. **Додайте репозиторій Trinity:**
    ```bash
    flatpak remote-add trinity https://github.com/Trinity-LA/Trinity-Launcher/releases/download/flatpak/com.trench.trinity.launcher.flatpakrepo
    ```

3. **Встановіть залежності (runtime KDE та Qt WebEngine):**
    ```bash
    flatpak install flathub org.kde.Platform//6.10 io.qt.qtwebengine.BaseApp//6.10
    ```

4. **Встановіть Trinity Launcher:**
    ```bash
    flatpak install com.trench.trinity.launcher
    ```

> **Переваги:** Прямий доступ до останніх бета-версій і автоматичні фонові оновлення.

### Спосіб B: З магазину програмного забезпечення

Якщо ви віддаєте перевагу графічному інтерфейсу:

1. **Видаліть старий репозиторій (якщо застосовно):**
    ```bash
    flatpak remote-delete trinity
    ```

2. Спочатку додайте репозиторій:
    ```bash
    flatpak remote-add trinity https://github.com/Trinity-LA/Trinity-Launcher/releases/download/flatpak/com.trench.trinity.launcher.flatpakrepo
    ```

3. Знайдіть **«Trinity Launcher»** у вашому магазині програмного забезпечення (GNOME Software, Discover).
    > *Примітка: Після додавання репозиторію магазин, можливо, доведеться перезапустити.*

### Спосіб C: AppImage (Beta — Портативний)

Ідеально для користувачів, які віддають перевагу ручному керуванню без менеджерів пакетів.

1. **Завантажити:**  
   <MinecraftButton link="https://github.com/Trinity-LA/Trinity-Launcher/releases/download/latest/Trinity_Launcher-x86_64.AppImage" label="Завантажити AppImage (x86_64)" />
   <MinecraftButton link="https://github.com/Trinity-LA/Trinity-Launcher/releases/download/latest/Trinity_Launcher-aarch64.AppImage" label="Завантажити AppImage (ARM)" />

2. **Встановіть Gear Level:** Знайдіть «Gear Level» у своєму магазині застосунків і встановіть його.
3. **Відкрити за допомогою Gear Level:** Правий клік по файлу `.AppImage` -> Відкрити за допомогою -> **Gear Level**.
4. **Розблокувати та інтегрувати:** Натисніть **«Unlock»**, щоб зробити його виконуваним, і **«Add to apps menu»** для легкого доступу.

## Віддалений вхід (тільки AppImage)

::: warning Локально чи віддалено
Цей крок **потрібен лише** для версії **AppImage**, щоб увімкнути автентифікацію через обліковий запис Microsoft.
:::

### Крок 1: Увімкнення в налаштуваннях
1. Відкрийте Trinity і перейдіть у **Налаштування**.
2. Перейдіть до **Налаштувань акаунта** та увімкніть **Віддалений вхід**.
3. Повністю **перезапустіть** гру.

### Крок 2: Автентифікація в браузері
1. Перейдіть на [microsoft.com/link](https://microsoft.com/link).
2. Введіть **код**, показаний у грі.
3. Завершіть вхід у браузері.
4. Закрийте діалог у грі.

---

## Запуск Trinity Launcher (Flatpak)

- **З меню:** Знайдіть «Trinity Launcher» на панелі застосунків.
- **З терміналу:**
    ```bash
    flatpak run com.trench.trinity.launcher
    ```

---

### Метод D: NixOS

Для користувачів NixOS та інших систем на основі Nix прочитайте офіційні кроки:

- [Кроки для запуску на NixOS або використання Nix](https://codeberg.org/javiercplus/Trinity-Launcher-NIXOS/src/branch/main/)

### Метод E: macOS (Beta - DMG)

Завантажте та розпакуйте `trinity-macos-dmg`:

- [Натисніть, щоб завантажити DMG x86_64](https://github.com/Trinity-LA/Trinity-Launcher/releases/download/2.6-beta/trinity-macos-x86_64-dmg.zip)
- [Натисніть, щоб завантажити DMG ARM](https://github.com/Trinity-LA/Trinity-Launcher/releases/download/2.6-beta/trinity-macos-arm64-dmg.zip)

Перемістіть **Trinity.app** у папку **Програми**, а потім запустіть його з термінала:

```sh
cd /Applications/Trinity.app/Contents/MacOS/
./trinity-bin
```

#### Усунення проблем

Якщо ви отримали повідомлення «Trinity not opened; Apple could not verify Trinity is free of malware», перейдіть у **Системні налаштування > Конфіденційність і безпека**, прокрутіть униз — ви повинні побачити «Trinity was locked» з опцією **Відкрити в будь-якому разі**. Натисніть **Відкрити в будь-якому разі**.

- Переконайтеся, що застосунок знаходиться в папці «Програми».

<CommunityCard />
