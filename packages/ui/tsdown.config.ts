import path from "path";
import { defineConfig } from "tsdown";

export default defineConfig({
  entry: {
    index: "src/index.ts",
    preset: "src/preset.ts",
  },
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
  deps: { neverBundle: ["react", "react-dom"] },
  plugins: [
    {
      name: "styled-system-resolver",
      resolveId(id: string) {
        if (id.startsWith("styled-system/")) {
          return path.resolve(
            import.meta.dirname,
            "styled-system",
            id.replace("styled-system/", ""),
            "index.mjs",
          );
        }
        return null;
      },
    },
  ],
});
