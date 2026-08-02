# Logs & Berichte

Wenn du ein Problem mit dem Trinity Launcher oder einer seiner Komponenten hast, ist ein detaillierter Bericht mit Logs entscheidend, damit unser Team dir effektiv helfen kann.

## 1. Launcher-Logs abrufen

Bevor du einen Bericht erstellst, musst du die Logs erfassen, die technische Details zum Fehler enthalten.

### Logs über das Terminal exportieren

Der zuverlässigste Weg, Logs zu erhalten, ist derzeit, die Anwendung über das Terminal zu starten. Dadurch wird die Echtzeit-Ausgabe erfasst, was für die Fehlersuche entscheidend ist.

**Für Flatpak-Nutzer:**
```bash
flatpak run "Package.ID"
```

**Für Native-/AppImage-Nutzer:**
```bash
# AppImage
./TrinityLauncher.AppImage

# Native
trinity-launcher
```

Kopiere die Terminalausgabe und speichere sie in einer Textdatei mit dem Namen `trinity-log.txt`.

## 2. Das Problem melden

Führe nach dem Erfassen der Logs die folgenden Schritte aus, um das Problem korrekt zu melden.

1.  Trete unserem **Discord-Server** bei.
2.  Gehe zum Kanal **#help-forum**.
3.  **Erstelle einen neuen Beitrag** für dein Problem.

## 3. Was dein Bericht enthalten sollte

Dein Beitrag muss die folgenden Details enthalten, um berücksichtigt zu werden. **Erkläre bitte klar:**

*   **Was passiert ist:** Eine klare Beschreibung des Fehlers.
*   **Wie es passiert ist:** Schritt-für-Schritt-Anleitung zur Reproduktion des Problems.
*   **Systemdetails:**
    *   Betriebssystem und Version (z. B. Ubuntu 22.04, Arch Linux).
    *   Launcher-Version.
    *   Komponenten/Hardware (CPU, GPU, RAM) – *Nur relevante Informationen angeben.*
*   **Ergriffene Maßnahmen:** Was hast du bisher zur Behebung versucht?

## 4. Richtlinien

::: warning WICHTIG
**Befolge die angehefteten Nachrichten im Kanal #help-forum.**
:::

Wenn du die Richtlinien nicht befolgst oder unvollständige Informationen lieferst, kann deine Support-Anfrage ignoriert oder geschlossen werden. 

*   Sei geduldig und respektvoll.
*   Sende Teammitgliedern keine Direktnachrichten für Support.
*   Verwende Codeblöcke für kurze Log-Auszüge oder lade die Datei für lange Logs hoch.
