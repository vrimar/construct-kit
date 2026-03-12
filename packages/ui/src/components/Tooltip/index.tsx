import { Portal, Tooltip as ChakraTooltip } from "@chakra-ui/react";
import type { ReactNode, RefObject } from "react";
import type { WithRef } from "../../types";

export interface TooltipProps extends ChakraTooltip.RootProps {
  showArrow?: boolean;
  portalled?: boolean;
  portalRef?: RefObject<HTMLElement>;
  content: ReactNode;
  contentProps?: ChakraTooltip.ContentProps;
  disabled?: boolean;
  placement?: NonNullable<ChakraTooltip.RootProps["positioning"]>["placement"];
}

export function Tooltip({
  ref,
  showArrow,
  children,
  disabled,
  portalled = true,
  content,
  contentProps,
  portalRef,
  placement = "top",
  ...rest
}: WithRef<TooltipProps>) {
  if (disabled) return children;

  return (
    <ChakraTooltip.Root
      lazyMount
      unmountOnExit
      openDelay={300}
      closeDelay={0}
      positioning={{ placement }}
      {...rest}
    >
      <ChakraTooltip.Trigger asChild>{children}</ChakraTooltip.Trigger>
      <Portal
        disabled={!portalled}
        container={portalRef}
      >
        <ChakraTooltip.Positioner>
          <ChakraTooltip.Content
            ref={ref}
            {...contentProps}
          >
            {showArrow && (
              <ChakraTooltip.Arrow>
                <ChakraTooltip.ArrowTip />
              </ChakraTooltip.Arrow>
            )}
            {content}
          </ChakraTooltip.Content>
        </ChakraTooltip.Positioner>
      </Portal>
    </ChakraTooltip.Root>
  );
}
