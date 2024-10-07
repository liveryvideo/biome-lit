import {configs as lit} from 'eslint-plugin-lit';
import {configs as ts} from 'typescript-eslint';
import {configs as wc} from 'eslint-plugin-wc';

// Add eslint-plugin-*: perfectionist, unicorn, sonarjs, jsdoc, deprecation, vitest?
// TODO: Add eslint-plugin-tsdoc once that supports eslint v9 (or in Biome preferably)

/**
 * ESLint configs linting things that Biome does not support (yet).
 * 
 * @type {import('eslint').Linter.Config}[]
 */
export default [
  {
    ignores: ['dist/', 'ext/', 'node_modules/'],
  },
  {
    files: ['**/*.ts'],
    ...ts.base
  },
  lit['flat/all'],
  wc['flat/best-practice'],
  {
    rules: {
      // We just use default lower case attribute names (e.g: not snake-case)
      'lit/attribute-names': 'off',
      // Unnecessary when extending LitElement like we do
      'wc/guard-super-call': 'off',
    }  
  }
];

// export const configs = [
//   {
//     files: ['**/*.{js,jsx,cjs,mjs,ts,tsx}'],
//     rules: {
//       // Require import file extensions instead of disabling them
//       'import/extensions': ['error', 'always'],
//       // Sort public members above protected instead of below private
//       'perfectionist/sort-classes': [
//         'error',
//         {
//           groups: [
//             'index-signature',
//             'static-property',
//             'static-block',
//             ['property', 'accessor-property'],
//             ['protected-property', 'protected-accessor-property'],
//             ['private-property', 'private-accessor-property'],
//             'constructor',
//             'static-method',
//             'method',
//             ['get-method', 'set-method'],
//             'protected-method',
//             'private-method',
//             'unknown',
//           ]
//         }
//       ]
//     }
//   },
// ];
