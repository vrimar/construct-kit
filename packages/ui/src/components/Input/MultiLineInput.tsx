import React, { useCallback } from "react";
import type { TextareaProps } from "./Textarea";
import { Textarea } from "./Textarea";

export const MultiLineInput = ({ onKeyDown, ...props }: TextareaProps) => {
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === "Enter") {
        e.preventDefault();
        if (onKeyDown) {
          onKeyDown(e);
        }
      }
    },
    [onKeyDown],
  );

  return (
    <Textarea
      resize="none"
      {...props}
      onKeyDown={handleKeyDown}
    />
  );
};
