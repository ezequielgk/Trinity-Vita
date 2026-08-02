# Compilação e Instalação

## Compilação
**Script de Build**

A maneira mais fácil de compilar e instalar o Trinity Launcher é usando o script de build fornecido.

```bash
# Dar permissões
chmod +x build.sh

# Compilar e instalar
sudo ./build.sh
```

Isso instala os binários em `/usr/local/bin` e registra o ícone do aplicativo.

### Comandos de Execução
Depois de instalado, você pode iniciar os aplicativos pelo terminal:
```bash
trinchete # Inicia a interface principal
trinito   # Inicia o gerenciador de conteúdo
```

## MCPElauncher Necessário
O Trinity Launcher depende dos componentes principais do `mcpelauncher`: `mcpelauncher-client`, `mcpelauncher-extract` e `mcpelauncher-webview`.

Recomendamos usar o fork mantido em: **[franckey02/mcpelauncher-patch](https://github.com/franckey02/mcpelauncher-patch)**

### Comandos de Compilação
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

## Empacotamento Flatpak
**Instruções de Build**

### Requisitos
Você precisa instalar o runtime KDE e o aplicativo base Qt WebEngine.

```bash
flatpak install flathub io.qt.qtwebengine.BaseApp//6.10
flatpak install flathub org.kde.Platform//6.10 org.kde.Sdk//6.10
```

### Comandos de Build
Para compilar o bundle Flatpak:

```bash
# Compilar o aplicativo
flatpak-builder --user --force-clean build-dircom.trench.trinity.launcher.json

# Exportar para o repositório
flatpak-builder --repo=repo --force-clean build-dir com.trench.trinity.launcher.json

# Criar o bundle
flatpak build-bundle repo trinity.flatpak com.trench.trinity.launcher

# Instalar o bundle
flatpak install ./trinity.flatpak
```
