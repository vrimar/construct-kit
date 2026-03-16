import * as React from "react";
import { styled } from "styled-system/jsx";
import type { HTMLStyledProps } from "styled-system/types";
import type { WithRef } from "../../types";
import * as ArkCheckbox from "../Checkbox";

const CardRoot = styled("label", {
  base: {
    display: "flex",
    flexDirection: "column",
    borderWidth: "1px",
    borderColor: "border",
    borderRadius: "l2",
    cursor: "pointer",
    userSelect: "none",
    _hover: { bg: "bg.subtle" },
    _checked: { borderColor: "colorPalette", bg: "colorPalette.subtle" },
  },
});

const CardControl = styled("div", {
  base: {
    display: "flex",
    alignItems: "center",
    gap: "3",
    p: "4",
    flex: "1",
  },
});

const CardContent = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "1",
    flex: "1",
  },
});

const CardLabel = styled("span", {
  base: {
    fontWeight: "medium",
    textStyle: "sm",
  },
});

const CardDescription = styled("span", {
  base: {
    textStyle: "sm",
    color: "fg.muted",
  },
});

const CardAddon = styled("div", {
  base: {
    borderTopWidth: "1px",
    borderColor: "border",
    px: "4",
    py: "3",
  },
});

export interface CheckboxCardProps extends Omit<
  HTMLStyledProps<"label">,
  "onChange" | "defaultChecked"
> {
  icon?: React.ReactElement;
  label?: React.ReactNode;
  description?: React.ReactNode;
  addon?: React.ReactNode;
  indicator?: React.ReactNode | null;
  indicatorPlacement?: "start" | "end" | "inside";
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  checked?: ArkCheckbox.RootProps["checked"];
  defaultChecked?: ArkCheckbox.RootProps["defaultChecked"];
  onCheckedChange?: ArkCheckbox.RootProps["onCheckedChange"];
  value?: string;
  name?: string;
  disabled?: boolean;
}

export const CheckboxCard = ({
  ref,
  inputProps,
  label,
  description,
  icon,
  addon,
  indicator = <ArkCheckbox.Indicator />,
  indicatorPlacement = "end",
  checked,
  defaultChecked,
  onCheckedChange,
  value,
  name,
  disabled,
  ...rest
}: WithRef<CheckboxCardProps, HTMLInputElement>) => {
  const hasContent = label || description || icon;

  return (
    <ArkCheckbox.Root
      checked={checked}
      defaultChecked={defaultChecked}
      onCheckedChange={onCheckedChange}
      value={value}
      name={name}
      disabled={disabled}
      asChild
    >
      <CardRoot {...rest}>
        <ArkCheckbox.HiddenInput
          ref={ref}
          {...inputProps}
        />
        <CardControl>
          {indicatorPlacement === "start" && indicator && (
            <ArkCheckbox.Control>{indicator}</ArkCheckbox.Control>
          )}
          {hasContent && (
            <CardContent>
              {icon}
              {label && <CardLabel>{label}</CardLabel>}
              {description && <CardDescription>{description}</CardDescription>}
              {indicatorPlacement === "inside" && indicator && (
                <ArkCheckbox.Control>{indicator}</ArkCheckbox.Control>
              )}
            </CardContent>
          )}
          {indicatorPlacement === "end" && indicator && (
            <ArkCheckbox.Control>{indicator}</ArkCheckbox.Control>
          )}
        </CardControl>
        {addon && <CardAddon>{addon}</CardAddon>}
      </CardRoot>
    </ArkCheckbox.Root>
  );
};

export const CheckboxCardIndicator = ArkCheckbox.Indicator;
