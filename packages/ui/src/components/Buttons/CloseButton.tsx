import type { ButtonProps as ChakraCloseButtonProps } from "@chakra-ui/react";
import { IconButton as ChakraIconButton } from "@chakra-ui/react";
import { LuX } from "react-icons/lu";
import type { WithRef } from "../../types";

export interface CloseButtonProps extends ChakraCloseButtonProps {}

export function CloseButton({
  ref,
  children,
  ...props
}: WithRef<CloseButtonProps, HTMLButtonElement>) {
  return (
    <ChakraIconButton
      variant="ghost"
      aria-label="Close"
      ref={ref}
      {...props}
    >
      {children ?? <LuX />}
    </ChakraIconButton>
  );
}
