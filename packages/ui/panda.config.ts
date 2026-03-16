import { defineConfig } from "@pandacss/dev";

import { b3Preset } from "./src/preset";

export default defineConfig({
  preflight: true,
  presets: ["@pandacss/preset-panda", b3Preset],
  include: ["./src/**/*.{ts,tsx}"],
  exclude: ["./src/**/*.stories.{ts,tsx}"],
  outdir: "styled-system",
  jsxFramework: "react",
});
