# GenovaLauncher
**Un lanzador gráfico moderno para Minecraft: Bedrock Edition en Linux**

[Visitar repositorio](https://github.com/Ars-byte/GenovaLauncher) · [Sitio web](https://ars-byte.github.io/genovalauncher-website)

GenovaLauncher es un lanzador gráfico moderno para **Minecraft: Bedrock Edition** en Linux, construido con **PySide6 (Qt6)** y basado en el proyecto **mcpelauncher**.

## Características

- **Gestión de versiones:** Instala, cambia y juega múltiples versiones de Minecraft Bedrock desde APK o Google Play.
- **Gestor de recursos:** Administra packs de recursos, packs de comportamiento, skins y mundos.
- **Soporte de mods:** Explora e instala mods desde el repositorio oficial de mcpelauncher-moddb.
- **7 temas oscuros:** Tokyo Night, Catppuccin, Dracula, Nord, Everforest, One Dark y Rose Pine.
- **8 idiomas:** Inglés, español, alemán, francés, italiano, portugués, catalán y japonés.
- **Descarga automática:** Descarga los binarios de mcpelauncher automáticamente si no se encuentran.

## Instalación

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

### Portátil

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

### Desde el código fuente

```sh
git clone https://github.com/Ars-byte/GenovaLauncher.git
cd GenovaLauncher
python3 -m venv venv && source venv/bin/activate
pip install -r requirements.txt
./run.sh
```

## Requisitos

- Linux x86_64
- Python 3.10 o superior
- OpenGL ES 3.0 o superior

### Dependencias del Sistema

```sh
# Void Linux
doas xbps-install qt6-webengine qt6-declarative qt6-webchannel qt6-position libzip unzip zenity

# Debian/Ubuntu
sudo apt install qt6-webengine-dev qt6-declarative-dev libqt6webchannel6 libzip-dev unzip zenity

# Arch
sudo pacman -S qt6-webengine qt6-declarative qt6-webchannel libzip unzip zenity
```

## Licencia

GNU General Public License v3.0. Basado en mcpelauncher.
