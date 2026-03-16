import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: [
    "../../../packages/ui/src/**/*.stories.@(ts|tsx)",
    "../../../packages/pages/src/**/*.stories.@(ts|tsx)",
  ],
  addons: ["@storybook/addon-a11y", "msw-storybook-addon"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  refs: {},
  viteFinal(config: Parameters<NonNullable<StorybookConfig["viteFinal"]>>[0]) {
    return {
      ...config,
      optimizeDeps: {
        ...config.optimizeDeps,
        include: [...(config.optimizeDeps?.include ?? []), "@tanstack/react-query"],
      },
    };
  },
};

export default config;
