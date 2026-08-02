# GenovaLauncher
**A modern graphical launcher for Minecraft: Bedrock Edition on Linux**

[Visit repository](https://github.com/Ars-byte/GenovaLauncher) · [Website](https://ars-byte.github.io/genovalauncher-website)

GenovaLauncher is a modern graphical launcher for **Minecraft: Bedrock Edition** on Linux, built with **PySide6 (Qt6)** and powered by the **mcpelauncher** project.

## Features

- **Version management:** Install, switch, and play multiple Minecraft Bedrock versions from APK or Google Play.
- **Resource manager:** Manage resource packs, behavior packs, skins and worlds.
- **Mod support:** Browse and install mods from the official mcpelauncher-moddb repository.
- **7 dark themes:** Tokyo Night, Catppuccin, Dracula, Nord, Everforest, One Dark, and Rose Pine.
- **8 languages:** English, Spanish, German, French, Italian, Portuguese, Catalan, and Japanese.
- **Auto-download:** Downloads mcpelauncher binaries automatically if not found.

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

### AppImage (Universal)

```sh
chmod +x GenovaLauncher-1.0.0-x86_64.AppImage
./GenovaLauncher-1.0.0-x86_64.AppImage
```

### Portable

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

### From Source

```sh
git clone https://github.com/Ars-byte/GenovaLauncher.git
cd GenovaLauncher
python3 -m venv venv && source venv/bin/activate
pip install -r requirements.txt
./run.sh
```

## Requirements

- Linux x86_64
- Python 3.10 or newer
- OpenGL ES 3.0 or higher

### System Dependencies

```sh
# Void Linux
doas xbps-install qt6-webengine qt6-declarative qt6-webchannel qt6-position libzip unzip zenity

# Debian/Ubuntu
sudo apt install qt6-webengine-dev qt6-declarative-dev libqt6webchannel6 libzip-dev unzip zenity

# Arch
sudo pacman -S qt6-webengine qt6-declarative qt6-webchannel libzip unzip zenity
```

## License

GNU General Public License v3.0. Built upon mcpelauncher.
