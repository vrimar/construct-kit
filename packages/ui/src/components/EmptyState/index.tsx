import { ark } from "@ark-ui/react/factory";
import type { ComponentProps } from "react";
import { styled } from "styled-system/jsx";

const Root = styled(ark.div, {
  base: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "3",
    py: "12",
    px: "6",
  },
});

const Content = styled(ark.div, {
  base: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1",
  },
});

const Indicator = styled(ark.div, {
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "fg.muted",
    "& svg": {
      width: "8",
      height: "8",
    },
  },
});

const Title = styled(ark.h3, {
  base: {
    fontWeight: "semibold",
    textStyle: "lg",
    color: "fg",
  },
});

const Description = styled(ark.p, {
  base: {
    textStyle: "sm",
    color: "fg.muted",
    textAlign: "center",
  },
});

export type EmptyStateRootProps = ComponentProps<typeof Root>;

export const EmptyState = {
  Root,
  Content,
  Indicator,
  Title,
  Description,
};
