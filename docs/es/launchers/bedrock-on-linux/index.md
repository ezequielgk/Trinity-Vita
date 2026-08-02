# BedrockOnLinux
**Ejecuta Minecraft Bedrock para Windows (edición GDK) en Linux con identidad nativa de Microsoft/Xbox, multijugador, amigos y Realms**

[Visitar repositorio](https://github.com/Wyze3306/BedrockOnLinux)

BedrockOnLinux instala la versión de Minecraft que selecciones, prepara un prefix de Wine gestionado y ejecuta el juego a través de un motor **GDK-Proton basado en WineGDK** revisado. No se requiere compilador ni instalación de Windows en la máquina del jugador.

## Lo que proporciona 2.0

- **Identidad nativa de Xbox:** La configuración de XGame, XUser, firmas de solicitud, gamertags, privilegios y el contexto de XSAPI están implementados por WineGDK.
- **Juego en línea:** La lista de amigos, invitaciones, unirse a amigos, servidores públicos y Realms usan esa identidad nativa. Realms recibe un token XSTS dedicado para la audiencia de Bedrock Realms en lugar de un token genérico de Xbox.
- **Sin parche de memoria de Minecraft:** El motor gestionado no contiene código que escanee o reescriba el proceso de Minecraft en ejecución. El empaquetado rechaza restos de la antigua implementación de memoria de procesos. Los arreglos de compatibilidad estáticos de juego y Proton se siguen aplicando antes del lanzamiento.
- **Selector de archivos nativo:** El motor fijado implementa el selector WinAppSDK para ambas arquitecturas de Windows, y cada preparación de prefix detenido repara su registro de activación. La importación de mundos en el juego y la selección de skins personalizados de Minecraft abren el diálogo de archivos del escritorio en lugar de fallar en `RoGetActivationFactory`. La importación de `.mcskin` por parte del lanzador sigue disponible como vía de instalación no interactiva adicional.
- **Seguridad gráfica:** El lanzador comprueba el estado de la pantalla existente y los logs del kernel sin abrir Vulkan u OpenGL. Una sesión insegura conocida se bloquea antes de que Wine inicie. La GUI ofrece un reconocimiento solo para un incidente verificado de arranque anterior; no puede descartar una falla actual del driver ni una sesión de Wine/UMU en ejecución.
- **Actualizaciones verificadas:** Los archivos del motor, los archivos de ejecución críticos y las cargas de dependencias están fijados por SHA-256. Una actualización rechazada no reemplaza un motor que funciona.
- **Perfiles de cuenta aislados:** Un usuario de Linux puede crear raíces separadas de cuenta de Xbox, prefix de Wine, configuración y mundos mientras comparte las grandes descargas del juego, motor y runtime.

> [!NOTE]
> El flujo de inicio de sesión de Microsoft se ejecuta localmente entre el lanzador, Microsoft y los servicios de Xbox. BedrockOnLinux no usa un relé de cuentas ni un proxy de multijugador.

## Instalación

Descarga los archivos de la aplicación desde la [última release](https://github.com/Wyze3306/BedrockOnLinux/releases). Todas las builds soportadas actualmente apuntan a Linux x86-64.

| Formato | Ideal para | Comando de inicio |
| --- | --- | --- |
| AppImage | La mayoría de distribuciones de escritorio basadas en glibc | `./BedrockOnLinux-*-x86_64.AppImage` |
| .deb | Debian, Ubuntu, Mint y LMDE | `sudo apt install ./bedrock-on-linux_*_amd64.deb` |
| .pyz portátil | Un host con Python 3.9+ y Tk | `./bedrock-on-linux-*.pyz gui` |
| Paquete Flatpak | Instalación local sandbox, cuando se proporcione | `flatpak install --user ./BedrockOnLinux-*-x86_64.flatpak` |

### Inicio rápido con AppImage

```sh
chmod +x BedrockOnLinux-2.1.1-x86_64.AppImage
./BedrockOnLinux-2.1.1-x86_64.AppImage
```

El primer PLAY necesita el archivo de motor correspondiente:

```
GDK-Proton-xuser-<engine-revision>.tar.gz
```

Con conexión a internet, el lanzador descarga automáticamente el archivo exacto desde la release de BedrockOnLinux. También puedes mantener ese activo del motor junto al AppImage o .pyz; se prefiere un sidecar local coincidente y se verifica antes de la extracción. Esto es necesario al probar un candidato no publicado y es útil para una primera instalación sin conexión.

Una instalación existente se actualiza de la misma manera en su siguiente PLAY. El lanzador valida el nuevo motor antes de un reemplazo atómico y conserva el árbol anterior si falla la descarga, el espacio en disco, la extracción o la verificación.

Si FUSE no está disponible, AppImage puede extraerse a sí mismo en tiempo de ejecución:

```sh
APPIMAGE_EXTRACT_AND_RUN=1 ./BedrockOnLinux-2.1.1-x86_64.AppImage
```

El AppImage incluye Python, Tk, el kit de herramientas GUI, criptografía y certificados CA. Aún usa el driver gráfico del host y las librerías comunes X11, Xft y fontconfig.

## Requisitos y limitaciones

- Un **escritorio glibc x86-64**. El AppImage y el motor gestionado están auditados contra una línea base glibc 2.31. Los sistemas ARM y solo-musl como Alpine estándar no están soportados. No se requiere un userspace i386 del host; el motor gestionado usa la ruta pure-WoW64 de Wine.
- **X11 o XWayland** para la GUI del lanzador. El juego normalmente usa X11/XWayland. Wine Wayland nativo puede probarse con `BOL_INPUT=wayland`, pero sigue siendo un backend de juego experimental.
- Un **driver Vulkan 1.3 funcional** que exponga `VK_EXT_device_generated_commands`, o el NVIDIA antiguo `VK_NV_device_generated_commands`.
- Las GPUs limitadas permanentemente a Vulkan 1.2 pueden probar **Configuración > Avanzado > Renderizador de compatibilidad heredado** (WineD3D), que omite la puerta de Vulkan 1.3 de DXVK.
- Suficiente almacenamiento libre para el juego, el motor comprimido y la extracción temporal.
- Una **cuenta de Microsoft con derecho a Minecraft**. Amigos, multijugador y Realms también dependen de la configuración de privacidad de la cuenta y la disponibilidad del servicio.

> [!WARNING]
> El lanzador es un proyecto de compatibilidad independiente y no está afiliado ni es soportado por Mojang o Microsoft.

## Jugar

1. Abre BedrockOnLinux.
2. Selecciona **Sign in**, abre la página de código de dispositivo de Microsoft que muestra el lanzador e introduce el código.
3. Selecciona una versión de Minecraft y elige **PLAY**.
4. Usa las pestañas **Friends**, **Servers** y **Realms** de Minecraft normalmente.

La primera ejecución descarga y prepara Minecraft, luego descarga y verifica el motor gestionado y su carga de compatibilidad en línea/TLS. Las credenciales de la cuenta se almacenan en el directorio de datos privado de BedrockOnLinux y se siembran en el prefix de Wine detenido antes del lanzamiento.

## Múltiples perfiles de Xbox locales

Crea una raíz de lanzador aislada y un acceso directo de escritorio por jugador:

```sh
bedrock-on-linux profiles create "Alice"
bedrock-on-linux profiles create "Bob"
bedrock-on-linux profiles list
```

Cada acceso directo establece su propio `BOL_HOME`, por lo que la cuenta de Microsoft, el prefix de Wine, la caché de pre-autenticación, la configuración y los mundos permanecen separados. Los paquetes del juego, Proton, UMU y las cachés de descarga se comparten para evitar descargas duplicadas de varios GB.

Debido a que PLAY puede reparar un runtime compartido antes de iniciar, solo un perfil puede ejecutar Minecraft a la vez.

## Logros

El lanzador prepara un token XSTS dedicado solo para el usuario para la solicitud original de Logros de Windows de Minecraft. XUser lo selecciona solo para el servicio de Logros, conservando el título de Windows empaquetado, el SCID y la plataforma, mientras deja sin cambios la autenticación de social, Marketplace, PlayFab, multijugador y Realms.

> [!NOTE]
> Esto carga la lista existente; no desbloquea, emula ni fuerza logros.

## Importación de contenido

Las acciones de **Import World** y selección de skins de Minecraft usan el selector de archivos nativo de WineGDK. Para la instalación directa de contenido desde el lanzador mientras Minecraft está cerrado:

```sh
bedrock-on-linux import world.mcworld addon.mcaddon pack.mcpack \
  template.mctemplate skin.mcskin
```

El lanzador importa archivos `.mcworld`, `.mcaddon`, `.mcpack`, `.mctemplate` y `.mcskin` en el directorio `com.mojang` correspondiente.

## Seguridad de GPU

BedrockOnLinux deliberadamente no abre un dispositivo Vulkan u OpenGL para adivinar si el driver está sano. Antes del lanzamiento puede detectar condiciones como:

- una sesión X11 sin proveedor RandR de hardware;
- respaldo FBDEV o de renderizado por software;
- un evento fatal del driver gráfico en el journal del kernel;
- una sesión de GPU de Minecraft que no regresó antes de un reinicio o pérdida de energía.

Cuando el lanzador puede demostrar que el incidente restante pertenece al arranque anterior, **Configuración > Herramientas** muestra **Acknowledge previous GPU incident…** con un paso de confirmación. El flujo CLI equivalente es:

```sh
bedrock-on-linux doctor
bedrock-on-linux doctor --acknowledge-gpu-crash
```

## Diagnóstico y recuperación

Abre **Configuración > Open logs folder**, o inspecciona:

```
$XDG_DATA_HOME/bedrock-on-linux/logs/
```

El panel de Detalles de la GUI contiene el log del lanzador en vivo. Comandos útiles:

```sh
bedrock-on-linux doctor                 # dependencias del host y seguridad de GPU
bedrock-on-linux doctor --network       # observaciones de DNS/TLS, reloj y VPN
bedrock-on-linux repair                 # reconstruye el prefix de Wine gestionado
bedrock-on-linux versions               # versiones estables disponibles
bedrock-on-linux versions --beta        # incluye versiones beta
bedrock-on-linux setup --mc <version>   # descarga y prepara una versión
bedrock-on-linux login                  # vincula una cuenta de Microsoft
bedrock-on-linux play                   # lanza la versión seleccionada
bedrock-on-linux update                 # comprueba una actualización del lanzador
```

## Integridad del motor y procedencia de la fuente

El motor gestionado no se construye en la computadora del usuario. Los mantenedores de releases lo producen a partir de entradas fijadas y el lanzador solo acepta la revisión y el SHA-256 del archivo registrados en `bol/config.py`.

- **WineGDK** se construye en un chroot sin privilegios de Debian 11 (Bullseye). Cada ELF resultante se rechaza si requiere un símbolo glibc más nuevo que 2.31.
- La build universal de **vkd3d-proton** contiene variantes revisadas EXT-DGC y NV-DGC restauradas para x86-64 e i386.
- `scripts/package-engine.sh` incrusta licencias, registros de build, procedencia de la fuente y un `engine-manifest.json` que hashea los archivos de runtime críticos.
- La instalación del motor usa un bloqueo y un renombrado transaccional. Una actualización interrumpida o inválida no puede convertirse silenciosamente en el motor gestionado activo.

## Licencia

BedrockOnLinux no incluye archivos del juego de Minecraft. WineGDK, GDK-Proton, vkd3d-proton y las dependencias incluidas permanecen bajo sus respectivas licencias. BedrockOnLinux en sí está licenciado bajo **MIT**.
