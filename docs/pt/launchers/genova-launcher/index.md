# GenovaLauncher
**Um lançador gráfico moderno para Minecraft: Bedrock Edition no Linux**

[Visite o repositório](https://github.com/Ars-byte/GenovaLauncher) · [Site](https://ars-byte.github.io/genovalauncher-website)

O GenovaLauncher é um lançador gráfico moderno para **Minecraft: Bedrock Edition** no Linux, construído com **PySide6 (Qt6)** e baseado no projeto **mcpelauncher**.

## Recursos

- **Gerenciamento de versões:** instale, alterne e jogue várias versões do Minecraft Bedrock a partir de APK ou Google Play.
- **Gerenciador de recursos:** gerencie pacotes de recursos, pacotes de comportamento, skins e mundos.
- **Suporte a mods:** navegue e instale mods do repositório oficial mcpelauncher-moddb.
- **7 temas escuros:** Tokyo Night, Catppuccin, Dracula, Nord, Everforest, One Dark e Rose Pine.
- **8 idiomas:** inglês, espanhol, alemão, francês, italiano, português, catalão e japonês.
- **Download automático:** baixa os binários do mcpelauncher automaticamente se não forem encontrados.

## Instalação

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

### A partir do código fonte

```sh
git clone https://github.com/Ars-byte/GenovaLauncher.git
cd GenovaLauncher
python3 -m venv venv && source venv/bin/activate
pip install -r requirements.txt
./run.sh
```

## Requisitos

- Linux x86_64
- Python 3.10 ou mais recente
- OpenGL ES 3.0 ou superior

### Dependências do Sistema

```sh
# Void Linux
doas xbps-install qt6-webengine qt6-declarative qt6-webchannel qt6-position libzip unzip zenity

# Debian/Ubuntu
sudo apt install qt6-webengine-dev qt6-declarative-dev libqt6webchannel6 libzip-dev unzip zenity

# Arch
sudo pacman -S qt6-webengine qt6-declarative qt6-webchannel libzip unzip zenity
```

## Licença

GNU General Public License v3.0. Construído sobre o mcpelauncher.
