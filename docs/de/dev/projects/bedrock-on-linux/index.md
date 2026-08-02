# BedrockOnLinux
**Führe Minecraft Bedrock für Windows (GDK-Edition) unter Linux mit nativer Microsoft/Xbox-Identität aus**

![License](https://img.shields.io/badge/License-MIT-blue.svg)
![Platform](https://img.shields.io/badge/Platform-Linux-9cf.svg)

[Repository besuchen](https://github.com/Wyze3306/BedrockOnLinux)

BedrockOnLinux installiert die von dir gewählte Minecraft-Version, bereitet einen verwalteten Wine-Prefix vor und führt das Spiel über eine überprüfte, auf WineGDK basierende GDK-Proton-Engine aus. Kein Compiler und keine Windows-Installation sind erforderlich.

## Hauptfunktionen

- **Native Xbox-Identität:** XGame-Konfiguration, XUser, Signaturanfragen, Gamertags, Berechtigungen und der XSAPI-Kontext werden von WineGDK implementiert.
- **Online-Spiel:** Freundesliste, Einladungen, öffentliche Server und Realms nutzen diese native Identität. Realms erhält ein dediziertes XSTS-Token für das Bedrock-Realms-Publikum.
- **Kein Minecraft-Speicher-Patcher:** Die verwaltete Engine enthält keinen Code, der den laufenden Minecraft-Prozess scannt oder neu schreibt.
- **Nativer Dateiauswahldialog:** Der In-Game-Weltimport und die Auswahl eigener Skins öffnen den Desktop-Dateidialog.
- **Grafiksicherheit:** Eine bekannte unsichere Sitzung wird vor dem Wine-Start blockiert.
- **Verifizierte Updates:** Engine-Archive, Laufzeitdateien und Abhängigkeits-Pakete sind SHA-256-verankert.
- **Isolierte Kontoprofile:** Ein Linux-Benutzer kann separate Xbox-Konto-, Wine-Prefix-, Einstellungs- und Welten-Roots erstellen.

Der Microsoft-Anmeldevorgang läuft lokal ab. BedrockOnLinux nutzt kein Konto-Relay oder Multiplayer-Proxy.

## Installationsformate

| Format | Am besten für | Startbefehl |
| --- | --- | --- |
| AppImage | Die meisten glibc-basierten Desktop-Distributionen | `./BedrockOnLinux-*-x86_64.AppImage` |
| .deb | Debian, Ubuntu, Mint und LMDE | `sudo apt install ./bedrock-on-linux_*_amd64.deb` |
| Tragbare .pyz | Ein Host mit Python 3.9+ und Tk | `./bedrock-on-linux-*.pyz gui` |
| Flatpak-Bundle | Sandboxierte lokale Installation, falls bereitgestellt | `flatpak install --user ./BedrockOnLinux-*-x86_64.flatpak` |

## Lizenz

MIT.
