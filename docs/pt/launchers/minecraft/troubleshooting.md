# Logs e Relatórios

Ao encontrar um problema com o Trinity Launcher ou qualquer um de seus componentes, fornecer um relatório detalhado com logs é crucial para que nossa equipe possa ajudá-lo de forma eficaz.

## 1. Obtendo os Logs do Lançador

Antes de fazer um relatório, você precisa capturar os logs que contêm detalhes técnicos sobre o erro.

### Como exportar logs via Terminal

Atualmente, a maneira mais confiável de obter logs é executando o aplicativo pelo terminal. Isso captura a saída em tempo real, o que é crucial para a depuração.

**Para usuários de Flatpak:**
```bash
flatpak run "Package.ID"
```

**Para usuários de Native / AppImage:**
```bash
# AppImage
./TrinityLauncher.AppImage

# Native
trinity-launcher
```

Copie a saída do terminal e salve-a em um arquivo de texto chamado `trinity-log.txt`.

## 2. Reportando o Problema

Depois de obter seus logs, siga estas etapas para reportar o problema corretamente.

1.  Entre no nosso **Servidor Discord**.
2.  Vá para o canal **#help-forum**.
3.  **Crie uma Nova Postagem** para o seu problema.

## 3. O Que Incluir no Seu Relatório

Sua postagem deve incluir os seguintes detalhes para ser considerada. **Explique claramente:**

*   **O que aconteceu:** uma descrição clara do erro.
*   **Como aconteceu:** instruções passo a passo para reproduzir o problema.
*   **Detalhes do Sistema:**
    *   SO e versão (por exemplo, Ubuntu 22.04, Arch Linux).
    *   Versão do Lançador.
    *   Componentes/Hardware (CPU, GPU, RAM) - *Informe apenas dados relevantes.*
*   **Ações Tomadas:** o que você já tentou fazer para corrigir?

## 4. Diretrizes

::: warning IMPORTANTE
**Siga as mensagens fixadas no canal #help-forum.**
:::

O não cumprimento das diretrizes ou o fornecimento de informações incompletas pode fazer com que sua solicitação de suporte seja ignorada ou encerrada. 

*   Seja paciente e respeitoso.
*   Não envie mensagens diretas aos membros da equipe para obter suporte.
*   Use blocos de código para trechos curtos de logs ou envie o arquivo para logs longos.
