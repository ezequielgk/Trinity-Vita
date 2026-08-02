# CMUS++
**Небольшой, быстрый и мощный консольный музыкальный плеер, написанный на C++17**

![License](https://img.shields.io/badge/License-MIT-blue.svg)
![Language](https://img.shields.io/badge/Language-C%2B%2B17-informational.svg)
![Platform](https://img.shields.io/badge/Platform-Linux_macOS_Windows-9cf.svg)

[Посетить репозиторий](https://github.com/Ars-byte/cmuspp)

CMUS++ — сверхлёгкий терминальный музыкальный плеер с управлением с клавиатуры, написанный на C++17. Он молниеносно быстрый, не имеет графических зависимостей и рендерится без мерцания.

## Возможности

- **Форматы:** MP3, FLAC, WAV, OGG, OPUS, AIFF.
- **Обложки альбомов:** Встроенная обложка для MP3, FLAC, OGG/OPUS, а также файлы `cover.jpg`/`cover.png`.
- **Тексты песен:** Синхронизированные файлы `.lrc`, а также тексты, встроенные в теги (USLT/LYRICS), 100% офлайн.
- **Кроссплатформенность:** Linux (ALSA), macOS (CoreAudio), Windows (WinMM).
- **Настраиваемость:** 86 встроенных тем плюс поддержка пользовательских XML-тем.
- **Быстрый:** Нулевое время загрузки, эффективное декодирование и рендеринг без мерцания.

## Обложки альбомов

CMUS++ автоматически извлекает и отображает обложки альбомов:

- **MP3:** фрейм APIC (ID3v2.2/2.3/2.4)
- **FLAC:** `METADATA_BLOCK_PICTURE`
- **OGG / OPUS:** `METADATA_BLOCK_PICTURE` в комментариях Vorbis
- **Резервный вариант:** `cover.jpg`, `cover.png`, `folder.jpg` и т. д. в том же каталоге

### Совместимые терминалы

- **Kitty / WezTerm / ghostty / iTerm2:** Нативные изображения (протокол Kitty)
- **Другие терминалы** (Alacritty, GNOME и др.): Рендеринг ANSI полублоками (`▄`) с настоящим цветом

## Тексты песен

Нажмите `l` в плеере, чтобы просмотреть текст песни в полноэкранном режиме (скрывает список). 100% офлайн, без сети и внешних сервисов. Тексты ищутся следующим образом:

- **Синхронизированные `.lrc`** рядом с песней (например, `song.mp3` → `song.lrc`). Текущая строка выделяется и движется синхронно с воспроизведением.
- **Встроенные тексты** в собственных тегах файла (фрейм USLT в MP3, поле LYRICS в FLAC/OGG). Отображаются как статичный текст и прокручиваются с помощью ↑/↓.

Пример формата `.lrc`:

```
[ti:Title]
[ar:Artist]
[00:12.50]First line
[00:24.00]Second line
```

Поддерживаются временные метки `[mm:ss]` / `[mm:ss.xx]`, несколько маркеров в строке (`[00:12][00:24]text`) и тег `[offset:±ms]`.

## Управление

CMUS++ спроектирован для полного управления без мыши.

| Клавиша | Действие |
| --- | --- |
| ↑ / ↓ (или k/j) | Перемещение по списку |
| Enter | Воспроизвести / войти в папку |
| Пробел | Пауза / Продолжить |
| ← / → (или h) | Назад 5 с / Вперёд 5 с (в браузере: на уровень выше) |
| n / p | Следующая / предыдущая песня |
| + / - | Громкость выше / ниже |
| s | Переключить перемешивание |
| r | Переключить повтор |
| l | Показать/скрыть текст (.lrc или встроенный в теги) в полноэкранном режиме |
| / | Поиск песни в текущей папке (вводите для фильтрации, Enter для воспроизведения) |
| t | Сменить цветовую тему |
| o | Открыть файловый браузер |
| a | Просмотреть информацию (О программе) |
| q | Выход |

## Пользовательские темы

Нажмите `t` в приложении, чтобы сменить тему. Вы можете создавать собственные темы, добавив файлы `.xml` в папку `themes/` (рядом с исполняемым файлом) или в `~/.config/cmuspp/themes/`.

Пример структуры (`themes/my-theme.xml`):

```xml
<?xml version="1.0" encoding="UTF-8"?>
<theme name="My Custom Theme">
  <!-- Text colors (Bright -> Dark) -->
  <fg0 r="248" g="248" b="242"/> <fg1 r="215" g="210" b="195"/>
  <fg2 r="117" g="113" b="94"/>  <fg3 r="75"  g="71"  b="60"/>

  <!-- Accents -->
  <acc  r="166" g="226" b="46"/> <warn r="230" g="219" b="116"/>

  <!-- Backgrounds (bgr/bgg/bgb = background | fgr/fgg/fgb = text) -->
  <bghdr  bgr="39" bgg="40" bgb="34" fgr="102" fgg="217" fgb="239"/>
  <bgsel  bgr="73" bgg="72" bgb="62" fgr="248" fgg="248" fgb="242"/>
  <bgplay bgr="30" bgg="44" bgb="18" fgr="166" fgg="226" fgb="46"/>
  <bgstat bgr="29" bgg="29" bgb="24" fgr="117" fgg="113" fgb="94"/>
</theme>
```

Новые темы обнаруживаются автоматически после перезапуска приложения.

## Быстрый старт

Хотите попробовать? Скачайте предварительно собранный бинарник из [релиза v1.1.0](https://github.com/Ars-byte/cmuspp/releases/tag/v1.1.0) (Linux x86_64):

```sh
wget https://github.com/Ars-byte/cmuspp/releases/download/v1.1.0/cmuspp-linux-x86_64
chmod +x cmuspp-linux-x86_64
./cmuspp-linux-x86_64
```

Рядом с исполняемым файлом нужна папка `themes/` (из репозитория).

## Сборка из исходного кода

### Зависимости

Вам понадобится компилятор C++ и библиотеки `libsndfile`, `libjpeg` и `libpng` (плюс ALSA на Linux).

- **Ubuntu / Debian:** `sudo apt install g++ libsndfile1-dev libasound2-dev libjpeg-dev libpng-dev`
- **Arch Linux:** `sudo pacman -S gcc libsndfile alsa-lib libjpeg-turbo libpng`
- **macOS:** `brew install libsndfile jpeg libpng` (требуется Homebrew)

### Компиляция

Клонируйте репозиторий и используйте прилагаемый скрипт автобилда:

```sh
chmod +x bootstrap.sh
./bootstrap.sh
./cmuspp
```

### NixOS

Добавьте пакет из flake:

```nix
inputs = {
  my-pkgs.url = "github:mikuri12/my-lazy-nixos-pkgs";
};

{ inputs, pkgs, system, ... }:
{
  environment.systemPackages = [
    inputs.my-pkgs.packages.${system}.cmuspp
  ];
}
```

Или используйте прямую команду: `nix profile add github:mikuri12/my-lazy-nixos-pkgs#cmuspp`

## Лицензия

MIT — не стесняйтесь изменять и использовать код.
