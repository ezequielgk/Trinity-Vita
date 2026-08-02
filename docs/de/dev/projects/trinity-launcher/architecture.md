# Modulare Architektur

Trinity Launcher folgt einer sauberen Architektur auf Basis getrennter Bibliotheken, um Modularität und Wartbarkeit zu gewährleisten.

## Struktur

### ▸ TrinityCore
Kapselt die gesamte **Geschäftslogik**.
-   Versionsverwaltung
-   Pack-Verwaltung
-   Startlogik
-   Export-/Importoperationen

### ▸ TrinityUI
Enthält die **grafischen Oberflächen**.
-   Fenster
-   Dialoge
-   Widgets
-   Ansichtskomponenten

Diese Trennung ermöglicht es, die Kernlogik unabhängig von der UI zu testen und sie potenziell in anderen Oberflächen (z. B. CLI) wiederzuverwenden.
