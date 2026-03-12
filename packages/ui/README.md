# @b3/ui

Shared component library for all B3 frontend apps. Built on **Chakra UI v3** — components are wrapped so the internal API can evolve independently of Chakra's versioning.

> **Rule:** Always import from `@b3/ui`, never from `@chakra-ui/*` directly.

## Installation

```bash
pnpm add @b3/ui
```

Peer dependencies:

```bash
pnpm add @chakra-ui/react @ark-ui/react react react-dom
```

## Setup

Wrap your app root with `ThemeProvider` using the exported design system:

```tsx
import { ThemeProvider, designSystem, Toaster } from "@b3/ui";

<ThemeProvider value={designSystem}>
  <App />
  <Toaster />
</ThemeProvider>;
```

---

## Components

### Layout

| Export       | Description                                       |
| ------------ | ------------------------------------------------- |
| `Box`        | Base layout primitive (re-export of Chakra `Box`) |
| `Flex`       | Flexbox container                                 |
| `Stack`      | Vertical stack with gap                           |
| `HStack`     | Horizontal stack with gap                         |
| `VStack`     | Vertical stack with gap                           |
| `Center`     | Centers its children                              |
| `Container`  | Max-width centered container                      |
| `Grid`       | CSS Grid container                                |
| `SimpleGrid` | Simplified grid with `columns` / `minChildWidth`  |
| `Group`      | Groups inline elements                            |
| `Float`      | Floating positioned element                       |
| `Separator`  | Horizontal/vertical separator line                |
| `Wrap`       | Wraps children with automatic spacing             |

All layout components also export their corresponding `Props` types (e.g. `BoxProps`, `FlexProps`, `StackProps`).

---

### Buttons

| Export              | Key Props                                                        | Description                                                                                  |
| ------------------- | ---------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `Button`            | `loading`, `loadingText`, `leftIcon`, `rightIcon`, variant, size | Primary button with built-in spinner overlay when `loading` is true                          |
| `IconButton`        | `icon`, `loading`                                                | Icon-only button with ghost variant by default                                               |
| `TooltipIconButton` | `icon`, `label`, `tooltipProps`                                  | `IconButton` wrapped in a `Tooltip`                                                          |
| `DeleteButton`      | —                                                                | Pre-styled red ghost trash icon button (`FiTrash2`)                                          |
| `EditButton`        | —                                                                | Pre-styled ghost edit icon button (`FiEdit3`)                                                |
| `CloseButton`       | —                                                                | Ghost icon button with `LuX` icon, `aria-label="Close"`                                      |
| `SelectButton`      | `label`, `sublabel`, `hasValue`, `onClear`                       | Outline button that looks like a select trigger — shows chevron down and optional clear icon |
| `ButtonGroup`       | `attached`                                                       | Groups buttons, with optional attached styling that merges borders                           |

---

### Data Display

| Export       | Key Props                                                                                                                                                  | Description                                                                                                                                                                           |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `DataTable`  | `data`, `columns`, `totalItems`, `params`, `onParamChange`, `loading`, `onRowClick`, `onReset`, `selections`, `showPagination`, `showFiltersRow`, `labels` | Full-featured server-side data table built on TanStack Table. Supports sorting, column filters (input/select/date), pagination, sub-rows, and row click handlers.                     |
| `Badge`      | (Chakra Badge props)                                                                                                                                       | Re-export of Chakra Badge                                                                                                                                                             |
| `Avatar`     | (Chakra Avatar props)                                                                                                                                      | Re-export of Chakra Avatar                                                                                                                                                            |
| `Image`      | (Chakra Image props)                                                                                                                                       | Re-export of Chakra Image                                                                                                                                                             |
| `List`       | (Chakra List props)                                                                                                                                        | Re-export of Chakra List                                                                                                                                                              |
| `Table`      | (Chakra Table props)                                                                                                                                       | Low-level Chakra Table namespace (for custom tables outside DataTable)                                                                                                                |
| `Stat`       | Compound: `Root`, `Label`, `ValueText`, `UpTrend`, `DownTrend`, `HelpText`, `ValueUnit`                                                                    | Statistics display with formatted numbers and trend indicators. `StatLabel` supports an `info` toggle-tip. `StatValueText` accepts `value` + `formatOptions` for `Intl.NumberFormat`. |
| `EmptyState` | (Chakra EmptyState props)                                                                                                                                  | Re-export of Chakra EmptyState                                                                                                                                                        |

#### DataTable Types

