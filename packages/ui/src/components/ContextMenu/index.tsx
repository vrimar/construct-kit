import { Portal } from "@ark-ui/react/portal";
import { CheckIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import { Box } from "styled-system/jsx";
import type { WithRef } from "../../types";
import { AbsoluteCenter } from "../Layout/AbsoluteCenter";
import * as ArkMenu from "../Menu";

export interface ContextMenuRootProps extends Omit<ArkMenu.RootProps, "positioning"> {
  positioning?: ArkMenu.RootProps["positioning"];
}

function ContextMenuRoot(props: ContextMenuRootProps) {
  return <ArkMenu.Root {...props} />;
}

export interface ContextMenuContentProps extends React.ComponentProps<typeof ArkMenu.Content> {
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
      <ArkMenu.Positioner>
        <ArkMenu.Content
          animation="none"
          ref={ref}
          {...rest}
        />
      </ArkMenu.Positioner>
    </Portal>
  );
}

function ContextMenuCheckboxItem({
  ref,
  children,
  ...props
}: WithRef<React.ComponentProps<typeof ArkMenu.CheckboxItem>>) {
  return (
    <ArkMenu.CheckboxItem
      ref={ref}
      {...props}
    >
      <ArkMenu.ItemIndicator>
        <CheckIcon />
      </ArkMenu.ItemIndicator>
      {children}
    </ArkMenu.CheckboxItem>
  );
}

function ContextMenuRadioItem({
  ref,
  children,
  ...rest
}: WithRef<React.ComponentProps<typeof ArkMenu.RadioItem>>) {
  return (
    <ArkMenu.RadioItem
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
        <ArkMenu.ItemIndicator>
          <CheckIcon />
        </ArkMenu.ItemIndicator>
      </AbsoluteCenter>
      <ArkMenu.ItemText>{children}</ArkMenu.ItemText>
    </ArkMenu.RadioItem>
  );
}

export interface ContextMenuItemProps extends React.ComponentProps<typeof ArkMenu.Item> {
  icon?: React.ReactNode;
}

function ContextMenuItem({ ref, icon, children, ...rest }: WithRef<ContextMenuItemProps>) {
  return (
    <ArkMenu.Item
      cursor="pointer"
      {...rest}
      ref={ref}
    >
      {icon}
      <Box flex="1">{children}</Box>
    </ArkMenu.Item>
  );
}

function ContextMenuItemGroup({
  ref,
  title,
  children,
  ...rest
}: WithRef<React.ComponentProps<typeof ArkMenu.ItemGroup>>) {
  return (
    <ArkMenu.ItemGroup
      ref={ref}
      {...rest}
    >
      {title && <ArkMenu.ItemGroupLabel userSelect="none">{title}</ArkMenu.ItemGroupLabel>}
      {children}
    </ArkMenu.ItemGroup>
  );
}

export interface ContextMenuTriggerItemProps extends React.ComponentProps<typeof ArkMenu.Item> {
  startIcon?: React.ReactNode;
}

function ContextMenuTriggerItem({
  ref,
  startIcon,
  children,
  ...rest
}: WithRef<ContextMenuTriggerItemProps>) {
  return (
    <ArkMenu.TriggerItem
      ref={ref}
      {...rest}
    >
      {startIcon}
      {children}
      <ChevronRightIcon />
    </ArkMenu.TriggerItem>
  );
}

export const ContextMenu = {
  Root: ContextMenuRoot,
  Trigger: ArkMenu.ContextTrigger,
  Content: ContextMenuContent,
  Item: ContextMenuItem,
  CheckboxItem: ContextMenuCheckboxItem,
  RadioItem: ContextMenuRadioItem,
  RadioItemGroup: ArkMenu.RadioItemGroup,
  ItemGroup: ContextMenuItemGroup,
  TriggerItem: ContextMenuTriggerItem,
  Separator: ArkMenu.Separator,
  ItemText: ArkMenu.ItemText,
};
