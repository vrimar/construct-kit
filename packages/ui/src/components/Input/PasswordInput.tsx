import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";
import type { InputProps } from "./Input";
import { Input } from "./Input";

import { TooltipIconButton } from "../Buttons";
import type { InputGroupProps } from "./InputGroup";
import { InputGroup } from "./InputGroup";

export interface PasswordInputProps extends InputProps {
  containerProps?: InputGroupProps;
}

export const PasswordInput = ({ containerProps, ...props }: PasswordInputProps) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <InputGroup
      width="100%"
      {...containerProps}
      endElement={
        <TooltipIconButton
          label={isVisible ? "Hide password" : "Show password"}
          onClick={() => setIsVisible((prev) => !prev)}
          size="sm"
        >
          {isVisible ? <EyeOffIcon /> : <EyeIcon />}
        </TooltipIconButton>
      }
    >
      <Input
        type={isVisible ? "text" : "password"}
        {...props}
      />
    </InputGroup>
  );
};