```ts
type DataTableParams = {
  orderBy: string;
  orderType: "asc" | "desc" | "";
  page: number;
  pageSize: number;
  filters: DataTableFilters;
};

type DataTableFilters = Record<string, string[] | undefined>;

type Column<TData> = ColumnDef<TData> & {
  filterType?: "input" | "select" | "date";
};

type TableFilterSelections = Record<string, string[]>;
```

Column `meta` supports `type`, `selectProps`, `width`, and `isVisible`.

---

### Feedback

| Export           | Key Props                                                                      | Description                                                                                                                                             |
| ---------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Alert`          | `title`, `status`, `icon`, `closable`, `onClose`, `startElement`, `endElement` | Alert banner with indicator icon, title, optional description (children), and close button                                                              |
| `ApiErrorAlert`  | `error`                                                                        | Renders an `Alert` with `status="error"` extracting the message from common API error shapes (`Message`, `message`, `description`, `error_description`) |
| `LoadingOverlay` | `isActive`, `fill`, `tip`, `align`, `offset`, `relative`, `size`               | Full-area spinner overlay with fade transition. Toggles visibility via `isActive`.                                                                      |
| `Toaster`        | —                                                                              | Toast container component — render once at app root                                                                                                     |
| `toaster`        | —                                                                              | Imperative toast API (`toaster.create({ title, type })`)                                                                                                |

---

### Overlay / Dialog

| Export         | Key Props                                                                                                                                            | Description                                                                                                                                       |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Dialog`       | Compound: `Root`, `Content`, `Header`, `Body`, `Footer`, `Title`, `Description`, `Trigger`, `CloseTrigger`, `ActionTrigger`, `Backdrop`              | Modal dialog with portal support, backdrop, close button. `Content` accepts `portalled` and `backdrop` props. `Header` has bottom border styling. |
| `SubmitDialog` | `title`, `onSubmit`, `submitLabel`, `isSubmitLoading`, `isSubmitDisabled`, `onClose`, `cancelLabel`, `width`, `autoFocusButton`, `submitButtonProps` | Ready-made dialog with header/body/footer, cancel + submit buttons, and Enter key submission                                                      |
| `DeleteDialog` | `title`, `name`, `onSubmit`, `onClose`, `loading`, `confirmMessage`                                                                                  | Specialized `SubmitDialog` for delete confirmations — shows "Are you sure you want to delete **{name}**?" with a red submit button                |
| `Drawer`       | (Chakra Drawer namespace)                                                                                                                            | Re-export of Chakra Drawer                                                                                                                        |
| `Popover`      | Compound: `Root`, `Content`, `Arrow`, `CloseTrigger`, `Title`, `Description`, `Footer`, `Header`, `Body`, `Trigger`                                  | Popover with portal support, lazy mount, and `placement` prop. Root supports `placement` shorthand.                                               |
| `Tooltip`      | `content`, `placement`, `showArrow`, `disabled`, `portalled`, `contentProps`                                                                         | Tooltip wrapper with 300ms open delay, lazy mount. When `disabled`, renders children directly.                                                    |
| `ToggleTip`    | `content`, `showArrow`, `portalled`                                                                                                                  | Click-triggered popover tip (for info icons). Similar to Tooltip but toggled on click.                                                            |

---

### Form

