import { Dialog as ArkDialog, DialogContext } from "@ark-ui/react/dialog";
import { ark } from "@ark-ui/react/factory";
import type { ComponentProps } from "react";
import { createStyleContext } from "styled-system/jsx";
import { drawer } from "styled-system/recipes";

const { withRootProvider, withContext } = createStyleContext(drawer);

const Root = withRootProvider(ArkDialog.Root, {
  defaultProps: { unmountOnExit: true, lazyMount: true },
});
const RootProvider = withRootProvider(ArkDialog.RootProvider, {
  defaultProps: { unmountOnExit: true, lazyMount: true },
});
const Backdrop = withContext(ArkDialog.Backdrop, "backdrop");
const CloseTrigger = withContext(ArkDialog.CloseTrigger, "closeTrigger");
const Content = withContext(ArkDialog.Content, "content");
const Description = withContext(ArkDialog.Description, "description");
const Positioner = withContext(ArkDialog.Positioner, "positioner");
const Title = withContext(ArkDialog.Title, "title");
const Trigger = withContext(ArkDialog.Trigger, "trigger");
const Body = withContext(ark.div, "body");
const Header = withContext(ark.div, "header");
const Footer = withContext(ark.div, "footer");

export type DrawerRootProps = ComponentProps<typeof Root>;
export type DrawerContentProps = ComponentProps<typeof Content>;

export const Drawer = {
  Root,
  RootProvider,
  Backdrop,
  CloseTrigger,
  Content,
  Description,
  Positioner,
  Title,
  Trigger,
  Body,
  Header,
  Footer,
  Context: DialogContext,
};
