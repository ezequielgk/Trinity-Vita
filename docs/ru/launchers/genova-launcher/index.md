# GenovaLauncher
**Современный графический лаунчер для Minecraft: Bedrock Edition в Linux**

[Посетить репозиторий](https://github.com/Ars-byte/GenovaLauncher) · [Веб-сайт](https://ars-byte.github.io/genovalauncher-website)

GenovaLauncher — это современный графический лаунчер для **Minecraft: Bedrock Edition** в Linux, построенный на **PySide6 (Qt6)** и работающий на базе проекта **mcpelauncher**.

## Возможности

- **Управление версиями:** устанавливайте, переключайте и играйте в несколько версий Minecraft Bedrock из APK или Google Play.
- **Менеджер ресурсов:** управляйте наборами ресурсов, наборами поведения, скинами и мирами.
- **Поддержка модов:** просматривайте и устанавливайте моды из официального репозитория mcpelauncher-moddb.
- **7 тёмных тем:** Tokyo Night, Catppuccin, Dracula, Nord, Everforest, One Dark и Rose Pine.
- **8 языков:** английский, испанский, немецкий, французский, итальянский, португальский, каталанский и японский.
- **Автозагрузка:** автоматически загружает бинарные файлы mcpelauncher, если они не найдены.

## Установка

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

### AppImage (универсальный)

```sh
chmod +x GenovaLauncher-1.0.0-x86_64.AppImage
./GenovaLauncher-1.0.0-x86_64.AppImage
```

### Портативный

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

### Из исходного кода

```sh
git clone https://github.com/Ars-byte/GenovaLauncher.git
cd GenovaLauncher
python3 -m venv venv && source venv/bin/activate
pip install -r requirements.txt
./run.sh
```

## Требования

- Linux x86_64
- Python 3.10 или новее
- OpenGL ES 3.0 или выше

### Системные зависимости

```sh
# Void Linux
doas xbps-install qt6-webengine qt6-declarative qt6-webchannel qt6-position libzip unzip zenity

# Debian/Ubuntu
sudo apt install qt6-webengine-dev qt6-declarative-dev libqt6webchannel6 libzip-dev unzip zenity

# Arch
sudo pacman -S qt6-webengine qt6-declarative qt6-webchannel libzip unzip zenity
```

## Лицензия

GNU General Public License v3.0. Построен на базе mcpelauncher.
