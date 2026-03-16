import { ScrollArea as ArkScrollArea } from "@ark-ui/react/scroll-area";
import { createStyleContext, type HTMLStyledProps } from "styled-system/jsx";
import { scrollArea, type ScrollAreaVariantProps } from "styled-system/recipes";
import type { WithRef } from "../../types";

const { withProvider, withContext } = createStyleContext(scrollArea);

const Root = withProvider(ArkScrollArea.Root, "root");
const Viewport = withContext(ArkScrollArea.Viewport, "viewport");
const Content = withContext(ArkScrollArea.Content, "content");
const Scrollbar = withContext(ArkScrollArea.Scrollbar, "scrollbar");
const Thumb = withContext(ArkScrollArea.Thumb, "thumb");
const Corner = withContext(ArkScrollArea.Corner, "corner");

export interface ScrollAreaProps extends HTMLStyledProps<"div">, ScrollAreaVariantProps {
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
    <Root {...props}>
      <Viewport
        ref={ref}
        style={{
          overflowX: horizontalEnabled ? undefined : "hidden",
          overflowY: verticalEnabled ? undefined : "hidden",
        }}
      >
        <Content
          width={horizontalEnabled ? undefined : "100%"}
          minWidth={horizontalEnabled ? undefined : "100%"}
        >
          {children}
        </Content>
      </Viewport>
      {verticalEnabled && (
        <Scrollbar
          key="vertical"
          orientation="vertical"
        >
          <Thumb />
        </Scrollbar>
      )}
      {horizontalEnabled && (
        <Scrollbar
          key="horizontal"
          orientation="horizontal"
        >
          <Thumb />
        </Scrollbar>
      )}
      <Corner />
    </Root>
  );
};
