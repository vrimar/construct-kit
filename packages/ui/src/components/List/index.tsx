import { ark } from "@ark-ui/react/factory";
import { styled } from "styled-system/jsx";

const ListRoot = styled(ark.ul);
const ListItem = styled(ark.li);

export const List = Object.assign(ListRoot, {
  Root: ListRoot,
  Item: ListItem,
});
