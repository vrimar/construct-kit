import { ark } from "@ark-ui/react/factory";
import {
  Group,
  Panel,
  Separator,
  type GroupProps,
  type PanelProps,
  type SeparatorProps,
} from "react-resizable-panels";
import { styled, type HTMLStyledProps } from "styled-system/jsx";

const StyledDiv = styled(ark.div);
type BoxProps = HTMLStyledProps<"div">;

export type SplitterGroupProps = Pick<
  GroupProps,
  | "defaultLayout"
  | "disableCursor"
  | "disabled"
  | "elementRef"
  | "groupRef"
  | "onLayoutChange"
  | "onLayoutChanged"
  | "orientation"
  | "resizeTargetMinimumSize"
> &
  BoxProps;

function SplitterGroup({
  children,
  defaultLayout,
  disableCursor,
  disabled,
  elementRef,
  groupRef,
  onLayoutChange,
  onLayoutChanged,
  orientation,
  resizeTargetMinimumSize,
  ...boxProps
}: SplitterGroupProps) {
  return (
    <StyledDiv
      asChild
      {...boxProps}
    >
      <Group
        defaultLayout={defaultLayout}
        disableCursor={disableCursor}
        disabled={disabled}
        elementRef={elementRef}
        groupRef={groupRef}
        onLayoutChange={onLayoutChange}
        onLayoutChanged={onLayoutChanged}
        orientation={orientation}
        resizeTargetMinimumSize={resizeTargetMinimumSize}
      >
        {children}
      </Group>
    </StyledDiv>
  );
}

export type SplitterPanelProps = Pick<
  PanelProps,
  | "collapsedSize"
  | "collapsible"
  | "defaultSize"
  | "disabled"
  | "elementRef"
  | "groupResizeBehavior"
  | "id"
  | "maxSize"
  | "minSize"
  | "onResize"
  | "panelRef"
> &
  BoxProps;

function SplitterPanel({
  children,
  collapsedSize,
  collapsible,
  defaultSize,
  disabled,
  elementRef,
  groupResizeBehavior,
  id,
  maxSize,
  minSize,
  onResize,
  panelRef,
  ...boxProps
}: SplitterPanelProps) {
  return (
    <StyledDiv
      asChild
      {...boxProps}
    >
      <Panel
        collapsedSize={collapsedSize}
        collapsible={collapsible}
        defaultSize={defaultSize}
        disabled={disabled}
        elementRef={elementRef}
        groupResizeBehavior={groupResizeBehavior}
        id={id}
        maxSize={maxSize}
        minSize={minSize}
        onResize={onResize}
        panelRef={panelRef}
      >
        {children}
      </Panel>
    </StyledDiv>
  );
}

export type SplitterSeparatorProps = Pick<SeparatorProps, "disabled" | "elementRef" | "id"> &
  BoxProps;

function SplitterSeparator({ disabled, elementRef, id, ...boxProps }: SplitterSeparatorProps) {
  return (
    <StyledDiv
      asChild
      {...boxProps}
    >
      <Separator
        disabled={disabled}
        elementRef={elementRef}
        id={id}
      />
    </StyledDiv>
  );
}

export const Splitter = {
  Group: SplitterGroup,
  Panel: SplitterPanel,
  Separator: SplitterSeparator,
};
