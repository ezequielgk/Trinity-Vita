# Neko Void
**Una distribuzione Void Linux per desktop veloci, pronti al gaming e senza systemd**

![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)
![Base](https://img.shields.io/badge/Base-Void_Linux-runcmd.svg)
![Init](https://img.shields.io/badge/Init-runit-success.svg)
![Desktop](https://img.shields.io/badge/Desktop-MATE-orange.svg)

[Visita il sito ufficiale](https://neko-void.sourceforge.io/)

Neko Void è una distribuzione Linux basata su **Void Linux** con `runit` per tempi di avvio ultrarapidi. Include l'ambiente desktop **MATE** con strumenti essenziali preinstallati, ottimizzato per il gaming e pronto per l'uso quotidiano appena installato.

## Architettura di base

Basato su Void Linux con `runit`, include il desktop MATE con strumenti essenziali preinstallati:

* **Flatpak** Pacchetti universali
* **Kore** Gestore di tarball e AppImage
* **Tinyfetch** Informazioni di sistema
* **btop** Monitor delle risorse
* **Octoxbps** Gestore pacchetti con GUI

## Pronto per il gaming

Ottimizzato per prestazioni massime con supporto Vulkan completo e driver non liberi Intel/AMD preconfigurati per un gaming senza problemi dal primo giorno.

* Supporto completo dell'API **Vulkan**
* Driver GPU preconfigurati
* Impostazioni prestazionali ottimizzate
* Pronto per **Steam** e **Lutris**

## Installer Kasha

Installer personalizzato che semplifica la configurazione di Void Linux. Include un potente assistente post-installazione per la configurazione in un clic di flussi di lavoro specializzati.

* Configurazione semplice di utente e rete
* Partizionamento automatico
* Categorie di app in un clic
* Video, musica, design, gaming e altro

## Filosofia

### Perché è stato creato

Il progetto è iniziato come un hobby personale. Con il tempo si è evoluto in un progetto strutturato con l'obiettivo di offrire una versione di Void Linux facile da installare e usare per l'utente finale.

### Pubblico di riferimento

Questa distribuzione è pensata per gli utenti che desiderano un sistema operativo leggero e robusto, facilmente adattabile al loro specifico flusso di lavoro senza le solite complicazioni di un'installazione manuale da zero.

### Semplicità invece di complessità

Concentrare troppo potere in un'unica suite come systemd entra in conflitto con l'idea UNIX di piccoli strumenti separati. Crediamo che fare bene una sola cosa sia la chiave per un sistema stabile.

### Trasparenza e controllo

Una suite monolitica aumenta la superficie d'attacco e aggiunge astrazione inutile. Preferiamo log in testo semplice per semplicità e portabilità. Se qualcosa fallisce, leggere file di testo con strumenti standard come `cat`, `less` o `grep` è molto più diretto che affidarsi a log binari.

### 100% senza systemd

Siamo orgogliosamente compatibili con l'iniziativa [systemdfree.com](https://systemdfree.com/). Usando `runit`, garantiamo che il tuo sistema rimanga modulare, trasparente e libero da dipendenze monolitiche.
