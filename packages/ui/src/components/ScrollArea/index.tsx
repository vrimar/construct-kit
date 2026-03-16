import { ark } from "@ark-ui/react/factory";
import { ScrollArea as ArkScrollArea } from "@ark-ui/react/scroll-area";
import { styled, type HTMLStyledProps } from "styled-system/jsx";
import type { WithRef } from "../../types";

const StyledDiv = styled(ark.div);

export interface ScrollAreaProps extends HTMLStyledProps<"div"> {
  horizontalEnabled?: boolean;
  verticalEnabled?: boolean;
}

export const ScrollArea = ({
  ref,
  children,
  verticalEnabled = true,
  horizontalEnabled = true,
  ...props
}: WithRef<ScrollAreaProps>) => {
  return (
    <StyledDiv
      asChild
      position="relative"
      overflow="hidden"
      {...props}
    >
      <ArkScrollArea.Root>
        <StyledDiv
          asChild
          width="100%"
          height="100%"
          rounded="inherit"
          css={{
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          <ArkScrollArea.Viewport ref={ref}>
            <ArkScrollArea.Content>{children}</ArkScrollArea.Content>
          </ArkScrollArea.Viewport>
        </StyledDiv>
        {verticalEnabled && (
          <StyledDiv
            key="vertical"
            asChild
            display="flex"
            userSelect="none"
            bg="bg.subtle"
            transition="background 160ms ease-out"
            width="2"
            css={{
              opacity: 0,
              pointerEvents: "none",
              "&[data-hover], &[data-scrolling]": {
                opacity: 1,
                pointerEvents: "auto",
              },
            }}
          >
            <ArkScrollArea.Scrollbar orientation="vertical">
              <StyledDiv
                asChild
                flex="1"
                position="relative"
                bg="border"
                borderRadius="sm"
              >
                <ArkScrollArea.Thumb />
              </StyledDiv>
            </ArkScrollArea.Scrollbar>
          </StyledDiv>
        )}
        {horizontalEnabled && (
          <StyledDiv
            key="horizontal"
            asChild
            display="flex"
            userSelect="none"
            bg="bg.muted"
            transition="background 160ms ease-out"
            height="2"
            flexDirection="column"
            css={{
              opacity: 0,
              pointerEvents: "none",
              "&[data-hover], &[data-scrolling]": {
                opacity: 1,
                pointerEvents: "auto",
              },
            }}
          >
            <ArkScrollArea.Scrollbar orientation="horizontal">
              <StyledDiv
                asChild
                flex="1"
                position="relative"
                bg="border"
                borderRadius="sm"
              >
                <ArkScrollArea.Thumb />
              </StyledDiv>
            </ArkScrollArea.Scrollbar>
          </StyledDiv>
        )}
        <ArkScrollArea.Corner />
      </ArkScrollArea.Root>
    </StyledDiv>
  );
};
