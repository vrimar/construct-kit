# @b3/ui Component Usage Patterns

This document classifies each `@b3/ui` component by whether it supports **flat** usage (`<Component />`), **compound** usage (`Component.SubPart`), or both.

## Both flat AND compound

| Component     | Flat | Compound | Notes                                                                                                             |
| ------------- | ---- | -------- | ----------------------------------------------------------------------------------------------------------------- |
| `NumberInput` | ✅   | ✅       | `Object.assign(NumberInputRoot, { Root, Field, Scrubber, Label })` — callable directly and exposes sub-components |

## Compound-only

Not directly renderable as `<Component />` — must use sub-components.

### Custom namespace objects

| Component     | Sub-components                                                                                                                                                                                   |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `Menu`        | `.Root`, `.Content`, `.Item`, `.Trigger`, `.Separator`, `.Arrow`, `.CheckboxItem`, `.RadioItem`, `.ItemGroup`, `.TriggerItem`, `.RadioItemGroup`, `.ContextTrigger`, `.ItemText`, `.ItemCommand` |
| `Dialog`      | `.Root`, `.Content`, `.CloseTrigger`, `.Footer`, `.Header`, `.Body`, `.Backdrop`, `.Title`, `.Description`, `.Trigger`, `.ActionTrigger`                                                         |
| `Popover`     | `.Root`, `.Content`, `.Arrow`, `.CloseTrigger`, `.Title`, `.Description`, `.Footer`, `.Header`, `.Body`, `.Trigger`                                                                              |
| `ContextMenu` | `.Root`, `.Trigger`, `.Content`, `.Item`, `.CheckboxItem`, `.RadioItem`, `.RadioItemGroup`, `.ItemGroup`, `.TriggerItem`, `.Separator`, `.ItemText`, `.ItemCommand`                              |
| `Splitter`    | `.Group`, `.Panel`, `.Separator`                                                                                                                                                                 |
| `Stat`        | `.Root`, `.Label`, `.ValueText`, `.UpTrend`, `.DownTrend`, `.HelpText`, `.ValueUnit`                                                                                                             |

### Chakra v3 pass-throughs (compound by Chakra's design)

`Accordion`, `ActionBar`, `Avatar`, `Clipboard`, `Collapsible`, `Drawer`, `Editable`, `EmptyState`, `FileUpload`, `List`, `RadioCard`, `Table`, `Tabs`, `TagsInput`

### Complex / multi-export

| Component    | Exports                                                                     |
| ------------ | --------------------------------------------------------------------------- |
| `Tree`       | `TreeView`, `useTreeView`, `createTreeCollection`, `ChakraTreeView` + types |
| `TreeSelect` | `TreeSelectList` + types                                                    |
| `ListBox`    | `ListBox`, `ListBoxItem`, `ListBoxSection`, `Collection`, `Header` + types  |

## Flat-only

Single callable component — no dot-sub-components.

| Component                                  | Notes                                                            |
| ------------------------------------------ | ---------------------------------------------------------------- |
| `Alert`                                    | `export function Alert(...)`                                     |
| `ApplyInput`                               | `export const ApplyInput = (...)`                                |
| `ApplySelect`                              | `export const ApplySelect = (...)`                               |
| `Badge`                                    | Chakra v3 flat re-export                                         |
| `Box`, `Flex`, `Stack`, `HStack`, `VStack` | Layout primitives, Chakra v3 re-exports                          |
| `Button`                                   | `export function Button(...)`                                    |
| `Checkbox`                                 | `export function Checkbox(...)`                                  |
| `CheckboxCard`                             | `export function CheckboxCard(...)`                              |
| `DataTable`                                | `export function DataTable(...)`                                 |
| `DatePicker`                               | `export const DatePicker = (...)`                                |
| `EditableText`                             | `export const EditableText = (...)`                              |
| `Field`                                    | `export function Field(...)`                                     |
| `Image`                                    | Chakra v3 flat re-export                                         |
| `Link`                                     | Chakra v3 flat re-export                                         |
| `LoadingOverlay`                           | `export const LoadingOverlay = (...)`                            |
| `Logo`                                     | `export const Logo = (...)`                                      |
| `Radio` / `RadioGroup`                     | Two separate named exports                                       |
| `ScrollArea`                               | `export function ScrollArea(...)`                                |
| `Select`                                   | `export const Select = (...)`                                    |
| `Slider`                                   | `export function Slider(...)`                                    |
| `Switch`                                   | `export function Switch(...)`                                    |
| `Text`                                     | Chakra v3 flat re-export                                         |
| `Toaster`                                  | `export const Toaster = (...)` (also exports `toaster` instance) |
| `ToggleTip`                                | `export function ToggleTip(...)`                                 |
| `Tooltip`                                  | `export function Tooltip(...)`                                   |
| `Wrap`                                     | Chakra v3 flat re-export                                         |

### Missing from earlier versions, now available

| Component           | Notes                                                            |
| ------------------- | ---------------------------------------------------------------- |
| `ColorPicker`       | `export function ColorPicker(...)` + re-exports from Chakra      |
| `DebugFontSwitcher` | `export function DebugFontSwitcher()` (dev tool)                 |
| `Highlight`         | `SearchHighlight` + `useHighlight` from Chakra                   |
| `SubmitForm`        | `export const SubmitForm = (...)` (from Form module in `@b3/ui`) |
| `ThemeProvider`     | `export function ThemeProvider(...)` (from Provider module)      |
