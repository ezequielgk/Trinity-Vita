# BedrockOnLinux
**Ejecuta Minecraft Bedrock para Windows (edición GDK) en Linux con identidad nativa de Microsoft/Xbox**

![License](https://img.shields.io/badge/License-MIT-blue.svg)
![Platform](https://img.shields.io/badge/Platform-Linux-9cf.svg)

[Visitar repositorio](https://github.com/Wyze3306/BedrockOnLinux)

BedrockOnLinux instala la versión de Minecraft que selecciones, prepara un prefix de Wine gestionado y ejecuta el juego a través de un motor GDK-Proton basado en WineGDK revisado. No se requiere compilador ni instalación de Windows.

## Características Clave

- **Identidad nativa de Xbox:** La configuración de XGame, XUser, firmas de solicitud, gamertags, privilegios y el contexto de XSAPI están implementados por WineGDK.
- **Juego en línea:** La lista de amigos, invitaciones, servidores públicos y Realms usan esa identidad nativa. Realms recibe un token XSTS dedicado para la audiencia de Bedrock Realms.
- **Sin parche de memoria de Minecraft:** El motor gestionado no contiene código que escanee o reescriba el proceso de Minecraft en ejecución.
- **Selector de archivos nativo:** La importación de mundos en el juego y la selección de skins personalizados abren el diálogo de archivos del escritorio.
- **Seguridad gráfica:** Una sesión insegura conocida se bloquea antes de que Wine inicie.
- **Actualizaciones verificadas:** Los archivos del motor, los archivos de ejecución y las cargas de dependencias están fijados por SHA-256.
- **Perfiles de cuenta aislados:** Un usuario de Linux puede crear raíces separadas de cuenta de Xbox, prefix de Wine, configuración y mundos.

El flujo de inicio de sesión de Microsoft se ejecuta localmente. BedrockOnLinux no usa un relé de cuentas ni un proxy de multijugador.

## Formatos de Instalación

| Formato | Ideal para | Comando de inicio |
| --- | --- | --- |
| AppImage | La mayoría de distribuciones de escritorio basadas en glibc | `./BedrockOnLinux-*-x86_64.AppImage` |
| .deb | Debian, Ubuntu, Mint y LMDE | `sudo apt install ./bedrock-on-linux_*_amd64.deb` |
| .pyz portátil | Un host con Python 3.9+ y Tk | `./bedrock-on-linux-*.pyz gui` |
| Paquete Flatpak | Instalación local sandbox, cuando se proporcione | `flatpak install --user ./BedrockOnLinux-*-x86_64.flatpak` |

## Licencia

MIT.
