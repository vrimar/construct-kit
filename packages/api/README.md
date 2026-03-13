# @b3/api

Typed error classes for B3 frontend apps.

## Exports

| Export | Description |
|---|---|
| `ApiError` | Base error class (`status`, `code`, `message`) |
| `ValidationError` | 422 error (extends `ApiError`) |
| `NotFoundError` | 404 error (extends `ApiError`) |
| `UnauthorizedError` | 401 error (extends `ApiError`) |
| `ApiErrorResponse` | Interface — `{ Message: string }` |

## Usage

```ts
import { ApiError, NotFoundError } from "@b3/api";

if (error instanceof NotFoundError) { /* 404 */ }
if (error instanceof ApiError) { /* any API error */ }
```
