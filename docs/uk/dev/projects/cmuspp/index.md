# CMUS++
**Невеликий, швидкий і потужний консольний музичний плеєр, написаний на C++17**

![License](https://img.shields.io/badge/License-MIT-blue.svg)
![Language](https://img.shields.io/badge/Language-C%2B%2B17-informational.svg)
![Platform](https://img.shields.io/badge/Platform-Linux_macOS_Windows-9cf.svg)

[Відвідати репозиторій](https://github.com/Ars-byte/cmuspp)

CMUS++ — надлегкий термінальний музичний плеєр із керуванням з клавіатури, написаний на C++17. Він блискавично швидкий, не має графічних залежностей і рендериться без мерехтіння.

## Можливості

- **Формати:** MP3, FLAC, WAV, OGG, OPUS, AIFF.
- **Обкладинки альбомів:** Вбудована обкладинка для MP3, FLAC, OGG/OPUS, а також файли `cover.jpg`/`cover.png`.
- **Тексти пісень:** Синхронізовані файли `.lrc`, а також тексти, вбудовані в теги (USLT/LYRICS), на 100% офлайн.
- **Крос-платформенність:** Linux (ALSA), macOS (CoreAudio), Windows (WinMM).
- **Налаштовуваність:** 86 вбудованих тем плюс підтримка користувацьких XML-тем.
- **Швидкість:** Нульовий час завантаження, ефективне декодування та рендеринг без мерехтіння.

## Обкладинки альбомів

CMUS++ автоматично видобуває та відображає обкладинки альбомів:

- **MP3:** фрейм APIC (ID3v2.2/2.3/2.4)
- **FLAC:** `METADATA_BLOCK_PICTURE`
- **OGG / OPUS:** `METADATA_BLOCK_PICTURE` у коментарях Vorbis
- **Резервний варіант:** `cover.jpg`, `cover.png`, `folder.jpg` тощо в тому самому каталозі

### Сумісні термінали

- **Kitty / WezTerm / ghostty / iTerm2:** Нативні зображення (протокол Kitty)
- **Інші термінали** (Alacritty, GNOME тощо): Рендеринг ANSI напівблоками (`▄`) із справжнім кольором

## Тексти пісень

Натисніть `l` у плеєрі, щоб переглянути текст пісні в повноекранному режимі (ховає список). На 100% офлайн, без мережі та зовнішніх сервісів. Тексти шукаються так:

- **Синхронізовані `.lrc`** поруч із піснею (наприклад, `song.mp3` → `song.lrc`). Поточний рядок виділяється та рухається синхронно з відтворенням.
- **Вбудовані тексти** у власних тегах файлу (фрейм USLT в MP3, поле LYRICS у FLAC/OGG). Відображаються як статичний текст і прокручуються за допомогою ↑/↓.

Приклад формату `.lrc`:

```
[ti:Title]
[ar:Artist]
[00:12.50]First line
[00:24.00]Second line
```

Підтримуються часові мітки `[mm:ss]` / `[mm:ss.xx]`, кілька маркерів у рядку (`[00:12][00:24]text`) і тег `[offset:±ms]`.

## Керування

CMUS++ спроєктований для повного керування без миші.

| Клавіша | Дія |
| --- | --- |
| ↑ / ↓ (або k/j) | Переміщення по списку |
| Enter | Відтворити / увійти в папку |
| Пробіл | Пауза / Продовжити |
| ← / → (або h) | Назад 5 с / Вперед 5 с (у браузері: на рівень вище) |
| n / p | Наступна / попередня пісня |
| + / - | Гучність вище / нижче |
| s | Перемкнути перемішування |
| r | Перемкнути повтор |
| l | Показати/сховати текст (.lrc або вбудований у теги) у повноекранному режимі |
| / | Пошук пісні в поточній папці (вводьте для фільтрації, Enter для відтворення) |
| t | Змінити колірну тему |
| o | Відкрити файловий браузер |
| a | Переглянути інформацію (Про програму) |
| q | Вихід |

## Користувацькі теми

Натисніть `t` у застосунку, щоб змінити тему. Ви можете створювати власні теми, додавши файли `.xml` у папку `themes/` (поруч із виконуваним файлом) або в `~/.config/cmuspp/themes/`.

Приклад структури (`themes/my-theme.xml`):

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

Нові теми виявляються автоматично після перезапуску застосунку.

## Швидкий старт

Хочете спробувати? Завантажте попередньо зібраний бінарник із [релізу v1.1.0](https://github.com/Ars-byte/cmuspp/releases/tag/v1.1.0) (Linux x86_64):

```sh
wget https://github.com/Ars-byte/cmuspp/releases/download/v1.1.0/cmuspp-linux-x86_64
chmod +x cmuspp-linux-x86_64
./cmuspp-linux-x86_64
```

Поруч із виконуваним файлом потрібна папка `themes/` (із репозиторію).

## Збірка з вихідного коду

### Залежності

Вам знадобиться компілятор C++ і бібліотеки `libsndfile`, `libjpeg` та `libpng` (плюс ALSA на Linux).

- **Ubuntu / Debian:** `sudo apt install g++ libsndfile1-dev libasound2-dev libjpeg-dev libpng-dev`
- **Arch Linux:** `sudo pacman -S gcc libsndfile alsa-lib libjpeg-turbo libpng`
- **macOS:** `brew install libsndfile jpeg libpng` (потрібен Homebrew)

### Компіляція

Клонуйте репозиторій і використовуйте наданий скрипт автозбірки:

```sh
chmod +x bootstrap.sh
./bootstrap.sh
./cmuspp
```

### NixOS

Додайте пакет із flake:

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

Або використовуйте пряму команду: `nix profile add github:mikuri12/my-lazy-nixos-pkgs#cmuspp`

## Ліцензія

MIT — не соромтеся змінювати та використовувати код.
