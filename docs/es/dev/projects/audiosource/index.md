# Audio Source
**Usa tu dispositivo Android como micrófono USB**

![License](https://img.shields.io/badge/License-MIT-blue.svg)
![Platform](https://img.shields.io/badge/Platform-Android_Linux-9cf.svg)

[Visitar repositorio](https://github.com/ezequielgk/audiosource)

> [!NOTE]
> Este es un fork que añade una **Interfaz de Usuario de Terminal (TUI)** y un **icono de bandeja del sistema** para un control más fácil de la aplicación. Funciona directamente con el APK oficial proporcionado por el creador original, [gdzx](https://github.com/gdzx/audiosource), sin necesidad de instalar ningún APK personalizado o modificado.

Audio Source reenvía la entrada de audio del micrófono de Android al **daemon de PulseAudio** a través de ADB, para que puedas usar tu dispositivo Android como micrófono USB.

## Requisitos

- Dispositivo con al menos **Android 4.0** (API level 14), pero probado solo en Android 10 (API level 29), así que los resultados pueden variar.
- **Android SDK Platform Tools** (requiere `adb` en el PATH).
- **PulseAudio o PipeWire** con soporte de PulseAudio (requiere `pactl` en el PATH).

## Instalación

### En tu dispositivo Android

1. Ve a **Configuración > Acerca del teléfono** y toca **Número de compilación** 7 veces para habilitar el menú de **Opciones de desarrollador**.
2. En **Configuración > Sistema > Opciones de desarrollador** habilita **Depuración por USB** (Android Debug Bridge).
3. Instala la app Android de Audio Source:
   - (Recomendado) Obténla en [F-Droid](https://f-droid.org/).
   - O descarga el APK de la última release.
   - O compílalo desde el código fuente (ver Compilación e instalación).

### En tu PC Linux

#### Instalación Automática (Recomendada)

Puedes descargar, extraer e iniciar el instalador interactivo automáticamente con un solo comando:

```sh
curl -sSL https://raw.githubusercontent.com/ezequielgk/audiosource/master/install.sh | bash
```

**Para Void:**

```sh
curl -sSL https://raw.githubusercontent.com/ezequielgk/audiosource/master/install-void.sh | bash
```

#### Instalación Manual

1. Descarga el cliente Linux `audiosource-linux.tar.gz` de la última release.
2. Extrae el archivo y abre una terminal dentro del directorio extraído.
3. Ejecuta el instalador interactivo:

```sh
$ ./install.sh
```

El instalador ofrece un menú para resolver dependencias (requiere sudo), instalar la app localmente o desinstalarla.

## Uso

### TUI de Escritorio y Bandeja del Sistema

Una vez instalado, puedes lanzar la aplicación desde el menú de aplicaciones de tu escritorio (busca **Audio Source**) o directamente desde cualquier terminal:

```sh
$ audiosource
```

Esto lanza automáticamente el icono de la bandeja del sistema y conecta la interfaz de terminal a ella.

### Controles Interactivos

| Tecla | Acción |
| --- | --- |
| **[S]** | Iniciar: Comienza el reenvío de audio. |
| **[C]** | Detener: Detiene el reenvío de audio. |
| **[T]** | Ocultar en la bandeja: Cierra la interfaz de terminal pero mantiene el daemon de la bandeja y el reenvío de audio en segundo plano (se integra nativamente con las Notificaciones de Escritorio). |
| **[M]** | Silenciar/Reactivar: Alterna el silencio del micrófono al instante. |
| **[Z]/[X]** | Vol: Ajusta el volumen del micrófono dinámicamente con retroalimentación visual instantánea. |
| **[W]** | Web: Lanza un servidor web local para controlar el audio y ver un código QR (con URL directa). Puedes conectarte desde cualquier dispositivo de tu red. |
| **[A]** | ADB: Abre el menú de Depuración Inalámbrica para emparejar o conectar un dispositivo por Wi-Fi, incluyendo una nueva opción de Emparejar por QR. |
| **[Q]** | Salir de Todo: Cierra la interfaz de terminal, apaga el daemon de la bandeja y detiene el reenvío de audio. |

### Depuración Inalámbrica (Wi-Fi)

Puedes usar Audio Source sin cable USB conectándote por Wi-Fi nativamente desde la interfaz. Presiona **[A] ADB** dentro de la TUI para abrir el menú inalámbrico:

- **Conectar:** Úsalo para conectar a un dispositivo ya emparejado introduciendo su IP y Puerto.
- **Emparejar (Android 11+):** Introduce la IP, el Puerto y el Código de Emparejamiento de 6 dígitos proporcionado por las Opciones de Desarrollador de tu teléfono.
- **Emparejar por QR (Android 11+):** La TUI levanta un servidor mDNS nativo y muestra un código QR en pantalla. ¡Simplemente escanéalo desde la pantalla **"Depuración inalámbrica -> Emparejar dispositivo con código QR"** de tu teléfono!

> [!NOTE]
> La transmisión de audio se almacena en buffer y se optimiza automáticamente para Wi-Fi para evitar cortes de audio y caídas de conexión.

### Interfaz de Línea de Comandos (CLI)

El comando `audiosource` instalado también admite argumentos especiales:

- **Actualizar App:** Descarga e instala automáticamente la última versión desde GitHub:

```sh
$ audiosource update
```

- **Ayuda:** Muestra las opciones de línea de comandos disponibles:

```sh
$ audiosource --help
```

- **Versión:** Muestra la versión actual de la aplicación:

```sh
$ audiosource --version
```

### Arte ASCII Personalizado

Puedes personalizar el logo de la TUI reemplazando el arte predeterminado:

- Edita el archivo en `~/.config/audiosource/ascii.txt` y pega tu texto personalizado. La TUI lo centrará automáticamente y ajustará el diseño sin problemas.
- Alternativamente, usa `~/.config/audiosource/config.json` con una clave `ascii_art`.

### Múltiples Dispositivos

Si tienes varios dispositivos conectados, tendrás que especificar el número de serie del dispositivo al que quieres reenviar el audio. Los números de serie se pueden encontrar ejecutando `adb devices`.

Luego puedes especificar el número de serie como argumento:

```sh
$ ./audiosource -s 1234 run
```

O configurando la variable de entorno `ANDROID_SERIAL`:

```sh
$ ANDROID_SERIAL=1234 ./audiosource run
```

Puedes usar control de trabajos para reenviar audio desde múltiples dispositivos simultáneamente de la siguiente manera:

```sh
$ ./audiosource -s shiba run &  # presiona ENTER para recuperar el control de tu terminal
$ ./audiosource -s 192.168.1.188:39857 run
```

## Solución de Problemas

Si encuentras el error **adb not found**, significa que el comando `adb` no está instalado o no está en el PATH de tu sistema. En la mayoría de las distribuciones puedes instalarlo con el gestor de paquetes:

```sh
# Arch Linux
$ pacman -S android-tools

# Debian/Ubuntu
$ apt install android-tools-adb
```

Después de la instalación, verifica que funciona con `adb --version` y vuelve a ejecutar `audiosource`.

**Consejos comunes:**

- Asegúrate de que tu teléfono esté conectado, la depuración USB esté habilitada y el PC esté autorizado (revisa tu teléfono para ver si hay un aviso de permitir la conexión).
- Ejecuta `adb devices` para confirmar que tu teléfono es detectado (debe mostrar un número de serie y "device").
- Si no se encuentran dispositivos, prueba con un cable/puerto USB diferente o intenta volver a habilitar la depuración USB.

## Compilación e instalación

Ejecuta `./gradlew tasks` para listar los comandos disponibles.

### Debug

```sh
$ ./audiosource build
$ ./audiosource install
```

### Release

1. Genera un Java KeyStore:

```sh
$ keytool -keystore /home/user/android.jks -genkey -alias release \
       -keyalg RSA -keysize 2048 -validity 30000
```

2. Crea `keystore.properties` en el directorio raíz del proyecto con el siguiente contenido:

```properties
storeFile=/home/user/android.jks
storePassword=STORE_PASS
keyAlias=release
keyPassword=KEY_PASS
```

3. Compila e instala:

```sh
$ export AUDIOSOURCE_PROFILE=release
$ ./audiosource build
$ ./audiosource install
```

## Reconocimiento

- [sndcpy](https://github.com/rom1v/sndcpy) por la implementación inicial del reenvío de reproducción de audio.

## Licencia

Este proyecto está licenciado bajo la licencia MIT ([LICENSE](https://opensource.org/licenses/MIT)).
