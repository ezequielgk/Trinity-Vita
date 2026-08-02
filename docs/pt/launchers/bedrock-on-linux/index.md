# BedrockOnLinux
**Execute o Minecraft Bedrock para Windows (edição GDK) no Linux com identidade nativa da Microsoft/Xbox, multijogador, amigos e Realms**

[Visite o repositório](https://github.com/Wyze3306/BedrockOnLinux)

O BedrockOnLinux instala a versão do Minecraft que você selecionar, prepara um prefixo Wine gerenciado e executa o jogo por meio de um mecanismo **GDK-Proton revisado e baseado em WineGDK**. Não é necessário compilador nem instalação do Windows na máquina do jogador.

## O que o 2.0 oferece

- **Identidade nativa do Xbox:** configuração do XGame, XUser, assinaturas de solicitação, gamertags, privilégios e o contexto do XSAPI são implementados pelo WineGDK.
- **Jogo online:** a lista de Amigos, convites, entrar em partidas de amigos, servidores públicos e Realms usam essa identidade nativa. O Realms recebe um token XSTS dedicado para o público do Bedrock Realms, em vez de um token Xbox genérico.
- **Sem patch de memória do Minecraft:** o mecanismo gerenciado não contém código que escaneie ou reescreva o processo do Minecraft em execução. A empacotação rejeita resquícios da antiga implementação de memória de processo. Correções estáticas e com impressão digital do jogo e do Proton ainda são aplicadas antes da inicialização.
- **Seletor de arquivos nativo:** o mecanismo fixado implementa o seletor WinAppSDK para ambas as arquiteturas do Windows, e toda preparação de prefixo parado repara seu registro de ativação. Portanto, a importação de mundos no jogo e a seleção de skin personalizada do Minecraft abrem a caixa de diálogo de arquivos do desktop, em vez de falhar em `RoGetActivationFactory`. A importação de `.mcskin` pelo lado do lançador permanece disponível como um caminho de instalação adicional não interativo.
- **Segurança gráfica:** o lançador verifica o estado atual da exibição e os logs de texto do kernel sem abrir Vulkan ou OpenGL. Uma sessão conhecida como insegura é bloqueada antes do Wine iniciar. A GUI oferece um reconhecimento apenas para um incidente verificado da inicialização anterior; ela não pode descartar uma falha atual do driver nem uma sessão em execução do Wine/UMU.
- **Atualizações verificadas:** arquivos do mecanismo, arquivos de runtime críticos e cargas de dependências são fixados por SHA-256. Uma atualização rejeitada não substitui um mecanismo funcional.
- **Perfis de conta isolados:** um usuário Linux pode criar raízes de conta Xbox, prefixo Wine, configurações e mundos separados enquanto compartilha os grandes downloads do jogo, do mecanismo e do runtime.

> [!NOTE]
> O fluxo de login da Microsoft é executado localmente entre o lançador, a Microsoft e os serviços do Xbox. O BedrockOnLinux não usa um relé de conta nem um proxy de multijogador.

## Instalação

Baixe os arquivos do aplicativo do [último lançamento](https://github.com/Wyze3306/BedrockOnLinux/releases). Todas as compilações atualmente suportadas têm como alvo Linux x86-64.

| Formato | Melhor para | Comando de início |
| --- | --- | --- |
| AppImage | A maioria das distribuições desktop baseadas em glibc | `./BedrockOnLinux-*-x86_64.AppImage` |
| .deb | Debian, Ubuntu, Mint e LMDE | `sudo apt install ./bedrock-on-linux_*_amd64.deb` |
| .pyz portátil | Um host com Python 3.9+ e Tk | `./bedrock-on-linux-*.pyz gui` |
| Pacote Flatpak | Instalação local em sandbox, quando fornecido | `flatpak install --user ./BedrockOnLinux-*-x86_64.flatpak` |

### Início rápido do AppImage

```sh
chmod +x BedrockOnLinux-2.1.1-x86_64.AppImage
./BedrockOnLinux-2.1.1-x86_64.AppImage
```

O primeiro PLAY precisa do arquivo do mecanismo correspondente:

```
GDK-Proton-xuser-<engine-revision>.tar.gz
```

Com uma conexão com a internet, o lançador baixa automaticamente o arquivo exato do lançamento do BedrockOnLinux. Você pode, em vez disso, manter esse recurso do mecanismo ao lado do AppImage ou do .pyz; um sidecar local correspondente é preferido e verificado antes da extração. Isso é necessário ao testar um candidato não publicado e é útil para uma primeira instalação offline.

Uma instalação existente é atualizada da mesma forma no próximo PLAY. O lançador valida o novo mecanismo antes de uma substituição atômica e mantém a árvore anterior se o download, o espaço em disco, a extração ou a verificação falharem.

Se o FUSE não estiver disponível, o AppImage pode se extrair em tempo de execução:

```sh
APPIMAGE_EXTRACT_AND_RUN=1 ./BedrockOnLinux-2.1.1-x86_64.AppImage
```

O AppImage inclui Python, Tk, o kit de ferramentas da GUI, criptografia e certificados de CA. Ele ainda usa o driver gráfico do host e as bibliotecas comuns X11, Xft e fontconfig.

## Requisitos e limitações

- Um **desktop glibc x86-64**. O AppImage e o mecanismo gerenciado são auditados contra uma linha de base glibc 2.31. Sistemas ARM e somente musl, como o Alpine padrão, não são suportados. Um userspace i386 do host não é necessário; o mecanismo gerenciado usa o caminho puro WoW64 do Wine.
- **X11 ou XWayland** para a GUI do lançador. O jogo normalmente usa X11/XWayland. O Wayland nativo do Wine pode ser testado com `BOL_INPUT=wayland`, mas continua sendo um backend experimental para o jogo.
- Um **driver Vulkan 1.3 funcional** que exponha `VK_EXT_device_generated_commands`, ou o mais antigo `VK_NV_device_generated_commands` da NVIDIA.
- GPUs permanentemente limitadas ao Vulkan 1.2 podem tentar **Configurações > Avançado > Renderizador de compatibilidade legada** (WineD3D), que contorna a porta de entrada do Vulkan 1.3 do DXVK.
- Espaço de armazenamento livre suficiente para o jogo, o mecanismo compactado e a extração temporária.
- Uma **conta da Microsoft com direito ao Minecraft**. Amigos, multijogador e Realms também dependem das configurações de privacidade da conta e da disponibilidade do serviço.

> [!WARNING]
> O lançador é um projeto de compatibilidade independente e não é afiliado nem apoiado pela Mojang ou pela Microsoft.

## Jogar

1. Abra o BedrockOnLinux.
2. Selecione **Entrar**, abra a página de código do dispositivo da Microsoft mostrada pelo lançador e insira o código.
3. Selecione uma versão do Minecraft e, em seguida, escolha **PLAY**.
4. Use as guias **Amigos**, **Servidores** e **Realms** do Minecraft normalmente.

A primeira execução baixa e prepara o Minecraft, depois baixa e verifica o mecanismo gerenciado e sua carga de compatibilidade online/TLS. As credenciais da conta são armazenadas no diretório de dados privado do BedrockOnLinux e propagadas para o prefixo Wine parado antes da inicialização.

## Vários perfis locais do Xbox

Crie uma raiz de lançador isolada e um atalho de desktop para cada jogador:

```sh
bedrock-on-linux profiles create "Alice"
bedrock-on-linux profiles create "Bob"
bedrock-on-linux profiles list
```

Cada atalho define seu próprio `BOL_HOME`, para que a conta da Microsoft, o prefixo Wine, o cache de pré-autenticação, as configurações e os mundos permaneçam separados. Os pacotes do jogo, Proton, UMU e os caches de download são compartilhados para evitar downloads duplicados de vários gigabytes.

Como o PLAY pode reparar um runtime compartilhado antes de iniciar, apenas um perfil pode executar o Minecraft por vez.

## Conquistas

O lançador prepara um token XSTS dedicado somente para o usuário para a solicitação de Conquistas do Windows original do Minecraft. O XUser o seleciona apenas para o serviço de Conquistas, preservando o título do Windows empacotado, o SCID e a plataforma, enquanto deixa a autenticação social, do Marketplace, do PlayFab, de multijogador e do Realms inalterada.

> [!NOTE]
> Isso carrega a lista existente; não desbloqueia, emula nem força conquistas.

## Importação de conteúdo

Ações de **Importar Mundo** e seleção de skin do Minecraft usam o seletor de arquivos nativo do WineGDK. Para a instalação direta de conteúdo pelo lado do lançador enquanto o Minecraft está fechado:

```sh
bedrock-on-linux import world.mcworld addon.mcaddon pack.mcpack \
  template.mctemplate skin.mcskin
```

O lançador importa arquivos `.mcworld`, `.mcaddon`, `.mcpack`, `.mctemplate` e `.mcskin` para o diretório `com.mojang` apropriado.

## Segurança da GPU

O BedrockOnLinux deliberadamente não abre um dispositivo Vulkan ou OpenGL para adivinhar se o driver está saudável. Antes da inicialização, ele pode detectar condições como:

- uma sessão X11 sem provedor RandR de hardware;
- fallback para FBDEV ou renderização por software;
- um evento fatal do driver gráfico no diário do kernel;
- uma sessão de GPU do Minecraft que não retornou antes de uma reinicialização ou perda de energia.

Quando o lançador consegue provar que o incidente restante pertence à inicialização anterior, **Configurações > Ferramentas** exibe **Reconhecer incidente anterior da GPU...** com uma etapa de confirmação. O fluxo equivalente pela CLI é:

```sh
bedrock-on-linux doctor
bedrock-on-linux doctor --acknowledge-gpu-crash
```

## Diagnóstico e recuperação

Abra **Configurações > Abrir pasta de logs** ou inspecione:

```
$XDG_DATA_HOME/bedrock-on-linux/logs/
```

O painel Detalhes da GUI contém o log do lançador em tempo real. Comandos úteis:

```sh
bedrock-on-linux doctor                 # dependências do host e segurança da GPU
bedrock-on-linux doctor --network       # observações de DNS/TLS, relógio e VPN
bedrock-on-linux repair                 # reconstruir o prefixo Wine gerenciado
bedrock-on-linux versions               # versões estáveis disponíveis
bedrock-on-linux versions --beta        # incluir versões beta
bedrock-on-linux setup --mc <version>   # baixar e preparar uma versão
bedrock-on-linux login                  # vincular uma conta da Microsoft
bedrock-on-linux play                   # iniciar a versão selecionada
bedrock-on-linux update                 # verificar se há atualização do lançador
```

## Integridade do mecanismo e origem do código

O mecanismo gerenciado não é compilado no computador do usuário. Os mantenedores do lançamento o produzem a partir de entradas fixadas, e o lançador aceita apenas a revisão e o SHA-256 do arquivo registrados em `bol/config.py`.

- **WineGDK** é compilado em um chroot não privilegiado do Debian 11 (Bullseye). Cada ELF resultante é rejeitado se exigir um símbolo de glibc mais novo que o 2.31.
- A compilação universal do **vkd3d-proton** contém variantes revisadas de EXT-DGC e restauradas de NV-DGC para x86-64 e i386.
- `scripts/package-engine.sh` incorpora licenças, registros de compilação, proveniência do código e um `engine-manifest.json` que gera o hash dos arquivos de runtime críticos.
- A instalação do mecanismo usa um bloqueio e uma renomeação transacional. Uma atualização interrompida ou inválida não pode se tornar silenciosamente o mecanismo gerenciado ativo.

## Licença

O BedrockOnLinux não inclui arquivos de jogo do Minecraft. WineGDK, GDK-Proton, vkd3d-proton e as dependências incluídas permanecem sob suas respectivas licenças. O próprio BedrockOnLinux é **licenciado sob MIT**.
