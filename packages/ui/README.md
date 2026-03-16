# @b3/ui

60+ UI components for B3 apps, built on Panda CSS and Ark UI primitives.

> **Rule:** Always import from `@b3/ui`, never from `@ark-ui/*` or `styled-system/*` directly.

## Setup

Peer dependencies:

```bash
pnpm add @ark-ui/react react react-dom
```

Wrap your app root with a Panda CSS-based provider:

```tsx
import { Provider, Toaster } from "@b3/ui";

<Provider>
  <App />
  <Toaster />
</Provider>;
```

## Theme

Theme is compiled at build time via **Panda CSS**. The `b3Preset` (from `@b3/ui/preset`) defines brand tokens, semantic tokens, and component recipes.

> `designSystem` is still exported for backward compatibility but is **deprecated** (returns an empty object). Use the Panda CSS preset instead.

## Panda CSS Utilities

```tsx
import { css, cx, styled } from "@b3/ui";
import type { HTMLStyledProps, StyledComponent } from "@b3/ui";
import { token } from "@b3/ui"; // design token accessor
```

## Components

### Layout

`Box`, `Flex`, `Stack`, `HStack`, `VStack`, `Center`, `Container`, `Grid`, `GridItem`, `Spacer`, `Float`, `Separator` (alias for `Divider`), `Divider`, `Wrap`

### Buttons

`Button`, `IconButton`, `TooltipIconButton`, `DeleteButton`, `EditButton`, `CloseButton`, `SelectButton`, `ButtonGroup`

### Data Display

`DataTable`, `Badge`, `Avatar`, `Image`, `List` (compound), `Table`, `Stat` (compound), `EmptyState`, `Card`, `Carousel`, `Code`, `DisplayValue`, `Kbd`

### Feedback

`Alert`, `LoadingOverlay`, `Toaster` / `toaster`, `Progress`, `Skeleton`, `Spinner`

### Overlay / Dialog

`Dialog` (compound), `SubmitDialog`, `DeleteDialog`, `Drawer`, `Popover` (compound), `Tooltip`, `ToggleTip`, `HoverCard`

### Form

`Form`, `Fieldset`, `Input`, `Textarea`, `InputGroup`, `PasswordInput`, `SearchInput`, `MultiLineInput`, `NumberInput` (compound), `Checkbox`, `CheckboxCard`, `Switch`, `Radio` / `RadioGroup`, `RadioCard`, `Slider`, `TagsInput`, `Editable`, `EditableText`, `FileUpload`, `PinInput`, `ColorPicker`

### Selection / Dropdowns

`Select`, `SelectList`, `SelectListItem`, `SelectButton`, `TagSelect`, `ApplyInput`, `ApplySelect`, `Combobox`

### Tree

`TreeView` (compound component built on Ark UI), `useTreeView`, `TreeSelectList`, `createTreeCollection`, `createFileTreeCollection`

### Date Pickers

`DatePicker`, `RangeDatePicker`, `DatePickerSelect`

### Navigation & Text

`Link`, `Tabs`, `Accordion`, `Breadcrumb`, `Menu` (compound), `ContextMenu` (compound), `Text`, `TextLabel`, `TruncatedText`, `Heading`, `Span`, `SearchHighlight`, `useHighlight`

### Misc

`Actionbar`, `Clipboard`, `Collapsible`, `Highlight`, `Icon`, `Logo`, `Pagination`, `RatingGroup`, `ScrollArea`, `SegmentGroup`, `Splitter`, `ToggleGroup`, `DebugFontSwitcher`, `Provider`

## Hooks

| Hook               | Description                                                |
| ------------------ | ---------------------------------------------------------- |
| `useAutoFocus`     | Auto-focus + optional select on mount                      |
| `useDebounceQuery` | Immediate + debounced search query state                   |
| `useFileSelect`    | Opens native file picker, returns parsed files             |
| `useRowSelection`  | Row selection state for tables (toggle, togglePage, clear) |

## Types

`WithRef<T, E>` — generic ref forwarding type.
