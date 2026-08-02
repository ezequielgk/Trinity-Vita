# Audio Source
**Usa un dispositivo Android come microfono USB**

![License](https://img.shields.io/badge/License-MIT-blue.svg)
![Platform](https://img.shields.io/badge/Platform-Android_Linux-9cf.svg)

[Visita il repository](https://github.com/ezequielgk/audiosource)

> [!NOTE]
> Questo è un fork che aggiunge un'**Interfaccia utente a terminale (TUI)** e un'**icona nella tray di sistema** per un controllo più semplice dell'applicazione. Funziona direttamente con l'APK ufficiale fornito dal creatore originale, [gdzx](https://github.com/gdzx/audiosource), senza richiedere l'installazione di APK personalizzati o modificati.

Audio Source inoltra l'input audio del microfono Android al **demone PulseAudio** tramite ADB, così puoi usare il tuo dispositivo Android come microfono USB.

## Requisiti

- Dispositivo con almeno **Android 4.0** (API level 14), ma testato completamente solo su Android 10 (API level 29), quindi i risultati possono variare.
- **Android SDK Platform Tools** (richiede `adb` nel PATH).
- **PulseAudio o PipeWire** con supporto PulseAudio (richiede `pactl` nel PATH).

## Installazione

### Sul tuo dispositivo Android

1. Vai su **Impostazioni > Info sul telefono** e tocca **Numero build** 7 volte per abilitare il menu **Opzioni sviluppatore**.
2. In **Impostazioni > Sistema > Opzioni sviluppatore** abilita **Debug USB** (Android Debug Bridge).
3. Installa l'app Android di Audio Source:
   - (Consigliato) Scaricala da [F-Droid](https://f-droid.org/).
   - Oppure scarica l'APK dall'ultima release.
   - Oppure compilala dal sorgente (vedi Compilazione e installazione).

### Sul tuo PC Linux

#### Installazione automatica (consigliata)

Puoi scaricare, estrarre e avviare automaticamente l'installer interattivo con un unico comando:

```sh
curl -sSL https://raw.githubusercontent.com/ezequielgk/audiosource/master/install.sh | bash
```

**Per Void:**

```sh
curl -sSL https://raw.githubusercontent.com/ezequielgk/audiosource/master/install-void.sh | bash
```

#### Installazione manuale

1. Scarica il client Linux `audiosource-linux.tar.gz` dall'ultima release.
2. Estrai l'archivio e apri un terminale nella cartella estratta.
3. Esegui l'installer interattivo:

```sh
$ ./install.sh
```

L'installer fornisce un menu per risolvere le dipendenze (richiede sudo), installare l'app localmente o disinstallarla.

## Utilizzo

### TUI desktop e tray di sistema

Una volta installato, puoi avviare l'applicazione dal menu applicazioni del tuo desktop (cerca **Audio Source**) o direttamente da qualsiasi terminale:

```sh
$ audiosource
```

Questo avvia automaticamente l'icona nella tray di sistema e collega ad essa l'interfaccia del terminale.

### Controlli interattivi

| Tasto | Azione |
| --- | --- |
| **[S]** | Start: avvia l'inoltro audio. |
| **[C]** | Stop: ferma l'inoltro audio. |
| **[T]** | Nascondi nella tray: chiude l'interfaccia del terminale ma mantiene in esecuzione il demone della tray e l'inoltro audio in background (si integra nativamente con le notifiche desktop). |
| **[M]** | Muto/Attiva: commuta istantaneamente l'audio del microfono. |
| **[Z]/[X]** | Vol: regola dinamicamente il volume del microfono con feedback visivo istantaneo. |
| **[W]** | Web: avvia un server web locale per controllare l'audio e visualizzare un QR code (con URL diretto). Puoi connetterti da qualsiasi dispositivo nella tua rete. |
| **[A]** | ADB: apre il menu di debug wireless per associare o connettere un dispositivo tramite Wi-Fi, inclusa la nuova opzione Associa tramite QR. |
| **[Q]** | Esci da tutto: chiude l'interfaccia del terminale, arresta il demone della tray di sistema e ferma l'inoltro audio. |

### Debug wireless (Wi-Fi)

Puoi usare Audio Source senza cavo USB connettendoti tramite Wi-Fi nativamente dall'interfaccia. Premi **[A] ADB** nella TUI per aprire il menu wireless:

- **Connect:** Usalo per connetterti a un dispositivo già associato inserendo il suo IP e Porta.
- **Pair (Android 11+):** Inserisci l'IP di associazione, la Porta e il Codice di associazione a 6 cifre fornito dalle Opzioni sviluppatore del tuo telefono.
- **Pair via QR (Android 11+):** La TUI avvia un server mDNS nativo e mostra un QR code sul tuo schermo. Scansionalo semplicemente dallo schermo **"Debug wireless -> Associa dispositivo con codice QR"** del tuo telefono!

> [!NOTE]
> Il flusso audio viene automaticamente bufferizzato e ottimizzato per il Wi-Fi per prevenire interruzioni dell'audio e cadute di connessione.

### Interfaccia a riga di comando (CLI)

Il comando `audiosource` installato supporta anche argomenti speciali:

- **Aggiorna app:** Scarica e installa automaticamente l'ultima versione da GitHub:

```sh
$ audiosource update
```

- **Aiuto:** Mostra le opzioni della riga di comando disponibili:

```sh
$ audiosource --help
```

- **Versione:** Mostra la versione corrente dell'applicazione:

```sh
$ audiosource --version
```

### Arte ASCII personalizzata

Puoi personalizzare il logo della TUI sostituendo l'arte predefinita:

- Modifica il file in `~/.config/audiosource/ascii.txt` e incolla il tuo testo personalizzato. La TUI lo centrerà automaticamente e adatterà il layout senza soluzione di continuità.
- In alternativa, usa `~/.config/audiosource/config.json` con una chiave `ascii_art`.

### Più dispositivi

Se hai più dispositivi collegati, devi specificare il numero di serie del dispositivo a cui vuoi inoltrare l'audio. I numeri di serie dei dispositivi si trovano eseguendo `adb devices`.

Poi puoi specificare il numero di serie come argomento:

```sh
$ ./audiosource -s 1234 run
```

Oppure impostando la variabile d'ambiente `ANDROID_SERIAL`:

```sh
$ ANDROID_SERIAL=1234 ./audiosource run
```

Puoi usare il controllo dei job per inoltrare l'audio da più dispositivi simultaneamente:

```sh
$ ./audiosource -s shiba run &  # premi INVIO per riprendere il controllo del tuo terminale
$ ./audiosource -s 192.168.1.188:39857 run
```

## Risoluzione dei problemi

Se riscontri l'errore **adb not found**, significa che il comando `adb` non è installato o non è nel PATH del tuo sistema. Nella maggior parte delle distribuzioni puoi installarlo tramite il gestore pacchetti:

```sh
# Arch Linux
$ pacman -S android-tools

# Debian/Ubuntu
$ apt install android-tools-adb
```

Dopo l'installazione, verifica che funzioni con `adb --version` e riesegui `audiosource`.

**Consigli comuni:**

- Assicurati che il telefono sia collegato, il debug USB sia attivo e il PC sia autorizzato (controlla il telefono per un prompt che consenta la connessione).
- Esegui `adb devices` per confermare che il telefono sia rilevato (dovrebbe mostrare un numero di serie e "device").
- Se non vengono trovati dispositivi, prova un cavo/porta USB diverso o riabilita il debug USB.

## Compilazione e installazione

Esegui `./gradlew tasks` per elencare i comandi disponibili.

### Debug

```sh
$ ./audiosource build
$ ./audiosource install
```

### Release

1. Genera un Java KeyStore:

```sh
$ keytool -keystore /home/user/android.jks -genkey -alias release \
       -keyalg RSA -keysize 2048 -validity 30000
```

2. Crea `keystore.properties` nella directory principale del progetto contenente:

```properties
storeFile=/home/user/android.jks
storePassword=STORE_PASS
keyAlias=release
keyPassword=KEY_PASS
```

3. Compila e installa:

```sh
$ export AUDIOSOURCE_PROFILE=release
$ ./audiosource build
$ ./audiosource install
```

## Riconoscimenti

- [sndcpy](https://github.com/rom1v/sndcpy) per l'implementazione iniziale dell'inoltro della riproduzione audio.

## Licenza

Questo progetto è concesso in licenza con licenza MIT ([LICENSE](https://opensource.org/licenses/MIT)).
