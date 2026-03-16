import { Dialog as ArkDialog, DialogContext, useDialogContext } from "@ark-ui/react/dialog";
import { ark } from "@ark-ui/react/factory";
import { type ComponentProps } from "react";
import { createStyleContext, styled } from "styled-system/jsx";
import { dialog } from "styled-system/recipes";
import type { WithRef } from "../../types";

const { withRootProvider, withContext } = createStyleContext(dialog);

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

const StyledButton = styled(ark.button);

function ActionTrigger({
  ref,
  ...props
}: WithRef<ComponentProps<typeof StyledButton>, HTMLButtonElement>) {
  const dialog = useDialogContext();
  return (
    <StyledButton
      {...props}
      ref={ref}
      onClick={() => dialog.setOpen(false)}
    />
  );
}

export type DialogRootProps = ComponentProps<typeof Root>;
export type DialogContentProps = ComponentProps<typeof Content>;

export const Dialog = {
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
  ActionTrigger,
  Context: DialogContext,
};
