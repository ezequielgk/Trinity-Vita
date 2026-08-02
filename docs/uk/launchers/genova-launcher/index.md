# GenovaLauncher
**Сучасний графічний лаунчер для Minecraft: Bedrock Edition у Linux**

[Відвідати репозиторій](https://github.com/Ars-byte/GenovaLauncher) · [Вебсайт](https://ars-byte.github.io/genovalauncher-website)

GenovaLauncher — сучасний графічний лаунчер для **Minecraft: Bedrock Edition** у Linux, побудований на **PySide6 (Qt6)** і заснований на проєкті **mcpelauncher**.

## Можливості

- **Керування версіями:** встановлюйте, перемикайте та грайте в кілька версій Minecraft Bedrock з APK або Google Play.
- **Менеджер ресурсів:** керуйте пакетами ресурсів, пакетами поведінки, скінами та світами.
- **Підтримка модів:** переглядайте та встановлюйте моди з офіційного репозиторію mcpelauncher-moddb.
- **7 темних тем:** Tokyo Night, Catppuccin, Dracula, Nord, Everforest, One Dark і Rose Pine.
- **8 мов:** англійська, іспанська, німецька, французька, італійська, португальська, каталонська та японська.
- **Автозавантаження:** автоматично завантажує бінарні файли mcpelauncher, якщо їх не знайдено.

## Встановлення

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

### AppImage (універсальний)

```sh
chmod +x GenovaLauncher-1.0.0-x86_64.AppImage
./GenovaLauncher-1.0.0-x86_64.AppImage
```

### Переносна версія

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

### З вихідного коду

```sh
git clone https://github.com/Ars-byte/GenovaLauncher.git
cd GenovaLauncher
python3 -m venv venv && source venv/bin/activate
pip install -r requirements.txt
./run.sh
```

## Вимоги

- Linux x86_64
- Python 3.10 або новіший
- OpenGL ES 3.0 або вище

### Системні залежності

```sh
# Void Linux
doas xbps-install qt6-webengine qt6-declarative qt6-webchannel qt6-position libzip unzip zenity

# Debian/Ubuntu
sudo apt install qt6-webengine-dev qt6-declarative-dev libqt6webchannel6 libzip-dev unzip zenity

# Arch
sudo pacman -S qt6-webengine qt6-declarative qt6-webchannel libzip unzip zenity
```

## Ліцензія

GNU General Public License v3.0. Побудований на основі mcpelauncher.
