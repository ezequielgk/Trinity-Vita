# Trinity Launcher Installation
**Vollständige Anleitung für Linux-Systeme**

Trinity Launcher ist ein community-getriebenes Projekt, das hauptsächlich als **Flatpak**-Paket verteilt wird, um maximale Kompatibilität und Sicherheit im Linux-Ökosystem zu gewährleisten.

::: tip Bevor du beginnst
Stelle sicher, dass **Flatpak** auf deinem System installiert ist. Dadurch läuft der Launcher mit seinen Abhängigkeiten (wie den community-gepflegten Minecraft-Bedrock-Engines) in einer stabilen, isolierten Umgebung.

Falls du es noch nicht hast, besuche die offizielle Setup-Anleitung: [Zu Flatpak.org](https://flatpak.org/setup/)
:::

## Trinity Launcher installieren
Wähle die Methode, die am besten zu deinem Arbeitsablauf passt.

### Methode A: Aus dem Testing-Beta-Repository (EMPFOHLEN)
Dies ist der bevorzugte Weg für Community-Mitglieder, die die neuesten Funktionen und automatische Updates direkt aus unserer Entwicklungspipeline möchten.

**Führe diese Befehle in Reihenfolge in deinem Terminal aus:**

1. **Entferne das Trinity-Repository (falls du die alte Version hattest):**
    ```bash
    flatpak remote-delete trinity
    ```

2. **Füge das Trinity-Repository hinzu:**
    ```bash
    flatpak remote-add trinity https://github.com/Trinity-LA/Trinity-Launcher/releases/download/flatpak/com.trench.trinity.launcher.flatpakrepo
    ```

3. **Installiere die Abhängigkeiten (KDE-Runtime, Qt WebEngine und 32-Bit-OpenGL):**
    ```bash
    flatpak install flathub org.freedesktop.Platform.GL32.default//24.08 org.freedesktop.Platform.Compat.i386//24.08 flathub org.kde.Platform//6.10 flathub io.qt.qtwebengine.BaseApp//6.10
    ```

4. **Installiere Trinity Launcher:**
    ```bash
    flatpak install com.trench.trinity.launcher
    ```

> **Vorteile:** Direkter Zugriff auf die neuesten Beta-Versionen und automatische Hintergrund-Updates.

### Methode B: Aus dem Software-Store

Wenn du eine grafische Oberfläche bevorzugst:

1. **Entferne das alte Repository (falls zutreffend):**
    ```bash
    flatpak remote-delete trinity
    ```

2. Füge das Repository zuerst hinzu:
    ```bash
    flatpak remote-add trinity https://github.com/Trinity-LA/Trinity-Launcher/releases/download/flatpak/com.trench.trinity.launcher.flatpakrepo
    ```

3. Suche nach **"Trinity Launcher"** in deinem Software-Store (GNOME Software, Discover).
    > *Hinweis: Du musst den Store möglicherweise neu starten, nachdem du das Repository hinzugefügt hast.*

### Methode C: AppImage (Beta – Portabel)

Ideal für Nutzer, die eine manuelle Verwaltung ohne Paketmanager bevorzugen.

1. **Herunterladen:**  
   <MinecraftButton link="https://github.com/Trinity-LA/Trinity-Launcher/releases/download/2.6-beta/Trinity_Launcher-x86_64.AppImage" />

2. **Gear Level installieren:** Suche in deinem App Store nach "Gear Level" und installiere es.
3. **Mit Gear Level öffnen:** Rechtsklick auf die `.AppImage`-Datei -> Öffnen mit -> **Gear Level**.
4. **Entsperren & Integrieren:** Klicke auf **"Unlock"**, um sie ausführbar zu machen, und auf **"Add to apps menu"** für einfachen Zugriff.

---

## Remote-Login (nur AppImage)

::: warning Lokal vs. Remote
Dieser Schritt ist **nur** für die **AppImage**-Version erforderlich, um die Microsoft-Konto-Authentifizierung zu aktivieren.
:::

### Schritt 1: In den Einstellungen aktivieren
1. Öffne Trinity und gehe zu **Einstellungen**.
2. Navigiere zu **Kontoeinstellungen** und aktiviere **Remote-Login**.
3. **Starte** das Spiel vollständig neu.

### Schritt 2: Browser-Authentifizierung
1. Gehe zu [microsoft.com/link](https://microsoft.com/link).
2. Gib den im Spiel angezeigten **Code** ein.
3. Schließe die Anmeldung in deinem Browser ab.
4. Schließe den Dialog im Spiel.

---

## Trinity Launcher ausführen (Flatpak)

- **Über das Menü:** Suche nach "Trinity Launcher" in deiner Anwendungsübersicht.
- **Über das Terminal:**
    ```bash
    flatpak run com.trench.trinity.launcher
    ```

<CommunityCard />
