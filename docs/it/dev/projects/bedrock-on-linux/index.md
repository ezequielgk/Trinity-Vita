# BedrockOnLinux
**Esegui Minecraft Bedrock per Windows (edizione GDK) su Linux con identità nativa Microsoft/Xbox**

![License](https://img.shields.io/badge/License-MIT-blue.svg)
![Platform](https://img.shields.io/badge/Platform-Linux-9cf.svg)

[Visita il repository](https://github.com/Wyze3306/BedrockOnLinux)

BedrockOnLinux installa la versione di Minecraft che selezioni, prepara un prefisso Wine gestito ed esegue il gioco tramite un motore GDK-Proton revisionato basato su WineGDK. Non è richiesto alcun compilatore o installazione di Windows.

## Funzionalità principali

- **Identità Xbox nativa:** La configurazione di XGame, XUser, le firme delle richieste, i gamertag, i privilegi e il contesto XSAPI sono implementati da WineGDK.
- **Gioco online:** L'elenco amici, gli inviti, i server pubblici e i Realms usano quella identità nativa. I Realms ricevono un token XSTS dedicato per il pubblico Bedrock Realms.
- **Nessun patcher di memoria di Minecraft:** Il motore gestito non contiene codice che scansiona o riscrive il processo di Minecraft in esecuzione.
- **Selettore file nativo:** L'importazione dei mondi di gioco e la selezione di skin personalizzate aprono la finestra di dialogo dei file del desktop.
- **Sicurezza grafica:** Una sessione nota come non sicura viene bloccata prima dell'avvio di Wine.
- **Aggiornamenti verificati:** Gli archivi del motore, i file di runtime e i payload delle dipendenze sono vincolati a SHA-256.
- **Profili account isolati:** Un utente Linux può creare account Xbox, prefisso Wine, impostazioni e radici dei mondi separati.

Il flusso di accesso Microsoft viene eseguito localmente. BedrockOnLinux non usa un relay di account né un proxy per il multigiocatore.

## Formati di installazione

| Formato | Ideale per | Comando di avvio |
| --- | --- | --- |
| AppImage | La maggior parte delle distribuzioni desktop basate su glibc | `./BedrockOnLinux-*-x86_64.AppImage` |
| .deb | Debian, Ubuntu, Mint e LMDE | `sudo apt install ./bedrock-on-linux_*_amd64.deb` |
| .pyz portabile | Un host con Python 3.9+ e Tk | `./bedrock-on-linux-*.pyz gui` |
| Pacchetto Flatpak | Installazione locale in sandbox, quando fornito | `flatpak install --user ./BedrockOnLinux-*-x86_64.flatpak` |

## Licenza

MIT.
