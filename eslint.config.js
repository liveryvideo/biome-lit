// TODO: Refactor configs into this
// Including: eslint-plugin-perfectionist, eslint-plugin-lit and eslint-plugin-wc
// and: eslint-plugin-tsdoc or eslint-plugin-jsdoc?
// and perhaps also: eslint-plugin-unicorn and eslint-plugin-sonarjs?
// and deprecated (e.g: eslint-plugin-deprecation) and todo warnings?
// and eslint-plugin-vitest?
export default [];

// import auto from 'eslint-config-canonical/configurations/auto.js';

// /**
//  * @type {import('eslint').Linter.Config}[]
//  */
// export const configs = [
//   {
//     ignores: ['dist/', 'ext/', 'node_modules/'],
//   },
//   ...auto, 
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
