# @b3/\* Shared Library

Monorepo providing `@b3/*` packages. Uses **pnpm workspaces**, **Turbo** (`pnpm turbo dev`), **Tsup**, **Changesets**.

## Packages

- **`@b3/ui`** — 40+ Chakra UI v3 components. Always import from `@b3/ui`, never `@chakra-ui/*`.
  - Components: `DataTable`, `Button`, `Input`, `Dialog`, `DeleteDialog`, `SubmitDialog`, `Select`, `Drawer`, `Menu`, `Tabs`, `Field`, `ThemeProvider`, `Toaster`, `toaster`, `Box`, `Flex`, `Stack`, `HStack`, `Badge`, `Alert`, `ApiErrorAlert`, `LoadingOverlay`, `EmptyState`, `Avatar`, `Link`, `Tooltip`
  - Hooks: `useAutoFocus`, `useDebounceQuery`, `useFileSelect`, `useRowSelection`
  - DataTable types: `DataTableParams`, `DataTableDto<T>`, `DataTableFilters`, `Column<TData>`, `DataTableProps`
- **`@b3/api`** — `ApiError`, `ValidationError`, `NotFoundError`, `UnauthorizedError`, `ApiErrorResponse`, `createApiFactory()`
- **`@b3/utils`** — `buildQueryString`, `addOrRemove`, `findInTree`, `toCamelCase`, `toInt`, `formatDateDefault`, `formatCurrency`, `objectKeys`, `emailSchema`/`phoneSchema`/`passwordSchema` (Zod)
- **`@b3/pages`** — `LoginPage`, `RegisterPage`, `ForgotPasswordPage`; types: `AuthProvider`, `User`, `LoginOptions`
- **`@b3/config`** — Importable as `@b3/config/eslint`, `/vite`, `/typescript`, `/prettier`, `/playwright`, `/oxlint`
- **`@b3/auth-adapters`** — `createAuth0AuthProvider()`

## Conventions

- Named exports only (no default exports)
- Source under `packages/<name>/src/`, each with `tsconfig.json` + `tsup.config.ts`
- Consumed via path aliases (e.g., `@b3/ui` → `packages/ui/src`)
