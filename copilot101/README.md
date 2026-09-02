# GitHub Copilot 101 🤖

This directory contains an editable local copy of the [Copilot 101 gist](https://gist.github.com/AndreaGriffiths11/f9e625a573856fe5b2247e10beee89c3) as a standalone HTML slide deck.

## Getting started locally

- Run `npm install`.
- Run `npm run dev`.
- Open `http://localhost:3030`.

Edit `presentation.html` to change the slides. Refresh the browser to see changes. Use the keyboard arrow keys or space bar to navigate the presentation.

## Building

Run `npm run build` to copy `presentation.html` to `dist/index.html`. Netlify and Vercel use this command when deploying the deck.

The previous Slidev deck remains in `slides.md` for reference, but it is no longer the deployment source.
