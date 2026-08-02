# Arquitetura Modular

O Trinity Launcher segue uma arquitetura limpa baseada em bibliotecas separadas para garantir modularidade e capacidade de manutenção.

## Estrutura

### ▸ TrinityCore
Encapsula toda a **Lógica de Negócios**.
-   Gerenciamento de versões
-   Tratamento de packs
-   Lógica de inicialização
-   Operações de exportação/importação

### ▸ TrinityUI
Contém as **Interfaces Gráficas**.
-   Janelas
-   Diálogos
-   Widgets
-   Componentes de visualização

Essa separação permite que a lógica principal seja testada de forma independente da UI e potencialmente reutilizada em outras interfaces (por exemplo, CLI).
