# Instanz- & Inhaltsverwaltung

Trinity Launcher besteht aus zwei Hauptanwendungen, die verschiedene Aspekte der Minecraft-Bedrock-Erfahrung abdecken.

## Trinchete
**Launcher-Oberfläche**

Die Hauptanwendung zum Verwalten von Versionen, Starten des Spiels und Konfigurieren von Instanzen.

### Funktionen der oberen Leiste
*   **APK extrahieren:** Wählt eine `.apk`-Datei aus, vergibt einen benutzerdefinierten Namen und extrahiert sie mit `mcpelauncher-extract`.
*   **Importieren:** Stellt eine gespeicherte Version aus einem `.tar.gz`-Archiv wieder her.
*   **Werkzeuge:** Öffnet schnell die **Trinito**-Anwendung.

### Funktionen des rechten Bedienfelds
*   **PLAY:** Startet die ausgewählte Version mit `mcpelauncher-client`.
*   **Verknüpfung erstellen:** Erzeugt eine `.desktop`-Datei für den einfachen Zugriff über das Systemmenü.
*   **Konfiguration bearbeiten:** Ermöglicht das Hinzufügen von Umgebungsvariablen (z. B. `DRI_PRIME=1`) für spezifische Startkonfigurationen.
*   **Exportieren:** Sichert die aktuelle Version als `.tar.gz`-Datei.
*   **Löschen:** Entfernt die ausgewählte Version und ihre Daten dauerhaft.

## Trinito
**Inhaltsmanager**

Ein dediziertes Werkzeug zum Verwalten von Mods, Texturpaketen und Welten, ohne direkt auf das Dateisystem zuzugreifen.

### Inhalts-Tabs

| Tab | Typ | Zielordner |
| :--- | :--- | :--- |
| **Mods** | Datei | `behavior_packs/` |
| **Texturen** | Datei | `resource_packs/` |
| **Welten** | Ordner | `minecraftWorlds/` |

### Zustände
*   **Aktiviert:** Die Datei behält ihren normalen Namen und wird vom Spiel geladen.
*   **Deaktiviert:** Die Datei wird mit der Erweiterung `.disabled` umbenannt und vom Spiel ignoriert.
*   **Interaktiv:** Nutze Kontrollkästchen, um Inhalte sofort ein- oder auszuschalten.
