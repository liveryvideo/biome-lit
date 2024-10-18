import { configs as lit } from 'eslint-plugin-lit';
import perfectionist from 'eslint-plugin-perfectionist';
import tsdoc from 'eslint-plugin-tsdoc';
import { configs as wc } from 'eslint-plugin-wc';
import { configs as ts } from 'typescript-eslint';

// Perhaps also add eslint plugins: deprecation, vitest?

function pluginRulesError(plugin, name) {
  return Object.fromEntries(
    Object.keys(plugin.rules).map((rule) => [`${name}/${rule}`, ['error']]),
  );
}

/**
 * ESLint configs linting things that Biome does not support (yet).
 * @type {import('eslint').Linter.Config}[]
 */
export default [
  // Directories to ignore
  {
    ignores: ['dist/', 'ext/', 'node_modules/'],
  },

  // TypeScript support and TSDoc linting
  // Note: eslint-plugin-tsdoc doesn't support flat config yet, see: https://github.com/microsoft/tsdoc/issues/374
  // Note: eslint-plugin-jsdoc looks nice as well, but unfortunately is incompatible, even with their typescript config
  {
    files: ['**/*.ts'],
    ...ts.base,
    plugins: { ...ts.base.plugins, tsdoc },
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
    plugins: { perfectionist },
    rules: {
      ...pluginRulesError(perfectionist, 'perfectionist'),
      // Improve class group order, see: https://github.com/azat-io/eslint-plugin-perfectionist/pull/320
      // TODO: On next major Perfectionist version this will be default and can be removed
      'perfectionist/sort-classes': [
        'error',
        {
          groups: [
            'index-signature',
            ['static-property', 'static-accessor-property'],
            ['static-get-method', 'static-set-method'],
            ['protected-static-property', 'protected-static-accessor-property'],
            ['protected-static-get-method', 'protected-static-set-method'],
            ['private-static-property', 'private-static-accessor-property'],
            ['private-static-get-method', 'private-static-set-method'],
            'static-block',
            ['property', 'accessor-property'],
            ['get-method', 'set-method'],
            ['protected-property', 'protected-accessor-property'],
            ['protected-get-method', 'protected-set-method'],
            ['private-property', 'private-accessor-property'],
            ['private-get-method', 'private-set-method'],
            'constructor',
            ['static-method', 'static-function-property'],
            ['protected-static-method', 'protected-static-function-property'],
            ['private-static-method', 'private-static-function-property'],
            ['method', 'function-property'],
            ['protected-method', 'protected-function-property'],
            ['private-method', 'private-function-property'],
            'unknown',
          ],
        },
      ],
      // Leave import sorting up to Biome
      'perfectionist/sort-imports': 'off',
      'perfectionist/sort-named-imports': 'off',
    },
    settings: {
      perfectionist: {
        // Case has meaning, p.e: fooBar, fooBarCount, foobCount; you want foo to be grouped separately from foob
        ignoreCase: false,
        // Natural is preferable over plain alphabetic
        type: 'natural',
      },
    },
  },
];
