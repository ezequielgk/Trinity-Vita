# Log e segnalazioni

Quando incontri un problema con Trinity Launcher o uno dei suoi componenti, fornire una segnalazione dettagliata con i log è fondamentale per consentire al nostro team di aiutarti efficacemente.

## 1. Recupero dei log del launcher

Prima di fare una segnalazione, devi catturare i log che contengono i dettagli tecnici sull'errore.

### Come esportare i log tramite terminale

Attualmente, il modo più affidabile per ottenere i log è eseguire l'applicazione dal terminale. Questo cattura l'output in tempo reale, fondamentale per il debug.

**Per gli utenti Flatpak:**
```bash
flatpak run "Package.ID"
```

**Per gli utenti Native / AppImage:**
```bash
# AppImage
./TrinityLauncher.AppImage

# Native
trinity-launcher
```

Copia l'output del terminale e salvalo in un file di testo chiamato `trinity-log.txt`.

## 2. Segnalare il problema

Una volta ottenuti i log, segui questi passaggi per segnalare correttamente il problema.

1.  Unisciti al nostro **Server Discord**.
2.  Vai al canale **#help-forum**.
3.  **Crea un nuovo post** per il tuo problema.

## 3. Cosa includere nella segnalazione

Il tuo post deve includere i seguenti dettagli per essere preso in considerazione. **Spiega chiaramente:**

*   **Cosa è successo:** Una descrizione chiara dell'errore.
*   **Come è successo:** Istruzioni passo passo per riprodurre il problema.
*   **Dettagli del sistema:**
    *   Sistema operativo e versione (ad es. Ubuntu 22.04, Arch Linux).
    *   Versione del launcher.
    *   Componenti/Hardware (CPU, GPU, RAM) - *Segnala solo le informazioni rilevanti.*
*   **Azioni intraprese:** Cosa hai già provato a fare per risolvere?

## 4. Linee guida

::: warning IMPORTANTE
**Segui i messaggi appuntati nel canale #help-forum.**
:::

Il mancato rispetto delle linee guida o la fornitura di informazioni incomplete possono comportare l'ignoramento o la chiusura della tua richiesta di supporto. 

*   Sii paziente e rispettoso.
*   Non inviare messaggi diretti ai membri del team per il supporto.
*   Usa blocchi di codice per brevi estratti di log o carica il file per log lunghi.
