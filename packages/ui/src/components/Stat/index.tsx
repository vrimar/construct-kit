import { ark } from "@ark-ui/react/factory";
import type { ComponentProps } from "react";
import React from "react";
import { InfoIcon } from "lucide-react";
import { styled } from "styled-system/jsx";
import type { WithRef } from "../../types";
import { Badge, type BadgeProps } from "../Badge";
import { IconButton } from "../Buttons";
import { ToggleTip } from "../ToggleTip";

const StatRoot = styled(ark.div, {
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "1",
  },
});

const StatHelpText = styled(ark.span, {
  base: {
    textStyle: "xs",
    color: "fg.muted",
  },
});

const StatValueUnit = styled(ark.span, {
  base: {
    textStyle: "sm",
    fontWeight: "normal",
    color: "fg.muted",
  },
});

type StatLabelBaseProps = ComponentProps<typeof styled.span>;

interface StatLabelProps extends StatLabelBaseProps {
  info?: React.ReactNode;
}

const StatLabelRoot = styled(ark.span, {
  base: {
    textStyle: "sm",
    color: "fg.muted",
    display: "inline-flex",
    alignItems: "center",
    gap: "1",
  },
});

function StatLabel({ ref, info, children, ...rest }: WithRef<StatLabelProps>) {
  return (
    <StatLabelRoot
      {...rest}
      ref={ref}
    >
      {children}
      {info && (
        <ToggleTip content={info}>
          <IconButton
            variant="plain"
            aria-label="info"
            size="2xs"
          >
            <InfoIcon />
          </IconButton>
        </ToggleTip>
      )}
    </StatLabelRoot>
  );
}

const StatValueTextRoot = styled(ark.span, {
  base: {
    textStyle: "2xl",
    fontWeight: "semibold",
    verticalAlign: "baseline",
    lineHeight: "tight",
  },
});

type StatValueTextBaseProps = ComponentProps<typeof StatValueTextRoot>;

interface StatValueTextProps extends StatValueTextBaseProps {
  value?: number;
  formatOptions?: Intl.NumberFormatOptions;
}

function StatValueText({
  ref,
  value,
  formatOptions,
  children,
  ...rest
}: WithRef<StatValueTextProps>) {
  return (
    <StatValueTextRoot
      {...rest}
      ref={ref}
    >
      {children || (value != null && new Intl.NumberFormat(undefined, formatOptions).format(value))}
    </StatValueTextRoot>
  );
}

const UpIndicator = styled(ark.span, {
  base: {
    _before: { content: '"▲"' },
    fontSize: "xs",
  },
});

const DownIndicator = styled(ark.span, {
  base: {
    _before: { content: '"▼"' },
    fontSize: "xs",
  },
});

function StatUpTrend({ ref, children, ...props }: WithRef<BadgeProps>) {
  return (
    <Badge
      colorPalette="green"
      gap="0"
      {...props}
      ref={ref}
    >
      <UpIndicator />
      {children}
    </Badge>
  );
}

function StatDownTrend({ ref, children, ...props }: WithRef<BadgeProps>) {
  return (
    <Badge
      colorPalette="red"
      gap="0"
      {...props}
      ref={ref}
    >
      <DownIndicator />
      {children}
    </Badge>
  );
}

export const Stat = {
  Root: StatRoot,
  Label: StatLabel,
  ValueText: StatValueText,
  UpTrend: StatUpTrend,
  DownTrend: StatDownTrend,
  HelpText: StatHelpText,
  ValueUnit: StatValueUnit,
};
