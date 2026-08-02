# Neko Void
**A Void Linux distribution for fast, gaming-ready, systemd-free desktops**

![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)
![Base](https://img.shields.io/badge/Base-Void_Linux-runcmd.svg)
![Init](https://img.shields.io/badge/Init-runit-success.svg)
![Desktop](https://img.shields.io/badge/Desktop-MATE-orange.svg)

[Visit official website](https://neko-void.sourceforge.io/)

Neko Void is a Linux distribution built on **Void Linux** with `runit` for ultra-fast boot times. It ships the **MATE** desktop environment with essential tools preinstalled, optimized for gaming and ready for daily use out of the box.

## Base Architecture

Based on Void Linux with `runit`, including the MATE desktop with essential tools preinstalled:

* **Flatpak** Universal packages
* **Kore** Tarball and AppImage manager
* **Tinyfetch** System information
* **btop** Resource monitor
* **Octoxbps** GUI package manager

## Gaming Ready

Optimized for maximum performance with full Vulkan support and preconfigured non-free Intel/AMD drivers for hassle-free gaming from day one.

* Full **Vulkan** API support
* Preconfigured GPU drivers
* Optimized performance settings
* Ready for **Steam** and **Lutris**

## Kasha Installer

Custom installer that simplifies Void Linux setup. Includes a powerful post-installation assistant for one-click configuration of specialized workflows.

* Easy user and network configuration
* Automatic partitioning
* One-click app categories
* Video, Music, Design, Gaming, and more

## Philosophy

### Why it was created

The project started as a personal hobby. Over time, it evolved into a structured project with the goal of offering a version of Void Linux that is easy to install and use for the end user.

### Target audience

This distribution is aimed at users who want a lightweight and robust operating system, easily adaptable to their specific workflow without the usual complications of a manual setup from scratch.

### Simplicity over Complexity

Centralizing too much power in a single suite like systemd conflicts with the UNIX idea of small, separate tools. We believe that doing one thing well is the key to a stable system.

### Transparency and Control

A monolithic suite increases the attack surface and adds unnecessary abstraction. We prefer plain-text logs for simplicity and portability. If something fails, reading text files with standard tools like `cat`, `less`, or `grep` is much more direct than relying on binary logs.

### 100% systemd-free

We are proudly compatible with the [systemdfree.com](https://systemdfree.com/) initiative. By using `runit`, we ensure your system stays modular, transparent, and free of monolithic dependencies.
