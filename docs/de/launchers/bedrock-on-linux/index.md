# BedrockOnLinux
**Führe Minecraft Bedrock für Windows (GDK-Edition) unter Linux mit nativer Microsoft/Xbox-Identität, Multiplayer, Freunden und Realms aus**

[Repository besuchen](https://github.com/Wyze3306/BedrockOnLinux)

BedrockOnLinux installiert die von dir gewählte Minecraft-Version, bereitet einen verwalteten Wine-Prefix vor und führt das Spiel über eine überprüfte, **auf WineGDK basierende GDK-Proton**-Engine aus. Auf dem Rechner des Spielers sind kein Compiler und keine Windows-Installation erforderlich.

## Was 2.0 bietet

- **Native Xbox-Identität:** XGame-Konfiguration, XUser, Signaturanfragen, Gamertags, Berechtigungen und der XSAPI-Kontext werden von WineGDK implementiert.
- **Online-Spiel:** Die Freundesliste, Einladungen, der Beitritt zu Freunden, öffentliche Server und Realms nutzen diese native Identität. Realms erhält ein dediziertes XSTS-Token für das Bedrock-Realms-Publikum anstelle eines generischen Xbox-Tokens.
- **Kein Minecraft-Speicher-Patcher:** Die verwaltete Engine enthält keinen Code, der den laufenden Minecraft-Prozess scannt oder neu schreibt. Die Paketerstellung lehnt Überreste der früheren Prozessspeicher-Implementierung ab. Statische, per Fingerprint erkannte Spiel- und Proton-Kompatibilitäts-Fixes werden weiterhin vor dem Start angewendet.
- **Nativer Dateiauswahldialog:** Die verankerte Engine implementiert die WinAppSDK-Auswahl für beide Windows-Architekturen, und jede Vorbereitung eines gestoppten Prefixes repariert ihre Aktivierungsregistrierung. Der In-Game-Weltimport und die Auswahl eigener Skins von Minecraft öffnen daher den Desktop-Dateidialog, statt in `RoGetActivationFactory` zu scheitern. Der launcherseitige `.mcskin`-Import bleibt als zusätzlicher nicht-interaktiver Installationspfad verfügbar.
- **Grafiksicherheit:** Der Launcher prüft den vorhandenen Anzeigezustand und Text-Kernel-Logs, ohne Vulkan oder OpenGL zu öffnen. Eine bekannte unsichere Sitzung wird vor dem Wine-Start blockiert. Die GUI bietet eine Bestätigung nur für einen verifizierten Zwischenfall des vorherigen Boots; sie kann einen aktuellen Treiberfehler oder eine laufende Wine/UMU-Sitzung nicht verwerfen.
- **Verifizierte Updates:** Engine-Archive, kritische Laufzeitdateien und Abhängigkeits-Pakete sind SHA-256-verankert. Ein abgelehntes Update ersetzt keine funktionierende Engine.
- **Isolierte Kontoprofile:** Ein Linux-Benutzer kann separate Xbox-Konto-, Wine-Prefix-, Einstellungs- und Welten-Roots erstellen, während er die großen Spiel-, Engine- und Laufzeit-Downloads gemeinsam nutzt.

> [!NOTE]
> Der Microsoft-Anmeldevorgang läuft lokal zwischen dem Launcher, Microsoft und den Xbox-Diensten ab. BedrockOnLinux nutzt kein Konto-Relay oder Multiplayer-Proxy.

## Installation

Lade die Anwendungsdateien vom [neuesten Release](https://github.com/Wyze3306/BedrockOnLinux/releases) herunter. Alle derzeit unterstützten Builds zielen auf x86-64-Linux.

| Format | Am besten für | Startbefehl |
| --- | --- | --- |
| AppImage | Die meisten glibc-basierten Desktop-Distributionen | `./BedrockOnLinux-*-x86_64.AppImage` |
| .deb | Debian, Ubuntu, Mint und LMDE | `sudo apt install ./bedrock-on-linux_*_amd64.deb` |
| Tragbare .pyz | Ein Host mit Python 3.9+ und Tk | `./bedrock-on-linux-*.pyz gui` |
| Flatpak-Bundle | Sandboxierte lokale Installation, falls bereitgestellt | `flatpak install --user ./BedrockOnLinux-*-x86_64.flatpak` |

### AppImage-Schnellstart

```sh
chmod +x BedrockOnLinux-2.1.1-x86_64.AppImage
./BedrockOnLinux-2.1.1-x86_64.AppImage
```

Der erste PLAY benötigt das passende Engine-Archiv:

```
GDK-Proton-xuser-<engine-revision>.tar.gz
```

Mit einer Internetverbindung lädt der Launcher das exakte Archiv automatisch vom BedrockOnLinux-Release herunter. Du kannst dieses Engine-Asset stattdessen neben der AppImage- oder .pyz-Datei ablegen; ein passender lokaler Sidecar wird bevorzugt und vor der Extraktion verifiziert. Dies ist beim Testen eines unveröffentlichten Kandidaten erforderlich und für eine Offline-Erstinstallation nützlich.

Eine bestehende Installation wird beim nächsten PLAY auf die gleiche Weise aktualisiert. Der Launcher validiert die neue Engine vor einem atomaren Ersatz und behält den vorherigen Baum, wenn Download, Speicherplatz, Extraktion oder Verifizierung fehlschlagen.

Falls FUSE nicht verfügbar ist, kann sich die AppImage zur Laufzeit selbst extrahieren:

```sh
APPIMAGE_EXTRACT_AND_RUN=1 ./BedrockOnLinux-2.1.1-x86_64.AppImage
```

Die AppImage bündelt Python, Tk, das GUI-Toolkit, Kryptografie und CA-Zertifikate. Sie verwendet weiterhin den Host-Grafiktreiber sowie die gängigen X11-, Xft- und fontconfig-Bibliotheken.

## Anforderungen und Einschränkungen

- Ein **x86-64-glibc-Desktop**. Die AppImage und die verwaltete Engine werden gegen eine glibc-2.31-Baseline geprüft. ARM- und reine-musl-Systeme wie das standardmäßige Alpine werden nicht unterstützt. Ein i386-Userspace des Hosts ist nicht erforderlich; die verwaltete Engine verwendet den reinen WoW64-Pfad von Wine.
- **X11 oder XWayland** für die Launcher-GUI. Das Spiel verwendet normalerweise X11/XWayland. Nativer Wine-Wayland kann mit `BOL_INPUT=wayland` versucht werden, bleibt aber ein experimenteller Spiel-Backend.
- Ein funktionierender **Vulkan-1.3-Treiber**, der `VK_EXT_device_generated_commands` offenlegt, oder der ältere NVIDIA-`VK_NV_device_generated_commands`.
- GPUs, die dauerhaft auf Vulkan 1.2 beschränkt sind, können **Einstellungen > Erweitert > Legacy-Kompatibilitäts-Renderer** (WineD3D) ausprobieren, der das Vulkan-1.3-Gate von DXVK umgeht.
- Genügend freier Speicherplatz für das Spiel, die komprimierte Engine und die temporäre Extraktion.
- Ein **Microsoft-Konto mit Anspruch auf Minecraft**. Freunde, Multiplayer und Realms hängen außerdem von den Datenschutzeinstellungen des Kontos und der Dienstverfügbarkeit ab.

> [!WARNING]
> Der Launcher ist ein unabhängiges Kompatibilitätsprojekt und steht weder in Verbindung mit Mojang oder Microsoft noch wird er von diesen unterstützt.

## Spielen

1. Öffne BedrockOnLinux.
2. Wähle **Anmelden**, öffne die vom Launcher angezeigte Microsoft-Gerätecode-Seite und gib ihren Code ein.
3. Wähle eine Minecraft-Version und dann **PLAY**.
4. Nutze die Tabs **Freunde**, **Server** und **Realms** von Minecraft ganz normal.

Der erste Start lädt Minecraft herunter und bereitet es vor, danach werden die verwaltete Engine und ihr Online-/TLS-Kompatibilitäts-Paket heruntergeladen und verifiziert. Die Kontozugangsdaten werden im privaten BedrockOnLinux-Datenverzeichnis gespeichert und vor dem Start in den gestoppten Wine-Prefix eingespeist.

## Mehrere lokale Xbox-Profile

Erstelle pro Spieler eine isolierte Launcher-Root und eine Desktop-Verknüpfung:

```sh
bedrock-on-linux profiles create "Alice"
bedrock-on-linux profiles create "Bob"
bedrock-on-linux profiles list
```

Jede Verknüpfung setzt ihr eigenes `BOL_HOME`, sodass Microsoft-Konto, Wine-Prefix, Pre-Auth-Cache, Einstellungen und Welten getrennt bleiben. Spielpakete, Proton, UMU und Download-Caches werden gemeinsam genutzt, um doppelte Multi-Gigabyte-Downloads zu vermeiden.

Da PLAY eine gemeinsame Laufzeit vor dem Start reparieren kann, kann immer nur ein Profil Minecraft gleichzeitig ausführen.

## Erfolge

Der Launcher bereitet ein dediziertes Nur-Benutzer-XSTS-Token für die ursprüngliche Windows-Erfolge-Anfrage von Minecraft vor. XUser wählt es nur für den Erfolge-Dienst aus, wodurch der gepackte Windows-Titel, die SCID und die Plattform erhalten bleiben, während die Social-, Marketplace-, PlayFab-, Multiplayer- und Realms-Authentifizierung unverändert bleibt.

> [!NOTE]
> Dies lädt die vorhandene Liste; es schaltet keine Erfolge frei, emuliert sie nicht und erzwingt sie nicht.

## Inhaltsimport

Die Aktionen **Welt importieren** und die Skin-Auswahl von Minecraft verwenden die native Dateiauswahl von WineGDK. Für eine direkte launcherseitige Inhaltsinstallation, während Minecraft geschlossen ist:

```sh
bedrock-on-linux import world.mcworld addon.mcaddon pack.mcpack \
  template.mctemplate skin.mcskin
```

Der Launcher importiert die Archive `.mcworld`, `.mcaddon`, `.mcpack`, `.mctemplate` und `.mcskin` in das passende `com.mojang`-Verzeichnis.

## GPU-Sicherheit

BedrockOnLinux öffnet bewusst kein Vulkan- oder OpenGL-Gerät, um zu erraten, ob der Treiber gesund ist. Vor dem Start kann es Bedingungen wie die folgenden erkennen:

- eine X11-Sitzung ohne Hardware-RandR-Provider;
- einen FBDEV- oder Software-Rendering-Fallback;
- ein fatales Grafiktreiber-Ereignis im Kernel-Journal;
- eine Minecraft-GPU-Sitzung, die vor einem Neustart oder Stromausfall nicht zurückkehrte.

Wenn der Launcher nachweisen kann, dass der verbleibende Zwischenfall zum vorherigen Boot gehört, zeigt **Einstellungen > Werkzeuge** die Option **Vorherigen GPU-Zwischenfall bestätigen…** mit einem Bestätigungsschritt an. Der äquivalente CLI-Ablauf ist:

```sh
bedrock-on-linux doctor
bedrock-on-linux doctor --acknowledge-gpu-crash
```

## Diagnose und Wiederherstellung

Öffne **Einstellungen > Protokollordner öffnen** oder prüfe:

```
$XDG_DATA_HOME/bedrock-on-linux/logs/
```

Das Details-Panel der GUI enthält das Live-Launcher-Protokoll. Nützliche Befehle:

```sh
bedrock-on-linux doctor                 # Host-Abhängigkeiten und GPU-Sicherheit
bedrock-on-linux doctor --network       # DNS/TLS-, Uhr- und VPN-Beobachtungen
bedrock-on-linux repair                 # verwalteten Wine-Prefix neu aufbauen
bedrock-on-linux versions               # verfügbare stabile Versionen
bedrock-on-linux versions --beta        # Beta-Versionen einschließen
bedrock-on-linux setup --mc <version>   # eine Version herunterladen und vorbereiten
bedrock-on-linux login                  # ein Microsoft-Konto verknüpfen
bedrock-on-linux play                   # die gewählte Version starten
bedrock-on-linux update                 # nach einem Launcher-Update suchen
```

## Engine-Integrität und Quellcode-Herkunft

Die verwaltete Engine wird nicht auf dem Computer des Nutzers gebaut. Die Release-Betreuer erzeugen sie aus verankerten Eingaben, und der Launcher akzeptiert nur die in `bol/config.py` aufgezeichnete Revision und das Archiv-SHA-256.

- **WineGDK** wird in einem privilegienfreien Debian-11-(Bullseye)-Chroot gebaut. Jedes resultierende ELF wird abgelehnt, wenn es ein neueres glibc-Symbol als 2.31 benötigt.
- Der universelle **vkd3d-proton**-Build enthält überprüfte EXT-DGC- und wiederhergestellte NV-DGC-Varianten für x86-64 und i386.
- `scripts/package-engine.sh` bettet Lizenzen, Build-Aufzeichnungen, Quellcode-Herkunft und ein `engine-manifest.json` ein, das kritische Laufzeitdateien hasht.
- Die Engine-Installation verwendet eine Sperre und eine transaktionale Umbenennung. Eine unterbrochene oder ungültige Aktualisierung kann nicht stillschweigend zur aktiven verwalteten Engine werden.

## Lizenz

BedrockOnLinux enthält keine Minecraft-Spieldateien. WineGDK, GDK-Proton, vkd3d-proton und gebündelte Abhängigkeiten verbleiben unter ihren jeweiligen Lizenzen. BedrockOnLinux selbst ist **MIT-lizenziert**.
