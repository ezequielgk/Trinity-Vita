# Gerenciamento de Instâncias e Conteúdo

O Trinity Launcher é composto por dois aplicativos principais que lidam com diferentes aspectos da experiência Minecraft Bedrock.

## Trinchete
**Interface do Lançador**

O aplicativo principal para gerenciar versões, iniciar o jogo e configurar instâncias.

### Recursos da Barra Superior
*   **Extrair APK:** Seleciona um arquivo `.apk`, atribui um nome personalizado e o extrai usando `mcpelauncher-extract`.
*   **Importar:** Restaura uma versão salva de um arquivo `.tar.gz`.
*   **Ferramentas:** Abre rapidamente o aplicativo **Trinito**.

### Recursos do Painel Direito
*   **JOGAR:** Inicia a versão selecionada usando `mcpelauncher-client`.
*   **Criar Atalho:** Gera um arquivo `.desktop` para acesso fácil pelo menu do sistema.
*   **Editar Config:** Permite adicionar variáveis de ambiente (por exemplo, `DRI_PRIME=1`) para configurações de inicialização específicas.
*   **Exportar:** Faz backup da versão atual para um arquivo `.tar.gz`.
*   **Excluir:** Remove permanentemente a versão selecionada e seus dados.

## Trinito
**Gerenciador de Conteúdo**

Uma ferramenta dedicada para gerenciar mods, pacotes de textura e mundos sem tocar diretamente no sistema de arquivos.

### Abas de Conteúdo

| Aba | Tipo | Pasta de Destino |
| :--- | :--- | :--- |
| **Mods** | Arquivo | `behavior_packs/` |
| **Texturas** | Arquivo | `resource_packs/` |
| **Mundos** | Pasta | `minecraftWorlds/` |

### Estados
*   **Ativado:** O arquivo mantém seu nome normal e é carregado pelo jogo.
*   **Desativado:** O arquivo é renomeado com uma extensão `.disabled` e é ignorado pelo jogo.
*   **Interativo:** Use as caixas de seleção para ativar ou desativar conteúdo instantaneamente.
