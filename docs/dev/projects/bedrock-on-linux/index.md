# BedrockOnLinux
**Run Minecraft Bedrock for Windows (GDK edition) on Linux with native Microsoft/Xbox identity**

![License](https://img.shields.io/badge/License-MIT-blue.svg)
![Platform](https://img.shields.io/badge/Platform-Linux-9cf.svg)

[Visit repository](https://github.com/Wyze3306/BedrockOnLinux)

BedrockOnLinux installs the Minecraft version you select, prepares a managed Wine prefix, and runs the game through a reviewed WineGDK-based GDK-Proton engine. No compiler or Windows installation is required.

## Key Features

- **Native Xbox identity:** XGame configuration, XUser, request signatures, gamertags, privileges and the XSAPI context are implemented by WineGDK.
- **Online play:** Friends list, invitations, public servers and Realms use that native identity. Realms receives a dedicated XSTS token for the Bedrock Realms audience.
- **No Minecraft memory patcher:** The managed engine contains no code that scans or rewrites the running Minecraft process.
- **Native file chooser:** In-game world import and custom skin selection open the desktop file dialog.
- **Graphics safety:** A known unsafe session is blocked before Wine starts.
- **Verified updates:** Engine archives, runtime files and dependency payloads are SHA-256 pinned.
- **Isolated account profiles:** One Linux user can create separate Xbox account, Wine-prefix, settings and world roots.

The Microsoft sign-in flow runs locally. BedrockOnLinux does not use an account relay or multiplayer proxy.

## Installation Formats

| Format | Best for | Start command |
| --- | --- | --- |
| AppImage | Most glibc-based desktop distributions | `./BedrockOnLinux-*-x86_64.AppImage` |
| .deb | Debian, Ubuntu, Mint and LMDE | `sudo apt install ./bedrock-on-linux_*_amd64.deb` |
| Portable .pyz | A host with Python 3.9+ and Tk | `./bedrock-on-linux-*.pyz gui` |
| Flatpak bundle | Sandboxed local installation, when provided | `flatpak install --user ./BedrockOnLinux-*-x86_64.flatpak` |

## License

MIT.
