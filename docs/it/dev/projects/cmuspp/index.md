# CMUS++
**Piccolo, veloce e potente lettore musicale per console, scritto in C++17**

![License](https://img.shields.io/badge/License-MIT-blue.svg)
![Language](https://img.shields.io/badge/Language-C%2B%2B17-informational.svg)
![Platform](https://img.shields.io/badge/Platform-Linux_macOS_Windows-9cf.svg)

[Visita il repository](https://github.com/Ars-byte/cmuspp)

CMUS++ è un lettore musicale per terminale ultraleggero e pilotato da tastiera, scritto in C++17. È velocissimo, non ha dipendenze grafiche e renderizza senza sfarfallio.

## Funzionalità

- **Formati:** MP3, FLAC, WAV, OGG, OPUS, AIFF.
- **Copertine album:** Copertina incorporata per MP3, FLAC, OGG/OPUS oltre a file `cover.jpg`/`cover.png`.
- **Testi:** File `.lrc` sincronizzati più testi incorporati nei tag (USLT/LYRICS), 100% offline.
- **Multi-piattaforma:** Linux (ALSA), macOS (CoreAudio), Windows (WinMM).
- **Personalizzabile:** 86 temi integrati più supporto per temi XML personalizzati.
- **Veloce:** Tempi di caricamento zero, decodifica efficiente e rendering senza sfarfallio.

## Copertine album

CMUS++ estrae e visualizza automaticamente le copertine degli album:

- **MP3:** frame APIC (ID3v2.2/2.3/2.4)
- **FLAC:** `METADATA_BLOCK_PICTURE`
- **OGG / OPUS:** `METADATA_BLOCK_PICTURE` nei commenti Vorbis
- **Fallback:** `cover.jpg`, `cover.png`, `folder.jpg`, ecc. nella stessa cartella

### Terminali compatibili

- **Kitty / WezTerm / ghostty / iTerm2:** Immagine nativa (protocollo Kitty)
- **Altri terminali** (Alacritty, GNOME, ecc.): Rendering ANSI a semiblocchi (`▄`) con colori veri

## Testi

Premi `l` nel lettore per visualizzare i testi delle canzoni a schermo intero (nasconde la lista). 100% offline, nessuna rete o servizio esterno. I testi vengono risolti come segue:

- **`.lrc` sincronizzati** accanto alla canzone (ad es. `song.mp3` → `song.lrc`). La riga corrente è evidenziata e avanza in sincronia con la riproduzione.
- **Testi incorporati** nei tag del file stesso (frame USLT in MP3, campo LYRICS in FLAC/OGG). Visualizzati come testo statico e navigati con ↑/↓.

Esempio di formato `.lrc`:

```
[ti:Title]
[ar:Artist]
[00:12.50]First line
[00:24.00]Second line
```

Supporta timestamp `[mm:ss]` / `[mm:ss.xx]`, più marcatori per riga (`[00:12][00:24]text`) e il tag `[offset:±ms]`.

## Controlli

CMUS++ è progettato per essere usato interamente senza mouse.

| Tasto | Azione |
| --- | --- |
| ↑ / ↓ (o k/j) | Naviga nell'elenco |
| Invio | Riproduci / entra nella cartella |
| Spazio | Pausa / Riprendi |
| ← / → (o h) | Indietro 5s / Avanti 5s (nel browser: sali di un livello) |
| n / p | Canzone successiva / precedente |
| + / - | Volume su / giù |
| s | Attiva/disattiva Riproduzione casuale |
| r | Attiva/disattiva Ripetizione |
| l | Mostra/nascondi testi (.lrc o incorporati nei tag) a schermo intero |
| / | Cerca una canzone nella cartella corrente (digita per filtrare, Invio per riprodurre) |
| t | Cambia tema colore |
| o | Apri il browser dei file |
| a | Visualizza informazioni (Informazioni) |
| q | Esci |

## Temi personalizzati

Premi `t` nell'app per cambiare tema. Puoi creare i tuoi temi aggiungendo file `.xml` nella cartella `themes/` (accanto all'eseguibile) o in `~/.config/cmuspp/themes/`.

Esempio di struttura (`themes/my-theme.xml`):

```xml
<?xml version="1.0" encoding="UTF-8"?>
<theme name="My Custom Theme">
  <!-- Text colors (Bright -> Dark) -->
  <fg0 r="248" g="248" b="242"/> <fg1 r="215" g="210" b="195"/>
  <fg2 r="117" g="113" b="94"/>  <fg3 r="75"  g="71"  b="60"/>

  <!-- Accents -->
  <acc  r="166" g="226" b="46"/> <warn r="230" g="219" b="116"/>

  <!-- Backgrounds (bgr/bgg/bgb = background | fgr/fgg/fgb = text) -->
  <bghdr  bgr="39" bgg="40" bgb="34" fgr="102" fgg="217" fgb="239"/>
  <bgsel  bgr="73" bgg="72" bgb="62" fgr="248" fgg="248" fgb="242"/>
  <bgplay bgr="30" bgg="44" bgb="18" fgr="166" fgg="226" fgb="46"/>
  <bgstat bgr="29" bgg="29" bgb="24" fgr="117" fgg="113" fgb="94"/>
</theme>
```

I nuovi temi vengono rilevati automaticamente al riavvio dell'app.

## Avvio rapido

Vuoi provarlo? Scarica il binario precompilato dalla [release v1.1.0](https://github.com/Ars-byte/cmuspp/releases/tag/v1.1.0) (Linux x86_64):

```sh
wget https://github.com/Ars-byte/cmuspp/releases/download/v1.1.0/cmuspp-linux-x86_64
chmod +x cmuspp-linux-x86_64
./cmuspp-linux-x86_64
```

Serve la cartella `themes/` (dal repository) accanto all'eseguibile.

## Compilare dal sorgente

### Dipendenze

Ti serve un compilatore C++ e le librerie `libsndfile`, `libjpeg` e `libpng` (più ALSA su Linux).

- **Ubuntu / Debian:** `sudo apt install g++ libsndfile1-dev libasound2-dev libjpeg-dev libpng-dev`
- **Arch Linux:** `sudo pacman -S gcc libsndfile alsa-lib libjpeg-turbo libpng`
- **macOS:** `brew install libsndfile jpeg libpng` (richiede Homebrew)

### Compila

Clona il repository e usa lo script di auto-build incluso:

```sh
chmod +x bootstrap.sh
./bootstrap.sh
./cmuspp
```

### NixOS

Aggiungi il pacchetto da un flake:

```nix
inputs = {
  my-pkgs.url = "github:mikuri12/my-lazy-nixos-pkgs";
};

{ inputs, pkgs, system, ... }:
{
  environment.systemPackages = [
    inputs.my-pkgs.packages.${system}.cmuspp
  ];
}
```

Oppure usa il comando diretto: `nix profile add github:mikuri12/my-lazy-nixos-pkgs#cmuspp`

## Licenza

MIT — sentiti libero di modificare e usare il codice.
