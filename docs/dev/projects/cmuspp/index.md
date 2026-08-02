# CMUS++
**Small, fast and powerful console music player written in C++17**

![License](https://img.shields.io/badge/License-MIT-blue.svg)
![Language](https://img.shields.io/badge/Language-C%2B%2B17-informational.svg)
![Platform](https://img.shields.io/badge/Platform-Linux_macOS_Windows-9cf.svg)

[Visit repository](https://github.com/Ars-byte/cmuspp)

CMUS++ is an ultra-lightweight, keyboard-driven terminal music player written in C++17. It is blazing fast, has zero graphical dependencies, and renders without flicker.

## Features

- **Formats:** MP3, FLAC, WAV, OGG, OPUS, AIFF.
- **Album Art:** Embedded cover art for MP3, FLAC, OGG/OPUS plus `cover.jpg`/`cover.png` files.
- **Lyrics:** Synchronized `.lrc` files plus lyrics embedded in tags (USLT/LYRICS), 100% offline.
- **Cross-platform:** Linux (ALSA), macOS (CoreAudio), Windows (WinMM).
- **Customizable:** 86 built-in themes plus support for custom XML themes.
- **Fast:** Zero load times, efficient decoding, and flicker-free rendering.

## Album Art

CMUS++ extracts and displays album art automatically:

- **MP3:** APIC frame (ID3v2.2/2.3/2.4)
- **FLAC:** `METADATA_BLOCK_PICTURE`
- **OGG / OPUS:** `METADATA_BLOCK_PICTURE` in Vorbis comments
- **Fallback:** `cover.jpg`, `cover.png`, `folder.jpg`, etc. in the same directory

### Compatible terminals

- **Kitty / WezTerm / ghostty / iTerm2:** Native image (Kitty protocol)
- **Other terminals** (Alacritty, GNOME, etc.): ANSI half-block (`▄`) rendering with true-color

## Lyrics

Press `l` inside the player to view the song lyrics in full screen (hides the list). 100% offline, no network or external services. Lyrics are resolved as follows:

- **Synchronized `.lrc`** next to the song (e.g. `song.mp3` → `song.lrc`). The current line is highlighted and advances in sync with playback.
- **Embedded lyrics** in the file's own tags (USLT frame in MP3, LYRICS field in FLAC/OGG). Shown as static text and navigated with ↑/↓.

Example `.lrc` format:

```
[ti:Title]
[ar:Artist]
[00:12.50]First line
[00:24.00]Second line
```

It supports `[mm:ss]` / `[mm:ss.xx]` timestamps, multiple markers per line (`[00:12][00:24]text`), and the `[offset:±ms]` tag.

## Controls

CMUS++ is designed to be used entirely without a mouse.

| Key | Action |
| --- | --- |
| ↑ / ↓ (or k/j) | Navigate the list |
| Enter | Play / Enter folder |
| Space | Pause / Resume |
| ← / → (or h) | Back 5s / Forward 5s (in browser: go up a level) |
| n / p | Next / Previous song |
| + / - | Volume up / down |
| s | Toggle Shuffle |
| r | Toggle Repeat |
| l | Show/hide lyrics (.lrc or embedded in tags) full screen |
| / | Search a song in the current folder (type to filter, Enter to play) |
| t | Change color theme |
| o | Open file browser |
| a | View information (About) |
| q | Quit |

## Custom Themes

Press `t` inside the app to change themes. You can create your own themes by adding `.xml` files in the `themes/` folder (next to the executable) or in `~/.config/cmuspp/themes/`.

Example structure (`themes/my-theme.xml`):

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

New themes are detected automatically when the app restarts.

## Quick Start

Want to try it out? Download the precompiled binary from the [v1.1.0 release](https://github.com/Ars-byte/cmuspp/releases/tag/v1.1.0) (Linux x86_64):

```sh
wget https://github.com/Ars-byte/cmuspp/releases/download/v1.1.0/cmuspp-linux-x86_64
chmod +x cmuspp-linux-x86_64
./cmuspp-linux-x86_64
```

It needs the `themes/` folder (from the repository) next to the executable.

## Build from Source

### Dependencies

You need a C++ compiler and the `libsndfile`, `libjpeg`, and `libpng` libraries (plus ALSA on Linux).

- **Ubuntu / Debian:** `sudo apt install g++ libsndfile1-dev libasound2-dev libjpeg-dev libpng-dev`
- **Arch Linux:** `sudo pacman -S gcc libsndfile alsa-lib libjpeg-turbo libpng`
- **macOS:** `brew install libsndfile jpeg libpng` (requires Homebrew)

### Compile

Clone the repository and use the included auto-build script:

```sh
chmod +x bootstrap.sh
./bootstrap.sh
./cmuspp
```

### NixOS

Add the package from a flake:

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

Or use the direct command: `nix profile add github:mikuri12/my-lazy-nixos-pkgs#cmuspp`

## License

MIT — feel free to modify and use the code.
