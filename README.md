# biome-lit
Shared Biome with ESLint configuration for use in Livery projects using Lit custom elements.

This uses [Biome](https://biomejs.dev/) for most linting and formatting, see [biome.jsonc](./biome.jsonc) for details.

And [ESLint](https://eslint.org/) for additional linting, see [eslint.config.js](./eslint.config.js) for details.

## Installation

Install the dependencies:

```bash
npm install -D @biomejs/biome eslint @liveryvideo/biome-lit
```

Create `biome.jsonc` with:

```json
{
  "extends": ["@liveryvideo/biome-lit/biome"]
}
```

Create `eslint.config.js` with:

```js
import configs from '@liveryvideo/biome-lit/eslint';

export default configs;
```

Add scripts to `package.json` with:

```json
{
  "scripts": {
    "lint": "biome check && eslint && tsc",
    "lint:fix": "biome check --fix && eslint --fix"
  }
}
```

TODO: Document TypeScript installation and configuration

TODO: Document pre-commit hook installation and configuration, e.g: `biome check --fix <files>` and `eslint --fix <files>`

TODO: Document CI configuration, e.g: `npm run lint`

### VS Code

Install extensions:
[Biome](https://marketplace.visualstudio.com/items?itemName=biomejs.biome) and
[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).
 
And in `settings.json` specify:

```json
{
  "editor.codeActionsOnSave": {
    "quickfix.biome": "explicit",
    "source.organizeImports.biome": "explicit",
    "source.fixAll.eslint": "explicit"
  },
  "editor.defaultFormatter": "biomejs.biome",
  "editor.formatOnSave": true,
}
```

## Usage

To check formatting and linting rules and possibly exit with errors:

```bash
npm run lint
```

To automatically fix errors and possibly exit with remaining errors:

```bash
npm run lint:fix
```

## Conventions

TODO: Move documentation of conventions like ext/, src/ and test/ directories etc. from player-web/DEVELOPMENT.md here
