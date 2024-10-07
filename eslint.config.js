import {configs as lit} from 'eslint-plugin-lit';
import perfectionist from 'eslint-plugin-perfectionist';
import {configs as wc} from 'eslint-plugin-wc';
import {configs as ts} from 'typescript-eslint';

// Add eslint-plugin-*: unicorn, sonarjs, jsdoc, deprecation, vitest?
// TODO: Add eslint-plugin-tsdoc once that supports eslint v9 (or in Biome preferably)

/**
 * ESLint configs linting things that Biome does not support (yet).
 * 
 * @type {import('eslint').Linter.Config}[]
 */
export default [
  // Directories to ignore
  {
    ignores: ['dist/', 'ext/', 'node_modules/'],
  },

  // TypeScript support
  {
    files: ['**/*.ts'],
    ...ts.base
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
      ...Object.fromEntries(
        Object.keys(perfectionist.rules).map(rule => [`perfectionist/${rule}`, ['error']]),
      ),
      // Sort public members above protected instead of below private
      // and (public) property getter/setter methods along with plain properties
      // and function-properties (e.g: bound methods) along with methods
      'perfectionist/sort-classes': [
        'error',
        {
          groups: [
            'index-signature',
            'static-property',
            'protected-static-property',
            'private-static-property',
            'static-block',
            ['property', 'accessor-property', 'get-method', 'set-method'],
            ['protected-property', 'protected-accessor-property', 'protected-get-method', 'protected-set-method'],
            ['private-property', 'private-accessor-property', 'private-get-method', 'private-set-method'],
            'constructor',
            ['static-method', 'static-function-property'],
            ['protected-static-method', 'protected-static-function-property'],
            ['private-static-method', 'private-static-function-property'],
            ['method', 'function-property'],
            ['protected-method', 'protected-function-property'],
            ['private-method', 'private-function-property'],
            'unknown',
          ]
        }
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
      }
    }
  },
];
