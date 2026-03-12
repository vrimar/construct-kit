import type { ButtonProps as ChakraButtonProps } from "@chakra-ui/react";
import { Icon, IconButton as ChakraIconButton, Spinner } from "@chakra-ui/react";
import type { ReactNode } from "react";
import type { WithRef } from "../../types";

export interface IconButtonProps extends ChakraButtonProps {
  icon: ReactNode;
  loading?: boolean;
}

export function IconButton({
  ref,
  icon,
  loading,
  ...props
}: WithRef<IconButtonProps, HTMLButtonElement>) {
  return (
    <ChakraIconButton
      variant="ghost"
      ref={ref}
      {...props}
    >
      {loading ? (
        <Spinner size={props.size as "xs" | "sm" | "md" | "lg" | "xl"} />
      ) : (
        <Icon size="inherit">{icon}</Icon>
      )}
    </ChakraIconButton>
  );
}
