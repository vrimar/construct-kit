# @b3/config

Shared tool configuration for B3 frontend projects.

## Sub-paths

| Import                  | Usage                                                   |
| ----------------------- | ------------------------------------------------------- |
| `@b3/config/typescript` | `"extends": "@b3/config/typescript"` in `tsconfig.json` |
| `@b3/config/oxlint`     | `"extends": ["@b3/config/oxlint"]` in `.oxlintrc.json`  |
| `@b3/config/oxfmt`      | `"@b3/config/oxfmt"` in `.oxfmtrc.jsonc`                |
| `@b3/config/vite`       | `createViteConfig(overrides?)` factory                  |
| `@b3/config/playwright` | `createPlaywrightConfig(overrides?)` factory            |

---

[Architecture guide](../../readme.md)
