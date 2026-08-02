# Audio Source
**Ein Android-Gerät als USB-Mikrofon verwenden**

![License](https://img.shields.io/badge/License-MIT-blue.svg)
![Platform](https://img.shields.io/badge/Platform-Android_Linux-9cf.svg)

[Repository besuchen](https://github.com/ezequielgk/audiosource)

> [!NOTE]
> Dies ist ein Fork, der eine **Terminal-Benutzeroberfläche (TUI)** und ein **Systemtray-Symbol** für eine einfachere Steuerung der Anwendung hinzufügt. Es funktioniert direkt mit dem offiziellen APK des ursprünglichen Erstellers [gdzx](https://github.com/gdzx/audiosource), ohne dass du ein benutzerdefiniertes oder modifiziertes APK installieren musst.

Audio Source leitet Mikrofon-Audioeingaben von Android an den **PulseAudio-Daemon** über ADB weiter, sodass du dein Android-Gerät als USB-Mikrofon verwenden kannst.

## Voraussetzungen

- Gerät mit mindestens **Android 4.0** (API-Level 14), aber vollständig getestet nur unter Android 10 (API-Level 29) – die Ergebnisse können also variieren.
- **Android SDK Platform Tools** (erfordert `adb` im PATH).
- **PulseAudio oder PipeWire** mit PulseAudio-Unterstützung (erfordert `pactl` im PATH).

## Installation

### Auf deinem Android-Gerät

1. Gehe zu **Einstellungen > Über das Telefon** und tippe 7-mal auf **Buildnummer**, um das Menü **Entwickleroptionen** zu aktivieren.
2. Aktiviere unter **Einstellungen > System > Entwickleroptionen** die **USB-Debugging**-Option (Android Debug Bridge).
3. Installiere die Audio-Source-Android-App:
   - (Empfohlen) Hol sie dir auf [F-Droid](https://f-droid.org/).
   - Oder lade das APK vom neuesten Release herunter.
   - Oder baue sie aus dem Quellcode (siehe Build und Installation).

### Auf deinem Linux-PC

#### Automatische Installation (Empfohlen)

Du kannst den interaktiven Installer mit einem einzigen Befehl automatisch herunterladen, extrahieren und starten:

```sh
curl -sSL https://raw.githubusercontent.com/ezequielgk/audiosource/master/install.sh | bash
```

**Für Void:**

```sh
curl -sSL https://raw.githubusercontent.com/ezequielgk/audiosource/master/install-void.sh | bash
```

#### Manuelle Installation

1. Lade den Linux-Client `audiosource-linux.tar.gz` vom neuesten Release herunter.
2. Extrahiere das Archiv und öffne ein Terminal im extrahierten Verzeichnis.
3. Führe den interaktiven Installer aus:

```sh
$ ./install.sh
```

Der Installer bietet ein Menü zum Auflösen von Abhängigkeiten (erfordert sudo), zum lokalen Installieren der App oder zum Deinstallieren.

## Verwendung

### Desktop-TUI und Systemtray

Nach der Installation kannst du die Anwendung über das Anwendungsmenü deines Desktops starten (suche nach **Audio Source**) oder direkt über ein Terminal:

```sh
$ audiosource
```

Dadurch wird automatisch das Systemtray-Symbol gestartet und die Terminaloberfläche damit verbunden.

### Interaktive Steuerung

| Taste | Aktion |
| --- | --- |
| **[S]** | Start: Startet die Audio-Weiterleitung. |
| **[C]** | Stop: Stoppt die Audio-Weiterleitung. |
| **[T]** | In Tray ausblenden: Schließt die Terminaloberfläche, lässt aber den Systemtray-Daemon und die Audio-Weiterleitung im Hintergrund laufen (integriert sich nativ in Desktop-Benachrichtigungen). |
| **[M]** | Stumm/Unstumm: Schaltet die Mikrofon-Stummschaltung sofort um. |
| **[Z]/[X]** | Lautstärke: Passt die Mikrofonlautstärke dynamisch mit sofortigem visuellem Feedback an. |
| **[W]** | Web: Startet einen lokalen Webserver zur Audiosteuerung und zeigt einen QR-Code (mit direkter URL) an. Du kannst dich von jedem Gerät in deinem Netzwerk verbinden. |
| **[A]** | ADB: Öffnet das Menü für Wireless-Debugging zum Koppeln oder Verbinden eines Geräts über WLAN, einschließlich einer neuen Option „Pair via QR". |
| **[Q]** | Alles beenden: Beendet die Terminaloberfläche, fährt den Systemtray-Daemon herunter und stoppt die Audio-Weiterleitung. |

### Wireless-Debugging (WLAN)

Du kannst Audio Source ohne USB-Kabel verwenden, indem du dich nativ über die Oberfläche mit WLAN verbindest. Drücke **[A] ADB** in der TUI, um das Wireless-Menü zu öffnen:

- **Connect:** Verbinde dich hier zu einem bereits gekoppelten Gerät, indem du IP und Port eingibst.
- **Pair (Android 11+):** Gib die Kopplungs-IP, den Port und den 6-stelligen Kopplungscode ein, den dir die Entwickleroptionen deines Telefons anzeigen.
- **Pair via QR (Android 11+):** Die TUI startet einen nativen mDNS-Server und zeigt einen QR-Code auf deinem Bildschirm an. Scanne ihn einfach über den Bildschirm **„Wireless-Debugging -> Pair device with QR code"** deines Telefons!

> [!NOTE]
> Der Audiostream wird automatisch gepuffert und für WLAN optimiert, um Audio-Aussetzer und Verbindungsabbrüche zu verhindern.

### Befehlszeilenschnittstelle (CLI)

Der installierte Befehl `audiosource` unterstützt auch spezielle Argumente:

- **App aktualisieren:** Lädt die neueste Version automatisch von GitHub herunter und installiert sie:

```sh
$ audiosource update
```

- **Hilfe:** Zeigt die verfügbaren Befehlszeilenoptionen an:

```sh
$ audiosource --help
```

- **Version:** Zeigt die aktuelle Anwendungsversion an:

```sh
$ audiosource --version
```

### Benutzerdefinierte ASCII-Kunst

Du kannst das TUI-Logo personalisieren, indem du die Standardkunst ersetzt:

- Bearbeite die Datei unter `~/.config/audiosource/ascii.txt` und füge deinen benutzerdefinierten Text ein. Die TUI zentriert ihn automatisch und passt das Layout nahtlos an.
- Alternativ kannst du `~/.config/audiosource/config.json` mit einem `ascii_art`-Schlüssel verwenden.

### Mehrere Geräte

Wenn mehrere Geräte verbunden sind, musst du die Seriennummer des Geräts angeben, an das das Audio weitergeleitet werden soll. Geräte-Seriennummern findest du mit `adb devices`.

Dann kannst du die Seriennummer als Argument angeben:

```sh
$ ./audiosource -s 1234 run
```

Oder durch Setzen der Umgebungsvariablen `ANDROID_SERIAL`:

```sh
$ ANDROID_SERIAL=1234 ./audiosource run
```

Du kannst Job-Kontrolle verwenden, um Audio von mehreren Geräten gleichzeitig weiterzuleiten:

```sh
$ ./audiosource -s shiba run &  # ENTER drücken, um die Kontrolle über dein Terminal zurückzugewinnen
$ ./audiosource -s 192.168.1.188:39857 run
```

## Fehlerbehebung

Wenn du den Fehler **adb not found** erhältst, bedeutet das, dass der Befehl `adb` entweder nicht installiert ist oder nicht im PATH deines Systems liegt. Auf den meisten Distributionen kannst du ihn über den Paketmanager installieren:

```sh
# Arch Linux
$ pacman -S android-tools

# Debian/Ubuntu
$ apt install android-tools-adb
```

Überprüfe nach der Installation mit `adb --version`, dass er funktioniert, und führe `audiosource` erneut aus.

**Häufige Tipps:**

- Stelle sicher, dass dein Telefon verbunden ist, USB-Debugging aktiviert ist und der PC autorisiert ist (prüfe dein Telefon auf eine Aufforderung, die Verbindung zu erlauben).
- Führe `adb devices` aus, um zu bestätigen, dass dein Telefon erkannt wird (es sollte eine Seriennummer und "device" anzeigen).
- Wenn keine Geräte gefunden werden, versuche ein anderes USB-Kabel/einen anderen Anschluss oder aktiviere das USB-Debugging erneut.

## Build und Installation

Führe `./gradlew tasks` aus, um die verfügbaren Befehle aufzulisten.

### Debug

```sh
$ ./audiosource build
$ ./audiosource install
```

### Release

1. Erzeuge einen Java-KeyStore:

```sh
$ keytool -keystore /home/user/android.jks -genkey -alias release \
       -keyalg RSA -keysize 2048 -validity 30000
```

2. Erstelle `keystore.properties` im Projektstammverzeichnis mit folgendem Inhalt:

```properties
storeFile=/home/user/android.jks
storePassword=STORE_PASS
keyAlias=release
keyPassword=KEY_PASS
```

3. Build und Installation:

```sh
$ export AUDIOSOURCE_PROFILE=release
$ ./audiosource build
$ ./audiosource install
```

## Danksagung

- [sndcpy](https://github.com/rom1v/sndcpy) für die ursprüngliche Implementierung der Audio-Wiedergabe-Weiterleitung.

## Lizenz

Dieses Projekt ist unter der MIT-Lizenz lizenziert ([LICENSE](https://opensource.org/licenses/MIT)).