| Export           | Key Props                                                                                         | Description                                                                                           |
| ---------------- | ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `Field`          | `label`, `helperText`, `errorText`, `optionalText`, `required`, `invalid`                         | Form field wrapper with label, required indicator, helper text, and error text                        |
| `SubmitForm`     | `onSubmit`, `isSubmitLoading`, `isSubmitDisabled`, `error`, `onCancel`                            | Form layout with `ApiErrorAlert`, field stack, and Cancel/Submit button row. Submits on Enter.        |
| `Input`          | (Chakra Input props)                                                                              | Re-export of Chakra Input                                                                             |
| `Textarea`       | (Chakra Textarea props)                                                                           | Re-export of Chakra Textarea                                                                          |
| `InputGroup`     | `startElement`, `endElement`, `startElementProps`, `endElementProps`                              | Wraps an `Input` with optional leading/trailing elements                                              |
| `PasswordInput`  | `containerProps` + InputProps                                                                     | Input with show/hide password toggle button                                                           |
| `SearchInput`    | `onClear`, `hasSearchIcon` + InputProps                                                           | Input with search icon and clearable X button                                                         |
| `MultiLineInput` | TextareaProps                                                                                     | Textarea that prevents Enter from inserting newlines (propagates `onKeyDown` instead)                 |
| `NumberInput`    | Compound: `Root`/`Field`/`Scrubber`/`Label`                                                       | Number input with outline variant. Increment/decrement triggers commented out by default.             |
| `Checkbox`       | `icon`, `inputProps`, `rootRef` + Chakra CheckboxRootProps                                        | Checkbox with hidden input and customizable indicator icon                                            |
| `CheckboxCard`   | `label`, `description`, `icon`, `addon`, `indicator`, `indicatorPlacement`                        | Card-style checkbox with hover state. Supports start/end/inside indicator placement.                  |
| `Switch`         | `inputProps`, `rootRef`, `trackLabel`, `thumbLabel`                                               | Toggle switch with optional on/off labels for track and thumb                                         |
| `Radio`          | `inputProps`, `rootRef` + RadioGroup.ItemProps                                                    | Radio button with hidden input                                                                        |
| `RadioGroup`     | (Chakra RadioGroup.Root)                                                                          | Radio group container                                                                                 |
| `RadioCard`      | (Chakra RadioCard namespace)                                                                      | Re-export of Chakra RadioCard                                                                         |
| `Slider`         | `marks`, `label`, `showValue` + ChakraSlider.RootProps                                            | Slider with optional marks and value display                                                          |
| `TagsInput`      | (Chakra TagsInput namespace)                                                                      | Re-export of Chakra TagsInput                                                                         |
| `Editable`       | (Chakra Editable namespace)                                                                       | Re-export of Chakra Editable inline editing                                                           |
| `EditableText`   | `text`, `onEdit`, `isLoading`, `inputProps`                                                       | Inline editable text — renders children normally, click edit icon to switch to input with Save/Cancel |
| `FileUpload`     | (Chakra FileUpload namespace)                                                                     | Re-export of Chakra FileUpload                                                                        |
| `useFileUpload`  | —                                                                                                 | Re-export of Chakra's `useFileUpload`                                                                 |
| `FormFileUpload` | `onFileChange`, `accept`, `maxFileSize`, `disabled`, `invalid`, `placeholder`, `name`, `required` | Single-file upload field styled as an input with file icon and clear button                           |

---

### Selection / Dropdowns

| Export           | Key Props                                                                                                                                           | Description                                                                                                                      |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `Select`         | `items`, `selected`, `getValue`, `getLabel`, `onSelect`, `searchable`, `triggerProps`, `emptySelectionLabel`, `contentProps`, `footer`, `placement` | Popover-based select with search, single or multi-select, customizable trigger and content width                                 |
| `SelectList`     | `items`, `selected`, `getValue`, `getLabel`, `onSelect`, `searchable`, `renderLabel`, `renderActions`, `virtual`, `isLoading`, `activeItemStyle`    | Standalone searchable list (used inside `Select`). Supports virtual scrolling via `react-virtuoso` and shift-click multi-select. |
| `SelectListItem` | `item`, `isSelected`, `renderLabel`, `onSelect`, `activeItemStyle`, `renderActions`                                                                 | Individual item row in a `SelectList` with checkmark indicator                                                                   |
| `SelectButton`   | `label`, `sublabel`, `hasValue`, `onClear`                                                                                                          | Button that looks like a select trigger (used as default `Select` trigger)                                                       |
| `TagSelect`      | `selected`, `onSelect`, `renderTag`, `placeholder` + SelectProps                                                                                    | Multi-select rendered as a tags input — selected items display as removable tags                                                 |
| `ApplyInput`     | `value`, `onApply`, `inputProps`                                                                                                                    | Popover with a text input and Apply/Reset buttons — applies value on button click                                                |
| `ApplySelect`    | `onApply`, `applyText`, `cancelText`, `hasToggleAll` + SelectProps                                                                                  | `Select` that commits selections only on Apply. Supports Toggle All.                                                             |
| `ListBox`        | `containerProps` + react-aria ListBoxProps                                                                                                          | Styled React Aria `ListBox` with Chakra styling                                                                                  |
| `ListBoxItem`    | `description` + react-aria ListBoxItemProps                                                                                                         | List box item with checkmark indicator and optional description                                                                  |
| `ListBoxSection` | `title` + react-aria ListBoxSectionProps                                                                                                            | Grouped section header for `ListBox`                                                                                             |
| `Collection`     | —                                                                                                                                                   | Re-export of React Aria `Collection`                                                                                             |
| `Header`         | —                                                                                                                                                   | Re-export of React Aria `Header`                                                                                                 |

---

### Tree

