import { ark } from "@ark-ui/react/factory";
import { Popover } from "@ark-ui/react/popover";
import type { ComponentProps } from "react";
import { styled } from "styled-system/jsx";

const Root = Popover.Root;
const Positioner = Popover.Positioner;

const Content = styled(ark.div, {
  base: {
    display: "flex",
    alignItems: "center",
    gap: "3",
    bg: "bg",
    borderRadius: "l3",
    boxShadow: "lg",
    px: "3",
    py: "2.5",
  },
});

const Separator = styled(ark.div, {
  base: {
    width: "1px",
    alignSelf: "stretch",
    bg: "border.default",
  },
});

const SelectionTrigger = styled(ark.button, {
  base: {
    textStyle: "sm",
    color: "fg.muted",
    cursor: "pointer",
  },
});

const CloseTrigger = styled(ark.button, {
  base: {
    cursor: "pointer",
    color: "fg.muted",
    _hover: { color: "fg" },
  },
});

export type ActionBarRootProps = ComponentProps<typeof Root>;

export const ActionBar = {
  Root,
  Positioner,
  Content,
  Separator,
  SelectionTrigger,
  CloseTrigger,
};
