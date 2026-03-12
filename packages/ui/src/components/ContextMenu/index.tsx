import { AbsoluteCenter, Box, Menu as ChakraMenu, Portal } from "@chakra-ui/react";
import React from "react";
import { LuCheck, LuChevronRight } from "react-icons/lu";
import type { WithRef } from "../../types";

export interface ContextMenuRootProps extends Omit<ChakraMenu.RootProps, "positioning"> {
  positioning?: ChakraMenu.RootProps["positioning"];
}

function ContextMenuRoot(props: ContextMenuRootProps) {
  return (
    <ChakraMenu.Root
      lazyMount
      unmountOnExit
      {...props}
    />
  );
}

export interface ContextMenuContentProps extends ChakraMenu.ContentProps {
  portalled?: boolean;
  portalRef?: React.RefObject<HTMLElement>;
}

function ContextMenuContent({
  ref,
  portalled = true,
  portalRef,
  ...rest
}: WithRef<ContextMenuContentProps>) {
  return (
    <Portal
      disabled={!portalled}
      container={portalRef}
    >
      <ChakraMenu.Positioner>
        <ChakraMenu.Content
          animation="none"
          ref={ref}
          {...rest}
        />
      </ChakraMenu.Positioner>
    </Portal>
  );
}

function ContextMenuCheckboxItem({
  ref,
  children,
  ...props
}: WithRef<ChakraMenu.CheckboxItemProps>) {
  return (
    <ChakraMenu.CheckboxItem
      ref={ref}
      {...props}
    >
      <ChakraMenu.ItemIndicator hidden={false}>
        <LuCheck />
      </ChakraMenu.ItemIndicator>
      {children}
    </ChakraMenu.CheckboxItem>
  );
}

function ContextMenuRadioItem({ ref, children, ...rest }: WithRef<ChakraMenu.RadioItemProps>) {
  return (
    <ChakraMenu.RadioItem
      cursor="pointer"
      ps="8"
      ref={ref}
      {...rest}
    >
      <AbsoluteCenter
        axis="horizontal"
        left="4"
        asChild
      >
        <ChakraMenu.ItemIndicator>
          <LuCheck />
        </ChakraMenu.ItemIndicator>
      </AbsoluteCenter>
      <ChakraMenu.ItemText>{children}</ChakraMenu.ItemText>
    </ChakraMenu.RadioItem>
  );
}

export interface ContextMenuItemProps extends ChakraMenu.ItemProps {
  icon?: React.ReactNode;
}

function ContextMenuItem({ ref, icon, children, ...rest }: WithRef<ContextMenuItemProps>) {
  return (
    <ChakraMenu.Item
      cursor="pointer"
      {...rest}
      ref={ref}
    >
      {icon}
      <Box flex="1">{children}</Box>
    </ChakraMenu.Item>
  );
}

function ContextMenuItemGroup({
  ref,
  title,
  children,
  ...rest
}: WithRef<ChakraMenu.ItemGroupProps>) {
  return (
    <ChakraMenu.ItemGroup
      ref={ref}
      {...rest}
    >
      {title && <ChakraMenu.ItemGroupLabel userSelect="none">{title}</ChakraMenu.ItemGroupLabel>}
      {children}
    </ChakraMenu.ItemGroup>
  );
}

export interface ContextMenuTriggerItemProps extends ChakraMenu.ItemProps {
  startIcon?: React.ReactNode;
}

function ContextMenuTriggerItem({
  ref,
  startIcon,
  children,
  ...rest
}: WithRef<ContextMenuTriggerItemProps>) {
  return (
    <ChakraMenu.TriggerItem
      ref={ref}
      {...rest}
    >
      {startIcon}
      {children}
      <LuChevronRight />
    </ChakraMenu.TriggerItem>
  );
}

export const ContextMenu = {
  Root: ContextMenuRoot,
  Trigger: ChakraMenu.ContextTrigger,
  Content: ContextMenuContent,
  Item: ContextMenuItem,
  CheckboxItem: ContextMenuCheckboxItem,
  RadioItem: ContextMenuRadioItem,
  RadioItemGroup: ChakraMenu.RadioItemGroup,
  ItemGroup: ContextMenuItemGroup,
  TriggerItem: ContextMenuTriggerItem,
  Separator: ChakraMenu.Separator,
  ItemText: ChakraMenu.ItemText,
  ItemCommand: ChakraMenu.ItemCommand,
};
