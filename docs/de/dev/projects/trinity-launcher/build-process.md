# Kompilierung & Installation

## Kompilierung
**Build-Skript**

Der einfachste Weg, Trinity Launcher zu kompilieren und zu installieren, ist das mitgelieferte Build-Skript.

```bash
# Berechtigungen erteilen
chmod +x build.sh

# Kompilieren und installieren
sudo ./build.sh
```

Dies installiert die Binärdateien in `/usr/local/bin` und registriert das Anwendungs-Icon.

### Startbefehle
Nach der Installation kannst du die Anwendungen vom Terminal aus starten:
```bash
trinchete # Startet die Hauptoberfläche
trinito   # Startet den Inhaltsmanager
```

## MCPElauncher erforderlich
Trinity Launcher stützt sich auf die Kernkomponenten von `mcpelauncher`: `mcpelauncher-client`, `mcpelauncher-extract` und `mcpelauncher-webview`.

Wir empfehlen den gepflegten Fork: **[franckey02/mcpelauncher-patch](https://github.com/franckey02/mcpelauncher-patch)**

### Kompilierbefehle
```bash
git clone https://github.com/franckey02/mcpelauncher-patch.git
cd mcpelauncher-patch
git checkout qt6
git submodule update --init --recursive
mkdir -p build && cd build

CC=clang CXX=clang++ cmake .. \
  -DCMAKE_BUILD_TYPE=Release \
  -DCMAKE_POLICY_DEFAULT_CMP0074=NEW \
  -DCMAKE_C_COMPILER=clang \
  -DCMAKE_CXX_COMPILER=clang++ \
  -DCMAKE_C_FLAGS="-march=x86-64 -mtune=generic -msse4.1 -msse4.2 -mpopcnt" \
  -DCMAKE_CXX_FLAGS="-march=x86-64 -mtune=generic -msse4.1 -msse4.2 -mpopcnt" \
  -Wno-dev

make -j$(getconf _NPROCESSORS_ONLN)
sudo make install
```

## Flatpak-Packaging
**Build-Anleitung**

### Voraussetzungen
Du musst die KDE-Runtime und die Qt-WebEngine-Basis-App installieren.

```bash
flatpak install flathub io.qt.qtwebengine.BaseApp//6.10
flatpak install flathub org.kde.Platform//6.10 org.kde.Sdk//6.10
```

### Build-Befehle
Um das Flatpak-Bundle zu erstellen:

```bash
# Die Anwendung bauen
flatpak-builder --user --force-clean build-dircom.trench.trinity.launcher.json

# In ein Repository exportieren
flatpak-builder --repo=repo --force-clean build-dir com.trench.trinity.launcher.json

# Bundle erstellen
flatpak build-bundle repo trinity.flatpak com.trench.trinity.launcher

# Bundle installieren
flatpak install ./trinity.flatpak
```
