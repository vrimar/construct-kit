import { Field as ArkField } from "@ark-ui/react/field";
import React from "react";
import { createStyleContext } from "styled-system/jsx";
import { field } from "styled-system/recipes";
import type { WithRef } from "../../types";

const { withProvider, withContext } = createStyleContext(field);

const FieldRoot = withProvider(ArkField.Root, "root");
const FieldLabel = withContext(ArkField.Label, "label");
const FieldHelperText = withContext(ArkField.HelperText, "helperText");
const FieldErrorText = withContext(ArkField.ErrorText, "errorText");
const FieldRequiredIndicator = withContext(ArkField.RequiredIndicator, "requiredIndicator");

export interface FieldProps extends Omit<React.ComponentProps<typeof FieldRoot>, "label"> {
  label?: React.ReactNode;
  helperText?: React.ReactNode;
  errorText?: React.ReactNode;
  optionalText?: React.ReactNode;
}

export const Field = ({
  ref,
  label,
  children,
  helperText,
  errorText,
  optionalText,
  ...rest
}: WithRef<FieldProps>) => {
  return (
    <FieldRoot
      ref={ref}
      {...rest}
    >
      {label && (
        <FieldLabel>
          {label}
          <FieldRequiredIndicator fallback={optionalText} />
        </FieldLabel>
      )}
      {children}
      {helperText && <FieldHelperText>{helperText}</FieldHelperText>}
      {errorText && <FieldErrorText>{errorText}</FieldErrorText>}
    </FieldRoot>
  );
};