| Export                 | Key Props                                                                                                                                                                 | Description                                                                                                 |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `TreeView`             | `tree`, `renderItem`, `indent` + BoxProps                                                                                                                                 | Renders a `@headless-tree/core` tree instance. Supports custom item rendering and configurable indentation. |
| `useTreeView`          | `TreeViewConfig<T>`                                                                                                                                                       | Hook that creates a headless tree instance with default features (sync data loader, selection, hotkeys)     |
| `TreeSelectList`       | `groups`, `selected`, `onSelectedChange`, `getId`, `getLabel`, `showCheckboxes`, `showToggleAll`, `renderItem`, `renderActions`, `renderGroupLabel`, `renderGroupActions` | Grouped tree of checkboxes with search, collapse/expand, toggle all, and group-level selection              |
| `createTreeCollection` | —                                                                                                                                                                         | Re-export of Chakra's `createTreeCollection`                                                                |

Also re-exports from `@headless-tree/core`: `syncDataLoaderFeature`, `asyncDataLoaderFeature`, `selectionFeature`, `hotkeysCoreFeature`, `dragAndDropFeature`, `keyboardDragAndDropFeature`, `renamingFeature`, `searchFeature`, `expandAllFeature`, `checkboxesFeature`, `propMemoizationFeature`, `createOnDropHandler`, `insertItemsAtTarget`, `removeItemsFromParents`, and types `TreeConfig`, `TreeInstance`, `TreeState`, `ItemInstance`.

---

### Date Pickers

| Export             | Key Props                                   | Description                                                                                                                |
| ------------------ | ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `DatePicker`       | `value`, `onValueChange`, `trigger`         | Single date picker popover built on Ark UI. Defaults to showing a button trigger with the selected date. Min date = today. |
| `RangeDatePicker`  | `value`, `onValueChange`, `trigger`, `mode` | Two-month range date picker with presets (Last 7/14/30/90 days) and clear button                                           |
| `DatePickerSelect` | `value`, `onValueChange`, `mode`            | `RangeDatePicker` with a `SelectButton` trigger, showing formatted date range                                              |

---

### Navigation & Text

| Export            | Key Props                                                                                                                                                                                    | Description                                                                                               |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `Link`            | (Chakra Link props)                                                                                                                                                                          | Re-export of Chakra Link                                                                                  |
| `Tabs`            | (Chakra Tabs namespace)                                                                                                                                                                      | Re-export of Chakra Tabs                                                                                  |
| `Accordion`       | (Chakra Accordion namespace)                                                                                                                                                                 | Re-export of Chakra Accordion                                                                             |
| `Menu`            | Compound: `Root`, `Content`, `Arrow`, `Item`, `CheckboxItem`, `RadioItem`, `ItemGroup`, `TriggerItem`, `RadioItemGroup`, `ContextTrigger`, `Separator`, `ItemText`, `ItemCommand`, `Trigger` | Full menu system with placement shorthand, portalled content, checkbox/radio items, submenu trigger items |
| `ContextMenu`     | Compound: `Root`, `Content`, `Trigger`, `Item`, `CheckboxItem`, `RadioItem`, `ItemGroup`, `TriggerItem`, `Separator`, `ItemText`, `ItemCommand`                                              | Right-click context menu with the same compound API as `Menu`, portal support, and submenu triggers       |
| `Text`            | (Chakra Text props)                                                                                                                                                                          | Re-export of Chakra Text                                                                                  |
| `TextLabel`       | TextProps                                                                                                                                                                                    | `Text` with `fontWeight="medium"`                                                                         |
| `TruncatedText`   | TextProps                                                                                                                                                                                    | Box with `text-overflow: ellipsis`, `overflow: hidden`, `white-space: nowrap`                             |
| `SearchHighlight` | `text`, `query`                                                                                                                                                                              | Highlights matching words from `query` in `text` with yellow background. Splits query by whitespace.      |
| `useHighlight`    | —                                                                                                                                                                                            | Re-export of Chakra's `useHighlight` hook                                                                 |

---

### Miscellaneous

