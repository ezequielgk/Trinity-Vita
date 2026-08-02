# Compilazione e installazione

## Compilazione
**Script di build**

Il modo più semplice per compilare e installare Trinity Launcher è usare lo script di build fornito.

```bash
# Dare i permessi
chmod +x build.sh

# Compilare e installare
sudo ./build.sh
```

Questo installa i binari in `/usr/local/bin` e registra l'icona dell'applicazione.

### Comandi di avvio
Una volta installato, puoi avviare le applicazioni dal terminale:
```bash
trinchete # Avvia l'interfaccia principale
trinito   # Avvia il gestore dei contenuti
```

## MCPElauncher richiesto
Trinity Launcher si basa sui componenti core di `mcpelauncher`: `mcpelauncher-client`, `mcpelauncher-extract` e `mcpelauncher-webview`.

Raccomandiamo di usare il fork mantenuto: **[franckey02/mcpelauncher-patch](https://github.com/franckey02/mcpelauncher-patch)**

### Comandi di compilazione
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

## Packaging Flatpak
**Istruzioni di build**

### Requisiti
Devi installare il runtime KDE e l'app base Qt WebEngine.

```bash
flatpak install flathub io.qt.qtwebengine.BaseApp//6.10
flatpak install flathub org.kde.Platform//6.10 org.kde.Sdk//6.10
```

### Comandi di build
Per compilare il bundle Flatpak:

```bash
# Compila l'applicazione
flatpak-builder --user --force-clean build-dircom.trench.trinity.launcher.json

# Esporta nel repository
flatpak-builder --repo=repo --force-clean build-dir com.trench.trinity.launcher.json

# Crea il bundle
flatpak build-bundle repo trinity.flatpak com.trench.trinity.launcher

# Installa il bundle
flatpak install ./trinity.flatpak
```
