# Gestione di istanze e contenuti

Trinity Launcher è composto da due applicazioni principali che gestiscono diversi aspetti dell'esperienza Minecraft Bedrock.

## Trinchete
**Interfaccia del launcher**

L'applicazione principale per gestire le versioni, avviare il gioco e configurare le istanze.

### Funzionalità della barra superiore
*   **Estrai APK:** Seleziona un file `.apk`, assegna un nome personalizzato e lo estrae usando `mcpelauncher-extract`.
*   **Importa:** Ripristina una versione salvata da un archivio `.tar.gz`.
*   **Strumenti:** Apre rapidamente l'applicazione **Trinito**.

### Funzionalità del pannello destro
*   **PLAY:** Avvia la versione selezionata usando `mcpelauncher-client`.
*   **Crea scorciatoia:** Genera un file `.desktop` per un accesso facile dal menu di sistema.
*   **Modifica configurazione:** Consente di aggiungere variabili d'ambiente (ad es. `DRI_PRIME=1`) per configurazioni di avvio specifiche.
*   **Esporta:** Esegue il backup della versione corrente in un file `.tar.gz`.
*   **Elimina:** Rimuove definitivamente la versione selezionata e i suoi dati.

## Trinito
**Gestore dei contenuti**

Uno strumento dedicato alla gestione di mod, pacchetti di texture e mondi senza toccare direttamente il file system.

### Schede dei contenuti

| Scheda | Tipo | Cartella di destinazione |
| :--- | :--- | :--- |
| **Mod** | File | `behavior_packs/` |
| **Texture** | File | `resource_packs/` |
| **Mondi** | Cartella | `minecraftWorlds/` |

### Stati
*   **Abilitato:** Il file mantiene il suo nome normale e viene caricato dal gioco.
*   **Disabilitato:** Il file viene rinominato con l'estensione `.disabled` e ignorato dal gioco.
*   **Interattivo:** Usa le caselle di controllo per attivare o disattivare i contenuti all'istante.
