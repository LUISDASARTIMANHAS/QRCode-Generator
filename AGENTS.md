# AGENTS.md

## Project overview

This repository is a lightweight static web app that generates QR codes from user input using plain HTML, CSS, and JavaScript.

- Entry page: [index.html](index.html)
- Application logic: [src/js/index.js](src/js/index.js)
- Styling: [src/css/styles.css](src/css/styles.css)
- Project docs: [README.md](README.md)

## Working conventions

- Keep the app simple and dependency-light. Prefer native browser APIs and small, clear code changes.
- Maintain the existing structure: HTML in the root, JavaScript in [src/js/index.js](src/js/index.js), and styles in [src/css/styles.css](src/css/styles.css).
- Favor semantic, accessible HTML and clear DOM IDs/classes that are easy to reason about.
- Follow modern web standards and W3C-friendly practices; avoid brittle inline scripting when a cleaner pattern is available.
- Preserve a small footprint. Do not add frameworks or build tooling unless the task explicitly requires them.

## Development workflow

- For local verification, open [index.html](index.html) in a browser, or serve the project with a simple static server such as:

  - `python -m http.server`

- Since this is a static app, there are no automated tests or build steps by default.
- Before making UI changes, check the existing DOM structure and behavior in [index.html](index.html) and [src/js/index.js](src/js/index.js).

## Code expectations

- Keep functions small, readable, and well-named.
- Prefer explicit validation for input values before generating a QR code.
- Handle empty or invalid text gracefully and avoid crashing the page.
- If a new feature is added, keep it focused on user experience and browser compatibility.
- Apply secure-by-default thinking for any user-provided data: validate input, sanitize output, and avoid unnecessary data collection or exposure.

## Common pitfalls

- Do not break the CDN dependency used by the QR generator unless the task is specifically about replacing it.
- Do not move logic out of the existing file structure without a clear reason.
- Avoid unnecessary abstraction or over-engineering for a static, single-page project.

## When editing this repo

- Prefer minimal diffs that match the current style.
- Keep accessibility and usability in mind for text fields, buttons, and error states.
- If you need to expand the app, add features incrementally and keep the project easy to understand for future contributors.
