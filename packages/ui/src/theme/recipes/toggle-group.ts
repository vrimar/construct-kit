import { toggleGroupAnatomy } from "@ark-ui/react/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";

export const toggleGroup = defineSlotRecipe({
  className: "toggle-group",
  slots: toggleGroupAnatomy.keys(),
  base: {
    root: {},
  },
  defaultVariants: {
    variant: "outline",
  },
  variants: {
    variant: {
      outline: {
        root: {
          borderRadius: "l3",
          borderWidth: "1px",
          gap: "1",
          p: "1",
        },
      },
      solid: {
        root: {
          borderRadius: "l3",
          bg: "gray.subtle.bg",
          gap: "1",
          p: "1",
        },
      },
      subtle: {
        root: {
          borderRadius: "l3",
          gap: "1",
          p: "1",
        },
      },
    },
  },
});
