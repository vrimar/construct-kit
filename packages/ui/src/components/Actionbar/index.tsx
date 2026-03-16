import { ark } from "@ark-ui/react/factory";
import { Popover } from "@ark-ui/react/popover";
import type { ComponentProps } from "react";
import { createStyleContext } from "styled-system/jsx";
import { actionbar } from "styled-system/recipes";

const { withContext } = createStyleContext(actionbar);

const Root = Popover.Root;
const Positioner = Popover.Positioner;
const Content = withContext(ark.div, "content");
const Separator = withContext(ark.div, "separator");
const SelectionTrigger = withContext(ark.button, "selectionTrigger");
const CloseTrigger = withContext(ark.button, "closeTrigger");

export type ActionBarRootProps = ComponentProps<typeof Root>;

export const ActionBar = {
  Root,
  Positioner,
  Content,
  Separator,
  SelectionTrigger,
  CloseTrigger,
};
