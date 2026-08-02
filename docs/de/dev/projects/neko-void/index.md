# Neko Void
**Eine Void-Linux-Distribution für schnelle, gaming-bereite und systemd-freie Desktops**

![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)
![Base](https://img.shields.io/badge/Base-Void_Linux-runcmd.svg)
![Init](https://img.shields.io/badge/Init-runit-success.svg)
![Desktop](https://img.shields.io/badge/Desktop-MATE-orange.svg)

[Offizielle Website besuchen](https://neko-void.sourceforge.io/)

Neko Void ist eine Linux-Distribution auf Basis von **Void Linux** mit `runit` für extrem schnelle Bootzeiten. Sie enthält die **MATE**-Desktopumgebung mit vorinstallierten essenziellen Werkzeugen, optimiert für Gaming und sofort einsatzbereit für den täglichen Gebrauch.

## Basis-Architektur

Basiert auf Void Linux mit `runit`, einschließlich des MATE-Desktops mit vorinstallierten essenziellen Werkzeugen:

* **Flatpak** Universelle Pakete
* **Kore** Tarball- und AppImage-Manager
* **Tinyfetch** Systeminformationen
* **btop** Ressourcenmonitor
* **Octoxbps** GUI-Paketmanager

## Gaming-Bereit

Optimiert für maximale Leistung mit vollständiger Vulkan-Unterstützung und vorkonfigurierten nicht-freien Intel/AMD-Treibern für problemloses Gaming ab dem ersten Tag.

* Vollständige **Vulkan**-API-Unterstützung
* Vorkonfigurierte GPU-Treiber
* Optimierte Leistungseinstellungen
* Bereit für **Steam** und **Lutris**

## Kasha-Installer

Benutzerdefinierter Installer, der die Void-Linux-Einrichtung vereinfacht. Enthält einen leistungsstarken Assistenten für die Nachinstallation mit Ein-Klick-Konfiguration spezialisierter Arbeitsabläufe.

* Einfache Benutzer- und Netzwerkkonfiguration
* Automatische Partitionierung
* App-Kategorien mit einem Klick
* Video, Musik, Design, Gaming und mehr

## Philosophie

### Warum es geschaffen wurde

Das Projekt begann als persönliches Hobby. Im Laufe der Zeit entwickelte es sich zu einem strukturierten Projekt mit dem Ziel, eine Version von Void Linux anzubieten, die für den Endnutzer einfach zu installieren und zu verwenden ist.

### Zielgruppe

Diese Distribution richtet sich an Nutzer, die ein leichtes und robustes Betriebssystem wollen, das sich einfach an ihren spezifischen Arbeitsablauf anpassen lässt – ohne die üblichen Komplikationen einer manuellen Einrichtung von Grund auf.

### Einfachheit vor Komplexität

Zu viel Macht in einer einzigen Suite wie systemd zu bündeln, widerspricht der UNIX-Idee kleiner, getrennter Werkzeuge. Wir glauben, dass es der Schlüssel zu einem stabilen System ist, eine Sache gut zu machen.

### Transparenz und Kontrolle

Eine monolithische Suite vergrößert die Angriffsfläche und fügt unnötige Abstraktion hinzu. Wir bevorzugen Klartext-Logs für Einfachheit und Portabilität. Wenn etwas fehlschlägt, ist das Lesen von Textdateien mit Standardwerkzeugen wie `cat`, `less` oder `grep` viel direkter, als sich auf binäre Logs zu verlassen.

### 100 % systemd-frei

Wir sind stolz darauf, mit der Initiative [systemdfree.com](https://systemdfree.com/) kompatibel zu sein. Durch die Verwendung von `runit` stellen wir sicher, dass dein System modular, transparent und frei von monolithischen Abhängigkeiten bleibt.
