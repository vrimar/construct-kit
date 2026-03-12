import type { ButtonProps as ChakraButtonProps } from "@chakra-ui/react";
import { AbsoluteCenter, Button as ChakraButton, Spinner } from "@chakra-ui/react";
import React from "react";
import type { WithRef } from "../../types";

interface ButtonBaseProps {
  loading?: boolean;
  loadingText?: React.ReactNode;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
}

export interface ButtonProps extends ChakraButtonProps, ButtonBaseProps {}

export function Button({
  ref,
  loading,
  disabled,
  loadingText,
  children,
  leftIcon,
  rightIcon,
  ...rest
}: WithRef<ButtonProps, HTMLButtonElement>) {
  return (
    <ChakraButton
      disabled={loading || disabled}
      ref={ref}
      {...rest}
    >
      <span style={{ opacity: loading ? 0 : undefined, display: "contents" }}>
        {leftIcon}
        {children}
      </span>
      {rightIcon && (
        <span style={{ opacity: loading ? 0 : undefined, marginLeft: "auto" }}>{rightIcon}</span>
      )}
      {loading && (
        <AbsoluteCenter
          display="inline-flex"
          gap="1.5"
        >
          <Spinner
            size="inherit"
            color="inherit"
          />
          {loadingText}
        </AbsoluteCenter>
      )}
    </ChakraButton>
  );
}
