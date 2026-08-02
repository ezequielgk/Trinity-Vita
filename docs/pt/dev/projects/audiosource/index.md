# Audio Source
**Use um dispositivo Android como microfone USB**

![License](https://img.shields.io/badge/License-MIT-blue.svg)
![Platform](https://img.shields.io/badge/Platform-Android_Linux-9cf.svg)

[Visite o repositório](https://github.com/ezequielgk/audiosource)

> [!NOTE]
> Este é um fork que adiciona uma **Interface de Usuário de Terminal (TUI)** e um **ícone de bandeja do sistema** para controle mais fácil do aplicativo. Ele funciona diretamente com o APK oficial fornecido pelo criador original, [gdzx](https://github.com/gdzx/audiosource), sem exigir a instalação de qualquer APK personalizado ou modificado.

O Audio Source encaminha a entrada de áudio do microfone do Android para o **daemon PulseAudio** através do ADB, para que você possa usar seu dispositivo Android como um microfone USB.

## Requisitos

- Dispositivo com pelo menos **Android 4.0** (nível de API 14), mas testado apenas totalmente no Android 10 (nível de API 29), portanto os resultados podem variar.
- **Android SDK Platform Tools** (requer `adb` no PATH).
- **PulseAudio ou PipeWire** com suporte a PulseAudio (requer `pactl` no PATH).

## Instalação

### No seu dispositivo Android

1. Vá para **Configurações > Sobre o telefone** e toque no **Número da versão** 7 vezes para ativar o menu **Opções do desenvolvedor**.
2. Em **Configurações > Sistema > Opções do desenvolvedor**, ative a **depuração USB** (Android Debug Bridge).
3. Instale o aplicativo Audio Source do Android:
   - (Recomendado) Obtenha-o no [F-Droid](https://f-droid.org/).
   - Ou baixe o APK do último lançamento.
   - Ou compile-o a partir do código fonte (consulte Compilar e instalar).

### No seu PC Linux

#### Instalação Automática (Recomendada)

Você pode baixar, extrair e iniciar o instalador interativo automaticamente com um único comando:

```sh
curl -sSL https://raw.githubusercontent.com/ezequielgk/audiosource/master/install.sh | bash
```

**Para Void:**

```sh
curl -sSL https://raw.githubusercontent.com/ezequielgk/audiosource/master/install-void.sh | bash
```

#### Instalação Manual

1. Baixe o cliente Linux `audiosource-linux.tar.gz` do último lançamento.
2. Extraia o arquivo e abra um terminal dentro do diretório extraído.
3. Execute o instalador interativo:

```sh
$ ./install.sh
```

O instalador fornece um menu para resolver dependências (requer sudo), instalar o aplicativo localmente ou desinstalá-lo.

## Uso

### TUI para Desktop e Bandeja do Sistema

Uma vez instalado, você pode iniciar o aplicativo pelo menu de aplicativos do seu desktop (procure por **Audio Source**) ou diretamente de qualquer terminal:

```sh
$ audiosource
```

Isso inicia automaticamente o ícone da bandeja do sistema e conecta a interface do terminal a ele.

### Controles Interativos

| Tecla | Ação |
| --- | --- |
| **[S]** | Iniciar: inicia o encaminhamento de áudio. |
| **[C]** | Parar: interrompe o encaminhamento de áudio. |
| **[T]** | Ocultar na Bandeja: fecha a interface do terminal, mas mantém o daemon da bandeja do sistema e o encaminhamento de áudio rodando em segundo plano (integra-se nativamente com as Notificações do Desktop). |
| **[M]** | Silenciar/Ativar som: alterna o mudo do microfone instantaneamente. |
| **[Z]/[X]** | Vol: ajusta dinamicamente o volume do microfone com feedback visual instantâneo. |
| **[W]** | Web: inicia um servidor web local para controlar o áudio e visualizar um código QR (com URL direto). Você pode se conectar de qualquer dispositivo na sua rede. |
| **[A]** | ADB: abre o menu de Depuração Sem Fio para parear ou conectar a um dispositivo via Wi-Fi, incluindo uma nova opção Parear via QR. |
| **[Q]** | Sair de Tudo: sai da interface do terminal, encerra o daemon da bandeja do sistema e interrompe o encaminhamento de áudio. |

### Depuração Sem Fio (Wi-Fi)

Você pode usar o Audio Source sem cabo USB conectando-se via Wi-Fi nativamente pela interface. Pressione **[A] ADB** dentro da TUI para abrir o menu sem fio:

- **Conectar:** use para conectar a um dispositivo já pareado informando seu IP e Porta.
- **Parear (Android 11+):** informe o IP de pareamento, a Porta e o Código de Pareamento de 6 dígitos fornecido pelas Opções do desenvolvedor do seu telefone.
- **Parear via QR (Android 11+):** a TUI inicia um servidor mDNS nativo e exibe um código QR na sua tela. Basta escaneá-lo na tela **"Depuração sem fio -> Parear dispositivo com código QR"** do seu telefone!

> [!NOTE]
> O fluxo de áudio é automaticamente armazenado em buffer e otimizado para Wi-Fi para evitar cortes de áudio e quedas de conexão.

### Interface de Linha de Comando (CLI)

O comando `audiosource` instalado também suporta argumentos especiais:

- **Atualizar Aplicativo:** baixa e instala automaticamente a versão mais recente do GitHub:

```sh
$ audiosource update
```

- **Ajuda:** mostra as opções de linha de comando disponíveis:

```sh
$ audiosource --help
```

- **Versão:** mostra a versão atual do aplicativo:

```sh
$ audiosource --version
```

### Arte ASCII Personalizada

Você pode personalizar o logotipo da TUI substituindo a arte padrão:

- Edite o arquivo em `~/.config/audiosource/ascii.txt` e cole seu texto personalizado. A TUI o centralizará automaticamente e ajustará o layout perfeitamente.
- Alternativamente, use `~/.config/audiosource/config.json` com uma chave `ascii_art`.

### Vários Dispositivos

Se você tiver vários dispositivos conectados, precisará especificar o número de série do dispositivo para o qual deseja encaminhar o áudio. Os números de série dos dispositivos podem ser encontrados executando `adb devices`.

Em seguida, você pode especificar o número de série como um argumento:

```sh
$ ./audiosource -s 1234 run
```

Ou definindo a variável de ambiente `ANDROID_SERIAL`:

```sh
$ ANDROID_SERIAL=1234 ./audiosource run
```

Você pode usar o controle de jobs para encaminhar áudio de vários dispositivos simultaneamente da seguinte forma:

```sh
$ ./audiosource -s shiba run &  # pressione ENTER para recuperar o controle do seu terminal
$ ./audiosource -s 192.168.1.188:39857 run
```

## Solução de Problemas

Se você encontrar o erro **adb not found**, significa que o comando `adb` não está instalado ou não está no PATH do seu sistema. Na maioria das distribuições, você pode instalá-lo pelo gerenciador de pacotes:

```sh
# Arch Linux
$ pacman -S android-tools

# Debian/Ubuntu
$ apt install android-tools-adb
```

Após a instalação, verifique se está funcionando com `adb --version` e execute `audiosource` novamente.

**Dicas comuns:**

- Certifique-se de que seu telefone esteja conectado, a depuração USB esteja ativada e o PC esteja autorizado (verifique se o telefone exibe um prompt para permitir a conexão).
- Execute `adb devices` para confirmar que o telefone foi detectado (deve mostrar um número de série e "device").
- Se nenhum dispositivo for encontrado, tente outro cabo/porta USB ou reative a depuração USB.

## Compilar e instalar

Execute `./gradlew tasks` para listar os comandos disponíveis.

### Debug

```sh
$ ./audiosource build
$ ./audiosource install
```

### Release

1. Gere um Java KeyStore:

```sh
$ keytool -keystore /home/user/android.jks -genkey -alias release \
       -keyalg RSA -keysize 2048 -validity 30000
```

2. Crie o arquivo `keystore.properties` no diretório raiz do projeto contendo:

```properties
storeFile=/home/user/android.jks
storePassword=STORE_PASS
keyAlias=release
keyPassword=KEY_PASS
```

3. Compile e instale:

```sh
$ export AUDIOSOURCE_PROFILE=release
$ ./audiosource build
$ ./audiosource install
```

## Agradecimento

- [sndcpy](https://github.com/rom1v/sndcpy) pela implementação inicial do encaminhamento de reprodução de áudio.

## Licença

Este projeto é licenciado sob a licença MIT ([LICENSE](https://opensource.org/licenses/MIT)).
