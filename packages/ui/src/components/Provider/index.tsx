import type { PropsWithChildren } from "react";

export interface ThemeProviderProps extends PropsWithChildren {
  /** @deprecated Theme is now compiled at build time via Panda CSS. This prop is ignored. */
  value?: unknown;
}

/**
 * In Panda CSS, theming is compiled at build time — no runtime provider is needed.
 * This component is kept for backward compatibility but simply renders its children.
 */
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return <>{children}</>;
};
