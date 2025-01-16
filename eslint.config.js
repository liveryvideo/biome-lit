import stylistic from '@stylistic/eslint-plugin';
import { configs as lit } from 'eslint-plugin-lit';
import perfectionist from 'eslint-plugin-perfectionist';
import { Alphabet } from 'eslint-plugin-perfectionist/alphabet';
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
      parserOptions: { projectService: true },
    },
    plugins: { ...ts.base.plugins },
    rules: {
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/prefer-promise-reject-errors': 'error',
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

  // Perfectionist sorting
  {
    plugins: { perfectionist },
    rules: {
      ...pluginRulesError(perfectionist, 'perfectionist'),
      // Leave import sorting up to Biome
      'perfectionist/sort-imports': 'off',
      'perfectionist/sort-named-imports': 'off',
    },
    settings: {
      // Case has meaning, p.e. with: 'fooBarge' | 'fooWargs' | 'foobArgs', we want to group by foo before foob
      // See: https://github.com/azat-io/eslint-plugin-perfectionist/issues/424
      perfectionist: {
        alphabet: Alphabet.generateRecommendedAlphabet()
          .sortByNaturalSort('en-US')
          .placeAllWithCaseBeforeAllWithOtherCase('uppercase')
          .getCharacters(),
        ignoreCase: false,
        type: 'custom',
      },
    },
  },

  // A few cherry picked Stylistic formatting rules
  {
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      '@stylistic/lines-between-class-members': 'error',
    },
  },
];
