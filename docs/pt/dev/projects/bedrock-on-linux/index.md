# BedrockOnLinux
**Execute o Minecraft Bedrock para Windows (edição GDK) no Linux com identidade nativa da Microsoft/Xbox**

![License](https://img.shields.io/badge/License-MIT-blue.svg)
![Platform](https://img.shields.io/badge/Platform-Linux-9cf.svg)

[Visite o repositório](https://github.com/Wyze3306/BedrockOnLinux)

O BedrockOnLinux instala a versão do Minecraft que você selecionar, prepara um prefixo Wine gerenciado e executa o jogo por meio de um mecanismo GDK-Proton revisado e baseado em WineGDK. Não é necessário compilador nem instalação do Windows.

## Principais Recursos

- **Identidade nativa do Xbox:** configuração do XGame, XUser, assinaturas de solicitação, gamertags, privilégios e o contexto do XSAPI são implementados pelo WineGDK.
- **Jogo online:** lista de amigos, convites, servidores públicos e Realms usam essa identidade nativa. O Realms recebe um token XSTS dedicado para o público do Bedrock Realms.
- **Sem patch de memória do Minecraft:** o mecanismo gerenciado não contém código que escaneie ou reescreva o processo do Minecraft em execução.
- **Seletor de arquivos nativo:** a importação de mundos no jogo e a seleção de skin personalizada abrem a caixa de diálogo de arquivos do desktop.
- **Segurança gráfica:** uma sessão conhecida como insegura é bloqueada antes do Wine iniciar.
- **Atualizações verificadas:** arquivos do mecanismo, arquivos de runtime e cargas de dependências são fixados por SHA-256.
- **Perfis de conta isolados:** um usuário Linux pode criar raízes de conta Xbox, prefixo Wine, configurações e mundos separados.

O fluxo de login da Microsoft é executado localmente. O BedrockOnLinux não usa um relé de conta nem um proxy de multijogador.

## Formatos de Instalação

| Formato | Melhor para | Comando de início |
| --- | --- | --- |
| AppImage | A maioria das distribuições desktop baseadas em glibc | `./BedrockOnLinux-*-x86_64.AppImage` |
| .deb | Debian, Ubuntu, Mint e LMDE | `sudo apt install ./bedrock-on-linux_*_amd64.deb` |
| .pyz portátil | Um host com Python 3.9+ e Tk | `./bedrock-on-linux-*.pyz gui` |
| Pacote Flatpak | Instalação local em sandbox, quando fornecido | `flatpak install --user ./BedrockOnLinux-*-x86_64.flatpak` |

## Licença

MIT.