| Export              | Key Props                                                                    | Description                                                                               |
| ------------------- | ---------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `Clipboard`         | (Chakra Clipboard namespace)                                                 | Re-export of Chakra Clipboard                                                             |
| `Collapsible`       | (Chakra Collapsible namespace)                                               | Re-export of Chakra Collapsible                                                           |
| `ActionBar`         | (Chakra ActionBar namespace)                                                 | Re-export of Chakra ActionBar — floating action bar for contextual actions                |
| `ScrollArea`        | `type`, `scrollHideDelay`, `verticalEnabled`, `horizontalEnabled` + BoxProps | Styled scroll area built on `@radix-ui/react-scroll-area` with thin custom scrollbars     |
| `Logo`              | `width`, `height`, `color`                                                   | SVG "b3" logo                                                                             |
| `DebugFontSwitcher` | —                                                                            | Developer tool popover that loads Google Fonts dynamically to preview different typefaces |
| `ThemeProvider`     | `ChakraProviderProps`                                                        | Chakra's `ChakraProvider` component re-exported                                           |

### Utilities

| Export                 | Description                                                            |
| ---------------------- | ---------------------------------------------------------------------- |
| `defineKeyframes`      | Re-export of Chakra's `defineKeyframes` for animation definitions      |
| `useToken`             | Re-export of Chakra's `useToken` for accessing theme tokens at runtime |
| `createSystem`         | Re-export for creating custom Chakra design systems                    |
| `defaultConfig`        | Re-export of Chakra's default config                                   |
| `defaultSystem`        | Re-export of Chakra's default system                                   |
| `defineConfig`         | Re-export for defining Chakra config                                   |
| `defineRecipe`         | Re-export for defining component recipes                               |
| `defineSemanticTokens` | Re-export for defining semantic tokens                                 |
| `defineSlotRecipe`     | Re-export for defining slot recipes                                    |
| `defineTokens`         | Re-export for defining design tokens                                   |
| `mergeConfigs`         | Re-export for merging Chakra configs                                   |

---

## Hooks

| Hook               | Signature                                                                                                                                          | Description                                                                                                                                                                     |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `useAutoFocus`     | `useAutoFocus(select?: boolean) => RefObject`                                                                                                      | Returns a ref that auto-focuses and optionally selects the input on mount (via `useLayoutEffect`)                                                                               |
| `useDebounceQuery` | `useDebounceQuery(initialQuery?: string, delay?: number) => { query, debouncedQuery, setQuery }`                                                   | Manages immediate + debounced search query state. Clears debounce immediately when query is emptied. Uses `react-use` `useDebounce`.                                            |
| `useFileSelect`    | `useFileSelect<TMultiple>(options?: { accept?, multiple?, onSelect? }) => () => void`                                                              | Returns a callback that opens a native file picker. Parses selected files into `{ source, name, size, file }`. Supports single or multiple mode.                                |
| `useRowSelection`  | `useRowSelection<T>({ rows, getId }) => { selected, selectedItems, selectedIds, isSelected, toggle, togglePage, clear, allOnPage, indeterminate }` | Manages row selection state for tables. Tracks a `Set` of selected IDs. Provides page-level toggle, individual toggle, clear, and computed `allOnPage` / `indeterminate` flags. |

---

## Theme / Design System

The package exports `designSystem` — a Chakra system created with custom tokens, semantic tokens, and recipes.

### Tokens

- **Colors**: `gray` (50–950), `brand` (50–900, primary blue #3778ff at 500), `brandDark` (50–900)
- **Fonts**: Body font — `"Inter Variable"` with system font fallbacks

### Semantic Tokens

Light/dark mode aware:

| Token           | Light    | Dark     |
| --------------- | -------- | -------- |
| `bg.DEFAULT`    | white    | gray.900 |
| `bg.subtle`     | gray.50  | gray.800 |
| `bg.muted`      | gray.100 | gray.700 |
| `bg.emphasized` | gray.200 | gray.600 |
| `bg.inverted`   | gray.900 | gray.50  |
| `bg.control`    | white    | gray.700 |
| `bg.hover`      | gray.50  | gray.600 |
| `fg.DEFAULT`    | gray.900 | gray.50  |
| `fg.muted`      | gray.600 | gray.400 |
| `fg.subtle`     | gray.400 | gray.500 |
| `fg.inverted`   | gray.50  | black    |
| `fg.error`      | red.500  | red.400  |

### Recipes

- **Button** — custom button recipe
- **Input** — custom input recipe

### Slot Recipes

- **Checkbox** — custom checkbox slot recipe
- **Tabs** — custom tabs slot recipe
- **Popover** — custom popover slot recipe
- **Toast** — custom toast slot recipe

### Global CSS

- Default `colorPalette` set to `"primary"`
- Full height/width `html` and `body`
- `body` overflow hidden
- Modal z-index: `1700`
- `:focus-visible` outline removed globally

---

## Storybook

The published Storybook is the primary component reference — all props are documented and interactive.

---

[Architecture guide](../../readme.md)
