import { definePreset } from "@pandacss/dev";

import { animationStyles } from "./theme/animation-styles";
import { breakpoints } from "./theme/breakpoints";
import { conditions } from "./theme/conditions";
import { globalCss } from "./theme/global-css";
import { keyframes } from "./theme/keyframes";
import { layerStyles } from "./theme/layer-styles";
import { recipes, slotRecipes } from "./theme/recipes";
import { semanticTokens } from "./theme/semantic-tokens";
import { textStyles } from "./theme/text-styles";
import { tokens } from "./theme/tokens";

const colorPaletteValues = [
  "brand",
  "gray",
  "blue",
  "red",
  "green",
  "orange",
  "yellow",
  "purple",
  "teal",
  "cyan",
  "pink",
];

/**
 * Custom B3 Panda CSS preset.
 * Provides the full B3 design system: tokens, semantic tokens, recipes,
 * conditions, keyframes, animations, and global CSS.
 *
 * Use with `@pandacss/preset-base` for CSS utility mappings and patterns.
 */
export const b3Preset = definePreset({
  name: "b3-preset",
  conditions,
  theme: {
    breakpoints,
    tokens,
    keyframes,
    animationStyles,
    layerStyles,
    textStyles,
    recipes,
    slotRecipes,
    extend: {
      semanticTokens,
    },
  },
  globalCss,
  staticCss: {
    css: [
      {
        properties: {
          colorPalette: colorPaletteValues,
        },
      },
    ],
  },
});
