# Installazione di Trinity Launcher
**Guida completa per sistemi Linux**

Trinity Launcher è un progetto guidato dalla community, distribuito principalmente come pacchetto **Flatpak** per garantire la massima compatibilità e sicurezza nell'ecosistema Linux.

::: tip Prima di iniziare
Assicurati di avere **Flatpak** installato sul tuo sistema. Questo garantisce che il launcher e le sue dipendenze (come i motori Minecraft Bedrock gestiti dalla community) funzionino in un ambiente stabile e isolato.

Se non lo hai ancora, visita la guida ufficiale di configurazione: [Vai su Flatpak.org](https://flatpak.org/setup/)
:::

## Installa Trinity Launcher
Scegli il metodo più adatto al tuo flusso di lavoro.

### Metodo A: Dal repository Testing-Beta (CONSIGLIATO)
È il modo preferito dai membri della community che vogliono le ultime funzionalità e aggiornamenti automatici direttamente dal nostro pipeline di sviluppo.

**Esegui questi comandi in ordine nel tuo terminale:**

1. **Rimuovi il repository Trinity (se avevi la vecchia versione):**
    ```bash
    flatpak remote-delete trinity
    ```

2. **Aggiungi il repository Trinity:**
    ```bash
    flatpak remote-add trinity https://github.com/Trinity-LA/Trinity-Launcher/releases/download/flatpak/com.trench.trinity.launcher.flatpakrepo
    ```

3. **Installa il runtime KDE (Qt6):**
    ```bash
    flatpak install flathub org.kde.Platform//6.10
    ```

4. **Installa la base Qt WebEngine:**
    ```bash
    flatpak install flathub io.qt.qtwebengine.BaseApp//6.10
    ```

5. **Installa Trinity Launcher:**
    ```bash
    flatpak install com.trench.trinity.launcher
    ```

> **Vantaggi:** Accesso diretto alle ultime versioni beta e aggiornamenti automatici in background.

### Metodo B: Dal Negozio Software

Se preferisci un'interfaccia grafica:

1. **Rimuovi il vecchio repository (se applicabile):**
    ```bash
    flatpak remote-delete trinity
    ```

2. Aggiungi prima il repository:
    ```bash
    flatpak remote-add trinity https://github.com/Trinity-LA/Trinity-Launcher/releases/download/flatpak/com.trench.trinity.launcher.flatpakrepo
    ```

3. Cerca **"Trinity Launcher"** nel tuo Negozio Software (GNOME Software, Discover).
    > *Nota: Potrebbe essere necessario riavviare il negozio dopo aver aggiunto il repository.*

### Metodo C: AppImage (Beta - Portatile)

Ideale per gli utenti che preferiscono la gestione manuale senza gestori di pacchetti.

1. **Scarica:**  
   <MinecraftButton link="https://github.com/Trinity-LA/Trinity-Launcher/releases/download/2.6-beta/Trinity_Launcher-x86_64.AppImage" />

2. **Installa Gear Level:** Cerca "Gear Level" nel tuo App Store e installalo.
3. **Apri con Gear Level:** Fai clic con il tasto destro sul file `.AppImage` -> Apri con -> **Gear Level**.
4. **Sblocca e integra:** Fai clic su **"Unlock"** per renderlo eseguibile e su **"Add to apps menu"** per un accesso facile.

---

## Accesso remoto (solo AppImage)

::: warning Locale vs remoto
Questo passaggio è **necessario solo** per la versione **AppImage** per abilitare l'autenticazione dell'account Microsoft.
:::

### Passo 1: Abilita nelle impostazioni
1. Apri Trinity e vai su **Impostazioni**.
2. Vai su **Impostazioni account** e attiva **Accesso remoto**.
3. **Riavvia** completamente il gioco.

### Passo 2: Autenticazione nel browser
1. Vai su [microsoft.com/link](https://microsoft.com/link).
2. Inserisci il **codice** mostrato nel gioco.
3. Completa l'accesso nel tuo browser.
4. Chiudi il dialogo nel gioco.

---

## Esegui Trinity Launcher (Flatpak)

- **Dal menu:** Cerca "Trinity Launcher" nel pannello delle applicazioni.
- **Dal terminale:**
    ```bash
    flatpak run com.trench.trinity.launcher
    ```

<CommunityCard />
