## [2.2.4](https://github.com/liveryvideo/biome-lit/compare/v2.2.3...v2.2.4) (2025-12-05)


### Bug Fixes

* **biome:** change useConsistentTypeDefinitions back from type to interface ([40ca417](https://github.com/liveryvideo/biome-lit/commit/40ca41774779301d5a8da341b8cdbbd1f3a1f8a1))

## [2.2.3](https://github.com/liveryvideo/biome-lit/compare/v2.2.2...v2.2.3) (2025-12-04)


### Bug Fixes

* **biome:** change useConsistentTypeDefinitions style from interface to type ([d83c002](https://github.com/liveryvideo/biome-lit/commit/d83c0022234e7596ef1f3ed5288b09797a4da618))

## [2.2.2](https://github.com/liveryvideo/biome-lit/compare/v2.2.1...v2.2.2) (2025-12-04)


### Bug Fixes

* **biome:** force-ignore all /ext/ files ([ae3004e](https://github.com/liveryvideo/biome-lit/commit/ae3004edcc0fe6af0c1d4f4003e00863a8028f40))

## [2.2.1](https://github.com/liveryvideo/biome-lit/compare/v2.2.0...v2.2.1) (2025-12-04)


### Bug Fixes

* **biome:** increase noSecrets entropy threshold to avoid false positives on words like DashWcEngine ([03e56db](https://github.com/liveryvideo/biome-lit/commit/03e56dbff7d31e18a88b5ee502ad1a5c6c61e04e))

# [2.2.0](https://github.com/liveryvideo/biome-lit/compare/v2.1.0...v2.2.0) (2025-12-04)


### Features

* update biome to v2.3.8 and eslint plugins ([ffe260d](https://github.com/liveryvideo/biome-lit/commit/ffe260d7b9c18779ae51817da674b3aef8919488))

# [2.1.0](https://github.com/liveryvideo/biome-lit/compare/v2.0.0...v2.1.0) (2025-12-04)


### Features

* **biome:** always expand objects in JSON, but only when necessary in other files ([cda7d14](https://github.com/liveryvideo/biome-lit/commit/cda7d1427f0fc16deef1414727ca594e778f8faa))
* **biome:** sort object keys in JSON(C) files ([6d5452b](https://github.com/liveryvideo/biome-lit/commit/6d5452b9f9f8752c5e81e33ef4a712ac359052ee))

# [2.0.0](https://github.com/liveryvideo/biome-lit/compare/v1.6.0...v2.0.0) (2025-09-19)


### Build System

* update dependencies: biome v2, etc ([51c33c0](https://github.com/liveryvideo/biome-lit/commit/51c33c0edf0e12a54c25d4bc78151455579cd673))


### BREAKING CHANGES

* Bump biome peer dep by Major version and new rules etc

# [1.6.0](https://github.com/liveryvideo/biome-lit/compare/v1.5.1...v1.6.0) (2025-04-24)


### Features

* **eslint:** update plugins: [@stylistic](https://github.com/stylistic) 4.2.0,  lit 2.1.1, wc 3.0.0, etc ([6cb92ac](https://github.com/liveryvideo/biome-lit/commit/6cb92ac376c5e0417aab19b0e9bac92a59e23f5c))

## [1.5.1](https://github.com/liveryvideo/biome-lit/compare/v1.5.0...v1.5.1) (2025-01-16)


### Bug Fixes

* **eslint:** don't specify tsconfigRootDir for tsdoc plugin to work as expected ([24e086c](https://github.com/liveryvideo/biome-lit/commit/24e086cc0645fd4f07c7a5b78dc95d3f4c712771))

# [1.5.0](https://github.com/liveryvideo/biome-lit/compare/v1.4.1...v1.5.0) (2025-01-16)


### Features

* **eslint:** update plugins: [@stylistic](https://github.com/stylistic) 2.13, perfectionist 4.6, tsdoc 0.4, typescript 8.20 ([03562e4](https://github.com/liveryvideo/biome-lit/commit/03562e49de173931df2ba7976c65e51b3bb9967b))

## [1.4.1](https://github.com/liveryvideo/biome-lit/compare/v1.4.0...v1.4.1) (2024-12-24)


### Bug Fixes

* **eslint:** remove rule @stylistic/no-extra-parens ([282347d](https://github.com/liveryvideo/biome-lit/commit/282347d29da962539d0e67cd8c4392cfb2ad9c49))

# [1.4.0](https://github.com/liveryvideo/biome-lit/compare/v1.3.0...v1.4.0) (2024-12-24)


### Features

* **eslint:** add rule @stylistic/no-extra-parens ([fe5ac34](https://github.com/liveryvideo/biome-lit/commit/fe5ac34d02840b5141e9df15086a668104a7586d))

# [1.3.0](https://github.com/liveryvideo/biome-lit/compare/v1.2.0...v1.3.0) (2024-12-20)


### Features

* **eslint:** add @stylistic/eslint-plugin with rule @stylistic/lines-between-class-members ([dd40ca9](https://github.com/liveryvideo/biome-lit/commit/dd40ca9574ce1a41530c52776f9a3c65ddba4b26))

# [1.2.0](https://github.com/liveryvideo/biome-lit/compare/v1.1.1...v1.2.0) (2024-12-20)


### Features

* add eslint rule @typescript-eslint/prefer-promise-reject-errors ([e442564](https://github.com/liveryvideo/biome-lit/commit/e442564756c3669266bad4800502fdf005518a05))

## [1.1.1](https://github.com/liveryvideo/biome-lit/compare/v1.1.0...v1.1.1) (2024-12-20)


### Bug Fixes

* **eslint:** configure perfectionist to sort by case as expected ([9a529d1](https://github.com/liveryvideo/biome-lit/commit/9a529d13218e832e488e6c82bdf9138639a63d1d))

# [1.1.0](https://github.com/liveryvideo/biome-lit/compare/v1.0.3...v1.1.0) (2024-12-17)


### Features

* add biome nursery linter rule useConsistentMemberAccessibility ([edb31d1](https://github.com/liveryvideo/biome-lit/commit/edb31d13640d4b3da8064ef65a1f9c8e77438226))
* add rule @typescript-eslint/no-floating-promises ([e597ef2](https://github.com/liveryvideo/biome-lit/commit/e597ef2b7c972712447ea30ee614efd69f7b77f9))

## [1.0.3](https://github.com/liveryvideo/biome-lit/compare/v1.0.2...v1.0.3) (2024-10-18)


### Bug Fixes

* **biome:** format package.json like npm ([a914d36](https://github.com/liveryvideo/biome-lit/commit/a914d364e490347b2e6bbc7f34e2344584bad2ba))
* **eslint:** sort-classes groups exactly like next version of perfectionist ([c8153b2](https://github.com/liveryvideo/biome-lit/commit/c8153b294f48903793f38dad45844d77d7a57144))

## [1.0.2](https://github.com/liveryvideo/biome-lit/compare/v1.0.1...v1.0.2) (2024-10-14)


### Bug Fixes

* **biome:** also check test files strictly ([6e6bbdf](https://github.com/liveryvideo/biome-lit/commit/6e6bbdf09dab36f28fd07211fb9f591309167a9d))
* **biome:** remove project specific (and unused) globals ([9fd685e](https://github.com/liveryvideo/biome-lit/commit/9fd685edb6a88d500ceef8daa339949feef9c16f))

## [1.0.1](https://github.com/liveryvideo/biome-lit/compare/v1.0.0...v1.0.1) (2024-10-10)


### Bug Fixes

* publish package publicly ([721eda9](https://github.com/liveryvideo/biome-lit/commit/721eda9cc39c3657be76adda4aaf86638a5b962c))

# 1.0.0 (2024-10-10)


### Features

* **eslint:** add eslint-plugin-tsdoc ([1206017](https://github.com/liveryvideo/biome-lit/commit/1206017f13ac02449cf0f47d0792964e47ef653c))
