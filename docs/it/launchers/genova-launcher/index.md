# GenovaLauncher
**Un launcher grafico moderno per Minecraft: Bedrock Edition su Linux**

[Visita il repository](https://github.com/Ars-byte/GenovaLauncher) · [Sito web](https://ars-byte.github.io/genovalauncher-website)

GenovaLauncher è un launcher grafico moderno per **Minecraft: Bedrock Edition** su Linux, costruito con **PySide6 (Qt6)** e basato sul progetto **mcpelauncher**.

## Funzionalità

- **Gestione delle versioni:** Installa, cambia e gioca a più versioni di Minecraft Bedrock da APK o Google Play.
- **Gestione delle risorse:** Gestisci resource pack, behavior pack, skin e mondi.
- **Supporto mod:** Sfoglia e installa mod dal repository ufficiale mcpelauncher-moddb.
- **7 temi scuri:** Tokyo Night, Catppuccin, Dracula, Nord, Everforest, One Dark e Rose Pine.
- **8 lingue:** Inglese, spagnolo, tedesco, francese, italiano, portoghese, catalano e giapponese.
- **Download automatico:** Scarica automaticamente i binari di mcpelauncher se non vengono trovati.

## Installazione

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

### AppImage (Universale)

```sh
chmod +x GenovaLauncher-1.0.0-x86_64.AppImage
./GenovaLauncher-1.0.0-x86_64.AppImage
```

### Portabile

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

### Dal sorgente

```sh
git clone https://github.com/Ars-byte/GenovaLauncher.git
cd GenovaLauncher
python3 -m venv venv && source venv/bin/activate
pip install -r requirements.txt
./run.sh
```

## Requisiti

- Linux x86_64
- Python 3.10 o successivo
- OpenGL ES 3.0 o superiore

### Dipendenze di sistema

```sh
# Void Linux
doas xbps-install qt6-webengine qt6-declarative qt6-webchannel qt6-position libzip unzip zenity

# Debian/Ubuntu
sudo apt install qt6-webengine-dev qt6-declarative-dev libqt6webchannel6 libzip-dev unzip zenity

# Arch
sudo pacman -S qt6-webengine qt6-declarative qt6-webchannel libzip unzip zenity
```

## Licenza

GNU General Public License v3.0. Basato su mcpelauncher.
