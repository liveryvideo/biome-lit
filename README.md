# biome-lit

Shared Biome with ESLint configuration for use in Livery projects using TypeScript and Lit custom elements.

This uses [Biome](https://biomejs.dev/) for most linting and formatting, see [biome.jsonc](./biome.jsonc) for details.

And [ESLint](https://eslint.org/) for additional linting, see [eslint.config.js](./eslint.config.js) for details.

## Installation

Install the dependencies:

```bash
npm install -D @biomejs/biome eslint @liveryvideo/biome-lit
```

Create `biome.jsonc` with: (you can add project specific overrides below)

```json
{
  "$schema": "https://biomejs.dev/schemas/1.9.0/schema.json",
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

This assumes the following conventional files/directories:

- `.editorconfig` - Should be supported by Biome, but for now we manually specify `indentStyle: space`
- `.gitignore` - Is supported by Biome, but not by ESLint, there we manually specify ignores: `dist/, ext/, node_modules/`
- `index.html` - SDK test or App page
- `index.ts` - SDK exports or App code
- `livery-*.ts` - SDK test or App element(s)
- `dist/` - Bundled files for distribution
- `ext/` - Any external (third party) source files, only formatted (not linted) by biome; to be imported from TypeScript source files
- `src/**/*.ts` - Source files processed through biome, eslint, typescript and server/bundler (e.g: vite)
- `test/**/*.ts` - Unit test files (e.g: vitest) with names matching the source modules they test and `.test.ts` extension
- `tsconfig.json` - TypeScript config

## Summary

Based on the conventions above this will:

- Indent using 2 spaces and use single quotes for formatting
- `index.*, livery-*.ts, src/**/*.ts, test/**/*.ts` are formatted by Biome and strictly linted using [all rules](https://biomejs.dev/linter/rules/) but for a few
- All other supported files (e.g: config, scripts) but those matching `.gitignore` are formatted by Biome
  - And all of those but `ext/` are linted using only the [recommended rules](https://biomejs.dev/linter/rules/#recommended-rules)
- All supported files but `dist/, ext/, node_modules/` are linted by ESLint using rules from plugins:
[lit](https://npmjs.com/package/eslint-plugin-lit),
[perfectionist](https://npmjs.com/package/eslint-plugin-perfectionist),
[tsdoc](https://npmjs.com/package/eslint-plugin-tsdoc) and
[wc](https://npmjs.com/package/eslint-plugin-wc)
  - Where `**/*.ts` files are parsed using [typescript-eslint](https://npmjs.com/package/typescript-eslint)

## Additional installation

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

### Git pre-commit

To check and, where possible, auto fix errors while committing:

Install dependencies:

```bash
npm install -D husky lint-staged
```

Create `.husky/pre-commit` with:

```bash
npx lint-staged -r
```

Add lint-stage config to `package.json`:

```json
{
  "lint-staged": {
    "*": ["biome check --fix --no-errors-on-unmatched", "eslint --fix"]
  }
}
```

### CI

Add a step to your test jobs, e.g:

```bash
npm ci
npm run lint
npm test
```

#### CI Error

If CI results in: `Error: Cannot find module '@biomejs/cli-linux-x64/biome'` then on your machine:

```bash
rm -rf node_modules package-lock.json
npm install
```

And commit and push to try again.

See: https://github.com/npm/cli/issues/4828
