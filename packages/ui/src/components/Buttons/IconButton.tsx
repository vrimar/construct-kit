import type { WithRef } from "../../types";
import { Button, type ButtonProps } from "./Button";

export interface IconButtonProps extends ButtonProps {
  icon?: React.ReactNode | undefined;
}

export const IconButton = ({
  ref,
  icon,
  children,
  ...props
}: WithRef<IconButtonProps, HTMLButtonElement>) => {
  return (
    <Button
      px="0"
      py="0"
      ref={ref}
      {...props}
    >
      {icon ?? children}
    </Button>
  );
};
