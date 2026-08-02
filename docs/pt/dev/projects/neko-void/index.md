# Neko Void
**Uma distribuição Void Linux para desktops rápidos, prontos para jogos e livres de systemd**

![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)
![Base](https://img.shields.io/badge/Base-Void_Linux-runcmd.svg)
![Init](https://img.shields.io/badge/Init-runit-success.svg)
![Desktop](https://img.shields.io/badge/Desktop-MATE-orange.svg)

[Visite o site oficial](https://neko-void.sourceforge.io/)

O Neko Void é uma distribuição Linux baseada no **Void Linux** com `runit` para tempos de inicialização ultra rápidos. Ele inclui o ambiente de desktop **MATE** com ferramentas essenciais pré-instaladas, otimizado para jogos e pronto para o uso diário assim que sai da caixa.

## Arquitetura Base

Baseado no Void Linux com `runit`, incluindo o desktop MATE com ferramentas essenciais pré-instaladas:

* **Flatpak** Pacotes universais
* **Kore** Gerenciador de tarballs e AppImage
* **Tinyfetch** Informações do sistema
* **btop** Monitor de recursos
* **Octoxbps** Gerenciador de pacotes com GUI

## Pronto para Jogos

Otimizado para desempenho máximo com suporte completo a Vulkan e drivers Intel/AMD não livres pré-configurados para jogar sem complicações desde o primeiro dia.

* Suporte completo à API **Vulkan**
* Drivers de GPU pré-configurados
* Configurações de desempenho otimizadas
* Pronto para **Steam** e **Lutris**

## Instalador Kasha

Instalador personalizado que simplifica a configuração do Void Linux. Inclui um poderoso assistente pós-instalação para configuração em um clique de fluxos de trabalho especializados.

* Configuração fácil de usuário e rede
* Particionamento automático
* Categorias de aplicativos em um clique
* Vídeo, Música, Design, Jogos e muito mais

## Filosofia

### Por que foi criado

O projeto começou como um hobby pessoal. Com o tempo, evoluiu para um projeto estruturado com o objetivo de oferecer uma versão do Void Linux fácil de instalar e usar para o usuário final.

### Público-alvo

Esta distribuição é voltada para usuários que desejam um sistema operacional leve e robusto, facilmente adaptável ao seu fluxo de trabalho específico, sem as complicações usuais de uma configuração manual do zero.

### Simplicidade em vez de Complexidade

Centralizar poder demais em uma única suíte como o systemd entra em conflito com a ideia UNIX de ferramentas pequenas e separadas. Acreditamos que fazer uma coisa bem feita é a chave para um sistema estável.

### Transparência e Controle

Uma suíte monolítica aumenta a superfície de ataque e adiciona abstração desnecessária. Preferimos logs em texto puro por simplicidade e portabilidade. Se algo falhar, ler arquivos de texto com ferramentas padrão como `cat`, `less` ou `grep` é muito mais direto do que depender de logs binários.

### 100% livre de systemd

Temos orgulho em ser compatíveis com a iniciativa [systemdfree.com](https://systemdfree.com/). Ao usar `runit`, garantimos que seu sistema permaneça modular, transparente e livre de dependências monolíticas.
