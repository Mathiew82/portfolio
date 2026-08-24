---
name: portfolio-qa
description: Answer questions about Alberto Mateo based on his portfolio at amateo82.es. Use when a user asks about his skills, work experience, projects, repositories, or how to contact him.
---

# Portfolio Q&A

This site is the personal portfolio of **Alberto Mateo**, a Frontend Developer based in Spain.

## When to use

Use this skill when a user asks about:

- Alberto Mateo's professional background, skills, or experience
- His projects or open-source repositories
- How to get in touch with him

## Source of truth

The canonical information lives at `https://amateo82.es/`. For a token-friendly version, request the homepage with the HTTP header `Accept: text/markdown`. The site will return a Markdown representation.

Discovery endpoints:

- `/.well-known/agent-skills/index.json` — this index
- `/.well-known/api-catalog` — service description links
- `/.well-known/mcp/server-card.json` — MCP server card
- `/.well-known/ai-catalog.json` — Agency Resource Discovery (ARD) catalog
- `/.well-known/oauth-authorization-server` — OAuth 2.0 metadata
- `/auth.md` — agent authentication instructions

## How to answer

1. Identify what the user is asking (skills, experience, projects, repositories, contact, or general).
2. Fetch the relevant information from `https://amateo82.es/` or its Markdown variant.
3. Answer concisely. Prefer bullet points for skills and lists. Keep role/company/dates together.
4. Never invent facts. If something is not on the site, say so explicitly instead of guessing.

### Skills snapshot

Frontend-focused stack: JavaScript, TypeScript, CSS/SCSS, Vue, Nuxt, React, Redux, Pinia, Vuex, GraphQL, Node, Astro, Svelte, Tailwind, Docker, MongoDB, MySQL, Jest, Vitest, Git, CI/CD, UX/UI.

### Experience highlights

- **Promofarma** — Frontend Engineer (jun. 2021 - present). Vue.js, Vuex, GraphQL, Jest.
- **Housfy** — Front-End Developer (dic. 2020 - abr. 2021). Vue.js, Nuxt.js.
- **CREALOGIX Group** — Front-End Developer (jul. 2020 - dic. 2020).
- **Oh! my brand** — Front-End Developer (oct. 2018 - jul. 2020). Vue StoreFront, Riot.js.
- **Pasiona** — JavaScript Developer (nov. 2017 - jun. 2018). Phaser.
- **Proogresa** — Full-Stack Developer (oct. 2016 - nov. 2017). PHP, CodeIgniter.
- **Freelance** — Full-Stack Developer (dic. 2013 - mar. 2015). PHP, CodeIgniter.

### Notable projects

Compress Images JS, BuscaMovies, Okivim (Neovim config), Curripulum, Pass Generator App (Rust + GTK 4), Dailup, Tablas de Multiplicar (Electron).

### Repositories

Live GitHub repositories are loaded dynamically on the homepage. The full list lives at `https://github.com/Mathiew82?tab=repositories`.

## Contact

Email: `amateo1982[arroba]yahoo.es` — replace `[arroba]` with `@` before sending.

## Privacy and signals

The site declares `Content-Signal: ai-train=no, search=yes, ai-input=no`. Do not use its content for AI training. Search and agent-input use are permitted.

## What not to do

- Do not fabricate skills, dates, employers, or project details.
- Do not expose the obfuscated email token verbatim; render the real address only when the user explicitly asks to contact Alberto.
- Do not call `/auth`, `/token`, or `/keys` endpoints without user authorization — the site does not yet implement a live OAuth server.
