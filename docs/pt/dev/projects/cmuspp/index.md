# CMUS++
**Player de música para console pequeno, rápido e poderoso, escrito em C++17**

![License](https://img.shields.io/badge/License-MIT-blue.svg)
![Language](https://img.shields.io/badge/Language-C%2B%2B17-informational.svg)
![Platform](https://img.shields.io/badge/Platform-Linux_macOS_Windows-9cf.svg)

[Visite o repositório](https://github.com/Ars-byte/cmuspp)

O CMUS++ é um player de música para terminal ultraleve e controlado por teclado, escrito em C++17. É extremamente rápido, não tem dependências gráficas e renderiza sem cintilação.

## Recursos

- **Formatos:** MP3, FLAC, WAV, OGG, OPUS, AIFF.
- **Capa do álbum:** Arte da capa incorporada para MP3, FLAC, OGG/OPUS além de arquivos `cover.jpg`/`cover.png`.
- **Letras:** Arquivos `.lrc` sincronizados além de letras incorporadas nas tags (USLT/LYRICS), 100% offline.
- **Multiplataforma:** Linux (ALSA), macOS (CoreAudio), Windows (WinMM).
- **Personalizável:** 86 temas integrados além de suporte para temas XML personalizados.
- **Rápido:** Tempos de carregamento zero, decodificação eficiente e renderização sem cintilação.

## Capa do Álbum

O CMUS++ extrai e exibe a arte do álbum automaticamente:

- **MP3:** frame APIC (ID3v2.2/2.3/2.4)
- **FLAC:** `METADATA_BLOCK_PICTURE`
- **OGG / OPUS:** `METADATA_BLOCK_PICTURE` nos comentários Vorbis
- **Fallback:** `cover.jpg`, `cover.png`, `folder.jpg`, etc. no mesmo diretório

### Terminais compatíveis

- **Kitty / WezTerm / ghostty / iTerm2:** Imagem nativa (protocolo Kitty)
- **Outros terminais** (Alacritty, GNOME, etc.): Renderização ANSI de meio bloco (`▄`) com cores verdadeiras

## Letras

Pressione `l` dentro do player para ver as letras da música em tela cheia (oculta a lista). 100% offline, sem rede ou serviços externos. As letras são resolvidas da seguinte forma:

- **`.lrc` sincronizado** ao lado da música (por exemplo, `song.mp3` → `song.lrc`). A linha atual é destacada e avança em sincronia com a reprodução.
- **Letras incorporadas** nas tags do próprio arquivo (frame USLT no MP3, campo LYRICS no FLAC/OGG). Exibidas como texto estático e navegadas com ↑/↓.

Exemplo do formato `.lrc`:

```
[ti:Title]
[ar:Artist]
[00:12.50]First line
[00:24.00]Second line
```

Ele suporta timestamps `[mm:ss]` / `[mm:ss.xx]`, múltiplos marcadores por linha (`[00:12][00:24]text`), e a tag `[offset:±ms]`.

## Controles

O CMUS++ foi projetado para ser usado inteiramente sem mouse.

| Tecla | Ação |
| --- | --- |
| ↑ / ↓ (ou k/j) | Navegar na lista |
| Enter | Reproduzir / entrar na pasta |
| Espaço | Pausar / Retomar |
| ← / → (ou h) | Voltar 5s / Avançar 5s (no navegador: subir um nível) |
| n / p | Próxima / música anterior |
| + / - | Aumentar / diminuir volume |
| s | Alternar Embaralhar |
| r | Alternar Repetir |
| l | Mostrar/ocultar letras (.lrc ou incorporadas nas tags) em tela cheia |
| / | Pesquisar uma música na pasta atual (digite para filtrar, Enter para reproduzir) |
| t | Mudar o tema de cores |
| o | Abrir o navegador de arquivos |
| a | Ver informações (Sobre) |
| q | Sair |

## Temas Personalizados

Pressione `t` dentro do aplicativo para mudar de tema. Você pode criar seus próprios temas adicionando arquivos `.xml` na pasta `themes/` (ao lado do executável) ou em `~/.config/cmuspp/themes/`.

Exemplo de estrutura (`themes/my-theme.xml`):

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

Novos temas são detectados automaticamente quando o aplicativo é reiniciado.

## Início Rápido

Quer experimentar? Baixe o binário pré-compilado da [versão v1.1.0](https://github.com/Ars-byte/cmuspp/releases/tag/v1.1.0) (Linux x86_64):

```sh
wget https://github.com/Ars-byte/cmuspp/releases/download/v1.1.0/cmuspp-linux-x86_64
chmod +x cmuspp-linux-x86_64
./cmuspp-linux-x86_64
```

Ele precisa da pasta `themes/` (do repositório) ao lado do executável.

## Compilar a partir do Código Fonte

### Dependências

Você precisa de um compilador C++ e das bibliotecas `libsndfile`, `libjpeg` e `libpng` (além de ALSA no Linux).

- **Ubuntu / Debian:** `sudo apt install g++ libsndfile1-dev libasound2-dev libjpeg-dev libpng-dev`
- **Arch Linux:** `sudo pacman -S gcc libsndfile alsa-lib libjpeg-turbo libpng`
- **macOS:** `brew install libsndfile jpeg libpng` (requer Homebrew)

### Compilar

Clone o repositório e use o script de compilação automática incluído:

```sh
chmod +x bootstrap.sh
./bootstrap.sh
./cmuspp
```

### NixOS

Adicione o pacote a partir de um flake:

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

Ou use o comando direto: `nix profile add github:mikuri12/my-lazy-nixos-pkgs#cmuspp`

## Licença

MIT — sinta-se à vontade para modificar e usar o código.
