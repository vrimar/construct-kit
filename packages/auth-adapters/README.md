# @b3/auth-adapters

Pre-built `AuthProvider` adapters for `@b3/pages`.

## Auth0

```ts
import { createAuth0AuthProvider } from "@b3/auth-adapters";

export const authProvider = createAuth0AuthProvider(auth0Client);
```

Returns an `AuthProvider` (from `@b3/pages`) mapping `getToken`, `login`, `logout`, `isAuthenticated`, `getUser` to the Auth0 client.

## Custom adapter

Implement the `AuthProvider` interface directly:

```ts
import type { AuthProvider } from "@b3/pages";

export const authProvider: AuthProvider = {
  getToken: async () => { /* ... */ },
  login: async () => { /* ... */ },
  logout: async () => { /* ... */ },
  isAuthenticated: () => { /* ... */ },
  getUser: () => { /* ... */ },
};
```
