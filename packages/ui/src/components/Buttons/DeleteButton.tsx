import { Trash2Icon } from "lucide-react";
import type { WithRef } from "../../types";

import type { IconButtonProps } from "./IconButton";
import { IconButton } from "./IconButton";

export const DeleteButton = ({
  ref,
  ...props
}: WithRef<Omit<IconButtonProps, "children">, HTMLButtonElement>) => {
  return (
    <IconButton
      ref={ref}
      variant="plain"
      size="xs"
      color="red.500"
      {...props}
    >
      <Trash2Icon />
    </IconButton>
  );
};
