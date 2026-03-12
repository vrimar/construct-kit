import { FiTrash2 } from "react-icons/fi";
import type { WithRef } from "../../types";

import type { IconButtonProps } from "./IconButton";
import { IconButton } from "./IconButton";

export function DeleteButton({
  ref,
  ...props
}: WithRef<Omit<IconButtonProps, "icon">, HTMLButtonElement>) {
  return (
    <IconButton
      ref={ref}
      variant="ghost"
      size="xs"
      color="red.500"
      {...props}
      icon={<FiTrash2 />}
    />
  );
}
