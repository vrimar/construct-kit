# @b3/pages

Shared auth page components for B3 apps. Pages own layout — consuming apps wire behavior via props.

## Exports

| Export               | Props                                                  |
| -------------------- | ------------------------------------------------------ |
| `LoginPage`          | `onSubmit`, `isLoading?`, `logo?`, `onForgotPassword?` |
| `ForgotPasswordPage` | `ForgotPasswordPageProps`                              |
| `ResetPasswordPage`  | `ResetPasswordPageProps`                               |

**Types:** `AuthProvider`, `User`, `LoginOptions`, `LoginPageProps`, `ForgotPasswordPageProps`, `ResetPasswordPageProps`

## Usage

```tsx
import { LoginPage } from "@b3/pages";

<LoginPage
  onSubmit={(email, password) => mutate({ email, password })}
  isLoading={isPending}
  onForgotPassword={() => navigate("/forgot-password")}
  logo={<Logo />}
/>;
```

## Rules

- Accept navigation callbacks as props — never import a specific router
- Accept an `AuthProvider` adapter — never import a specific auth SDK
- Never reach into app-specific state
