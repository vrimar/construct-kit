import { FiEdit3 } from "react-icons/fi";
import type { WithRef } from "../../types";

import type { IconButtonProps } from "./IconButton";
import { IconButton } from "./IconButton";

export function EditButton({
  ref,
  ...props
}: WithRef<Omit<IconButtonProps, "icon">, HTMLButtonElement>) {
  return (
    <IconButton
      ref={ref}
      variant="ghost"
      size="xs"
      {...props}
      icon={<FiEdit3 />}
    />
  );
}
