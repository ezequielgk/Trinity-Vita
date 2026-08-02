# Neko Void
**Una distribución de Void Linux rápida, lista para gaming y libre de systemd**

![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)
![Base](https://img.shields.io/badge/Base-Void_Linux-runcmd.svg)
![Init](https://img.shields.io/badge/Init-runit-success.svg)
![Desktop](https://img.shields.io/badge/Desktop-MATE-orange.svg)

[Visitar sitio web oficial](https://neko-void.sourceforge.io/)

Neko Void es una distribución de Linux construida sobre **Void Linux** con `runit` para tiempos de arranque ultrarrápidos. Incluye el entorno de escritorio **MATE** con herramientas esenciales preinstaladas, optimizada para gaming y lista para el uso diario desde el primer momento.

## Arquitectura Base

Basada en Void Linux con `runit`, incluye el escritorio MATE con herramientas esenciales preinstaladas:

* **Flatpak** Paquetes universales
* **Kore** Gestor de Tarballs y AppImage
* **Tinyfetch** Información del sistema
* **btop** Monitor de recursos
* **Octoxbps** Gestor de paquetes GUI

## Listo para Gaming

Optimizada para máximo rendimiento con soporte completo de Vulkan y drivers non-free de Intel/AMD preconfigurados para gaming sin problemas desde el primer día.

* Soporte completo de la API **Vulkan**
* Drivers de GPU preconfigurados
* Ajustes de rendimiento optimizados
* Listo para **Steam** y **Lutris**

## Instalador Kasha

Instalador personalizado que simplifica la configuración de Void Linux. Incluye un potente asistente post-instalación para configuración con un clic de flujos especializados.

* Configuración fácil de usuario y red
* Particionado automático
* Categorías de apps en un clic
* Video, Música, Diseño, Gaming y más

## Filosofía

### Por qué se creó

El proyecto se originó inicialmente como un hobby personal. Con el tiempo, evolucionó hasta convertirse en un proyecto estructurado con el objetivo de ofrecer una versión de Void Linux fácil de instalar y utilizar para el usuario final.

### Público dirigido

Esta distribución está dirigida a usuarios que desean un sistema operativo ligero y robusto, fácilmente adaptable a su flujo de trabajo específico sin las complicaciones habituales de una configuración manual desde cero.

### Simplicidad sobre Complejidad

Centralizar demasiado poder en una sola suite como systemd choca con la idea UNIX de herramientas pequeñas y separadas. Creemos que hacer una sola cosa bien es la clave para un sistema estable.

### Transparencia y Control

Una suite monolítica aumenta la superficie de ataque y añade abstracción innecesaria. Preferimos registros (logs) de texto plano por simplicidad y portabilidad. Si algo falla, leer archivos de texto con herramientas estándar como `cat`, `less` o `grep` resulta mucho más directo que depender de logs binarios.

### 100% Libre de Systemd

Somos orgullosamente compatibles con la iniciativa [systemdfree.com](https://systemdfree.com/). Al usar `runit`, aseguramos que tu sistema se mantenga modular, transparente y libre de dependencias monolíticas.
