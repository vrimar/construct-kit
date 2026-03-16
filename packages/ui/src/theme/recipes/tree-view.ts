import { treeViewAnatomy } from "@ark-ui/react/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";

export const treeView = defineSlotRecipe({
  className: "treeView",
  slots: treeViewAnatomy.keys(),
  base: {
    root: {
      width: "full",
      display: "flex",
      flexDirection: "column",
    },
    tree: {
      display: "flex",
      flexDirection: "column",
      outline: "none",
      "--tree-indent": "spacing.5",
      _icon: {
        boxSize: "var(--tree-icon-size)",
      },
    },
    label: {
      fontWeight: "medium",
      textStyle: "sm",
    },
    branch: {
      position: "relative",
    },
    branchControl: {
      display: "flex",
      alignItems: "center",
      gap: "1.5",
      rounded: "sm",
      cursor: "pointer",
      userSelect: "none",
      ps: "calc(var(--depth) * var(--tree-indent))",
      transition: "backgrounds",
      _hover: {
        bg: "bg.subtle",
      },
      _selected: {
        bg: "bg.emphasized",
      },
      _focusVisible: {
        outline: "2px solid",
        outlineColor: "border.emphasized",
        outlineOffset: "-2px",
      },
      _disabled: {
        layerStyle: "disabled",
      },
    },
    branchIndicator: {
      transition: "rotate 0.2s",
      transformOrigin: "center",
      color: "fg.subtle",
      _open: {
        rotate: "-180deg",
      },
      _icon: {
        width: "1em",
        height: "1em",
      },
    },
    branchText: {
      truncate: true,
    },
    branchContent: {},
    branchTrigger: {},
    branchIndentGuide: {
      position: "absolute",
      top: "0",
      bottom: "0",
      start: "calc((var(--depth) + 0.5) * var(--tree-indent))",
      width: "1px",
      bg: "border.default",
    },
    item: {
      display: "flex",
      alignItems: "center",
      gap: "1.5",
      rounded: "sm",
      cursor: "pointer",
      userSelect: "none",
      ps: "calc(var(--depth) * var(--tree-indent))",
      transition: "backgrounds",
      _hover: {
        bg: "bg.subtle",
      },
      _selected: {
        bg: "bg.emphasized",
      },
      _focusVisible: {
        outline: "2px solid",
        outlineColor: "border.emphasized",
        outlineOffset: "-2px",
      },
      _disabled: {
        layerStyle: "disabled",
      },
    },
    itemIndicator: {
      color: "fg.subtle",
      _icon: {
        width: "1em",
        height: "1em",
      },
    },
    itemText: {
      truncate: true,
    },
  },
  defaultVariants: {
    size: "md",
  },
  variants: {
    size: {
      sm: {
        tree: {
          "--tree-icon-size": "sizes.3.5",
          "--tree-indent": "spacing.4",
          textStyle: "xs",
        },
        branchControl: {
          py: "0.5",
          px: "1.5",
        },
        item: {
          py: "0.5",
          px: "1.5",
        },
      },
      md: {
        tree: {
          "--tree-icon-size": "sizes.4",
          textStyle: "sm",
        },
        branchControl: {
          py: "1",
          px: "2",
        },
        item: {
          py: "1",
          px: "2",
        },
      },
    },
  },
});
