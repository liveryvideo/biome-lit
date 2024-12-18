import { configs as lit } from 'eslint-plugin-lit';
import perfectionist from 'eslint-plugin-perfectionist';
import tsdoc from 'eslint-plugin-tsdoc';
import { configs as wc } from 'eslint-plugin-wc';
import { configs as ts, parser as tsParser } from 'typescript-eslint';

// Perhaps also add eslint plugins: deprecation, vitest?

function pluginRulesError(plugin, name) {
  return Object.fromEntries(
    Object.keys(plugin.rules).map((rule) => [`${name}/${rule}`, 'error']),
  );
}

const tsFiles = ['**/*.ts'];

/**
 * ESLint configs linting things that Biome does not support (yet).
 * @type {import('eslint').Linter.Config}[]
 */
export default [
  // Directories to ignore
  {
    ignores: ['dist/', 'ext/', 'node_modules/'],
  },

  // TypeScript support and a few cherry picked rules
  {
    files: tsFiles,
    ...ts.base,
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: { ...ts.base.plugins },
    rules: {
      '@typescript-eslint/no-floating-promises': 'error',
    },
  },

  // TSDoc linting (depends on TypeScript support)
  // Note: eslint-plugin-tsdoc doesn't support flat config yet, see: https://github.com/microsoft/tsdoc/issues/374
  // Note: eslint-plugin-jsdoc looks nice as well, but unfortunately is incompatible, even with their typescript config
  {
    files: tsFiles,
    plugins: { tsdoc },
    rules: pluginRulesError(tsdoc, 'tsdoc'),
  },

  // Web component support (https://www.webcomponents.org/)
  wc['flat/best-practice'],
  {
    rules: {
      // Unnecessary when extending LitElement like we do
      'wc/guard-super-call': 'off',
    },
  },

  // Lit web component support (https://lit.dev/)
  lit['flat/all'],
  {
    rules: {
      // We just use default lower case attribute names (e.g: not snake-case)
      'lit/attribute-names': 'off',
    },
  },

  // Perfectionist formatting
  {
    // We can't override ignoreCase through settings when we use recommended-natural config so we'll do it this way
    // FIXME: Actually ignoreCase doesn't seem to be effective now either, but other settings are
    // See: https://github.com/azat-io/eslint-plugin-perfectionist/issues/424
    plugins: { perfectionist },
    rules: {
      ...pluginRulesError(perfectionist, 'perfectionist'),
      // Leave import sorting up to Biome
      'perfectionist/sort-imports': 'off',
      'perfectionist/sort-named-imports': 'off',
    },
    settings: {
      perfectionist: {
        // Case has meaning, p.e: 'fooBarge' | 'fooWargs' | 'foobArgs'; you want to group by foo before foob
        ignoreCase: false,
        type: 'natural',
      },
    },
  },
];
