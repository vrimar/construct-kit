import React from "react";
import type { WithRef } from "../../types";

import type { TooltipProps } from "../Tooltip";
import { Tooltip } from "../Tooltip";
import type { ButtonProps } from "./Button";
import { IconButton } from "./IconButton";

interface Props extends ButtonProps {
  icon: React.ReactElement;
  tooltipProps?: TooltipProps;
  label: string;
}

export function TooltipIconButton({ ref, label, icon, tooltipProps, ...props }: WithRef<Props>) {
  return (
    <Tooltip
      ref={ref}
      content={label}
    >
      <IconButton
        icon={icon}
        {...props}
      />
    </Tooltip>
  );
}
