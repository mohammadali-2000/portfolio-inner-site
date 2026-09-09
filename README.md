# 💾 AliOS — Retro 90s Desktop Operating System & Interactive Portfolio

**AliOS** is a nostalgic Windows 95/98-inspired interactive web operating system built with **React**, **TypeScript**, and **CSS3**. It functions both as an interactive personal portfolio and as the embedded virtual computer inside the 3D room of [`portfolio-website`](https://github.com/mohammadali-2000/portfolio-website).

---

## 🌟 Acknowledgements & Original Creator Credit

This project is an evolved fork of the inner operating system created by [Henry Heffernan](https://github.com/henryjeff).

A sincere and hearty thank you to **Henry Heffernan** for inventing the desktop window manager, retro design components, audio foley, and open-sourcing his creative vision:
- Original Repository: [henryjeff/portfolio-inner-site](https://github.com/henryjeff/portfolio-inner-site)
- Original Creator Website: [henryheffernan.com](https://henryheffernan.com)

**Special Acknowledgements:**
- **Dangerous Dave (1990):** Original masterpiece created by **John Romero** (Softdisk / id Software).
- **DOSBox Emulation Engine:** [js-dos](https://js-dos.com/) for in-browser x86 PC emulation.
- **Sound Effects:** Microsoft Windows 95 sound design & retro foley.

---

## 🚀 Adaptations & Upgrades by Syed Mohammad Ali

This project has been extensively upgraded and customized by **Syed Mohammad Ali**:

1. **Dangerous Dave 1990 MS-DOS Game Integration:**
   - Integrated John Romero's classic platformer game into AliOS.
   - Built a custom DOSBox runtime container ([`DangerousDave.tsx`](src/components/applications/DangerousDave.tsx)) utilizing `js-dos` WebAssembly emulation.
   - Designed custom retro desktop launcher icons, window controls, and keyboard handling.
2. **Cleaned Game Ecosystem:**
   - Removed legacy DOOM and Wordle (Henordle) apps for a focused, clean retro experience.
3. **Comprehensive Personal Branding & Identity:**
   - Updated with full career narrative: Software Engineer at Accenture & Anthropic Certified AI Architect.
   - Showcase Explorer updated with active engineering projects:
     - **Aegis MCP Registry:** AI Agent Tool Registry & TEE Enclave Gateway (Rust, Next.js, Docker).
     - **ZeroTrust-Health:** Zero-Trust Healthcare Data Layer with FHE (CKKS) and Spring Boot.
     - **Enterprise AI Knowledge Hub:** Multi-source RAG platform with LangChain, FastAPI & ChromaDB.
     - **Multi-Agent Medical Assistant:** Autonomous clinical diagnostic agents on Masumi network.
     - **sql2valkey:** High-performance SQL to Valkey/Redis migration engine.
     - **PathFHE:** Privacy-preserving routing with Fully Homomorphic Encryption.
4. **Automated Resume Generation & Live PDF:**
   - Designed a clean, ATS-optimized one-page engineering resume template.
   - Integrated automated Chromium PDF generation and embedded instant download button in the portfolio.
5. **Modern Social Connections:**
   - Added authentic Windows 95 style social buttons for **GitHub**, **LinkedIn**, **X (Twitter)**, and **Instagram** (`@mohammadali0820`).
6. **Multi-Slide Credits Architecture:**
   - Re-architected the Credits screen to explicitly distinguish **Software Architecture & AI Systems Adaptation** from 3D Texturing/Modeling.
   - Added personalized dedications to **Mom & Dad**, **Anthropic/Claude**, and the **Open Source Community**.

---

## 🕹️ Features

- 🪟 **Retro Window Manager:** Draggable, minimizable, maximizable, and stackable retro windows with authentic z-index management.
- 📂 **Showcase Explorer:** Interactive file manager with About, Experience, Projects (Software & Music), and Contact sections.
- 🎮 **In-Browser DOS Gaming:** Play **Dangerous Dave** directly inside the OS with full keyboard controls and sound.
- 📄 **Resume Downloader:** Instant access to Syed Mohammad Ali's verified software engineering CV.
- 🎵 **Interactive Sound Effects:** Authentic retro keyboard clicks, window open/close sounds, and Windows startup chime.
- 🔄 **3D Parent Bridge:** Communicates mouse and keyboard events with Three.js parent iframe via `postMessage`.

---

## 🛠️ Tech Stack

- **Framework:** React 18
- **Language:** TypeScript
- **Styling:** Vanilla CSS & CSS Modules (pixel-perfect Windows 95/98 styling)
- **DOS Emulation:** js-dos (DOSBox in WebAssembly)
- **Tooling:** Create React App / Webpack

---

## 💻 Local Development Setup

### 1. Clone & Install
```bash
git clone https://github.com/mohammadali-2000/portfolio-inner-site.git
cd portfolio-inner-site
npm install
```

### 2. Run Local Development Server
```bash
npm start
```
AliOS will start at **`http://localhost:3000`**.

### 3. Production Build
```bash
# Build optimized static production bundle
npm run build

# Serve with static file server
npx serve -s build -l 3000
```

---

## 📬 Contact & Connect

- **Author:** Syed Mohammad Ali
- **Email:** [sm9009995710@gmail.com](mailto:sm9009995710@gmail.com)
- **GitHub:** [@mohammadali-2000](https://github.com/mohammadali-2000)
- **LinkedIn:** [linkedin.com/in/mohammad-ali-08/](https://www.linkedin.com/in/mohammad-ali-08/)
- **X / Twitter:** [@mohammadali0820](https://x.com/mohammadali0820)
- **Instagram:** [@mohammadali0820](https://www.instagram.com/mohammadali0820/)
