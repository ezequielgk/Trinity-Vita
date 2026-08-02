# Компіляція та встановлення

## Компіляція
**Скрипт збірки**

Найпростіший спосіб скомпілювати та встановити Trinity Launcher — використати наданий скрипт збірки.

```bash
# Надати дозволи
chmod +x build.sh

# Скомпілювати та встановити
sudo ./build.sh
```

Це встановлює бінарні файли в `/usr/local/bin` і реєструє значок застосунку.

### Команди запуску
Після встановлення ви можете запускати застосунки з терміналу:
```bash
trinchete # Запускає основний інтерфейс
trinito   # Запускає менеджер контенту
```

## Потрібен MCPElauncher
Trinity Launcher покладається на основні компоненти `mcpelauncher`: `mcpelauncher-client`, `mcpelauncher-extract` і `mcpelauncher-webview`.

Ми рекомендуємо використовувати підтримуваний форк: **[franckey02/mcpelauncher-patch](https://github.com/franckey02/mcpelauncher-patch)**

### Команди компіляції
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

## Пакування Flatpak
**Інструкції зі збірки**

### Вимоги
Вам потрібно встановити runtime KDE і базовий застосунок Qt WebEngine.

```bash
flatpak install flathub io.qt.qtwebengine.BaseApp//6.10
flatpak install flathub org.kde.Platform//6.10 org.kde.Sdk//6.10
```

### Команди збірки
Щоб зібрати пакет Flatpak:

```bash
# Зібрати застосунок
flatpak-builder --user --force-clean build-dircom.trench.trinity.launcher.json

# Експортувати в репозиторій
flatpak-builder --repo=repo --force-clean build-dir com.trench.trinity.launcher.json

# Створити пакет
flatpak build-bundle repo trinity.flatpak com.trench.trinity.launcher

# Встановити пакет
flatpak install ./trinity.flatpak
```
