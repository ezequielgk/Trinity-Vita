# Компиляция и установка

## Компиляция
**Скрипт сборки**

Самый простой способ скомпилировать и установить Trinity Launcher — использовать прилагаемый скрипт сборки.

```bash
# Выдать разрешения
chmod +x build.sh

# Скомпилировать и установить
sudo ./build.sh
```

Это устанавливает бинарные файлы в `/usr/local/bin` и регистрирует значок приложения.

### Команды запуска
После установки вы можете запускать приложения из терминала:
```bash
trinchete # Запускает основной интерфейс
trinito   # Запускает менеджер контента
```

## Требуется MCPElauncher
Trinity Launcher полагается на основные компоненты `mcpelauncher`: `mcpelauncher-client`, `mcpelauncher-extract` и `mcpelauncher-webview`.

Мы рекомендуем использовать поддерживаемый форк: **[franckey02/mcpelauncher-patch](https://github.com/franckey02/mcpelauncher-patch)**

### Команды компиляции
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

## Упаковка Flatpak
**Инструкции по сборке**

### Требования
Вам необходимо установить runtime KDE и базовое приложение Qt WebEngine.

```bash
flatpak install flathub io.qt.qtwebengine.BaseApp//6.10
flatpak install flathub org.kde.Platform//6.10 org.kde.Sdk//6.10
```

### Команды сборки
Чтобы собрать пакет Flatpak:

```bash
# Собрать приложение
flatpak-builder --user --force-clean build-dircom.trench.trinity.launcher.json

# Экспортировать в репозиторий
flatpak-builder --repo=repo --force-clean build-dir com.trench.trinity.launcher.json

# Создать пакет
flatpak build-bundle repo trinity.flatpak com.trench.trinity.launcher

# Установить пакет
flatpak install ./trinity.flatpak
```
