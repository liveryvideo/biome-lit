# eslint-config-lit
Shared ESLint configuration for use in Livery projects using Lit custom elements.

Based on [eslint-config-canonical](https://github.com/gajus/eslint-config-canonical), an extensive [ESLint](https://eslint.org/) preset. Please see the documentation there for the basic description and for details on configuring things like VS Code and customizing the config with your own rules etc.

This packages includes the following additions and changes:

- Ignores common directories: `dist/` (distribution output), `ext/` (external non-npm dependencies) and `node_modules/` (npm dependencies)
- TODO: Finish describing..
- TODO: Adds [Lit](https://lit.dev/) WebComponent support using [eslint-plugin-lit](https://github.com/43081j/eslint-plugin-lit) and [eslint-plugin-wc](https://github.com/43081j/eslint-plugin-wc)

## Installation

Install the dependencies:

```bash
npm install -D eslint @liveryvideo/eslint-config-lit
```

Create `eslint.config.js` with:

```js
import configs from '@liveryvideo/eslint-config-lit';

export default [...configs];
```

Add scripts to `package.json` with:

```json
{
  "scripts": {
    "lint": "eslint && tsc",
    "lint:fix": "eslint --fix"
  }
}
```

## Usage

```bash
npm run lint
```
