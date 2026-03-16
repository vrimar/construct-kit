import { defineSemanticTokens } from "@pandacss/dev";

type TokenValue = { value: { _light: string; _dark: string } };

function tv(light: string, dark: string): TokenValue {
  return { value: { _light: light, _dark: dark } };
}

/** Compound semantic tokens for a chromatic color (blue, red, green, brand, etc.) */
function chromaticPalette(color: string) {
  const c = (shade: number) => `{colors.${color}.${shade}}`;
  return {
    solid: {
      bg: {
        DEFAULT: tv(c(600), c(400)),
        hover: tv(c(700), c(300)),
      },
      fg: tv("white", "{colors.gray.950}"),
    },
    contrast: tv("white", "{colors.gray.950}"),
    surface: {
      bg: {
        DEFAULT: tv(c(50), c(950)),
        hover: tv(c(100), c(900)),
        active: tv(c(200), c(800)),
      },
      border: {
        DEFAULT: tv(c(200), c(800)),
        hover: tv(c(300), c(700)),
      },
      fg: tv(c(700), c(200)),
    },
    subtle: {
      bg: {
        DEFAULT: tv(c(100), c(900)),
        hover: tv(c(200), c(800)),
        active: tv(c(300), c(700)),
      },
      fg: tv(c(700), c(200)),
      border: tv(c(200), c(800)),
    },
    outline: {
      border: tv(c(300), c(700)),
      fg: tv(c(700), c(200)),
      bg: {
        hover: tv(c(50), c(950)),
        active: tv(c(100), c(900)),
      },
    },
    plain: {
      fg: tv(c(700), c(200)),
      bg: {
        hover: tv(c(50), c(950)),
        active: tv(c(100), c(900)),
      },
    },
    focusRing: tv(c(500), c(500)),
    fg: tv(c(700), c(300)),
  };
}

/** Compound semantic tokens for gray (neutral palette) */
const grayPalette = {
  solid: {
    bg: {
      DEFAULT: tv("{colors.gray.900}", "white"),
      hover: tv("{colors.gray.800}", "{colors.gray.100}"),
    },
    fg: tv("white", "{colors.gray.950}"),
  },
  contrast: tv("white", "{colors.gray.950}"),
  surface: {
    bg: {
      DEFAULT: tv("{colors.gray.50}", "{colors.gray.800}"),
      hover: tv("{colors.gray.100}", "{colors.gray.700}"),
      active: tv("{colors.gray.200}", "{colors.gray.600}"),
    },
    border: {
      DEFAULT: tv("{colors.gray.200}", "{colors.gray.700}"),
      hover: tv("{colors.gray.300}", "{colors.gray.600}"),
    },
    fg: tv("{colors.gray.800}", "{colors.gray.200}"),
  },
  subtle: {
    bg: {
      DEFAULT: tv("{colors.gray.100}", "{colors.gray.800}"),
      hover: tv("{colors.gray.200}", "{colors.gray.700}"),
      active: tv("{colors.gray.300}", "{colors.gray.600}"),
    },
    fg: tv("{colors.gray.800}", "{colors.gray.200}"),
    border: tv("{colors.gray.200}", "{colors.gray.700}"),
  },
  outline: {
    border: tv("{colors.gray.300}", "{colors.gray.600}"),
    fg: tv("{colors.gray.800}", "{colors.gray.200}"),
    bg: {
      hover: tv("{colors.gray.50}", "{colors.gray.900}"),
      active: tv("{colors.gray.100}", "{colors.gray.800}"),
    },
  },
  plain: {
    fg: tv("{colors.gray.800}", "{colors.gray.200}"),
    bg: {
      hover: tv("{colors.gray.50}", "{colors.gray.900}"),
      active: tv("{colors.gray.100}", "{colors.gray.800}"),
    },
  },
  focusRing: tv("{colors.gray.400}", "{colors.gray.400}"),
  fg: tv("{colors.gray.800}", "{colors.gray.200}"),
};

export const colors = defineSemanticTokens.colors({
  // Global background tokens
  bg: {
    DEFAULT: tv("white", "{colors.gray.900}"),
    subtle: tv("{colors.gray.50}", "{colors.gray.800}"),
    muted: tv("{colors.gray.100}", "{colors.gray.700}"),
    emphasized: tv("{colors.gray.200}", "{colors.gray.600}"),
    inverted: tv("{colors.gray.900}", "{colors.gray.50}"),
    control: tv("white", "{colors.gray.700}"),
    hover: tv("{colors.gray.50}", "{colors.gray.600}"),
  },
  // Global foreground tokens
  fg: {
    DEFAULT: tv("{colors.gray.900}", "{colors.gray.50}"),
    muted: tv("{colors.gray.600}", "{colors.gray.400}"),
    subtle: tv("{colors.gray.400}", "{colors.gray.500}"),
    inverted: tv("{colors.gray.50}", "black"),
    error: tv("{colors.red.500}", "{colors.red.400}"),
    warning: tv("{colors.orange.600}", "{colors.orange.300}"),
    success: tv("{colors.green.600}", "{colors.green.300}"),
    info: tv("{colors.blue.600}", "{colors.blue.300}"),
  },
  // Global border tokens
  border: {
    DEFAULT: tv("{colors.gray.300}", "{colors.gray.700}"),
    muted: tv("{colors.gray.100}", "{colors.gray.800}"),
    subtle: tv("{colors.gray.50}", "{colors.gray.900}"),
    emphasized: tv("{colors.gray.500}", "{colors.gray.600}"),
    inverted: tv("{colors.gray.800}", "{colors.gray.200}"),
    error: tv("{colors.red.500}", "{colors.red.400}"),
    warning: tv("{colors.orange.500}", "{colors.orange.400}"),
    success: tv("{colors.green.500}", "{colors.green.400}"),
    info: tv("{colors.blue.500}", "{colors.blue.400}"),
  },
  // Compound color palette tokens per color
  gray: grayPalette,
  brand: chromaticPalette("brand"),
  blue: chromaticPalette("blue"),
  red: chromaticPalette("red"),
  green: chromaticPalette("green"),
  orange: chromaticPalette("orange"),
  yellow: chromaticPalette("yellow"),
  purple: chromaticPalette("purple"),
  teal: chromaticPalette("teal"),
  cyan: chromaticPalette("cyan"),
  pink: chromaticPalette("pink"),
});
