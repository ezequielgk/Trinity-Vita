# BedrockOnLinux
**Esegui Minecraft Bedrock per Windows (edizione GDK) su Linux con identità nativa Microsoft/Xbox, multigiocatore, amici e Realms**

[Visita il repository](https://github.com/Wyze3306/BedrockOnLinux)

BedrockOnLinux installa la versione di Minecraft che selezioni, prepara un prefisso Wine gestito ed esegue il gioco tramite un motore **GDK-Proton revisionato basato su WineGDK**. Non è richiesto alcun compilatore o installazione di Windows sulla macchina del giocatore.

## Cosa offre la 2.0

- **Identità Xbox nativa:** La configurazione di XGame, XUser, le firme delle richieste, i gamertag, i privilegi e il contesto XSAPI sono implementati da WineGDK.
- **Gioco online:** L'elenco amici, gli inviti, l'unione agli amici, i server pubblici e i Realms usano quella identità nativa. I Realms ricevono un token XSTS dedicato per il pubblico Bedrock Realms invece di un token Xbox generico.
- **Nessun patcher di memoria di Minecraft:** Il motore gestito non contiene codice che scansiona o riscrive il processo di Minecraft in esecuzione. Il confezionamento rifiuta i resti della precedente implementazione in memoria di processo. Le correzioni statiche e riconosciute di compatibilità del gioco e di Proton vengono comunque applicate prima dell'avvio.
- **Selettore file nativo:** Il motore vincolato implementa il selettore WinAppSDK per entrambe le architetture Windows e ogni preparazione con prefisso fermo ne ripara la registrazione di attivazione. L'importazione dei mondi di gioco e la selezione di skin personalizzate di Minecraft aprono quindi la finestra di dialogo dei file del desktop invece di fallire in `RoGetActivationFactory`. L'importazione di `.mcskin` lato launcher resta disponibile come percorso di installazione aggiuntivo non interattivo.
- **Sicurezza grafica:** Il launcher controlla lo stato del display esistente e i log testuali del kernel senza aprire Vulkan o OpenGL. Una sessione nota come non sicura viene bloccata prima dell'avvio di Wine. La GUI offre un riconoscimento solo per un incidente verificato del precedente avvio; non può ignorare un guasto attuale del driver o una sessione Wine/UMU in esecuzione.
- **Aggiornamenti verificati:** Gli archivi del motore, i file di runtime critici e i payload delle dipendenze sono vincolati a SHA-256. Un aggiornamento rifiutato non sostituisce un motore funzionante.
- **Profili account isolati:** Un utente Linux può creare account Xbox, prefisso Wine, impostazioni e radici dei mondi separati condividendo i grandi download del gioco, del motore e del runtime.

> [!NOTE]
> Il flusso di accesso Microsoft viene eseguito localmente tra il launcher e i servizi Microsoft e Xbox. BedrockOnLinux non usa un relay di account né un proxy per il multigiocatore.

## Installazione

Scarica i file dell'applicazione dall'[ultima release](https://github.com/Wyze3306/BedrockOnLinux/releases). Tutte le build attualmente supportate hanno come destinazione Linux x86-64.

| Formato | Ideale per | Comando di avvio |
| --- | --- | --- |
| AppImage | La maggior parte delle distribuzioni desktop basate su glibc | `./BedrockOnLinux-*-x86_64.AppImage` |
| .deb | Debian, Ubuntu, Mint e LMDE | `sudo apt install ./bedrock-on-linux_*_amd64.deb` |
| .pyz portabile | Un host con Python 3.9+ e Tk | `./bedrock-on-linux-*.pyz gui` |
| Pacchetto Flatpak | Installazione locale in sandbox, quando fornito | `flatpak install --user ./BedrockOnLinux-*-x86_64.flatpak` |

### Avvio rapido con AppImage

```sh
chmod +x BedrockOnLinux-2.1.1-x86_64.AppImage
./BedrockOnLinux-2.1.1-x86_64.AppImage
```

Il primo PLAY richiede l'archivio del motore corrispondente:

```
GDK-Proton-xuser-<engine-revision>.tar.gz
```

Con una connessione internet, il launcher scarica automaticamente l'archivio esatto dalla release di BedrockOnLinux. In alternativa puoi tenere quell'asset del motore accanto all'AppImage o al .pyz; un sidecar locale corrispondente viene preferito e verificato prima dell'estrazione. È necessario quando si testa un candidato non pubblicato ed è utile per una prima installazione offline.

Un'installazione esistente viene aggiornata allo stesso modo al suo successivo PLAY. Il launcher valida il nuovo motore prima di una sostituzione atomica e conserva l'albero precedente se download, spazio su disco, estrazione o verifica falliscono.

Se FUSE non è disponibile, l'AppImage può estrarre se stessa a runtime:

```sh
APPIMAGE_EXTRACT_AND_RUN=1 ./BedrockOnLinux-2.1.1-x86_64.AppImage
```

L'AppImage include Python, Tk, la toolkit grafica, cryptography e i certificati CA. Usa comunque il driver grafico dell'host e le librerie comuni X11, Xft e fontconfig.

## Requisiti e limitazioni

- Un **desktop glibc x86-64**. L'AppImage e il motore gestito sono verificati rispetto a una baseline glibc 2.31. I sistemi ARM e solo-musl come Alpine di serie non sono supportati. Non è richiesto un userspace i386 dell'host; il motore gestito usa il percorso pure-WoW64 di Wine.
- **X11 o XWayland** per la GUI del launcher. Il gioco usa normalmente X11/XWayland. Il Wayland nativo di Wine può essere provato con `BOL_INPUT=wayland`, ma resta un backend di gioco sperimentale.
- Un **driver Vulkan 1.3 funzionante** che espone `VK_EXT_device_generated_commands`, o il più vecchio NVIDIA `VK_NV_device_generated_commands`.
- Le GPU permanentemente limitate a Vulkan 1.2 possono provare **Impostazioni > Avanzate > Renderer di compatibilità legacy** (WineD3D), che bypassa il gate Vulkan 1.3 di DXVK.
- Abbastanza spazio libero per il gioco, il motore compresso e l'estrazione temporanea.
- Un **account Microsoft con diritto a Minecraft**. Amici, multigiocatore e Realms dipendono anche dalle impostazioni sulla privacy dell'account e dalla disponibilità del servizio.

> [!WARNING]
> Il launcher è un progetto di compatibilità indipendente e non è affiliato a Mojang o Microsoft, né da loro supportato.

## Gioca

1. Apri BedrockOnLinux.
2. Seleziona **Accedi (Sign in)**, apri la pagina del codice dispositivo Microsoft mostrata dal launcher e inserisci il relativo codice.
3. Seleziona una versione di Minecraft, poi scegli **PLAY**.
4. Usa normalmente le schede **Amici**, **Server** e **Realms** di Minecraft.

Il primo avvio scarica e prepara Minecraft, poi scarica e verifica il motore gestito e il suo payload di compatibilità online/TLS. Le credenziali dell'account sono memorizzate nella directory dati privata di BedrockOnLinux e immesse nel prefisso Wine fermo prima dell'avvio.

## Più profili Xbox locali

Crea una radice del launcher isolata e una scorciatoia sul desktop per ogni giocatore:

```sh
bedrock-on-linux profiles create "Alice"
bedrock-on-linux profiles create "Bob"
bedrock-on-linux profiles list
```

Ogni scorciatoia imposta il proprio `BOL_HOME`, così l'account Microsoft, il prefisso Wine, la cache di pre-autenticazione, le impostazioni e i mondi restano separati. I pacchetti di gioco, Proton, UMU e le cache di download sono condivisi per evitare download duplicati da più gigabyte.

Poiché PLAY può riparare un runtime condiviso prima di iniziare, un solo profilo alla volta può eseguire Minecraft.

## Trofei (Achievements)

Il launcher prepara un token XSTS dedicato, riservato all'utente, per la richiesta dei Trofei Windows originali di Minecraft. XUser lo seleziona solo per il servizio Trofei, preservando il titolo Windows, lo SCID e la piattaforma del pacchetto, lasciando invariate l'autenticazione sociale, di Marketplace, PlayFab, multigiocatore e Realms.

> [!NOTE]
> Questo carica l'elenco esistente; non sblocca, emula né forza i trofei.

## Importazione dei contenuti

**Importa mondo** e le azioni di selezione delle skin di Minecraft usano il selettore file nativo di WineGDK. Per l'installazione diretta dei contenuti lato launcher mentre Minecraft è chiuso:

```sh
bedrock-on-linux import world.mcworld addon.mcaddon pack.mcpack \
  template.mctemplate skin.mcskin
```

Il launcher importa gli archivi `.mcworld`, `.mcaddon`, `.mcpack`, `.mctemplate` e `.mcskin` nella directory `com.mojang` appropriata.

## Sicurezza GPU

BedrockOnLinux deliberatamente non apre un dispositivo Vulkan o OpenGL per verificare se il driver è sano. Prima dell'avvio può rilevare condizioni come:

- una sessione X11 senza un provider RandR hardware;
- un fallback FBDEV o di rendering software;
- un evento fatale del driver grafico nel journal del kernel;
- una sessione GPU di Minecraft che non è tornata prima di un riavvio o di una perdita di corrente.

Quando il launcher può dimostrare che l'incidente rimanente appartiene al precedente avvio, **Impostazioni > Strumenti** mostra **Riconosci il precedente incidente GPU…** con un passaggio di conferma. Il flusso CLI equivalente è:

```sh
bedrock-on-linux doctor
bedrock-on-linux doctor --acknowledge-gpu-crash
```

## Diagnostica e ripristino

Apri **Impostazioni > Apri la cartella dei log**, oppure ispeziona:

```
$XDG_DATA_HOME/bedrock-on-linux/logs/
```

Il pannello Dettagli della GUI contiene il log del launcher in tempo reale. Comandi utili:

```sh
bedrock-on-linux doctor                 # dipendenze dell'host e sicurezza GPU
bedrock-on-linux doctor --network       # osservazioni DNS/TLS, orologio e VPN
bedrock-on-linux repair                 # ricostruisce il prefisso Wine gestito
bedrock-on-linux versions               # versioni stabili disponibili
bedrock-on-linux versions --beta        # include le versioni beta
bedrock-on-linux setup --mc <version>   # scarica e prepara una versione
bedrock-on-linux login                  # collega un account Microsoft
bedrock-on-linux play                   # avvia la versione selezionata
bedrock-on-linux update                 # controlla un aggiornamento del launcher
```

## Integrità del motore e provenienza del sorgente

Il motore gestito non viene compilato sul computer dell'utente. I manutentori delle release lo producono da input vincolati e il launcher accetta solo la revisione e lo SHA-256 dell'archivio registrati in `bol/config.py`.

- **WineGDK** viene compilato in una chroot Debian 11 (Bullseye) senza privilegi. Ogni ELF risultante viene rifiutato se richiede un simbolo glibc più recente di 2.31.
- La build universale di **vkd3d-proton** contiene le varianti revisionate EXT-DGC e le NV-DGC ripristinate per x86-64 e i386.
- `scripts/package-engine.sh` incorpora licenze, record di build, provenienza del sorgente e un `engine-manifest.json` che genera l'hash dei file di runtime critici.
- L'installazione del motore usa un lock e una rinomina transazionale. Un aggiornamento interrotto o non valido non può diventare silenziosamente il motore gestito attivo.

## Licenza

BedrockOnLinux non include file del gioco Minecraft. WineGDK, GDK-Proton, vkd3d-proton e le dipendenze incluse restano sotto le rispettive licenze. BedrockOnLinux stesso è **concesso con licenza MIT**.
