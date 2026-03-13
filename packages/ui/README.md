# @b3/ui

55+ Chakra UI v3 components for B3 apps. Components are wrapped so the internal API can evolve independently.

> **Rule:** Always import from `@b3/ui`, never from `@chakra-ui/*` directly.

## Setup

```tsx
import { ThemeProvider, designSystem, Toaster } from "@b3/ui";
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

## Components

### Layout

`Box`, `Flex`, `Stack`, `HStack`, `VStack`, `Center`, `Container`, `Grid`, `SimpleGrid`, `Group`, `Float`, `Separator`, `Wrap`

### Buttons

`Button`, `IconButton`, `TooltipIconButton`, `DeleteButton`, `EditButton`, `CloseButton`, `SelectButton`, `ButtonGroup`

### Data Display

`DataTable`, `Badge`, `Avatar`, `Image`, `List`, `Table`, `Stat` (compound), `EmptyState`

### Feedback

`Alert`, `ApiErrorAlert`, `LoadingOverlay`, `Toaster` / `toaster`

### Overlay / Dialog

`Dialog` (compound), `SubmitDialog`, `DeleteDialog`, `Drawer`, `Popover` (compound), `Tooltip`, `ToggleTip`

### Form

`Field`, `SubmitForm`, `Input`, `Textarea`, `InputGroup`, `PasswordInput`, `SearchInput`, `MultiLineInput`, `NumberInput` (compound), `Checkbox`, `CheckboxCard`, `Switch`, `Radio` / `RadioGroup`, `RadioCard`, `Slider`, `TagsInput`, `Editable`, `EditableText`, `FileUpload`, `FormFileUpload`

### Selection / Dropdowns

`Select`, `SelectList`, `SelectListItem`, `SelectButton`, `TagSelect`, `ApplyInput`, `ApplySelect`, `ListBox`, `ListBoxItem`, `ListBoxSection`

### Tree

`TreeView`, `useTreeView`, `TreeSelectList`, `createTreeCollection`

### Date Pickers

`DatePicker`, `RangeDatePicker`, `DatePickerSelect`

### Navigation & Text

`Link`, `Tabs`, `Accordion`, `Menu` (compound), `ContextMenu` (compound), `Text`, `TextLabel`, `TruncatedText`, `SearchHighlight`, `useHighlight`

### Misc

`Clipboard`, `Collapsible`, `ActionBar`, `ScrollArea`, `Splitter`, `Logo`, `DebugFontSwitcher`, `ThemeProvider`, `ColorPicker`

## Hooks

| Hook               | Description                                                |
| ------------------ | ---------------------------------------------------------- |
| `useAutoFocus`     | Auto-focus + optional select on mount                      |
| `useDebounceQuery` | Immediate + debounced search query state                   |
| `useFileSelect`    | Opens native file picker, returns parsed files             |
| `useRowSelection`  | Row selection state for tables (toggle, togglePage, clear) |

## Theme

`designSystem` — Chakra v3 system with custom tokens (`brand`, `brandDark`, `gray`), semantic tokens (light/dark), recipes (`Button`, `Input`), and slot recipes (`Checkbox`, `Tabs`, `Popover`, `Toast`). Body font: `Inter Variable`.

## Types

`WithRef<T, E>` — generic ref forwarding type.
