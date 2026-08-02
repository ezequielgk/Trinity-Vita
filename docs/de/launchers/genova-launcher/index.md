# GenovaLauncher
**Ein moderner grafischer Launcher für Minecraft: Bedrock Edition unter Linux**

[Repository besuchen](https://github.com/Ars-byte/GenovaLauncher) · [Website](https://ars-byte.github.io/genovalauncher-website)

GenovaLauncher ist ein moderner grafischer Launcher für **Minecraft: Bedrock Edition** unter Linux, gebaut mit **PySide6 (Qt6)** und unterstützt durch das **mcpelauncher**-Projekt.

## Funktionen

- **Versionsverwaltung:** Installiere, wechsle und spiele mehrere Minecraft-Bedrock-Versionen aus APK oder Google Play.
- **Ressourcenverwaltung:** Verwalte Ressourcenpakete, Verhaltenspakete, Skins und Welten.
- **Mod-Unterstützung:** Durchsuche und installiere Mods aus dem offiziellen mcpelauncher-moddb-Repository.
- **7 dunkle Themes:** Tokyo Night, Catppuccin, Dracula, Nord, Everforest, One Dark und Rose Pine.
- **8 Sprachen:** Englisch, Spanisch, Deutsch, Französisch, Italienisch, Portugiesisch, Katalanisch und Japanisch.
- **Automatischer Download:** Lädt mcpelauncher-Binärdateien automatisch herunter, falls sie nicht gefunden werden.

## Installation

### Void Linux (xbps)

```sh
xbps-rindex -a genovalauncher-1.0.0_1.x86_64.xbps
doas xbps-install -R $PWD genovalauncher
genovalauncher
```

### Debian/Ubuntu (.deb)

```sh
sudo dpkg -i genovalauncher-1.0.0-amd64.deb
sudo apt install -f
genovalauncher
```

### AppImage (Universell)

```sh
chmod +x GenovaLauncher-1.0.0-x86_64.AppImage
./GenovaLauncher-1.0.0-x86_64.AppImage
```

### Tragbar

```sh
tar xzf GenovaLauncher-v1.0.0.tar.gz
cd GenovaLauncher-v1.0.0
./genovalauncher.sh
```

### NixOS

```nix
inputs.genovalauncher.url = "github:Ars-byte/GenovaLauncher";
environment.systemPackages = [ inputs.genovalauncher.packages.${system}.default ];
```

```sh
sudo nixos-rebuild switch
```

### Aus dem Quellcode

```sh
git clone https://github.com/Ars-byte/GenovaLauncher.git
cd GenovaLauncher
python3 -m venv venv && source venv/bin/activate
pip install -r requirements.txt
./run.sh
```

## Anforderungen

- Linux x86_64
- Python 3.10 oder neuer
- OpenGL ES 3.0 oder höher

### Systemabhängigkeiten

```sh
# Void Linux
doas xbps-install qt6-webengine qt6-declarative qt6-webchannel qt6-position libzip unzip zenity

# Debian/Ubuntu
sudo apt install qt6-webengine-dev qt6-declarative-dev libqt6webchannel6 libzip-dev unzip zenity

# Arch
sudo pacman -S qt6-webengine qt6-declarative qt6-webchannel libzip unzip zenity
```

## Lizenz

GNU General Public License v3.0. Auf Basis von mcpelauncher.
