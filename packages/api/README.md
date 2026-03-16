# @b3/api

HTTP client, typed error classes, and data-table types for B3 frontend apps.

## Exports

### Error Classes

| Export              | Description                                    |
| ------------------- | ---------------------------------------------- |
| `ApiError`          | Base error class (`status`, `code`, `message`) |
| `ValidationError`   | 422 error (extends `ApiError`)                 |
| `NotFoundError`     | 404 error (extends `ApiError`)                 |
| `UnauthorizedError` | 401 error (extends `ApiError`)                 |
| `ApiErrorResponse`  | Interface — `{ Message: string }`              |

### Client

| Export                | Description                                                           |
| --------------------- | --------------------------------------------------------------------- |
| `createApiClient`     | Factory — creates fetch-based HTTP client with Bearer token injection |
| `setApiConfig`        | Configure the Kubb client (base URL, etc.)                            |
| `Client`              | HTTP client type (re-exported from `@kubb/plugin-client`)             |
| `RequestConfig`       | Request configuration type                                            |
| `ResponseConfig`      | Response configuration type                                           |
| `ResponseErrorConfig` | Error response configuration type                                     |

### Data-Table Types

| Export              | Description                                       |
| ------------------- | ------------------------------------------------- |
| `DataTableFilters`  | `Record<string, string[] \| undefined>`           |
| `DataTableSortType` | `"asc" \| "desc" \| ""`                           |
| `DataTableParams`   | `{ page, pageSize, orderBy, orderType, filters }` |

## Usage

```ts
import { ApiError, NotFoundError, createApiClient } from "@b3/api";
import type { DataTableParams } from "@b3/api";

if (error instanceof NotFoundError) {
  /* 404 */
}
if (error instanceof ApiError) {
  /* any API error */
}
```
