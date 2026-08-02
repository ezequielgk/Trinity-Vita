# Instalação do Trinity Launcher
**Guia completo para sistemas Linux**

O Trinity Launcher é um projeto orientado pela comunidade, distribuído principalmente como um pacote **Flatpak** para garantir máxima compatibilidade e segurança no ecossistema Linux.

::: tip Antes de começar
Certifique-se de ter o **Flatpak** instalado no seu sistema. Isso garante que o lançador e suas dependências (como os mecanismos do Minecraft Bedrock mantidos pela comunidade) rodem em um ambiente estável e isolado.

Se você ainda não o tem, visite o guia oficial de configuração: [Ir para Flatpak.org](https://flatpak.org/setup/)
:::

## Instalar o Trinity Launcher
Escolha o método que melhor se adequa ao seu fluxo de trabalho.

### Método A: Repositório Testing-Beta (RECOMENDADO)
Esta é a forma preferida para membros da comunidade que desejam os recursos mais recentes e atualizações automáticas diretamente do nosso pipeline de desenvolvimento.

**Execute estes comandos em ordem no seu terminal:**

1. **Remova o repositório Trinity (se você tinha a versão antiga):**
    ```bash
    flatpak remote-delete trinity
    ```

2. **Adicione o repositório Trinity:**
    ```bash
    flatpak remote-add trinity https://github.com/Trinity-LA/Trinity-Launcher/releases/download/flatpak/com.trench.trinity.launcher.flatpakrepo
    ```

3. **Instale o runtime KDE (Qt6):**
    ```bash
    flatpak install flathub org.kde.Platform//6.10
    ```

4. **Instale a base do Qt WebEngine:**
    ```bash
    flatpak install flathub io.qt.qtwebengine.BaseApp//6.10
    ```

5. **Instale o Trinity Launcher:**
    ```bash
    flatpak install com.trench.trinity.launcher
    ```

> **Vantagens:** Acesso direto às versões beta mais recentes e atualizações automáticas em segundo plano.

### Método B: Pela Loja de Software

Se você preferir uma interface gráfica:

1. **Remova o repositório antigo (se aplicável):**
    ```bash
    flatpak remote-delete trinity
    ```

2. Adicione o repositório primeiro:
    ```bash
    flatpak remote-add trinity https://github.com/Trinity-LA/Trinity-Launcher/releases/download/flatpak/com.trench.trinity.launcher.flatpakrepo
    ```

3. Procure por **"Trinity Launcher"** na sua Loja de Software (GNOME Software, Discover).
    > *Nota: Talvez seja necessário reiniciar a loja após adicionar o repositório.*

### Método C: AppImage (Beta - Portátil)

Ideal para usuários que preferem gerenciamento manual sem gerenciadores de pacotes.

1. **Baixar:**  
   <MinecraftButton link="https://github.com/Trinity-LA/Trinity-Launcher/releases/download/2.6-beta/Trinity_Launcher-x86_64.AppImage" />

2. **Instalar o Gear Level:** Procure por "Gear Level" na sua App Store e instale-o.
3. **Abrir com o Gear Level:** Clique com o botão direito no arquivo `.AppImage` -> Abrir com -> **Gear Level**.
4. **Desbloquear e Integrar:** Clique em **"Unlock"** para torná-lo executável e em **"Add to apps menu"** para acesso fácil.

---

## Login Remoto (Somente AppImage)

::: warning Local vs Remoto
Esta etapa é **necessária apenas** para a versão **AppImage** para habilitar a autenticação de conta da Microsoft.
:::

### Passo 1: Ativar nas Configurações
1. Abra o Trinity e vá para **Configurações**.
2. Navegue até **Configurações de Conta** e ative o **Login Remoto**.
3. **Reinicie** o jogo completamente.

### Passo 2: Autenticação no Navegador
1. Vá para [microsoft.com/link](https://microsoft.com/link).
2. Digite o **código** exibido no jogo.
3. Complete o login no seu navegador.
4. Feche o diálogo no jogo.

---

## Executar o Trinity Launcher (Flatpak)

- **Pelo Menu:** Procure por "Trinity Launcher" no painel de aplicativos.
- **Pelo Terminal:**
    ```bash
    flatpak run com.trench.trinity.launcher
    ```

<CommunityCard />
