import { AbsoluteCenter, Box, Menu as ChakraMenu, Portal } from "@chakra-ui/react";
import React from "react";
import { LuCheck, LuChevronRight } from "react-icons/lu";
import type { WithRef } from "../../types";

export interface MenuRootProps extends ChakraMenu.RootProps {
  placement?: NonNullable<ChakraMenu.RootProps["positioning"]>["placement"];
}

function MenuRoot({ placement, ...props }: MenuRootProps) {
  return (
    <ChakraMenu.Root
      lazyMount
      unmountOnExit
      positioning={{ placement }}
      {...props}
    />
  );
}

export interface MenuContentProps extends ChakraMenu.ContentProps {
  portalled?: boolean;
  portalRef?: React.RefObject<HTMLElement>;
}

function MenuContent({ ref, portalled = true, portalRef, ...rest }: WithRef<MenuContentProps>) {
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

function MenuArrow({ ref, ...props }: WithRef<ChakraMenu.ArrowProps>) {
  return (
    <ChakraMenu.Arrow
      ref={ref}
      {...props}
    >
      <ChakraMenu.ArrowTip />
    </ChakraMenu.Arrow>
  );
}

function MenuCheckboxItem({ ref, children, ...props }: WithRef<ChakraMenu.CheckboxItemProps>) {
  return (
    <ChakraMenu.CheckboxItem
      ref={ref}
      cursor="pointer"
      {...props}
    >
      <ChakraMenu.ItemIndicator>
        <LuCheck />
      </ChakraMenu.ItemIndicator>
      {children}
    </ChakraMenu.CheckboxItem>
  );
}

function MenuRadioItem({ ref, children, ...rest }: WithRef<ChakraMenu.RadioItemProps>) {
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

export interface MenuItemProps extends ChakraMenu.ItemProps {
  icon?: React.ReactNode;
}

function MenuItem({ ref, icon, children, ...rest }: WithRef<MenuItemProps>) {
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

function MenuItemGroup({ ref, title, children, ...rest }: WithRef<ChakraMenu.ItemGroupProps>) {
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

export interface MenuTriggerItemProps extends ChakraMenu.ItemProps {
  startIcon?: React.ReactNode;
}

function MenuTriggerItem({ ref, startIcon, children, ...rest }: WithRef<MenuTriggerItemProps>) {
  return (
    <ChakraMenu.TriggerItem
      ref={ref}
      {...rest}
    >
      {startIcon}
      <Box flex="1">{children}</Box>
      <LuChevronRight />
    </ChakraMenu.TriggerItem>
  );
}

export const Menu = {
  Root: MenuRoot,
  Content: MenuContent,
  Arrow: MenuArrow,
  CheckboxItem: MenuCheckboxItem,
  RadioItem: MenuRadioItem,
  Item: MenuItem,
  ItemGroup: MenuItemGroup,
  TriggerItem: MenuTriggerItem,
  RadioItemGroup: ChakraMenu.RadioItemGroup,
  ContextTrigger: ChakraMenu.ContextTrigger,
  Separator: ChakraMenu.Separator,
  ItemText: ChakraMenu.ItemText,
  ItemCommand: ChakraMenu.ItemCommand,
  Trigger: ChakraMenu.Trigger,
};
