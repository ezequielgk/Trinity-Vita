# BedrockOnLinux
**Run Minecraft Bedrock for Windows (GDK edition) on Linux with native Microsoft/Xbox identity, multiplayer, friends and Realms**

[Visit repository](https://github.com/Wyze3306/BedrockOnLinux)

BedrockOnLinux installs the Minecraft version you select, prepares a managed Wine prefix, and runs the game through a reviewed **WineGDK-based GDK-Proton** engine. No compiler or Windows installation is required on the player's machine.

## What 2.0 provides

- **Native Xbox identity:** XGame configuration, XUser, request signatures, gamertags, privileges and the XSAPI context are implemented by WineGDK.
- **Online play:** The Friends list, invitations, joining friends, public servers and Realms use that native identity. Realms receives a dedicated XSTS token for the Bedrock Realms audience instead of a generic Xbox token.
- **No Minecraft memory patcher:** The managed engine contains no code that scans or rewrites the running Minecraft process. Packaging rejects remnants of the former process-memory implementation. Static, fingerprinted game and Proton compatibility fixups are still applied before launch.
- **Native file chooser:** The pinned engine implements the WinAppSDK picker for both Windows architectures, and every stopped-prefix preparation repairs its activation registration. Minecraft's in-game world import and custom skin selection therefore open the desktop file dialog instead of failing in `RoGetActivationFactory`. Launcher-side `.mcskin` import remains available as an additional non-interactive installation path.
- **Graphics safety:** The launcher checks the existing display state and text kernel logs without opening Vulkan or OpenGL. A known unsafe session is blocked before Wine starts. The GUI offers an acknowledgement only for a verified previous-boot incident; it cannot dismiss a current driver fault or a running Wine/UMU session.
- **Verified updates:** Engine archives, critical runtime files and dependency payloads are SHA-256 pinned. A rejected update does not replace a working engine.
- **Isolated account profiles:** One Linux user can create separate Xbox account, Wine-prefix, settings and world roots while sharing the large game, engine and runtime downloads.

> [!NOTE]
> The Microsoft sign-in flow runs locally between the launcher, Microsoft and Xbox services. BedrockOnLinux does not use an account relay or multiplayer proxy.

## Installation

Download the application files from the [latest release](https://github.com/Wyze3306/BedrockOnLinux/releases). All currently supported builds target x86-64 Linux.

| Format | Best for | Start command |
| --- | --- | --- |
| AppImage | Most glibc-based desktop distributions | `./BedrockOnLinux-*-x86_64.AppImage` |
| .deb | Debian, Ubuntu, Mint and LMDE | `sudo apt install ./bedrock-on-linux_*_amd64.deb` |
| Portable .pyz | A host with Python 3.9+ and Tk | `./bedrock-on-linux-*.pyz gui` |
| Flatpak bundle | Sandboxed local installation, when provided | `flatpak install --user ./BedrockOnLinux-*-x86_64.flatpak` |

### AppImage quick start

```sh
chmod +x BedrockOnLinux-2.1.1-x86_64.AppImage
./BedrockOnLinux-2.1.1-x86_64.AppImage
```

The first PLAY needs the matching engine archive:

```
GDK-Proton-xuser-<engine-revision>.tar.gz
```

With an internet connection, the launcher downloads the exact archive from the BedrockOnLinux release automatically. You can instead keep that engine asset beside the AppImage or .pyz; a matching local sidecar is preferred and verified before extraction. This is required when testing an unpublished candidate and is useful for an offline first install.

An existing installation is upgraded in the same way on its next PLAY. The launcher validates the new engine before an atomic replacement and keeps the previous tree if download, disk space, extraction or verification fails.

If FUSE is unavailable, AppImage can extract itself at runtime:

```sh
APPIMAGE_EXTRACT_AND_RUN=1 ./BedrockOnLinux-2.1.1-x86_64.AppImage
```

The AppImage bundles Python, Tk, the GUI toolkit, cryptography and CA certificates. It still uses the host graphics driver and common X11, Xft and fontconfig libraries.

## Requirements and limitations

- An **x86-64 glibc desktop**. The AppImage and managed engine are audited against a glibc 2.31 baseline. ARM and musl-only systems such as stock Alpine are not supported. A host i386 userspace is not required; the managed engine uses Wine's pure-WoW64 path.
- **X11 or XWayland** for the launcher GUI. The game normally uses X11/XWayland. Native Wine Wayland can be tried with `BOL_INPUT=wayland`, but remains an experimental game backend.
- A working **Vulkan 1.3 driver** exposing `VK_EXT_device_generated_commands`, or the older NVIDIA `VK_NV_device_generated_commands`.
- GPUs permanently limited to Vulkan 1.2 can try **Settings > Advanced > Legacy compatibility renderer** (WineD3D), which bypasses DXVK's Vulkan 1.3 gate.
- Enough free storage for the game, compressed engine and temporary extraction.
- A **Microsoft account entitled to Minecraft**. Friends, multiplayer and Realms also depend on the account's privacy settings and service availability.

> [!WARNING]
> The launcher is an independent compatibility project and is not affiliated with or supported by Mojang or Microsoft.

## Play

1. Open BedrockOnLinux.
2. Select **Sign in**, open the Microsoft device-code page shown by the launcher and enter its code.
3. Select a Minecraft version, then choose **PLAY**.
4. Use Minecraft's **Friends**, **Servers** and **Realms** tabs normally.

The first run downloads and prepares Minecraft, then downloads and verifies the managed engine and its online/TLS compatibility payload. Account credentials are stored in the private BedrockOnLinux data directory and seeded into the stopped Wine prefix before launch.

## Multiple local Xbox profiles

Create one isolated launcher root and desktop shortcut per player:

```sh
bedrock-on-linux profiles create "Alice"
bedrock-on-linux profiles create "Bob"
bedrock-on-linux profiles list
```

Each shortcut sets its own `BOL_HOME`, so the Microsoft account, Wine prefix, pre-auth cache, settings and worlds stay separate. Game packages, Proton, UMU and download caches are shared to avoid duplicate multi-gigabyte downloads.

Because PLAY can repair a shared runtime before starting, only one profile can run Minecraft at a time.

## Achievements

The launcher prepares a dedicated user-only XSTS token for Minecraft's original Windows Achievements request. XUser selects it only for the Achievements service, preserving the packaged Windows title, SCID and platform while leaving social, Marketplace, PlayFab, multiplayer and Realms authentication unchanged.

> [!NOTE]
> This loads the existing list; it does not unlock, emulate or force achievements.

## Content import

Minecraft's **Import World** and skin-selection actions use the WineGDK native file picker. For direct launcher-side content installation while Minecraft is closed:

```sh
bedrock-on-linux import world.mcworld addon.mcaddon pack.mcpack \
  template.mctemplate skin.mcskin
```

The launcher imports `.mcworld`, `.mcaddon`, `.mcpack`, `.mctemplate` and `.mcskin` archives into the appropriate `com.mojang` directory.

## GPU safety

BedrockOnLinux deliberately does not open a Vulkan or OpenGL device to guess whether the driver is healthy. Before launch it can detect conditions such as:

- an X11 session with no hardware RandR provider;
- FBDEV or software-rendering fallback;
- a fatal graphics-driver event in the kernel journal;
- a Minecraft GPU session that did not return before a reboot or power loss.

When the launcher can prove that the remaining incident belongs to the previous boot, **Settings > Tools** displays **Acknowledge previous GPU incident…** with a confirmation step. The equivalent CLI flow is:

```sh
bedrock-on-linux doctor
bedrock-on-linux doctor --acknowledge-gpu-crash
```

## Diagnostics and recovery

Open **Settings > Open logs folder**, or inspect:

```
$XDG_DATA_HOME/bedrock-on-linux/logs/
```

The GUI's Details panel contains the live launcher log. Useful commands:

```sh
bedrock-on-linux doctor                 # host dependencies and GPU safety
bedrock-on-linux doctor --network       # DNS/TLS, clock and VPN observations
bedrock-on-linux repair                 # rebuild the managed Wine prefix
bedrock-on-linux versions               # available stable versions
bedrock-on-linux versions --beta        # include beta versions
bedrock-on-linux setup --mc <version>   # download and prepare one version
bedrock-on-linux login                  # link a Microsoft account
bedrock-on-linux play                   # launch the selected version
bedrock-on-linux update                 # check for a launcher update
```

## Engine integrity and source provenance

The managed engine is not built on the user's computer. Release maintainers produce it from pinned inputs and the launcher accepts only the revision and archive SHA-256 recorded in `bol/config.py`.

- **WineGDK** is built in an unprivileged Debian 11 (Bullseye) chroot. Every resulting ELF is rejected if it requires a glibc symbol newer than 2.31.
- The universal **vkd3d-proton** build contains reviewed EXT-DGC and restored NV-DGC variants for x86-64 and i386.
- `scripts/package-engine.sh` embeds licences, build records, source provenance and an `engine-manifest.json` that hashes critical runtime files.
- Engine installation uses a lock and transactional rename. An interrupted or invalid update cannot silently become the active managed engine.

## License

BedrockOnLinux ships no Minecraft game files. WineGDK, GDK-Proton, vkd3d-proton and bundled dependencies remain under their respective licences. BedrockOnLinux itself is **MIT-licensed**.
