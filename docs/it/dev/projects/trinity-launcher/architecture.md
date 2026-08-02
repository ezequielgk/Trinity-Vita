# Architettura modulare

Trinity Launcher segue un'architettura pulita basata su librerie separate per garantire modularità e manutenibilità.

## Struttura

### ▸ TrinityCore
Incapsula tutta la **logica di business**.
-   Gestione delle versioni
-   Gestione dei pack
-   Logica di avvio
-   Operazioni di export/import

### ▸ TrinityUI
Contiene le **interfacce grafiche**.
-   Finestre
-   Dialoghi
-   Widget
-   Componenti di visualizzazione

Questa separazione consente di testare la logica core indipendentemente dalla UI e di riutilizzarla potenzialmente in altre interfacce (ad es. CLI).
