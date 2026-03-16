# @b3/utils

Stateless, framework-agnostic utilities shared across B3 frontend apps.

## Exports

| Module         | Exports                                                                                                                                                         |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **array**      | `transformArray`, `addOrRemove`, `addOrRemoveByKey`, `getFirstItemId`, `getLastItemId`, `findInTree`                                                            |
| **date**       | `formatDateDefault`, `formatDateRelative`                                                                                                                       |
| **enum**       | `isEnumKey`, `enumToKeys`, `enumToValues`, `enumToEntries`, `enumToOptions`, `enumValueToKey`, `fromEnum`, `mapEnumToFlags`, `toListItems`, `getEnumKeyByValue` |
| **number**     | `isValidNumber`                                                                                                                                                 |
| **object**     | `ObjectKeys` (type), `objectKeys`, `toKeyValue`, `isPlainObject`                                                                                                |
| **query**      | `buildQueryString`, `saveBlobResponse`, `downloadFile`                                                                                                          |
| **string**     | `toCamelCase`, `toInt`, `isStrictlyNumeric`                                                                                                                     |
| **validation** | `emailSchema`, `phoneSchema`, `passwordSchema`, `loginSchema` (Zod)                                                                                             |

## Usage

```ts
import { buildQueryString, addOrRemove, emailSchema } from "@b3/utils";
```
