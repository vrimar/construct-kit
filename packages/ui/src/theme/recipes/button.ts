import { defineRecipe } from "@chakra-ui/react";

export const buttonRecipe = defineRecipe({
  variants: {
    variant: {
      outline: {
        bg: "bg.control",
        borderColor: "border",
        color: "fg",
        _hover: {
          bg: "bg.hover",
        },
        _expanded: {
          bg: "bg.hover",
        },
      },
      surface: {
        bg: "bg.muted",
        borderColor: "border",
        color: "fg",
        _hover: {
          bg: "bg.emphasized",
        },
        _expanded: {
          bg: "bg.emphasized",
        },
        boxShadow: "none",
      },
      ghost: {
        color: "fg",
        _hover: {
          bg: "bg.hover",
        },
        _expanded: {
          bg: "bg.hover",
        },
      },
      "ghost-outline": {
        color: "fg",
        borderColor: "border",
        _hover: {
          bg: "bg.hover",
          borderColor: "border",
        },
        _expanded: {
          bg: "bg.hover",
          borderColor: "border",
        },
      },
    },
  },
});
